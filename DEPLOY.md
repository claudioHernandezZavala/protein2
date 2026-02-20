# Deploy to GitHub Pages

This project is configured for [GitHub Pages](https://pages.github.com/) at:

**Repo:** https://github.com/claudioHernandezZavala/protein2  
**Site URL (after deploy):** `https://claudiohernandezzavala.github.io/protein2/`

## One-time setup

1. **Initialize git and add the remote** (if not already done):

   ```bash
   git init
   git remote add origin https://github.com/claudioHernandezZavala/protein2.git
   ```

2. **Enable GitHub Pages** in the repo:
   - Open https://github.com/claudioHernandezZavala/protein2
   - **Settings** → **Pages**
   - Under **Build and deployment** → **Source**: choose **Deploy from a branch**
   - **Branch**: select `gh-pages` and `/ (root)`
   - Save

## Deploy commands

From the project folder:

```bash
# Build and push the site to the gh-pages branch
npm run deploy
```

That command runs `vite build` then publishes the `dist` folder to the `gh-pages` branch. After a minute or two, the site will be live at:

**https://claudiohernandezzavala.github.io/protein2/**

## Local preview (with same base path as GitHub Pages)

```bash
npm run build
npm run preview
```

Then open the URL shown in the terminal (e.g. http://localhost:4173/protein2/).
