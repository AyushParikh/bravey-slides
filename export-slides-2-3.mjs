import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SLIDE_W = 405;
const SLIDE_H = 720;
const TOTAL_SLIDES = 5;

const sets = [
  { file: 'tiktok-slides-2.html', folder: 'tiktok-slides-2' },
  { file: 'tiktok-slides-3.html', folder: 'tiktok-slides-3' },
  { file: 'tiktok-slides-4.html', folder: 'tiktok-slides-4' },
];

const browser = await puppeteer.launch({ headless: true });

for (const { file, folder } of sets) {
  const outDir = join(__dirname, folder);
  mkdirSync(outDir, { recursive: true });

  const page = await browser.newPage();
  await page.setViewport({ width: SLIDE_W, height: SLIDE_H, deviceScaleFactor: 3 });
  await page.goto(`file://${join(__dirname, file)}`, { waitUntil: 'networkidle0' });
  await page.addStyleTag({ content: '.controls, .hint { display: none !important; }' });

  for (let i = 0; i < TOTAL_SLIDES; i++) {
    await page.evaluate((idx) => {
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.dot');
      slides.forEach((s, n) => s.classList.toggle('active', n === idx));
      dots.forEach((d, n) => d.classList.toggle('active', n === idx));
    }, i);

    await new Promise(r => setTimeout(r, 500));

    const stage = await page.$('.stage');
    await stage.screenshot({ path: join(outDir, `slide-${i}.png`) });
    console.log(`✓ ${folder}/slide-${i}.png`);
  }

  await page.close();
}

await browser.close();
console.log('\nDone.');
