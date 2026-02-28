import { ArrowRight, BookOpen, BrainCircuit, ExternalLink, LayoutPanelTop, Rss, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import stackcraftLogo from "@/assets/stackcraft-logo.svg";
import { STACKCRAFT_SITE } from "@/config/stackcraft";

const StackcraftSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} id="stackcraft" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute -top-16 -right-24 w-[360px] h-[360px] rounded-full bg-primary/10 blur-[90px]" />
      <div className="absolute -bottom-24 -left-20 w-[320px] h-[320px] rounded-full bg-accent/12 blur-[90px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] text-muted-foreground mb-4">Learning + CMS Division</p>
            <div className="flex items-center gap-3 sm:gap-4 mb-5">
              <img src={stackcraftLogo} alt="StackCraft logo" className="h-11 w-auto rounded-md" />
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">StackCraft</h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-7">
              Product-grade engineering learning platform with structured playbooks, publishing workflows, CMS-ready content rails,
              and next-generation agentic AI blog workflows from OriginX Labs.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/stackcraft"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
              >
                Explore StackCraft Page
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={STACKCRAFT_SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/10 transition-colors text-foreground"
              >
                Visit StackCraft
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div
            className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { icon: BookOpen, title: "Engineering Playbooks", desc: "Production-focused technical tracks.", stat: "Live" },
              { icon: GraduationCap, title: "Learning Division", desc: "Role-based learning pathways.", stat: "Structured" },
              { icon: LayoutPanelTop, title: "CMS System", desc: "Editorial and publishing workflows.", stat: "Platform" },
              { icon: BrainCircuit, title: "Agentic AI Blog", desc: "Next-gen assisted authoring and insight rails.", stat: "Next" },
              { icon: Rss, title: "Live Feed", desc: "Fresh playbooks via RSS and blog updates.", stat: "Daily" },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-5 rounded-2xl border border-border/40 bg-card/35 dark:bg-card/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{item.stat}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackcraftSection;
