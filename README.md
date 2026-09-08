# creator-website

A modern personal website for a content creator, built with
[Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS v4.

It features a hero, selected-work grid, about section, and a working contact
form backed by an API route (`POST /api/contact`) that validates input and
returns a confirmation reference.

## Requirements

- Node.js 22+
- npm 10+

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:3000
```

## Scripts

| Command             | Description                                    |
| ------------------- | ---------------------------------------------- |
| `npm run dev`       | Start the development server (port 3000)       |
| `npm run build`     | Create a production build                      |
| `npm start`         | Serve the production build                     |
| `npm run lint`      | Run ESLint                                     |
| `npm run typecheck` | Type-check the project with `tsc --noEmit`     |

## Project structure

```
src/
  app/
    api/contact/route.ts   # Contact form endpoint (validation + response)
    layout.tsx             # Root layout, fonts, metadata
    page.tsx               # Landing page composition
    globals.css            # Theme tokens + Tailwind import
  components/
    ContactForm.tsx        # Client-side contact form
```

## Cloud Agent environment

The Cloud Agent development environment is defined in
[`.cursor/environment.json`](.cursor/environment.json): `npm ci` installs
dependencies and a `dev-server` terminal runs `npm run dev` on port 3000.
