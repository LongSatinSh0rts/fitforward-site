// Fitness Forward Miami — post-build assertions.
//
// The failure this guards against is silent: a build that "succeeds" and ships
// a page with no content in it, or with the Babel tag quietly back. Both look
// fine in a browser and are invisible to a crawler, which is the one reader
// this whole build step exists for. So the build asserts, and fails loudly.

import { readFile, stat } from 'node:fs/promises';

const OUT = 'dist';
const html = await readFile(`${OUT}/index.html`, 'utf8');
const checks = [];
const check = (label, ok, detail = '') => checks.push({ label, ok, detail });

// 1. The thing we came here to fix.
const babelTags = (html.match(/text\/babel/g) || []).length;
check('no text/babel script tags', babelTags === 0, `found ${babelTags}`);
check('no Babel standalone from CDN', !/@babel\/standalone/.test(html));

// 2. Content actually present in the HTML source, not just reachable via JS.
const root = html.match(/<div id="root">([\s\S]*)<\/div>/);
const rootLen = root ? root[1].length : 0;
check('prerendered content in #root', rootLen > 20000, `${(rootLen / 1024).toFixed(1)} KB`);
check('exactly one <h1>', (html.match(/<h1[\s>]/g) || []).length === 1);

for (const phrase of ['Go beyond reason', 'Christopher Rosado', 'Discovery call', 'Miami']) {
  check(`copy present: "${phrase}"`, html.includes(phrase));
}

// 3. Page weight. The prerender inlines whatever the components inline, and
//    base64 has a habit of creeping back in.
const kb = html.length / 1024;
check('index.html under 120 KB', kb < 120, `${kb.toFixed(1)} KB`);

// 4. The two files that were 404ing, plus the header rules the live deploy log
//    keeps reporting as absent.
for (const file of ['robots.txt', 'sitemap.xml', '_headers']) {
  const ok = await stat(`${OUT}/${file}`).then(() => true, () => false);
  check(`${file} published`, ok);
}
const sitemap = await readFile(`${OUT}/sitemap.xml`, 'utf8').catch(() => '');
check('sitemap points at canonical host', sitemap.includes('https://www.fitforwardmiami.com/'));

// 5. Metadata a link unfurler or search result needs.
for (const [label, re] of [
  ['<title>', /<title>[^<]{10,}<\/title>/],
  ['meta description', /<meta[^>]+name="description"[^>]+content="[^"]{50,}"/],
  ['canonical link', /<link[^>]+rel="canonical"/],
  ['og:image', /<meta[^>]+property="og:image"/],
  ['JSON-LD schema', /application\/ld\+json/],
]) {
  check(`${label} intact`, re.test(html));
}

const failed = checks.filter((c) => !c.ok);
for (const c of checks) {
  console.log(`  ${c.ok ? '[ok]' : '[X] '} ${c.label}${c.detail && !c.ok ? ` — ${c.detail}` : c.detail ? ` (${c.detail})` : ''}`);
}

if (failed.length) {
  console.error(`\n${failed.length} check(s) failed — not fit to deploy.`);
  process.exit(1);
}
console.log(`\nAll ${checks.length} checks passed. dist/ is deployable.`);
