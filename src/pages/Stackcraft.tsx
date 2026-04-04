import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Building2,
  ExternalLink,
  Link2,
  MessageSquareText,
  Network,
  Trophy,
  UserRoundSearch,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import stackcraftLogo from "@/assets/stackcraft-logo.svg";
import stackcraftPreview from "@/assets/stackcraft-og-image.png";
import { STACKCRAFT_LINKS, STACKCRAFT_SITE } from "@/config/stackcraft";

const pillars = [
  {
    title: "Verified Developer Identity",
    description: "Professional profiles built for engineers, specialists, and technical talent discovery.",
    icon: BadgeCheck,
    metric: "Profiles",
  },
  {
    title: "Developer Network",
    description: "A social graph for professionals to connect, follow, message, and build credibility.",
    icon: Network,
    metric: "Connect",
  },
  {
    title: "Jobs and Hiring",
    description: "Hiring workflows, role discovery, and company visibility built for modern technical recruiting.",
    icon: Briefcase,
    metric: "Hiring",
  },
  {
    title: "Hackathons and Discovery",
    description: "Events, challenges, and talent discovery rails that keep the ecosystem active and competitive.",
    icon: Trophy,
    metric: "Live",
  },
];

const capabilities = [
  {
    title: "Professional Profiles",
    description: "Showcase role, skills, achievements, badges, followers, and domain credibility in one place.",
    icon: UserRoundSearch,
  },
  {
    title: "Company Presence",
    description: "Give engineering teams and brands a dedicated company layer for trust, reach, and recruitment.",
    icon: Building2,
  },
  {
    title: "Messaging and Interaction",
    description: "Create stronger developer relationships through posts, engagement, direct communication, and network activity.",
    icon: MessageSquareText,
  },
];

const audience = [
  "Developers building a public professional identity",
  "Companies hiring technical talent and building brand presence",
  "Communities running hackathons, discovery programs, and ecosystem activity",
  "Founders and teams looking for a focused network instead of a generic social platform",
];

const StackcraftPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>StackCraft Connect by OriginX Labs | Professional Network for Developers</title>
        <meta
          name="description"
          content="StackCraft Connect is a professional network for developers with verified profiles, company presence, jobs, hackathons, and business visibility."
        />
        <link rel="canonical" href="https://originxlabs.com/stackcraft" />
      </Helmet>

      <Navbar />

      <main className="pt-[78px] md:pt-[82px]">
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.18),transparent_38%),radial-gradient(circle_at_bottom_right,hsl(var(--accent)/0.12),transparent_30%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

          <div className="container relative z-10 mx-auto px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.22em] text-muted-foreground">Developer Network Platform</p>
                <div className="mb-5 flex items-center gap-4">
                  <img src={stackcraftLogo} alt="StackCraft logo" className="h-11 w-auto rounded-md" />
                  <h1 className="font-display text-4xl font-bold text-foreground md:text-6xl">StackCraft Connect</h1>
                </div>
                <p className="mb-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                  A professional network for developers with verified identity, company presence, hiring workflows, jobs, hackathons,
                  and business visibility.
                </p>
                <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  The local StackCraft experience now aligns to the live product direction at `stackcraft.io`: social-professional
                  networking for technical talent and companies, not a learning CMS or engineering playbook portal.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={STACKCRAFT_SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:opacity-90"
                  >
                    Open StackCraft
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.stackcraft.io/business"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-6 py-3 transition-colors hover:bg-primary/10"
                  >
                    Explore Business Side
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-card/30 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                <img src={stackcraftPreview} alt="StackCraft preview" className="h-auto w-full rounded-2xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="rounded-2xl border border-border/40 bg-card/35 p-5 dark:bg-card/20">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12">
                      <pillar.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                      {pillar.metric}
                    </span>
                  </div>
                  <h2 className="mb-2 font-semibold text-foreground">{pillar.title}</h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-12">
          <div className="container mx-auto px-6">
            <div className="rounded-3xl border border-border/40 bg-card/25 p-6 md:p-8 dark:bg-card/15">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">Aligned Positioning</p>
                  <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-4xl">
                    Built around developer identity, company reach, and hiring momentum
                  </h2>
                  <p className="max-w-3xl text-muted-foreground">
                    The live StackCraft product emphasizes developer networking, company discovery, jobs, hackathons, engagement, and
                    business growth. This page now reflects that same shape so the OriginX site presents StackCraft accurately.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/40 bg-background/70 p-5">
                  <p className="mb-3 text-sm font-semibold text-foreground">Best fit for</p>
                  <div className="space-y-3">
                    {audience.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Core Experience Areas</h2>
              <p className="mt-2 max-w-3xl text-sm text-muted-foreground md:text-base">
                These are the areas that stand out in the live StackCraft product and now guide the local product page structure.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {capabilities.map((item) => (
                <article key={item.title} className="rounded-2xl border border-border/40 bg-card/35 p-5 dark:bg-card/20">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-3xl border border-border/40 bg-card/25 p-6 md:p-8 dark:bg-card/15">
              <div className="mb-5">
                <h2 className="font-display text-2xl font-bold text-foreground">Live StackCraft Routes</h2>
                <p className="mt-2 text-muted-foreground">
                  Quick links aligned to the live product navigation and public entry points.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {STACKCRAFT_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between rounded-xl border border-border/40 bg-background/60 px-4 py-3 transition-colors hover:border-primary/40"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      <Link2 className="h-4 w-4 text-primary" />
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StackcraftPage;
