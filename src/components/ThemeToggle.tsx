import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className="flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-2 py-1 backdrop-blur-sm">
      <Sun className={`h-3.5 w-3.5 transition-colors ${isDark ? "text-muted-foreground" : "text-foreground"}`} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle light and dark theme"
      />
      <Moon className={`h-3.5 w-3.5 transition-colors ${isDark ? "text-foreground" : "text-muted-foreground"}`} />
    </div>
  );
}
