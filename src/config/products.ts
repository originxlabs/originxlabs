// Centralized product configuration for consistent branding across the site
// When admin changes a logo, it automatically updates across all components

import cognixIcon from "@/assets/cognix-icon.png";
import qualyxIcon from "@/assets/qualyx-icon.png";
import traceflowIcon from "@/assets/traceflow-icon.png";
import opzenixIcon from "@/assets/opzenix-icon.png";
import aeonIcon from "@/assets/aeon-icon.png";
import proxinexIcon from "@/assets/proxinex-icon.svg";

// Full logos for product pages
import cognixLogo from "@/assets/cognix-logo.png";
import qualyxLogo from "@/assets/qualyx-logo.png";
import traceflowLogo from "@/assets/traceflow-logo.png";
import opzenixLogo from "@/assets/opzenix-logo.png";
import proxinexLogo from "@/assets/proxinex-logo.png";

// Transparent logos for navbar/footer
import cognixLogoTransparent from "@/assets/cognix-logo-transparent.png";
import qualyxLogoTransparent from "@/assets/qualyx-logo-transparent.png";
import traceflowLogoTransparent from "@/assets/traceflow-logo-transparent.png";
import opzenixLogoTransparent from "@/assets/opzenix-logo-transparent.png";
import proxinexLogoTransparent from "@/assets/proxinex-logo.png";

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
    logo: cognixLogo,
    logoTransparent: cognixLogoTransparent,
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
    logo: qualyxLogo,
    logoTransparent: qualyxLogoTransparent,
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
    logo: traceflowLogo,
    logoTransparent: traceflowLogoTransparent,
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
    logo: opzenixLogo,
    logoTransparent: opzenixLogoTransparent,
    gradientFrom: "hsl(160 70% 45%)",
    gradientTo: "hsl(170 80% 40%)",
    accentColor: "hsl(160 70% 45%)",
    href: "/products/opzenix",
    externalUrl: "https://www.opzenix.com/",
  },
  aeon: {
    id: "aeon",
    name: "AEON",
    tagline: "Autonomous Enterprise Intelligence",
    description: "Multi-agent architectures that reason, collaborate, and evolve. Supreme intelligence, governed by ethics.",
    icon: aeonIcon,
    logo: aeonIcon, // AEON uses icon as logo
    logoTransparent: aeonIcon,
    gradientFrom: "hsl(250 80% 60%)",
    gradientTo: "hsl(280 70% 50%)",
    accentColor: "hsl(250 80% 60%)",
    href: "/products/aeon",
  },
  proxinex: {
    id: "proxinex",
    name: "PROXINEX",
    tagline: "AI Intelligence Control Plane",
    description: "Control intelligence with transparent model routing, citation-backed verification, and cost-aware execution for every query.",
    icon: proxinexIcon,
    logo: proxinexLogo,
    logoTransparent: proxinexLogoTransparent,
    gradientFrom: "hsl(214 90% 56%)",
    gradientTo: "hsl(228 84% 64%)",
    accentColor: "hsl(214 90% 56%)",
    href: "/products/proxinex",
    externalUrl: "https://www.proxinex.com/",
  },
};

export const productList = Object.values(products);

export const getProduct = (id: string): ProductConfig | undefined => products[id];
