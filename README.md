# Creator Website

Front-end prototype of a creator marketplace and creator business operating system.

Temporary product name: **Creator Website**. Dark neutral UI with electric blue and violet accents. Public discovery is media-forward; creator and platform dashboards are information-dense.

This repository is a **mock-data UI only**. It is not a production marketplace.

## Requirements

- Node.js 22+
- npm 10+

## Getting started

```bash
npm install
npm run dev
```

Dev server: [http://localhost:3000](http://localhost:3000)

## Scripts

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `npm run dev`       | Development server (port 3000) |
| `npm run build`     | Production build               |
| `npm start`         | Serve the production build     |
| `npm run lint`      | ESLint                         |
| `npm run typecheck` | `tsc --noEmit`                 |

## Prototype limits (mandatory)

- Mock catalog and in-memory UI state only (cart, saved items, demo role, and simulated orders live in React state for the session)
- No real authentication, database, Stripe, email, OAuth, file uploads, or analytics
- No collection, transmission, logging, or persistence of real personal or financial information
- No secrets, API keys, or credentials in the repo
- Simulated cart, checkout, bookings, downloads, messages, and integrations are labeled **demo**
- Planned launch posture documented in-product: United States, USD, ages 18+

## Routes

**Public**

- `/` discovery feed
- `/products`, `/products/[slug]`
- `/services`, `/services/[slug]`
- `/creators`, `/creators/[slug]`
- `/cart`, `/checkout`
- `/terms`, `/privacy`

**Creator studio (demo)** — default fictional creator: Elena Voss

- `/dashboard` and nested analytics, products, services, orders, customers, portfolio, content, onboarding, settings

**Buyer (demo)** — fictional buyer: Jordan Blake

- `/buyer`, `/buyer/orders`, `/buyer/library`, `/buyer/saved`, `/buyer/bookings`

**Platform admin (demo)**

- `/admin`, `/admin/creators`, `/admin/catalog`, `/admin/orders`, `/admin/reports`, `/admin/settings`

The **Demo View** switcher (Creator / Buyer / Platform Admin) is local UI state. It is not authentication or authorization.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. No extra UI or data libraries.

## Cloud Agent environment

[`.cursor/environment.json`](.cursor/environment.json) runs `npm ci` and `npm run dev` on port 3000.
