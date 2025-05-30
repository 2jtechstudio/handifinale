"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { COMPANY_NAME, COMPANY_PHONE } from "@/lib/constants";
import { X, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Set initial scroll state
    setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
  className={cn(
    "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white shadow-md py-3"
  )}
>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <div className="relative h-10 w-36">
              <Image 
                src="/logo.svg" 
                alt={COMPANY_NAME} 
                fill
                className={cn(
                  "object-contain transition-all duration-300",
                  pathname === "/" && !scrolled ? "brightness-0 invert" : "filter-none"
                )}
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                pathname === "/" && !scrolled
                  ? "text-white hover:text-white hover:bg-white/20"
                  : isActive(item.path)
                  ? "text-[#113065] bg-gray-100"
                  : "text-gray-700 hover:text-[#113065] hover:bg-gray-100"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button 
            asChild
            size="sm"
            className={cn(
              "ml-4 rounded-xl",
              pathname === "/" && !scrolled
                ? "bg-white text-[#113065] hover:bg-[#aad6ec]"
                : "bg-[#113065] text-white hover:bg-[#0f1056]"
            )}
          >
            <Link href="/contact">
              Get a Free Estimate
            </Link>
          </Button>
        </nav>

        {/* Phone Number - Desktop */}
        <div className="hidden md:flex items-center">
          <a 
            href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, '')}`}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              pathname === "/" && !scrolled
                ? "text-white hover:text-[#aad6ec]"
                : "text-[#113065] hover:text-[#0f1056]"
            )}
          >
            <Phone className="h-4 w-4" />
            <span>{COMPANY_PHONE}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-10 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={pathname === "/" && !scrolled ? "text-white" : "text-gray-900"} />
          ) : (
            <Menu className={pathname === "/" && !scrolled ? "text-white" : "text-gray-900"} />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-[#113065] z-40">
            <div className="flex flex-col items-center justify-center h-full">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-white text-xl font-medium transition-colors",
                    isActive(item.path)
                      ? "text-[#aad6ec]"
                      : "hover:text-[#aad6ec]"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-8">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-[#113065] hover:bg-[#aad6ec] rounded-xl"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get a Free Estimate
                  </Link>
                </Button>
              </div>
              <a 
                href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, '')}`}
                className="mt-6 flex items-center gap-2 text-white hover:text-[#aad6ec] transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="text-lg">{COMPANY_PHONE}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
