import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Factory,
  Cog,
  RefreshCw,
  Eye,
  Zap,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Bot,
  Settings,
  TrendingUp,
  Clock
} from "lucide-react";

const capabilities = [
  {
    title: "Self-Optimizing Systems",
    description: "AI that continuously learns and improves operational efficiency without human intervention",
    icon: RefreshCw,
    color: "hsl(210 100% 60%)"
  },
  {
    title: "Predictive Maintenance",
    description: "Anticipate equipment failures and schedule maintenance before issues occur",
    icon: Cog,
    color: "hsl(270 100% 65%)"
  },
  {
    title: "Real-Time Monitoring",
    description: "24/7 system monitoring with instant anomaly detection and automated response",
    icon: Eye,
    color: "hsl(160 70% 45%)"
  },
  {
    title: "Autonomous Agents",
    description: "Deploy AI agents that handle complex operational tasks autonomously",
    icon: Bot,
    color: "hsl(330 70% 55%)"
  }
];

const metrics = [
  { value: "99.9%", label: "System Uptime", icon: CheckCircle2 },
  { value: "60%", label: "Efficiency Gain", icon: TrendingUp },
  { value: "24/7", label: "Autonomous Operation", icon: Clock },
  { value: "90%", label: "Issue Auto-Resolution", icon: Settings }
];

const AutonomousOps = () => {
  return (
    <>
      <Helmet>
        <title>Autonomous Operations | OriginX Labs Solutions</title>
        <meta name="description" content="Self-optimizing AI systems that run 24/7. Predictive maintenance, real-time monitoring, and autonomous decision-making." />
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
                <Factory className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Autonomous Operations</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Operations That
                <span className="text-primary"> Run Themselves</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Deploy self-optimizing AI systems that monitor, adapt, and improve 
                your operations around the clock—without constant human oversight.
              </p>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-card/30 border border-border/20">
                  <metric.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Autonomous Capabilities
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                AI-powered systems that think, learn, and act independently
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {capabilities.map((cap, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${cap.color}20` }}
                    >
                      <cap.icon className="w-6 h-6" style={{ color: cap.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground">{cap.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Explore regulated industry solutions
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/solutions/regulated"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Regulated Industries
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

export default AutonomousOps;
