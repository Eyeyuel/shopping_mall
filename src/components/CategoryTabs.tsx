"use client";
import { LiquidGlass } from '@/components/LiquidGlassClient';
import { useTranslations } from 'next-intl';

import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Button } from "./ui/button";

const categories = ["All", "Fashion", "Electronics", "Dining", "Entertainment", "Services", "Beauty"];

export function CategoryTabs({ selected, onSelect }: { selected: string, onSelect: (c: string) => void }) {
  const t = useTranslations("Common");

  return (
    <div className="w-full relative py-4 flex justify-center z-40">
      <LiquidGlass 
        config={{ material: 'regular', chromaticAberration: 0.15 }}
        className="w-full max-w-4xl rounded-full border border-white/20 dark:border-white/10 p-1 shadow-none !shadow-none drop-shadow-none"
      >
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-1 p-1">
            {categories.map((category) => {
              const isSelected = selected === category;
              
              if (isSelected) {
                return (
                  <button key={category} onClick={() => onSelect(category)} className="outline-none focus:outline-none flex items-center h-10">
                    <LiquidGlass 
                      config={{ material: 'regular', chromaticAberration: 0.5, dynamicLighting: true }}
                      className="rounded-full px-6 h-10 border border-primary/40 bg-primary/20 dark:bg-primary/30 flex items-center justify-center transition-all scale-100 !shadow-none drop-shadow-none"
                    >
                      <span className="text-primary font-bold">{t(category)}</span>
                    </LiquidGlass>
                  </button>
                );
              }

              return (
                <Button
                  key={category}
                  variant="ghost"
                  className="rounded-full px-6 h-10 transition-all text-muted-foreground hover:text-foreground font-normal scale-95 hover:scale-100"
                  onClick={() => onSelect(category)}
                >
                  {t(category)}
                </Button>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </LiquidGlass>
    </div>
  );
}
