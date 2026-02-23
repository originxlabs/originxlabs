import { useEffect } from "react";
import { Zap, Database, Cloud, Lock, Gauge, Globe } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { products } from "@/config/products";

const Cognix = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.cognix;

  const features = [
    {
      title: "AI-Native Architecture",
      description: "Built from the ground up for AI workloads with intelligent resource allocation and auto-scaling capabilities.",
      icon: <Globe className="h-6 w-6 text-primary" />,
    },
    {
      title: "Instant Deployment",
      description: "Deploy AI-powered backends in minutes, not months. Zero configuration required for common patterns.",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Intelligent Data Layer",
      description: "Vector databases, real-time sync, and semantic search built into every deployment.",
      icon: <Database className="h-6 w-6 text-primary" />,
    },
    {
      title: "Multi-Cloud Ready",
      description: "Deploy anywhere—AWS, GCP, Azure, or on-premises—with consistent APIs and behavior.",
      icon: <Cloud className="h-6 w-6 text-primary" />,
    },
    {
      title: "Enterprise Security",
      description: "SOC2 compliant infrastructure with end-to-end encryption and fine-grained access controls.",
      icon: <Lock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Performance Optimized",
      description: "Sub-millisecond latency with intelligent caching and edge computing capabilities.",
      icon: <Gauge className="h-6 w-6 text-primary" />,
    },
  ];

  const capabilities = [
    "Automatic horizontal scaling",
    "Built-in rate limiting and throttling",
    "Real-time analytics dashboard",
    "GraphQL and REST API generation",
    "WebSocket support for real-time apps",
    "Integrated monitoring and alerting",
    "Multi-region deployment",
    "Automatic backup and recovery",
  ];

  const useCases = [
    {
      title: "AI-Powered Applications",
      description: "Build intelligent applications with semantic search, recommendation engines, and natural language interfaces without managing complex infrastructure.",
    },
    {
      title: "Real-Time Platforms",
      description: "Create collaborative tools, live dashboards, and streaming applications with built-in WebSocket support and real-time synchronization.",
    },
    {
      title: "Enterprise Integration",
      description: "Connect legacy systems with modern AI capabilities through our universal adapter layer and transformation pipelines.",
    },
    {
      title: "Rapid Prototyping",
      description: "Go from idea to production-ready backend in days. Perfect for startups and innovation teams that need to move fast.",
    },
  ];

  return (
    <ProductPageLayout
      name={product.name}
      tagline={product.tagline}
      description="Intelligent infrastructure that scales with your ambition. COGNIX provides a complete backend platform optimized for AI workloads, enabling you to build, deploy, and scale intelligent applications without infrastructure complexity."
      logoImage={product.logo}
      gradientFrom={product.gradientFrom}
      gradientTo={product.gradientTo}
      features={features}
      capabilities={capabilities}
      useCases={useCases}
      prevProduct={{ name: "OPZENIX", href: "/products/opzenix" }}
      nextProduct={{ name: "PROXINEX", href: "/products/proxinex" }}
      externalUrl={product.externalUrl}
      productId="cognix"
    />
  );
};

export default Cognix;
