import { useState, useEffect, useRef } from "react";
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Database,
  BarChart3,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  Play,
  Pause
} from "lucide-react";

interface InteractiveDemoProps {
  productName: string;
  gradientFrom: string;
  gradientTo: string;
}

// Animated counter hook
const useAnimatedCounter = (target: number, duration: number = 2000, isActive: boolean = true) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isActive) return;
    
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target, duration, isActive]);
  
  return count;
};

// Mini Line Chart Component
const MiniLineChart = ({ data, color, height = 60 }: { data: number[], color: string, height?: number }) => {
  const [animatedData, setAnimatedData] = useState(data.map(() => 0));
  
  useEffect(() => {
    data.forEach((value, i) => {
      setTimeout(() => {
        setAnimatedData(prev => {
          const newData = [...prev];
          newData[i] = value;
          return newData;
        });
      }, i * 100);
    });
  }, [data]);
  
  const maxVal = Math.max(...data);
  const minVal = Math.min(...data);
  const range = maxVal - minVal || 1;
  
  const width = 200;
  const padding = 5;
  
  const points = animatedData.map((val, i) => ({
    x: padding + (i / (data.length - 1)) * (width - padding * 2),
    y: height - padding - ((val - minVal) / range) * (height - padding * 2)
  }));
  
  const pathD = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    return `${acc} L ${point.x} ${point.y}`;
  }, '');
  
  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id={`gradient-${color.replace(/[^a-z0-9]/gi, '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`${pathD} L ${points[points.length - 1]?.x || 0} ${height - padding} L ${padding} ${height - padding} Z`}
        fill={`url(#gradient-${color.replace(/[^a-z0-9]/gi, '')})`}
      />
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all duration-300"
      />
      {points.length > 0 && (
        <circle
          cx={points[points.length - 1]?.x}
          cy={points[points.length - 1]?.y}
          r="4"
          fill={color}
          className="animate-pulse"
        />
      )}
    </svg>
  );
};

// Animated Bar Chart
const AnimatedBarChart = ({ data, color }: { data: number[], color: string }) => {
  const [animatedData, setAnimatedData] = useState(data.map(() => 0));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data);
    }, 300);
    return () => clearTimeout(timer);
  }, [data]);
  
  return (
    <div className="flex items-end gap-1 h-16">
      {animatedData.map((value, i) => (
        <div
          key={i}
          className="flex-1 rounded-t transition-all duration-700 ease-out"
          style={{
            height: `${value}%`,
            backgroundColor: color,
            opacity: 0.5 + (value / 200),
            transitionDelay: `${i * 50}ms`
          }}
        />
      ))}
    </div>
  );
};

// Circular Progress
const CircularProgress = ({ value, color, label }: { value: number, color: string, label: string }) => {
  const [progress, setProgress] = useState(0);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width="80" height="80" className="-rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-muted/20"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-foreground">{Math.round(progress)}%</span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground mt-1">{label}</span>
    </div>
  );
};

const InteractiveDemo = ({ productName, gradientFrom, gradientTo }: InteractiveDemoProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [metrics, setMetrics] = useState({
    requests: 2456789,
    latency: 23,
    uptime: 99.99,
    users: 12458
  });
  const [chartData, setChartData] = useState([65, 72, 80, 75, 85, 90, 88, 95, 92, 98, 94, 100]);
  const [barData, setBarData] = useState([60, 75, 45, 80, 55, 90, 70, 85]);
  
  // Simulate real-time data updates
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setMetrics(prev => ({
        requests: prev.requests + Math.floor(Math.random() * 1000),
        latency: Math.max(15, Math.min(35, prev.latency + (Math.random() - 0.5) * 5)),
        uptime: Math.max(99.9, Math.min(100, prev.uptime + (Math.random() - 0.3) * 0.01)),
        users: prev.users + Math.floor(Math.random() * 10)
      }));
      
      setChartData(prev => {
        const newData = [...prev.slice(1), Math.floor(Math.random() * 30) + 70];
        return newData;
      });
      
      setBarData(prev => prev.map(v => Math.max(30, Math.min(100, v + (Math.random() - 0.5) * 20))));
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const tabs = ["Overview", "Analytics", "Performance", "Logs"];
  
  const statsCards = [
    { label: "Total Requests", value: metrics.requests.toLocaleString(), change: "+12.5%", isPositive: true, icon: Activity },
    { label: "Avg Latency", value: `${metrics.latency.toFixed(1)}ms`, change: "-8.3%", isPositive: true, icon: Zap },
    { label: "Uptime", value: `${metrics.uptime.toFixed(2)}%`, change: "+0.1%", isPositive: true, icon: Shield },
    { label: "Active Users", value: metrics.users.toLocaleString(), change: "+24.1%", isPositive: true, icon: Users },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(ellipse at center, ${gradientFrom} 0%, transparent 70%)`,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase text-primary border border-primary/30 rounded-full bg-primary/5">
            <Play className="w-3 h-3" />
            Interactive Demo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            See {productName} in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the real-time dashboard with live data simulation. This is what your team will see every day.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-card/80 dark:bg-card/50 backdrop-blur-xl rounded-2xl border border-border shadow-2xl overflow-hidden">
            {/* Dashboard Header */}
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
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors text-sm"
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  {isPlaying ? "Pause" : "Play"}
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 px-6 pt-4 border-b border-border/30">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 border-b-2 ${
                    activeTab === i 
                      ? "text-primary border-primary" 
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {statsCards.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-muted/30 border border-border/30 transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="w-4 h-4 text-muted-foreground" />
                      <span className={`text-xs flex items-center gap-1 ${stat.isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {stat.isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* Line Chart */}
                <div className="md:col-span-2 p-4 rounded-xl bg-muted/30 border border-border/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-foreground">Performance Trend</h4>
                    <span className="text-xs text-muted-foreground">Last 12 periods</span>
                  </div>
                  <MiniLineChart data={chartData} color={gradientFrom} height={100} />
                </div>

                {/* Circular Progress */}
                <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                  <h4 className="text-sm font-medium text-foreground mb-4">System Health</h4>
                  <div className="flex justify-around">
                    <CircularProgress value={98} color={gradientFrom} label="API" />
                    <CircularProgress value={95} color={gradientTo} label="DB" />
                  </div>
                </div>
              </div>

              {/* Bar Chart & Activity Feed */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Bar Chart */}
                <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                  <h4 className="text-sm font-medium text-foreground mb-4">Request Distribution</h4>
                  <AnimatedBarChart data={barData} color={gradientFrom} />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                    <span>Today</span>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="p-4 rounded-xl bg-muted/30 border border-border/30">
                  <h4 className="text-sm font-medium text-foreground mb-4">Recent Activity</h4>
                  <div className="space-y-3 max-h-[120px] overflow-y-auto">
                    {[
                      { status: "success", message: "API endpoint deployed", time: "2s ago" },
                      { status: "success", message: "Database backup completed", time: "1m ago" },
                      { status: "warning", message: "High latency detected", time: "3m ago" },
                      { status: "success", message: "Auto-scaling triggered", time: "5m ago" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
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
