import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Bot,
  Workflow,
  Sparkles,
  Target,
  Zap,
  ArrowRight,
  Play,
  Pause,
  RefreshCw,
  CheckCircle2,
  Clock,
  GitBranch,
  Users
} from "lucide-react";

const agentTypes = [
  {
    title: "Task Agents",
    description: "Single-purpose agents that excel at specific tasks with high precision",
    icon: Target,
    examples: ["Data extraction", "Document processing", "Code review"]
  },
  {
    title: "Workflow Agents",
    description: "Orchestrate complex multi-step processes autonomously",
    icon: Workflow,
    examples: ["CI/CD pipelines", "Approval workflows", "Data pipelines"]
  },
  {
    title: "Supervisor Agents",
    description: "Coordinate and manage other agents, handle escalations",
    icon: Users,
    examples: ["Team coordination", "Resource allocation", "Quality assurance"]
  },
  {
    title: "Learning Agents",
    description: "Continuously improve through feedback and experience",
    icon: RefreshCw,
    examples: ["Pattern recognition", "Anomaly detection", "Optimization"]
  }
];

const autonomyLevels = [
  { level: 1, name: "Assisted", description: "Human-initiated, AI-assisted tasks", color: "hsl(210 100% 60%)" },
  { level: 2, name: "Supervised", description: "AI-initiated with human approval", color: "hsl(180 70% 50%)" },
  { level: 3, name: "Monitored", description: "Autonomous with human oversight", color: "hsl(150 70% 50%)" },
  { level: 4, name: "Collaborative", description: "AI and humans working together", color: "hsl(120 60% 50%)" },
  { level: 5, name: "Autonomous", description: "Full autonomy within guardrails", color: "hsl(90 70% 50%)" }
];

const Autonomy = () => {
  return (
    <>
      <Helmet>
        <title>Platform Autonomy & Agents — Agentic AI Systems | OriginX Labs</title>
        <meta name="description" content="Discover OriginX Labs' agentic AI capabilities. From task agents to fully autonomous systems with human oversight." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Autonomy & Agents</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Intelligent Agents,
                <span className="text-primary"> Human Control</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Deploy autonomous AI agents that work 24/7 while maintaining 
                complete human oversight and control.
              </p>
            </div>
          </div>
        </section>

        {/* Autonomy Levels */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Levels of Autonomy
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the right level of autonomy for your use case
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Progress bar */}
                <div className="absolute top-6 left-0 right-0 h-1 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-primary via-accent to-secondary" />
                </div>
                
                <div className="grid grid-cols-5 gap-2">
                  {autonomyLevels.map((item, index) => (
                    <div key={index} className="relative pt-10 text-center">
                      <div 
                        className="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-background"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="mt-4">
                        <span className="text-xs font-bold text-primary">L{item.level}</span>
                        <h4 className="text-sm font-semibold text-foreground mt-1">{item.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1 hidden md:block">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Types */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Agent Ecosystem
              </h2>
              <p className="text-muted-foreground">
                Specialized agents for every enterprise need
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {agentTypes.map((agent, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <agent.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{agent.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{agent.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {agent.examples.map((example, i) => (
                          <span key={i} className="px-2 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent Workflow */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Agent Lifecycle
                </h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Play, label: "Deploy", desc: "Instant activation" },
                  { icon: Clock, label: "Execute", desc: "24/7 operation" },
                  { icon: CheckCircle2, label: "Report", desc: "Real-time status" },
                  { icon: RefreshCw, label: "Learn", desc: "Continuous improvement" }
                ].map((step, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-card/30 border border-border/20">
                    <step.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">{step.label}</h4>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Learn about security & governance
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/platform/security"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Security & Governance
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

export default Autonomy;
