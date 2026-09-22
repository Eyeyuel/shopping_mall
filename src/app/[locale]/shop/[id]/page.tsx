import { mockShops } from "@/data/mockShops";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/animations/PageTransition";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowLeft, Layers } from "lucide-react";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { ImageLoader } from "@/components/ImageLoader";
import { ShopGallery } from "@/components/ShopGallery";
import { LiquidGlass } from '@/components/LiquidGlassClient';

export default async function ShopDetails(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const shop = mockShops.find(s => s.id === params.id);
  
  if (!shop) {
    notFound();
  }

  const t = await getTranslations("Common");

  return (
    <PageTransition className="pb-20">
      {/* Signature Element: Cinematic Hero */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <ImageLoader 
            src={shop.heroImageUrl} 
            alt={shop.name} 
            priority
            containerClassName="absolute inset-0 w-full h-full" 
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 relative pb-10 w-full max-w-5xl">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mb-6 rounded-full bg-background/20 backdrop-blur-md hover:bg-background/40">
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Button>
          </Link>
          
          <FadeIn delay={0.2} className="flex flex-col md:flex-row gap-6 items-start md:items-end">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-2xl border-4 border-background overflow-hidden shrink-0 z-20 bg-muted">
              <ImageLoader 
                src={shop.logoUrl} 
                alt={`${shop.name} Logo`} 
                priority
                containerClassName="w-full h-full"
              />
            </div>
            <div className="flex-1 z-20">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="secondary" className="bg-primary/20 text-primary backdrop-blur-md border-none text-sm">
                  {shop.category}
                </Badge>
                {shop.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="backdrop-blur-md border-foreground/20 text-foreground/90">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-2 drop-shadow-lg text-foreground">
                {shop.name}
              </h1>
            </div>
            
            {/* New Location Badge replacing Get Directions */}
            <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 z-20 space-y-2">
              <LiquidGlass 
                config={{ material: 'regular', chromaticAberration: 0.2, dynamicLighting: true }}
                className="px-6 py-3 rounded-full flex items-center shadow-lg border border-primary/20 bg-primary/10"
              >
                <Layers className="w-5 h-5 mr-2 text-primary" />
                <span className="font-semibold text-primary">{shop.floor}</span>
              </LiquidGlass>
              <LiquidGlass 
                config={{ material: 'regular', chromaticAberration: 0.1 }}
                className="px-6 py-2 rounded-full flex items-center shadow-sm border border-border/40 bg-background/20"
              >
                <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{shop.shopNumber}</span>
              </LiquidGlass>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl mt-12 space-y-16">
        
        {/* About Section */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold font-heading">About {shop.name}</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {shop.description}
                </p>
                <p className="text-muted-foreground mt-4">
                  Visit us at <strong>{shop.shopNumber}</strong> on <strong>{shop.floor}</strong> to explore our full range of offerings. We are open during regular mall hours, providing a premium shopping experience tailored to you.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl shadow-sm border border-border/50 bg-card/30">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  {t("hours")}
                </h3>
                <p className="text-muted-foreground font-medium">{shop.hours}</p>
                <p className="text-xs text-muted-foreground mt-2">Open everyday including public holidays.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Media Gallery Section */}
        {shop.gallery && shop.gallery.length > 0 && (
          <FadeIn delay={0.6}>
            <h2 className="text-3xl font-bold font-heading mb-4">Gallery</h2>
            <ShopGallery gallery={shop.gallery} shopName={shop.name} heroImageUrl={shop.heroImageUrl} />
          </FadeIn>
        )}
      </div>
    </PageTransition>
  );
}
