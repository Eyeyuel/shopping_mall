"use client";

import { useState } from "react";
import { ImageLoader } from "@/components/ImageLoader";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { Play } from "lucide-react";
import { LiquidGlass } from 'quick-liquid/react';

interface Media {
  type: 'image' | 'video';
  url: string;
}

export function ShopGallery({ gallery, shopName, heroImageUrl }: { gallery: Media[], shopName: string, heroImageUrl: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!gallery || gallery.length === 0) return null;

  const slides = gallery.map(media => {
    if (media.type === 'video') {
      return {
        type: "youtube" as const,
        videoId: media.url
      };
    }
    return { src: media.url, alt: shopName };
  });

  const handleOpen = (mediaIndex: number) => {
    setIndex(mediaIndex);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {gallery.map((media, i) => (
          <div 
            key={i} 
            className={`relative rounded-2xl overflow-hidden shadow-sm group bg-muted cursor-pointer ${
              i === 0 && media.type === 'video' ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => handleOpen(i)}
          >
            {media.type === 'video' ? (
              <>
                <ImageLoader 
                  src={`https://img.youtube.com/vi/${media.url}/hqdefault.jpg`}
                  alt={`${shopName} video thumbnail`}
                  priority={true}
                  containerClassName="w-full h-full absolute inset-0"
                  imageClassName="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <LiquidGlass 
                    config={{ material: 'regular', chromaticAberration: 0.15 }}
                    liquidPress={{ scale: 0.85, squish: 0.1 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform"
                  >
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </LiquidGlass>
                </div>
              </>
            ) : (
              <ImageLoader 
                src={media.url}
                alt={`${shopName} gallery image ${i}`}
                containerClassName="w-full h-full"
                imageClassName="group-hover:scale-105 transition-transform duration-700"
              />
            )}
            {media.type !== 'video' && (
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        className={index === 0 ? "hide-video-zoom" : ""}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
        slides={slides}
        plugins={[Zoom]}
        carousel={{ finite: false }} // Enables infinite looping
        animation={{ fade: 250 }}
        controller={{ closeOnBackdropClick: true }}
        render={{
          slide: ({ slide }) => {
            if (slide.type === "youtube" && 'videoId' in slide) {
              return (
                <div className="w-full h-full relative pointer-events-auto bg-black">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=1&rel=0&loop=1&playlist=${slide.videoId}`}
                    title="YouTube video player"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
              );
            }
            return undefined;
          }
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-video-zoom button[aria-label="Zoom in"],
        .hide-video-zoom button[aria-label="Zoom out"] {
          display: none !important;
        }
      `}} />
    </>
  );
}
