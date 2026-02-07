import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Lock,
  Shield,
  Eye,
  FileCheck,
  Server,
  Key,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Users,
  ScrollText,
  Building2
} from "lucide-react";

const securityFeatures = [
  {
    title: "Zero-Trust Architecture",
    description: "Every request is verified, regardless of source. No implicit trust.",
    icon: Lock,
  },
  {
    title: "End-to-End Encryption",
    description: "Data encrypted at rest and in transit using AES-256 and TLS 1.3.",
    icon: Key,
  },
  {
    title: "Role-Based Access Control",
    description: "Granular permissions with principle of least privilege.",
    icon: Users,
  },
  {
    title: "Audit Logging",
    description: "Complete audit trail of all actions for compliance and forensics.",
    icon: FileCheck,
  }
];

const governanceFramework = [
  {
    title: "AI Ethics Board",
    description: "Internal review of all AI decisions and their societal impact",
    icon: Users
  },
  {
    title: "Model Governance",
    description: "Rigorous testing, validation, and version control of AI models",
    icon: ScrollText
  },
  {
    title: "Compliance Framework",
    description: "Built-in compliance with GDPR, SOC2, HIPAA, and industry standards",
    icon: Shield
  },
  {
    title: "Incident Response",
    description: "24/7 security operations center with rapid response protocols",
    icon: AlertTriangle
  }
];

const certifications = [
  { name: "SOC 2 Type II", status: "Compliant" },
  { name: "ISO 27001", status: "Certified" },
  { name: "GDPR", status: "Compliant" },
  { name: "HIPAA", status: "Ready" },
  { name: "PCI DSS", status: "Compliant" },
  { name: "FedRAMP", status: "In Progress" }
];

const Security = () => {
  return (
    <>
      <Helmet>
        <title>Platform Security & Governance — Enterprise AI Protection | OriginX Labs</title>
        <meta name="description" content="Enterprise-grade security and governance for AI systems. Zero-trust architecture, compliance, and ethical AI governance." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Lock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Security & Governance</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Enterprise-Grade
                <span className="text-primary"> Protection</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Security isn't an afterthought—it's built into every layer of our platform. 
                Protect your data, your models, and your reputation.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Security Architecture
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multiple layers of protection for your AI infrastructure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {securityFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                AI Governance
              </h2>
              <p className="text-muted-foreground">
                Responsible AI with human oversight at every level
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {governanceFramework.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center group hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-muted-foreground">
                Meeting the highest industry standards
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-card/50 dark:bg-card/30 border border-border/20 text-center"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h4 className="text-sm font-semibold text-foreground">{cert.name}</h4>
                  <span className="text-xs text-muted-foreground">{cert.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Explore our integrations
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/platform/integrations"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Integrations
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/trust"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all"
              >
                Trust Center
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Security;
