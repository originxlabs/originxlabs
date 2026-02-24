import { type ElementType } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  LayoutPanelTop,
  Link2,
  Sparkles,
  Workflow,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import zenithLogo from "@/assets/zenith-logo.svg";
import zenithPreview from "@/assets/zenith-og-image.png";
import { ZENITH_FEATURES, ZENITH_LINKS, ZENITH_SITE } from "@/config/zenith";

const pipeline = [
  "Design structured content and knowledge models in CMS Studio.",
  "Compose digital journeys and pages in Experience Canvas + Website Builder.",
  "Deliver training and learning operations through LMS workflows.",
  "Automate cross-system actions in Workflow Studio.",
  "Operate everything through one control plane with tenant-aware governance.",
];

const iconByTitle: Record<string, ElementType> = {
  "CMS Studio": LayoutPanelTop,
  "Experience Canvas": Sparkles,
  "LMS Platform": GraduationCap,
  "Automation Engine": Workflow,
  "Website Builder": LayoutPanelTop,
  "Multi-Tenant Core": Building2,
  "AI-Powered Operations": Sparkles,
  "Unified Control Plane": Workflow,
};

const ZenithPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Zenith by OriginX Labs | CMS, LMS, Website Builder and Automation</title>
        <meta
          name="description"
          content="Zenith is a digital business operating system with CMS Studio, LMS platform, website builder, and workflow automation in one control plane."
        />
        <link rel="canonical" href="https://originxlabs.com/zenith" />
      </Helmet>

      <Navbar />

      <main className="pt-[78px] md:pt-[82px]">
        <section className="relative py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[360px] h-[360px] bg-cyan-500/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] bg-violet-500/10 blur-[80px] rounded-full" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Services Ecosystem</p>
                <div className="flex items-center gap-4 mb-5">
                  <img src={zenithLogo} alt="Zenith logo" className="h-11 w-11 rounded-xl" />
                  <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Zenith</h1>
                </div>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Run your digital business from one control plane spanning CMS, website experiences, LMS operations,
                  and workflow automation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={ZENITH_SITE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
                  >
                    Open Zenith
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.getzenith.io/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/10 transition-colors"
                  >
                    View Documentation
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-border/40 bg-card/30 backdrop-blur-sm p-3">
                <img src={zenithPreview} alt="Zenith preview" className="w-full h-auto rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ZENITH_FEATURES.map((feature) => {
                const FeatureIcon = iconByTitle[feature.title] ?? Sparkles;
                return (
                  <article key={feature.title} className="p-5 rounded-2xl border border-border/40 bg-card/30 dark:bg-card/20">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/12 flex items-center justify-center">
                        <FeatureIcon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{feature.metric}</span>
                    </div>
                    <h2 className="font-semibold text-foreground mb-1">{feature.title}</h2>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-border/40 bg-card/25 dark:bg-card/15 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">Zenith Platform Pipeline</h2>
              <p className="text-muted-foreground mb-6">How Zenith unifies information, experience, outcome, and action systems.</p>
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
            <div className="rounded-2xl border border-border/40 bg-card/25 dark:bg-card/15 p-6 md:p-8">
              <h2 className="text-2xl font-display font-bold mb-5">Zenith Links</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ZENITH_LINKS.map((link) => (
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

export default ZenithPage;
