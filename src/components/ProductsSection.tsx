import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ProductLogo from "./ProductLogo";

const products = [
  {
    name: "PROXINEX",
    tagline: "AI Control Plane + AEON",
    description: "Intent-aware model routing with governed, verifiable outputs.",
    accent: "hsl(214 90% 56%)",
    href: "/products/proxinex",
  },
  {
    name: "TRACEFLOW",
    tagline: "Digital Cognition Infrastructure",
    description: "Behavior intelligence and journey-level cognition in real time.",
    accent: "hsl(330 70% 55%)",
    href: "/products/traceflow",
  },
  {
    name: "CHRONYX",
    tagline: "Autonomous Time Intelligence",
    description: "Time-aware observability and predictive signals, continuously.",
    accent: "hsl(285 74% 60%)",
    href: "/products/chronyx",
  },
  {
    name: "QUALYX",
    tagline: "AI QA as a Service",
    description: "Autonomous quality pipelines with zero-noise validation.",
    accent: "hsl(270 100% 65%)",
    href: "/products/qualyx",
  },
  {
    name: "OPZENIX",
    tagline: "MLOps, LLMOps, DevSecOps",
    description: "Self-healing model operations from build to production.",
    accent: "hsl(160 70% 45%)",
    href: "/products/opzenix",
  },
  {
    name: "COGNIX",
    tagline: "AI Backend as a Service",
    description: "AI-native backend stack for enterprise-grade application speed.",
    accent: "hsl(210 100% 60%)",
    href: "/products/cognix",
  },
];

const ProductsSection = () => {
  const [sectionRef, visible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section id="product-division" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-muted-foreground text-xs md:text-sm tracking-[0.24em] uppercase mb-4">Product Division</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Six Autonomous Platforms</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Unified product ecosystem engineered for enterprise autonomy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product) => {
            const cardClass = `group relative z-10 hover:z-20 p-6 rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } bg-card/70 backdrop-blur-xl border-border/40 hover:border-border`;

            const content = (
              <>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 15% 10%, ${product.accent}33 0%, transparent 55%)` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      boxShadow: `0 12px 30px ${product.accent}22`,
                    }}
                  >
                    <ProductLogo productId={product.name} className="w-8 h-8" alt={`${product.name} logo`} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{product.name}</h3>
                  <p className="text-xs font-medium mb-3" style={{ color: product.accent }}>
                    {product.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Explore Platform</span>
                  </div>
                </div>
              </>
            );

            return (
              <Link key={product.name} to={product.href} className={cardClass}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
