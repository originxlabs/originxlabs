import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InteractiveDemo from "./InteractiveDemo";
import ProductHoverCard from "./ProductHoverCard";

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
      "name": "OriginX Labs Pvt. Ltd.",
      "url": "https://originxlabs.com",
      "logo": "https://originxlabs.com/logo.svg"
    },
    "featureList": capabilities,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Theme-aware gradient background */}
          <div 
            className="absolute inset-0"
            style={{
              background: resolvedTheme === 'dark' 
                ? `radial-gradient(ellipse at top center, ${gradientFrom}30 0%, transparent 60%)`
                : `radial-gradient(ellipse at top center, ${gradientFrom}15 0%, transparent 60%)`,
            }}
          />
          <div 
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ 
              background: gradientTo,
              opacity: resolvedTheme === 'dark' ? 0.1 : 0.05
            }}
          />
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              to="/#products" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
            
            <div className="max-w-4xl">
              {/* Logo - Floating with no background, visible in both themes with hover card */}
              {logoImage && (
                <ProductHoverCard
                  productId={productId || name.toLowerCase()}
                  productName={name}
                  gradientFrom={gradientFrom}
                  gradientTo={gradientTo}
                >
                  <div className="mb-8 inline-block">
                    <img 
                      src={logoImage} 
                      alt={`${name} logo`} 
                      className="h-32 md:h-40 w-auto drop-shadow-lg transition-transform duration-300 hover:scale-105"
                      style={{
                        filter: resolvedTheme === 'light' 
                          ? 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' 
                          : 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
                      }}
                    />
                  </div>
                </ProductHoverCard>
              )}
              
              {/* Fallback to icon if no logo image */}
              {!logoImage && icon && (
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
                  >
                    {icon}
                  </div>
                  <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
                    {name}
                  </h1>
                </div>
              )}
              
              <p className="text-xl md:text-2xl text-primary font-medium mb-6">
                {tagline}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
                {description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                {externalUrl && (
                  <a
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg text-primary-foreground"
                    style={{ 
                      background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                      boxShadow: `0 10px 30px -10px ${gradientFrom}50`
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Visit {name} Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card/80 dark:bg-card/50 text-foreground rounded-xl font-medium hover:bg-card transition-all duration-300 border border-border/50 backdrop-blur-sm"
                >
                  View Live Demo
                </a>
              </div>
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
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">
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
              <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">
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
            <h2 className="font-display text-3xl font-bold text-foreground mb-12">
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
