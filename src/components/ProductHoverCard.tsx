import { useState } from "react";
import { useTheme } from "next-themes";
import { 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Activity, 
  Cpu, 
  Database,
  Target,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface ProductHoverCardProps {
  productId: string;
  productName: string;
  gradientFrom: string;
  gradientTo: string;
  children: React.ReactNode;
}

// Enhanced product data with what/why sections
const productGraphData: Record<string, {
  stats: Array<{ label: string; value: string; icon: React.ElementType; trend: number }>;
  barData: number[];
  lineData: number[];
  description: string;
  what: string;
  why: string;
  keyFeatures: string[];
}> = {
  cognix: {
    what: "AI-native backend infrastructure that powers intelligent, scalable applications without server management.",
    why: "Reduce backend complexity by 80% while gaining enterprise-grade AI capabilities out of the box.",
    stats: [
      { label: "API Latency", value: "<50ms", icon: Zap, trend: 15 },
      { label: "Uptime", value: "99.99%", icon: Shield, trend: 2 },
      { label: "Requests/sec", value: "10K+", icon: Activity, trend: 28 },
    ],
    barData: [45, 72, 58, 90, 65, 85, 78],
    lineData: [20, 35, 45, 40, 60, 75, 85, 90],
    description: "AI-native infrastructure powering intelligent backends",
    keyFeatures: ["Auto-scaling", "Real-time ML", "Global CDN"]
  },
  qualyx: {
    what: "Autonomous QA platform that validates software with AI-driven precision and zero false positives.",
    why: "Ship 10x faster with complete confidence - our AI catches bugs before your users do.",
    stats: [
      { label: "Test Coverage", value: "100%", icon: BarChart3, trend: 12 },
      { label: "False Positives", value: "0%", icon: Shield, trend: -100 },
      { label: "Bug Detection", value: "98.5%", icon: Cpu, trend: 8 },
    ],
    barData: [95, 98, 92, 100, 97, 99, 100],
    lineData: [60, 70, 75, 80, 88, 92, 96, 100],
    description: "Autonomous testing with zero false positives",
    keyFeatures: ["Self-healing tests", "Visual regression", "API validation"]
  },
  traceflow: {
    what: "Digital cognition platform that transforms user behavior data into actionable intelligence.",
    why: "Understand your users like never before - see exactly what they experience in real-time.",
    stats: [
      { label: "Sessions/Day", value: "1M+", icon: Users, trend: 35 },
      { label: "Insights Speed", value: "<1s", icon: Zap, trend: 20 },
      { label: "Data Points", value: "50B+", icon: Database, trend: 45 },
    ],
    barData: [30, 55, 45, 70, 85, 75, 95],
    lineData: [15, 25, 40, 55, 65, 80, 90, 95],
    description: "Real-time digital experience intelligence",
    keyFeatures: ["Session replay", "Heatmaps", "AI insights"]
  },
  opzenix: {
    what: "Self-healing MLOps platform that automates the entire ML lifecycle from development to production.",
    why: "Deploy models in minutes, not weeks - with automatic monitoring, scaling, and recovery.",
    stats: [
      { label: "Auto-Recovery", value: "99.8%", icon: Activity, trend: 5 },
      { label: "Model Drift", value: "<0.1%", icon: TrendingUp, trend: -15 },
      { label: "Deploy Time", value: "<5min", icon: Zap, trend: 40 },
    ],
    barData: [88, 92, 85, 95, 90, 98, 96],
    lineData: [50, 60, 55, 70, 75, 85, 92, 98],
    description: "Self-healing MLOps with autonomous agents",
    keyFeatures: ["Auto-remediation", "Drift detection", "CI/CD native"]
  },
  proxinex: {
    what: "AI Intelligence Control Plane that routes each query to the right model with transparent outputs, citation-backed confidence, and AEON orchestration.",
    why: "Eliminate black-box AI risk with governed routing, verifiable answers, cost-efficient model selection, and embedded AEON autonomous intelligence.",
    stats: [
      { label: "Cost Saved", value: "63%", icon: TrendingUp, trend: 12 },
      { label: "Verified Ans.", value: "94%", icon: Shield, trend: 7 },
      { label: "Route Accuracy", value: "96%", icon: Target, trend: 9 },
    ],
    barData: [48, 56, 63, 70, 78, 86, 94],
    lineData: [35, 42, 50, 58, 66, 74, 84, 94],
    description: "Model routing with verification and confidence scoring",
    keyFeatures: ["AEON inside", "Citation checks", "Cost routing"]
  },
  chronyx: {
    what: "Autonomous time-intelligence platform for continuous observability, trend memory, and temporal reasoning across systems.",
    why: "Track change over time with always-on intelligence so your teams can act faster with context-rich signals.",
    stats: [
      { label: "Signals/day", value: "5M+", icon: Activity, trend: 18 },
      { label: "Alert Precision", value: "96%", icon: Target, trend: 11 },
      { label: "Response Time", value: "<2s", icon: Zap, trend: 22 },
    ],
    barData: [34, 44, 52, 61, 73, 84, 93],
    lineData: [22, 30, 39, 49, 61, 72, 84, 95],
    description: "Temporal intelligence for continuous autonomous operations",
    keyFeatures: ["Time memory", "Signal ranking", "Predictive alerts"]
  },
};

// Mini animated bar chart - more compact
const MiniBarChart = ({ data, color }: { data: number[]; color: string }) => {
  return (
    <div className="flex items-end gap-0.5 h-8">
      {data.map((value, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm transition-all duration-500"
          style={{
            height: `${value}%`,
            background: `linear-gradient(180deg, ${color} 0%, ${color}80 100%)`,
            animationDelay: `${i * 100}ms`,
          }}
        />
      ))}
    </div>
  );
};

// Mini animated line chart - more compact
const MiniLineChart = ({ data, color }: { data: number[]; color: string }) => {
  const width = 90;
  const height = 28;
  const points = data.map((value, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - (value / 100) * height,
  }));

  const pathD = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = points[i - 1];
    const cp1x = prev.x + (point.x - prev.x) / 3;
    const cp2x = prev.x + (2 * (point.x - prev.x)) / 3;
    return `${acc} C ${cp1x} ${prev.y}, ${cp2x} ${point.y}, ${point.x} ${point.y}`;
  }, "");

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id={`gradient-${color.replace(/[^a-z0-9]/gi, '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`${pathD} L ${width} ${height} L 0 ${height} Z`}
        fill={`url(#gradient-${color.replace(/[^a-z0-9]/gi, '')})`}
      />
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="2"
        className="animate-draw-line"
      />
    </svg>
  );
};

const ProductHoverCard = ({
  productId,
  productName,
  gradientFrom,
  gradientTo,
  children,
}: ProductHoverCardProps) => {
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const data = productGraphData[productId] || productGraphData.cognix;

  return (
    <HoverCard openDelay={200} closeDelay={100} open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger asChild>
        <div className="cursor-pointer">{children}</div>
      </HoverCardTrigger>
      <HoverCardContent
        side="bottom"
        align="center"
        sideOffset={8}
        className={`w-[280px] sm:w-[320px] p-0 overflow-hidden rounded-xl backdrop-blur-xl max-h-[70vh] overflow-y-auto ${
          resolvedTheme === 'dark'
            ? 'bg-card/95 border border-white/20 shadow-xl shadow-black/20'
            : 'bg-card/98 border border-foreground/20 shadow-xl shadow-black/10'
        }`}
      >
        {/* Compact Header */}
        <div
          className="p-2.5"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}25, ${gradientTo}15)`,
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md"
              style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
            >
              <span className="text-white font-bold text-sm">{productName.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-display font-bold text-foreground text-sm leading-tight">{productName}</h4>
              <p className="text-[10px] text-muted-foreground">by OriginX Labs</p>
            </div>
          </div>
        </div>

        {/* What & Why Combined - More Compact */}
        <div className="px-2.5 py-2 border-t border-border/20 space-y-1.5">
          <div className="flex items-start gap-1.5">
            <Target className="w-3 h-3 text-primary mt-0.5 shrink-0" />
            <p className="text-[10px] text-muted-foreground leading-snug">{data.what}</p>
          </div>
          <div className="flex items-start gap-1.5">
            <Lightbulb className="w-3 h-3 text-accent mt-0.5 shrink-0" />
            <p className="text-[10px] text-muted-foreground leading-snug">{data.why}</p>
          </div>
        </div>

        {/* Key Features Pills - Compact */}
        <div className="px-2.5 py-1.5 border-t border-border/20">
          <div className="flex flex-wrap gap-1">
            {data.keyFeatures.map((feature, i) => (
              <span 
                key={i}
                className="px-1.5 py-0.5 text-[9px] font-medium rounded-full"
                style={{ 
                  backgroundColor: `${gradientFrom}15`,
                  color: gradientFrom
                }}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Row - Compact */}
        <div className="px-2.5 py-2 border-t border-border/20">
          <div className="grid grid-cols-3 gap-1">
            {data.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-3 h-3 mx-auto mb-0.5" style={{ color: gradientFrom }} />
                <p className="text-xs font-bold text-foreground leading-tight">{stat.value}</p>
                <p className="text-[8px] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Charts Dashboard - Compact */}
        <div className="px-2.5 py-2 border-t border-border/20">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-1.5 font-medium">Dashboard</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-1.5 rounded-md bg-muted/30">
              <p className="text-[8px] text-muted-foreground mb-0.5">Performance</p>
              <MiniBarChart data={data.barData} color={gradientFrom} />
            </div>
            <div className="p-1.5 rounded-md bg-muted/30">
              <p className="text-[8px] text-muted-foreground mb-0.5">Growth</p>
              <MiniLineChart data={data.lineData} color={gradientFrom} />
            </div>
          </div>
        </div>

        {/* Footer CTA - Compact */}
        <div
          className="px-2.5 py-2 flex items-center justify-between"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}10, ${gradientTo}05)`,
          }}
        >
          <p className="text-[9px] text-muted-foreground">Click to explore</p>
          <ArrowRight className="w-3 h-3 text-muted-foreground" />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ProductHoverCard;
