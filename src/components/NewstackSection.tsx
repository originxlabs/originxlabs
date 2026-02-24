import { Newspaper, Radar, ExternalLink, ArrowRight, Clock3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import newstackLogo from "@/assets/newstack-logo.svg";
import { NEWSTACK_SITE } from "@/config/newstack";

const NewstackSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} id="newstack" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute -top-20 -left-24 w-[380px] h-[380px] rounded-full bg-primary/12 blur-[90px]" />
      <div className="absolute -bottom-24 -right-20 w-[320px] h-[320px] rounded-full bg-accent/12 blur-[90px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-4">News Intelligence Layer</p>
            <div className="flex items-center gap-4 mb-5">
              <img src={newstackLogo} alt="NEWSTACK logo" className="h-10 w-auto dark:invert" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">NEWSTACK</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-7">
              Daily live global and local intelligence from verified public sources with neutral summaries, credibility checks,
              and fast update cycles.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/newstack"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
              >
                Explore Newstack Page
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={NEWSTACK_SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/10 transition-colors text-foreground"
              >
                Visit Newstack Live
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
              { icon: Newspaper, title: "Signal Stream", desc: "Clustered story groups across multiple sources.", stat: "Real-time" },
              { icon: Radar, title: "Global Pulse", desc: "Regional intensity and macro trend mapping.", stat: "Worldwide" },
              { icon: ShieldCheck, title: "Credibility Layer", desc: "Diversity and consistency based scoring.", stat: "Verified" },
              { icon: Clock3, title: "Update Cadence", desc: "New story ingestion and refresh cycle.", stat: "15 min" },
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

export default NewstackSection;
