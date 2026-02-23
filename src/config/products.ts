// Centralized product configuration for consistent branding across the site
// When admin changes a logo, it automatically updates across all components

import cognixIcon from "@/assets/cognix-logo.png";
import qualyxIcon from "@/assets/qualyx-icon.svg";
import traceflowIcon from "@/assets/traceflow-logo.png";
import opzenixIcon from "@/assets/opzenix-logo.png";
import proxinexIcon from "@/assets/proxinex-icon.svg";
import chronyxIcon from "@/assets/chronyx-icon.svg";

import proxinexLogoTransparent from "@/assets/proxinex-icon.svg";

export interface ProductConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  logo: string;
  logoTransparent: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  href: string;
  externalUrl?: string;
}

export const products: Record<string, ProductConfig> = {
  cognix: {
    id: "cognix",
    name: "COGNIX",
    tagline: "AI Backend as a Service",
    description: "Intelligent infrastructure that scales with your ambition. COGNIX provides a complete backend platform optimized for AI workloads.",
    icon: cognixIcon,
    logo: cognixIcon,
    logoTransparent: cognixIcon,
    gradientFrom: "hsl(210 100% 60%)",
    gradientTo: "hsl(190 100% 50%)",
    accentColor: "hsl(210 100% 60%)",
    href: "/products/cognix",
    externalUrl: "https://www.getcognix.io/",
  },
  qualyx: {
    id: "qualyx",
    name: "QUALYX",
    tagline: "AI QA as a Service",
    description: "Autonomous testing that learns your codebase and evolves with your application. Zero false positives, complete coverage.",
    icon: qualyxIcon,
    logo: qualyxIcon,
    logoTransparent: qualyxIcon,
    gradientFrom: "hsl(270 100% 65%)",
    gradientTo: "hsl(280 70% 55%)",
    accentColor: "hsl(270 100% 65%)",
    href: "/products/qualyx",
    externalUrl: "https://www.getqualyx.com/",
  },
  traceflow: {
    id: "traceflow",
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description: "Map, understand, and optimize every digital interaction with real-time intelligence at the edge.",
    icon: traceflowIcon,
    logo: traceflowIcon,
    logoTransparent: traceflowIcon,
    gradientFrom: "hsl(330 70% 55%)",
    gradientTo: "hsl(350 70% 50%)",
    accentColor: "hsl(330 70% 55%)",
    href: "/products/traceflow",
    externalUrl: "https://www.traceflowhq.com/",
  },
  opzenix: {
    id: "opzenix",
    name: "OPZENIX",
    tagline: "MLOps, LLMOps, DevSecOps",
    description: "Self-healing agents for your entire ML pipeline. Autonomous operations with enterprise-grade security.",
    icon: opzenixIcon,
    logo: opzenixIcon,
    logoTransparent: opzenixIcon,
    gradientFrom: "hsl(160 70% 45%)",
    gradientTo: "hsl(170 80% 40%)",
    accentColor: "hsl(160 70% 45%)",
    href: "/products/opzenix",
    externalUrl: "https://www.opzenix.com/",
  },
  chronyx: {
    id: "chronyx",
    name: "CHRONYX",
    tagline: "Personal System of Record",
    description: "Private life management workspace for study planning, finance tracking, AI notes, secure records, and continuity workflows.",
    icon: chronyxIcon,
    logo: chronyxIcon,
    logoTransparent: chronyxIcon,
    gradientFrom: "hsl(285 74% 60%)",
    gradientTo: "hsl(305 78% 66%)",
    accentColor: "hsl(285 74% 60%)",
    href: "/products/chronyx",
    externalUrl: "https://www.getchronyx.com/",
  },
  proxinex: {
    id: "proxinex",
    name: "PROXINEX",
    tagline: "AI Intelligence Control Plane + AEON",
    description: "Control intelligence with transparent model routing, citation-backed verification, and cost-aware execution for every query.",
    icon: proxinexIcon,
    logo: proxinexIcon,
    logoTransparent: proxinexLogoTransparent,
    gradientFrom: "hsl(214 90% 56%)",
    gradientTo: "hsl(228 84% 64%)",
    accentColor: "hsl(214 90% 56%)",
    href: "/products/proxinex",
    externalUrl: "https://www.proxinex.com/",
  },
};

export const productList = [
  products.proxinex,
  products.traceflow,
  products.chronyx,
  products.qualyx,
  products.opzenix,
  products.cognix,
];

export const getProduct = (id: string): ProductConfig | undefined => products[id];
