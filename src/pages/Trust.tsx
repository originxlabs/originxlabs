import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  CheckCircle2, 
  Server,
  Key,
  Globe,
  AlertTriangle,
  Sparkles,
  Award,
  Building2
} from "lucide-react";

const certifications = [
  { name: "DPIIT Recognized", description: "Government of India Startup Recognition" },
  { name: "GST Compliant", description: "Fully compliant with Indian GST regulations" },
  { name: "Data Protection", description: "GDPR and IT Act 2000 compliant" },
];

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption."
  },
  {
    icon: Key,
    title: "Access Control",
    description: "Role-based access control (RBAC) with fine-grained permissions and multi-factor authentication."
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Enterprise-grade cloud infrastructure with automated security patching and monitoring."
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description: "Comprehensive audit trails for all system actions, enabling full accountability and compliance."
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    description: "Real-time threat detection and automated incident response to protect against attacks."
  },
  {
    icon: Globe,
    title: "Data Residency",
    description: "Flexible data residency options to meet regional compliance and sovereignty requirements."
  }
];

const policies = [
  { title: "Privacy Policy", description: "How we collect, use, and protect your data", href: "/privacy" },
  { title: "Terms of Service", description: "Terms and conditions for using our services", href: "/terms" },
  { title: "Security Policy", description: "Our approach to security and data protection", href: "#" },
  { title: "Cookie Policy", description: "How we use cookies and tracking technologies", href: "#" },
];

const Trust = () => {
  return (
    <>
      <Helmet>
        <title>Trust, Security & Governance | OriginX Labs</title>
        <meta name="description" content="Learn about OriginX Labs' commitment to security, privacy, and compliance. Enterprise-grade protection for your data and AI systems." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Trust & Security</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Enterprise-Grade
                <span className="text-primary"> Security</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Your trust is our foundation. We implement rigorous security measures and 
                maintain full transparency in how we protect your data.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-12 border-b border-border/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Security Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multi-layered security architecture designed to protect your most sensitive data
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {securityFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Ethics */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">AI Governance</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Responsible AI Development
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      At OriginX Labs, we believe that powerful AI must be governed by strong ethical 
                      principles. Our AI systems are designed with transparency, fairness, and 
                      accountability at their core.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>Human-in-the-loop for critical decisions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>Explainable AI with full audit trails</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>Regular bias detection and mitigation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                        <span>Privacy-preserving machine learning</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-8 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20">
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">Our Commitment</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-muted/30">
                      <p className="font-medium text-foreground mb-1">Transparency</p>
                      <p className="text-sm text-muted-foreground">Every AI decision can be traced and explained</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30">
                      <p className="font-medium text-foreground mb-1">Fairness</p>
                      <p className="text-sm text-muted-foreground">Active bias detection and mitigation in all models</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/30">
                      <p className="font-medium text-foreground mb-1">Accountability</p>
                      <p className="text-sm text-muted-foreground">Clear ownership and responsibility for AI outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Policies */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Legal & Compliance
              </h2>
              <p className="text-muted-foreground">
                Review our policies and compliance documentation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {policies.map((policy, index) => (
                <Link
                  key={index}
                  to={policy.href}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <FileText className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {policy.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{policy.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-12 border-t border-border/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-muted/20 border border-border/20">
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">ORIGINX LABS PRIVATE LIMITED</h3>
                  <p className="text-sm text-muted-foreground">Registered Company in India</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground">CIN</p>
                  <p className="font-mono text-foreground">U62010OD2025PTC051089</p>
                </div>
                <div>
                  <p className="text-muted-foreground">GSTIN</p>
                  <p className="font-mono text-foreground">21AANCC1954F1ZW</p>
                </div>
                <div>
                  <p className="text-muted-foreground">DPIIT Recognition</p>
                  <p className="font-mono text-foreground">DIPP230789</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Trust;
