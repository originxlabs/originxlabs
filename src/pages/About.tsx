import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  MapPin, 
  Calendar, 
  Rocket, 
  Globe, 
  Users, 
  Target, 
  Heart,
  Sparkles,
  ArrowRight,
  Building2,
  Zap,
  Shield
} from "lucide-react";

const milestones = [
  { year: "2025", title: "Foundation", description: "OriginX Labs founded in Odisha, India with a vision to democratize AI" },
  { year: "2025", title: "DPIIT Recognition", description: "Received official startup recognition from Government of India" },
  { year: "2025", title: "Product Suite", description: "Launched COGNIX, QUALYX, TRACEFLOW, and OPZENIX platforms" },
  { year: "2026", title: "Global Expansion", description: "Established presence in Bangalore, USA, and Dubai (Global HQ)" },
];

const values = [
  { 
    icon: Shield, 
    title: "Ethics First", 
    description: "Every AI system we build is governed by ethical principles and human oversight." 
  },
  { 
    icon: Heart, 
    title: "Human-Centric", 
    description: "Technology should augment human capability, not replace human judgment." 
  },
  { 
    icon: Zap, 
    title: "Innovation", 
    description: "Pushing the boundaries of what's possible with autonomous AI systems." 
  },
  { 
    icon: Globe, 
    title: "Global Impact", 
    description: "Building solutions that transform enterprises across the world." 
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About OriginX Labs</title>
        <meta name="description" content="Learn about OriginX Labs, a next-generation AI company building autonomous intelligence with ethics at the core. From Odisha to the world." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Story</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                From a Small Town to
                <span className="text-primary"> Global Innovation</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                OriginX Labs is a next-generation AI and Agentic Systems company, 
                building autonomous intelligence with ethics at the core.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Odisha → Bangalore → USA → Dubai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Founded October 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    The Origin Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      OriginX Labs was born from a simple yet profound belief: that the future of 
                      artificial intelligence lies not in replacing human intelligence, but in 
                      amplifying it.
                    </p>
                    <p>
                      Founded by Abhishek Panda and Namrata Sahoo in Odisha, India, the company 
                      emerged from years of research and development in autonomous systems, 
                      machine learning, and enterprise software.
                    </p>
                    <p>
                      What started as a vision in a small town has grown into a global enterprise, 
                      with offices spanning four countries and a product suite that's transforming 
                      how businesses approach AI.
                    </p>
                  </div>
                </div>
                
                <div className="p-8 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20">
                  <div className="text-center mb-6">
                    <p className="text-6xl font-display font-bold text-primary mb-2">"</p>
                    <p className="text-lg font-display italic text-foreground">
                      This company is inevitable.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center p-4 rounded-xl bg-muted/30">
                      <p className="text-3xl font-bold text-foreground">4</p>
                      <p className="text-xs text-muted-foreground">Global Offices</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-muted/30">
                      <p className="text-3xl font-bold text-foreground">6</p>
                      <p className="text-xs text-muted-foreground">Products</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-muted/30">
                      <p className="text-3xl font-bold text-foreground">2025</p>
                      <p className="text-xs text-muted-foreground">Founded</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-muted/30">
                      <p className="text-3xl font-bold text-foreground">∞</p>
                      <p className="text-xs text-muted-foreground">Possibilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we build
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground">
                Key milestones in the OriginX Labs story
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-sm font-bold text-primary">{milestone.year}</span>
                    </div>
                    <div className="flex-shrink-0 relative">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                      {index < milestones.length - 1 && (
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-border" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
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
              Ready to learn more?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Explore our products or meet the team behind OriginX Labs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/leadership"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                <Users className="w-4 h-4" />
                Meet Our Team
              </Link>
              <Link
                to="/#products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all"
              >
                <Rocket className="w-4 h-4" />
                Explore Products
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
