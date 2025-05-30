import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  reversed?: boolean;
  className?: string;
}

export function ServiceDetail({
  id,
  title,
  description,
  benefits,
  image,
  reversed = false,
  className,
}: ServiceDetailProps) {
  return (
    <div
      id={id}
      className={cn(
        "py-16 scroll-mt-20",
        className
      )}
    >
      <div className={cn(
        "container mx-auto px-4",
        "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center",
        reversed && "md:flex md:flex-row-reverse"
      )}>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-700 mb-6">{description}</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Benefits:</h3>
          <ul className="space-y-2 mb-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#113065] mr-2">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            asChild
            className="mt-2 bg-[#113065] hover:bg-[#0f1056] text-white rounded-xl"
          >
            <Link href="/contact">
              Request a Quote
            </Link>
          </Button>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl shadow-lg h-64 md:h-80 lg:h-96">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}