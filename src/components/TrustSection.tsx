const principles = [
  { icon: "🔒", title: "Privacy-First", description: "Your data belongs to you, always" },
  { icon: "🛡️", title: "End-to-End Encryption", description: "Military-grade protection" },
  { icon: "👤", title: "PII Security", description: "Personal data, treated personally" },
  { icon: "⚖️", title: "Ethical AI", description: "Principles before profits" },
  { icon: "🤝", title: "Responsible Autonomy", description: "Power with accountability" },
  { icon: "📊", title: "Explainable Systems", description: "Decisions you can understand" },
];

const TrustSection = () => {
  return (
    <section id="trust" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
              Trust & Governance
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built on Principles
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Intelligence without trust is just technology. We build systems worthy of the responsibility they carry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="p-6 rounded-xl bg-card/30 border border-border/20 hover:border-border/40 transition-colors duration-300"
              >
                <span className="text-3xl mb-4 block">{principle.icon}</span>
                <h4 className="text-foreground font-semibold mb-2">{principle.title}</h4>
                <p className="text-muted-foreground text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
