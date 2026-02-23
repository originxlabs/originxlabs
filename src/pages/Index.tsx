import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ParallaxProductShowcase from "@/components/ParallaxProductShowcase";
import AnimatedProductShowcase from "@/components/AnimatedProductShowcase";
import ChronyxSection from "@/components/ChronyxSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const seoDescription =
    "OriginX Labs Pvt. Ltd. builds agentic AI, LLM, computer vision, and R&D-driven SaaS platforms for autonomous enterprise operations. Explore Proxinex, Cognix, Qualyx, Traceflow, Chronyx, Opzenix, and Cropxon.";
  const seoKeywords =
    "OriginX Labs, Agentic AI, LLM, Large Language Models, Computer Vision, AI SaaS, Autonomous AI, Enterprise AI, Multi Product Startup, AI R&D, Proxinex, Cognix, Qualyx, Traceflow, Chronyx, Opzenix, Cropxon";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OriginX Labs Pvt. Ltd.",
    alternateName: "OriginX Labs",
    url: "https://originxlabs.com",
    description: seoDescription,
    knowsAbout: [
      "Agentic AI",
      "Large Language Models",
      "Computer Vision",
      "Autonomous Systems",
      "Enterprise SaaS",
      "AI Research and Development",
    ],
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OriginX Labs",
    url: "https://originxlabs.com",
    description: seoDescription,
  };
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "OriginX Product Suite",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Proxinex", url: "https://originxlabs.com/products/proxinex" },
      { "@type": "ListItem", position: 2, name: "Cognix", url: "https://originxlabs.com/products/cognix" },
      { "@type": "ListItem", position: 3, name: "Qualyx", url: "https://originxlabs.com/products/qualyx" },
      { "@type": "ListItem", position: 4, name: "Traceflow", url: "https://originxlabs.com/products/traceflow" },
      { "@type": "ListItem", position: 5, name: "Chronyx", url: "https://originxlabs.com/products/chronyx" },
      { "@type": "ListItem", position: 6, name: "Opzenix", url: "https://originxlabs.com/products/opzenix" },
      { "@type": "ListItem", position: 7, name: "Cropxon", url: "https://originxlabs.com/cropxon" },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>OriginX Labs | Agentic AI, LLM, Computer Vision & Enterprise SaaS</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:title" content="OriginX Labs | Agentic AI, LLM, Computer Vision & Enterprise SaaS" />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://originxlabs.com/" />
        <meta property="og:site_name" content="OriginX Labs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OriginX Labs | Agentic AI, LLM, Computer Vision & Enterprise SaaS" />
        <meta name="twitter:description" content={seoDescription} />
        <link rel="canonical" href="https://originxlabs.com/" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productListSchema)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-[78px] md:pt-[82px]">
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
