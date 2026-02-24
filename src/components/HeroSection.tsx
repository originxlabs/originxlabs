import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Sparkles, Zap, Shield, Brain, GitBranch, Settings, ArrowRight, Laptop, Smartphone, Boxes } from "lucide-react";
import { Link } from "react-router-dom";
import ProductHoverCard from "./ProductHoverCard";
import ProductLogo from "./ProductLogo";

const taglines = [
  "Built for Agents. Trusted by Enterprises.",
  "From Models to Measurable Outcomes.",
  "Applied AI for Real-World Operations.",
];

const headingPhrases = [
  "Agentic Platforms",
  "Intelligent Infrastructure",
  "Autonomous Operations",
  "Enterprise AI Systems",
];

// Product colors
const productColors: Record<string, { color: string; from: string; to: string }> = {
  COGNIX: { color: "hsl(210 100% 60%)", from: "hsl(210, 100%, 60%)", to: "hsl(230, 100%, 70%)" },
  QUALYX: { color: "hsl(270 100% 65%)", from: "hsl(270, 100%, 65%)", to: "hsl(290, 100%, 75%)" },
  TRACEFLOW: { color: "hsl(330 70% 55%)", from: "hsl(330, 70%, 55%)", to: "hsl(350, 80%, 65%)" },
  OPZENIX: { color: "hsl(160 70% 45%)", from: "hsl(160, 70%, 45%)", to: "hsl(180, 80%, 55%)" },
  PROXINEX: { color: "hsl(214 90% 56%)", from: "hsl(214, 90%, 56%)", to: "hsl(228, 84%, 64%)" },
  CHRONYX: { color: "hsl(285 74% 60%)", from: "hsl(285, 74%, 60%)", to: "hsl(305, 78%, 66%)" },
  HUMINEX: { color: "hsl(204 84% 46%)", from: "hsl(204, 84%, 46%)", to: "hsl(220, 86%, 58%)" },
  "ORIGINX ONE": { color: "hsl(226 88% 62%)", from: "hsl(226, 88%, 62%)", to: "hsl(244, 92%, 70%)" },
};

// Animated line chart component for hero cards
const AnimatedLineChart = ({ data, color, isActive }: { data: number[], color: string, isActive: boolean }) => {
  const pathRef = useRef<SVGPathElement>(null);
  
  const width = 150;
  const height = 42;
  const padding = 4;
  
  const maxVal = Math.max(...data);
  const minVal = Math.min(...data);
  const range = maxVal - minVal || 1;
  
  const points = data.map((val, i) => ({
    x: padding + (i / (data.length - 1)) * (width - padding * 2),
    y: height - padding - ((val - minVal) / range) * (height - padding * 2)
  }));
  
  const pathD = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = points[i - 1];
    const cpX = (prev.x + point.x) / 2;
    return `${acc} C ${cpX} ${prev.y}, ${cpX} ${point.y}, ${point.x} ${point.y}`;
  }, '');

  return (
    <svg width={width} height={height} className="overflow-visible">
      {/* Grid lines */}
      {[0, 1, 2].map(i => (
        <line
          key={i}
          x1={padding}
          y1={padding + (i * (height - padding * 2)) / 2}
          x2={width - padding}
          y2={padding + (i * (height - padding * 2)) / 2}
          stroke="currentColor"
          strokeOpacity={0.1}
          strokeDasharray="4 4"
        />
      ))}
      
      {/* Gradient fill */}
      <defs>
        <linearGradient id={`gradient-${color.replace(/[^a-z0-9]/gi, '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Area fill */}
      <path
        d={`${pathD} L ${points[points.length - 1].x} ${height - padding} L ${padding} ${height - padding} Z`}
        fill={`url(#gradient-${color.replace(/[^a-z0-9]/gi, '')})`}
        className={`transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Line */}
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        className={`transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        style={{
          strokeDasharray: isActive ? 'none' : '1000',
          strokeDashoffset: isActive ? '0' : '1000',
        }}
      />
      
      {/* End dot */}
      <circle
        cx={points[points.length - 1]?.x}
        cy={points[points.length - 1]?.y}
        r="3"
        fill={color}
        className={`transition-all duration-1000 delay-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
      />
    </svg>
  );
};

// Animated counter component
const AnimatedCounter = ({ value, suffix = '', isActive }: { value: number, suffix?: string, isActive: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isActive, value]);
  
  return <span>{count}{suffix}</span>;
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [textRef, textVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: parallaxRef, offset } = useParallax(0.3);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [headingPhraseIndex, setHeadingPhraseIndex] = useState(0);
  const [typedHeading, setTypedHeading] = useState("");
  const [isDeletingHeading, setIsDeletingHeading] = useState(false);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [heroModal, setHeroModal] = useState<"desktop" | "originxone" | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setCardsVisible(true), 500);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      name: "PROXINEX",
      tagline: "AI Intelligence Control Plane + AEON",
      href: "/products/proxinex",
      stat: { value: 63, suffix: '%', label: 'Avg Cost Saved' },
      chartData: [42, 48, 55, 61, 68, 72, 79, 84, 88, 91, 95, 99]
    },
    {
      name: "TRACEFLOW",
      tagline: "Digital Cognition",
      href: "/products/traceflow",
      stat: { value: 1, suffix: 'ms', label: 'Latency' },
      chartData: [50, 35, 55, 40, 65, 50, 75, 60, 85, 70, 95, 80]
    },
    {
      name: "CHRONYX",
      tagline: "Autonomous Time Intelligence",
      href: "/products/chronyx",
      stat: { value: 24, suffix: '/7', label: 'Active Monitoring' },
      chartData: [28, 36, 41, 53, 61, 70, 77, 84, 90, 94, 97, 100]
    },
    {
      name: "HUMINEX",
      tagline: "AI Workforce Operating System",
      href: "/products/huminex",
      stat: { value: 15, suffix: '', label: 'Unified Modules' },
      chartData: [34, 40, 47, 55, 64, 73, 81, 88, 93, 97, 99, 100]
    },
    {
      name: "QUALYX",
      tagline: "AI QA as a Service",
      href: "/products/qualyx",
      stat: { value: 10, suffix: 'x', label: 'Faster Tests' },
      chartData: [40, 55, 45, 70, 60, 80, 70, 90, 82, 95, 90, 100]
    },
    {
      name: "OPZENIX",
      tagline: "MLOps Platform",
      href: "/products/opzenix",
      stat: { value: 50, suffix: '%', label: 'Deploy Time ↓' },
      chartData: [45, 60, 50, 75, 65, 85, 75, 92, 85, 97, 92, 100]
    },
    {
      name: "COGNIX",
      tagline: "AI Backend as a Service",
      href: "/products/cognix",
      stat: { value: 99.9, suffix: '%', label: 'Uptime' },
      chartData: [30, 45, 35, 60, 50, 70, 65, 85, 75, 95, 88, 98]
    },
    {
      name: "ORIGINX ONE",
      tagline: "One API. Every Capability.",
      href: "/products/originx-one",
      stat: { value: 50, suffix: '+', label: 'Providers' },
      chartData: [28, 36, 43, 50, 59, 68, 76, 85, 91, 95, 98, 100]
    },
  ];

  const livePreviewNodes = products.map((product, index) => {
    const colors = productColors[product.name];
    return {
      ...product,
      ...colors,
      x: [8, 88, 12, 86, 18, 84, 22, 80][index],
      y: [24, 18, 62, 46, 78, 70, 36, 58][index],
      delay: 0,
    };
  });

  // Rotating taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setIsAnimating(false);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Rotating product showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProductIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  // Typewriter heading animation
  useEffect(() => {
    const fullText = headingPhrases[headingPhraseIndex];
    const isTypingComplete = !isDeletingHeading && typedHeading === fullText;
    const isDeletingComplete = isDeletingHeading && typedHeading === "";

    if (isTypingComplete) {
      const pauseTimer = setTimeout(() => setIsDeletingHeading(true), 1200);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeletingComplete) {
      setIsDeletingHeading(false);
      setHeadingPhraseIndex((prev) => (prev + 1) % headingPhrases.length);
      return;
    }

    const speed = isDeletingHeading ? 45 : 78;
    const timer = setTimeout(() => {
      setTypedHeading((prev) =>
        isDeletingHeading ? fullText.slice(0, prev.length - 1) : fullText.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [typedHeading, isDeletingHeading, headingPhraseIndex]);

  // Floating elements data for parallax layers
  const floatingElements = [
    { size: 120, x: 10, y: 20, speed: 0.1, delay: 0, icon: Sparkles },
    { size: 80, x: 85, y: 15, speed: 0.15, delay: 1, icon: Zap },
    { size: 100, x: 75, y: 70, speed: 0.08, delay: 2, icon: Brain },
    { size: 60, x: 15, y: 75, speed: 0.12, delay: 0.5, icon: Shield },
    { size: 90, x: 90, y: 45, speed: 0.2, delay: 1.5, icon: GitBranch },
    { size: 70, x: 5, y: 50, speed: 0.18, delay: 2.5, icon: Settings },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative h-[calc(100vh-76px)] min-h-[calc(100vh-76px)] flex items-center justify-center overflow-hidden pt-2 md:pt-3 pb-3"
      style={{ perspective: '1000px' }}
    >
      {/* Gradient Background with parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          transform: `translateZ(-100px) scale(1.1) translateY(${scrollY * 0.5}px)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.15),transparent_45%),radial-gradient(circle_at_80%_25%,hsl(var(--accent)/0.12),transparent_40%),radial-gradient(circle_at_50%_80%,hsl(var(--secondary)/0.1),transparent_45%)]" />
        {/* Gradient overlays for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background dark:from-background/80 dark:via-background/60 dark:to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>

      {/* Live preview background video-style stage */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden max-[360px]:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,hsl(var(--primary)/0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_45%,hsl(var(--primary)/0.22),transparent_55%)]" />
        <div
          className="absolute left-1/2 top-[46%] w-[90vw] max-w-6xl h-[50vh] max-h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-foreground/10 dark:border-white/15 bg-background/25 dark:bg-black/25 backdrop-blur-[2px]"
          style={{ boxShadow: "0 30px 120px rgba(0,0,0,0.20), inset 0 0 60px rgba(255,255,255,0.03)" }}
        >
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 opacity-40 dark:opacity-30 bg-[linear-gradient(0deg,transparent_24%,hsl(var(--foreground)/0.08)_25%,transparent_26%,transparent_49%,hsl(var(--foreground)/0.08)_50%,transparent_51%,transparent_74%,hsl(var(--foreground)/0.08)_75%,transparent_76%)] bg-[length:100%_30px]" />
            <div className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-xl animate-hero-scan" />
            <div className="absolute -inset-x-20 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse-slow" />
            <div className="absolute -inset-x-20 top-2/3 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-pulse-slow" style={{ animationDelay: "1200ms" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full border border-primary/20 dark:border-primary/30 animate-spin-slow">
                {livePreviewNodes.map((node, idx) => (
                  <div
                    key={`orbit-${node.name}`}
                    className="absolute left-1/2 top-1/2"
                    style={{ transform: `rotate(${idx * (360 / livePreviewNodes.length)}deg) translateY(-92px)` }}
                  >
                    <span className="block h-2.5 w-2.5 rounded-full shadow-[0_0_12px_currentColor]" style={{ color: node.color, backgroundColor: node.color }} />
                  </div>
                ))}
              </div>
            </div>
            {[0, 1, 2, 3].map((dot) => (
              <div
                key={`preview-dot-${dot}`}
                className="absolute w-2.5 h-2.5 rounded-full bg-primary/70 dark:bg-primary/80 animate-ping"
                style={{
                  left: `${22 + dot * 18}%`,
                  top: `${28 + (dot % 2) * 30}%`,
                  animationDelay: `${dot * 500}ms`,
                  animationDuration: "2.4s",
                }}
              />
            ))}
          </div>
        </div>

        {livePreviewNodes.map((node) => (
          <div
            key={`bg-node-${node.name}`}
            className={`absolute animate-float ${node.x > 70 ? "z-[12]" : "z-[6]"}`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${node.delay}s`,
              animationDuration: "6s",
              transform: `translateY(${scrollY * -0.06}px)`,
            }}
          >
            <div
              className={`rounded-xl border px-2.5 py-1.5 backdrop-blur-md ${
                node.x > 70 ? "bg-card/90 dark:bg-card/75" : "bg-card/70 dark:bg-card/45"
              }`}
              style={{
                borderColor: `${node.color}55`,
                boxShadow: `0 12px 34px -16px ${node.color}cc`,
              }}
            >
              <div className="flex items-center gap-2.5">
                <ProductLogo productId={node.name} className="w-6 h-6" alt={`${node.name} background logo`} />
                <div className="leading-tight">
                  <p className="text-[11px] sm:text-xs font-semibold tracking-wide text-foreground">{node.name}</p>
                  <p className="text-[10px] text-muted-foreground">{node.stat.label}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Parallax floating elements - Layer 1 (slowest) */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden z-[1]"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      >
        {floatingElements.slice(0, 2).map((el, i) => (
          <div
            key={`layer1-${i}`}
            className="absolute opacity-10 dark:opacity-20 animate-float"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: el.size,
              height: el.size,
              animationDelay: `${el.delay}s`,
              animationDuration: '8s',
            }}
          >
            <el.icon 
              className="w-full h-full text-primary/30" 
              strokeWidth={1}
            />
          </div>
        ))}
      </div>

      {/* Parallax floating elements - Layer 2 (medium) */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden z-[2]"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        {floatingElements.slice(2, 4).map((el, i) => (
          <div
            key={`layer2-${i}`}
            className="absolute opacity-15 dark:opacity-25 animate-float"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: el.size * 0.8,
              height: el.size * 0.8,
              animationDelay: `${el.delay}s`,
              animationDuration: '6s',
            }}
          >
            <el.icon 
              className="w-full h-full text-accent/40" 
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>

      {/* Parallax floating elements - Layer 3 (fastest) */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden z-[3]"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        {floatingElements.slice(4).map((el, i) => (
          <div
            key={`layer3-${i}`}
            className="absolute opacity-20 dark:opacity-30 animate-float"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: el.size * 0.6,
              height: el.size * 0.6,
              animationDelay: `${el.delay}s`,
              animationDuration: '5s',
            }}
          >
            <el.icon 
              className="w-full h-full text-secondary/50" 
              strokeWidth={2}
            />
          </div>
        ))}
      </div>
      
      {/* Gradient orbs with parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none overflow-hidden z-[4] max-[360px]:hidden"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div 
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" 
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/10 dark:bg-accent/15 rounded-full blur-[100px] animate-pulse-slow" 
          style={{ animationDelay: "2s", transform: `translateY(${scrollY * -0.15}px)` }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow" 
          style={{ animationDelay: "4s", transform: `translateY(${scrollY * -0.05}px)` }} 
        />
      </div>
      
      {/* Main content with parallax */}
      <div 
        ref={textRef} 
        className="relative z-10 text-center px-3 sm:px-6 max-w-6xl mx-auto h-full flex flex-col justify-center"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        {/* Animated Tagline */}
        <div className={`h-6 mb-1 overflow-hidden transition-all duration-1000 max-[360px]:h-5 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p 
            className={`text-primary dark:text-primary text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-all duration-500 ${
              isAnimating ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
            }`}
          >
            {taglines[currentTagline]}
          </p>
        </div>
        
        {/* Main Heading */}
        <h1 className={`font-display text-[1.65rem] leading-[1.12] sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 transition-all duration-1000 delay-200 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-foreground">The Origin of</span>{" "}
          <span className="text-gradient inline-flex items-center gap-1">
            <span>{typedHeading}</span>
            <span className="inline-block w-[2px] h-[0.95em] bg-primary/80 animate-pulse" />
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className={`text-muted-foreground text-[13px] leading-relaxed sm:text-base md:text-lg max-w-2xl mx-auto mb-2.5 sm:mb-3.5 transition-all duration-1000 delay-300 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          AI Platforms. Agentic Systems. Life OS. Built with Ethics.
        </p>
        <p className={`text-[10px] md:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase text-primary/80 mb-2 sm:mb-2.5 transition-all duration-1000 delay-350 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          OriginX Labs Pvt. Ltd.
        </p>
        <div
          className={`mb-2.5 sm:mb-3.5 transition-all duration-1000 max-[360px]:hidden ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "380ms" }}
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-full border border-border/50 bg-card/60 backdrop-blur-sm py-1.5">
            <div className="flex w-max animate-hero-marquee items-center gap-3 px-3">
              {[...products, ...products].map((product, idx) => (
                <div key={`${product.name}-${idx}`} className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/70 px-3 py-1.5">
                  <ProductLogo productId={product.name} className="w-7 h-7" alt={`${product.name} ticker logo`} />
                  <span className="text-[11px] md:text-xs font-medium tracking-wide text-foreground">{product.name}</span>
                  <span className="text-[10px] md:text-[11px] text-muted-foreground">{product.tagline}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Product Cards Grid with Icons */}
        <div className={`mb-2.5 sm:mb-3 transition-all duration-1000 delay-400 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative mx-auto max-w-6xl rounded-[26px] border border-white/20 dark:border-white/15 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 p-2 sm:p-3 md:p-4 overflow-hidden shadow-[0_16px_64px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-0 bg-background/55 dark:bg-background/35 backdrop-blur-md" />
            <div className="absolute inset-0 rounded-[26px] ring-1 ring-white/20 dark:ring-white/10" />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
              {products.map((product, index) => {
                const colors = productColors[product.name];

                return (
                  <ProductHoverCard
                    key={product.name}
                    productId={product.name.toLowerCase()}
                    productName={product.name}
                    gradientFrom={colors.from}
                    gradientTo={colors.to}
                    centerOnHover
                  >
                    <Link
                      to={product.href}
                      target={product.external ? "_blank" : undefined}
                      rel={product.external ? "noopener noreferrer" : undefined}
                      className={`group relative z-10 hover:z-20 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden block min-h-[114px] max-[360px]:min-h-[102px] sm:min-h-[138px] ${
                        cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      } ${
                        resolvedTheme === "dark"
                          ? "bg-card/45 border border-white/10 hover:border-white/30 hover:bg-card/65"
                          : "bg-card/78 border-2 border-foreground/10 hover:border-foreground/30 hover:bg-card/92"
                      } hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1`}
                      style={{
                        boxShadow:
                          activeProductIndex === index
                            ? `0 18px 32px -16px ${colors.color}40, 0 8px 18px -12px ${colors.color}30`
                            : "none",
                      }}
                    >
                  {/* Animated gradient background on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"
                    style={{ 
                      background: `radial-gradient(circle at 50% 0%, ${colors.color}15 0%, transparent 70%)`,
                    }}
                  />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div 
                      className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${colors.color}10, transparent)`,
                      }}
                    />
                  </div>
                  
                  {/* Active indicator with glow */}
                  {activeProductIndex === index && (
                    <>
                      <div 
                        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                        style={{ backgroundColor: colors.color }}
                      />
                      <div 
                        className="absolute top-0 left-0 right-0 h-8 rounded-t-2xl blur-xl opacity-50"
                        style={{ backgroundColor: colors.color }}
                      />
                    </>
                  )}
                  
                  <div className="relative z-10">
                    {/* Header with Icon */}
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-2 sm:gap-3">
                      {/* Product Icon */}
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <ProductLogo productId={product.name} className="w-6 h-6 sm:w-8 sm:h-8" alt={`${product.name} logo`} />
                        </div>
                        <div className="text-left">
                          <h3 className="font-display font-bold text-foreground text-[11px] sm:text-base leading-tight group-hover:text-primary transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="hidden sm:block text-[11px] sm:text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors leading-snug">
                            {product.tagline}
                          </p>
                        </div>
                      </div>
                      <ArrowRight 
                        className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" 
                      />
                    </div>

                    {/* Stats with animation */}
                    <div className="flex items-baseline gap-1.5 mb-1 sm:mb-2">
                      <span 
                        className="text-base sm:text-2xl font-bold font-display transition-all duration-300 group-hover:scale-105"
                        style={{ color: colors.color }}
                      >
                        <AnimatedCounter value={product.stat.value} suffix={product.stat.suffix} isActive={cardsVisible} />
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground line-clamp-1">{product.stat.label}</span>
                    </div>

                    {/* Animated Chart */}
                    <div className="text-muted-foreground transition-transform duration-500 group-hover:scale-[1.02] max-[360px]:hidden">
                      <AnimatedLineChart 
                        data={product.chartData} 
                        color={colors.color} 
                        isActive={cardsVisible && activeProductIndex === index}
                      />
                    </div>
                  </div>

                  {/* Corner accents with hover animation */}
                  <div className={`absolute top-2 left-2 w-2 h-2 border-t border-l rounded-tl transition-all duration-300 group-hover:w-4 group-hover:h-4 ${
                    resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                  }`} />
                  <div className={`absolute top-2 right-2 w-2 h-2 border-t border-r rounded-tr transition-all duration-300 group-hover:w-4 group-hover:h-4 ${
                    resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                  }`} />
                  <div className={`absolute bottom-2 left-2 w-2 h-2 border-b border-l rounded-bl transition-all duration-300 group-hover:w-4 group-hover:h-4 ${
                    resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                  }`} />
                  <div className={`absolute bottom-2 right-2 w-2 h-2 border-b border-r rounded-br transition-all duration-300 group-hover:w-4 group-hover:h-4 ${
                    resolvedTheme === 'dark' ? 'border-white/20 group-hover:border-white/40' : 'border-foreground/20 group-hover:border-foreground/40'
                  }`} />
                    </Link>
                  </ProductHoverCard>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center transition-all duration-1000 delay-700 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <button
            type="button"
            onClick={() => setHeroModal("desktop")}
            className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-primary/40 bg-primary/10 text-foreground hover:bg-primary/20 transition-all duration-300 text-sm sm:text-base inline-flex items-center justify-center gap-2"
          >
            <Laptop className="w-4 h-4" />
            OriginX Desktop
          </button>
          <button
            type="button"
            onClick={() => setHeroModal("originxone")}
            className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-primary/40 bg-card/65 text-foreground hover:bg-card transition-all duration-300 text-sm sm:text-base inline-flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Try OriginX One
          </button>
          <Link
            to="/products/originx-one"
            className="px-4 py-2.5 sm:px-6 sm:py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm sm:text-base hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <Boxes className="w-4 h-4" />
            Explore 8 Intelligent Platforms
          </Link>
        </div>
        <div
          className={`mt-2 sm:mt-2.5 transition-all duration-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "780ms" }}
        >
          <div className="mx-auto max-w-xl rounded-xl border border-border/40 bg-card/45 px-3 py-2.5 backdrop-blur-sm text-left">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Coming Soon</p>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm sm:text-base font-semibold text-foreground">OriginX Desktop + OriginX Mobile</p>
                <p className="text-xs sm:text-sm text-muted-foreground">macOS, Windows, iPhone apps for your complete OriginX suite.</p>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Laptop className="w-4 h-4" />
                <Smartphone className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {heroModal && (
        <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl border border-border/50 bg-background p-5 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Coming Soon</p>
            {heroModal === "desktop" ? (
              <>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">OriginX Desktop</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Native apps for macOS and Windows, plus OriginX Mobile for iPhone.
                </p>
                <div className="flex items-center gap-3 text-primary mb-5">
                  <Laptop className="w-5 h-5" />
                  <Smartphone className="w-5 h-5" />
                </div>
              </>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Try OriginX One</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  OriginX One interactive trial workflow is rolling out soon on the landing experience.
                </p>
                <div className="flex items-center gap-3 text-primary mb-5">
                  <Sparkles className="w-5 h-5" />
                  <Boxes className="w-5 h-5" />
                </div>
              </>
            )}
            <button
              type="button"
              onClick={() => setHeroModal(null)}
              className="w-full rounded-xl bg-primary text-primary-foreground py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
