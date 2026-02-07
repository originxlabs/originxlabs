import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Award, 
  Sparkles,
  ExternalLink,
  Quote,
  Building2,
  Rocket,
  Globe
} from "lucide-react";
import abhishekPhoto from "@/assets/abhishek-panda.jpg";

const books = [
  { title: "AWAKE While Alive!", link: "https://www.amazon.in/AWAKE-WHILE-ALIVE-Generation-Refuses/dp/B0FSR4YFMC/" },
  { title: "Between God & Human", link: "https://www.amazon.in/s?k=Between+God+%26+Human+Abhishek+Panda" },
  { title: "The Perfect Imperfectionist", link: "https://www.amazon.in/s?k=The+Perfect+Imperfectionist+Abhishek+Panda" }
];

const achievements = [
  { icon: Building2, label: "Founded OriginX Labs", value: "2025" },
  { icon: Globe, label: "Global Offices", value: "4" },
  { icon: BookOpen, label: "Published Books", value: "3" },
  { icon: Award, label: "DPIIT Recognition", value: "✓" },
];

const Leadership = () => {
  const { resolvedTheme } = useTheme();
  
  return (
    <>
      <Helmet>
        <title>Leadership — Meet Our Founders | OriginX Labs</title>
        <meta name="description" content="Meet the visionary leadership behind OriginX Labs. Learn about Abhishek Panda, CEO & Founder, and the team building the future of autonomous AI." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Leadership</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Visionary Minds Behind
                <span className="text-primary"> OriginX Labs</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Meet the leaders who are building the future of autonomous AI with ethics at the core.
              </p>
            </div>
          </div>
        </section>

        {/* CEO Profile Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Main Profile Card */}
              <div 
                className={`relative p-8 md:p-12 rounded-3xl bg-card/50 backdrop-blur-sm overflow-hidden ${
                  resolvedTheme === 'dark'
                    ? 'border border-white/10'
                    : 'border-2 border-foreground/10'
                }`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
                
                <div className="grid lg:grid-cols-5 gap-12 relative z-10">
                  {/* Photo Column */}
                  <div className="lg:col-span-2">
                    <div className="relative group">
                      {/* Photo container */}
                      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl">
                        <img 
                          src={abhishekPhoto}
                          alt="Abhishek Panda - CEO & Founder"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        
                        {/* Name overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h2 className="text-2xl font-display font-bold text-foreground mb-1">
                            Abhishek Panda
                          </h2>
                          <p className="text-primary font-medium">CEO & Founder</p>
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-3 mt-6">
                      <a 
                        href="https://www.abhishekpanda.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/20 hover:border-primary/30 flex items-center justify-center transition-all duration-300 group"
                        title="Personal Website"
                      >
                        <Globe className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                      </a>
                      <a 
                        href="mailto:ceo@originxlabs.com"
                        className="w-12 h-12 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/20 hover:border-primary/30 flex items-center justify-center transition-all duration-300 group"
                      >
                        <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                      </a>
                      <a 
                        href="#"
                        className="w-12 h-12 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/20 hover:border-primary/30 flex items-center justify-center transition-all duration-300 group"
                      >
                        <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                      </a>
                      <a 
                        href="#"
                        className="w-12 h-12 rounded-full bg-muted/50 hover:bg-primary/10 border border-border/20 hover:border-primary/30 flex items-center justify-center transition-all duration-300 group"
                      >
                        <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="lg:col-span-3 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Odisha, India → Global</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                      Building the Future of 
                      <span className="text-primary"> Autonomous AI</span>
                    </h3>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                      <p>
                        Abhishek Panda is the visionary founder and CEO of OriginX Labs, a next-generation AI and 
                        Agentic Systems company. Starting from a small town in Odisha, India, he has built a global 
                        enterprise with offices in Bangalore, USA, and Dubai.
                      </p>
                      <p>
                        A thought leader in artificial intelligence and autonomous systems, Abhishek combines deep 
                        technical expertise with philosophical insight. His work is driven by a singular belief: 
                        that the most powerful AI systems are those governed by ethics and designed to augment 
                        human capability, not replace human judgment.
                      </p>
                    </div>
                    
                    {/* Books Section - Embedded in card */}
                    <div className={`p-5 rounded-xl mb-6 ${
                      resolvedTheme === 'dark'
                        ? 'bg-muted/20 border border-white/5'
                        : 'bg-muted/30 border border-foreground/5'
                    }`}>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Author</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {books.map((book, index) => (
                          <a
                            key={index}
                            href={book.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                              resolvedTheme === 'dark'
                                ? 'bg-card/50 border border-white/10 text-foreground hover:border-primary/30 hover:text-primary'
                                : 'bg-card border border-foreground/10 text-foreground hover:border-primary/30 hover:text-primary'
                            }`}
                          >
                            {book.title}
                            <ExternalLink className="w-3 h-3 opacity-50" />
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-8">
                      <Quote className="w-8 h-8 text-primary/50 mb-3" />
                      <p className="text-lg font-display italic text-foreground">
                        "This company is inevitable. We're not just building AI—we're architecting 
                        the future of how humans and machines collaborate."
                      </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {achievements.map((achievement, index) => (
                        <div 
                          key={index}
                          className={`p-4 rounded-xl text-center ${
                            resolvedTheme === 'dark'
                              ? 'bg-muted/20 border border-white/5'
                              : 'bg-muted/30 border border-foreground/5'
                          }`}
                        >
                          <achievement.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                          <p className="text-2xl font-bold text-foreground">{achievement.value}</p>
                          <p className="text-xs text-muted-foreground">{achievement.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Co-Founder Section */}
        <section className="py-20 bg-muted/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Co-Founder & Managing Director
                </h2>
              </div>
              
              <div 
                className={`p-8 rounded-2xl bg-card/50 flex flex-col md:flex-row items-center gap-8 ${
                  resolvedTheme === 'dark'
                    ? 'border border-white/10'
                    : 'border-2 border-foreground/10'
                }`}
              >
                {/* Photo placeholder */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-display font-bold text-accent/70">NS</span>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Namrata Sahoo
                  </h3>
                  <p className="text-primary font-medium mb-4">Co-Founder & Managing Director</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Namrata brings strategic vision and operational excellence to OriginX Labs. 
                    Her leadership in business development and organizational growth has been 
                    instrumental in establishing the company's global presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border/20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-4">
              Want to join our journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're always looking for exceptional talent to help us build the future of AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all duration-300"
              >
                <Rocket className="w-4 h-4" />
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-medium text-foreground hover:bg-muted/50 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Leadership;
