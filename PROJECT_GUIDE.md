# Project Guide

Astro website for Made by CKT.

## Structure

```text
src/
├── pages/              Pages and URLs
├── components/         Reusable UI
├── layouts/            Shared page layouts
├── content/
│   ├── blog/           Blog posts
│   └── work/           Portfolio projects
├── lib/                Content helpers
├── styles/global.css   Global styles/design tokens
├── site.config.ts      Site details, URL, metadata
└── content.config.ts   Content field definitions

public/                 Images and static files

.github/workflows/      GitHub Pages deployment
```

## Usually edit

* Homepage: `src/pages/index.astro`, `src/components/landing/`
* Site details: `src/site.config.ts`
* Images: `public/`
* Blog: `src/content/blog/`
* Portfolio: `src/content/work/`
* Header: `src/components/Header.astro`
* Footer: `src/components/Footer.astro`
* Colours/fonts: `src/styles/global.css`
* New pages: `src/pages/`

## Usually leave alone

`src/layouts/`, `src/lib/`, `src/content.config.ts`, `astro.config.mjs`, `tsconfig.json`, and `.github/workflows/`.

Check existing files before creating new ones.

## Important

Content collections are defined by `src/content.config.ts`.

The site uses npm and GitHub Pages. The deployment workflow builds `dist/`.

Do not change deployment configuration unless required or explicitly requested.

When removing a feature, check its related pages, components, content and helpers before deleting anything.
