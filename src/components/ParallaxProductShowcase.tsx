import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { ArrowRight, BarChart3 } from "lucide-react";
import ProductLogo from "./ProductLogo";

const ParallaxProductShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
          setScrollY(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      name: "PROXINEX",
      tagline: "AI Control Plane + AEON",
      description: "Intent-aware model routing with verification, governance, and embedded AEON intelligence",
      accentColor: "hsl(214 90% 56%)",
      href: "/products/proxinex",
      stats: { value: 63, label: "Cost Saved", suffix: "%" },
      graphData: [45, 52, 60, 68, 74, 82, 89, 96]
    },
    {
      name: "TRACEFLOW",
      tagline: "Digital Cognition Infrastructure",
      description: "Knowledge graphs and semantic understanding",
      accentColor: "hsl(330 70% 55%)",
      href: "/products/traceflow",
      stats: { value: 1, label: "Latency", suffix: "ms" },
      graphData: [50, 35, 70, 45, 85, 60, 95, 80]
    },
    {
      name: "CHRONYX",
      tagline: "Autonomous Time Intelligence",
      description: "Continuous time-based observability and predictive intelligence",
      accentColor: "hsl(285 74% 60%)",
      href: "/products/chronyx",
      stats: { value: 24, label: "Always Active", suffix: "/7" },
      graphData: [35, 44, 52, 60, 72, 81, 90, 98]
    },
    {
      name: "HUMINEX",
      tagline: "AI Workforce Operating System",
      description: "Hire-to-retire workflows across payroll, HR, finance, and recruitment",
      accentColor: "hsl(204 84% 46%)",
      href: "/products/huminex",
      stats: { value: 15, label: "Unified Modules", suffix: "" },
      graphData: [33, 41, 50, 59, 68, 78, 88, 100]
    },
    {
      name: "QUALYX",
      tagline: "AI QA as a Service",
      description: "Autonomous testing and quality assurance",
      accentColor: "hsl(270 100% 65%)",
      href: "/products/qualyx",
      stats: { value: 10, label: "Faster Tests", suffix: "x" },
      graphData: [30, 45, 60, 50, 75, 65, 85, 90]
    },
    {
      name: "OPZENIX",
      tagline: "MLOps, LLMOps, DevSecOps",
      description: "End-to-end ML lifecycle management",
      accentColor: "hsl(160 70% 45%)",
      href: "/products/opzenix",
      stats: { value: 50, label: "Deploy Time", suffix: "%" },
      graphData: [60, 70, 55, 85, 65, 90, 75, 100]
    },
    {
      name: "COGNIX",
      tagline: "AI Backend as a Service",
      description: "Neural-powered APIs for intelligent applications",
      accentColor: "hsl(210 100% 60%)",
      href: "/products/cognix",
      stats: { value: 99.9, label: "Uptime", suffix: "%" },
      graphData: [40, 65, 45, 80, 55, 90, 75, 95]
    },
    {
      name: "ORIGINX ONE",
      tagline: "One API. Every Capability.",
      description: "Unified API layer for AI, finance, messaging, identity, and web services",
      accentColor: "hsl(220 82% 56%)",
      href: "/products/originx-one",
      stats: { value: 50, label: "Providers", suffix: "+" },
      graphData: [28, 38, 46, 58, 68, 79, 90, 100]
    },
  ];

  const getColumnTransform = (columnIndex: number) => {
    const baseSpeed = 28;
    const speeds = [baseSpeed, -baseSpeed * 0.7, baseSpeed * 0.5, -baseSpeed * 0.3];
    const speed = speeds[columnIndex % speeds.length];
    const translateY = (scrollY - 0.5) * speed;
    return translateY;
  };

  // Animated mini bar chart component
  const MiniBarChart = ({ data, color, isActive }: { data: number[], color: string, isActive: boolean }) => (
    <div className="flex items-end gap-1 h-12 w-full">
      {data.map((value, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-all duration-700 ease-out"
          style={{
            height: isActive ? `${value}%` : '10%',
            backgroundColor: color,
            opacity: 0.6 + (value / 200),
          }}
        />
      ))}
    </div>
  );

  return (
    <div 
      ref={containerRef}
      className="relative py-24 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Gradient Background with parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${(scrollY - 0.5) * 50}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsl(var(--primary)/0.14),transparent_40%),radial-gradient(circle_at_85%_25%,hsl(var(--accent)/0.12),transparent_38%),radial-gradient(circle_at_60%_75%,hsl(var(--secondary)/0.1),transparent_42%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Background gradient with parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none z-[1]"
        style={{ transform: `translateY(${(scrollY - 0.5) * 30}px)` }}
      />
      
      {/* Section header with scroll animation */}
      <div 
        className={`text-center mb-16 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transform: `translateY(${(scrollY - 0.5) * -20}px)` }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-medium tracking-widest uppercase text-primary border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
          <BarChart3 className="w-3.5 h-3.5" />
          Product Suite
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Our <span className="text-gradient">Product Suite</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Eight pillars of autonomous intelligence, working in harmony
        </p>
      </div>

      {/* Product cards */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const cardClasses = `group block relative z-10 hover:z-20 rounded-2xl backdrop-blur-xl p-5 sm:p-6 h-full min-h-[300px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 overflow-hidden ${
              resolvedTheme === 'dark'
                ? 'bg-card/50 border border-white/10 hover:border-white/30'
                : 'bg-card/80 border-2 border-foreground/10 hover:border-foreground/30'
            }`;
            
            return (
            <div
              key={product.name}
              className={`relative transition-all duration-700 ease-out will-change-transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                transform: `translateY(${getColumnTransform(index) + (index >= 4 ? -10 : 10)}px)`,
              }}
            >
              {product.external ? (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: product.accentColor }}
                />
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* Icon - Premium Style */}
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <ProductLogo productId={product.name} className="w-8 h-8" alt={`${product.name} logo`} />
                    </div>
                  </div>

                  {/* Text content */}
                  <h3 className="font-display text-lg font-bold text-foreground text-center mb-0.5 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p 
                    className="text-xs font-medium text-center mb-2 leading-snug"
                    style={{ color: product.accentColor }}
                  >
                    {product.tagline}
                  </p>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {/* Animated Stats */}
                  <div className="mb-3 text-center">
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span 
                        className="text-2xl font-bold font-display transition-all duration-1000"
                        style={{ color: product.accentColor }}
                      >
                        {isVisible ? product.stats.value : 0}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">{product.stats.suffix}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{product.stats.label}</p>
                  </div>

                  {/* Mini animated chart */}
                  <div className="mb-3 px-1">
                    <MiniBarChart data={product.graphData} color={product.accentColor} isActive={isVisible} />
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex justify-center">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Decorative corner accents - theme aware */}
                <div className={`absolute top-3 left-3 w-2 h-2 border-t border-l rounded-tl transition-all group-hover:w-3 group-hover:h-3 ${
                  resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                }`} />
                <div className={`absolute top-3 right-3 w-2 h-2 border-t border-r rounded-tr transition-all group-hover:w-3 group-hover:h-3 ${
                  resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                }`} />
                <div className={`absolute bottom-3 left-3 w-2 h-2 border-b border-l rounded-bl transition-all group-hover:w-3 group-hover:h-3 ${
                  resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                }`} />
                <div className={`absolute bottom-3 right-3 w-2 h-2 border-b border-r rounded-br transition-all group-hover:w-3 group-hover:h-3 ${
                  resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                }`} />
                </a>
              ) : (
                <Link
                  to={product.href}
                  className={cardClasses}
                >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundColor: product.accentColor }}
                />
                
                {/* Card content */}
                <div className="relative z-10">
                  {/* Icon - Premium Style */}
                  <div className="mb-3 flex justify-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <ProductLogo productId={product.name} className="w-8 h-8" alt={`${product.name} logo`} />
                    </div>
                  </div>

                  {/* Text content */}
                  <h3 className="font-display text-lg font-bold text-foreground text-center mb-0.5 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p 
                    className="text-xs font-medium text-center mb-2 leading-snug"
                    style={{ color: product.accentColor }}
                  >
                    {product.tagline}
                  </p>
                  <p className="text-xs text-muted-foreground text-center leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {/* Animated Stats */}
                  <div className="mb-3 text-center">
                    <div className="flex items-baseline justify-center gap-0.5">
                      <span 
                        className="text-2xl font-bold font-display transition-all duration-1000"
                        style={{ color: product.accentColor }}
                      >
                        {isVisible ? product.stats.value : 0}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">{product.stats.suffix}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{product.stats.label}</p>
                  </div>

                  {/* Mini animated chart */}
                  <div className="mb-3 px-1">
                    <MiniBarChart data={product.graphData} color={product.accentColor} isActive={isVisible} />
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex justify-center">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Decorative corner accents - theme aware */}
                <div className={`absolute top-3 left-3 w-2 h-2 border-t border-l rounded-tl transition-all group-hover:w-3 group-hover:h-3 ${
                  resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                }`} />
                <div className={`absolute top-3 right-3 w-2 h-2 border-t border-r rounded-tr transition-all group-hover:w-3 group-hover:h-3 ${
                  resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                }`} />
                <div className={`absolute bottom-3 left-3 w-2 h-2 border-b border-l rounded-bl transition-all group-hover:w-3 group-hover:h-3 ${
                  resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                }`} />
                <div className={`absolute bottom-3 right-3 w-2 h-2 border-b border-r rounded-br transition-all group-hover:w-3 group-hover:h-3 ${
                  resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                }`} />
                </Link>
              )}
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default ParallaxProductShowcase;
