import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Rocket, 
  Heart, 
  GraduationCap,
  Send,
  ChevronRight,
  Building2,
  Globe,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "5+ years",
    description: "Build and optimize AI models for our enterprise products. Work on cutting-edge LLM applications and agentic systems.",
    requirements: ["Python, PyTorch/TensorFlow", "LLM fine-tuning experience", "MLOps pipelines", "System design skills"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Bhubaneswar / Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Develop scalable web applications using React, Node.js, and cloud technologies. Build intuitive UIs for complex AI systems.",
    requirements: ["React, TypeScript", "Node.js/Python", "PostgreSQL/MongoDB", "Cloud platforms (AWS/GCP)"]
  },
  {
    id: 3,
    title: "Product Manager - AI Products",
    department: "Product",
    location: "Dubai / Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Define and drive the roadmap for our AI product suite. Work closely with engineering and customers to deliver value.",
    requirements: ["B2B SaaS experience", "AI/ML product background", "Data-driven mindset", "Excellent communication"]
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3+ years",
    description: "Build and maintain our cloud infrastructure. Implement CI/CD pipelines and ensure system reliability at scale.",
    requirements: ["Kubernetes, Docker", "Terraform, Ansible", "CI/CD (GitHub Actions)", "Monitoring & observability"]
  },
  {
    id: 5,
    title: "AI Research Intern",
    department: "Research",
    location: "Remote",
    type: "Internship",
    experience: "Final year / Fresh graduates",
    description: "Work on cutting-edge AI research projects. Explore new architectures and contribute to published research.",
    requirements: ["Strong ML fundamentals", "Python proficiency", "Research aptitude", "Self-motivated learner"]
  },
  {
    id: 6,
    title: "Technical Writer",
    department: "Documentation",
    location: "Remote",
    type: "Full-time / Contract",
    experience: "2+ years",
    description: "Create comprehensive documentation for our AI platforms. Write tutorials, API docs, and developer guides.",
    requirements: ["Technical writing experience", "Developer background", "API documentation", "Clear communication"]
  }
];

const benefits = [
  { icon: Rocket, title: "Innovation First", description: "Work on cutting-edge AI technology shaping the future" },
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance and wellness programs" },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual learning stipend for courses and conferences" },
  { icon: Globe, title: "Remote Friendly", description: "Flexible work arrangements across global offices" },
  { icon: Users, title: "Great Team", description: "Collaborate with passionate, talented individuals" },
  { icon: Sparkles, title: "Equity Options", description: "Be an owner with competitive equity packages" }
];

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", position: "", linkedin: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Careers at OriginX Labs</title>
        <meta name="description" content="Join OriginX Labs and build the future of AI. Explore exciting career opportunities in AI/ML, engineering, product, and more." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          {/* Hero Section */}
          <section className="container mx-auto px-6 mb-20">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">We're Hiring</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Build the Future of
                <span className="text-primary"> Autonomous AI</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join a team of passionate innovators working on next-generation AI systems. 
                We're looking for exceptional talent to help us build autonomous intelligence with ethics at the core.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#openings">
                  <Button size="lg" className="gap-2">
                    View Open Positions
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="mailto:career@originxlabs.com">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Send className="w-4 h-4" />
                    Send Resume
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="container mx-auto px-6 mb-20">
            <h2 className="text-2xl font-display font-bold text-foreground text-center mb-12">
              Why Join OriginX Labs?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-muted/20 border border-border/20 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Job Openings */}
          <section id="openings" className="container mx-auto px-6 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <p className="text-muted-foreground">
                Find your perfect role and help us shape the future of AI
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {jobOpenings.map((job) => (
                <div 
                  key={job.id}
                  className="p-6 rounded-2xl bg-muted/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs rounded-lg bg-muted/50 text-muted-foreground">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <a href="#apply">
                        <Button variant="outline" className="gap-2">
                          Apply Now
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application Form */}
          <section id="apply" className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Apply Now
                </h2>
                <p className="text-muted-foreground">
                  Send us your application and we'll get back to you within 5 business days
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-muted/20 border border-border/20 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
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
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Position of Interest *</Label>
                    <Input 
                      id="position"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      placeholder="e.g., Senior AI/ML Engineer"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input 
                    id="linkedin"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cover Letter / Message *</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about yourself, your experience, and why you want to join OriginX Labs..."
                    rows={5}
                    required
                  />
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Your application will be sent to career@originxlabs.com</span>
                </div>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </Button>
              </form>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Careers;
