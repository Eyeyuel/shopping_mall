"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, ShoppingBag, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { LiquidGlass } from 'quick-liquid/react';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <>
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      <LiquidGlass 
        config={{ material: 'regular', chromaticAberration: 0.15 }}
        className="w-full max-w-4xl border border-white/20 dark:border-white/10 pointer-events-auto rounded-full shadow-none !shadow-none drop-shadow-none"
      >
        <div className="h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-primary">
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xl font-heading font-bold text-foreground tracking-tight">The Mall</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Toggle language">
            <Globe className="w-5 h-5 text-muted-foreground" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="w-5 h-5 hidden dark:block text-muted-foreground" />
            <Moon className="w-5 h-5 block dark:hidden text-muted-foreground" />
          </Button>
        </div>
      </div>
      </LiquidGlass>
    </div>
    <div className="h-24 w-full" />
    </>
  );
}
