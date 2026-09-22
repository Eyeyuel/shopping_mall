"use client";

import { Shop } from "../types";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "../i18n/routing";
import { ImageLoader } from "./ImageLoader";
import { useTranslations } from "next-intl";

export function ShopCard({ shop, priority = false }: { shop: Shop, priority?: boolean }) {
  const t = useTranslations("Common");
  const tShop = useTranslations("Shops");
  return (
    <Link href={`/shop/${shop.id}`}>
      <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <Card className="p-0 overflow-hidden border-border/50 bg-card hover:border-primary/50 transition-colors cursor-pointer group shadow-sm hover:shadow-md">
          <div className="h-48 w-full overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-20 pointer-events-none" />
            <ImageLoader 
              src={shop.heroImageUrl} 
              alt={shop.name} 
              priority={priority}
              containerClassName="absolute inset-0 z-10"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              imageClassName="group-hover:scale-105 duration-500"
            />
            <div className="absolute bottom-4 left-4 z-30 bg-background/90 p-2 rounded-lg shadow-lg">
              <ImageLoader 
                src={shop.logoUrl} 
                alt={`${shop.name} logo`} 
                priority={priority}
                containerClassName="w-12 h-12 rounded-md"
                sizes="48px"
              />
            </div>
          </div>
          <CardContent className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold font-heading">{tShop(`${shop.id}.name`)}</h3>
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                {t(shop.category)}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {tShop(`${shop.id}.description`)}
            </p>
            <div className="flex items-center text-xs text-muted-foreground font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-primary/70" />
              {t("floor")} {shop.floor}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
