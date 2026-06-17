import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const brandDir = join(root, "assets", "brand");
const uiAssetsDir = join(root, "vendor", "@askjeeves", "ui", "assets");

const faviconSource = join(brandDir, "favicon.png");
const favicon16Source = join(brandDir, "favicon-16x16.png");
const appleTouchSource = join(brandDir, "apple-touch-icon.png");

mkdirSync(publicDir, { recursive: true });
mkdirSync(uiAssetsDir, { recursive: true });

const brand = "#8c5cf5";
const brandDark = "#6b3fd4";

function buildSvg(width, height, titleSize, subtitleSize) {
	return Buffer.from(`
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${brand}" />
      <stop offset="100%" stop-color="${brandDark}" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)" />
  <text x="50%" y="42%" text-anchor="middle" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-size="${titleSize}" font-weight="700">Free Secure JSON Converter</text>
  <text x="50%" y="58%" text-anchor="middle" fill="#f3ecff" font-family="Segoe UI, Arial, sans-serif" font-size="${subtitleSize}" font-weight="500">Free · Secure · In-browser</text>
  <text x="50%" y="78%" text-anchor="middle" fill="#e8dcff" font-family="Segoe UI, Arial, sans-serif" font-size="${Math.round(subtitleSize * 0.85)}" font-weight="500">Ask Jeeves</text>
</svg>`);
}

await sharp(buildSvg(1200, 630, 72, 34))
	.png()
	.toFile(join(publicDir, "og.png"));

await sharp(appleTouchSource)
	.resize(180, 180, { fit: "cover", position: "centre" })
	.png({ compressionLevel: 9 })
	.toFile(join(publicDir, "apple-touch-icon.png"));

await sharp(faviconSource)
	.resize(32, 32, { fit: "cover", position: "centre" })
	.png({ compressionLevel: 9 })
	.toFile(join(publicDir, "favicon.ico"));

await sharp(favicon16Source)
	.png({ compressionLevel: 9 })
	.toFile(join(publicDir, "favicon-16x16.png"));

await sharp(faviconSource)
	.resize(32, 32, { fit: "cover", position: "centre" })
	.png({ compressionLevel: 9 })
	.toFile(join(uiAssetsDir, "favicon-32x32.png"));

console.log(
	"Generated public/og.png, favicon.ico, favicon-16x16.png, apple-touch-icon.png, and vendor favicon-32x32.png",
);
