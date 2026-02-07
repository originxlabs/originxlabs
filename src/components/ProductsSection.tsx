import { useState } from "react";

const products = [
  {
    name: "COGNIX",
    tagline: "AI-Powered Backend-as-a-Service",
    description: "Intelligent infrastructure that scales with your ambition. Deploy AI-native backends in minutes.",
    icon: "⚡",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "QUALYX",
    tagline: "AI-Powered QA-as-a-Service",
    description: "Autonomous testing that learns your codebase. Zero false positives. Complete coverage.",
    icon: "🛡️",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    name: "TRACEFLOW",
    tagline: "Digital Cognition & Experience Infrastructure",
    description: "Map, understand, and optimize every digital interaction. Intelligence at the edge.",
    icon: "🔮",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    name: "OPZENIX",
    tagline: "Enterprise MLOps, LLMOps, DevSecOps",
    description: "Self-healing agents for your entire ML pipeline. From development to production, autonomously.",
    icon: "🧬",
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const ProductsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="products" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Product Division
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            OriginX Labs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade AI platforms designed for the autonomous future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group relative p-8 rounded-2xl bg-card/50 border border-border/30 transition-all duration-500 hover:border-primary/30 ${
                hoveredIndex === index ? "scale-[1.02] glow-primary" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index 
                  ? "perspective(1000px) rotateX(2deg) rotateY(-2deg)" 
                  : "none",
              }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{product.icon}</span>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {product.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual metaphor */}
        <div className="mt-20 flex items-center justify-center gap-4 text-muted-foreground text-sm">
          <span className="px-4 py-2 rounded-full border border-border/30">Neural Networks</span>
          <span className="text-primary">→</span>
          <span className="px-4 py-2 rounded-full border border-border/30">Pipelines</span>
          <span className="text-primary">→</span>
          <span className="px-4 py-2 rounded-full border border-border/30">Autonomous Loops</span>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
