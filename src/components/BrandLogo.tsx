import { useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import originxIcon from "@/assets/originx-icon.png";

type BrandLogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src">;

const BrandLogo = ({ className, alt = "OriginX Labs logo icon", ...imgProps }: BrandLogoProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <img
      src={originxIcon}
      alt={alt}
      {...imgProps}
      className={cn(
        "object-contain bg-transparent",
        mounted && resolvedTheme === "dark"
          ? "invert brightness-200 contrast-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
          : "brightness-95 contrast-125 drop-shadow-[0_0_8px_rgba(0,0,0,0.22)]",
        className
      )}
    />
  );
};

export default BrandLogo;
