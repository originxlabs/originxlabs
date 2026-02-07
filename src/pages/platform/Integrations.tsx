import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Puzzle,
  Cloud,
  Database,
  MessageSquare,
  GitBranch,
  ArrowRight,
  Zap,
  Code,
  Box,
  Workflow,
  Server,
  Lock
} from "lucide-react";

const integrationCategories = [
  {
    title: "Cloud Platforms",
    description: "Native integrations with major cloud providers",
    icon: Cloud,
    items: ["AWS", "Google Cloud", "Azure", "Vercel", "Cloudflare"]
  },
  {
    title: "Data & Analytics",
    description: "Connect to your data infrastructure",
    icon: Database,
    items: ["Snowflake", "Databricks", "BigQuery", "Redshift", "PostgreSQL"]
  },
  {
    title: "Developer Tools",
    description: "Integrate with your development workflow",
    icon: GitBranch,
    items: ["GitHub", "GitLab", "Jira", "Linear", "Notion"]
  },
  {
    title: "Communication",
    description: "Stay connected with your team",
    icon: MessageSquare,
    items: ["Slack", "Microsoft Teams", "Discord", "Email", "Webhooks"]
  }
];

const apiFeatures = [
  { icon: Code, title: "RESTful APIs", description: "Standard REST endpoints for all operations" },
  { icon: Zap, title: "GraphQL", description: "Flexible queries for complex data needs" },
  { icon: Workflow, title: "Webhooks", description: "Real-time event notifications" },
  { icon: Box, title: "SDKs", description: "Native libraries for Python, Node.js, Go" }
];

const Integrations = () => {
  return (
    <>
      <Helmet>
        <title>Platform Integrations — Connect Your Stack | OriginX Labs</title>
        <meta name="description" content="Connect OriginX Labs with your existing stack. Native integrations with cloud platforms, databases, developer tools, and more." />
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
                <Puzzle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Integrations</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Connect with
                <span className="text-primary"> Everything</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Seamlessly integrate OriginX Labs with your existing tools and infrastructure. 
                No rip-and-replace required.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Native Integrations
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pre-built connectors for the tools you already use
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {integrationCategories.map((category, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API Features */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Developer-First APIs
              </h2>
              <p className="text-muted-foreground">
                Build custom integrations with our comprehensive API suite
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {apiFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center group hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Simple Integration
                </h2>
                <p className="text-muted-foreground">
                  Get started with just a few lines of code
                </p>
              </div>
              
              <div className="rounded-2xl bg-card dark:bg-[hsl(220,20%,8%)] border border-border/20 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/20">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/80" />
                  <div className="w-3 h-3 rounded-full bg-primary/80" />
                  <span className="ml-4 text-xs text-muted-foreground">example.py</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto">
                  <code className="text-muted-foreground">
{`from originx import Client

client = Client(api_key="your-api-key")

# Create an autonomous agent
agent = client.agents.create(
    name="data-processor",
    type="task",
    capabilities=["extract", "transform"]
)

# Execute a task
result = agent.execute(
    task="Process quarterly reports",
    data=documents
)

print(result.summary)`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Explore our solutions
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/solutions/enterprise"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                Enterprise AI
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Integrations;
