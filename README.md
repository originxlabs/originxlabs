# OriginX Labs Website

Official web platform for **OriginX Labs Pvt. Ltd.** with the core product suite, company pages, and the new **CROPXON** agriculture microsite.

![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=06151f)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Build](https://img.shields.io/badge/Build-Passing-16a34a)

## Quick Links

- Production: [originxlabs.com](https://originxlabs.com/)
- Agriculture microsite: [originxlabs.com/cropxon](https://originxlabs.com/cropxon)
- CropXon external site: [cropxon.com](https://www.cropxon.com/)
- Sitemap: [public/sitemap.xml](public/sitemap.xml)
- SPA rewrites:
`public/_redirects`, `vercel.json`

## Brand Colors

### OriginX Core Palette

| Token | HSL |
|---|---|
| `--primary` | `250 80% 55%` |
| `--secondary` | `210 60% 50%` |
| `--accent` | `280 70% 55%` |
| `--background` | `0 0% 100%` |
| `--foreground` | `220 30% 10%` |

### Product Accent Colors

| Product | Color |
|---|---|
| PROXINEX | `hsl(214 90% 56%)` |
| COGNIX | `hsl(210 100% 60%)` |
| TRACEFLOW | `hsl(330 70% 55%)` |
| QUALYX | `hsl(270 100% 65%)` |
| OPZENIX | `hsl(160 70% 45%)` |
| AEON | `hsl(250 80% 60%)` |

### CropXon Palette Used on `/cropxon`

| Token | HSL |
|---|---|
| Primary Green | `149 67% 34%` |
| Accent Gold | `42 90% 45%` |
| Dark Background | `160 30% 4%` |
| Light Background | `150 40% 98%` |

## Product & Ecosystem Links

### OriginX Product Suite

| Product | Product Page | Official Site |
|---|---|---|
| COGNIX | [/products/cognix](https://originxlabs.com/products/cognix) | [getcognix.io](https://www.getcognix.io/) |
| QUALYX | [/products/qualyx](https://originxlabs.com/products/qualyx) | [getqualyx.com](https://www.getqualyx.com/) |
| TRACEFLOW | [/products/traceflow](https://originxlabs.com/products/traceflow) | [traceflowhq.com](https://www.traceflowhq.com/) |
| OPZENIX | [/products/opzenix](https://originxlabs.com/products/opzenix) | [opzenix.com](https://www.opzenix.com/) |
| PROXINEX | [/products/proxinex](https://originxlabs.com/products/proxinex) | [proxinex.com](https://www.proxinex.com/) |
| AEON | [/products/aeon](https://originxlabs.com/products/aeon) | - |

### Ecosystem Products

| Product | Link |
|---|---|
| CHRONYX | [getchronyx.com](https://www.getchronyx.com/) |
| NEWSTACK | [newstack.live](https://www.newstack.live/) |
| CROPXON | [cropxon.com](https://www.cropxon.com/) |

## Route Map

### Core

- `/`
- `/cropxon`

### Products

- `/products/cognix`
- `/products/qualyx`
- `/products/traceflow`
- `/products/opzenix`
- `/products/aeon`
- `/products/proxinex`

### Platform

- `/platform/architecture`
- `/platform/intelligence`
- `/platform/autonomy`
- `/platform/security`
- `/platform/integrations`

### Solutions

- `/solutions/enterprise`
- `/solutions/autonomous`
- `/solutions/regulated`
- `/solutions/scale`
- `/solutions/experience`

### Company & Legal

- `/about`
- `/leadership`
- `/consulting`
- `/trust`
- `/press`
- `/careers`
- `/contact`
- `/privacy`
- `/terms`

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS + custom animation utilities
- next-themes for light/dark toggle
- React Router v6
- TanStack Query
- Radix UI primitives
- Vitest + Testing Library

## Local Development

### Requirements

- Node.js 18+
- npm

### Install

```sh
npm install
```

### Start dev server

```sh
npm run dev
```

### Build production

```sh
npm run build
```

### Preview production build

```sh
npm run preview
```

### Run tests

```sh
npm run test
```

### Lint

```sh
npm run lint
```

## Project Structure

```text
src/
  components/         # Reusable UI and sections (Hero, Navbar, Footer, Product cards)
  config/             # Centralized brand/product/agriculture config
  pages/              # Route-level pages (Index, Cropxon, product pages, company pages)
  assets/             # Logos, icons, media
public/
  _redirects          # Netlify SPA rewrite
  sitemap.xml         # SEO route map
  robots.txt          # Crawl policy
vercel.json           # Vercel SPA rewrite
```

## Deployment Notes

- **Vercel** rewrite already configured in `vercel.json`:
  - `/(.*) -> /`
- **Netlify** rewrite already configured in `public/_redirects`:
  - `/* /index.html 200`
- Keep `public/sitemap.xml` and `public/robots.txt` updated when adding routes.

## Branding & Content Guidelines

- Use logo/icon components instead of hardcoding product image paths where possible.
- Maintain visibility for both themes (light/dark) on logos and cards.
- Use centralized config files:
  - `src/config/brand.ts`
  - `src/config/products.ts`
  - `src/config/agriculture.ts`

## Company

**OriginX Labs Pvt. Ltd.**  
Next-generation AI & Agentic Systems company building autonomous intelligence with ethics at the core.
