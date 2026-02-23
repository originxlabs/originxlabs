import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import cropxonLogoIcon from "@/assets/cropxon/favicon-180.png";
import cropxonLogoWordmark from "@/assets/cropxon/logo1.png";
import cropxonEcosystemHub from "@/assets/cropxon/ecosystem-hub.png";
import {
  agricultureHero,
  agricultureModules,
  agriVedaPillars,
  soilNetPillars,
  stakeholderOutcomes,
  sustainabilityPillars,
} from "@/config/agriculture";

const Cropxon = () => {
  const canonicalUrl = "https://originxlabs.com/cropxon";
  const seoDescription =
    "CROPXON by OriginX Labs Pvt. Ltd. is an AgTech SaaS ecosystem connecting soil intelligence, advisory, market and policy workflows, logistics, and PULSE365 nutrition tracking with AI, LLM, computer vision, and R&D-first engineering.";
  const seoKeywords =
    "Cropxon, AgTech SaaS, Agriculture AI, Agentic AI, LLM, Computer Vision, Soil Intelligence, Agri Advisory, Mandi Intelligence, Policy Automation, PULSE365, OriginX Labs";
  const cropxonSoftwareLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CROPXON",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description: seoDescription,
    url: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: "OriginX Labs Pvt. Ltd.",
      url: "https://originxlabs.com",
    },
    featureList: [
      "AgriSakha advisory",
      "SoilNet intelligence",
      "Market and pricing insights",
      "Agri finance workflows",
      "Farm logistics coordination",
      "Scheme and policy workflows",
      "Farmer network collaboration",
      "PULSE365 nutrition intelligence",
    ],
  };
  const cropxonWebPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "CROPXON by OriginX Labs",
    url: canonicalUrl,
    description: seoDescription,
    about: ["Agriculture AI", "LLM", "Computer Vision", "AgTech SaaS", "Nutrition Intelligence"],
    isPartOf: {
      "@type": "WebSite",
      name: "OriginX Labs",
      url: "https://originxlabs.com",
    },
  };
  const cropxonBreadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://originxlabs.com/" },
      { "@type": "ListItem", position: 2, name: "Cropxon", item: canonicalUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>CROPXON by OriginX Labs | Agriculture Intelligence Platform</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="CROPXON by OriginX Labs | Agriculture Intelligence Platform" />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="OriginX Labs" />
        <meta property="og:image" content="https://originxlabs.com/originx-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CROPXON by OriginX Labs | Agriculture Intelligence Platform" />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://originxlabs.com/originx-icon.png" />
        <script type="application/ld+json">{JSON.stringify(cropxonSoftwareLd)}</script>
        <script type="application/ld+json">{JSON.stringify(cropxonWebPageLd)}</script>
        <script type="application/ld+json">{JSON.stringify(cropxonBreadcrumbLd)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-[76px]">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(150_40%_98%)] via-[hsl(150_35%_94%)] to-[hsl(42_70%_93%)] dark:from-[hsl(160_30%_4%)] dark:via-[hsl(160_25%_7%)] dark:to-[hsl(160_20%_10%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,hsl(149_67%_34%/.22),transparent_45%),radial-gradient(circle_at_82%_25%,hsl(42_90%_45%/.2),transparent_42%),radial-gradient(circle_at_50%_85%,hsl(149_67%_34%/.14),transparent_48%)]" />
          <div className="container mx-auto px-6 relative z-10 py-20 md:py-28">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(149_67%_34%/.35)] bg-[hsl(149_67%_34%/.1)] px-4 py-2 text-xs md:text-sm tracking-[0.12em] uppercase text-foreground">
                  <img src={cropxonLogoIcon} alt="Cropxon icon" className="h-5 w-5 object-contain" />
                  {agricultureHero.badge}
                </span>
                <h1 className="mt-6 max-w-4xl font-display text-4xl md:text-6xl font-bold leading-tight text-foreground">
                  {agricultureHero.title}
                </h1>
                <p className="mt-6 max-w-3xl text-base md:text-xl text-muted-foreground leading-relaxed">
                  {agricultureHero.description}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={agricultureHero.ctaPrimary.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(149_67%_34%)] px-6 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-[hsl(149_67%_30%)]"
                  >
                    {agricultureHero.ctaPrimary.label}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    to={agricultureHero.ctaSecondary.href}
                    className="inline-flex items-center rounded-full border border-[hsl(149_67%_34%/.35)] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[hsl(149_67%_34%/.08)]"
                  >
                    {agricultureHero.ctaSecondary.label}
                  </Link>
                  <a
                    href="https://www.cropxon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-[hsl(42_90%_45%/.45)] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[hsl(42_90%_45%/.12)]"
                  >
                    Explore CropXon
                  </a>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[360px] rounded-3xl border border-[hsl(149_67%_34%/.35)] bg-[hsl(160_30%_4%)] p-4 shadow-[0_20px_45px_rgba(7,25,17,0.35)]">
                <img
                  src={cropxonLogoWordmark}
                  alt="Cropxon logo from cropxon.com"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-xs md:text-sm tracking-[0.24em] uppercase text-muted-foreground">Ecosystem Modules</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-foreground">Integrated platforms for agriculture operations</h2>
              <p className="mt-4 text-muted-foreground text-base md:text-lg">
                Eight coordinated modules support the operational lifecycle from field diagnostics to nutrition visibility with PULSE365.
              </p>
            </div>
            <div className="mt-8 rounded-2xl border border-[hsl(149_67%_34%/.25)] bg-card/80 p-4 md:p-6">
              <img
                src={cropxonEcosystemHub}
                alt="Cropxon ecosystem visual from cropxon.com"
                className="mx-auto w-full max-w-3xl rounded-xl object-contain"
              />
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {agricultureModules.map((module) => (
                <article
                  key={module.name}
                  className="group relative overflow-hidden rounded-2xl border border-[hsl(149_40%_35%/.24)] bg-card/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[hsl(149_67%_34%/.48)]"
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at 20% 0%, ${module.accent}2e 0%, transparent 58%)` }}
                  />
                  <div className="relative z-10">
                    <div
                      className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border text-2xl"
                      style={{ borderColor: `${module.accent}66`, backgroundColor: `${module.accent}1a` }}
                    >
                      <span aria-hidden>{module.glyph}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{module.name}</h3>
                    <p className="mt-1 text-sm font-medium" style={{ color: module.accent }}>{module.tagline}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{module.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 border-y border-border/40 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-xs md:text-sm tracking-[0.24em] uppercase text-muted-foreground">Soil Intelligence</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">SoilNet supports field decisions with structured signals</h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {soilNetPillars.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/50 bg-card/80 p-6">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-xs md:text-sm tracking-[0.24em] uppercase text-muted-foreground">AI & Data Layer</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">AgriVeda for model and dataset operations</h2>
              <p className="mt-4 text-muted-foreground">AgriVeda provides the data and model foundation for agriculture-centric AI workflows across advisory, vision, and analytics use cases.</p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {agriVedaPillars.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/50 bg-card/80 p-6">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 border-y border-border/40 bg-muted/20">
          <div className="container mx-auto px-6">
            <p className="text-xs md:text-sm tracking-[0.24em] uppercase text-muted-foreground">Stakeholder Outcomes</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">Designed for farmers, institutions, and growth partners</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {stakeholderOutcomes.map((item) => (
                <div key={item.group} className="rounded-2xl border border-border/50 bg-card/80 p-6">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{item.group}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <p className="text-xs md:text-sm tracking-[0.24em] uppercase text-muted-foreground">Sustainability & Compliance</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">Data-backed pathways for resilient agriculture operations</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {sustainabilityPillars.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/50 bg-card/80 p-6">
                  <item.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-card via-card to-primary/10 p-8 md:p-12">
              <p className="text-xs md:text-sm tracking-[0.24em] uppercase text-muted-foreground">Partner with CROPXON</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground">Build measurable agriculture outcomes with OriginX Labs</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground">
                Engage with our team for ecosystem rollout, SoilNet deployment planning, and PULSE365-aligned nutrition intelligence initiatives.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(149_67%_34%)] px-6 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-[hsl(149_67%_30%)]"
                >
                  Schedule Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#ecosystem"
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(149_67%_34%/.35)] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[hsl(149_67%_34%/.08)]"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Review Ecosystem Modules
                </a>
                <a
                  href="https://www.cropxon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-[hsl(42_90%_45%/.45)] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[hsl(42_90%_45%/.12)]"
                >
                  Visit cropxon.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cropxon;
