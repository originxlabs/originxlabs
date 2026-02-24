import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  RefreshCw,
  Link2,
  GraduationCap,
  LayoutPanelTop,
  BrainCircuit,
  Workflow,
  Rss,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import stackcraftLogo from "@/assets/stackcraft-logo.svg";
import stackcraftPreview from "@/assets/stackcraft-og-image.png";
import { STACKCRAFT_LINKS, STACKCRAFT_SITE, fetchStackcraftPosts } from "@/config/stackcraft";

const features = [
  {
    title: "Engineering Playbooks",
    description: "Production-grade guides for backend, API, architecture, AI, and cloud engineering.",
    icon: BookOpen,
    metric: "Multi-track",
  },
  {
    title: "Learning Division",
    description: "Structured role-based journeys for practical engineering mastery.",
    icon: GraduationCap,
    metric: "Guided",
  },
  {
    title: "CMS Publishing",
    description: "Content operations and publishing workflows for technical knowledge systems.",
    icon: LayoutPanelTop,
    metric: "Workflow",
  },
  {
    title: "Agentic AI Blog (Next)",
    description: "Next-generation AI-assisted blog system planned by OriginX Labs.",
    icon: BrainCircuit,
    metric: "Roadmap",
  },
];

const pipeline = [
  "Author and curate deep engineering playbooks.",
  "Organize content through structured CMS workflows.",
  "Map content into learning journeys and progression paths.",
  "Power discovery with search, feed, and category intelligence.",
  "Evolve into agentic AI blog orchestration for faster quality publishing.",
];

const StackcraftPage = () => {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ["stackcraft-rss-posts"],
    queryFn: () => fetchStackcraftPosts(8),
    refetchInterval: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 2,
  });

  const posts = data ?? [];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>StackCraft by OriginX Labs | Learning, CMS & Agentic Blog Platform</title>
        <meta
          name="description"
          content="StackCraft is the OriginX learning and engineering playbook division with CMS-ready publishing workflows and the next agentic AI blog system roadmap."
        />
        <link rel="canonical" href="https://originxlabs.com/stackcraft" />
      </Helmet>

      <Navbar />

      <main className="pt-[78px] md:pt-[82px]">
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[360px] h-[360px] bg-primary/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] bg-accent/10 blur-[80px] rounded-full" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">OriginX Learning Division</p>
                <div className="flex items-center gap-4 mb-5">
                  <img src={stackcraftLogo} alt="StackCraft logo" className="h-11 w-auto rounded-md" />
                  <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">StackCraft</h1>
                </div>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Production-grade engineering playbooks, learning pathways, CMS publishing system, and the upcoming agentic AI blog
                  engine from OriginX Labs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={STACKCRAFT_SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
                  >
                    Open StackCraft
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.stackcraft.io/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/10 transition-colors"
                  >
                    View Engineering Blog
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-card/30 backdrop-blur-sm p-3">
                <img src={stackcraftPreview} alt="StackCraft preview" className="w-full h-auto rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature) => (
                <article key={feature.title} className="p-5 rounded-2xl border border-border/40 bg-card/30 dark:bg-card/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/12 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{feature.metric}</span>
                  </div>
                  <h2 className="font-semibold text-foreground mb-1">{feature.title}</h2>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-border/40 bg-card/25 dark:bg-card/15 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">StackCraft Pipeline</h2>
              <p className="text-muted-foreground mb-6">
                Learning + CMS + blog intelligence pipeline aligned to StackCraft and OriginX roadmap.
              </p>
              <div className="grid md:grid-cols-5 gap-3">
                {pipeline.map((step) => (
                  <div key={step} className="rounded-xl border border-border/40 bg-background/60 p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold">Live Engineering Playbooks</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Latest StackCraft blog entries from RSS feed with periodic refresh.
                </p>
              </div>
              <button
                onClick={() => refetch()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:bg-muted/40 transition-colors text-sm"
              >
                <RefreshCw className={`w-4 h-4 ${isRefetching ? "animate-spin" : ""}`} />
                Refresh feed
              </button>
            </div>

            {isLoading && (
              <div className="grid md:grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-36 rounded-2xl border border-border/40 bg-muted/30 animate-pulse" />
                ))}
              </div>
            )}

            {!isLoading && isError && (
              <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                Unable to load StackCraft feed right now. Please try again in a moment.
              </div>
            )}

            {!isLoading && !isError && (
              <div className="grid md:grid-cols-2 gap-4">
                {posts.map((post) => (
                  <article key={post.link} className="p-5 rounded-2xl border border-border/40 bg-card/35 dark:bg-card/20">
                    <div className="flex items-center justify-between gap-3 mb-3 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">{post.category}</span>
                      <span>{post.pubDate ? new Date(post.pubDate).toLocaleDateString() : "Latest"}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground leading-snug mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.description}</p>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:opacity-80 text-sm"
                    >
                      Read playbook
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-border/40 bg-card/25 dark:bg-card/15 p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold mb-2">OriginX Next: Agentic AI Blog System</h2>
              <p className="text-muted-foreground mb-5">
                Planned extension where StackCraft content operations can be assisted by agentic workflows: topic intelligence, outline
                drafting, source grounding, and editorial QA loops.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { icon: BrainCircuit, title: "Topic Agents", desc: "Discover relevant engineering topics from signals and trends." },
                  { icon: Workflow, title: "Editorial Orchestration", desc: "Draft, review, and quality-check articles with human control." },
                  { icon: Rss, title: "Adaptive Distribution", desc: "Publish to blog, feeds, and learning tracks with traceability." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-border/40 bg-background/60 p-4">
                    <div className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-border/40 bg-card/25 dark:bg-card/15 p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold mb-5">StackCraft Links</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {STACKCRAFT_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between rounded-xl border border-border/40 bg-background/60 px-4 py-3 hover:border-primary/40 transition-colors"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                      <Link2 className="w-4 h-4 text-primary" />
                      {link.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
