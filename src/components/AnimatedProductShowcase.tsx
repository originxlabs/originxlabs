import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  TrendingUp,
  Shield,
  Activity,
  Users,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Layers,
  Cpu,
  Zap,
  GitBranch,
  Settings,
  Database,
  Lock,
  RefreshCw
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ProductLogo from "./ProductLogo";

interface ProductData {
  id: string;
  name: string;
  tagline: string;
  href: string;
  external?: boolean;
  color: string;
  stats: Array<{ label: string; value: string; change?: string; changeType?: "positive" | "negative" }>;
  features: Array<{ icon: React.ElementType; label: string; status: "active" | "processing" | "idle" }>;
  chartData: number[];
  healthMetrics: Array<{ label: string; value: number }>;
}

const products: ProductData[] = [
  {
    id: "proxinex",
    name: "Proxinex",
    tagline: "AI Control Plane + AEON",
    href: "/products/proxinex",
    color: "hsl(214 90% 56%)",
    stats: [
      { label: "ROUTED QUERIES", value: "1.1M", change: "+31%", changeType: "positive" },
      { label: "COST SAVINGS", value: "63%", change: "+9%", changeType: "positive" },
      { label: "VERIFIED ANSWERS", value: "94%" },
      { label: "MODEL OPTIONS", value: "12+" }
    ],
    features: [
      { icon: Cpu, label: "Intent Detect", status: "active" },
      { icon: GitBranch, label: "Smart Routing", status: "active" },
      { icon: CheckCircle, label: "AEON Orchestration", status: "active" },
      { icon: Shield, label: "Confidence", status: "processing" }
    ],
    chartData: [45, 55, 62, 70, 76, 84, 90, 96, 92, 98, 95, 100],
    healthMetrics: [
      { label: "Routing Accuracy", value: 96 },
      { label: "Verification", value: 94 },
      { label: "Cost Control", value: 63 }
    ]
  },
  {
    id: "traceflow",
    name: "Traceflow",
    tagline: "Digital Cognition",
    href: "/products/traceflow",
    color: "hsl(330 70% 55%)",
    stats: [
      { label: "TRACES/MIN", value: "45.2K", change: "+18%", changeType: "positive" },
      { label: "AVG LATENCY", value: "1.2ms", change: "-15%", changeType: "positive" },
      { label: "INSIGHTS", value: "2,341" },
      { label: "COVERAGE", value: "100%" }
    ],
    features: [
      { icon: Activity, label: "Real-time Trace", status: "active" },
      { icon: GitBranch, label: "Flow Analysis", status: "active" },
      { icon: Layers, label: "Context Layer", status: "active" },
      { icon: BarChart3, label: "Analytics", status: "processing" }
    ],
    chartData: [70, 75, 72, 80, 85, 82, 90, 88, 95, 92, 98, 100],
    healthMetrics: [
      { label: "Trace Health", value: 99 },
      { label: "Data Quality", value: 97 },
      { label: "Coverage", value: 100 }
    ]
  },
  {
    id: "chronyx",
    name: "Chronyx",
    tagline: "Autonomous Time Intelligence",
    href: "/products/chronyx",
    color: "hsl(285 74% 60%)",
    stats: [
      { label: "SIGNALS/DAY", value: "5.0M", change: "+22%", changeType: "positive" },
      { label: "ALERT PRECISION", value: "96%", change: "+7%", changeType: "positive" },
      { label: "RESPONSE TIME", value: "<2s" },
      { label: "TIMELINE COVERAGE", value: "24/7" }
    ],
    features: [
      { icon: Activity, label: "Signal Engine", status: "active" },
      { icon: TrendingUp, label: "Trend Memory", status: "active" },
      { icon: BarChart3, label: "Temporal Insights", status: "active" },
      { icon: AlertCircle, label: "Predictive Alerts", status: "processing" }
    ],
    chartData: [35, 42, 48, 58, 66, 74, 82, 88, 91, 95, 98, 100],
    healthMetrics: [
      { label: "Signal Quality", value: 96 },
      { label: "Prediction", value: 92 },
      { label: "Coverage", value: 99 }
    ]
  },
  {
    id: "huminex",
    name: "Huminex",
    tagline: "AI Workforce Operating System",
    href: "/products/huminex",
    color: "hsl(204 84% 46%)",
    stats: [
      { label: "UNIFIED MODULES", value: "15", change: "+3", changeType: "positive" },
      { label: "WORKFLOWS", value: "Hire-Retire", changeType: "positive" },
      { label: "CORE STACK", value: "HR+Payroll+Fin" },
      { label: "AUTOMATION", value: "AI Native" }
    ],
    features: [
      { icon: Users, label: "Workforce Ops", status: "active" },
      { icon: BarChart3, label: "Payroll Engine", status: "active" },
      { icon: Shield, label: "Compliance", status: "active" },
      { icon: Cpu, label: "AI Insights", status: "processing" }
    ],
    chartData: [30, 38, 46, 57, 65, 73, 81, 88, 92, 96, 98, 100],
    healthMetrics: [
      { label: "Process Integrity", value: 97 },
      { label: "Workflow Coverage", value: 94 },
      { label: "Ops Automation", value: 91 }
    ]
  },
  {
    id: "qualyx",
    name: "Qualyx",
    tagline: "Quality & Compliance",
    href: "/products/qualyx",
    color: "hsl(270 100% 65%)",
    stats: [
      { label: "AUDITS PASSED", value: "847", change: "+32", changeType: "positive" },
      { label: "COMPLIANCE SCORE", value: "98.4%", change: "+0.8%", changeType: "positive" },
      { label: "OPEN ISSUES", value: "12", change: "-8", changeType: "positive" },
      { label: "RISK LEVEL", value: "Low" }
    ],
    features: [
      { icon: Shield, label: "Compliance Mon...", status: "active" },
      { icon: AlertCircle, label: "Risk Assessment", status: "active" },
      { icon: CheckCircle, label: "Audit Trails", status: "active" },
      { icon: Lock, label: "Security Gates", status: "processing" }
    ],
    chartData: [60, 65, 70, 68, 75, 78, 82, 85, 88, 90, 92, 95],
    healthMetrics: [
      { label: "Compliance Rate", value: 98 },
      { label: "Security Score", value: 96 },
      { label: "Audit Coverage", value: 91 }
    ]
  },
  {
    id: "opzenix",
    name: "Opzenix",
    tagline: "MLOps Platform",
    href: "/products/opzenix",
    color: "hsl(160 70% 45%)",
    stats: [
      { label: "MODELS ACTIVE", value: "156", change: "+23", changeType: "positive" },
      { label: "PIPELINE HEALTH", value: "99.7%", change: "+0.2%", changeType: "positive" },
      { label: "GPU UTIL", value: "87%" },
      { label: "DEPLOYMENTS", value: "1,247" }
    ],
    features: [
      { icon: Cpu, label: "Model Serving", status: "active" },
      { icon: RefreshCw, label: "Auto Retrain", status: "active" },
      { icon: Settings, label: "Config Mgmt", status: "active" },
      { icon: Shield, label: "Governance", status: "processing" }
    ],
    chartData: [55, 60, 68, 72, 78, 85, 88, 90, 85, 92, 95, 97],
    healthMetrics: [
      { label: "Model Health", value: 98 },
      { label: "Pipeline", value: 99 },
      { label: "Resource Util", value: 87 }
    ]
  },
  {
    id: "cognix",
    name: "Cognix",
    tagline: "AI Backend as a Service",
    href: "/products/cognix",
    color: "hsl(210 100% 60%)",
    stats: [
      { label: "API CALLS", value: "2.4M", change: "+12%", changeType: "positive" },
      { label: "LATENCY", value: "23ms", change: "-8%", changeType: "positive" },
      { label: "UPTIME", value: "99.99%", changeType: "positive" },
      { label: "DEPLOYMENTS", value: "847" }
    ],
    features: [
      { icon: Database, label: "Vector DB", status: "active" },
      { icon: Zap, label: "Auto Scaling", status: "active" },
      { icon: Lock, label: "Auth Service", status: "active" },
      { icon: RefreshCw, label: "Sync Engine", status: "processing" }
    ],
    chartData: [65, 72, 80, 75, 85, 90, 88, 95, 92, 98, 94, 100],
    healthMetrics: [
      { label: "API Health", value: 99 },
      { label: "Database", value: 97 },
      { label: "Cache Hit", value: 94 }
    ]
  },
  {
    id: "originxone",
    name: "OriginX One",
    tagline: "One API. Every Capability.",
    href: "/products/originx-one",
    color: "hsl(220 82% 56%)",
    stats: [
      { label: "PROVIDERS", value: "50+", change: "+8", changeType: "positive" },
      { label: "AVG LATENCY", value: "<50ms", change: "-9ms", changeType: "positive" },
      { label: "UPTIME", value: "99.99%" },
      { label: "API CALLS", value: "1B+" }
    ],
    features: [
      { icon: Layers, label: "Unified Gateway", status: "active" },
      { icon: GitBranch, label: "Smart Routing", status: "active" },
      { icon: Shield, label: "OneAuth", status: "active" },
      { icon: Zap, label: "Marketplace", status: "processing" }
    ],
    chartData: [25, 33, 44, 53, 62, 71, 80, 87, 93, 97, 99, 100],
    healthMetrics: [
      { label: "Route Reliability", value: 98 },
      { label: "Security Posture", value: 96 },
      { label: "Provider Reach", value: 95 }
    ]
  },
];

const ProductLivePreview = ({ product, isActive }: { product: ProductData; isActive: boolean }) => {
  const [animatedStats, setAnimatedStats] = useState(product.stats.map(() => 0));
  const [animatedChart, setAnimatedChart] = useState(product.chartData.map(() => 0));
  const [animatedHealth, setAnimatedHealth] = useState(product.healthMetrics.map(() => 0));

  useEffect(() => {
    if (!isActive) return;
    
    // Animate stats
    const statsTimeout = setTimeout(() => {
      setAnimatedStats(product.stats.map((_, i) => i));
    }, 200);

    // Animate chart bars
    product.chartData.forEach((value, i) => {
      setTimeout(() => {
        setAnimatedChart(prev => {
          const newArr = [...prev];
          newArr[i] = value;
          return newArr;
        });
      }, 300 + i * 50);
    });

    // Animate health metrics
    product.healthMetrics.forEach((metric, i) => {
      setTimeout(() => {
        setAnimatedHealth(prev => {
          const newArr = [...prev];
          newArr[i] = metric.value;
          return newArr;
        });
      }, 500 + i * 150);
    });

    return () => clearTimeout(statsTimeout);
  }, [isActive, product]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Dashboard Card */}
      <div className="bg-card dark:bg-card/80 backdrop-blur-xl rounded-2xl border border-border shadow-2xl overflow-hidden transition-all duration-500">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 sm:p-6 border-b border-border/50">
          <div className="flex items-center gap-4">
            {/* Product Icon */}
            <div 
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${product.color}, ${product.color}80)` }}
            >
              <ProductLogo productId={product.id} className="w-6 h-6" alt={`${product.name} logo`} />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground">{product.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{product.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 border-b border-border/30">
          {product.stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`transition-all duration-500 transform ${
                animatedStats.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-xs text-muted-foreground tracking-wider mb-1">{stat.label}</p>
              <p className="text-lg sm:text-2xl font-bold text-foreground">{stat.value}</p>
              {stat.change && (
                <p className={`text-xs flex items-center gap-1 ${
                  stat.changeType === "positive" ? "text-emerald-500" : "text-rose-500"
                }`}>
                  <TrendingUp className="w-3 h-3" />
                  {stat.change}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-muted/30 rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-foreground">Performance Trend</h4>
              <span className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }} />
                Last 12 periods
              </span>
            </div>
            <div className="flex items-end gap-1.5 sm:gap-2 h-28 sm:h-32">
              {animatedChart.map((value, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md transition-all duration-500 ease-out"
                  style={{ 
                    height: `${value}%`,
                    backgroundColor: product.color,
                    opacity: 0.7 + (i / product.chartData.length) * 0.3
                  }}
                />
              ))}
            </div>
          </div>

          {/* Health Metrics */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-sm font-medium text-foreground">System Health</h4>
            {product.healthMetrics.map((metric, i) => (
              <div key={metric.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span className="text-foreground font-medium">{animatedHealth[i]}%</span>
                </div>
                <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{ 
                      width: `${animatedHealth[i]}%`,
                      backgroundColor: product.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 px-4 sm:px-6 pb-4 sm:pb-6">
          {product.features.map((feature, i) => (
            <div 
              key={feature.label}
              className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/30 transition-all duration-300 hover:bg-muted/50"
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${product.color}20` }}
              >
                <feature.icon className="w-4 h-4" style={{ color: product.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground truncate">{feature.label}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span 
                    className={`w-1.5 h-1.5 rounded-full ${
                      feature.status === "active" ? "bg-emerald-500" : 
                      feature.status === "processing" ? "bg-amber-500 animate-pulse" : "bg-muted-foreground"
                    }`} 
                  />
                  {feature.status === "active" ? "Active" : feature.status === "processing" ? "Processing" : "Idle"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnimatedProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPlaying && isVisible) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % products.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, isVisible]);

  const goToProduct = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % products.length);
      }, 5000);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="products" 
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-muted/30 dark:bg-transparent"
    >
      {/* Background Effects with Parallax */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background dark:from-background dark:via-muted/10 dark:to-background"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full blur-[150px] opacity-10 dark:opacity-20 transition-all duration-1000"
        style={{ 
          backgroundColor: products[activeIndex].color,
          transform: `translate(-50%, calc(-50% + ${scrollY * -0.1}px))` 
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with Parallax */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        >
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Product Division
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">
            OriginX Labs
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Enterprise-grade AI platforms with live analytics and autonomous operations.
          </p>
        </div>

        {/* Product Navigation with Icons */}
        <div className={`flex items-center justify-center gap-2 mb-8 sm:mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <button 
            onClick={() => goToProduct((activeIndex - 1 + products.length) % products.length)}
            className="p-2.5 rounded-full bg-muted/50 hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 rounded-full bg-card dark:bg-card/80 backdrop-blur-xl border border-border overflow-x-auto max-w-[86vw] sm:max-w-[80vw]">
            {products.map((product, index) => {
              return (
                <button
                  key={product.id}
                  onClick={() => goToProduct(index)}
                  className={`p-2.5 rounded-xl transition-all duration-300 ${
                    activeIndex === index 
                      ? "ring-2 ring-offset-2 ring-offset-background scale-110" 
                      : "hover:bg-muted/50"
                  }`}
                  style={{
                    backgroundColor: activeIndex === index ? `${product.color}20` : 'transparent',
                    // @ts-expect-error - CSS custom property for ring color
                    '--tw-ring-color': activeIndex === index ? product.color : 'transparent'
                  }}
                  title={product.name}
                >
                  <ProductLogo productId={product.id} className="w-5 h-5" alt={`${product.name} logo`} />
                </button>
              );
            })}
          </div>

          <button 
            onClick={() => goToProduct((activeIndex + 1) % products.length)}
            className="p-2.5 rounded-full bg-muted/50 hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Live Preview */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <ProductLivePreview 
            product={products[activeIndex]} 
            isActive={isVisible}
          />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 text-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/30 hover:bg-muted/50 transition-colors text-sm"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Pause" : "Play"}
          </button>
          <div className="text-sm text-muted-foreground">
            Viewing <span className="text-foreground font-medium">{products[activeIndex].name}</span> {activeIndex + 1}/{products.length}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10 sm:mt-12 px-2">
          {products[activeIndex].external ? (
            <a
              href={products[activeIndex].href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: products[activeIndex].color,
                color: "white"
              }}
            >
              Explore {products[activeIndex].name}
            </a>
          ) : (
            <Link
              to={products[activeIndex].href}
              className="px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: products[activeIndex].color,
                color: "white"
              }}
            >
              Explore {products[activeIndex].name}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnimatedProductShowcase;
