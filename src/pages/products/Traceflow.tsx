import { useEffect } from "react";
import { Activity, Brain, Map, Fingerprint, Network, Sparkles } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { products } from "@/config/products";
import { productSnapshots } from "@/config/productSnapshots";

const Traceflow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.traceflow;

  const features = [
    {
      title: "Digital Experience Mapping",
      description: "Visualize and understand every user journey across your digital ecosystem with intelligent path analysis.",
      icon: <Map className="h-6 w-6 text-primary" />,
    },
    {
      title: "Cognitive Analytics",
      description: "Go beyond clicks and pageviews. Understand user intent, confusion points, and decision patterns.",
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "Real-Time Intelligence",
      description: "Sub-second insights delivered at the edge. Act on user behavior as it happens, not hours later.",
      icon: <Activity className="h-6 w-6 text-primary" />,
    },
    {
      title: "Predictive Optimization",
      description: "AI-powered recommendations for UX improvements based on behavioral patterns and conversion analysis.",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
    },
    {
      title: "Privacy-Preserving",
      description: "Full analytics capabilities without compromising user privacy. GDPR and CCPA compliant by design.",
      icon: <Fingerprint className="h-6 w-6 text-primary" />,
    },
    {
      title: "Integration Mesh",
      description: "Connect with your existing tools—analytics, CRM, support—to create a unified experience layer.",
      icon: <Network className="h-6 w-6 text-primary" />,
    },
  ];

  const capabilities = [
    "Session replay with AI annotations",
    "Heatmaps and scroll depth analysis",
    "Funnel optimization",
    "A/B test analysis",
    "Error tracking and correlation",
    "Performance impact measurement",
    "Custom event taxonomy",
    "Cohort analysis",
  ];

  const useCases = [
    {
      title: "Conversion Optimization",
      description: "Identify and eliminate friction points in your conversion funnels with AI-powered insights and automated recommendations.",
    },
    {
      title: "Product Analytics",
      description: "Understand how users interact with every feature, identify power users, and prioritize development based on actual usage.",
    },
    {
      title: "Customer Success",
      description: "Proactively identify users who are struggling before they churn, with real-time health scores and intervention triggers.",
    },
    {
      title: "Enterprise Dashboards",
      description: "Create executive dashboards that tell the story of your digital experience with customizable KPIs and automated insights.",
    },
  ];

  return (
    <ProductPageLayout
      name={product.name}
      tagline={product.tagline}
      description="Map, understand, and optimize every digital interaction. TRACEFLOW provides the infrastructure to capture, analyze, and act on user behavior in real-time, delivering intelligence at the edge where it matters most."
      logoImage={product.logo}
      gradientFrom={product.gradientFrom}
      gradientTo={product.gradientTo}
      features={features}
      capabilities={capabilities}
      useCases={useCases}
      snapshots={productSnapshots.traceflow}
      prevProduct={{ name: "PROXINEX", href: "/products/proxinex" }}
      nextProduct={{ name: "CHRONYX", href: "/products/chronyx" }}
      externalUrl={product.externalUrl}
      productId="traceflow"
    />
  );
};

export default Traceflow;
