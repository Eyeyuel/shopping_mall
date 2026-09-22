import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export function ShopCardSkeleton() {
  return (
    <Card className="overflow-hidden border-border/50 bg-card shadow-sm h-full">
      <div className="h-48 w-full overflow-hidden relative bg-muted">
        <Skeleton className="absolute inset-0 z-10 w-full h-full rounded-none" />
        <div className="absolute bottom-4 left-4 z-30 bg-background/90 p-2 rounded-lg shadow-lg">
          <Skeleton className="w-12 h-12 rounded-md" />
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Skeleton className="h-6 w-3/4 rounded-md" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <div className="space-y-2 mb-4 mt-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="flex items-center">
          <Skeleton className="h-4 w-1/3" />
        </div>
      </CardContent>
    </Card>
  );
}
