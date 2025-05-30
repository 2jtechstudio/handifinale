"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  className?: string;
  overlayOpacity?: number;
}

export function Hero({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/contact",
  imageUrl = "https://images.pexels.com/photos/259966/pexels-photo-259966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  className,
  overlayOpacity = 0.5,
}: HeroProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={imageUrl}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black to-gray-900"
          style={{ opacity: overlayOpacity }}
        ></div>
      </div>

      <div 
        className={cn(
          "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center",
          "transition-all duration-500 ease-in-out transform",
          scrolled ? "translate-y-4 opacity-90" : "translate-y-0 opacity-100"
        )}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {ctaText && (
          <Button 
            asChild
            size="lg" 
            className="bg-[#aad6ec] text-[#113065] hover:bg-[#113065] hover:text-white transition-colors rounded-2xl text-lg px-8 py-6 font-medium"
          >
            <Link href={ctaLink}>
              <span>{ctaText}</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}