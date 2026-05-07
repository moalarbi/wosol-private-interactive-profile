# WOSOL Concierge Interactive Company Profile

Static bilingual interactive company profile for WOSOL Concierge.

The project uses the supplied WOSOL Strategy Hub design system: cream-first executive document layout, deep navy emphasis, muted beige/gold accents, WOSOL wordmark treatment, premium cards, and calm presentation-style navigation.

## Files

```txt
index.html
style.css
script.js
README.md
vercel.json
.nojekyll
assets/
  image-prompts.md
  images/
docs/
  CLAUDE.md
  content-brief.md
  design.md
  implementation-checklist.md
  source-pdf-text.txt
  source-profile-summary.md
  structure.md
```

## Run Locally

Open `index.html` directly in a browser.

Optional local server:

```bash
python -m http.server 8080
```

Then open:

```txt
http://localhost:8080
```

## Content Editing

All bilingual profile content lives in `script.js`:

- `content.en` and `content.ar` control chapters, labels, process, contact, and section copy.
- `serviceBlueprints` controls all 16 services.
- Each service includes English and Arabic detail content.
- `imagePrompts` controls the image direction text and is mirrored in `assets/image-prompts.md`.

Default language is English. Arabic can be selected inside the profile and switches the page to `lang="ar"` and `dir="rtl"`.

## Replacing Images

The current build uses coded editorial placeholders so there are no broken image links.

To add real images:

1. Generate or source images using `assets/image-prompts.md`.
2. Save them in `assets/images/`.
3. Use the matching file names in `script.js`, for example:

```js
assets/images/private-aviation.jpg
assets/images/yacht-charters.jpg
assets/images/luxury-accommodation.jpg
```

4. Replace the `.visual-frame` placeholder rendering with `<img>` only after the files exist and usage rights are clear.

## GitHub Pages Deployment

1. Push this folder to a GitHub repository.
2. In GitHub, open repository `Settings`.
3. Go to `Pages`.
4. Choose `Deploy from a branch`.
5. Select the main branch and root folder.
6. Save.

The `.nojekyll` file is included so GitHub Pages serves the static files directly.

## Vercel Deployment

1. Import the repository into Vercel.
2. Use the default static project settings.
3. No build command is required.
4. Output directory should remain the project root.

`vercel.json` routes all paths to `index.html`, which keeps hash-based service panels and direct profile links stable.

## QA Checklist

- English is default.
- Arabic switch works and sets RTL.
- WOSOL wordmark remains LTR.
- No traditional website header or footer is used.
- All 16 services have dedicated detail panels.
- Services support search and category filtering.
- Contact details can be copied.
- The profile works without React, Tailwind, Bootstrap, or a build step.

