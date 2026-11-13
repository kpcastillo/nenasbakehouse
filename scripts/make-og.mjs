// Builds public/og.png (1200x630), the picture shown when a link to the site
// is shared. Uses the logo artwork on the polka-dot card pattern.
//   node scripts/make-og.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const logo = readFileSync(new URL('../public/nenas-logo.svg', import.meta.url), 'utf8')
  .replace(/<\?xml[^>]*\?>/, '')
  .replace(/<svg[^>]*>/, '<svg x="340" y="55" width="520" height="520" viewBox="0 0 1920 1920">');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><pattern id="d" width="56" height="56" patternUnits="userSpaceOnUse">
    <rect width="56" height="56" fill="#d3a15d"/>
    <circle cx="14" cy="14" r="11" fill="#f9f1da"/><circle cx="42" cy="42" r="11" fill="#f9f1da"/>
  </pattern></defs>
  <rect width="1200" height="630" fill="url(#d)"/>
  <rect x="250" y="40" width="700" height="556" rx="40" fill="#57390e"/>
  <rect x="250" y="34" width="700" height="556" rx="40" fill="#f9f1da"/>
  ${logo}
</svg>`;
await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile(new URL('../public/og.png', import.meta.url).pathname);
console.log('wrote public/og.png');
