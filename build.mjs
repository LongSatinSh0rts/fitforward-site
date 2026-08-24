// Fitness Forward Miami — production build.
//
// Translates the JSX once, here, instead of in every visitor's browser.
// Output lands in dist/ and is what Netlify publishes.
//
//   node build.mjs
//
// What it does:
//   1. esbuild transforms each .jsx into plain .js (no bundling — the files
//      rely on top-level globals and must stay separate, in order).
//   2. Static files are copied across verbatim.
//   3. index.html is rewritten: text/babel script tags become normal script
//      tags pointing at the .js output, and the Babel CDN tag is dropped.

import { build } from 'esbuild';
import { cp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';

const OUT = 'dist';

const JSX = [
  'tweaks-panel.jsx',
  'kit.jsx',
  'Sections.jsx',
  'Sections2.jsx',
  'Sections3.jsx',
  'app.jsx',
];

const STATIC = [
  'assets',
  '_ds',
  'logos.js',
  'photos.js',
  'image-slot.js',
  'og-image.jpg',
  'robots.txt',
  'llms.txt',
];

// One page, one canonical URL. The sitemap is generated rather than checked in,
// so lastmod cannot quietly go stale.
const SITE_URL = 'https://fitforwardmiami.com/';

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

// 1. JSX → JS. No --bundle: each file keeps its own script tag and its
//    top-level declarations stay global, exactly as the browser sees them now.
await build({
  entryPoints: JSX,
  outdir: OUT,
  loader: { '.jsx': 'jsx' },
  jsx: 'transform',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  target: ['es2019'],
  minify: true,
  logLevel: 'info',
});

// 2. Static passthrough.
for (const path of STATIC) {
  await cp(path, `${OUT}/${path}`, { recursive: true });
}

// 3. Rewrite index.html for the compiled output.
let html = await readFile('index.html', 'utf8');

// `defer` is load-bearing, not tidiness. Babel-standalone processed text/babel
// scripts after the document had parsed, so app.jsx ran *after* the inline
// config blocks lower down the page — which is where window.LUNACAL and
// window.HUBSPOT are defined. A plain <script src> runs during parsing instead,
// so the app would render before that config exists and throw on
// window.LUNACAL.discovery, blanking the page. Deferred scripts run after
// parsing, in order, which is exactly the timing Babel used to provide.
for (const file of JSX) {
  const js = file.replace(/\.jsx$/, '.js');
  html = html.split(`<script type="text/babel" src="${file}"></script>`)
             .join(`<script defer src="${js}"></script>`);
}

// Babel is no longer needed at runtime — that is the whole point.
html = html.replace(
  /<script src="https:\/\/unpkg\.com\/@babel\/standalone[^>]*><\/script>\n?/,
  ''
);

const leftover = html.match(/text\/babel/g);
if (leftover) {
  throw new Error(`${leftover.length} text/babel tag(s) left in index.html — check the JSX list in build.mjs`);
}

await writeFile(`${OUT}/index.html`, html);

// 4. Sitemap. One entry, because there is one page — but its absence was a
//    404 that search engines were checking for.
const lastmod = new Date().toISOString().slice(0, 10);
await writeFile(
  `${OUT}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `  <url>\n` +
  `    <loc>${SITE_URL}</loc>\n` +
  `    <lastmod>${lastmod}</lastmod>\n` +
  `    <changefreq>monthly</changefreq>\n` +
  `    <priority>1.0</priority>\n` +
  `  </url>\n` +
  `</urlset>\n`,
);

// 5. Header rules, written into the publish directory as well as netlify.toml.
//    netlify.toml is only read from the repo root, so a deploy that uploads
//    dist/ on its own silently drops every header — which is what the live
//    site's deploy log ("No header rules processed") has been reporting.
//    A _headers file inside dist/ survives either deploy style.
await writeFile(
  `${OUT}/_headers`,
  [
    '/assets/prerender/*',
    '  Cache-Control: public, max-age=31536000, immutable',
    '',
    '/index.html',
    '  Cache-Control: public, max-age=0, must-revalidate',
    '',
    '/*',
    '  X-Content-Type-Options: nosniff',
    '  Referrer-Policy: strict-origin-when-cross-origin',
    '',
  ].join('\n'),
);

console.log(`\nBuilt ${OUT}/ — ${JSX.length} scripts compiled, Babel removed, sitemap ${lastmod}.`);
