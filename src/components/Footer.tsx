import { Link } from "react-router-dom";
import { 
  MapPin, 
  Mail, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUpRight,
  Building2,
  FileText,
  Shield,
  Calendar,
  Globe,
  Briefcase,
  Scale,
  ExternalLink
} from "lucide-react";
import originxLogo from "@/assets/originx-logo.svg";

const productLinks = [
  { name: "COGNIX", href: "/products/cognix", external: "https://www.getcognix.io/" },
  { name: "QUALYX", href: "/products/qualyx", external: "https://www.getqualyx.com/" },
  { name: "TRACEFLOW", href: "/products/traceflow", external: "https://www.traceflowhq.com/" },
  { name: "OPZENIX", href: "/products/opzenix", external: "https://www.opzenix.com/" },
  { name: "PROXINEX", href: "/products/proxinex", external: "https://www.proxinex.com/" },
  { name: "CHRONYX", href: "#chronyx", external: "https://www.getchronyx.com/" },
  { name: "AEON", href: "/products/aeon" },
  { name: "NEWSTACK", href: "#", external: "https://www.newstack.live/" },
];

const companyLinks = [
  { name: "About Us", href: "/about", isRoute: true },
  { name: "Leadership", href: "/leadership", isRoute: true },
  { name: "Consulting", href: "/consulting", isRoute: true },
  { name: "Careers", href: "/careers", isRoute: true },
  { name: "Press", href: "/press", isRoute: true },
  { name: "Contact", href: "/contact", isRoute: true },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy", isRoute: true },
  { name: "Terms of Service", href: "/terms", isRoute: true },
  { name: "Trust & Security", href: "/trust", isRoute: true },
];

const contactEmails = [
  { label: "General Inquiries", email: "official@originxlabs.com", icon: Mail },
  { label: "Legal", email: "legal@originxlabs.com", icon: Scale },
  { label: "Compliance", email: "compliance@originxlabs.com", icon: Shield },
  { label: "Careers", email: "career@originxlabs.com", icon: Briefcase },
  { label: "CEO Office", email: "ceo@originxlabs.com", icon: Building2 },
];

const companyDetails = [
  { label: "CIN", value: "U62010OD2025PTC051089" },
  { label: "GSTIN", value: "21AANCC1954F1ZW" },
  { label: "PAN", value: "AANCC1954F" },
  { label: "Udyam", value: "UDYAM-OD-03-0076858" },
  { label: "DPIIT", value: "DIPP230789" },
];

const offices = [
  { city: "Bhubaneswar", country: "India", type: "Registered HQ" },
  { city: "Bangalore", country: "India", type: "Tech Hub" },
  { city: "Delaware", country: "USA", type: "Americas" },
  { city: "Dubai", country: "UAE", type: "Global HQ" },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative py-20 border-t border-border/20 overflow-hidden bg-gradient-to-b from-background to-muted/5">
      {/* Premium background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column - Spans 2 */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img 
                src={originxLogo} 
                alt="OriginX Labs" 
                className="h-14 w-14 transition-transform duration-300 group-hover:scale-105 dark:invert dark:brightness-200 dark:contrast-100" 
              />
              <div>
                <span className="font-display font-bold text-xl text-foreground block">
                  OriginX Labs
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wider uppercase">
                  Private Limited
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Next-generation AI & Agentic Systems company. Building autonomous intelligence with ethics at the core.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted/30 hover:bg-primary/10 hover:border-primary/30 border border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Products Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" />
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <div className="flex items-center gap-2">
                    {link.href.startsWith("/") ? (
                      <Link 
                        to={link.href} 
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                    {link.external && (
                      <a 
                        href={link.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/50 hover:text-primary transition-colors"
                        title={`Visit ${link.name} website`}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
{/* Company Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Contact
            </h4>
            <ul className="space-y-2">
              {contactEmails.slice(0, 4).map((contact) => (
                <li key={contact.email}>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-muted-foreground text-xs hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <contact.icon className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    <span className="truncate">{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Offices Section */}
        <div className="py-10 border-t border-border/20">
          <h3 className="text-sm font-semibold text-foreground mb-6 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Global Presence
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="group">
                <div className="p-4 rounded-xl bg-muted/20 hover:bg-muted/40 border border-border/10 hover:border-primary/20 transition-all duration-300">
                  <p className="font-medium text-foreground text-sm">{office.city}</p>
                  <p className="text-xs text-muted-foreground">{office.country}</p>
                  <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    {office.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership CTA */}
        <div className="py-10 border-t border-border/20">
          <div className="text-center">
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              Meet Our Leadership
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Discover the visionary minds building the future of autonomous AI.
            </p>
            <Link 
              to="/leadership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl font-medium transition-all duration-300 border border-primary/20"
            >
              <Building2 className="w-4 h-4" />
              View Leadership Team
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Company Registration Details */}
        <div className="py-10 border-t border-border/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-semibold text-foreground mb-6 text-center flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Company Registration
            </h3>
            
            {/* Legal Name Banner */}
            <div className="text-center mb-8">
              <p className="text-lg font-display font-bold text-foreground">
                ORIGINX LABS PRIVATE LIMITED
              </p>
              <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground text-xs">
                <Calendar className="w-3 h-3" />
                <span>Incorporated: 16 October 2025</span>
                <span className="text-border">•</span>
                <span>Private Limited Company</span>
              </div>
            </div>

            {/* Registration Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {companyDetails.map((detail) => (
                <div 
                  key={detail.label}
                  className="p-3 rounded-lg bg-muted/20 border border-border/10 text-center hover:border-primary/20 transition-all duration-300"
                >
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{detail.label}</p>
                  <p className="text-xs font-mono text-foreground font-medium truncate" title={detail.value}>
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            {/* DPIIT Recognition Badge */}
            <div className="flex justify-center mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">DPIIT Recognized Startup</span>
                <span className="text-[10px] text-muted-foreground">(DIPP230789)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} OriginX Labs Pvt. Ltd.
              </p>
              <span className="hidden sm:inline text-border">•</span>
              <p className="text-muted-foreground text-xs">
                All rights reserved.
              </p>
            </div>
            <p className="text-muted-foreground text-xs italic font-display">
              "This company is inevitable."
            </p>
          </div>
          
          {/* Micro Footer */}
          <div className="mt-6 pt-4 border-t border-border/10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] text-muted-foreground/70">
            <span>CIN: U62010OD2025PTC051089</span>
            <span>GSTIN: 21AANCC1954F1ZW</span>
            <span>PAN: AANCC1954F</span>
            <a href="mailto:official@originxlabs.com" className="hover:text-primary transition-colors">
              official@originxlabs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
