import { useEffect, useMemo, useState, type ElementType } from "react";
import {
  Activity,
  AlertCircle,
  ArrowDown,
  ArrowUp,
  BarChart3,
  CheckCircle,
  Database,
  Pause,
  Play,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

interface InteractiveDemoProps {
  productName: string;
  productId?: string;
  gradientFrom: string;
  gradientTo: string;
}

interface MetricCard {
  key: "requests" | "latency" | "uptime" | "users";
  label: string;
  change: string;
  isPositive: boolean;
  icon: ElementType;
  format: (value: number) => string;
}

interface DemoProfile {
  tabs: string[];
  intro: string;
  chartTitle: string;
  distTitle: string;
  healthLabels: [string, string];
  initialMetrics: { requests: number; latency: number; uptime: number; users: number };
  metricCards: MetricCard[];
  initialChartData: number[];
  initialBarData: number[];
  activity: Array<{ status: "success" | "warning"; message: string; time: string }>;
}

const demoProfiles: Record<string, DemoProfile> = {
  proxinex: {
    tabs: ["Routing", "Verification", "Performance", "Logs"],
    intro: "Live routing and verification dashboard for governed AI responses.",
    chartTitle: "Routing Confidence Trend",
    distTitle: "Model Route Distribution",
    healthLabels: ["Routing", "Validation"],
    initialMetrics: { requests: 1543221, latency: 42, uptime: 99.97, users: 4862 },
    metricCards: [
      { key: "requests", label: "Routed Queries", change: "+14.2%", isPositive: true, icon: Activity, format: (v) => Math.round(v).toLocaleString() },
      { key: "latency", label: "Route Latency", change: "-6.1%", isPositive: true, icon: Zap, format: (v) => `${v.toFixed(1)}ms` },
      { key: "uptime", label: "Control Plane Uptime", change: "+0.2%", isPositive: true, icon: Shield, format: (v) => `${v.toFixed(2)}%` },
      { key: "users", label: "Active Integrations", change: "+9.4%", isPositive: true, icon: Users, format: (v) => Math.round(v).toLocaleString() },
    ],
    initialChartData: [62, 66, 69, 71, 74, 78, 81, 84, 88, 90, 93, 96],
    initialBarData: [58, 72, 48, 85, 66, 91, 74, 96],
    activity: [
      { status: "success", message: "High-confidence route selected", time: "4s ago" },
      { status: "success", message: "Citation validation completed", time: "47s ago" },
      { status: "warning", message: "Fallback model engaged", time: "2m ago" },
      { status: "success", message: "AEON workflow synchronized", time: "4m ago" },
    ],
  },
  traceflow: {
    tabs: ["Journey", "Signals", "Heatmaps", "Events"],
    intro: "Experience intelligence telemetry stream for digital behavior analysis.",
    chartTitle: "Signal Quality Trend",
    distTitle: "Journey Segment Distribution",
    healthLabels: ["Signals", "Coverage"],
    initialMetrics: { requests: 932114, latency: 18, uptime: 99.95, users: 7821 },
    metricCards: [
      { key: "requests", label: "Tracked Sessions", change: "+11.8%", isPositive: true, icon: Activity, format: (v) => Math.round(v).toLocaleString() },
      { key: "latency", label: "Ingest Latency", change: "-7.3%", isPositive: true, icon: Zap, format: (v) => `${v.toFixed(1)}ms` },
      { key: "uptime", label: "Pipeline Uptime", change: "+0.1%", isPositive: true, icon: Shield, format: (v) => `${v.toFixed(2)}%` },
      { key: "users", label: "Observed Journeys", change: "+16.7%", isPositive: true, icon: Users, format: (v) => Math.round(v).toLocaleString() },
    ],
    initialChartData: [52, 58, 63, 66, 70, 72, 75, 79, 82, 85, 89, 92],
    initialBarData: [64, 59, 77, 68, 85, 73, 91, 79],
    activity: [
      { status: "success", message: "Journey anomaly clustered", time: "6s ago" },
      { status: "success", message: "UX signal map refreshed", time: "54s ago" },
      { status: "warning", message: "Drop-off spike detected", time: "3m ago" },
      { status: "success", message: "Funnel optimization rule updated", time: "7m ago" },
    ],
  },
  chronyx: {
    tabs: ["Timeline", "Prediction", "Signals", "Audit"],
    intro: "Temporal intelligence dashboard for always-on continuity and forecasting.",
    chartTitle: "Timeline Signal Accuracy",
    distTitle: "Temporal Event Distribution",
    healthLabels: ["Timeline", "Prediction"],
    initialMetrics: { requests: 2187640, latency: 26, uptime: 99.99, users: 6409 },
    metricCards: [
      { key: "requests", label: "Signals Processed", change: "+18.1%", isPositive: true, icon: Activity, format: (v) => Math.round(v).toLocaleString() },
      { key: "latency", label: "Decision Latency", change: "-5.5%", isPositive: true, icon: Zap, format: (v) => `${v.toFixed(1)}ms` },
      { key: "uptime", label: "Timeline Uptime", change: "+0.1%", isPositive: true, icon: Shield, format: (v) => `${v.toFixed(2)}%` },
      { key: "users", label: "Active Pipelines", change: "+10.9%", isPositive: true, icon: Users, format: (v) => Math.round(v).toLocaleString() },
    ],
    initialChartData: [56, 60, 64, 68, 71, 75, 80, 84, 88, 91, 94, 97],
    initialBarData: [51, 65, 60, 79, 74, 88, 82, 95],
    activity: [
      { status: "success", message: "Predictive alert issued", time: "9s ago" },
      { status: "success", message: "Timeline merge completed", time: "1m ago" },
      { status: "warning", message: "Signal drift noticed", time: "5m ago" },
      { status: "success", message: "Continuity checkpoint saved", time: "8m ago" },
    ],
  },
  huminex: {
    tabs: ["Workforce", "Payroll", "Hiring", "Compliance"],
    intro: "Unified workforce operating dashboard for hire-to-retire process automation.",
    chartTitle: "Workforce Process Health",
    distTitle: "Module Activity Distribution",
    healthLabels: ["Ops", "Compliance"],
    initialMetrics: { requests: 864507, latency: 31, uptime: 99.96, users: 9284 },
    metricCards: [
      { key: "requests", label: "Workflow Actions", change: "+12.9%", isPositive: true, icon: Activity, format: (v) => Math.round(v).toLocaleString() },
      { key: "latency", label: "Payroll Engine Latency", change: "-4.4%", isPositive: true, icon: Zap, format: (v) => `${v.toFixed(1)}ms` },
      { key: "uptime", label: "Platform Uptime", change: "+0.2%", isPositive: true, icon: Shield, format: (v) => `${v.toFixed(2)}%` },
      { key: "users", label: "Managed Employees", change: "+21.5%", isPositive: true, icon: Users, format: (v) => Math.round(v).toLocaleString() },
    ],
    initialChartData: [48, 54, 59, 63, 67, 71, 76, 81, 85, 89, 93, 96],
    initialBarData: [62, 58, 74, 69, 83, 77, 91, 86],
    activity: [
      { status: "success", message: "Payroll cycle approved", time: "7s ago" },
      { status: "success", message: "Leave policy sync completed", time: "41s ago" },
      { status: "warning", message: "Document verification pending", time: "3m ago" },
      { status: "success", message: "Compliance report generated", time: "6m ago" },
    ],
  },
  qualyx: {
    tabs: ["Testing", "Coverage", "Risk", "Reports"],
    intro: "Autonomous QA operations dashboard with validation, risk checks, and release confidence.",
    chartTitle: "Quality Assurance Trend",
    distTitle: "Test Suite Distribution",
    healthLabels: ["Coverage", "Reliability"],
    initialMetrics: { requests: 1209466, latency: 22, uptime: 99.98, users: 7032 },
    metricCards: [
      { key: "requests", label: "Test Executions", change: "+17.6%", isPositive: true, icon: Activity, format: (v) => Math.round(v).toLocaleString() },
      { key: "latency", label: "Validation Latency", change: "-9.2%", isPositive: true, icon: Zap, format: (v) => `${v.toFixed(1)}ms` },
      { key: "uptime", label: "QA Engine Uptime", change: "+0.1%", isPositive: true, icon: Shield, format: (v) => `${v.toFixed(2)}%` },
      { key: "users", label: "Active Repos", change: "+14.3%", isPositive: true, icon: Users, format: (v) => Math.round(v).toLocaleString() },
    ],
    initialChartData: [60, 64, 67, 70, 73, 77, 80, 84, 87, 91, 94, 98],
    initialBarData: [55, 68, 73, 64, 82, 78, 90, 94],
    activity: [
      { status: "success", message: "Regression pack completed", time: "5s ago" },
      { status: "success", message: "Security scan passed", time: "50s ago" },
      { status: "warning", message: "Flaky test cluster detected", time: "4m ago" },
      { status: "success", message: "Release quality gate approved", time: "9m ago" },
    ],
  },
  opzenix: {
    tabs: ["Pipeline", "Serving", "Drift", "Governance"],
    intro: "Autonomous MLOps dashboard for deployment health and model operations.",
    chartTitle: "Model Ops Stability",
    distTitle: "Pipeline Load Distribution",
    healthLabels: ["Serving", "Drift"],
    initialMetrics: { requests: 1652847, latency: 29, uptime: 99.97, users: 5698 },
    metricCards: [
      { key: "requests", label: "Pipeline Jobs", change: "+13.8%", isPositive: true, icon: Activity, format: (v) => Math.round(v).toLocaleString() },
      { key: "latency", label: "Inference Latency", change: "-6.5%", isPositive: true, icon: Zap, format: (v) => `${v.toFixed(1)}ms` },
      { key: "uptime", label: "Serving Uptime", change: "+0.2%", isPositive: true, icon: Shield, format: (v) => `${v.toFixed(2)}%` },
      { key: "users", label: "Active Models", change: "+8.9%", isPositive: true, icon: Database, format: (v) => Math.round(v).toLocaleString() },
    ],
    initialChartData: [58, 62, 66, 69, 72, 76, 79, 83, 87, 90, 93, 95],
    initialBarData: [61, 57, 70, 75, 69, 84, 88, 92],
    activity: [
      { status: "success", message: "Canary deployment stabilized", time: "3s ago" },
      { status: "success", message: "Drift monitor recalibrated", time: "44s ago" },
      { status: "warning", message: "Resource spike in region-2", time: "2m ago" },
      { status: "success", message: "Auto-remediation completed", time: "5m ago" },
    ],
  },
  cognix: {
    tabs: ["Backend", "Data", "Scale", "Events"],
    intro: "AI-native backend dashboard for infrastructure throughput and resilience.",
    chartTitle: "Backend Throughput Trend",
    distTitle: "Service Traffic Distribution",
    healthLabels: ["API", "Data"],
    initialMetrics: { requests: 2846502, latency: 24, uptime: 99.99, users: 11876 },
    metricCards: [
      { key: "requests", label: "API Requests", change: "+15.4%", isPositive: true, icon: Activity, format: (v) => Math.round(v).toLocaleString() },
      { key: "latency", label: "Gateway Latency", change: "-7.1%", isPositive: true, icon: Zap, format: (v) => `${v.toFixed(1)}ms` },
      { key: "uptime", label: "Infra Uptime", change: "+0.1%", isPositive: true, icon: Shield, format: (v) => `${v.toFixed(2)}%` },
      { key: "users", label: "Connected Apps", change: "+12.2%", isPositive: true, icon: Users, format: (v) => Math.round(v).toLocaleString() },
    ],
    initialChartData: [63, 67, 70, 73, 76, 80, 83, 87, 90, 93, 96, 99],
    initialBarData: [67, 59, 74, 81, 72, 88, 84, 97],
    activity: [
      { status: "success", message: "Auto-scaling event executed", time: "6s ago" },
      { status: "success", message: "Vector index refreshed", time: "1m ago" },
      { status: "warning", message: "Transient cache miss burst", time: "3m ago" },
      { status: "success", message: "Region failover test passed", time: "8m ago" },
    ],
  },
  originxone: {
    tabs: ["Gateway", "Routing", "Marketplace", "OneAuth"],
    intro: "Unified API gateway dashboard with provider routing and OneAuth controls.",
    chartTitle: "Gateway Performance Trend",
    distTitle: "Provider Call Distribution",
    healthLabels: ["Gateway", "Security"],
    initialMetrics: { requests: 3192044, latency: 46, uptime: 99.99, users: 9077 },
    metricCards: [
      { key: "requests", label: "Unified API Calls", change: "+19.6%", isPositive: true, icon: Activity, format: (v) => Math.round(v).toLocaleString() },
      { key: "latency", label: "Gateway Latency", change: "-8.4%", isPositive: true, icon: Zap, format: (v) => `${v.toFixed(1)}ms` },
      { key: "uptime", label: "Gateway Uptime", change: "+0.1%", isPositive: true, icon: Shield, format: (v) => `${v.toFixed(2)}%` },
      { key: "users", label: "Publisher Endpoints", change: "+11.1%", isPositive: true, icon: TrendingUp, format: (v) => Math.round(v).toLocaleString() },
    ],
    initialChartData: [61, 64, 66, 70, 74, 77, 81, 85, 88, 92, 95, 98],
    initialBarData: [65, 71, 62, 78, 85, 74, 90, 96],
    activity: [
      { status: "success", message: "Best provider route selected", time: "4s ago" },
      { status: "success", message: "OneAuth verification succeeded", time: "39s ago" },
      { status: "warning", message: "Provider latency spike normalized", time: "2m ago" },
      { status: "success", message: "Marketplace endpoint synced", time: "6m ago" },
    ],
  },
};

const MiniLineChart = ({ data, color, height = 60 }: { data: number[]; color: string; height?: number }) => {
  const maxVal = Math.max(...data);
  const minVal = Math.min(...data);
  const range = maxVal - minVal || 1;
  const width = 200;
  const padding = 5;

  const points = data.map((val, i) => ({
    x: padding + (i / (data.length - 1)) * (width - padding * 2),
    y: height - padding - ((val - minVal) / range) * (height - padding * 2),
  }));

  const pathD = points.reduce((acc, point, i) => (i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`), "");

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id={`gradient-${color.replace(/[^a-z0-9]/gi, "")}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${pathD} L ${points[points.length - 1]?.x || 0} ${height - padding} L ${padding} ${height - padding} Z`} fill={`url(#gradient-${color.replace(/[^a-z0-9]/gi, "")})`} />
      <path d={pathD} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className="transition-all duration-300" />
      {points.length > 0 && <circle cx={points[points.length - 1]?.x} cy={points[points.length - 1]?.y} r="4" fill={color} className="animate-pulse" />}
    </svg>
  );
};

const AnimatedBarChart = ({ data, color }: { data: number[]; color: string }) => (
  <div className="flex items-end gap-1 h-16">
    {data.map((value, i) => (
      <div
        key={i}
        className="flex-1 rounded-t transition-all duration-700 ease-out"
        style={{
          height: `${value}%`,
          backgroundColor: color,
          opacity: 0.5 + value / 200,
          transitionDelay: `${i * 50}ms`,
        }}
      />
    ))}
  </div>
);

const CircularProgress = ({ value, color, label }: { value: number; color: string; label: string }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width="80" height="80" className="-rotate-90">
          <circle cx="40" cy="40" r={radius} fill="none" stroke="currentColor" strokeWidth="6" className="text-muted/20" />
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (value / 100) * circumference}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-foreground">{Math.round(value)}%</span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  );
};

const InteractiveDemo = ({ productName, productId, gradientFrom, gradientTo }: InteractiveDemoProps) => {
  const slug = (productId || productName).toLowerCase().replace(/\s+/g, "");
  const profile = useMemo(() => demoProfiles[slug] || demoProfiles.cognix, [slug]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [metrics, setMetrics] = useState(profile.initialMetrics);
  const [chartData, setChartData] = useState(profile.initialChartData);
  const [barData, setBarData] = useState(profile.initialBarData);

  useEffect(() => {
    setMetrics(profile.initialMetrics);
    setChartData(profile.initialChartData);
    setBarData(profile.initialBarData);
    setActiveTab(0);
  }, [profile]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setMetrics((prev) => ({
        requests: prev.requests + Math.floor(Math.random() * 1100),
        latency: Math.max(10, Math.min(85, prev.latency + (Math.random() - 0.5) * 3.5)),
        uptime: Math.max(99.7, Math.min(100, prev.uptime + (Math.random() - 0.4) * 0.02)),
        users: prev.users + Math.floor(Math.random() * 12),
      }));

      setChartData((prev) => [...prev.slice(1), Math.floor(Math.random() * 20) + 75]);
      setBarData((prev) => prev.map((v) => Math.max(35, Math.min(100, v + (Math.random() - 0.5) * 16))));
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(ellipse at center, ${gradientFrom} 0%, transparent 70%)` }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase text-primary border border-primary/30 rounded-full bg-primary/5">
            <Play className="w-3 h-3" />
            Interactive Demo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">See {productName} in Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{profile.intro}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card/80 dark:bg-card/50 backdrop-blur-xl rounded-2xl border border-border shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-muted/20">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                </div>
                <span className="text-sm font-medium text-foreground">{productName} Dashboard</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-emerald-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Data
                </div>
                <button onClick={() => setIsPlaying(!isPlaying)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors text-sm">
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1 px-6 pt-4 border-b border-border/30 overflow-x-auto">
              {profile.tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 border-b-2 whitespace-nowrap ${
                    activeTab === i ? "text-primary border-primary" : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {profile.metricCards.map((card) => (
                  <div key={card.label} className="p-4 rounded-xl bg-muted/30 border border-border/30 transition-all duration-300 hover:border-primary/30">
                    <div className="flex items-center justify-between mb-2">
                      <card.icon className="w-4 h-4 text-muted-foreground" />
                      <span className={`text-xs flex items-center gap-1 ${card.isPositive ? "text-emerald-500" : "text-rose-500"}`}>
                        {card.isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                        {card.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-1">{card.format(metrics[card.key])}</p>
                    <p className="text-xs text-muted-foreground">{card.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="md:col-span-2 p-4 rounded-xl bg-muted/30 border border-border/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-foreground">{profile.chartTitle}</h4>
                    <span className="text-xs text-muted-foreground">Last 12 periods</span>
                  </div>
                  <MiniLineChart data={chartData} color={gradientFrom} height={100} />
                </div>

                <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                  <h4 className="text-sm font-medium text-foreground mb-4">System Health</h4>
                  <div className="flex justify-around">
                    <CircularProgress value={Math.min(100, metrics.uptime)} color={gradientFrom} label={profile.healthLabels[0]} />
                    <CircularProgress value={Math.min(100, metrics.uptime - 2)} color={gradientTo} label={profile.healthLabels[1]} />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                  <h4 className="text-sm font-medium text-foreground mb-4">{profile.distTitle}</h4>
                  <AnimatedBarChart data={barData} color={gradientFrom} />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Now"].map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                  <h4 className="text-sm font-medium text-foreground mb-4">Recent Activity</h4>
                  <div className="space-y-3 max-h-[120px] overflow-y-auto">
                    {profile.activity.map((item, i) => (
                      <div key={`${item.message}-${i}`} className="flex items-center gap-3 text-sm">
                        {item.status === "success" ? (
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        )}
                        <span className="text-foreground flex-1">{item.message}</span>
                        <span className="text-xs text-muted-foreground">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
