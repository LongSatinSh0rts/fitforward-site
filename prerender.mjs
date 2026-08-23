// Fitness Forward Miami — build-time prerender.
//
// Runs the compiled site once, here, in a headless DOM, and bakes the result
// into dist/index.html so the full page exists in the HTML source.
//
// Why: the site mounts with ReactDOM.createRoot().render(). Anything a crawler
// or link unfurler sees has to already be in the markup, because they do not
// execute JS. Before this step that was a hand-written fallback inside
// <div id="root"> — accurate on the day it was typed, and drifting ever since.
// Now the fallback IS the real render, regenerated on every build.
//
// The client still calls createRoot() and replaces this markup on load. That is
// intentional: no hydration contract to keep in sync, and the interactive site
// is unchanged.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { JSDOM, VirtualConsole } from 'jsdom';

const OUT = 'dist';
const DS = '_ds/fitness-forward-design-system-eb843fb7-3568-4712-8c0a-0fa6c7af94c9/_ds_bundle.js';

// React first, then the site's own scripts in the exact order index.html loads
// them — these files declare top-level globals that later files read.
// Resolved by path, not require.resolve: React's "exports" map hides ./umd/.
const SCRIPTS = [
  'node_modules/react/umd/react.production.min.js',
  'node_modules/react-dom/umd/react-dom.production.min.js',
  `${OUT}/${DS}`,
  `${OUT}/image-slot.js`,
  `${OUT}/logos.js`,
  `${OUT}/photos.js`,
  `${OUT}/tweaks-panel.js`,
  `${OUT}/kit.js`,
  `${OUT}/Sections.js`,
  `${OUT}/Sections2.js`,
  `${OUT}/Sections3.js`,
  `${OUT}/app.js`,
];

// A render this small means the app threw and we are about to ship a blank
// page. The hand-written fallback it replaces was ~2.4 KB.
const MIN_MARKUP = 4000;

const html = await readFile(`${OUT}/index.html`, 'utf8');

// Execution DOM: same markup, no script tags. We inject scripts ourselves so
// nothing reaches the network and the CDN tags (React, lucide, Lunacal) and
// inline analytics never run during the build.
// Script errors surface here rather than as exceptions, so collect them and
// fail on them below.
const scriptErrors = [];
const virtualConsole = new VirtualConsole();
virtualConsole.on('jsdomError', (err) => scriptErrors.push(err));

const dom = new JSDOM(html.replace(/<script[\s\S]*?<\/script>/gi, ''), {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  url: 'https://www.fitforwardmiami.com/',
  virtualConsole,
});
const { window } = dom;

// Real <script> elements, not window.eval. This matters: in sloppy-mode eval a
// top-level `const` lands in a private scope, so cross-file redeclarations that
// break the actual page pass silently here. Appending script nodes reproduces
// the browser's shared global scope, which is the whole point of running the
// site rather than just type-checking it.
const run = (code) => {
  const el = window.document.createElement('script');
  el.textContent = code;
  window.document.head.appendChild(el);
};

// Lucide draws icons from a useEffect, which does not run in a static render
// anyway. Stub it so the guard in kit.jsx takes the quiet path.
window.lucide = { createIcons() {} };
window.matchMedia ??= (query) => ({
  matches: false, media: query,
  addEventListener() {}, removeEventListener() {},
  addListener() {}, removeListener() {},
});

// index.html carries config in inline scripts — window.LUNACAL (booking links)
// and window.HUBSPOT (form ids) — which the sections read while rendering.
// They sit below the JSX tags in the document; run them first so the config is
// there before anything renders. Third-party embed loaders live in the same
// blocks and are harmless: jsdom fetches nothing, so appending a <script src>
// to head is a no-op here.
const INLINE = [...html.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi)]
  .filter(([, attrs]) => !/application\/ld\+json/i.test(attrs))
  .map(([, , body]) => body);

for (const body of INLINE) run(body);

// Third-party embed loaders live in those inline blocks and fail harmlessly
// under jsdom; only the site's own scripts are held to account.
scriptErrors.length = 0;

for (const path of SCRIPTS) run(await readFile(path, 'utf8'));

if (scriptErrors.length) {
  const detail = scriptErrors
    .map((e) => `  - ${e.detail?.message ?? e.message ?? e}`)
    .join('\n');
  throw new Error(
    `prerender: ${scriptErrors.length} script error(s) in the built site.\n${detail}\n\n` +
    `These break the page in a real browser too — the prerendered markup would ` +
    `hide it by leaving static content on screen while nothing mounts.`,
  );
}

// createRoot().render() is scheduled, not synchronous. Poll until the markup
// stops growing rather than guessing a fixed delay.
const root = window.document.getElementById('root');
let markup = '';
for (let i = 0; i < 40; i++) {
  await new Promise((r) => window.setTimeout(r, 25));
  const next = root.innerHTML;
  if (next === markup && next.length > MIN_MARKUP) break;
  markup = next;
}

if (markup.length < MIN_MARKUP) {
  throw new Error(
    `prerender: rendered only ${markup.length} chars (expected > ${MIN_MARKUP}). ` +
    `The app did not mount — refusing to ship a blank page.`,
  );
}

// The logos ship as base64 inside logos.js, so a straight render inlines them
// twice and turns a 15 KB document into 400 KB — paid on first byte, before
// anything is on screen. Write them out as real files instead: the crawler gets
// a fetchable image, the browser gets something cacheable, and the HTML stays
// small. Small URIs stay inline, where a round trip would cost more than they do.
await mkdir(`${OUT}/assets/prerender`, { recursive: true });
const EXT = {
  'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp',
  'image/svg+xml': 'svg', 'image/gif': 'gif', 'image/avif': 'avif',
};
let extracted = 0;
const before = markup.length;

markup = markup.replace(
  /data:([a-z/+.-]+);base64,([A-Za-z0-9+/=]+)/gi,
  (uri, mime, b64) => {
    if (uri.length < 2048) return uri;
    const buf = Buffer.from(b64, 'base64');
    const name = `${createHash('sha1').update(buf).digest('hex').slice(0, 10)}.${EXT[mime.toLowerCase()] ?? 'bin'}`;
    writeFileSync(`${OUT}/assets/prerender/${name}`, buf);
    extracted++;
    return `assets/prerender/${name}`;
  },
);

// Write the render back into the real document. Second JSDOM, no script
// execution: this one is only a parser, so the JSON-LD, meta tags and the
// Lunacal embed pass through untouched.
const out = new JSDOM(html);
out.window.document.getElementById('root').innerHTML = markup;
await writeFile(`${OUT}/index.html`, out.serialize());

dom.window.close();
out.window.close();

const sections = (markup.match(/<section/g) || []).length;
console.log(
  `Prerendered ${(markup.length / 1024).toFixed(1)} KB into #root — ${sections} sections, ` +
  `${extracted} image(s) extracted (${((before - markup.length) / 1024).toFixed(1)} KB of inline base64 removed).`,
);
