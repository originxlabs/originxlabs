import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Gauge,
  Server,
  Globe,
  Shield,
  ArrowRight,
  Activity,
  Clock,
  CheckCircle2,
  Zap,
  BarChart3,
  RefreshCw,
  Cloud
} from "lucide-react";

const features = [
  {
    title: "Auto-Scaling",
    description: "Automatically scale compute resources based on demand. Handle traffic spikes without intervention.",
    icon: BarChart3,
    stat: "0→100K RPS"
  },
  {
    title: "Global Distribution",
    description: "Deploy across multiple regions for low-latency access worldwide. Data residency controls included.",
    icon: Globe,
    stat: "25+ regions"
  },
  {
    title: "High Availability",
    description: "Multi-zone redundancy with automatic failover. No single points of failure.",
    icon: RefreshCw,
    stat: "99.99% SLA"
  },
  {
    title: "Edge Computing",
    description: "Process data at the edge for ultra-low latency applications. Ideal for real-time AI inference.",
    icon: Zap,
    stat: "<10ms latency"
  }
];

const slaMetrics = [
  { metric: "Uptime", value: "99.99%", icon: CheckCircle2 },
  { metric: "Response Time", value: "<50ms", icon: Clock },
  { metric: "Recovery Time", value: "<1min", icon: RefreshCw },
  { metric: "Data Durability", value: "11 9s", icon: Shield }
];

const ScaleReliability = () => {
  return (
    <>
      <Helmet>
        <title>Scale & Reliability | OriginX Labs Solutions</title>
        <meta name="description" content="Mission-critical AI deployments with 99.99% uptime SLA. Auto-scaling, global distribution, and enterprise reliability." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Gauge className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Scale & Reliability</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Built for
                <span className="text-primary"> Mission Critical</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Enterprise-grade infrastructure that scales with your business. 
                99.99% uptime SLA with global redundancy and automatic failover.
              </p>
            </div>
          </div>
        </section>

        {/* SLA Metrics */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {slaMetrics.map((item, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-card/30 border border-border/20">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Enterprise Infrastructure
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Infrastructure designed for the most demanding workloads
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                        <span className="text-sm font-bold text-primary">{feature.stat}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Diagram */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                Global Infrastructure
              </h2>
              
              <div className="relative p-8 rounded-3xl bg-card/30 border border-border/20">
                <div className="grid grid-cols-3 gap-8">
                  {["Americas", "Europe", "Asia Pacific"].map((region, i) => (
                    <div key={i} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                        <Globe className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground">{region}</h4>
                      <p className="text-xs text-muted-foreground">Multi-zone</p>
                    </div>
                  ))}
                </div>
                
                {/* Connection lines */}
                <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Explore digital experience intelligence
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/solutions/experience"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Digital Experience
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

export default ScaleReliability;
