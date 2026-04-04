import { useEffect } from "react";
import {
  BookOpen,
  Cable,
  CloudCog,
  CreditCard,
  LockKeyhole,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { products } from "@/config/products";
import { productSnapshots } from "@/config/productSnapshots";

const OriginxOne = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.originxone;

  const features = [
    {
      title: "One Unified API Layer",
      description: "Connect AI, payments, messaging, finance, web, and identity services through one governed integration layer and one operational surface.",
      icon: <Cable className="h-6 w-6 text-primary" />,
    },
    {
      title: "Intelligent Provider Routing",
      description: "Route requests across providers using latency, availability, and cost-performance signals without forcing teams into fragmented integration logic.",
      icon: <Network className="h-6 w-6 text-primary" />,
    },
    {
      title: "Enterprise API Marketplace",
      description: "Access a broad service marketplace across multiple domains through one enterprise-ready gateway experience.",
      icon: <Workflow className="h-6 w-6 text-primary" />,
    },
    {
      title: "OneAuth Identity Gateway",
      description: "Centralized identity, API key validation, policy enforcement, and request verification for secure operations.",
      icon: <LockKeyhole className="h-6 w-6 text-primary" />,
    },
    {
      title: "Transparent Metered Billing",
      description: "Usage-based billing with clear metering and provider-level visibility for predictable spend control.",
      icon: <CreditCard className="h-6 w-6 text-primary" />,
    },
    {
      title: "Developer-First Delivery",
      description: "Accelerate engineering adoption with documentation, playground workflows, and production-ready integration patterns.",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
    },
    {
      title: "Reliability and Uptime",
      description: "Designed for high availability with resilient routing, failover behavior, and operational consistency.",
      icon: <CloudCog className="h-6 w-6 text-primary" />,
    },
    {
      title: "Security and Governance",
      description: "Supports enterprise controls such as key scoping, auditability, rate limiting, and compliance-ready governance.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    },
  ];

  const capabilities = [
    "One API key for multi-category integrations",
    "50+ provider ecosystem with intelligent routing",
    "Sub-50ms latency targets for optimized responses",
    "99.99% uptime-grade reliability model",
    "Marketplace with broad API category coverage",
    "OneAuth identity and verification layer",
    "Transparent metered usage and billing model",
    "Playground and docs for rapid implementation",
    "Provider abstraction to reduce lock-in risk",
    "Enterprise-ready security and governance posture",
    "Consolidated API management for product and platform teams",
    "Architecture simplification across multi-vendor integrations",
  ];

  const useCases = [
    {
      title: "Unified Multi-API Product Delivery",
      description: "Build products that combine AI, payments, messaging, and web intelligence without carrying fragmented vendor complexity across teams.",
    },
    {
      title: "Provider Abstraction for Engineering Teams",
      description: "Standardize request and response handling while preserving flexibility to route across providers dynamically and responsibly.",
    },
    {
      title: "Faster MVP-to-Production API Launches",
      description: "Accelerate release timelines with one gateway, one key model, and docs-first onboarding.",
    },
    {
      title: "Cost-Aware API Operations",
      description: "Use routing and metering insights to optimize spend while keeping performance and reliability in balance.",
    },
    {
      title: "Identity-Centric API Security",
      description: "Implement secure auth and policy workflows with OneAuth-driven validation and enterprise controls.",
    },
    {
      title: "Enterprise API Consolidation",
      description: "Reduce operational overhead by consolidating provider integrations into a single governed integration plane for enterprise delivery teams.",
    },
  ];

  return (
    <ProductPageLayout
      name={product.name}
      tagline={product.tagline}
      description="OriginX One is the unified API infrastructure from OriginX Labs that helps enterprises consolidate integrations across AI, finance, messaging, identity, and web services through one gateway."
      logoImage={product.logo}
      gradientFrom={product.gradientFrom}
      gradientTo={product.gradientTo}
      features={features}
      capabilities={capabilities}
      useCases={useCases}
      snapshots={productSnapshots.originxone}
      prevProduct={{ name: "COGNIX", href: "/products/cognix" }}
      nextProduct={{ name: "PROXINEX", href: "/products/proxinex" }}
      externalUrl={product.externalUrl}
      productId="originxone"
      canonicalPath="/products/originx-one"
      pageTitle="OriginX One by OriginX Labs — One API. Every Capability."
    />
  );
};

export default OriginxOne;
