import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Scale,
  Building,
  Heart,
  Briefcase,
  Shield,
  ArrowRight,
  FileCheck,
  Lock,
  Eye,
  ScrollText,
  CheckCircle2
} from "lucide-react";

const industries = [
  {
    title: "Financial Services",
    description: "AI solutions that meet SEC, FINRA, and banking regulations",
    icon: Building,
    regulations: ["SOX", "PCI DSS", "Basel III"],
    color: "hsl(210 100% 60%)"
  },
  {
    title: "Healthcare",
    description: "HIPAA-compliant AI for patient care and medical research",
    icon: Heart,
    regulations: ["HIPAA", "HITECH", "FDA 21 CFR"],
    color: "hsl(330 70% 55%)"
  },
  {
    title: "Legal & Professional",
    description: "AI that maintains attorney-client privilege and confidentiality",
    icon: Briefcase,
    regulations: ["ABA Model Rules", "GDPR", "CCPA"],
    color: "hsl(270 100% 65%)"
  },
  {
    title: "Government",
    description: "FedRAMP-ready solutions for federal and state agencies",
    icon: Shield,
    regulations: ["FedRAMP", "FISMA", "ITAR"],
    color: "hsl(160 70% 45%)"
  }
];

const complianceFeatures = [
  { icon: Lock, title: "Data Sovereignty", description: "Control where your data resides and is processed" },
  { icon: Eye, title: "Audit Trails", description: "Complete record of all AI decisions and actions" },
  { icon: ScrollText, title: "Documentation", description: "Auto-generated compliance documentation" },
  { icon: FileCheck, title: "Certifications", description: "Pre-certified for major regulatory frameworks" }
];

const RegulatedIndustries = () => {
  return (
    <>
      <Helmet>
        <title>Regulated Industries | OriginX Labs Solutions</title>
        <meta name="description" content="AI solutions for finance, healthcare, legal, and government. Built for compliance with HIPAA, SOX, FedRAMP, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Regulated Industries</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                AI Built for
                <span className="text-primary"> Compliance</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Enterprise AI that meets the strictest regulatory requirements. 
                Deploy with confidence in healthcare, finance, legal, and government.
              </p>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Industry Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tailored AI deployments for highly regulated sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${industry.color}20` }}
                    >
                      <industry.icon className="w-6 h-6" style={{ color: industry.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{industry.title}</h3>
                      <p className="text-sm text-muted-foreground">{industry.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-16">
                    {industry.regulations.map((reg, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Compliance Built-In
              </h2>
              <p className="text-muted-foreground">
                Features designed for regulatory requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {complianceFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center group hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Learn about scale & reliability
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/solutions/scale"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Scale & Reliability
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default RegulatedIndustries;
