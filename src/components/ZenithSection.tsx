import { ArrowRight, ExternalLink, Building2, Workflow, LayoutPanelTop, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import zenithLogo from "@/assets/zenith-logo.svg";
import zenithPreview from "@/assets/zenith-og-image.png";
import { ZENITH_SITE } from "@/config/zenith";

const ZenithSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} id="zenith" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cyan-500/5 to-background" />
      <div className="absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full bg-cyan-500/10 blur-[90px]" />
      <div className="absolute -bottom-24 -left-24 w-[340px] h-[340px] rounded-full bg-violet-500/12 blur-[95px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-4">Services Division</p>
            <div className="flex items-center gap-4 mb-5">
              <img src={zenithLogo} alt="Zenith logo" className="h-11 w-11 rounded-xl" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Zenith</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-7">
              Digital business operating system for CMS, LMS, website builder, and workflow automation, designed as a single
              control plane for modern teams.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/zenith"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
              >
                Explore Zenith Page
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={ZENITH_SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/10 transition-colors text-foreground"
              >
                Visit Zenith
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-3 mb-4">
              <img src={zenithPreview} alt="Zenith platform preview" className="w-full h-auto rounded-xl object-cover" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: LayoutPanelTop, title: "CMS + Web", stat: "No-code" },
                { icon: GraduationCap, title: "LMS Core", stat: "Outcome" },
                { icon: Workflow, title: "Automation", stat: "Action" },
                { icon: Building2, title: "Multi-tenant", stat: "Enterprise" },
              ].map((item) => (
                <div key={item.title} className="group p-4 rounded-2xl border border-border/40 bg-card/35 dark:bg-card/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{item.stat}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZenithSection;
