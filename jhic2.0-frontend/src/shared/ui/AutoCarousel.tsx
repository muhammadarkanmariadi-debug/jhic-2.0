"use client";

import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AutoCarouselProps {
  children: React.ReactNode;
  autoScroll?: boolean;
  interval?: number;
  scrollAmount?: number;
  showButtons?: boolean;
  className?: string;
  itemContainerClassName?: string;
}

export function AutoCarousel({
  children,
  autoScroll = true,
  interval = 3000,
  scrollAmount = 320,
  showButtons = true,
  className = "",
  itemContainerClassName = "gap-6",
}: AutoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoScroll || isHovered) return;

    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached the end, scroll back to start smoothly
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, interval);

    return () => clearInterval(timer);
  }, [autoScroll, interval, scrollAmount, isHovered]);

  const scrollLeftBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRightBtn = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div 
      className={`relative group w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ${itemContainerClassName}`}
      >
        {children}
      </div>

      {showButtons && (
        <>
          <button
            onClick={scrollLeftBtn}
            className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-50 hover:text-accent transition-colors z-10 opacity-0 group-hover:opacity-100 lg:flex hidden"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollRightBtn}
            className="absolute top-1/2 -translate-y-1/2 -right-5 w-10 h-10 rounded-full bg-white shadow-md border border-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-50 hover:text-accent transition-colors z-10 opacity-0 group-hover:opacity-100 lg:flex hidden"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
}
