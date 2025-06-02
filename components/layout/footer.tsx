import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  COMPANY_NAME, 
  COMPANY_DESCRIPTION, 
  COMPANY_PHONE, 
  COMPANY_EMAIL, 
  COMPANY_ADDRESS,
  COMPANY_INSTAGRAM,
  COMPANY_FACEBOOK,
  COMPANY_YEAR_FOUNDED,
  SERVICE_AREAS
} from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-[#113065]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="relative h-12 w-40 mb-4">
              <Image 
                src="/logo.svg" 
                alt={COMPANY_NAME} 
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-600 max-w-xs">
              {COMPANY_DESCRIPTION}
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href={COMPANY_INSTAGRAM} 
                target="_blank" 
                rel="noreferrer"
                className="text-[#113065] hover:text-[#aad6ec] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href={COMPANY_FACEBOOK} 
                target="_blank" 
                rel="noreferrer"
                className="text-[#113065] hover:text-[#aad6ec] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="text-gray-600 hover:text-[#113065] transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-gray-600 hover:text-[#113065] transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-gray-600 hover:text-[#113065] transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-gray-600 hover:text-[#113065] transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <span className="text-gray-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#aad6ec]" />
                <span className="text-gray-600">{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-[#aad6ec]" />
                <a 
                  href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, '')}`}
                  className="text-gray-600 hover:text-[#113065] transition-colors"
                >
                  {COMPANY_PHONE}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-[#aad6ec]" />
                <a 
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-gray-600 hover:text-[#113065] transition-colors"
                >
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
            <Button 
              asChild
              className="mt-6 bg-[#113065] text-white hover:bg-[#aad6ec] rounded-xl"
            >
              <Link href="/contact">
                Get a Free Estimate
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} {COMPANY_NAME}. Serving the Tri-Cities area since {COMPANY_YEAR_FOUNDED}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}