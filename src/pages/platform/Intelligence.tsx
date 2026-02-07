import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Brain,
  Sparkles,
  Network,
  Cpu,
  Zap,
  Target,
  ArrowRight,
  Activity,
  Eye,
  MessageSquare,
  Lightbulb,
  TrendingUp
} from "lucide-react";

const capabilities = [
  {
    title: "Multi-Modal Understanding",
    description: "Process and understand text, images, audio, and structured data simultaneously",
    icon: Eye,
    metrics: "15+ data formats"
  },
  {
    title: "Contextual Reasoning",
    description: "Deep understanding of context, intent, and domain-specific nuances",
    icon: Brain,
    metrics: "99.2% accuracy"
  },
  {
    title: "Adaptive Learning",
    description: "Continuous improvement through feedback loops and real-world interactions",
    icon: TrendingUp,
    metrics: "24/7 learning"
  },
  {
    title: "Natural Language",
    description: "Human-like conversation and communication across 50+ languages",
    icon: MessageSquare,
    metrics: "50+ languages"
  }
];

const modelTypes = [
  { name: "Foundation Models", description: "Large-scale pretrained models for general intelligence", color: "hsl(210 100% 60%)" },
  { name: "Domain Models", description: "Specialized models for industry-specific tasks", color: "hsl(270 100% 65%)" },
  { name: "Agent Models", description: "Autonomous decision-making and task execution", color: "hsl(160 70% 45%)" },
  { name: "Safety Models", description: "Guardrails and ethical constraint enforcement", color: "hsl(330 70% 55%)" }
];

const Intelligence = () => {
  return (
    <>
      <Helmet>
        <title>Platform Intelligence Model — Autonomous AI Reasoning | OriginX Labs</title>
        <meta name="description" content="Discover how OriginX Labs' intelligence model works. Multi-modal AI with contextual reasoning and adaptive learning." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Intelligence Model</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                How OriginX
                <span className="text-primary"> Thinks</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                A multi-layered intelligence architecture that combines deep learning, 
                symbolic reasoning, and continuous adaptation.
              </p>
            </div>
          </div>
        </section>

        {/* Neural Network Visualization */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative p-8 rounded-3xl bg-card/30 border border-border/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                
                {/* Animated neural network representation */}
                <div className="relative flex items-center justify-center py-12">
                  <div className="flex items-center gap-8 md:gap-16">
                    {/* Input layer */}
                    <div className="flex flex-col gap-3">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-4 h-4 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                      ))}
                    </div>
                    
                    {/* Hidden layers */}
                    <div className="flex flex-col gap-2">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="w-3 h-3 rounded-full bg-accent/60 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-3 h-3 rounded-full bg-secondary/60 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    
                    {/* Output layer */}
                    <div className="flex flex-col gap-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-5 h-5 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${i * 0.25}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative flex justify-between text-xs text-muted-foreground mt-4">
                  <span>Input Processing</span>
                  <span>Deep Reasoning</span>
                  <span>Output Generation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Core Capabilities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Advanced AI capabilities that power autonomous decision-making
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {capabilities.map((cap, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <cap.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{cap.title}</h3>
                        <span className="text-xs text-primary font-medium">{cap.metrics}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{cap.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Model Types */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Model Ecosystem
              </h2>
              <p className="text-muted-foreground">
                Specialized models working together for comprehensive intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {modelTypes.map((model, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center group hover:border-primary/30 transition-all"
                >
                  <div 
                    className="w-3 h-3 rounded-full mx-auto mb-4"
                    style={{ backgroundColor: model.color }}
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{model.name}</h3>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Explore autonomy & agents
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/platform/autonomy"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Autonomy & Agents
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

export default Intelligence;
