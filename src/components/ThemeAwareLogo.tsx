import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeAwareLogoProps {
  darkLogo: string;
  lightLogo: string;
  alt: string;
  className?: string;
}

export const ThemeAwareLogo = ({ darkLogo, lightLogo, alt, className }: ThemeAwareLogoProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by showing nothing until mounted
  if (!mounted) {
    return <div className={className} />;
  }

  // Dark theme uses light logo, light theme uses dark logo
  const logoSrc = resolvedTheme === "dark" ? lightLogo : darkLogo;

  return (
    <img 
      src={logoSrc} 
      alt={alt} 
      className={className}
    />
  );
};

export default ThemeAwareLogo;
