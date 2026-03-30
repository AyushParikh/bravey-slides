import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, 'tiktok-slides');
const htmlFile = join(__dirname, 'tiktok-slides.html');

mkdirSync(outDir, { recursive: true });

const SLIDE_W = 405;
const SLIDE_H = 720;
const TOTAL_SLIDES = 5;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: SLIDE_W, height: SLIDE_H, deviceScaleFactor: 3 });
await page.goto(`file://${htmlFile}`, { waitUntil: 'networkidle0' });

// Hide controls and hint
await page.addStyleTag({ content: '.controls, .hint { display: none !important; }' });

for (let i = 0; i < TOTAL_SLIDES; i++) {
  // Navigate to slide i
  await page.evaluate((idx) => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    slides.forEach((s, n) => s.classList.toggle('active', n === idx));
    dots.forEach((d, n) => d.classList.toggle('active', n === idx));
  }, i);

  // Wait for transition
  await new Promise(r => setTimeout(r, 500));

  const stagEl = await page.$('.stage');
  await stagEl.screenshot({ path: join(outDir, `slide-${i}.png`) });
  console.log(`✓ slide-${i}.png`);
}

await browser.close();
console.log(`\nAll slides saved to tiktok-slides/`);
