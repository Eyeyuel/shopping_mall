"use client";
import { LiquidGlass } from 'quick-liquid/react';

import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Button } from "./ui/button";

const categories = ['All', 'Fashion', 'Electronics', 'Dining', 'Services', 'Entertainment'];

export function CategoryTabs({ selected, onSelect }: { selected: string, onSelect: (c: string) => void }) {
  return (
    <div className="w-full relative py-4 flex justify-center z-40">
      <LiquidGlass 
        config={{ material: 'regular', chromaticAberration: 0.15 }}
        className="w-full max-w-4xl rounded-full border border-white/20 dark:border-white/10 p-1 shadow-none !shadow-none drop-shadow-none"
      >
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-1 p-1">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className={`rounded-full px-6 py-2 h-auto transition-all ${
                  selected === category 
                    ? 'bg-primary/20 text-primary font-medium scale-100' 
                    : 'text-muted-foreground hover:text-foreground font-normal scale-95 hover:scale-100'
                }`}
                onClick={() => onSelect(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </LiquidGlass>
    </div>
  );
}
