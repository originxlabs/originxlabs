import { useEffect } from "react";
import { Zap, Database, Cloud, Lock, Gauge, Globe } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { products } from "@/config/products";
import { productSnapshots } from "@/config/productSnapshots";

const Cognix = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.cognix;

  const features = [
    {
      title: "AI-Native Backend Foundation",
      description: "Purpose-built backend infrastructure for AI-enabled applications, with architecture patterns tuned for intelligent workloads and production delivery.",
      icon: <Globe className="h-6 w-6 text-primary" />,
    },
    {
      title: "Accelerated Deployment",
      description: "Reduce backend setup time for modern product teams by providing a faster route from concept to production-ready service delivery.",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Intelligent Data Services",
      description: "Vector support, real-time synchronization, and semantic retrieval patterns aligned to AI product and application needs.",
      icon: <Database className="h-6 w-6 text-primary" />,
    },
    {
      title: "Deployment Flexibility",
      description: "Support deployment across cloud and enterprise environments without forcing teams into a narrow infrastructure model.",
      icon: <Cloud className="h-6 w-6 text-primary" />,
    },
    {
      title: "Enterprise Security Controls",
      description: "Security-aware backend delivery with access controls, infrastructure protections, and enterprise-aligned operational posture.",
      icon: <Lock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Performance Engineering",
      description: "Backend delivery optimized for speed, responsiveness, and reliability across demanding application experiences.",
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
    "AI product backend patterns for enterprise teams",
    "Infrastructure simplification for modern application delivery",
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
      description: "Connect enterprise systems with modern AI-ready backend services through adaptable infrastructure and integration-friendly delivery patterns.",
    },
    {
      title: "Platform Modernization",
      description: "Support teams modernizing legacy backend estates while introducing AI-ready services, observability, and improved delivery velocity.",
    },
    {
      title: "Rapid Prototyping",
      description: "Go from idea to production-ready backend faster, making Cognix a strong fit for innovation teams and enterprise product groups moving at startup speed.",
    },
  ];

  return (
    <ProductPageLayout
      name={product.name}
      tagline={product.tagline}
      description="COGNIX is the AI backend platform from OriginX Labs for teams building intelligent applications, modern enterprise services, and AI-ready digital products without the usual infrastructure drag."
      logoImage={product.logo}
      gradientFrom={product.gradientFrom}
      gradientTo={product.gradientTo}
      features={features}
      capabilities={capabilities}
      useCases={useCases}
      snapshots={productSnapshots.cognix}
      prevProduct={{ name: "OPZENIX", href: "/products/opzenix" }}
      nextProduct={{ name: "ORIGINX ONE", href: "/products/originx-one" }}
      externalUrl={product.externalUrl}
      productId="cognix"
      pageTitle="COGNIX by OriginX Labs — Intelligent AI Infrastructure Platform"
    />
  );
};

export default Cognix;
