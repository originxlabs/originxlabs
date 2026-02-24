import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Briefcase, ExternalLink, FileCheck2, Lock, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import careerscraftLogo from "@/assets/careerscraft-logo-custom.svg";
import careerscraftSnapshot from "@/assets/snapshots/careerscraft-home-full.png";

const features = [
  {
    title: "ATS Intelligence",
    description: "Resume scoring and template design optimized for recruiter and ATS parsing workflows.",
    icon: FileCheck2,
  },
  {
    title: "AI-Guided Writing",
    description: "AI suggestions for stronger role narratives, impact language, and structure quality.",
    icon: Sparkles,
  },
  {
    title: "Versioned Resume Editing",
    description: "Track edits and maintain role-specific resume variants with change history.",
    icon: Briefcase,
  },
  {
    title: "Privacy-First Career Data",
    description: "User-controlled profile and resume assets with secure handling of career documents.",
    icon: Lock,
  },
];

const pipeline = [
  "Upload or start from ATS-safe industry templates.",
  "Analyze structure, keywords, and recruiter signal fit.",
  "Apply AI-guided improvements with role context.",
  "Export, share, and version resumes for each opportunity.",
];

const CareerscraftPage = () => {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });
  const [featureRef, featureVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });
  const [flowRef, flowVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });
  const [previewRef, previewVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>CareersCraft by OriginX Labs | Career Operating System</title>
        <meta
          name="description"
          content="CareersCraft by OriginX Labs is a career operating system with ATS intelligence, AI-guided resume writing, and recruiter-ready templates."
        />
        <link rel="canonical" href="https://originxlabs.com/services/careerscraft" />
      </Helmet>

      <Navbar />

      <main className="pt-[78px] md:pt-[82px]">
        <section ref={heroRef} className="relative py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[360px] h-[360px] bg-indigo-500/10 blur-[90px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] bg-cyan-500/10 blur-[90px] rounded-full" />

          <div className="container mx-auto px-6 relative z-10">
            <div className={`grid lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">OriginX Services</p>
                <div className="flex items-center gap-4 mb-4">
                  <img src={careerscraftLogo} alt="CareersCraft logo" className="h-11 w-11 rounded-xl object-cover" />
                  <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">CareersCraft</h1>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                  Career operating system for recruiter-ready resumes with ATS-safe templates and AI-powered writing optimization.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.careerscraft.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all"
                  >
                    Open CareersCraft
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.careerscraft.co/templates"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 hover:bg-primary/10 transition-colors"
                  >
                    View Templates
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border/40 bg-card/35 backdrop-blur-sm p-3 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                <img src={careerscraftSnapshot} alt="CareersCraft preview" className="w-full h-[280px] md:h-[320px] rounded-xl object-cover object-top" />
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
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">How CareersCraft Works</h2>
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
              <p className="text-muted-foreground mb-4 text-sm">Live capture from CareersCraft experience, presented in compact viewport format.</p>
              <img src={careerscraftSnapshot} alt="CareersCraft live snapshot" className="w-full h-[340px] md:h-[420px] rounded-xl border border-border/30 object-cover object-top" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareerscraftPage;
