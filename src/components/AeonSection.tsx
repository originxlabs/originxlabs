import { Link } from "react-router-dom";
import { Brain, Users, RefreshCw, Shield, Heart, Building, Sparkles, Eye, Infinity, TrendingUp, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import aeonIcon from "@/assets/aeon-icon.png";

// Animated circular progress for AEON
const AnimatedCircularProgress = ({ value, color, isActive, label }: { value: number, color: string, isActive: boolean, label: string }) => {
  const [progress, setProgress] = useState(0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setProgress(value), 300);
      return () => clearTimeout(timer);
    }
  }, [isActive, value]);
  
  return (
    <div className="flex flex-col items-center">
      <svg width="100" height="100" className="-rotate-90">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-muted/30"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-foreground">{Math.round(progress)}%</span>
      </div>
      <span className="text-xs text-muted-foreground mt-2">{label}</span>
    </div>
  );
};

const capabilities = [
  { title: "Multi-Agent Systems", description: "Autonomous agents that communicate and collaborate", icon: Users, stat: 98 },
  { title: "Self-Healing", description: "Systems that detect, diagnose, and recover autonomously", icon: RefreshCw, stat: 99 },
  { title: "Human-in-the-Loop", description: "Governance models that keep humans in control", icon: Eye, stat: 100 },
  { title: "Ethics-First", description: "Compliant, auditable, and responsible by design", icon: Shield, stat: 97 },
  { title: "Emotion-Aware", description: "Context understanding at a deeper level", icon: Heart, stat: 94 },
  { title: "Enterprise-Ready", description: "Designed for autonomy at scale", icon: Building, stat: 99 },
];

const AeonSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} id="aeon" className="py-32 relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/15 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-primary border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm">
              <Brain className="w-3.5 h-3.5" />
              Flagship Product
            </span>
          </div>
          
          <h2 className={`font-display text-5xl md:text-7xl font-bold text-foreground mb-4 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            AEON
          </h2>
          <p className={`text-xl md:text-2xl text-muted-foreground mb-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Autonomous Enterprise Intelligence
          </p>
          
          <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The pinnacle of autonomous systems. AEON represents multi-agent architectures that don't just execute—they reason, collaborate, and evolve.
            </p>
            
            <div className="relative p-8 rounded-2xl bg-card/30 dark:bg-card/20 border border-primary/20 backdrop-blur-xl overflow-hidden group hover:border-primary/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
              <p className="text-foreground text-xl font-display font-medium italic relative z-10">
                "Supreme intelligence, governed by ethics."
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className={`group p-6 rounded-xl bg-card/30 dark:bg-card/20 border border-border/30 backdrop-blur-sm text-left hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <cap.icon className="w-6 h-6 text-primary" />
                  </div>
                  {/* Animated stat badge */}
                  <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-sm font-bold text-primary">
                      {isVisible ? cap.stat : 0}%
                    </span>
                  </div>
                </div>
                <h4 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">{cap.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{cap.description}</p>
                {/* Mini progress bar */}
                <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${cap.stat}%` : '0%',
                      transitionDelay: `${500 + index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 transition-all duration-700 delay-[1000ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Link
              to="/products/aeon"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30"
            >
              <Sparkles className="w-5 h-5" />
              Explore AEON
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AeonSection;
