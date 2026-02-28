import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/components/ThemeProvider";
import OriginXChatbot from "@/components/OriginXChatbot";
import SplashScreen from "@/components/SplashScreen";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Cognix from "./pages/products/Cognix";
import Qualyx from "./pages/products/Qualyx";
import Traceflow from "./pages/products/Traceflow";
import Chronyx from "./pages/products/Chronyx";
import Huminex from "./pages/products/Huminex";
import OriginxOne from "./pages/products/OriginxOne";
import Opzenix from "./pages/products/Opzenix";
import Proxinex from "./pages/products/Proxinex";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Leadership from "./pages/Leadership";
import About from "./pages/About";
import Consulting from "./pages/Consulting";
import Trust from "./pages/Trust";
import Press from "./pages/Press";
import Cropxon from "./pages/Cropxon";
import NewstackPage from "./pages/Newstack";
import StackcraftPage from "./pages/Stackcraft";
import ZenithPage from "./pages/Zenith";
import ServicesPage from "./pages/Services";
import FinioraaPage from "./pages/services/Finioraa";
import CareerscraftPage from "./pages/services/Careerscraft";
import GroovifyPage from "./pages/services/Groovify";
import ConvertixPage from "./pages/services/Convertix";

// Platform pages
import Architecture from "./pages/platform/Architecture";
import Intelligence from "./pages/platform/Intelligence";
import Autonomy from "./pages/platform/Autonomy";
import Security from "./pages/platform/Security";
import Integrations from "./pages/platform/Integrations";
import HuminexPlatform from "./pages/platform/Huminex";

// Solutions pages
import EnterpriseAI from "./pages/solutions/EnterpriseAI";
import AutonomousOps from "./pages/solutions/AutonomousOps";
import RegulatedIndustries from "./pages/solutions/RegulatedIndustries";
import ScaleReliability from "./pages/solutions/ScaleReliability";
import DigitalExperience from "./pages/solutions/DigitalExperience";

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Route change splash screen component
const RouteChangeSplash = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const [showSplash, setShowSplash] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }

    if (pathname !== prevPath) {
      setShowSplash(true);
      setPrevPath(pathname);
    }
  }, [pathname, prevPath, isFirstLoad]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} minDisplayTime={1200} />}
      {children}
    </>
  );
};

const AppContent = () => {
  const [showInitialSplash, setShowInitialSplash] = useState(true);

  return (
    <>
      {showInitialSplash && (
        <SplashScreen 
          onComplete={() => setShowInitialSplash(false)} 
          minDisplayTime={2500} 
        />
      )}
      <RouteChangeSplash>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cropxon" element={<Cropxon />} />
          <Route path="/newstack" element={<NewstackPage />} />
          <Route path="/stackcraft" element={<StackcraftPage />} />
          <Route path="/zenith" element={<ZenithPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/finioraa" element={<FinioraaPage />} />
          <Route path="/services/careerscraft" element={<CareerscraftPage />} />
          <Route path="/services/convertix" element={<ConvertixPage />} />
          <Route path="/services/groovify" element={<GroovifyPage />} />
          
          {/* Products */}
          <Route path="/products/cognix" element={<Cognix />} />
          <Route path="/products/qualyx" element={<Qualyx />} />
          <Route path="/products/traceflow" element={<Traceflow />} />
          <Route path="/products/chronyx" element={<Chronyx />} />
          <Route path="/products/huminex" element={<Huminex />} />
          <Route path="/products/originx-one" element={<OriginxOne />} />
          <Route path="/products/opzenix" element={<Opzenix />} />
          <Route path="/products/proxinex" element={<Proxinex />} />
          
          {/* Platform */}
          <Route path="/platform/architecture" element={<Architecture />} />
          <Route path="/platform/intelligence" element={<Intelligence />} />
          <Route path="/platform/autonomy" element={<Autonomy />} />
          <Route path="/platform/security" element={<Security />} />
          <Route path="/platform/integrations" element={<Integrations />} />
          <Route path="/platform/huminex" element={<HuminexPlatform />} />
          
          {/* Solutions */}
          <Route path="/solutions/enterprise" element={<EnterpriseAI />} />
          <Route path="/solutions/autonomous" element={<AutonomousOps />} />
          <Route path="/solutions/regulated" element={<RegulatedIndustries />} />
          <Route path="/solutions/scale" element={<ScaleReliability />} />
          <Route path="/solutions/experience" element={<DigitalExperience />} />
          
          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/press" element={<Press />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Legal */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RouteChangeSplash>
      <OriginXChatbot />
    </>
  );
};

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ThemeProvider>
);

export default App;
