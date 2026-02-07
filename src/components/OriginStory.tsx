const OriginStory = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">
            Our Origin
          </p>
          
          <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-relaxed mb-8">
            "Built in a small town of{" "}
            <span className="text-gradient">Odisha</span>. Designed for the world."
          </blockquote>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            From India to Bangalore, USA, and Dubai — OriginX is proof that intelligence has no borders.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {["Odisha", "Bangalore", "USA", "Dubai"].map((location, index) => (
              <div
                key={location}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <span className="text-sm font-medium">{location}</span>
                {index < 3 && (
                  <div className="hidden sm:block w-16 h-px bg-border ml-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
