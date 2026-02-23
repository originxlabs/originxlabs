import { useEffect } from "react";
import { Shield, Eye, Bug, Target, Workflow, Layers } from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { products } from "@/config/products";

const Qualyx = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.qualyx;

  const features = [
    {
      title: "Autonomous Test Generation",
      description: "AI that learns your codebase and generates comprehensive test suites automatically, covering edge cases humans often miss.",
      icon: <Eye className="h-6 w-6 text-primary" />,
    },
    {
      title: "Zero False Positives",
      description: "Advanced semantic analysis eliminates noise. Every alert is actionable, every issue is real.",
      icon: <Target className="h-6 w-6 text-primary" />,
    },
    {
      title: "Intelligent Bug Detection",
      description: "Pattern recognition across millions of codebases to identify vulnerabilities before they reach production.",
      icon: <Bug className="h-6 w-6 text-primary" />,
    },
    {
      title: "Visual Regression Testing",
      description: "Pixel-perfect comparison with intelligent diffing that understands intentional changes from regressions.",
      icon: <Layers className="h-6 w-6 text-primary" />,
    },
    {
      title: "CI/CD Integration",
      description: "Seamless integration with GitHub, GitLab, and all major CI/CD platforms with zero configuration.",
      icon: <Workflow className="h-6 w-6 text-primary" />,
    },
    {
      title: "Security-First Testing",
      description: "Automated security scanning, OWASP compliance checks, and vulnerability assessments in every build.",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
  ];

  const capabilities = [
    "100% code coverage analysis",
    "Performance regression detection",
    "API contract testing",
    "Cross-browser compatibility testing",
    "Mobile responsive testing",
    "Accessibility compliance (WCAG)",
    "Load and stress testing",
    "Chaos engineering integration",
  ];

  const useCases = [
    {
      title: "Continuous Quality Assurance",
      description: "Embed quality into every commit with autonomous testing that runs 24/7, catching issues before they impact users.",
    },
    {
      title: "Legacy System Modernization",
      description: "Safely refactor legacy codebases with AI-generated test coverage that ensures existing functionality is preserved.",
    },
    {
      title: "Compliance Automation",
      description: "Automate compliance testing for HIPAA, SOC2, GDPR, and industry-specific regulations with built-in policy checks.",
    },
    {
      title: "Release Confidence",
      description: "Ship with confidence knowing every release has been tested against millions of scenarios and edge cases.",
    },
  ];

  return (
    <ProductPageLayout
      name={product.name}
      tagline={product.tagline}
      description="Autonomous testing that learns your codebase and evolves with your application. QUALYX delivers zero false positives, complete coverage, and continuous quality assurance without the overhead of traditional QA processes."
      logoImage={product.logo}
      gradientFrom={product.gradientFrom}
      gradientTo={product.gradientTo}
      features={features}
      capabilities={capabilities}
      useCases={useCases}
      prevProduct={{ name: "CHRONYX", href: "/products/chronyx" }}
      nextProduct={{ name: "OPZENIX", href: "/products/opzenix" }}
      externalUrl={product.externalUrl}
      productId="qualyx"
    />
  );
};

export default Qualyx;
