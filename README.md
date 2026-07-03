# Rasha Faheem — Portfolio

A dark, code-editor-inspired portfolio for **Rasha Faheem**, Automation Engineer & Full-Stack Developer. Built with Next.js, Tailwind CSS, and Framer Motion — terminal windows, syntax-highlighted skill tabs, a git-log-styled experience timeline, and a browser-chrome frame for every project screenshot.

**Live site:** _add your deployed URL here_

## Features

- **Hero** — typewriter status line, animated ambient gradients, JSDoc-style summary block
- **About** — real headshot in a terminal-tab frame, professional summary rendered as `about.md`
- **Capabilities** — interactive tabbed code viewer (`skills.js`) with syntax-highlight colors
- **Services** — four-card grid of what I help teams with
- **Work** — featured client projects (Tiphaus, Zenleaf Dispensaries), personal/practice projects, and a dedicated Final Year Project section, each screenshot framed at its true aspect ratio
- **Experience** — `git log --oneline` styled career timeline with fake commit hashes
- **Contact** — terminal-form (`send.sh`) that opens a pre-filled email, plus direct links
- **Resume download** — one-click `resume.pdf` button in the hero
- Lenis smooth scrolling wired to in-page anchor links, dark theme throughout, reduced-motion support

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- [Lucide](https://lucide.dev) + [react-icons](https://react-icons.github.io/react-icons/) for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
src/
  app/            # App Router entry (layout, page, metadata, sitemap, robots)
  components/     # Section components (Hero, About, Skills, Projects, ...)
  components/ui/  # Reusable primitives (WindowChrome, Reveal, MagneticButton, ...)
  lib/             # Content data (data.js) and scroll helper
public/            # Images, resume PDF
```

All page content — bio, skills, projects, experience, links — lives in [`src/lib/data.js`](src/lib/data.js), so copy can be updated without touching component code.

## Build

```bash
npm run build
npm run start
```

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/new) (zero config) or any Node.js host that supports Next.js.
