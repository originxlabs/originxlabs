import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Newspaper, 
  Calendar, 
  ArrowRight, 
  Mail, 
  Download,
  ExternalLink,
  Sparkles,
  Building2,
  Rocket,
  Award
} from "lucide-react";

const pressReleases = [
  {
    date: "October 2025",
    title: "OriginX Labs Receives DPIIT Startup Recognition",
    excerpt: "OriginX Labs officially recognized by the Department for Promotion of Industry and Internal Trade as an innovative startup in the AI sector.",
    category: "Company News"
  },
  {
    date: "October 2025",
    title: "OriginX Labs Launches COGNIX: AI-Powered Backend-as-a-Service",
    excerpt: "The new platform enables developers to build intelligent applications with zero infrastructure complexity.",
    category: "Product Launch"
  },
  {
    date: "November 2025",
    title: "OriginX Labs Expands to Dubai, Establishes Global HQ",
    excerpt: "Strategic expansion positions the company for accelerated growth in Middle East and global markets.",
    category: "Expansion"
  },
  {
    date: "January 2026",
    title: "AEON: The Future of Autonomous Enterprise Intelligence",
    excerpt: "OriginX Labs unveils AEON, a multi-agent autonomous system designed for enterprise-scale operations.",
    category: "Product Launch"
  },
];

const mediaKit = [
  { name: "Company Logo Pack", format: "ZIP", size: "2.4 MB" },
  { name: "Product Logos", format: "ZIP", size: "5.1 MB" },
  { name: "Brand Guidelines", format: "PDF", size: "1.8 MB" },
  { name: "Executive Photos", format: "ZIP", size: "12 MB" },
];

const Press = () => {
  return (
    <>
      <Helmet>
        <title>Press & Media — News & Updates | OriginX Labs</title>
        <meta name="description" content="Latest news, press releases, and media resources from OriginX Labs. Stay updated on our AI innovations and company milestones." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Newspaper className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Press & Media</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                News &
                <span className="text-primary"> Updates</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Stay informed about the latest developments, product launches, and milestones 
                from OriginX Labs.
              </p>
              
              <a
                href="mailto:office@originxlabs.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all"
              >
                <Mail className="w-4 h-4" />
                Media Inquiries
              </a>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Press Releases
              </h2>
              <p className="text-muted-foreground">
                Official announcements and company news
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {pressReleases.map((release, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        {release.date}
                      </div>
                      <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                        {release.category}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {release.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{release.excerpt}</p>
                      <button className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                    Media Kit
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Download official OriginX Labs brand assets, logos, and press materials 
                    for media coverage and publications.
                  </p>
                  
                  <div className="space-y-3">
                    {mediaKit.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-4 rounded-xl bg-card/50 dark:bg-card/30 border border-border/20 hover:border-primary/30 transition-all group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          <div>
                            <p className="font-medium text-foreground text-sm">{item.name}</p>
                            <p className="text-xs text-muted-foreground">{item.format} • {item.size}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20">
                  <h3 className="text-xl font-display font-bold text-foreground mb-4">
                    Press Contact
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For media inquiries, interview requests, or additional information, 
                    please contact our communications team.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="mailto:office@originxlabs.com"
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground text-sm">General Inquiries</p>
                        <p className="text-xs text-primary">office@originxlabs.com</p>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:ceo@originxlabs.com"
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <Building2 className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Executive Office</p>
                        <p className="text-xs text-primary">ceo@originxlabs.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Facts */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Company Facts
              </h2>
              <p className="text-muted-foreground">Quick reference for media professionals</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center">
                <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">2025</p>
                <p className="text-sm text-muted-foreground">Founded</p>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center">
                <Rocket className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">6</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">DPIIT</p>
                <p className="text-sm text-muted-foreground">Recognized</p>
              </div>
              <div className="p-6 rounded-2xl bg-card/50 dark:bg-card/30 border border-border/20 text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground">Global Offices</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Press;
