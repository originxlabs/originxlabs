import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { Sparkles, Zap, Shield, Brain, GitBranch, Settings, Cpu, ArrowRight, Play, Pause, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import ProductHoverCard from "./ProductHoverCard";
import AeonLogo from "./AeonLogo";

import heroVideo1 from "@/assets/video1-ox.mp4";
import heroVideo2 from "@/assets/video2-ox.mp4";
import heroVideo3 from "@/assets/originx-hero-video.mp4";
import heroVideo4 from "@/assets/oxl-hero-video.mp4";

const backgroundVideos = [heroVideo1, heroVideo2, heroVideo3, heroVideo4];

const taglines = [
  "Where Intelligence Begins.",
  "Engineering Autonomous Intelligence.",
  "From Origin to Autonomy.",
];

// Product icons for each platform - AEON uses special component
const productIcons: Record<string, React.ElementType | null> = {
  COGNIX: Cpu,
  QUALYX: Shield,
  TRACEFLOW: GitBranch,
  OPZENIX: Settings,
  AEON: null, // Uses custom AeonLogo component
  PROXINEX: Compass,
};

// Product colors - including AEON
const productColors: Record<string, { color: string; from: string; to: string }> = {
  COGNIX: { color: "hsl(210 100% 60%)", from: "hsl(210, 100%, 60%)", to: "hsl(230, 100%, 70%)" },
  QUALYX: { color: "hsl(270 100% 65%)", from: "hsl(270, 100%, 65%)", to: "hsl(290, 100%, 75%)" },
  TRACEFLOW: { color: "hsl(330 70% 55%)", from: "hsl(330, 70%, 55%)", to: "hsl(350, 80%, 65%)" },
  OPZENIX: { color: "hsl(160 70% 45%)", from: "hsl(160, 70%, 45%)", to: "hsl(180, 80%, 55%)" },
  AEON: { color: "hsl(250 80% 60%)", from: "hsl(250, 80%, 60%)", to: "hsl(280, 70%, 50%)" },
  PROXINEX: { color: "hsl(214 90% 56%)", from: "hsl(214, 90%, 56%)", to: "hsl(228, 84%, 64%)" },
};

// Animated line chart component for hero cards
const AnimatedLineChart = ({ data, color, isActive }: { data: number[], color: string, isActive: boolean }) => {
  const pathRef = useRef<SVGPathElement>(null);
  
  const width = 200;
  const height = 60;
  const padding = 5;
  
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
        strokeWidth="2"
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
        r="4"
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [textRef, textVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: parallaxRef, offset } = useParallax(0.3);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
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

  // Toggle video play/pause
  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  useEffect(() => {
    if (!videoRef.current || !isVideoPlaying) {
      return;
    }

    const playPromise = videoRef.current.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  }, [currentVideoIndex, isVideoPlaying]);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % backgroundVideos.length);
  };

  useEffect(() => {
    const preloaders = backgroundVideos.map((videoSrc) => {
      const preloader = document.createElement("video");
      preloader.src = videoSrc;
      preloader.preload = "auto";
      preloader.muted = true;
      preloader.playsInline = true;
      preloader.load();
      return preloader;
    });

    return () => {
      preloaders.forEach((preloader) => {
        preloader.src = "";
      });
    };
  }, []);

  const products = [
    { 
      name: "COGNIX", 
      tagline: "AI Backend as a Service", 
      stat: { value: 99.9, suffix: '%', label: 'Uptime' },
      chartData: [30, 45, 35, 60, 50, 70, 65, 85, 75, 95, 88, 98]
    },
    { 
      name: "QUALYX", 
      tagline: "AI QA as a Service", 
      stat: { value: 10, suffix: 'x', label: 'Faster Tests' },
      chartData: [40, 55, 45, 70, 60, 80, 70, 90, 82, 95, 90, 100]
    },
    { 
      name: "TRACEFLOW", 
      tagline: "Digital Cognition", 
      stat: { value: 1, suffix: 'ms', label: 'Latency' },
      chartData: [50, 35, 55, 40, 65, 50, 75, 60, 85, 70, 95, 80]
    },
    { 
      name: "OPZENIX", 
      tagline: "MLOps Platform", 
      stat: { value: 50, suffix: '%', label: 'Deploy Time ↓' },
      chartData: [45, 60, 50, 75, 65, 85, 75, 92, 85, 97, 92, 100]
    },
    { 
      name: "AEON", 
      tagline: "Autonomous Agent", 
      stat: { value: 24, suffix: '/7', label: 'Always On' },
      chartData: [70, 85, 75, 95, 80, 100, 90, 100, 95, 100, 98, 100]
    },
    {
      name: "PROXINEX",
      tagline: "AI Intelligence Control Plane",
      stat: { value: 63, suffix: '%', label: 'Avg Cost Saved' },
      chartData: [42, 48, 55, 61, 68, 72, 79, 84, 88, 91, 95, 99]
    },
  ];

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Video Background with parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          transform: `translateZ(-100px) scale(1.1) translateY(${scrollY * 0.5}px)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          preload="auto"
          muted
          playsInline
          onEnded={handleVideoEnded}
          key={backgroundVideos[currentVideoIndex]}
          src={backgroundVideos[currentVideoIndex]}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlays for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background dark:from-background/80 dark:via-background/60 dark:to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>

      {/* Video Play/Pause Button */}
      <button
        onClick={toggleVideoPlayback}
        className="absolute bottom-24 right-6 z-20 p-3 rounded-full bg-background/50 dark:bg-background/30 backdrop-blur-md border border-border/30 hover:bg-background/70 dark:hover:bg-background/50 transition-all duration-300 group"
        aria-label={isVideoPlaying ? "Pause video" : "Play video"}
      >
        {isVideoPlaying ? (
          <Pause className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
        ) : (
          <Play className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
        )}
      </button>

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
        className="absolute inset-0 pointer-events-none overflow-hidden z-[4]"
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
        className="relative z-10 text-center px-6 max-w-7xl mx-auto"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        {/* Animated Tagline */}
        <div className={`h-8 mb-8 overflow-hidden transition-all duration-1000 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p 
            className={`text-primary dark:text-primary text-sm md:text-base font-semibold tracking-[0.25em] uppercase transition-all duration-500 ${
              isAnimating ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
            }`}
          >
            {taglines[currentTagline]}
          </p>
        </div>
        
        {/* Main Heading */}
        <h1 className={`font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-foreground">The Origin of</span>{" "}
          <span className="text-gradient">Autonomous Intelligence</span>
        </h1>
        
        {/* Subtitle */}
        <p className={`text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-16 transition-all duration-1000 delay-300 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          AI Platforms. Agentic Systems. Life OS. Built with Ethics.
        </p>

        {/* Animated Product Cards Grid with Icons */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-12 transition-all duration-1000 delay-400 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {products.map((product, index) => {
            const colors = productColors[product.name];
            const IconComponent = productIcons[product.name];
            
            return (
              <ProductHoverCard
                key={product.name}
                productId={product.name.toLowerCase()}
                productName={product.name}
                gradientFrom={colors.from}
                gradientTo={colors.to}
              >
                <Link
                  to={`/products/${product.name.toLowerCase()}`}
                  className={`group relative p-5 rounded-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden block ${
                    cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${
                    resolvedTheme === 'dark'
                      ? 'bg-card/40 border border-white/10 hover:border-white/30 hover:bg-card/60'
                      : 'bg-card/70 border-2 border-foreground/10 hover:border-foreground/30 hover:bg-card/90'
                  } hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-1`}
                  style={{ 
                    transitionDelay: `${500 + index * 100}ms`,
                    boxShadow: activeProductIndex === index 
                      ? `0 20px 40px -15px ${colors.color}30, 0 10px 20px -10px ${colors.color}20`
                      : 'none'
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                      {/* Product Icon */}
                        <div 
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                            product.name === 'AEON' ? 'bg-transparent' : ''
                          }`}
                          style={{ 
                            background: product.name === 'AEON' ? 'transparent' : `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                          }}
                        >
                          {product.name === 'AEON' ? (
                            <AeonLogo size="sm" animated={false} />
                          ) : IconComponent && (
                            <IconComponent className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <div className="text-left">
                          <h3 className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">{product.tagline}</p>
                        </div>
                      </div>
                      <ArrowRight 
                        className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" 
                      />
                    </div>

                    {/* Stats with animation */}
                    <div className="flex items-baseline gap-1 mb-3">
                      <span 
                        className="text-2xl font-bold font-display transition-all duration-300 group-hover:scale-105"
                        style={{ color: colors.color }}
                      >
                        <AnimatedCounter value={product.stat.value} suffix={product.stat.suffix} isActive={cardsVisible} />
                      </span>
                      <span className="text-xs text-muted-foreground">{product.stat.label}</span>
                    </div>

                    {/* Animated Chart */}
                    <div className="text-muted-foreground transition-transform duration-500 group-hover:scale-[1.02]">
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
        
        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <a
            href="#products"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
          >
            Explore Platforms
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-card/80 dark:bg-card/50 text-foreground rounded-xl font-medium hover:bg-card transition-all duration-300 border border-border/50 backdrop-blur-sm"
          >
            Talk to OriginX
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
