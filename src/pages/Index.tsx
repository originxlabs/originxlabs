import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ParallaxProductShowcase from "@/components/ParallaxProductShowcase";
import AnimatedProductShowcase from "@/components/AnimatedProductShowcase";
import ChronyxSection from "@/components/ChronyxSection";
import AeonSection from "@/components/AeonSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden" style={{ perspective: '1px', perspectiveOrigin: 'center top' }}>
      <Helmet>
        <title>OriginX Labs — Autonomous AI & Enterprise Intelligence</title>
        <meta name="description" content="OriginX Labs builds autonomous AI platforms and enterprise intelligence solutions. COGNIX, QUALYX, TRACEFLOW, OPZENIX - powering the future of intelligent systems." />
      </Helmet>
      <Navbar />
      
      {/* Hero with parallax background - fixed layer */}
      <div 
        className="relative"
        style={{ 
          transformStyle: 'preserve-3d',
        }}
      >
        <HeroSection />
      </div>
      
      {/* Reverse-scrolling product showcase with parallax */}
      <section 
        id="products" 
        className="relative"
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <ParallaxProductShowcase />
      </section>
      
      {/* Detailed product showcase with parallax */}
      <div 
        className="relative"
        style={{
          transform: `translateY(${scrollY * 0.015}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <AnimatedProductShowcase />
      </div>
      
      {/* AEON Section with parallax */}
      <div 
        className="relative"
        style={{
          transform: `translateY(${scrollY * 0.01}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <AeonSection />
      </div>
      
      {/* Chronyx Section with parallax */}
      <div 
        id="chronyx" 
        className="relative"
        style={{
          transform: `translateY(${scrollY * 0.005}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <ChronyxSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
