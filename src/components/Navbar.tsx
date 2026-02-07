import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { 
  ChevronDown, 
  Cpu, 
  Shield, 
  GitBranch, 
  Settings, 
  Brain, 
  Users, 
  FileText, 
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
  Compass,
  Target
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import cognixLogo from "@/assets/cognix-logo-transparent.png";
import qualyxLogo from "@/assets/qualyx-logo-transparent.png";
import traceflowLogoDark from "@/assets/traceflow-logo-dark.png";
import traceflowLogoLight from "@/assets/traceflow-logo-light.png";
import opzenixLogo from "@/assets/opzenix-logo-transparent.png";
import proxinexLogo from "@/assets/proxinex-logo.png";
import originxLogo from "@/assets/originx-logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Get theme-aware logos
  const traceflowLogo = mounted && resolvedTheme === "dark" ? traceflowLogoLight : traceflowLogoDark;

  const products = [
    { 
      name: "COGNIX", 
      tagline: "AI Backend as a Service", 
      href: "/products/cognix",
      logo: cognixLogo,
      icon: Cpu,
    },
    { 
      name: "QUALYX", 
      tagline: "AI Quality & Validation Platform", 
      href: "/products/qualyx",
      logo: qualyxLogo,
      icon: Shield,
    },
    { 
      name: "OPZENIX", 
      tagline: "Autonomous MLOps, LLMOps & DevSecOps", 
      href: "/products/opzenix",
      logo: opzenixLogo,
      icon: Settings,
    },
    { 
      name: "TRACEFLOW", 
      tagline: "Digital Cognition & Experience Infrastructure", 
      href: "/products/traceflow",
      logo: traceflowLogo,
      icon: GitBranch,
    },
    { 
      name: "PROXINEX", 
      tagline: "AI Intelligence Control Plane", 
      href: "/products/proxinex",
      logo: proxinexLogo,
      icon: Compass,
    },
  ];

  const platformLinks = [
    { name: "Architecture", description: "System design & infrastructure", icon: Layers, href: "/platform/architecture" },
    { name: "Intelligence Model", description: "How OriginX thinks & learns", icon: Brain, href: "/platform/intelligence" },
    { name: "Autonomy & Agents", description: "Agentic system capabilities", icon: Bot, href: "/platform/autonomy" },
    { name: "Security & Governance", description: "Enterprise-grade protection", icon: Lock, href: "/platform/security" },
    { name: "Integrations", description: "Connect with your stack", icon: Puzzle, href: "/platform/integrations" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/95 dark:bg-background/90 backdrop-blur-xl ${
          scrolled 
            ? "border-b border-border/30 shadow-lg shadow-background/10" 
            : "border-b border-border/10"
        }`}
        style={{ height: "76px" }}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'instant' });
              if (location.pathname !== '/') {
                navigate('/');
              }
            }}
          >
            <img 
              src={originxLogo} 
              alt="OriginX Labs logo" 
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-105 dark:invert dark:brightness-200 dark:contrast-100" 
            />
            <span className="font-display font-semibold text-lg text-foreground tracking-tight hidden sm:block">
              OriginX Labs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
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
              
              <div className={`absolute top-full left-0 pt-2 transition-all duration-300 ${
                activeDropdown === "products" ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}>
                <div className="w-[380px] bg-popover dark:bg-[hsl(220,20%,8%)] rounded-2xl border border-border shadow-2xl overflow-hidden">
                  <div className="p-3">
                    {products.map((product) => (
                      <button
                        key={product.name}
                        onClick={() => handleNavClick(product.href)}
                        className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-200 group text-left"
                      >
                        <img 
                          src={product.logo} 
                          alt={product.name} 
                          className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110" 
                        />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.tagline}</p>
                        </div>
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

            {/* AEON - Standalone */}
            <button
              onClick={() => handleNavClick('/products/aeon')}
              className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Brain className="w-4 h-4" />
              AEON
            </button>

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
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
            >
              <Sparkles className="h-4 w-4" />
              Talk to OriginX
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
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
                <div className="space-y-1 pt-2">
                  {products.map((product) => (
                    <button
                      key={product.name}
                      onClick={() => handleNavClick(product.href)}
                      className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors text-left"
                    >
                      <img src={product.logo} alt={product.name} className="w-7 h-7 object-contain" />
                      <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.tagline}</p>
                      </div>
                    </button>
                  ))}
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

            {/* AEON */}
            <button
              onClick={() => handleNavClick('/products/aeon')}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors text-left"
            >
              <Brain className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">AEON</span>
            </button>

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
