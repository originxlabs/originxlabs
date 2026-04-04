import { BadgeCheck, Eye, LockKeyhole, Scale, ServerCrash, ShieldCheck } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "Governed AI Systems",
    description: "Agentic workflows and enterprise AI systems designed with control points, reviewability, and operational accountability.",
  },
  {
    icon: LockKeyhole,
    title: "Security and Privacy",
    description: "Platform architecture designed to respect data boundaries, protect sensitive workflows, and support enterprise trust needs.",
  },
  {
    icon: Eye,
    title: "Explainability",
    description: "Systems oriented around observable behavior, traceability, and decision visibility rather than black-box abstraction.",
  },
  {
    icon: Scale,
    title: "Responsible Autonomy",
    description: "Autonomous capabilities framed with human oversight, governance logic, and business-safe operating principles.",
  },
  {
    icon: ServerCrash,
    title: "Operational Resilience",
    description: "Platform and solution narratives centered on reliability, scale, and continuity across real-world enterprise use cases.",
  },
  {
    icon: BadgeCheck,
    title: "Enterprise Readiness",
    description: "Clear trust, platform, and solutions positioning that supports serious enterprise evaluation and stakeholder buy-in.",
  },
];

const TrustSection = () => {
  return (
    <section id="trust" className="relative overflow-hidden py-24 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute left-[10%] top-12 h-56 w-56 rounded-full bg-primary/10 blur-[90px]" />
      <div className="absolute bottom-0 right-[8%] h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.22em] text-muted-foreground">Trust, Security and Governance</p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">Enterprise trust is part of the product</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              OriginX Labs presents AI and enterprise platforms not just as technical capabilities, but as governed systems built for
              high-responsibility environments, operational visibility, and long-term business adoption.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-[24px] border border-border/50 bg-card/55 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 dark:bg-card/35"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <principle.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{principle.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
