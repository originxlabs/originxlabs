import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import {
  ExternalLink,
  Globe2,
  Clock3,
  ShieldCheck,
  AudioLines,
  RefreshCw,
  ArrowUpRight,
  CheckCircle2,
  Link2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import newstackLogo from "@/assets/newstack-logo.svg";
import newstackPreview from "@/assets/newstack-og-image.png";
import { NEWSTACK_LINKS, NEWSTACK_SITE, fetchNewstackStories } from "@/config/newstack";

const features = [
  {
    title: "Trusted Summaries",
    description: "Neutral multi-source summaries with source citations.",
    icon: ShieldCheck,
    metric: "170+ sources",
  },
  {
    title: "Audio Listening",
    description: "Listen to news like a podcast with text-to-speech.",
    icon: AudioLines,
    metric: "Daily usage",
  },
  {
    title: "Global + Local",
    description: "World, country, region, and place-based intelligence views.",
    icon: Globe2,
    metric: "Multi-region",
  },
  {
    title: "Rapid Refresh",
    description: "Live ingestion and story updates in short cycles.",
    icon: Clock3,
    metric: "15 min cycle",
  },
];

const pipeline = [
  "Ingest stories from hundreds of public sources on a recurring cycle.",
  "Cluster similar reports into a unified evolving story graph.",
  "Construct timelines and attach source-level references.",
  "Score credibility from source diversity and consistency signals.",
  "Deliver neutral story briefs without editorial opinion.",
];

const NewstackPage = () => {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ["newstack-live-stories"],
    queryFn: () => fetchNewstackStories(8),
    refetchInterval: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });

  const stories = data?.articles ?? [];
  const lastUpdated = data?.meta?.lastUpdated;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>NEWSTACK by OriginX Labs | Live News Intelligence</title>
        <meta
          name="description"
          content="NEWSTACK delivers live global and local news intelligence with trusted summaries, source citations, and a rapid update cycle."
        />
        <link rel="canonical" href="https://originxlabs.com/newstack" />
      </Helmet>

      <Navbar />

      <main className="pt-[78px] md:pt-[82px]">
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[360px] h-[360px] bg-primary/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] bg-accent/10 blur-[80px] rounded-full" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">OriginX Ecosystem</p>
                <div className="flex items-center gap-4 mb-5">
                  <img src={newstackLogo} alt="NEWSTACK logo" className="h-11 w-auto dark:invert" />
                  <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">NEWSTACK</h1>
                </div>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  AI-powered live news intelligence with verified sources, neutral summaries, audio-first consumption, and
                  place-aware discovery.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={NEWSTACK_SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
                  >
                    Open Newstack Live
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.newstack.live/news"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/10 transition-colors"
                  >
                    View Live News
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-card/30 backdrop-blur-sm p-3">
                <img src={newstackPreview} alt="NEWSTACK preview" className="w-full h-auto rounded-xl object-cover" />
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
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">Pipeline: How NEWSTACK Works</h2>
              <p className="text-muted-foreground mb-6">
                Built as an open intelligence layer that organizes facts from public sources without publishing opinions.
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
                <h2 className="text-2xl md:text-3xl font-display font-bold">Live Daily Stories</h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Real-time feed powered from NEWSTACK with automatic refresh every 5 minutes.
                </p>
                {lastUpdated && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Last updated: {new Date(lastUpdated).toLocaleString()}
                  </p>
                )}
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
                  <div key={i} className="h-40 rounded-2xl border border-border/40 bg-muted/30 animate-pulse" />
                ))}
              </div>
            )}

            {!isLoading && isError && (
              <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                Unable to load live Newstack stories right now. Please try again in a moment.
              </div>
            )}

            {!isLoading && !isError && (
              <div className="grid md:grid-cols-2 gap-4">
                {stories.map((story) => (
                  <article key={story.id} className="p-5 rounded-2xl border border-border/40 bg-card/35 dark:bg-card/20">
                    <div className="flex items-center justify-between gap-3 mb-3 text-xs text-muted-foreground">
                      <span>{story.source_name ?? "Source"}</span>
                      <span>{story.timestamp ?? (story.published_at ? new Date(story.published_at).toLocaleString() : "Live")}</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground leading-snug mb-2">{story.headline}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{story.summary ?? "Open article for full context."}</p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">{story.topic_slug ?? "general"}</span>
                        {story.source_count ? <span>{story.source_count} sources</span> : null}
                      </div>
                      {story.source_url ? (
                        <a
                          href={story.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:opacity-80"
                        >
                          Read source
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-border/40 bg-card/25 dark:bg-card/15 p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold mb-5">NEWSTACK Links</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {NEWSTACK_LINKS.map((link) => (
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

export default NewstackPage;
