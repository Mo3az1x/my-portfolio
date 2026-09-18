# Moaz Osama Elkholy — Portfolio

Static personal portfolio. No build step, no npm install.

## Where to edit your information

**Almost everything lives in one file:** [`js/content.js`](js/content.js)

Update that file to change:

- Name, role, about text, education
- Profile photo path
- Email, phone, GitHub, LinkedIn, CV
- Skills
- Projects (titles, descriptions, tech, images, GitHub/demo links)
- Training / experience
- Certificates

Comments at the top of `js/content.js` explain each field.

You should **not** need to edit `js/app.js`, `js/render.js`, or `js/project.js` for content updates.

## Replace or add images

1. Put files under `assets/images/`:
   - Profile: `assets/images/profile.jpg`
   - Project covers/gallery: `assets/images/projects/<project-folder>/`
   - Certificates: `assets/images/certificates/`
2. Point to them from `js/content.js` (`image`, `gallery`, or certificate `image`).
3. Keep the same filename to replace in place, or change the path in `js/content.js`.

If a file is missing, the site shows a placeholder instead of a broken image.

To add a **new project**: copy an object in the `projects` array in `js/content.js`, set a unique `id`, then copy any existing file in `projects/` and set `data-project-id` on `<body>` to that same id.

## Run locally

From this folder:

```bash
python -m http.server 5500
```

Open http://127.0.0.1:5500/

You can also open `index.html` directly in a browser.

## Deploy (public URL)

This is a static site. Use any of:

### GitHub Pages (recommended if the repo is on GitHub)

1. Create a GitHub repository and push this folder (branch `main`).
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` publishes the site on every push to `main`.
4. Public URL will look like `https://<username>.github.io/<repo>/`

If the site is in a project repo (not `username.github.io`), keep using relative paths as they are now.

### Netlify

- Drag this folder onto [Netlify Drop](https://app.netlify.com/drop), or connect the GitHub repo.
- Publish directory: `/` (site root). `netlify.toml` is already set.

### Vercel

- Import the GitHub repo at [vercel.com](https://vercel.com) or run `npx vercel` in this folder.
- Framework preset: Other. Output: site root.

After the first deploy, later updates go live when you push to `main` (GitHub/Netlify/Vercel git integration) or drag-and-drop a new folder.

## Structure

```
js/content.js          ← edit me
js/app.js              home page renderer
js/project.js          project page renderer
js/render.js           shared UI
css/styles.css
index.html
projects/*.html        thin pages; content comes from content.js
assets/images/         photos and project media
assets/Moaz_Elkholy_CV.pdf
```

Original copies of earlier photos also remain in `images/` if you need them.
