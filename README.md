# Portfolio Website

Personal portfolio for Damian Soja — Senior Data Engineer.

## Quick Start

```bash
npm install
npm run dev
```

Site runs at http://localhost:4321.

## Deploy

```bash
npm run deploy
```

This builds the site and pushes the dist/ folder to the gh-pages branch.
Configure GitHub Pages to serve from gh-pages branch (root).

## Structure

portfolio-website/
├── public/             # Static assets (images, favicon, CNAME)
├── src/
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── styles/         # Global styles
│   └── data/           # Content data (projects, skills, experience)
├── astro.config.mjs    # Astro configuration
├── package.json        # Scripts and dependencies
└── tsconfig.json       # TypeScript config
