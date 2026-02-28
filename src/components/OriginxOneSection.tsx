import {
  Cable,
  Network,
  ShieldCheck,
  Workflow,
  Zap,
  Coins,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ORIGINX_ONE_URL = "https://www.originxcloud.com/";
const MARKETPLACE_URL = "https://www.originxcloud.com/marketplace";
const ONEAUTH_URL = "https://www.originxcloud.com/oneauth";

const features = [
  { name: "Unified API Key", description: "One key for multi-provider integration", icon: Cable, metric: "1 Key" },
  { name: "Provider Routing", description: "Dynamic best-provider selection", icon: Network, metric: "50+ Providers" },
  { name: "OneAuth Gateway", description: "Identity and access control layer", icon: ShieldCheck, metric: "Auth Native" },
  { name: "API Marketplace", description: "Category-first API ecosystem", icon: Workflow, metric: "700+ APIs" },
  { name: "Low Latency", description: "Fast request orchestration", icon: Zap, metric: "<50ms" },
  { name: "Transparent Billing", description: "Metered usage and spend clarity", icon: Coins, metric: "Pay as You Go" },
];

const OriginxOneSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} id="originx-one" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-0 w-[460px] h-[460px] bg-primary/10 rounded-full blur-[90px] animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-0 w-[420px] h-[420px] bg-accent/10 rounded-full blur-[84px] animate-pulse-slow" style={{ animationDelay: "1.8s" }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <p className={`text-muted-foreground text-sm tracking-widest uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              API Infrastructure Product
            </p>
            <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              ORIGINX ONE
            </h2>
            <p className={`text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 font-light transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              One API. Every Capability.
            </p>
            <p className={`text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Build with AI, payments, messaging, web intelligence, and identity systems through one unified integration layer.
            </p>

            <div className={`relative p-6 rounded-2xl bg-card/30 dark:bg-card/20 border border-border/30 backdrop-blur-sm mb-8 group hover:border-primary/30 transition-all duration-500 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "400ms" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-primary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 relative z-10">
                <Sparkles className="w-5 h-5 text-primary" />
                <p className="text-foreground font-medium text-lg">
                  "One endpoint, infinite integrations."
                </p>
              </div>
            </div>

            <div className={`flex flex-wrap gap-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "520ms" }}>
              <a
                href={ORIGINX_ONE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
              >
                Visit OriginX One
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-primary/40 rounded-xl text-foreground font-medium hover:bg-primary/10 transition-all duration-300"
              >
                Marketplace
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={ONEAUTH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 border border-primary/40 rounded-xl text-foreground font-medium hover:bg-primary/10 transition-all duration-300"
              >
                OneAuth
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`group p-5 rounded-xl bg-card/30 dark:bg-card/20 border border-border/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {feature.name}
                    </h4>
                  </div>
                  <span className="text-xs font-medium text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
                    {feature.metric}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm pl-11">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginxOneSection;
