// Builds a single self-contained HTML file from `dist/` for sharing as a
// standalone preview (e.g. a Claude Artifact). Not part of the Netlify deploy.
//
//   npm run build && node scripts/make-preview.mjs
//   -> preview/nenas-home.preview.html
//
// Differences from the deployed site: CSS + favicon are inlined, and the
// Netlify inquiry form is intercepted to show an inline confirmation instead
// of POSTing (there's no Netlify backend behind a static file).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

let html = readFileSync(resolve(dist, 'index.html'), 'utf8');

// 1. inline the stylesheet
const cssMatch = html.match(/<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)">/);
const css = readFileSync(resolve(dist, cssMatch[1].slice(1)), 'utf8');
html = html.replace(cssMatch[0], `<style>${css}</style>`);

// 2. inline the favicon as a data URI
const favicon = readFileSync(resolve(dist, 'favicon.svg'), 'utf8');
const faviconData = 'data:image/svg+xml;base64,' + Buffer.from(favicon).toString('base64');
html = html.replace('href="/favicon.svg"', `href="${faviconData}"`);

// 3. pull out the pieces the standalone page needs
const headStyle = html.match(/<style>[\s\S]*?<\/style>/)[0];
const jsGuard = `<script>document.documentElement.classList.add('js');</script>`;
const jsonLd = html.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/)[0];
const fontLinks = [
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  html.match(/<link href="https:\/\/fonts\.googleapis\.com[^>]+>/)[0],
].join('\n');
const bodyInner = html.match(/<body>([\s\S]*)<\/body>/)[1];

// 4. preview-only: intercept the Netlify form submit, confirm inline
const previewScript = `<script>
(function () {
  var form = document.querySelector('form.inquiry__form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var wrap = document.getElementById('inquiry');
    wrap.innerHTML =
      '<div class="inquiry__grid"><div class="inquiry__intro in" style="grid-column:1 / span 8">' +
      '<span class="util">Order inquiry</span>' +
      '<p>Got it — thank you. On the live site this reaches Nenas Bakehouse by email, ' +
      'and you\\'d get a reply within two days with size, price, and a pickup window. ' +
      'Nothing is booked yet.</p>' +
      '<p class="fineprint">This is a preview — the form is wired to Netlify Forms once deployed.</p>' +
      '</div></div>';
    wrap.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
</script>`;

const out = `<title>Nenas Bakehouse</title>\n${fontLinks}\n${jsonLd}\n${headStyle}\n${jsGuard}\n${bodyInner}\n${previewScript}\n`;

mkdirSync(resolve(root, 'preview'), { recursive: true });
const dest = resolve(root, 'preview/nenas-home.preview.html');
writeFileSync(dest, out);
console.log(`wrote ${dest} (${out.length} bytes)`);
