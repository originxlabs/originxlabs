import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Calculator,
  Landmark,
  Scale,
  SearchCheck,
  Shield,
  UserCog,
  Workflow,
} from "lucide-react";

const huminexLayers = [
  {
    title: "Core Workforce Foundation",
    description: "Central HR, employee lifecycle, attendance, and leave operations across teams and entities.",
    icon: UserCog,
    items: ["Employee lifecycle records", "Attendance and leave controls", "Org structure visibility"],
  },
  {
    title: "Payroll + Finance Operations",
    description: "One operating layer for payroll execution, expense workflows, reimbursements, and financial governance.",
    icon: Calculator,
    items: ["Compliance-ready payroll workflows", "Expense and reimbursement approvals", "Budget and finance control"],
  },
  {
    title: "Recruitment + Verification",
    description: "End-to-end hiring workflows with ATS-driven pipeline management and verification processes.",
    icon: SearchCheck,
    items: ["ATS-based hiring pipeline", "Candidate screening workflow", "Background verification lifecycle"],
  },
  {
    title: "Compliance + Security",
    description: "Policy enforcement, governance visibility, and enterprise-grade identity/access controls.",
    icon: Shield,
    items: ["Policy and statutory tracking", "RBAC and identity controls", "Operational audit signals"],
  },
];

const intelligenceModules = [
  {
    title: "Proxima AI Layer",
    description: "AI-powered recommendations, insights, and anomaly signals across workforce data.",
    icon: Bot,
  },
  {
    title: "OpZenix Automation",
    description: "Workflow automation for onboarding, approval chains, HR operations, and finance operations.",
    icon: Workflow,
  },
  {
    title: "Projects and Work Tracking",
    description: "Cross-functional project visibility with operational context tied to people and finance.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Risk and Compliance Monitoring",
    description: "Continuous governance intelligence for compliance-critical organizations.",
    icon: Scale,
  },
  {
    title: "Expense and Financial Control",
    description: "Structured spending governance with enterprise-ready controls and visibility.",
    icon: Landmark,
  },
];

const HuminexPlatform = () => {
  return (
    <>
      <Helmet>
        <title>HUMINEX Platform | Workforce OS by OriginX Labs</title>
        <meta
          name="description"
          content="Explore HUMINEX under the OriginX platform stack: AI-powered workforce operations across payroll, HR, finance, recruitment, compliance, and automation."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 right-1/4 w-[520px] h-[520px] bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BriefcaseBusiness className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Undr Platform • HUMINEX</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                HUMINEX
                <span className="text-primary"> Workforce OS</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                AI-powered hire-to-retire platform for payroll, HR, finance, recruitment, compliance,
                and enterprise workforce operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Platform Layers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HUMINEX combines people, payroll, finance, and governance workflows into one operating architecture.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {huminexLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <layer.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{layer.title}</h3>
                      <p className="text-muted-foreground mb-4">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((item) => (
                          <span key={item} className="px-3 py-1 text-xs rounded-full bg-muted/60 text-muted-foreground">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Intelligence Modules</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Operational AI and automation modules that power modern workforce decisioning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {intelligenceModules.map((module) => (
                <div
                  key={module.title}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <module.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">Explore HUMINEX Product Details</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              View complete product capabilities and external product site information.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products/huminex"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Open HUMINEX Product Page
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.gethuminex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all"
              >
                Visit gethuminex.com
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HuminexPlatform;
