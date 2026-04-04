# OriginX Labs

<p align="center">
  <img src="./public/originx-wordmark.png" alt="OriginX Labs" width="320" />
</p>

<p align="center">
  Official website platform for OriginX Labs Pvt. Ltd. building agentic AI systems, enterprise applications, digital products, and intelligent operating platforms.
</p>

<p align="center">
  <a href="https://originxlabs.com">Official Website</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=06151f" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-Enabled-88CE02?logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-16a34a" alt="Status" />
</p>

## Overview

This repository powers the main OriginX Labs web presence. It brings together the company landing experience, enterprise platform pages, solution pages, product pages, and service ecosystem pages into one branded frontend.

The site is designed to present OriginX Labs as:

- An enterprise AI and agentic systems company
- A multi-product SaaS platform builder
- A company with dedicated product, service, and ecosystem brands
- A polished digital presence with motion, media, trust messaging, and structured enterprise storytelling

## Products

| Product | Route | External | Details |
| --- | --- | --- | --- |
| PROXINEX | `/products/proxinex` | [proxinex.com](https://www.proxinex.com/) | AI intelligence control plane with routing, verification, governance, and AEON orchestration |
| COGNIX | `/products/cognix` | [getcognix.io](https://www.getcognix.io/) | AI backend platform for intelligent applications and enterprise-ready infrastructure |
| QUALYX | `/products/qualyx` | [getqualyx.com](https://www.getqualyx.com/) | AI-led quality and compliance platform |
| TRACEFLOW | `/products/traceflow` | [traceflowhq.com](https://www.traceflowhq.com/) | Digital cognition and real-time behavioral intelligence platform |
| CHRONYX | `/products/chronyx` | [getchronyx.com](https://www.getchronyx.com/) | Personal system of record and continuity intelligence workspace |
| HUMINEX | `/products/huminex` | `Configured in app` | AI workforce operating system for HR, payroll, finance, recruitment, and workforce operations |
| OPZENIX | `/products/opzenix` | [opzenix.com](https://www.opzenix.com/) | MLOps, LLMOps, and DevSecOps platform |
| ORIGINX ONE | `/products/originx-one` | [originxcloud.com](https://www.originxcloud.com/) | Unified API infrastructure for AI, messaging, identity, finance, and enterprise integrations |

## Services And Ecosystem

| Experience | Route | External | Details |
| --- | --- | --- | --- |
| CropXon | `/cropxon` | [cropxon.com](https://www.cropxon.com/) | Agriculture intelligence platform and ecosystem experience |
| Newstack | `/newstack` | [newstack.live](https://www.newstack.live/) | Live news intelligence and source-linked updates |
| StackCraft | `/stackcraft` | [stackcraft.io](https://www.stackcraft.io/) | Professional network and company platform for developers |
| Zenith | `/zenith` | `Internal page` | Digital business operating system experience |
| Services Hub | `/services` | `Internal page` | Central service layer for OriginX Labs offerings |
| Finioraa | `/services/finioraa` | `Internal page` | Personal finance operating system |
| CareersCraft | `/services/careerscraft` | `Internal page` | Career operating system and AI-guided career tooling |
| Convertix | `/services/convertix` | `Internal page` | Premium PDF and image workflow studio |
| Groovify | `/services/groovify` | `Internal page` | Music and lyrics app experience |

## Company And Platform Pages

### Company

- `/`
- `/about`
- `/leadership`
- `/consulting`
- `/trust`
- `/press`
- `/careers`
- `/contact`

### Platform

- `/platform/architecture`
- `/platform/intelligence`
- `/platform/autonomy`
- `/platform/security`
- `/platform/integrations`
- `/platform/huminex`

### Solutions

- `/solutions/enterprise`
- `/solutions/autonomous`
- `/solutions/regulated`
- `/solutions/scale`
- `/solutions/experience`

### Legal

- `/privacy`
- `/terms`
- `/refund-policy`

## Experience Highlights

- Enterprise-grade landing page and product storytelling
- Motion-led hero sections, parallax, and interactive product showcases
- Dedicated product pages with snapshots, demos, and buyer-facing structure
- Service and ecosystem pages with independent brand identity
- SEO-focused metadata, structured schema, and deployment-ready routing
- SPA support for Vercel and Netlify

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- GSAP
- React Router v6
- TanStack Query
- Radix UI
- `next-themes`
- Vitest + Testing Library

## Getting Started

### Requirements

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build For Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Tests

```bash
npm run test
```

### Run Lint

```bash
npm run lint
```

## Project Structure

```text
src/
  assets/              Logos, videos, previews, product snapshots, media
  components/          Shared UI, animated sections, layout, navigation, footer
  config/              Central brand, product, and ecosystem configuration
  hooks/               Scroll and animation hooks
  pages/               Company, product, platform, solution, and service routes
  test/                Vitest setup and test files
public/
  _redirects           Netlify SPA rewrites
  robots.txt           Crawl policy
  sitemap.xml          Search route map
vercel.json            Vercel SPA rewrites
```

## Deployment

- `vercel.json` handles Vercel SPA rewrites
- `public/_redirects` handles Netlify SPA rewrites
- Update `public/sitemap.xml` and `public/robots.txt` when adding new public routes

## Company

**OriginX Labs Pvt. Ltd.** builds agentic AI systems, enterprise SaaS products, intelligent infrastructure, and digital operating platforms with a focus on trust, design quality, and real-world usability.
