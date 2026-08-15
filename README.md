# Cybersecurity & Data Portfolio

A modern, dark-themed portfolio website built for a data and cybersecurity student. Features a terminal-inspired aesthetic, smooth scroll animations, and a clean, responsive design.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — fast build tool and dev server
- **Tailwind CSS** — utility-first styling with a custom cybersecurity color system
- **Lucide React** — icon library

## Features

- Animated terminal hero section with typewriter effect
- Scroll-triggered reveal animations throughout
- Filterable skills section with animated progress bars
- Project cards with GitHub links and tech stack tags
- Certifications display
- Contact form (opens email client)
- Fully responsive (mobile, tablet, desktop)
- Cybersecurity visual theme: grid backgrounds, scan lines, neon accents

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Customization

All personal content — name, bio, skills, projects, certifications, and social links — is centralized in a single file:

```
src/data/portfolio.ts
```

Edit this file to make the portfolio yours. No need to dig through components.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts      ← Edit this to customize
├── hooks/
│   └── useReveal.ts       ← Scroll animation hook
├── App.tsx
├── main.tsx
└── index.css
```

## Deployment

This project builds to a static `dist/` folder with `npm run build`. You can deploy it to:

- **GitHub Pages** — push the `dist/` folder to a `gh-pages` branch
- **Netlify** — drag and drop the `dist/` folder, or connect your repo
- **Vercel** — import the repo and deploy

## License

MIT — feel free to use this as a template for your own portfolio.
