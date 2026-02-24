import { Helmet } from "react-helmet-async";
import { Clock3, Disc3, Mic2, Music2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GroovifyPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Groovify by OriginX Labs | Coming Soon</title>
        <meta
          name="description"
          content="Groovify by OriginX Labs is the upcoming music + lyrics experience platform."
        />
        <link rel="canonical" href="https://originxlabs.com/services/groovify" />
      </Helmet>

      <Navbar />

      <main className="pt-[78px] md:pt-[82px]">
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[360px] h-[360px] bg-fuchsia-500/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[320px] h-[320px] bg-blue-500/10 blur-[80px] rounded-full" />

          <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">OriginX Services</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">Groovify</h1>
            <p className="text-xl text-muted-foreground mt-5">
              Music + lyrics experience platform by OriginX Labs. Launching soon with adaptive playlists, synchronized lyrics,
              and intelligent discovery.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {[
                { title: "Music Discovery", icon: Music2, desc: "Context-aware recommendation and mood-based flow." },
                { title: "Lyrics Intelligence", icon: Mic2, desc: "Synchronized lyrics and language-friendly listening." },
                { title: "Audio Experience", icon: Disc3, desc: "Clean, immersive, cross-device playback design." },
                { title: "Coming Soon", icon: Clock3, desc: "Planned as the next service release from OriginX Labs." },
              ].map((item) => (
                <article key={item.title} className="p-5 rounded-2xl border border-border/40 bg-card/30 dark:bg-card/20">
                  <div className="w-9 h-9 rounded-lg bg-primary/12 flex items-center justify-center mb-3">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h2 className="font-semibold text-foreground mb-1">{item.title}</h2>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </article>
              ))}
            </div>

            <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Sparkles className="w-4 h-4" />
              Groovify by OriginX Labs is in active roadmap development.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GroovifyPage;
