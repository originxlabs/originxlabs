import { useEffect } from "react";
import {
  BriefcaseBusiness,
  Calculator,
  Landmark,
  Scale,
  SearchCheck,
  ShieldCheck,
  UserCog,
  Workflow,
} from "lucide-react";
import ProductPageLayout from "@/components/ProductPageLayout";
import { products } from "@/config/products";
import { productSnapshots } from "@/config/productSnapshots";

const Huminex = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = products.huminex;

  const features = [
    {
      title: "Hire-to-Retire Workforce OS",
      description: "Unifies core workforce operations from onboarding to offboarding in a single AI-powered platform.",
      icon: <BriefcaseBusiness className="h-6 w-6 text-primary" />,
    },
    {
      title: "Payroll Engine",
      description: "Automates salary processing with compliance-ready workflows across statutory payroll operations.",
      icon: <Calculator className="h-6 w-6 text-primary" />,
    },
    {
      title: "HR, Attendance, and Employee Lifecycle",
      description: "Manages employee records, attendance flows, leave policies, approvals, and lifecycle transitions from one system.",
      icon: <UserCog className="h-6 w-6 text-primary" />,
    },
    {
      title: "Finance and Expense Controls",
      description: "Brings expense submission, approvals, reimbursements, budgeting, and payment visibility into one operational layer.",
      icon: <Landmark className="h-6 w-6 text-primary" />,
    },
    {
      title: "Recruitment + ATS + BGV",
      description: "Supports end-to-end hiring with ATS screening, candidate tracking, verification orchestration, and interview workflows.",
      icon: <SearchCheck className="h-6 w-6 text-primary" />,
    },
    {
      title: "Compliance and Governance",
      description: "Tracks policy acknowledgment, statutory processes, risk monitoring, and audit-ready operational controls.",
      icon: <Scale className="h-6 w-6 text-primary" />,
    },
    {
      title: "Identity, Access, and Security",
      description: "Provides role-based access, SSO support, audit logs, and enterprise-grade governance for sensitive workforce data.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    },
    {
      title: "AI + Workflow Automation",
      description: "Adds AI-driven insights and workflow automation for faster decisions and lower manual operational overhead.",
      icon: <Workflow className="h-6 w-6 text-primary" />,
    },
  ];

  const capabilities = [
    "15-module unified workforce operating system",
    "Payroll, HR, finance, and recruitment in one platform",
    "Attendance, leave, projects, and employee operations",
    "ATS screening and background verification workflows",
    "Compliance tracking with governance visibility",
    "Identity and role-based access controls",
    "AI-powered insight and recommendation layer",
    "Automation workflows for HR and finance operations",
    "Enterprise-ready multi-team operating model",
    "Built for modern organizations from startup to scale",
  ];

  const useCases = [
    {
      title: "Unified HR and Payroll Operations",
      description: "Replace fragmented tools with one system that centralizes employee data, attendance workflows, and payroll execution.",
    },
    {
      title: "Recruitment and Hiring Velocity",
      description: "Accelerate talent acquisition with ATS pipelines, screening workflows, and coordinated candidate progression.",
    },
    {
      title: "Compliance-Critical Workforce Management",
      description: "Run compliance-heavy teams with policy controls, statutory tracking, and audit-friendly operational records.",
    },
    {
      title: "Finance and Expense Governance",
      description: "Improve financial discipline with structured approvals, reimbursements, expense controls, and budget visibility.",
    },
    {
      title: "Operational Automation for Growing Teams",
      description: "Scale organization workflows through automation and AI-assisted operations without multiplying manual processes.",
    },
    {
      title: "Enterprise Workforce Intelligence",
      description: "Use cross-functional insights from HR, payroll, hiring, and compliance data to make faster leadership decisions.",
    },
  ];

  return (
    <ProductPageLayout
      name={product.name}
      tagline={product.tagline}
      description="HUMINEX by OriginX Labs is an AI-powered workforce operating system that brings payroll, HR, finance, recruitment, ATS workflows, compliance, and enterprise operations into one unified hire-to-retire platform."
      logoImage={product.logo}
      gradientFrom={product.gradientFrom}
      gradientTo={product.gradientTo}
      features={features}
      capabilities={capabilities}
      useCases={useCases}
      snapshots={productSnapshots.huminex}
      prevProduct={{ name: "CHRONYX", href: "/products/chronyx" }}
      nextProduct={{ name: "QUALYX", href: "/products/qualyx" }}
      externalUrl={product.externalUrl}
      productId="huminex"
      pageTitle="HUMINEX by OriginX Labs — AI Workforce Operating System"
    />
  );
};

export default Huminex;
