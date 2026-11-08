# Photos for the site

Every place for a photo is already built.

- **On the live site** a missing photo is never shown as an empty block. The section switches to a text-only layout (for example the home hero shows a product sheet, and "Two Oils" shows a text row).
- **While you work on your computer** (`npm run dev`) you see a patterned block with the scene name where each missing photo will go, so you can see the layout.
- When you add a file with the exact name below and deploy, the photo appears and the section switches to its photo layout. No code change is needed.

**How to add a photo**

1. Save it as WebP in `public/images/` (so the path is `public/images/<file name>`).
2. Use the exact file name from the table.
3. Long side at least **1600 px** (exact sizes below). Keep each file under about 400 KB: export at quality 80.
4. Keep the subject in the middle third of the frame. The site crops photos slightly on small screens.
5. No logos of other brands, no text burnt into the picture, no stock photos, no watermarks, no seals.

## Main photos

| File name | Ratio | Size (px) | Where it appears | What the photo must show |
|---|---|---|---|---|
| `hero-argan-oil.webp` | 4:5 (portrait) | 1280 x 1600 | Home hero (replaces the product sheet) | Bottles of your argan oil next to whole argan kernels, on a plain warm surface. Natural window light. |
| `argan-oil-bulk.webp` | 4:3 | 1600 x 1200 | Home "Two Oils", Products page card, top of the Bulk Argan Oil page | Your argan oil in the formats you sell in bulk: a jerrycan or drum beside a few filled bottles. **Until you add this file, the home page uses your current bottles photo (`argan-oil-bottles-morocco.webp`, 600 px wide) in "Two Oils" only.** |
| `prickly-pear-seed-oil.webp` | 4:3 | 1600 x 1200 | Home "Two Oils", Products page card, top of the Prickly Pear page | A dropper bottle of prickly pear seed oil with a real cactus fruit and seeds next to it. Show the real colour of the oil. |
| `private-label-bottles.webp` | 4:3 | 1600 x 1200 | Home Private Label band, top of the Private Label page | A row of finished bottles with blank labels or a sample label, ready to be branded. Same bottle types you offer. |
| `bulk-containers.webp` | 3:2 (landscape) | 1600 x 1067 | Wholesale page, "Who We Supply" | Your jerrycans and drums as packed for shipping: closed, clean, stacked, batch number visible if possible. |
| `workshop-pressing.webp` | 3:2 | 1600 x 1067 | About page photo grid (tall photo, cropped to a portrait shape: keep the subject centred) | Cold pressing of argan kernels in your workshop: the press, the kernels, the oil. The real place. |
| `team-packing.webp` | 3:2 | 1600 x 1067 | About page photo grid | Your team packing cartons of oil for shipping. Faces are optional; hands and boxes are enough. |
| `filling-labelling.webp` | 3:2 | 1600 x 1067 | Private Label "How It Works" and the About page photo grid | Bottles being filled and labelled by hand or on your line, close up and sharp. |

The About page photo grid appears only when **all three** About photos exist (`workshop-pressing`, `team-packing`, `filling-labelling`).

## "From Kernel to Bottle" step photos (home page, small squares)

Each step shows its photo above the number when the file exists. The photos are independent: add any of them.

| File name | Ratio | Size (px) | What the photo must show |
|---|---|---|---|
| `step-kernels.webp` | 1:1 | 1600 x 1600 | Argan nuts being cracked, or cracked kernels in a hand or bowl. |
| `step-cold-pressing.webp` | 1:1 | 1600 x 1600 | The press working: kernels going in, oil coming out. |
| `step-resting-filtering.webp` | 1:1 | 1600 x 1600 | Oil resting in a container, or being filtered. |
| `step-filling-batch.webp` | 1:1 | 1600 x 1600 | A bottle or container being filled, with the batch number label visible. |

## Shooting tips

- Shoot in daylight near a window, no flash. Use a plain wall or table.
- Take each photo twice: one wide, one close. Send both and I will choose.
- Phone cameras are fine if the lens is clean. Hold the phone level.
- Convert to WebP at squoosh.app, or send me the originals and I will do it.
