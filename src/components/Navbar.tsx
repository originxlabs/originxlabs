import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  ChevronDown, 
  Brain, 
  Users, 
  Scale, 
  Newspaper, 
  Blocks, 
  Sparkles,
  Building,
  Menu,
  X,
  Layers,
  Network,
  Bot,
  Lock,
  Puzzle,
  Building2,
  Factory,
  Gauge,
  Zap,
  ShieldCheck,
  ScrollText,
  Heart,
  Activity,
  Lightbulb,
  BookOpen,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Target
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import BrandLogo from "@/components/BrandLogo";
import { BRAND } from "@/config/brand";
import ProductLogo from "@/components/ProductLogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileSubmenu(null);
  }, [location]);

  // Scroll to top on navigation
  const handleNavClick = (to: string, isExternal?: boolean) => {
    if (isExternal) {
      window.open(to, '_blank');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(to);
  };

  const products = [
    { 
      name: "PROXINEX", 
      tagline: "AI Intelligence Control Plane", 
      href: "/products/proxinex",
    },
    {
      name: "TRACEFLOW", 
      tagline: "Digital Cognition & Experience Infrastructure", 
      href: "/products/traceflow",
    },
    { 
      name: "CHRONYX",
      tagline: "Autonomous Time Intelligence",
      href: "/products/chronyx",
    },
    {
      name: "HUMINEX",
      tagline: "AI Workforce Operating System",
      href: "/products/huminex",
    },
    { 
      name: "QUALYX", 
      tagline: "AI Quality & Validation Platform", 
      href: "/products/qualyx",
    },
    { 
      name: "OPZENIX", 
      tagline: "Autonomous MLOps, LLMOps & DevSecOps", 
      href: "/products/opzenix",
    },
    { 
      name: "COGNIX", 
      tagline: "AI Backend as a Service", 
      href: "/products/cognix",
    },
    {
      name: "ORIGINX ONE",
      tagline: "One API. Every Capability.",
      href: "/products/originx-one",
    },
  ];

  const platformLinks = [
    { name: "Architecture", description: "System design & infrastructure", icon: Layers, href: "/platform/architecture" },
    { name: "Intelligence Model", description: "How OriginX thinks & learns", icon: Brain, href: "/platform/intelligence" },
    { name: "Autonomy & Agents", description: "Agentic system capabilities", icon: Bot, href: "/platform/autonomy" },
    { name: "HUMINEX", description: "Workforce OS under Undr Platform", icon: Briefcase, href: "/platform/huminex" },
    { name: "Security & Governance", description: "Enterprise-grade protection", icon: Lock, href: "/platform/security" },
    { name: "Integrations", description: "Connect with your stack", icon: Puzzle, href: "/platform/integrations" },
  ];

  const servicesLinks = [
    { name: "ALL SERVICES", description: "OriginX Services Hub", icon: Network, href: "/services" },
    { name: "ZENITH", description: "Digital Business Operating System", icon: Sparkles, href: "/zenith" },
    { name: "STACKCRAFT", description: "Learning, CMS & Engineering Playbooks", icon: BookOpen, href: "/stackcraft" },
    { name: "NEWSTACK", description: "Live News Intelligence Layer", icon: Newspaper, href: "/newstack" },
    { name: "CROPXON", description: "Agriculture Intelligence Platform", icon: Factory, href: "/cropxon" },
    { name: "FINIORAA", description: "Personal Finance Operating System", icon: Gauge, href: "/services/finioraa" },
    { name: "CAREERSCRAFT", description: "Career Operating System", icon: Briefcase, href: "/services/careerscraft" },
    { name: "CONVERTIX", description: "Premium PDF + Image Studio", icon: ScrollText, href: "/services/convertix" },
    { name: "GROOVIFY", description: "Music + Lyrics App (Coming Soon)", icon: Activity, href: "/services/groovify" },
  ];

  const solutionsLinks = [
    { name: "Enterprise AI", description: "Transform your organization", icon: Building2, href: "/solutions/enterprise" },
    { name: "Autonomous Operations", description: "Self-optimizing systems", icon: Factory, href: "/solutions/autonomous" },
    { name: "Regulated Industries", description: "Finance, healthcare, legal", icon: Scale, href: "/solutions/regulated" },
    { name: "Scale & Reliability", description: "Mission-critical deployments", icon: Gauge, href: "/solutions/scale" },
    { name: "Digital Experience Intelligence", description: "User behavior & optimization", icon: Zap, href: "/solutions/experience" },
  ];

  const trustLinks = [
    { name: "Security", href: "/trust", description: "Infrastructure & data protection", icon: ShieldCheck },
    { name: "Privacy", href: "/trust", description: "Data handling & compliance", icon: Lock },
    { name: "Compliance", href: "/trust", description: "Industry certifications", icon: ScrollText },
    { name: "Responsible AI", href: "/trust", description: "Ethics & governance", icon: Heart },
    { name: "Reliability", href: "/trust", description: "Uptime & performance", icon: Activity },
  ];

  const companyLinks = [
    { name: "About OriginX", href: "/about", description: "Our mission and story", icon: Building },
    { name: "Philosophy", href: "/about", description: "How we think & build", icon: Lightbulb },
    { name: "Leadership", href: "/leadership", description: "Meet our founders", icon: Users },
    { name: "Governance", href: "/trust", description: "Corporate responsibility", icon: Scale },
    { name: "Press", href: "/press", description: "News and updates", icon: Newspaper },
    { name: "StackCraft", href: "https://www.stackcraft.io", description: "Case studies & insights", icon: BookOpen, isExternal: true },
  ];

  const careersLinks = [
    { name: "Life at OriginX", href: "/careers", description: "Culture & values", icon: Heart },
    { name: "Open Roles", href: "/careers", description: "Current opportunities", icon: Briefcase },
    { name: "Students & Early Careers", href: "/careers", description: "Start your journey", icon: GraduationCap },
  ];

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[140] transition-all duration-500 bg-background/95 dark:bg-background/90 backdrop-blur-xl ${
          scrolled 
            ? "border-b border-border/30 shadow-lg shadow-background/10" 
            : "border-b border-border/10"
        }`}
        style={{ height: "76px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink-0 flex-nowrap"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'instant' });
              if (location.pathname !== '/') {
                navigate('/');
              }
            }}
          >
            <BrandLogo className="h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-300 group-hover:scale-105 shrink-0" alt={`${BRAND.name} logo`} />
            <span className="font-display font-semibold text-base sm:text-lg text-foreground tracking-tight whitespace-nowrap leading-none hidden sm:block">
              {BRAND.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-0.5">
            {/* Products */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors ${
                activeDropdown === "products" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}>
                <Blocks className="w-4 h-4" />
                Products
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "products" ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 pt-2 transition-all duration-500 ${
                activeDropdown === "products" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
              }`}>
                <div className="relative w-[420px] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
                  <div className="relative bg-popover/95 dark:bg-[hsl(220,20%,8%)] backdrop-blur-xl border border-border/60 rounded-2xl p-3">
                    <div className="px-2 pb-2 mb-2 border-b border-border/40">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">OriginX Product Suite</p>
                    </div>
                    {products.map((product, idx) => (
                      <button
                        key={product.name}
                        onClick={() => handleNavClick(product.href, product.isExternal)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-primary/25 bg-transparent hover:bg-primary/10 transition-all duration-300 group text-left hover:translate-x-1"
                        style={{ transitionDelay: `${idx * 30}ms` }}
                      >
                        <ProductLogo
                          productId={product.name}
                          alt={`${product.name} logo`}
                          className="w-12 h-12 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[2deg]"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</p>
                          <p className="text-xs text-muted-foreground group-hover:text-foreground/75 transition-colors">{product.tagline}</p>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 group-hover:text-primary transition-colors">Open</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Platform */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("platform")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors ${
                activeDropdown === "platform" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}>
                <Layers className="w-4 h-4" />
                Platform
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "platform" ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                activeDropdown === "platform" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}>
                <div className="w-[320px] bg-popover dark:bg-[hsl(220,20%,8%)] rounded-2xl border border-border shadow-2xl overflow-hidden">
                  <div className="p-3">
                    {platformLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleNavClick(link.href)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group text-left"
                      >
                        <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
                          <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{link.name}</p>
                          <p className="text-xs text-muted-foreground">{link.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors ${
                activeDropdown === "services" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}>
                <Network className="w-4 h-4" />
                Services
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                activeDropdown === "services" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}>
                <div className="w-[340px] bg-popover dark:bg-[hsl(220,20%,8%)] rounded-2xl border border-border shadow-2xl overflow-hidden">
                  <div className="p-3">
                    {servicesLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleNavClick(link.href)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group text-left"
                      >
                        <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
                          <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{link.name}</p>
                          <p className="text-xs text-muted-foreground">{link.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors ${
                activeDropdown === "solutions" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}>
                <Target className="w-4 h-4" />
                Solutions
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                activeDropdown === "solutions" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}>
                <div className="w-[340px] bg-popover dark:bg-[hsl(220,20%,8%)] rounded-2xl border border-border shadow-2xl overflow-hidden">
                  <div className="p-3">
                    {solutionsLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleNavClick(link.href)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group text-left"
                      >
                        <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
                          <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{link.name}</p>
                          <p className="text-xs text-muted-foreground">{link.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("trust")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors ${
                activeDropdown === "trust" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}>
                <ShieldCheck className="w-4 h-4" />
                Trust
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "trust" ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full right-0 pt-2 transition-all duration-300 ${
                activeDropdown === "trust" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}>
                <div className="w-[300px] bg-popover dark:bg-[hsl(220,20%,8%)] rounded-2xl border border-border shadow-2xl overflow-hidden">
                  <div className="p-3">
                    {trustLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleNavClick(link.href)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group text-left"
                      >
                        <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
                          <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{link.name}</p>
                          <p className="text-xs text-muted-foreground">{link.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Company */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors ${
                activeDropdown === "company" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}>
                <Building className="w-4 h-4" />
                Company
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "company" ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full right-0 pt-2 transition-all duration-300 ${
                activeDropdown === "company" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}>
                <div className="w-[300px] bg-popover dark:bg-[hsl(220,20%,8%)] rounded-2xl border border-border shadow-2xl overflow-hidden">
                  <div className="p-3">
                    {companyLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleNavClick(link.href, link.isExternal)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group text-left"
                      >
                        <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
                          <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground flex items-center gap-1.5">
                            {link.name}
                            {link.isExternal && <ExternalLink className="h-3 w-3 text-muted-foreground" />}
                          </p>
                          <p className="text-xs text-muted-foreground">{link.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Careers */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter("careers")}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors ${
                activeDropdown === "careers" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}>
                <Briefcase className="w-4 h-4" />
                Careers
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === "careers" ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full right-0 pt-2 transition-all duration-300 ${
                activeDropdown === "careers" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}>
                <div className="w-[280px] bg-popover dark:bg-[hsl(220,20%,8%)] rounded-2xl border border-border shadow-2xl overflow-hidden">
                  <div className="p-3">
                    {careersLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleNavClick(link.href)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group text-left"
                      >
                        <div className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
                          <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{link.name}</p>
                          <p className="text-xs text-muted-foreground">{link.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <button
              onClick={() => handleNavClick('/contact')}
              className="hidden md:inline-flex xl:hidden items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              <Sparkles className="h-4 w-4" />
              Talk to OriginX
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className="hidden xl:inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20 whitespace-nowrap"
            >
              <Sparkles className="h-4 w-4" />
              Talk to OriginX
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[130] xl:hidden transition-all duration-500 ${
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-[76px] left-0 right-0 max-h-[calc(100vh-76px)] overflow-y-auto bg-background border-b border-border/30 transition-all duration-500 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
          <div className="p-6 space-y-6">
            {/* Products */}
            <div className="space-y-2">
              <button 
                onClick={() => setMobileSubmenu(mobileSubmenu === 'products' ? null : 'products')}
                className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <Blocks className="w-4 h-4" />
                  Products
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'products' && (
                <div className="space-y-2 pt-2">
                  <div className="rounded-xl border border-border/40 bg-card/30 p-2">
                    {products.map((product) => (
                    <button
                      key={product.name}
                      onClick={() => handleNavClick(product.href, product.isExternal)}
                      className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-primary/10 border border-transparent hover:border-primary/25 transition-all duration-200 text-left"
                    >
                      <ProductLogo productId={product.name} alt={`${product.name} logo`} className="w-10 h-10" />
                      <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.tagline}</p>
                      </div>
                    </button>
                  ))}
                  </div>
                </div>
              )}
            </div>

            {/* Platform */}
            <div className="space-y-2">
              <button 
                onClick={() => setMobileSubmenu(mobileSubmenu === 'platform' ? null : 'platform')}
                className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Platform
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'platform' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'platform' && (
                <div className="space-y-1 pt-2">
                  {platformLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors text-left"
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">{link.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions */}
            <div className="space-y-2">
              <button 
                onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <Network className="w-4 h-4" />
                  Services
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'services' && (
                <div className="space-y-1 pt-2">
                  {servicesLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors text-left"
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">{link.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions */}
            <div className="space-y-2">
              <button 
                onClick={() => setMobileSubmenu(mobileSubmenu === 'solutions' ? null : 'solutions')}
                className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Solutions
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'solutions' && (
                <div className="space-y-1 pt-2">
                  {solutionsLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors text-left"
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">{link.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Trust */}
            <div className="space-y-2">
              <button 
                onClick={() => setMobileSubmenu(mobileSubmenu === 'trust' ? null : 'trust')}
                className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Trust
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'trust' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'trust' && (
                <div className="space-y-1 pt-2">
                  {trustLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors text-left"
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">{link.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Company */}
            <div className="space-y-2">
              <button 
                onClick={() => setMobileSubmenu(mobileSubmenu === 'company' ? null : 'company')}
                className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Company
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'company' && (
                <div className="space-y-1 pt-2">
                  {companyLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href, link.isExternal)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors text-left"
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-foreground flex items-center gap-2">
                        {link.name}
                        {link.isExternal && <ExternalLink className="h-3 w-3" />}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Careers */}
            <div className="space-y-2">
              <button 
                onClick={() => setMobileSubmenu(mobileSubmenu === 'careers' ? null : 'careers')}
                className="w-full flex items-center justify-between text-sm font-medium text-muted-foreground uppercase tracking-wider"
              >
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Careers
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubmenu === 'careers' ? 'rotate-180' : ''}`} />
              </button>
              {mobileSubmenu === 'careers' && (
                <div className="space-y-1 pt-2">
                  {careersLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors text-left"
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">{link.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => handleNavClick('/contact')}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium"
            >
              <Sparkles className="h-5 w-5" />
              Talk to OriginX
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
