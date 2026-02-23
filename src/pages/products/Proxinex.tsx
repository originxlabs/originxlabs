import { useEffect } from "react";
import { Compass, ShieldCheck, SearchCheck, BadgeCheck, Wallet, Split, Users, RefreshCw, Eye, Heart, Building } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { products } from "@/config/products";

const Proxinex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.proxinex;

  const features = [
    {
      title: "Intent-Aware Routing",
      description: "Understands query intent and routes each request to the model most likely to deliver the best result.",
      icon: <Compass className="h-6 w-6 text-primary" />,
    },
    {
      title: "Inline Ask and Verification",
      description: "Inline Ask workflows with citation verification and answer confidence scoring for governed AI usage.",
      icon: <SearchCheck className="h-6 w-6 text-primary" />,
    },
    {
      title: "Transparent Confidence",
      description: "Every answer includes visibility into model choice, quality signals, and confidence metrics.",
      icon: <BadgeCheck className="h-6 w-6 text-primary" />,
    },
    {
      title: "Cost Transparency",
      description: "See per-query cost and optimize spend by prioritizing open models and using premium checks only when needed.",
      icon: <Wallet className="h-6 w-6 text-primary" />,
    },
    {
      title: "Smart Verification Path",
      description: "Runs premium verification selectively for high-impact prompts while preserving speed for routine usage.",
      icon: <Split className="h-6 w-6 text-primary" />,
    },
    {
      title: "Enterprise Trust Controls",
      description: "Purpose-built guardrails, verification layers, and policy-aware orchestration for mission-critical workflows.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    },
    {
      title: "AEON Multi-Agent Orchestration",
      description: "Embedded AEON layer coordinates specialist agents for planning, reasoning, and execution across complex enterprise workflows.",
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      title: "Self-Healing Autonomous Flows",
      description: "Detects route degradation and autonomously re-balances model pathways for reliability and consistent output quality.",
      icon: <RefreshCw className="h-6 w-6 text-primary" />,
    },
    {
      title: "Human-in-the-Loop Governance",
      description: "Configurable escalation pathways keep humans in control for high-impact decisions and policy-sensitive operations.",
      icon: <Eye className="h-6 w-6 text-primary" />,
    },
    {
      title: "Ethics and Explainability by Design",
      description: "Traceable decisions, confidence rationale, and governance-ready output trails for responsible AI operations.",
      icon: <Heart className="h-6 w-6 text-primary" />,
    },
    {
      title: "Enterprise-Scale AI Operations",
      description: "Built for regulated, mission-critical environments with security, compliance, and operational resilience.",
      icon: <Building className="h-6 w-6 text-primary" />,
    },
  ];

  const capabilities = [
    "Multi-model routing across open and premium providers",
    "Inline Ask with citation verification",
    "Accuracy scoring and confidence output",
    "Model comparison sandbox workflows",
    "Per-query cost visibility and optimization",
    "Intent detection and response governance",
    "High-impact premium verification path",
    "Developer-ready control plane APIs",
    "AEON multi-agent orchestration",
    "Human-in-the-loop decision gates",
    "Self-healing route reliability",
    "Ethics-first explainable AI trails",
    "Enterprise governance and compliance alignment",
  ];

  const useCases = [
    {
      title: "AI Ops and Governance",
      description: "Centralize AI decisioning with transparent routing and confidence checks across teams and products.",
    },
    {
      title: "Research and Knowledge Work",
      description: "Improve trust in AI-assisted outputs through citation-backed responses and verifiable reasoning flows.",
    },
    {
      title: "Cost-Controlled GenAI at Scale",
      description: "Reduce inference spend with open-first routing while preserving quality via selective premium verification.",
    },
    {
      title: "Developer Experience Platforms",
      description: "Give engineering teams a unified AI control layer with consistent model orchestration and observability.",
    },
    {
      title: "Autonomous Enterprise Intelligence",
      description: "Run AEON-powered multi-agent reasoning through the Proxinex control plane for autonomous but governed enterprise outcomes.",
    },
    {
      title: "Computer Vision + LLM Decision Stacks",
      description: "Orchestrate multimodal pipelines where computer vision and LLM systems are jointly routed, verified, and policy-controlled.",
    },
  ];

  return (
    <ProductPageLayout
      name={product.name}
      tagline={product.tagline}
      description="PROXINEX is the AI Intelligence Control Plane by OriginX Labs. It routes each query to the right model, verifies answers with citations and confidence scoring, and keeps costs transparent so teams can scale AI without black-box risk."
      logoImage={product.logo}
      gradientFrom={product.gradientFrom}
      gradientTo={product.gradientTo}
      features={features}
      capabilities={capabilities}
      useCases={useCases}
      prevProduct={{ name: "COGNIX", href: "/products/cognix" }}
      nextProduct={{ name: "TRACEFLOW", href: "/products/traceflow" }}
      externalUrl={product.externalUrl}
      productId="proxinex"
      pageTitle="PROXINEX by OriginX Labs — AI Control Plane + AEON Autonomous Intelligence"
    />
  );
};

export default Proxinex;
