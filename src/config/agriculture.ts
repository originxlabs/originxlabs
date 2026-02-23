import {
  Building2,
  Database,
  Orbit,
  ScanLine,
  ShieldCheck,
  Sprout,
  BarChart3,
  Handshake,
  Briefcase,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

export interface AgricultureModule {
  name: string;
  tagline: string;
  description: string;
  glyph: string;
  accent: string;
}

export interface AgriculturePillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StakeholderOutcome {
  group: string;
  outcome: string;
  icon: LucideIcon;
}

export const agricultureHero = {
  badge: "CROPXON by OriginX Labs",
  title: "AI-powered agriculture operations from soil intelligence to nutrition outcomes",
  description:
    "CROPXON is an integrated AgTech SaaS layer for farm advisory, soil diagnostics, market intelligence, financing, logistics, policy workflows, and nutrition tracking with PULSE365.",
  ctaPrimary: { label: "Explore Ecosystem", href: "#ecosystem", icon: ArrowRight },
  ctaSecondary: { label: "Book Demo", href: "/contact" },
};

export const agricultureModules: AgricultureModule[] = [
  {
    name: "AgriSakha",
    tagline: "AI Crop Advisory",
    description:
      "Multilingual guidance for crop planning, disease response, irrigation timing, and fertilizer decisions.",
    glyph: "🌾",
    accent: "hsl(149 67% 34%)",
  },
  {
    name: "SoilNet",
    tagline: "8-in-1 Soil Intelligence",
    description:
      "Field-level soil metrics with advisory integration for crop suitability, irrigation plans, and yield optimization.",
    glyph: "🧪",
    accent: "hsl(160 52% 35%)",
  },
  {
    name: "MandiSetu",
    tagline: "Market & Price Intelligence",
    description:
      "Real-time mandi insights, trend visibility, and pricing signals to support better selling decisions.",
    glyph: "🛒",
    accent: "hsl(42 90% 45%)",
  },
  {
    name: "DhanuShakti",
    tagline: "Agri Finance & Insurance",
    description:
      "Credit, insurance, and risk-led agri finance workflows designed for farmers and partner institutions.",
    glyph: "🏦",
    accent: "hsl(149 58% 30%)",
  },
  {
    name: "KrishiSetu",
    tagline: "Farm-to-Home Logistics",
    description:
      "Operational visibility across movement, warehousing, and delivery coordination for produce flows.",
    glyph: "🚜",
    accent: "hsl(155 45% 32%)",
  },
  {
    name: "NitiBandhu",
    tagline: "Policy & Scheme Workflows",
    description:
      "Structured assistance for scheme discovery, document readiness, and policy process execution.",
    glyph: "🏛",
    accent: "hsl(152 42% 29%)",
  },
  {
    name: "KrishiKutumba",
    tagline: "Farmer Community Network",
    description:
      "Knowledge-sharing and FPO-connected collaboration for training, coordination, and local enablement.",
    glyph: "👨‍🌾",
    accent: "hsl(149 67% 34%)",
  },
  {
    name: "PULSE365",
    tagline: "Nutrition & Health Tracker",
    description:
      "Food quality and nutrition intelligence with personalized tracking to connect farm output with wellness outcomes.",
    glyph: "🍎",
    accent: "hsl(42 84% 46%)",
  },
];

export const agriVedaPillars: AgriculturePillar[] = [
  {
    title: "Model Hub",
    description:
      "Curated agriculture models for disease detection, advisory support, and quality analysis across diverse crop contexts.",
    icon: Orbit,
  },
  {
    title: "Dataset Layer",
    description:
      "Structured domain datasets for soil, crop, language, and nutrition intelligence workflows.",
    icon: Database,
  },
  {
    title: "Multimodal AI",
    description:
      "Photo, text, and context-aware pipelines for practical agronomy and nutrition decision support.",
    icon: ScanLine,
  },
];

export const soilNetPillars: AgriculturePillar[] = [
  {
    title: "8-in-1 Soil Health Signals",
    description: "Key soil indicators delivered in one workflow for faster field interpretation and action.",
    icon: Sprout,
  },
  {
    title: "Advisory-Linked Recommendations",
    description: "Soil outputs feed into crop and input guidance so recommendations are data-grounded.",
    icon: BarChart3,
  },
  {
    title: "Irrigation & Yield Planning",
    description: "Planning support for water strategy and expected output under local seasonal conditions.",
    icon: ShieldCheck,
  },
];

export const stakeholderOutcomes: StakeholderOutcome[] = [
  {
    group: "Farmers & FPOs",
    outcome: "Improve day-to-day decisions with practical advisory, soil clarity, and market visibility.",
    icon: Handshake,
  },
  {
    group: "Government & Policy Teams",
    outcome: "Support program execution with structured scheme workflows and measurable operational reporting.",
    icon: Building2,
  },
  {
    group: "Investors & Enterprise Partners",
    outcome: "Access a modular AgTech stack with clear expansion pathways across services and geographies.",
    icon: Briefcase,
  },
];

export const sustainabilityPillars: AgriculturePillar[] = [
  {
    title: "Regenerative Farming Analytics",
    description:
      "Track soil-restoring practices and agronomy indicators to strengthen long-term farm resilience.",
    icon: Sprout,
  },
  {
    title: "Carbon Reporting Readiness",
    description:
      "Maintain structured activity and field data to support future carbon-linked documentation needs.",
    icon: BarChart3,
  },
  {
    title: "ESG Alignment",
    description:
      "Prepare sustainability narratives with measurable, system-generated evidence for stakeholders.",
    icon: ShieldCheck,
  },
];
