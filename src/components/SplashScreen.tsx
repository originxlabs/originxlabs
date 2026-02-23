import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import BrandLogo from "@/components/BrandLogo";
import { BRAND } from "@/config/brand";

interface SplashScreenProps {
  onComplete: () => void;
  minDisplayTime?: number;
}

const SplashScreen = ({ onComplete, minDisplayTime = 2500 }: SplashScreenProps) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsAnimating(false);
        onComplete();
      }, 600);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [onComplete, minDisplayTime]);

  if (!isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-600 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      } ${
        resolvedTheme === "dark" 
          ? "bg-gradient-to-br from-[hsl(240,20%,4%)] via-[hsl(250,25%,6%)] to-[hsl(260,20%,4%)]" 
          : "bg-gradient-to-br from-[hsl(220,30%,98%)] via-[hsl(230,25%,96%)] to-[hsl(240,30%,94%)]"
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div 
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]"
          style={{ animation: 'pulse 4s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]"
          style={{ animation: 'pulse 5s ease-in-out infinite', animationDelay: '1.5s' }}
        />
        
        {/* Animated grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Logo Container */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Premium Logo with Orbital Animations */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div 
            className="absolute -inset-8 rounded-full border border-primary/20"
            style={{ animation: 'spin 20s linear infinite' }}
          />
          
          {/* Middle pulsing ring */}
          <div 
            className="absolute -inset-5 rounded-full border-2 border-primary/30"
            style={{ animation: 'pulse 2s ease-in-out infinite' }}
          />
          
          {/* Inner glowing ring */}
          <div 
            className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"
            style={{ 
              animation: 'spin 8s linear infinite reverse',
              filter: 'blur(8px)'
            }}
          />
          
          {/* Logo container with glow */}
          <div className="relative">
            {/* Glow effect behind logo */}
            <div 
              className="absolute inset-0 bg-primary/30 rounded-full blur-2xl"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            />
            
            {/* Main logo */}
            <BrandLogo
              alt={`${BRAND.name} logo`}
              className="relative w-40 h-40 md:w-52 md:h-52"
              style={{ 
                animation: 'logoReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}
            />
          </div>
          
          {/* Orbiting dots */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${angle}deg) translateX(120px) translateY(-50%)`,
                animation: `orbit 6s linear infinite`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: '0 0 10px hsl(var(--primary))',
              }}
            />
          ))}
        </div>

        {/* Company Name with staggered reveal */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight overflow-hidden">
            <span className="flex">
              {"ORIGINX".split("").map((letter, i) => (
                <span
                  key={i}
                  className="inline-block text-gradient"
                  style={{
                    animation: 'letterReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    animationDelay: `${0.4 + i * 0.06}s`,
                    opacity: 0,
                    transform: 'translateY(100%)',
                  }}
                >
                  {letter}
                </span>
              ))}
              <span
                className="inline-block text-primary ml-3"
                style={{
                  animation: 'letterReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                  animationDelay: '0.9s',
                  opacity: 0,
                  transform: 'translateY(100%)',
                }}
              >
                {BRAND.name.split(" ")[1]}
              </span>
            </span>
          </h1>
          
          {/* Tagline with line animation */}
          <div className="relative overflow-hidden">
            <p 
              className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase font-medium"
              style={{
                animation: 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                animationDelay: '1.1s',
                opacity: 0,
                transform: 'translateY(20px)',
              }}
            >
              Deep Tech SaaS Company
            </p>
          </div>
          
          {/* Legal entity with fade */}
          <p 
            className="text-muted-foreground/50 text-xs tracking-wider"
            style={{
              animation: 'fadeIn 0.8s ease-out forwards',
              animationDelay: '1.4s',
              opacity: 0,
            }}
          >
            {BRAND.legalName}
          </p>
        </div>

        {/* Premium loading animation */}
        <div 
          className="flex items-center gap-3"
          style={{
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: '1.6s',
            opacity: 0,
          }}
        >
          <div className="relative w-48 h-1 bg-muted/30 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              style={{
                animation: 'loadingBar 1.5s ease-in-out forwards',
                animationDelay: '1.7s',
                width: '0%',
              }}
            />
          </div>
        </div>
      </div>

      {/* Custom keyframes */}
      <style>{`
        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(120px) translateY(-50%);
          }
          100% {
            transform: rotate(360deg) translateX(120px) translateY(-50%);
          }
        }
        
        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
