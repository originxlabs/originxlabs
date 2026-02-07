import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Layers,
  Server,
  Database,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  Network,
  Box,
  GitBranch,
  Lock,
  Cpu
} from "lucide-react";

const architectureLayers = [
  {
    title: "Intelligence Layer",
    description: "Neural networks, LLMs, and autonomous reasoning engines",
    icon: Cpu,
    color: "hsl(210 100% 60%)",
    features: ["Multi-modal AI models", "Context-aware reasoning", "Adaptive learning systems"]
  },
  {
    title: "Orchestration Layer",
    description: "Workflow automation and agent coordination",
    icon: GitBranch,
    color: "hsl(270 100% 65%)",
    features: ["Agent orchestration", "Task scheduling", "Event-driven pipelines"]
  },
  {
    title: "Data Layer",
    description: "Secure, scalable data infrastructure",
    icon: Database,
    color: "hsl(160 70% 45%)",
    features: ["Vector databases", "Real-time streaming", "Data versioning"]
  },
  {
    title: "Infrastructure Layer",
    description: "Cloud-native, globally distributed systems",
    icon: Cloud,
    color: "hsl(330 70% 55%)",
    features: ["Auto-scaling", "Multi-region deployment", "Edge computing"]
  }
];

const principles = [
  { icon: Lock, title: "Security by Design", description: "Every component built with zero-trust architecture" },
  { icon: Zap, title: "Performance First", description: "Sub-millisecond latency at enterprise scale" },
  { icon: Network, title: "Distributed", description: "No single point of failure, globally resilient" },
  { icon: Box, title: "Modular", description: "Composable components for flexible deployment" }
];

const Architecture = () => {
  return (
    <>
      <Helmet>
        <title>Platform Architecture & Intelligence Model | OriginX Labs</title>
        <meta name="description" content="Explore the technical architecture behind OriginX Labs' AI platform. Built for scale, security, and autonomous operations." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Platform Architecture</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Built for
                <span className="text-primary"> Autonomous Scale</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                A cloud-native architecture designed for AI-first enterprises. 
                Secure, scalable, and built to evolve with intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture Layers */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Layered Architecture
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Four interconnected layers working in harmony to deliver autonomous intelligence
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {architectureLayers.map((layer, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${layer.color}20` }}
                    >
                      <layer.icon className="w-7 h-7" style={{ color: layer.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{layer.title}</h3>
                      <p className="text-muted-foreground mb-4">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Layer {index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Design Principles
              </h2>
              <p className="text-muted-foreground">
                Core principles that guide our architecture decisions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to explore our platform?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Discover how our architecture powers autonomous AI systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/platform/intelligence"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Intelligence Model
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Architecture;
