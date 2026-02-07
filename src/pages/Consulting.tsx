import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Brain, 
  Rocket, 
  Shield, 
  Users, 
  Target, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  Lightbulb,
  Zap,
  BarChart3,
  Code,
  LineChart
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Roadmap",
    description: "Comprehensive AI strategy development aligned with your business objectives and market positioning.",
    features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Risk Assessment"]
  },
  {
    icon: Code,
    title: "AI-First Engineering",
    description: "Full-stack development with AI capabilities baked in from day one, not bolted on as an afterthought.",
    features: ["LLM Integration", "ML Pipeline Design", "AI-Native Architecture", "Scalable Infrastructure"]
  },
  {
    icon: BarChart3,
    title: "MLOps & LLMOps",
    description: "End-to-end machine learning operations setup for continuous model improvement and deployment.",
    features: ["Model Versioning", "A/B Testing", "Performance Monitoring", "Automated Retraining"]
  },
  {
    icon: Shield,
    title: "AI Governance & Compliance",
    description: "Establish responsible AI practices that meet regulatory requirements and ethical standards.",
    features: ["Bias Detection", "Explainability", "Audit Trails", "Policy Frameworks"]
  },
  {
    icon: LineChart,
    title: "Digital Transformation",
    description: "Holistic transformation leveraging AI to reimagine processes, products, and customer experiences.",
    features: ["Process Automation", "Customer Intelligence", "Predictive Analytics", "Digital Products"]
  },
  {
    icon: Lightbulb,
    title: "Innovation Labs",
    description: "Dedicated innovation sprints to explore emerging AI technologies and prototype new solutions.",
    features: ["Rapid Prototyping", "POC Development", "Technology Scouting", "Innovation Workshops"]
  }
];

const process = [
  { step: "01", title: "Discovery", description: "Deep dive into your business challenges and opportunities" },
  { step: "02", title: "Strategy", description: "Develop a comprehensive AI roadmap tailored to your needs" },
  { step: "03", title: "Build", description: "Implement solutions with our AI-first engineering approach" },
  { step: "04", title: "Deploy", description: "Production deployment with enterprise-grade security" },
  { step: "05", title: "Optimize", description: "Continuous improvement through monitoring and feedback" },
];

const Consulting = () => {
  return (
    <>
      <Helmet>
        <title>Consulting Services | OriginX Labs - AI-First Engineering</title>
        <meta name="description" content="Transform your business with OriginX Consulting Services. AI strategy, MLOps, digital transformation, and CMMI-aligned processes for startups and enterprises." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">OriginX Consulting Services (OCS)</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                AI-First Engineering for the
                <span className="text-accent"> Enterprise</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Transform your business with expert AI consulting, CMMI-aligned processes, 
                and battle-tested strategies that deliver measurable outcomes.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:opacity-90 transition-all"
                >
                  <Rocket className="w-4 h-4" />
                  Start a Conversation
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all"
                >
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive AI consulting and engineering services for organizations of all sizes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent/70" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground">
                A proven methodology for delivering AI transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center h-full">
                    <span className="text-4xl font-display font-bold text-accent/30">{item.step}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Why Choose OriginX Consulting?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Product-Backed Expertise</h3>
                        <p className="text-sm text-muted-foreground">Our consulting is backed by our own AI products—COGNIX, QUALYX, TRACEFLOW, and OPZENIX.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">CMMI-Aligned Processes</h3>
                        <p className="text-sm text-muted-foreground">Enterprise-grade methodologies that ensure quality, predictability, and continuous improvement.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Startup to Enterprise</h3>
                        <p className="text-sm text-muted-foreground">Flexible engagement models that scale from early-stage startups to Fortune 500 enterprises.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">Ready to Transform?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how AI can accelerate your business growth and create competitive advantage.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:opacity-90 transition-all w-full justify-center"
                  >
                    <Building2 className="w-4 h-4" />
                    Schedule a Consultation
                  </Link>
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

export default Consulting;
