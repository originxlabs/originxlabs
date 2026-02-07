import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Building2,
  Zap,
  TrendingUp,
  Users,
  Shield,
  ArrowRight,
  Target,
  BarChart3,
  Brain,
  Workflow,
  Clock,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    title: "Accelerate Innovation",
    description: "Deploy AI solutions 10x faster with pre-built components and autonomous agents",
    icon: Zap,
    stat: "10x faster"
  },
  {
    title: "Reduce Operational Costs",
    description: "Automate repetitive tasks and optimize resource allocation automatically",
    icon: TrendingUp,
    stat: "40% cost reduction"
  },
  {
    title: "Enhance Decision Making",
    description: "Data-driven insights powered by real-time analytics and predictive models",
    icon: Brain,
    stat: "3x better decisions"
  },
  {
    title: "Scale Seamlessly",
    description: "Infrastructure that grows with your business without reengineering",
    icon: Target,
    stat: "∞ scalability"
  }
];

const useCases = [
  { title: "Customer Intelligence", description: "360° view of customer behavior and preferences", icon: Users },
  { title: "Process Automation", description: "End-to-end workflow automation with AI", icon: Workflow },
  { title: "Predictive Analytics", description: "Forecast trends and anticipate market changes", icon: BarChart3 },
  { title: "Risk Management", description: "Real-time risk assessment and mitigation", icon: Shield }
];

const EnterpriseAI = () => {
  return (
    <>
      <Helmet>
        <title>Enterprise AI | OriginX Labs Solutions</title>
        <meta name="description" content="Transform your organization with enterprise-grade AI. Accelerate innovation, reduce costs, and scale seamlessly." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Enterprise AI</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Transform Your
                <span className="text-primary"> Enterprise</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Deploy enterprise-grade AI that integrates with your existing systems, 
                scales with your business, and delivers measurable ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Measurable Impact
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real business outcomes from AI transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                        <span className="text-sm font-bold text-primary">{benefit.stat}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Enterprise Use Cases
              </h2>
              <p className="text-muted-foreground">
                AI solutions for every business function
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center group hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Ready to transform your enterprise?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Schedule Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/solutions/autonomous"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all"
              >
                Autonomous Operations
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EnterpriseAI;
