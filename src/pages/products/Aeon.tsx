import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTheme } from "next-themes";
import { 
  ArrowLeft, Users, RefreshCw, Shield, Heart, Building, Sparkles, Eye, 
  Brain, Cpu, Zap, Network, Globe, Lock, TrendingUp, Activity, BarChart3
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHoverCard from "@/components/ProductHoverCard";
import AeonLogo from "@/components/AeonLogo";
import { products } from "@/config/products";

const capabilities = [
  { 
    title: "Multi-Agent Architecture", 
    description: "Autonomous agents that communicate, coordinate, and collaborate to solve complex enterprise problems.",
    icon: Users,
    stat: "100+",
    statLabel: "Concurrent Agents"
  },
  { 
    title: "Self-Healing Systems", 
    description: "Systems that detect anomalies, diagnose root causes, and autonomously recover without human intervention.",
    icon: RefreshCw,
    stat: "99.99%",
    statLabel: "Auto-Recovery"
  },
  { 
    title: "Human-in-the-Loop", 
    description: "Configurable governance models that keep humans in control of critical decisions and escalations.",
    icon: Eye,
    stat: "<100ms",
    statLabel: "Escalation Time"
  },
  { 
    title: "Ethics-First Design", 
    description: "Compliant, auditable, and responsible by design. Every decision can be explained and justified.",
    icon: Shield,
    stat: "A+",
    statLabel: "Ethics Grade"
  },
  { 
    title: "Emotion-Aware", 
    description: "Advanced context understanding that considers sentiment, urgency, and stakeholder dynamics.",
    icon: Heart,
    stat: "98.5%",
    statLabel: "Sentiment Accuracy"
  },
  { 
    title: "Enterprise-Ready", 
    description: "Designed for autonomy at scale with enterprise security, compliance, and governance built in.",
    icon: Building,
    stat: "SOC2",
    statLabel: "Compliant"
  },
];

const architectureLayers = [
  { name: "Perception Layer", description: "Multi-modal input processing and context extraction", icon: Eye, color: "hsl(250 80% 60%)" },
  { name: "Reasoning Layer", description: "Causal inference, planning, and decision making", icon: Brain, color: "hsl(260 75% 55%)" },
  { name: "Execution Layer", description: "Coordinated action across agents and systems", icon: Zap, color: "hsl(270 70% 50%)" },
  { name: "Learning Layer", description: "Continuous improvement through feedback loops", icon: TrendingUp, color: "hsl(280 65% 55%)" },
  { name: "Governance Layer", description: "Policy enforcement and compliance monitoring", icon: Lock, color: "hsl(290 70% 50%)" },
];

const metrics = [
  { label: "Decision Accuracy", value: 99.9, suffix: "%", icon: BarChart3 },
  { label: "Response Time", value: 47, suffix: "ms", icon: Zap },
  { label: "Uptime", value: 99.99, suffix: "%", icon: Activity },
  { label: "Agent Networks", value: 1000, suffix: "+", icon: Network },
];

// Animated counter hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return count;
};

// Animated metric card
const MetricCard = ({ metric, delay }: { metric: typeof metrics[0]; delay: number }) => {
  const { resolvedTheme } = useTheme();
  const count = useCounter(metric.value, 2000);
  
  return (
    <div 
      className={`p-6 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-105 ${
        resolvedTheme === 'dark'
          ? 'bg-card/20 border border-white/10 hover:border-white/30'
          : 'bg-card/50 border-2 border-foreground/10 hover:border-foreground/30'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <metric.icon className="w-6 h-6 text-primary mb-3" />
      <div className="text-3xl font-bold text-foreground mb-1">
        {count}{metric.suffix}
      </div>
      <div className="text-sm text-muted-foreground">{metric.label}</div>
    </div>
  );
};

// Neural network animation
const NeuralNetworkAnimation = () => {
  const nodes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg className="w-full h-full">
        {nodes.map((node, i) => (
          <g key={node.id}>
            {/* Connections */}
            {nodes.slice(i + 1, i + 4).map((target) => (
              <line
                key={`${node.id}-${target.id}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: `${node.delay}s` }}
              />
            ))}
            {/* Nodes */}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="3"
              fill="hsl(var(--primary))"
              className="animate-pulse"
              style={{ animationDelay: `${node.delay}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

// Animated bar chart for hero
const HeroBarChart = () => {
  const bars = [65, 85, 70, 95, 80, 90, 75, 98];
  
  return (
    <div className="flex items-end gap-2 h-32">
      {bars.map((height, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-md bg-gradient-to-t from-primary/40 to-primary/80 transition-all duration-1000"
          style={{
            height: `${height}%`,
            animation: `growUp 1s ease-out ${i * 0.1}s forwards`,
            transform: 'scaleY(0)',
            transformOrigin: 'bottom',
          }}
        />
      ))}
    </div>
  );
};

// Animated ring chart
const RingChart = ({ percentage, label, color }: { percentage: number; label: string; color: string }) => {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            strokeOpacity="0.2"
          />
          <circle
            cx="48"
            cy="48"
            r="40"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000"
            style={{ animation: 'drawRing 1.5s ease-out forwards' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-foreground">{percentage}%</span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground mt-2">{label}</span>
    </div>
  );
};

const Aeon = () => {
  const product = products.aeon;
  const { resolvedTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AEON",
    "applicationCategory": "BusinessApplication",
    "description": "Autonomous Enterprise Intelligence - Multi-agent autonomous systems with human-in-the-loop governance, ethics-first design, and enterprise-grade compliance.",
    "operatingSystem": "Cloud",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/ContactForPrice"
    },
    "publisher": {
      "@type": "Organization",
      "name": "OriginX Labs Pvt. Ltd.",
      "url": "https://originxlabs.com",
      "logo": "https://originxlabs.com/logo.svg"
    },
    "featureList": [
      "Multi-Agent Architecture",
      "Self-Healing Systems",
      "Human-in-the-Loop Governance",
      "Ethics-First Design",
      "Emotion-Aware Intelligence",
      "Enterprise Security & Compliance"
    ]
  };

  return (
    <>
      <Helmet>
        <title>AEON - Autonomous Enterprise Intelligence | OriginX Labs</title>
        <meta name="description" content="The pinnacle of autonomous systems. AEON represents multi-agent architectures that don't just execute—they reason, collaborate, and evolve. Supreme intelligence, governed by ethics." />
        <meta property="og:title" content="AEON - Autonomous Enterprise Intelligence" />
        <meta property="og:description" content="Multi-agent autonomous systems with human-in-the-loop governance and ethics-first design." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Cinematic Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Neural Network Background */}
          <NeuralNetworkAnimation />
          
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <Link 
              to="/#products" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
            
            <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-flex px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary border border-primary/30 rounded-full animate-pulse">
                Flagship Product
              </span>
            </div>

            {/* AEON Premium Triangular Logo */}
            <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <ProductHoverCard
                productId="aeon"
                productName="AEON"
                gradientFrom={product.gradientFrom}
                gradientTo={product.gradientTo}
              >
                <AeonLogo size="xl" animated />
              </ProductHoverCard>
            </div>
            
            <h1 className={`font-display text-6xl md:text-8xl font-bold text-foreground mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              AEON
            </h1>
            
            <p className={`text-2xl md:text-3xl text-muted-foreground mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Autonomous Enterprise Intelligence
            </p>
            
            <p className={`text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              The pinnacle of autonomous systems. AEON represents multi-agent architectures that don't just execute—they reason, collaborate, and evolve.
            </p>
            
            {/* Quote Card */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div 
                className={`inline-flex p-8 rounded-2xl backdrop-blur-sm ${
                  resolvedTheme === 'dark'
                    ? 'bg-card/20 border border-white/10'
                    : 'bg-card/50 border-2 border-foreground/10'
                }`}
              >
                <p className="text-foreground text-xl md:text-2xl font-display font-medium italic">
                  "Supreme intelligence, governed by ethics."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Metrics Section */}
        <section className="py-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(ellipse at center, ${product.gradientFrom} 0%, transparent 60%)`,
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Real-Time Performance
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Live metrics demonstrating AEON's autonomous capabilities across enterprise deployments.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {metrics.map((metric, i) => (
                <MetricCard key={metric.label} metric={metric} delay={i * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Charts Section */}
        <section className="py-20 bg-muted/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Intelligence Metrics
              </h2>
              <p className="text-muted-foreground">
                Visual representation of AEON's operational excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Bar Chart Card */}
              <div 
                className={`p-6 rounded-2xl backdrop-blur-sm ${
                  resolvedTheme === 'dark'
                    ? 'bg-card/20 border border-white/10'
                    : 'bg-card/50 border-2 border-foreground/10'
                }`}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">Agent Performance Index</h3>
                <HeroBarChart />
                <p className="text-xs text-muted-foreground mt-4">Weekly performance across agent networks</p>
              </div>
              
              {/* Ring Charts Card */}
              <div 
                className={`p-6 rounded-2xl backdrop-blur-sm ${
                  resolvedTheme === 'dark'
                    ? 'bg-card/20 border border-white/10'
                    : 'bg-card/50 border-2 border-foreground/10'
                }`}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">System Health</h3>
                <div className="flex justify-around items-center">
                  <RingChart percentage={99} label="Accuracy" color={product.gradientFrom} />
                  <RingChart percentage={95} label="Efficiency" color={product.gradientTo} />
                  <RingChart percentage={100} label="Compliance" color="hsl(160 70% 45%)" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Core Capabilities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AEON combines multiple AI paradigms into a unified system that can handle the complexity of real-world enterprise challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {capabilities.map((cap, index) => (
                <div
                  key={cap.title}
                  className={`p-8 rounded-2xl bg-card/30 transition-all duration-300 group hover:scale-[1.02] hover:shadow-xl ${
                    resolvedTheme === 'dark'
                      ? 'border border-white/10 hover:border-white/30'
                      : 'border-2 border-foreground/10 hover:border-foreground/30'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <cap.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{cap.stat}</div>
                      <div className="text-xs text-muted-foreground">{cap.statLabel}</div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{cap.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="py-32 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Layered Architecture
                </h2>
                <p className="text-muted-foreground">
                  A sophisticated multi-layer architecture designed for scalability, reliability, and governance.
                </p>
              </div>
              
              <div className="space-y-4">
                {architectureLayers.map((layer, index) => (
                  <div
                    key={layer.name}
                    className={`flex items-center gap-6 p-6 rounded-xl bg-card/30 transition-all duration-300 hover:scale-[1.02] ${
                      resolvedTheme === 'dark'
                        ? 'border border-white/10 hover:border-white/30'
                        : 'border-2 border-foreground/10 hover:border-foreground/30'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${layer.color}40, ${layer.color}20)` }}
                    >
                      <layer.icon className="w-5 h-5" style={{ color: layer.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground">{layer.name}</h4>
                      <p className="text-muted-foreground text-sm">{layer.description}</p>
                    </div>
                    <div className="hidden md:block w-32 h-8">
                      <div className="flex items-end gap-1 h-full">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm"
                            style={{
                              height: `${30 + Math.random() * 70}%`,
                              background: layer.color,
                              opacity: 0.6 + Math.random() * 0.4,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                The AEON Philosophy
              </h2>
              
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We believe autonomous systems should augment human capability, not replace human judgment. 
                  AEON is designed with the principle that the most powerful AI systems are those that know when to defer to humans.
                </p>
                <p>
                  Every decision made by AEON can be traced, explained, and audited. 
                  We don't build black boxes—we build transparent systems that earn trust through accountability.
                </p>
                <p>
                  True enterprise intelligence isn't about raw computational power. 
                  It's about understanding context, respecting constraints, and delivering outcomes that align with organizational values.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Ready to explore autonomous intelligence?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              AEON is deployed in select enterprise environments. Contact us to discuss how autonomous systems can transform your operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Sparkles className="h-5 w-5" />
              Talk to OriginX
            </Link>
          </div>
        </section>

        <Footer />
      </div>
      
      {/* Global styles for animations */}
      <style>{`
        @keyframes growUp {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes drawRing {
          from { stroke-dashoffset: 251.2; }
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </>
  );
};

export default Aeon;
