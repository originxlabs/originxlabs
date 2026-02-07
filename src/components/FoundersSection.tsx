const founders = [
  {
    name: "Abhishek Panda",
    title: "Founder & CEO",
    description: "Architecting intelligence systems for the next decade.",
    initials: "AP",
  },
  {
    name: "Namrata Sahoo",
    title: "Co-Founder & Managing Director",
    description: "Driving execution, scale, and governance.",
    initials: "NS",
  },
];

const FoundersSection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
            Leadership
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            The Founders
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 max-w-3xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="flex-1 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-muted/50 to-muted/20 border border-border/30 flex items-center justify-center">
                <span className="font-display text-3xl font-bold text-muted-foreground">
                  {founder.initials}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {founder.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-4">
                {founder.title}
              </p>
              <p className="text-muted-foreground text-sm italic">
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
