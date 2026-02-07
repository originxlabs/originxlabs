import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Building2, 
  MessageSquare,
  Globe,
  Clock,
  CheckCircle2,
  Linkedin,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    city: "Bhubaneswar",
    country: "India",
    type: "Registered HQ",
    address: "Odisha, India",
    timezone: "IST (UTC+5:30)",
    color: "from-primary/20 to-accent/20"
  },
  {
    city: "Bangalore",
    country: "India",
    type: "Tech Hub",
    address: "Karnataka, India",
    timezone: "IST (UTC+5:30)",
    color: "from-accent/20 to-primary/20"
  },
  {
    city: "Delaware",
    country: "USA",
    type: "Americas",
    address: "United States",
    timezone: "EST (UTC-5)",
    color: "from-blue-500/20 to-primary/20"
  },
  {
    city: "Dubai",
    country: "UAE",
    type: "Global HQ",
    address: "United Arab Emirates",
    timezone: "GST (UTC+4)",
    color: "from-amber-500/20 to-primary/20"
  }
];

const contactOptions = [
  {
    title: "General Inquiries",
    email: "office@originxlabs.com",
    description: "For general questions about our products and services",
    icon: MessageSquare
  },
  {
    title: "Legal & Compliance",
    email: "legal@originxlabs.com",
    description: "For legal matters, contracts, and compliance queries",
    icon: Building2
  },
  {
    title: "Career Opportunities",
    email: "career@originxlabs.com",
    description: "Join our team and build the future of AI",
    icon: Globe
  },
  {
    title: "CEO Office",
    email: "ceo@originxlabs.com",
    description: "For strategic partnerships and executive matters",
    icon: Building2
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24-48 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | OriginX Labs</title>
        <meta name="description" content="Get in touch with OriginX Labs. Contact us for inquiries about our AI products, partnerships, or career opportunities." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          {/* Hero Section */}
          <section className="container mx-auto px-6 mb-20">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Let's Build
                <span className="text-primary"> Together</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Whether you have questions about our products, want to explore partnerships, 
                or are interested in joining our team, we'd love to hear from you.
              </p>
            </div>
          </section>

          {/* Contact Options */}
          <section className="container mx-auto px-6 mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactOptions.map((option, index) => (
                <a 
                  key={index}
                  href={`mailto:${option.email}`}
                  className="p-6 rounded-2xl bg-muted/20 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{option.title}</h3>
                  <p className="text-sm text-primary mb-2">{option.email}</p>
                  <p className="text-xs text-muted-foreground">{option.description}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Main Content Grid */}
          <section className="container mx-auto px-6 mb-20">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-muted/20 border border-border/20 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>We typically respond within 24-48 hours</span>
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Office Locations */}
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Our Global Offices
                </h2>
                
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div 
                      key={index}
                      className="p-6 rounded-2xl bg-muted/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${office.color} flex items-center justify-center`}>
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{office.city}</h3>
                            <p className="text-sm text-muted-foreground">{office.country}</p>
                            <p className="text-xs text-muted-foreground mt-1">{office.address}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                            {office.type}
                          </span>
                          <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{office.timezone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-6 p-6 rounded-2xl bg-muted/20 border border-border/20 overflow-hidden">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center relative overflow-hidden">
                    {/* Simplified world map visualization */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse" />
                      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
                    </div>
                    <div className="text-center z-10">
                      <Globe className="w-12 h-12 text-primary/50 mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground font-medium">Global Presence</p>
                      <p className="text-xs text-muted-foreground">4 Offices Across 3 Continents</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 p-6 rounded-2xl bg-muted/20 border border-border/20">
                  <h3 className="font-semibold text-foreground mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/10 flex items-center justify-center transition-colors group"
                    >
                      <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/10 flex items-center justify-center transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a 
                      href="mailto:official@originxlabs.com" 
                      className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/10 flex items-center justify-center transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Info Banner */}
          <section className="container mx-auto px-6">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    ORIGINX LABS PRIVATE LIMITED
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    CIN: U62010OD2025PTC051089 • DPIIT Recognized Startup
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="mailto:official@originxlabs.com">
                    <Button variant="outline" className="gap-2">
                      <Mail className="w-4 h-4" />
                      Email Us
                    </Button>
                  </a>
                  <a href="/careers">
                    <Button className="gap-2">
                      <Building2 className="w-4 h-4" />
                      Join Our Team
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
