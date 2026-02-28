import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import cognixIcon from "@/assets/cognix-logo.png";
import qualyxIcon from "@/assets/qualyx-logo.png";
import traceflowIcon from "@/assets/traceflow-logo.png";
import opzenixIcon from "@/assets/opzenix-logo.png";
import proxinexIcon from "@/assets/proxinex-icon.svg";
import chronyxIcon from "@/assets/chronyx-icon.svg";
import cropxonIcon from "@/assets/cropxon/favicon-180.png";
import huminexLogo from "@/assets/Huminex_logo.png";
import originxOneLogo from "@/assets/originxone-logo.svg";

const productLogoMap: Record<string, string> = {
  cognix: cognixIcon,
  qualyx: qualyxIcon,
  traceflow: traceflowIcon,
  opzenix: opzenixIcon,
  proxinex: proxinexIcon,
  chronyx: chronyxIcon,
  cropxon: cropxonIcon,
  huminex: huminexLogo,
  "originx one": originxOneLogo,
  originxone: originxOneLogo,
};

interface ProductLogoProps {
  productId: string;
  className?: string;
  alt?: string;
}

const ProductLogo = ({ productId, className, alt }: ProductLogoProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const normalizedId = productId.trim().toLowerCase();
  const logoSrc = productLogoMap[normalizedId] ?? proxinexIcon;
  const isDark = mounted && resolvedTheme === "dark";
  const isChronyx = normalizedId === "chronyx";
  const isCognix = normalizedId === "cognix";
  const isOpzenix = normalizedId === "opzenix";
  const isQualyx = normalizedId === "qualyx";
  const isTraceflow = normalizedId === "traceflow";
  const isCropxon = normalizedId === "cropxon";
  const isHuminex = normalizedId === "huminex";
  const isOriginxOne = normalizedId === "originx one" || normalizedId === "originxone";
  const isFullBrandLogo = isCognix || isTraceflow || isOpzenix || isHuminex || isOriginxOne || isQualyx || isCropxon;
  const isHighDetailIcon = isCognix || isOpzenix || isTraceflow;
  const imageClass = isOriginxOne
    ? isDark
      ? "brightness-0 invert contrast-125 saturate-0"
      : "brightness-0 contrast-150 saturate-0"
    : isFullBrandLogo
    ? "brightness-100 contrast-100 saturate-100"
    : isChronyx
    ? isDark
      ? "brightness-110 contrast-110"
      : "brightness-[0.28] contrast-125"
    : isDark
      ? "brightness-0 invert contrast-125 saturate-0"
      : "brightness-0 contrast-150 saturate-0";

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md border overflow-hidden",
        isHuminex
          ? "bg-black border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          : isDark
          ? "bg-slate-900/70 border-white/30 shadow-[0_0_10px_rgba(255,255,255,0.14)]"
          : "bg-white border-slate-400/80 shadow-[0_2px_12px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      <img
        src={logoSrc}
        alt={alt || `${productId} logo`}
        className={cn(
          "w-full h-full object-contain",
          isHuminex ? "p-0.5 scale-100" : isFullBrandLogo ? "p-0 scale-105" : isHighDetailIcon ? "p-0.5 scale-110" : "p-1 scale-105",
          imageClass
        )}
      />
    </span>
  );
};

export default ProductLogo;
