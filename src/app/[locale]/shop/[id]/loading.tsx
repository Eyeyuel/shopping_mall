import { PageTransition } from "@/components/animations/PageTransition";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShopLoading() {
  return (
    <PageTransition className="pb-20">
      {/* Cinematic Hero Skeleton */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-end">
        <Skeleton className="absolute inset-0 z-0 rounded-none bg-muted/50" />

        <div className="container mx-auto px-4 z-10 relative pb-10 w-full max-w-5xl">
          <Button variant="ghost" size="icon" className="mb-6 rounded-full bg-background/20 backdrop-blur-md">
            <ArrowLeft className="w-5 h-5 text-foreground/50" />
          </Button>
          
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-background overflow-hidden shrink-0">
              <Skeleton className="w-full h-full rounded-none" />
            </div>
            <div className="flex-1 w-full space-y-4 mb-2">
              <div className="flex flex-wrap gap-2 mb-3">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
              <Skeleton className="h-10 md:h-14 w-3/4 max-w-md rounded-lg" />
            </div>
            
            <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 z-20 space-y-2">
              <Skeleton className="h-12 w-32 rounded-full" />
              <Skeleton className="h-10 w-24 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid Skeleton */}
      <div className="container mx-auto px-4 max-w-5xl mt-12 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="border-b border-border/50 pb-2">
              <Skeleton className="h-8 w-32 rounded-md" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[95%]" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-md" />
              </div>
              <Skeleton className="h-4 w-full" />
            </div>
            
            <div className="glass-panel p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-6 w-32 rounded-md" />
              </div>
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>

        {/* Gallery Skeleton */}
        <div>
          <Skeleton className="h-10 w-40 rounded-md mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            <Skeleton className="rounded-2xl md:col-span-2 md:row-span-2 w-full h-full" />
            <Skeleton className="rounded-2xl w-full h-full" />
            <Skeleton className="rounded-2xl w-full h-full" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
