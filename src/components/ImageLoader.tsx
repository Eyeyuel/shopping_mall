"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageLoaderProps {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}

export function ImageLoader({ src, alt, containerClassName, imageClassName, sizes, priority = false }: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted", !isLoaded && "animate-pulse", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover transition-all duration-700 ease-in-out",
          !isLoaded ? "opacity-0 blur-xl scale-110" : "opacity-100 blur-0 scale-100",
          imageClassName
        )}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
