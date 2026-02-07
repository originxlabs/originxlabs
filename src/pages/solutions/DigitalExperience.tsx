import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Zap,
  Eye,
  MousePointer,
  BarChart3,
  TrendingUp,
  ArrowRight,
  Users,
  Target,
  Activity,
  LineChart,
  Sparkles,
  Brain
} from "lucide-react";

const capabilities = [
  {
    title: "Session Intelligence",
    description: "Understand every user journey with AI-powered session analysis and behavioral insights",
    icon: Eye,
    metrics: "100% session capture"
  },
  {
    title: "Conversion Optimization",
    description: "Identify friction points and optimize user flows with predictive recommendations",
    icon: Target,
    metrics: "35% conversion lift"
  },
  {
    title: "Real-Time Analytics",
    description: "Live dashboards showing user behavior, engagement metrics, and anomaly detection",
    icon: Activity,
    metrics: "Sub-second insights"
  },
  {
    title: "Personalization Engine",
    description: "Deliver tailored experiences based on user segments, behavior, and preferences",
    icon: Users,
    metrics: "1:1 personalization"
  }
];

const insights = [
  { title: "User Flow Analysis", description: "Visual journey mapping with drop-off identification", icon: LineChart },
  { title: "Engagement Scoring", description: "AI-powered engagement metrics for every user", icon: BarChart3 },
  { title: "Predictive Behavior", description: "Anticipate user actions before they happen", icon: Brain },
  { title: "A/B Testing", description: "Statistical testing with AI-optimized variants", icon: Sparkles }
];

const DigitalExperience = () => {
  return (
    <>
      <Helmet>
        <title>Digital Experience Intelligence | OriginX Labs Solutions</title>
        <meta name="description" content="AI-powered user behavior analysis and optimization. Session intelligence, conversion optimization, and real-time personalization." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Digital Experience Intelligence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Understand Every
                <span className="text-primary"> User Journey</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                AI-powered analytics that reveal what your users do, why they do it, 
                and how to create experiences that convert.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Experience Intelligence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Deep insights into user behavior and engagement
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
                        <span className="text-xs font-medium text-primary">{cap.metrics}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{cap.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                AI-Powered Insights
              </h2>
              <p className="text-muted-foreground">
                Turn data into actionable intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {insights.map((insight, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center group hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <insight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Real-Time Dashboard
                </h2>
              </div>
              
              <div className="p-6 rounded-3xl bg-card/30 border border-border/20">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Active Users", value: "2,847", change: "+12%" },
                    { label: "Conversion Rate", value: "4.2%", change: "+0.8%" },
                    { label: "Avg. Session", value: "5m 42s", change: "+23s" }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/30 text-center">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      <span className="text-xs text-primary font-medium">{stat.change}</span>
                    </div>
                  ))}
                </div>
                
                {/* Mini chart representation */}
                <div className="h-32 rounded-xl bg-muted/20 flex items-end justify-around px-4 pb-4">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <div 
                      key={i} 
                      className="w-4 bg-primary/60 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to understand your users?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products/traceflow"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all"
              >
                Explore TRACEFLOW
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DigitalExperience;
