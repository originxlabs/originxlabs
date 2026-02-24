import { Helmet } from "react-helmet-async";
import { ArrowUpRight, ExternalLink, FileImage, FileText, Sparkles, WandSparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import convertixLogo from "@/assets/convertix-logo.svg";
import convertixSnapshot from "@/assets/snapshots/convertix-home-full.png";

const features = [
  {
    title: "PDF Studio",
    description: "Production-grade PDF workflows including merge, split, compress, rotate, and advanced operations.",
    icon: FileText,
  },
  {
    title: "Image Labs",
    description: "Image transformation workflows for resizing, optimization, and conversion at speed.",
    icon: FileImage,
  },
  {
    title: "NoteFlowLM",
    description: "AI-assisted document intelligence for asking, exploring, and extracting insights from files.",
    icon: Sparkles,
  },
  {
    title: "Premium UX Layer",
    description: "High-performance, visually polished document platform experience built for modern teams.",
    icon: WandSparkles,
  },
];

const pipeline = [
  "Upload and route documents into PDF/Image processing flows.",
  "Apply transform, optimize, and editing operations with precision.",
  "Use AI assistance for intelligent extraction and context tasks.",
  "Export, share, and deploy outputs for team and enterprise usage.",
];

const ConvertixPage = () => {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });
  const [featureRef, featureVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });
  const [flowRef, flowVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });
  const [previewRef, previewVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Convertix by OriginX Labs | Premium PDF and Image Studio</title>
        <meta
          name="description"
          content="Convertix by OriginX Labs is a premium PDF and image studio with PDF workflows, image labs, and AI-ready document intelligence."
        />
        <link rel="canonical" href="https://originxlabs.com/services/convertix" />
      </Helmet>

      <Navbar />

      <main className="pt-[78px] md:pt-[82px]">
        <section ref={heroRef} className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/12 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[360px] h-[360px] bg-orange-500/10 blur-[90px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] bg-blue-500/10 blur-[90px] rounded-full" />

          <div className="container mx-auto px-6 relative z-10">
            <div className={`grid lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">OriginX Services</p>
                <div className="flex items-center gap-4 mb-4">
                  <img src={convertixLogo} alt="Convertix logo" className="h-11 w-11 rounded-xl bg-white p-1.5" />
                  <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Convertix</h1>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                  Premium PDF and image studio by OriginX Labs for high-quality document operations and AI-ready workflows.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.getconvertix.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
                  >
                    Open Convertix
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.getconvertix.com/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/10 transition-colors"
                  >
                    View Pricing
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border/40 bg-card/35 backdrop-blur-sm p-3 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                <img src={convertixSnapshot} alt="Convertix preview" className="w-full h-[280px] md:h-[320px] rounded-xl object-cover object-top" />
              </div>
            </div>
          </div>
        </section>

        <section ref={featureRef} className="py-10">
          <div className="container mx-auto px-6">
            <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 ${featureVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {features.map((feature) => (
                <article key={feature.title} className="p-5 rounded-2xl border border-border/40 bg-card/30 dark:bg-card/20">
                  <div className="w-9 h-9 rounded-lg bg-primary/12 flex items-center justify-center mb-3">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="font-semibold text-foreground mb-1">{feature.title}</h2>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section ref={flowRef} className="py-10">
          <div className="container mx-auto px-6">
            <div className={`rounded-2xl border border-border/40 bg-card/25 dark:bg-card/15 p-6 md:p-8 transition-all duration-700 ${flowVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">Convertix Processing Flow</h2>
              <div className="grid md:grid-cols-4 gap-3">
                {pipeline.map((step) => (
                  <div key={step} className="rounded-xl border border-border/40 bg-background/60 p-4 text-sm text-muted-foreground leading-relaxed">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={previewRef} className="pb-16 pt-6">
          <div className="container mx-auto px-6">
            <div className={`rounded-2xl border border-border/40 bg-card/25 dark:bg-card/15 p-4 md:p-6 transition-all duration-700 ${previewVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="text-xl md:text-2xl font-display font-bold mb-3">Live Product Preview</h2>
              <p className="text-muted-foreground mb-4 text-sm">Presented in compact viewport format for cleaner reading experience.</p>
              <img src={convertixSnapshot} alt="Convertix live snapshot" className="w-full h-[340px] md:h-[420px] rounded-xl border border-border/30 object-cover object-top" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConvertixPage;
