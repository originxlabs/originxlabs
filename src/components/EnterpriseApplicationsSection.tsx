import { ArrowRight, BadgeCheck, Building2, Cpu, Network, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import originxOnePreview from "@/assets/originxone-home-full.png";
import heroVideo from "@/assets/originx-hero-video.mp4";

const solutionPillars = [
  {
    icon: Cpu,
    title: "AI Applications",
    description: "Applied AI systems for operations, quality, knowledge, and autonomous business workflows.",
  },
  {
    icon: Workflow,
    title: "Enterprise Process Design",
    description: "Workflow-led architecture that connects teams, data, governance, and execution paths.",
  },
  {
    icon: Network,
    title: "Unified Platform Layer",
    description: "Composable products and APIs designed to work as one enterprise operating environment.",
  },
];

const trustSignals = [
  "Platform architecture, solution architecture, and governance pages",
  "Product-led enterprise suite across AI, operations, quality, workforce, and infrastructure",
  "Clear routes for regulated industries, enterprise AI, autonomy, and scale",
  "Visual product storytelling with branded media, previews, and platform demos",
];

const EnterpriseApplicationsSection = () => {
  return (
    <section id="enterprise-applications" className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-100/40 to-background dark:via-slate-900/20" />
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-muted-foreground">Enterprise Applications</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Enterprise-grade digital systems for autonomous operations and applied AI delivery
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Inspired by enterprise software leaders, this OriginX experience now emphasizes structured platform value, solution
            architecture, trust signals, and executive-ready presentation while keeping OriginX products, media, and brand voice at
            the center.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-border/50 bg-card/60 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:bg-card/40">
            <div className="overflow-hidden rounded-[22px] border border-border/40 bg-background">
              <video
                className="aspect-video w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={originxOnePreview}
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {solutionPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-border/40 bg-background/80 p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <pillar.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-border/50 bg-card/50 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Enterprise Alignment</p>
                  <p className="text-sm text-muted-foreground">Structured like a modern enterprise software company</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/40 bg-background/75 p-4">
                  <p className="text-2xl font-bold text-foreground">8+</p>
                  <p className="mt-1 text-sm text-muted-foreground">Core platforms and service experiences</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-background/75 p-4">
                  <p className="text-2xl font-bold text-foreground">5</p>
                  <p className="mt-1 text-sm text-muted-foreground">Dedicated platform and solution architecture paths</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-background/75 p-4">
                  <p className="text-2xl font-bold text-foreground">Enterprise</p>
                  <p className="mt-1 text-sm text-muted-foreground">Buyer language across solutions, trust, and deployment</p>
                </div>
                <div className="rounded-2xl border border-border/40 bg-background/75 p-4">
                  <p className="text-2xl font-bold text-foreground">AI + Ops</p>
                  <p className="mt-1 text-sm text-muted-foreground">Applied AI combined with operational infrastructure</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-border/50 bg-slate-950 p-6 text-slate-50 shadow-[0_20px_80px_rgba(2,6,23,0.28)] dark:bg-slate-900">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Enterprise Trust Footing</p>
                  <p className="text-sm text-slate-300">Positioned for serious enterprise evaluation</p>
                </div>
              </div>

              <div className="space-y-3">
                {trustSignals.map((signal) => (
                  <div key={signal} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                    <p className="text-sm leading-relaxed text-slate-200">{signal}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/platform/architecture"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition-opacity hover:opacity-90"
                >
                  View Platform Architecture
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/solutions/enterprise"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Explore Enterprise Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseApplicationsSection;
