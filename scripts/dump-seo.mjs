import fs from 'node:fs';
import path from 'node:path';

function read(rel) {
  const file = path.join('dist', rel, 'index.html');
  return fs.readFileSync(file, 'utf8');
}
function decode(s) {
  return (s || '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

const pages = [
  '/',
  '/cheats/',
  '/products/',
  '/hwid-spoofer/',
  '/ugc/',
  '/cloud-dma/',
  '/skin-changer/',
  '/blog/',
  '/forum/',
  '/faq/',
  '/about/',
  '/support/',
  '/privacy/',
  '/terms/',
];

for (const p of pages) {
  const html = read(p === '/' ? '.' : p.replace(/^\//, '').replace(/\/$/, ''));
  const title = decode(html.match(/<title>([^<]*)<\/title>/i)?.[1]);
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/i)?.[1]);
  const canon = html.match(/rel="canonical" href="([^"]*)"/i)?.[1];
  const h1 = decode(
    (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim(),
  );
  const h1Count = [...html.matchAll(/<h1\b/gi)].length;
  console.log(JSON.stringify({ p, title, h1, h1Count, canon, desc }));
}
