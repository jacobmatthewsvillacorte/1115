# Our Little Monthsary

A romantic, mobile-first React/Vite love letter made for Janeille.

## Personalize

Edit [`src/data/config.ts`](./src/data/config.ts). It contains names, dates, the letter, gallery captions, love notes, timeline entries, the song filename, and all four activity cards. Relationship details that were not available are intentionally left as placeholders.

Replace the placeholder images in `public/images/` with your own files and update the `src` values in `config.ts`. Add your local song as `public/music/ang-wakas.mp3` (or change `music.filename`). The player never autoplays.

Activity prices are intentionally editable estimates. Confirm prices, availability, accessibility, travel, and booking details with each establishment before visiting.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

The Vite config uses relative asset paths (`base: './'`), so the site works from a repository subpath. Build with `npm run build`, then publish the generated `dist/` folder. A GitHub Actions workflow is included in `.github/workflows/deploy.yml`; enable **Settings → Pages → GitHub Actions** in the repository.
