"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, ShoppingBag, Globe, Check } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LiquidGlass } from 'quick-liquid/react';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export function Header() {
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <>
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      <LiquidGlass 
        config={{ material: 'regular', chromaticAberration: 0.15 }}
        className="w-full max-w-4xl border border-white/20 dark:border-white/10 pointer-events-auto rounded-full shadow-none !shadow-none drop-shadow-none"
      >
        <div className="h-16 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity cursor-pointer">
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xl font-heading font-bold text-foreground tracking-tight">The Mall</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger 
              aria-label="Select language" 
              className={`${buttonVariants({ variant: "ghost", size: "icon" })} text-foreground hover:bg-foreground/10`}
            >
              <Globe className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              <DropdownMenuItem onClick={() => switchLocale('en')} className="flex justify-between cursor-pointer">
                English
                {locale === 'en' && <Check className="w-4 h-4" />}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('am')} className="flex justify-between cursor-pointer">
                አማርኛ (Amharic)
                {locale === 'am' && <Check className="w-4 h-4" />}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-foreground hover:bg-foreground/10"
          >
            <Sun className="w-5 h-5 hidden dark:block" />
            <Moon className="w-5 h-5 block dark:hidden" />
          </Button>
        </div>
      </div>
      </LiquidGlass>
    </div>
    </>
  );
}
