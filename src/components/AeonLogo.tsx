import { useTheme } from "next-themes";

interface AeonLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const AeonLogo = ({ className = "", size = "md", animated = true }: AeonLogoProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  const sizeMap = {
    sm: { width: 40, height: 46 },
    md: { width: 64, height: 74 },
    lg: { width: 96, height: 110 },
    xl: { width: 128, height: 148 },
  };
  
  const { width, height } = sizeMap[size];

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animated ? "transition-transform duration-300 hover:scale-110" : ""}
      >
        <defs>
          {/* Premium metallic gradient for dark mode */}
          <linearGradient id="aeonGradientDark" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="25%" stopColor="#E8E8E8" stopOpacity="1" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="75%" stopColor="#C0C0C0" stopOpacity="1" />
            <stop offset="100%" stopColor="#E0E0E0" stopOpacity="1" />
          </linearGradient>
          
          {/* Premium dark gradient for light mode */}
          <linearGradient id="aeonGradientLight" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1a1a2e" stopOpacity="1" />
            <stop offset="25%" stopColor="#16213e" stopOpacity="1" />
            <stop offset="50%" stopColor="#0f0f1a" stopOpacity="1" />
            <stop offset="75%" stopColor="#1a1a2e" stopOpacity="1" />
            <stop offset="100%" stopColor="#0d0d14" stopOpacity="1" />
          </linearGradient>
          
          {/* Accent gradient */}
          <linearGradient id="aeonAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(250, 80%, 60%)" />
            <stop offset="100%" stopColor="hsl(280, 70%, 55%)" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="aeonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Inner shadow for depth */}
          <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feComponentTransfer in="SourceAlpha">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur stdDeviation="2" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feFlood floodColor={isDark ? "#000000" : "#ffffff"} floodOpacity="0.5" result="color" />
            <feComposite in2="offsetblur" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode />
            </feMerge>
          </filter>
        </defs>
        
        {/* Outer glow layer */}
        {animated && (
          <polygon
            points="50,5 95,100 5,100"
            fill="none"
            stroke="url(#aeonAccent)"
            strokeWidth="1"
            opacity="0.3"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
        )}
        
        {/* Main triangle - Premium metallic */}
        <polygon
          points="50,8 92,98 8,98"
          fill={isDark ? "url(#aeonGradientDark)" : "url(#aeonGradientLight)"}
          filter="url(#innerShadow)"
        />
        
        {/* Inner triangle cutout for depth */}
        <polygon
          points="50,35 72,80 28,80"
          fill={isDark ? "hsl(240, 20%, 6%)" : "hsl(220, 30%, 96%)"}
          opacity="0.95"
        />
        
        {/* Inner glow ring */}
        <polygon
          points="50,38 70,78 30,78"
          fill="none"
          stroke="url(#aeonAccent)"
          strokeWidth="1.5"
          opacity={isDark ? "0.6" : "0.4"}
        />
        
        {/* Center eye/core */}
        <circle
          cx="50"
          cy="62"
          r="8"
          fill="url(#aeonAccent)"
          filter="url(#aeonGlow)"
          className={animated ? "animate-pulse" : ""}
          style={{ animationDuration: '2s' }}
        />
        
        {/* Core highlight */}
        <circle
          cx="48"
          cy="60"
          r="2"
          fill={isDark ? "#ffffff" : "#000000"}
          opacity="0.6"
        />
        
        {/* Top edge highlight */}
        <line
          x1="50"
          y1="8"
          x2="92"
          y2="98"
          stroke={isDark ? "#ffffff" : "#000000"}
          strokeWidth="1"
          opacity="0.2"
        />
        
        {/* Subtle edge accent */}
        <line
          x1="8"
          y1="98"
          x2="50"
          y2="8"
          stroke="url(#aeonAccent)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      </svg>
      
      {/* Ambient glow behind logo */}
      {animated && (
        <div 
          className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"
          style={{ animation: 'pulse 3s ease-in-out infinite' }}
        />
      )}
    </div>
  );
};

export default AeonLogo;
