import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { RefreshCw, Shield, Cpu, Lock, Workflow, Monitor } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { products } from "@/config/products";

const Opzenix = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.opzenix;

  const features = [
    {
      title: "Self-Healing Agents",
      description: "Autonomous agents that detect, diagnose, and resolve issues in your ML pipeline without human intervention.",
      icon: <RefreshCw className="h-6 w-6 text-primary" />,
    },
    {
      title: "Unified MLOps Platform",
      description: "Manage the entire ML lifecycle—from experimentation to production—in a single, integrated platform.",
      icon: <Workflow className="h-6 w-6 text-primary" />,
    },
    {
      title: "LLMOps Excellence",
      description: "Purpose-built tooling for large language models: prompt management, fine-tuning, evaluation, and deployment.",
      icon: <Cpu className="h-6 w-6 text-primary" />,
    },
    {
      title: "DevSecOps Integration",
      description: "Security baked into every stage of the pipeline with automated vulnerability scanning and compliance checks.",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
      title: "Model Governance",
      description: "Complete audit trails, version control, and approval workflows for enterprise ML governance requirements.",
      icon: <Lock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Intelligent Monitoring",
      description: "Real-time model performance monitoring with drift detection, anomaly alerts, and automated retraining triggers.",
      icon: <Monitor className="h-6 w-6 text-primary" />,
    },
  ];

  const capabilities = [
    "Automated model versioning",
    "Feature store integration",
    "A/B testing framework",
    "Canary deployments",
    "Cost optimization",
    "Multi-model orchestration",
    "GPU cluster management",
    "Federated learning support",
  ];

  const useCases = [
    {
      title: "Enterprise AI Operations",
      description: "Bring order to AI chaos. Standardize how your organization builds, deploys, and monitors machine learning models at scale.",
    },
    {
      title: "LLM Production Systems",
      description: "Deploy and manage large language models in production with proper guardrails, monitoring, and cost controls.",
    },
    {
      title: "Regulated Industries",
      description: "Meet compliance requirements for AI in healthcare, finance, and government with built-in audit trails and explainability.",
    },
    {
      title: "ML Platform Teams",
      description: "Provide self-service ML infrastructure to data science teams while maintaining security and governance standards.",
    },
  ];

  return (
    <ProductPageLayout
      name={product.name}
      tagline={product.tagline}
      description="Self-healing agents for your entire ML pipeline. From development to production, OPZENIX provides autonomous operations that keep your AI systems running optimally while maintaining enterprise-grade security and compliance."
      logoImage={product.logo}
      gradientFrom={product.gradientFrom}
      gradientTo={product.gradientTo}
      features={features}
      capabilities={capabilities}
      useCases={useCases}
      prevProduct={{ name: "TRACEFLOW", href: "/products/traceflow" }}
      nextProduct={{ name: "AEON", href: "/products/aeon" }}
      externalUrl={product.externalUrl}
      productId="opzenix"
    />
  );
};

export default Opzenix;
