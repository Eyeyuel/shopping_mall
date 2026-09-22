"use client";

import { useState, useEffect } from "react";
import { mockShops } from "@/data/mockShops";
import { ShopCard } from "@/components/ShopCard";
import { CategoryTabs } from "@/components/CategoryTabs";
import { StaggerGrid, StaggerItem } from "@/components/animations/StaggerGrid";
import { FadeIn } from "@/components/animations/FadeIn";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { LiquidGlass } from "@/components/LiquidGlassClient";
import { useTranslations } from "next-intl";
import { Skeleton } from "@/components/ui/skeleton";
import { ShopCardSkeleton } from "@/components/ShopCardSkeleton";

export default function Home() {
  const t = useTranslations("Common");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredShops = mockShops.filter(shop => {
    const matchesSearch = shop.name.toLowerCase().includes(search.toLowerCase()) || 
                          shop.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === "All" || shop.category === category;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...Array.from(new Set(mockShops.map(shop => shop.category)))];

  return (
    <div className="container mx-auto px-4 pt-28 pb-8 max-w-7xl">
      <FadeIn className="mb-8 space-y-6">
        <div className="relative max-w-2xl mx-auto">
          <LiquidGlass 
            config={{ material: 'regular', chromaticAberration: 0.15 }}
            className="rounded-full !shadow-none drop-shadow-none border border-white/20 dark:border-white/10 bg-card/20"
          >
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input 
              type="text" 
              placeholder={t("searchPlaceholder")}
              className="w-full h-14 pl-12 pr-4 rounded-full bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none text-lg relative z-10"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </LiquidGlass>
        </div>
        
        <CategoryTabs 
          selected={category} 
          onSelect={setCategory} 
        />
      </FadeIn>

      <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredShops.length > 0 ? (
          filteredShops.map((shop, index) => (
            <StaggerItem key={shop.id}>
              <ShopCard shop={shop} priority={index < 4} />
            </StaggerItem>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            {t("noResults")}
          </div>
        )}
      </StaggerGrid>
    </div>
  );
}
