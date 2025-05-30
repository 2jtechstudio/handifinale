import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  className?: string;
  imageUrl?: string;
  featured?: boolean;
}

export function ServiceCard({
  id,
  title,
  description,
  icon,
  className,
  imageUrl,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl",
        featured ? "col-span-full md:col-span-2" : "",
        className
      )}
    >
      <div className="flex h-full flex-col p-6">
        {imageUrl ? (
          <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : null}
        
        <div className="flex items-center mb-4">
          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#113065]/10">
            <Image
              src={icon}
              alt={`${title} icon`}
              width={24}
              height={24}
              className="text-[#113065]"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        
        <p className="mb-4 text-gray-600 flex-grow">{description}</p>
        
        <Button
          asChild
          variant="ghost"
          className="group mt-2 p-0"
        >
          <Link href={`/services#${id}`}>
            <span className="text-[#113065] group-hover:text-[#0f1056]">Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}