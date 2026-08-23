# fitforwardmiami.com

The marketing site for Fitness Forward by CJR. One page, plain scripts, React
from a CDN — deliberately simple. The only thing added here is a build step, so
that simplicity stops being paid for by every visitor and every crawler.

## The problem this repo fixes

The deployed site loaded `@babel/standalone` (~1.5 MB) from unpkg and transpiled
six JSX files **in the browser, on every visit**. The build step to avoid that
already existed as `build.mjs` — it had just never been wired into a deploy, so
the site went out as raw source. Verified live on 2026-08-23: six `text/babel`
tags still being served.

Two smaller things were also true: `/robots.txt` and `/sitemap.xml` both
returned 404, and everything below the hero existed only after React mounted,
behind a hand-written static fallback that had to be kept in sync by hand.

## The build

```bash
npm install
npm run build     # → dist/, the folder Netlify publishes
```

Three stages, each of which can fail the build:

1. **`build.mjs`** — esbuild compiles each `.jsx` to `.js`. No bundling: the
   files rely on shared top-level globals and must stay separate, in order.
   Rewrites `index.html` to point at the compiled files, drops the Babel tag,
   and generates `sitemap.xml`. Throws if any `text/babel` tag survives.
2. **`prerender.mjs`** — runs the compiled site once in jsdom and bakes the
   result into `<div id="root">`, so the full page is in the HTML source for
   crawlers and link unfurlers. Large base64 images are written out as real
   files instead of being inlined twice. Refuses to write a render under 4 KB.
3. **`verify.mjs`** — 17 assertions on `dist/`: no Babel, content present, one
   `<h1>`, page under 120 KB, robots and sitemap published, metadata intact.

```bash
npm run serve     # → http://localhost:8788, serves dist/ as Netlify would
```

To see what a crawler sees, load that with JavaScript disabled in devtools.

## Deploying

Push to `main`. Netlify builds from this repo and publishes `dist/`, per
`netlify.toml` (`command = "npm run build"`, `publish = "dist"`).

That indirection is the point. The site previously deployed by dropping a
folder into Netlify, which never ran a build — which is exactly how it ended up
serving raw JSX with a browser-side transpiler in front of it. A build that only
runs when someone remembers to run it will eventually not run.

If a deploy ever has to happen without Git, build locally first (`npm run
build`, which refuses to emit a broken `dist/`) and deploy that folder — never
the repo root.

**Verify in a browser after deploying, not with curl.** Both bugs this build
step exposed produced perfectly valid HTML and a page that did not work.

## Two things worth knowing before you touch the JSX

**These are plain scripts sharing one global scope.** They are not modules.
A top-level `const` in one file collides with a `function` of the same name in
another and kills the entire script — silently, because the prerendered markup
stays on screen while nothing mounts. Babel-in-the-browser hid this class of bug
by rewriting `const` to `var`; the build does not. `app.jsx` is wrapped in an
IIFE for exactly this reason. Prerendering executes real `<script>` elements
rather than `eval` so these fail the build instead of reaching production.

**The prerendered markup is not hydrated.** The client still calls
`createRoot().render()` and replaces it. That is intentional — there is no
hydration contract to keep in sync — but it means the prerender is for readers
who do not run JS, not a performance optimization for those who do.

## Layout

| Path | What it is |
|---|---|
| `index.html` | Document shell: metadata, JSON-LD, CDN tags, config, mount point |
| `app.jsx` | Section order and mount |
| `Sections*.jsx` | The page content |
| `kit.jsx` | Shared `Icon`, `Kicker`, `Reveal` |
| `tweaks-panel.jsx` | In-editor tweak UI; renders `null` unless a host opens it |
| `_ds/` | Design-system bundle (`window.FitnessForwardDesignSystem_eb843f`) |
| `logos.js`, `photos.js`, `image-slot.js` | Image data and helpers |
| `assets/` | Real image files |
