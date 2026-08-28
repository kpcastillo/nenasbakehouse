# Photography

Drop real photos into `public/images/` and reference them from `src/data/*.js` (the `image`
fields) and `src/pages/index.astro`. Until then the site renders labelled
placeholder frames at the correct crop ratios.

Suggested set and crops:

| File                     | Used for                     | Crop | Min size    |
| ------------------------ | ---------------------------- | ---- | ----------- |
| `hero.jpg`               | Hero plate                   | 4:5  | 1600×2000   |
| `cake-vanilla.jpg`       | Vanilla Birthday Cake        | 3:4  | 1200×1600   |
| `cake-chocolate.jpg`     | Chocolate Chocolate Crunch   | 3:4  | 1200×1600   |
| `cake-banana.jpg`        | Banana Cajeta Praline        | 3:4  | 1200×1600   |
| `cake-olive-oil.jpg`     | Olive Oil Citrus             | 3:4  | 1200×1600   |
| `cake-dulce.jpg`         | Dulce de Leche Croustillant  | 3:4  | 1200×1600   |
| `everyday-cookies.jpg`   | Cookies                      | 1:1  | 1400×1400   |
| `everyday-rolls.jpg`     | Cinnamon Rolls               | 4:5  | 1400×1750   |
| `everyday-loaf.jpg`      | Loaf Cakes                   | 1:1  | 1400×1400   |
| `everyday-mini.jpg`      | Individual Cakes             | 4:5  | 1400×1750   |

Export at ~80% JP/WebP quality. Keep each file under ~400 KB.
