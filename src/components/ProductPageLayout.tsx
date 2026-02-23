import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ExternalLink, Home, Package2, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "next-themes";
import { BRAND } from "@/config/brand";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InteractiveDemo from "./InteractiveDemo";
import ProductHoverCard from "./ProductHoverCard";
import ProductLogo from "./ProductLogo";

interface ProductPageLayoutProps {
  name: string;
  tagline: string;
  description: string;
  icon?: ReactNode;
  logoImage?: string;
  gradientFrom: string;
  gradientTo: string;
  features: Array<{ title: string; description: string; icon: ReactNode }>;
  capabilities: string[];
  useCases: Array<{ title: string; description: string }>;
  nextProduct?: { name: string; href: string };
  prevProduct?: { name: string; href: string };
  externalUrl?: string;
  productId?: string;
  pageTitle?: string;
}

const ProductPageLayout = ({
  name,
  tagline,
  description,
  icon,
  logoImage,
  gradientFrom,
  gradientTo,
  features,
  capabilities,
  useCases,
  nextProduct,
  prevProduct,
  externalUrl,
  productId,
  pageTitle,
}: ProductPageLayoutProps) => {
  const { resolvedTheme } = useTheme();
  const slug = productId || name.toLowerCase();
  const featuredCapabilities = capabilities.slice(0, 3);
  const canonicalUrl = `https://originxlabs.com/products/${slug}`;
  const seoDescription = `${description} ${name} is part of the OriginX Labs multi-product AI SaaS ecosystem focused on agentic systems, LLM workflows, computer vision, and enterprise R&D.`;
  const seoKeywords = [
    name,
    `${name} by OriginX Labs`,
    "OriginX Labs",
    "Agentic AI",
    "LLM",
    "Large Language Models",
    "Computer Vision",
    "AI SaaS",
    "Enterprise AI",
    "Autonomous Systems",
    "AI Research and Development",
    tagline,
  ].join(", ");
  
  // Custom title format: "{name} by OriginX Labs — {tagline}"
  const title = pageTitle || `${name} by OriginX Labs — ${tagline}`;
  
  // JSON-LD structured data for the product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": "BusinessApplication",
    "description": description,
    "operatingSystem": "Cloud",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/ContactForPrice"
    },
    "publisher": {
      "@type": "Organization",
      "name": BRAND.legalNameShort,
      "url": "https://originxlabs.com",
      "logo": "https://originxlabs.com/originx-icon.png"
    },
    "url": canonicalUrl,
    "featureList": capabilities,
    "keywords": seoKeywords
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://originxlabs.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://originxlabs.com/#products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": name,
        "item": canonicalUrl
      }
    ]
  };
  const webpageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "url": canonicalUrl,
    "description": seoDescription,
    "isPartOf": {
      "@type": "WebSite",
      "name": "OriginX Labs",
      "url": "https://originxlabs.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="OriginX Labs" />
        <meta property="og:image" content="https://originxlabs.com/originx-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="https://originxlabs.com/originx-icon.png" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webpageLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLd)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_30%_98%)] via-[hsl(220_28%_95%)] to-[hsl(230_32%_92%)] dark:from-[hsl(224_32%_7%)] dark:via-[hsl(224_30%_10%)] dark:to-[hsl(225_26%_13%)]" />
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background: `radial-gradient(circle at 18% 15%, ${gradientFrom}2b 0%, transparent 44%), radial-gradient(circle at 85% 24%, ${gradientTo}2e 0%, transparent 41%), radial-gradient(circle at 52% 87%, ${gradientFrom}1f 0%, transparent 49%)`,
            }}
          />

          <div className="container mx-auto px-6 relative z-10 py-16 md:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/55 px-4 py-2 text-xs md:text-sm backdrop-blur-sm"
            >
              <Link to="/" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/70" />
              <Link to="/#products" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
                <Package2 className="h-3.5 w-3.5" />
                Products
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/70" />
              <span className="inline-flex items-center gap-1.5 text-foreground font-medium">
                <ProductLogo productId={slug} className="h-4 w-4 rounded-sm border-none bg-transparent shadow-none p-0" alt={`${name} icon`} />
                {name}
              </span>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
              <div>
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs md:text-sm uppercase tracking-[0.12em] text-foreground"
                  style={{ borderColor: `${gradientFrom}55`, backgroundColor: `${gradientFrom}18` }}
                >
                  <ProductLogo productId={slug} className="h-5 w-5 rounded-sm border-none bg-transparent shadow-none p-0" alt={`${name} icon`} />
                  OriginX Product Division
                </span>

                {!logoImage && icon && (
                  <div className="mt-6 flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
                    >
                      {icon}
                    </div>
                  </div>
                )}

                <h1 className="mt-6 max-w-4xl font-display text-4xl md:text-6xl font-bold leading-tight text-foreground">
                  {name}
                </h1>
                <p className="mt-4 text-lg md:text-2xl font-medium" style={{ color: gradientFrom }}>
                  {tagline}
                </p>
                <p className="mt-5 max-w-3xl text-base md:text-xl text-muted-foreground leading-relaxed">
                  {description}
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="#demo"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02]"
                    style={{ backgroundColor: gradientFrom }}
                  >
                    <Sparkles className="w-4 h-4" />
                    View Live Demo
                  </a>
                  {externalUrl && (
                    <a
                      href={externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium text-foreground transition-colors"
                      style={{ borderColor: `${gradientFrom}66`, backgroundColor: `${gradientFrom}0d` }}
                    >
                      Visit {name}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <ProductHoverCard
                productId={slug}
                productName={name}
                gradientFrom={gradientFrom}
                gradientTo={gradientTo}
              >
                <aside
                  className="mx-auto w-full max-w-[360px] rounded-3xl border p-5 shadow-[0_18px_40px_rgba(2,8,23,0.2)]"
                  style={{
                    borderColor: `${gradientFrom}55`,
                    backgroundColor: resolvedTheme === "dark" ? "hsl(222 35% 10% / 0.92)" : "hsl(0 0% 100% / 0.86)",
                  }}
                >
                  {logoImage ? (
                    productId === "proxinex" ? (
                      <div className="flex justify-center py-2">
                        <ProductLogo productId="proxinex" className="h-36 w-36 md:h-40 md:w-40 rounded-2xl" alt="PROXINEX logo" />
                      </div>
                    ) : productId === "opzenix" ? (
                      <div className="flex justify-center py-2">
                        <ProductLogo productId="opzenix" className="h-36 w-36 md:h-40 md:w-40 rounded-2xl" alt="OPZENIX logo" />
                      </div>
                    ) : (
                      <img
                        src={logoImage}
                        alt={`${name} logo`}
                        className="w-full h-auto rounded-2xl object-contain p-1"
                        style={{
                          filter: resolvedTheme === "dark" ? "brightness(1.08)" : "brightness(0.97)",
                        }}
                      />
                    )
                  ) : (
                    <div className="flex justify-center py-8">{icon}</div>
                  )}

                  <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl border border-border/50 bg-background/50 p-3 text-center">
                    <div>
                      <p className="text-lg font-semibold text-foreground">{features.length}</p>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Features</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">{capabilities.length}</p>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Capabilities</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">{useCases.length}</p>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Use Cases</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {featuredCapabilities.map((item) => (
                      <p key={item} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: gradientFrom }} />
                        {item}
                      </p>
                    ))}
                  </div>
                </aside>
              </ProductHoverCard>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <div id="demo">
          <InteractiveDemo 
            productName={name}
            gradientFrom={gradientFrom}
            gradientTo={gradientTo}
          />
        </div>

        {/* Features Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <p className="text-xs md:text-sm tracking-[0.24em] uppercase text-muted-foreground">Core Features</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Core Capabilities
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl bg-card/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                    resolvedTheme === 'dark'
                      ? 'border border-white/10 hover:border-white/30'
                      : 'border-2 border-foreground/10 hover:border-foreground/30'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities List */}
        <section className="py-20 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs md:text-sm tracking-[0.24em] uppercase text-muted-foreground text-center">Enterprise Readiness</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground mb-12 text-center">
                Built for Enterprise
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 rounded-xl bg-card/30 transition-all duration-200 hover:scale-[1.02] ${
                      resolvedTheme === 'dark'
                        ? 'border border-white/10 hover:border-white/20'
                        : 'border-2 border-foreground/10 hover:border-foreground/20'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <p className="text-xs md:text-sm tracking-[0.24em] uppercase text-muted-foreground">Implementation Paths</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              Use Cases
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl bg-card/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                    resolvedTheme === 'dark'
                      ? 'border border-white/10 hover:border-white/30'
                      : 'border-2 border-foreground/10 hover:border-foreground/30'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {externalUrl && (
          <section className="py-20 relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                background: `radial-gradient(ellipse at center, ${gradientFrom} 0%, transparent 70%)`,
              }}
            />
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Get Started with {name}?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Visit the official {name} website to learn more, access documentation, and start building.
                </p>
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg text-primary-foreground"
                  style={{ 
                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                    boxShadow: `0 10px 30px -10px ${gradientFrom}50`
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                  Go to {name}
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Navigation Between Products */}
        <section className="py-12 border-t border-border/20">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              {prevProduct ? (
                <Link 
                  to={prevProduct.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="text-sm">{prevProduct.name}</span>
                </Link>
              ) : <div />}
              
              {nextProduct && (
                <Link 
                  to={nextProduct.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="text-sm">{nextProduct.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProductPageLayout;
