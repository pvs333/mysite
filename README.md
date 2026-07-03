# My Website Made With React + TypeScript + Vite

## GitHub Pages

This project is intended to be deployed from the built `dist` folder, not from the source `index.html`.

If the published site is blank and the browser console shows requests for `/src/main.tsx`, GitHub Pages is serving the wrong source. Fix that by using one of these deployment paths:

1. Enable GitHub Pages for the repository to use GitHub Actions, then push to `main` so `.github/workflows/deploy.yml` publishes `dist` automatically.
2. Or run `npm run deploy` to publish the built site with `gh-pages`.

The configured Pages URL is `https://pvs333.github.io/mysite/`.

