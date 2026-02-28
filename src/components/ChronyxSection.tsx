import { 
  FileText, 
  BookOpen, 
  Wallet, 
  Lock, 
  Star, 
  Bot, 
  Newspaper, 
  Gift,
  Shield,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CHRONYX_URL = "https://www.getchronyx.com/";
const NEWSTACK_URL = "https://www.newstack.live/";

const features = [
  { name: "Notes & Todos", description: "Seamlessly capture thoughts", icon: FileText, users: "2.4M" },
  { name: "Study Mode", description: "AI-enhanced learning", icon: BookOpen, users: "1.8M" },
  { name: "Finance Tracker", description: "Auto-tracking & goals", icon: Wallet, users: "3.1M" },
  { name: "Personal Diary", description: "End-to-end encrypted", icon: Lock, users: "2.9M" },
  { name: "Astrology", description: "Verified experts", icon: Star, users: "1.2M" },
  { name: "Personal AI", description: "NoteFlowLM integration", icon: Bot, users: "890K" },
  { name: "NEWSTACK.LIVE", description: "Personalized news", icon: Newspaper, users: "1.5M", href: NEWSTACK_URL },
  { name: "Rewards", description: "INR → Bank transfer", icon: Gift, users: "2.2M" },
];

const ChronyxSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} id="chronyx" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div>
            <p className={`text-muted-foreground text-sm tracking-widest uppercase mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Consumer Product
            </p>
            <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              CHRONYX
            </h2>
            <p className={`text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4 font-light transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Life OS
            </p>
            <p className={`text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              A quiet, encrypted personal universe. Your entire life, organized with intelligence and secured with trust.
            </p>
            
            <div className={`relative p-6 rounded-2xl bg-card/30 dark:bg-card/20 border border-border/30 backdrop-blur-sm mb-8 group hover:border-accent/30 transition-all duration-500 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "400ms" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 relative z-10">
                <Shield className="w-5 h-5 text-accent" />
                <p className="text-foreground font-medium text-lg">
                  "Your life. One OS. Fully encrypted."
                </p>
              </div>
            </div>
            
            <a
              href={CHRONYX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "500ms" }}
            >
              <Sparkles className="w-4 h-4" />
              Experience Chronyx
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, index) => {
              const CardWrapper = feature.href ? 'a' : 'div';
              const cardProps = feature.href ? {
                href: feature.href,
                target: "_blank",
                rel: "noopener noreferrer"
              } : {};
              
              return (
                <CardWrapper
                  key={feature.name}
                  {...cardProps}
                  className={`group p-5 rounded-xl bg-card/30 dark:bg-card/20 border border-border/30 backdrop-blur-sm hover:border-accent/30 transition-all duration-500 hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/10 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } ${feature.href ? 'cursor-pointer' : ''}`}
                  style={{ transitionDelay: `${300 + index * 80}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <feature.icon className="w-4 h-4 text-accent" />
                      </div>
                      <h4 className="text-foreground font-medium group-hover:text-accent transition-colors flex items-center gap-2">
                        {feature.name}
                        {feature.href && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </h4>
                    </div>
                    {/* User count badge */}
                    <span className="text-xs font-medium text-accent/80 bg-accent/10 px-2 py-0.5 rounded-full">
                      {feature.users}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm pl-11">
                    {feature.description}
                  </p>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChronyxSection;
