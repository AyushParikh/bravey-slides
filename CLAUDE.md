# CLAUDE.md — bravey-slides

This folder contains TikTok slideshow assets for Bravey's social content strategy.

## Folder Structure

```
bravey-slides/
├── tiktok-slides.html       # Slideshow 1: "90% of SaaS startups fail" (indigo theme)
├── tiktok-slides-2.html     # Slideshow 2: "Why your startup isn't growing" (orange theme)
├── tiktok-slides-3.html     # Slideshow 3: "How to get your first 100 customers" (green theme)
├── tiktok-slides-4.html     # Slideshow 4: "3 numbers every founder ignores" (rose theme)
├── tiktok-slides/           # Exported PNGs for slideshow 1 (slide-0 to slide-4)
├── tiktok-slides-2/         # Exported PNGs for slideshow 2
├── tiktok-slides-3/         # Exported PNGs for slideshow 3
├── tiktok-slides-4/         # Exported PNGs for slideshow 4
├── bravey-landing.png       # Product screenshot used on CTA slides
├── export-slides.mjs        # Puppeteer script — exports slideshow 1
└── export-slides-2-3.mjs    # Puppeteer script — exports slideshows 2, 3 & 4
```

## Slideshows

Each slideshow is 5 slides (9:16, 405×720px, exported at 3× = 1215×2160):
- Slide 0: Cover / hook
- Slides 1–3: Tips / points
- Slide 4: CTA → logo + bravey-landing.png + "Try for free at bravey.co"

| File | Theme | Topic |
|------|-------|-------|
| tiktok-slides.html | Indigo / Barlow Condensed | 90% of SaaS startups fail — 3 rules for starting a SaaS |
| tiktok-slides-2.html | Orange / Bebas Neue | Why your startup isn't growing |
| tiktok-slides-3.html | Emerald / Syne | How to get your first 100 customers |
| tiktok-slides-4.html | Rose / Space Grotesk | 3 numbers every founder ignores (CAC, LTV:CAC, Churn) |

## Re-exporting PNGs

Requires `puppeteer` (installed in the bravey-frontend repo):

```bash
# From bravey-frontend root:
node ~/Desktop/bravey-slides/export-slides.mjs
node ~/Desktop/bravey-slides/export-slides-2-3.mjs
```

Or install puppeteer standalone:
```bash
npm init -y && npm install puppeteer
```

## Adding a New Slideshow

Use `/new-bravey-slide` to have Claude generate one automatically, or manually:

1. Duplicate one of the HTML files and change the theme colors / copy
2. Add an entry to `export-slides-2-3.mjs` in the `sets` array
3. Re-run the export script
