# New Bravey TikTok Slideshow

Create a new 5-slide TikTok slideshow for Bravey following the established pattern in this repo.

## Steps

1. **Determine the next slide number** by checking which `tiktok-slides-N.html` files already exist. The new file should be `tiktok-slides-N.html` where N is one higher than the current max.

2. **Choose a fresh topic** — every topic must connect directly to **cold outbound, distribution, or getting leads/customers/users**. Bravey is a cold outbound distribution engine, so each slideshow should speak to founders trying to grow through outbound. Topics already used:
   - "90% of SaaS startups fail — 3 rules" (indigo)
   - "Why your startup isn't growing" (orange)
   - "How to get your first 100 customers" (green)
   - "3 numbers every founder ignores — CAC, LTV:CAC, Churn" (rose)
   - "Why founders undercharge" (amber)
   Good territory: cold email tactics, ICP definition, lead list building, outbound sequences, reply rates, LinkedIn outreach, warm vs cold leads, pipeline hygiene, personalization at scale, booking demos, first-reply frameworks.
   Pick something new, punchy, and directly actionable for a founder doing outbound.

3. **Choose a unique theme** — each slideshow must have a visually distinct color + font combo. Themes already used:
   - Indigo `#818cf8` · Barlow Condensed · dark bg `#07070c`
   - Orange `#f97316` · Bebas Neue · dark bg `#0c0a09`
   - Green `#10b981` · Syne · dark bg `#05100d`
   - Rose `#f43f5e` · Space Grotesk · dark bg `#0c0509`
   - Amber `#f59e0b` · Plus Jakarta Sans · dark bg `#0c0900`
   Pick a new accent color, Google Font pairing, and matching dark background. Good unused options: cyan/teal (Outfit), violet/purple (Clash Display or Cabinet Grotesk), slate/cool-white (Inter or Epilogue).

4. **Create `tiktok-slides-N.html`** using the same structure as existing files:
   - 405×720px slides, 5 slides total
   - Slide 0: Cover/hook — bold stat or number, punchy headline, subtitle, Bravey branding at bottom
   - Slides 1–3: Tip/point slides — metric or number label, rule title with accent em, divider, 2–3 bullet points with strong tags for emphasis, footer with `bravey.co` and `N / 3`
   - Slide 4: CTA — centered logo (`images/logo-white.png`), headline, "Try for free at bravey.co", `bravey-landing.png` screenshot
   - Navigation controls + keyboard arrows (copy JS block verbatim from existing files)
   - Noise texture overlay via SVG data URI on `.slide::before`
   - Glow blobs per slide using the accent color

5. **Add the new file to the export script** — open `export-slides-2-3.mjs` and add `{ file: 'tiktok-slides-N.html', folder: 'tiktok-slides-N' }` to the `sets` array.

6. **Update CLAUDE.md** — add a row to the Slideshows table for the new file.

7. **Export the PNGs** — run the export script from the repo root:
   ```bash
   node ~/Desktop/bravey-slides/export-slides-2-3.mjs
   ```
   This will create `tiktok-slides-N/slide-0.png` through `slide-4.png` at 1215×2160px (3×). Confirm all 5 files exist after it completes.

## Quality checklist
- [ ] Accent color is not reused from any prior slideshow
- [ ] Font family is not reused (at least the display/headline font must be new)
- [ ] Copy is punchy, specific, and credible — avoid generic filler
- [ ] Strong tags used to emphasize key phrases, not just bold everything
- [ ] CTA slide headline directly ties back to the slideshow topic
- [ ] Export script updated
- [ ] CLAUDE.md updated
- [ ] PNGs exported to `tiktok-slides-N/` (5 files: slide-0 through slide-4)
