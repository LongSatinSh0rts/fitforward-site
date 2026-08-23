// Local preview of dist/ — the built site, exactly as Netlify would publish it.
//
//   npm run serve   →   http://localhost:8788
//
// Useful for the one thing a build log cannot show you: whether the page still
// looks right after the JSX was compiled and the render was baked in. Disable
// JavaScript in devtools and reload to see what a crawler sees.

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const PORT = 8788;
const ROOT = 'dist';

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
};

createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  // normalize() collapses any ../ before it reaches the filesystem.
  const rel = normalize(url === '/' ? '/index.html' : url).replace(/^(\.\.[/\\])+/, '');
  const path = join(ROOT, rel);

  try {
    const body = await readFile(path);
    res.writeHead(200, { 'content-type': TYPES[extname(path)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    res.end(`404 — ${rel} is not in ${ROOT}/`);
  }
}).listen(PORT, () => {
  console.log(`Serving ${ROOT}/ at http://localhost:${PORT}  (ctrl-c to stop)`);
});
