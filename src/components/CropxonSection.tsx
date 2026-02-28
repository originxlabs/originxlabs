import { ArrowRight, ExternalLink, Leaf, Sprout, TrendingUp, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CropxonSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section ref={sectionRef} id="cropxon" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-500/5 to-background" />
      <div className="absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full bg-emerald-500/10 blur-[90px]" />
      <div className="absolute -bottom-24 -left-24 w-[340px] h-[340px] rounded-full bg-lime-500/12 blur-[95px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-4">Agriculture Intelligence</p>
            <div className="mb-5">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Cropxon</h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-7">
              AI-driven agri intelligence platform for field operations, advisory workflows, and ecosystem-level decision systems.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/cropxon"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
              >
                Explore Cropxon Page
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.cropxon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/10 transition-colors text-foreground"
              >
                Visit Cropxon
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="rounded-2xl border border-emerald-500/35 bg-emerald-500/[0.08] dark:bg-emerald-500/[0.14] backdrop-blur-sm p-5 mb-4">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300 mb-3">Core Capability Tags</p>
              <div className="flex flex-wrap gap-2">
                {["Field Ops", "Agri Advisory", "Mandi Signals", "Policy Intelligence", "Farmer Workflow", "Risk Alerts"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-medium border border-emerald-500/40 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Leaf, title: "Field Intelligence", stat: "Live" },
                { icon: Sprout, title: "Advisory Rails", stat: "AI" },
                { icon: TrendingUp, title: "Market Signals", stat: "Daily" },
                { icon: ShieldCheck, title: "Policy Workflow", stat: "Trusted" },
              ].map((item) => (
                <div key={item.title} className="group p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] dark:bg-emerald-500/[0.12] backdrop-blur-sm hover:border-emerald-400/60 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/12 dark:bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/25 transition-colors">
                      <item.icon className="w-4 h-4 text-emerald-700 dark:text-emerald-300" />
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 dark:bg-emerald-500/25 text-emerald-800 dark:text-emerald-200 font-medium">
                      {item.stat}
                    </span>
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

export default CropxonSection;
