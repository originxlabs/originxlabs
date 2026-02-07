import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft, Sparkles, Globe, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const { resolvedTheme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Helmet>
        <title>Page Not Found | OriginX Labs</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to OriginX Labs to explore our AI products and services." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        
        <main className="flex-1 relative overflow-hidden flex items-center justify-center">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div 
              className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20 transition-all duration-1000"
              style={{
                background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
                left: mousePosition.x - 400,
                top: mousePosition.y - 400,
              }}
            />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Animated 404 */}
              <div className="relative mb-8">
                <h1 className="text-[150px] md:text-[200px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground/20 to-foreground/5 leading-none select-none">
                  404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce" style={{ animationDelay: "0s" }}>
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce" style={{ animationDelay: "0.1s" }}>
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center animate-bounce" style={{ animationDelay: "0.2s" }}>
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Lost in the Neural Network
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
                The page you're looking for seems to have drifted into the void. 
                Our autonomous agents are searching, but let's get you back on track.
              </p>

              {/* Company Info Card */}
              <div 
                className={`inline-block p-6 rounded-2xl backdrop-blur-sm mb-8 ${
                  resolvedTheme === 'dark' 
                    ? 'bg-card/20 border border-white/10' 
                    : 'bg-card/50 border border-foreground/10'
                }`}
              >
                <p className="text-sm text-muted-foreground mb-2">You're exploring</p>
                <p className="font-display text-xl font-semibold text-foreground">OriginX Labs Pvt. Ltd.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Where Intelligence Begins
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Home className="w-5 h-5" />
                  Return Home
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    resolvedTheme === 'dark'
                      ? 'bg-card/30 border border-white/10 text-foreground hover:bg-card/50'
                      : 'bg-card border border-foreground/10 text-foreground hover:bg-card/80'
                  }`}
                >
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </button>
              </div>

              {/* Quick Links */}
              <div className="mt-12 pt-8 border-t border-border/20">
                <p className="text-sm text-muted-foreground mb-4">Quick navigation</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { name: "Products", href: "/#products" },
                    { name: "About", href: "/about" },
                    { name: "Leadership", href: "/leadership" },
                    { name: "Contact", href: "/contact" },
                    { name: "Careers", href: "/careers" },
                  ].map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        resolvedTheme === 'dark'
                          ? 'bg-card/20 border border-white/5 text-muted-foreground hover:text-foreground hover:border-white/20'
                          : 'bg-card/50 border border-foreground/5 text-muted-foreground hover:text-foreground hover:border-foreground/20'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;
