const capabilities = [
  "Startup → Enterprise Scale",
  "Onshore & Offshore Delivery",
  "Agile Methodology",
  "AI-First Engineering",
  "CMMI-Aligned Processes",
  "AI Agent-Assisted Execution",
];

const ConsultingSection = () => {
  return (
    <section id="consulting" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
              Consulting Division
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              OriginX Consulting Services
            </h2>
            <p className="text-secondary text-lg font-medium">OCS</p>
          </div>

          <div className="p-10 rounded-3xl bg-card/30 border border-border/20">
            <p className="text-muted-foreground text-lg text-center mb-10 leading-relaxed max-w-2xl mx-auto">
              Enterprise-grade consulting with AI-native execution. From strategy to deployment, we build what others can't imagine.
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/20 border border-border/10"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-foreground text-sm font-medium">{cap}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-4">
              <span className="px-4 py-2 text-sm text-muted-foreground border border-border/20 rounded-full">
                B2B Only
              </span>
              <span className="px-4 py-2 text-sm text-muted-foreground border border-border/20 rounded-full">
                Global Delivery
              </span>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Build with OriginX
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
