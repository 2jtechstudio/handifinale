import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";
import { 
  COMPANY_NAME,
  COMPANY_DESCRIPTION,
  COMPANY_YEAR_FOUNDED,
  COMPANY_INSTAGRAM,
  COMPANY_FACEBOOK,
  SERVICE_AREAS
} from "@/lib/constants";

export const metadata = constructMetadata({
  title: "About Us | H & I Construction LLC",
  description: "Learn about H & I Construction LLC, our history, values, and commitment to quality construction services in the Tri-Cities area.",
  path: "about",
});

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[#113065] shadow-md"
            : "bg-white/90 backdrop-blur-sm shadow"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/handilogo.webp" alt="H & I Construction Logo" width={40} height={40} />
            <span className={`font-bold text-xl transition-colors duration-300 ${scrolled ? "text-white" : "text-[#113065]"}`}>H & I Construction</span>
          </Link>
          <div className="flex items-center space-x-6">
            {/* Always render all nav links, never conditionally hide */}
            <Link href="/about" className={`transition-colors duration-300 ${scrolled ? "text-white hover:text-[#aad6ec]" : "text-[#113065] hover:text-[#113065]/70"}`}>About</Link>
            <Link href="/services" className={`transition-colors duration-300 ${scrolled ? "text-white hover:text-[#aad6ec]" : "text-[#113065] hover:text-[#113065]/70"}`}>Services</Link>
            <Link href="/projects" className={`transition-colors duration-300 ${scrolled ? "text-white hover:text-[#aad6ec]" : "text-[#113065] hover:text-[#113065]/70"}`}>Projects</Link>
            <Link href="/contact" className={`transition-colors duration-300 ${scrolled ? "text-white hover:text-[#aad6ec]" : "text-[#113065] hover:text-[#113065]/70"}`}>Contact</Link>
            {/* Add phone number */}
            <a
              href="tel:5095911632"
              className={`transition-colors duration-300 font-semibold ${
                scrolled
                  ? "text-white hover:text-[#aad6ec]"
                  : "text-[#113065] hover:text-[#113065]/70"
              }`}
            >
              (509) 591-1632
            </a>
            <Link href="/contact">
              <button className={`ml-4 px-4 py-2 rounded-xl text-lg font-semibold transition-colors duration-300 ${
                scrolled
                  ? "bg-[#aad6ec] text-[#113065] hover:bg-white hover:text-[#113065]"
                  : "bg-[#113065] text-white hover:bg-[#aad6ec] hover:text-[#113065]"
              }`}>
                Get Your Free Estimate
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <section className="bg-[#113065] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About H & I Construction
            </h1>
            <p className="text-xl text-gray-200">
              Your trusted construction partner in Eastern Washington since {COMPANY_YEAR_FOUNDED}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
              At H&I Construction LLC, we bring over 11 years of hands-on experience in excavation, general contracting, demolition, and development. Our expertise spans across commercial, residential, and public works projects, ensuring that we can handle jobs of any scale with precision and professionalism. Based in Kennewick, we take pride in serving our local community and the surrounding areas with high-quality earthwork and construction services.
              </p>
              <p className="text-gray-700 mb-4">
              Founded on hard work, integrity, and a commitment to excellence, H&I Construction LLC is more than just a construction company—we are a family-driven business that values strong relationships and customer satisfaction. Our team is skilled in site preparation, land clearing, grading, utility installation, roadwork, foundation excavation, and demolition services. Whether you’re a homeowner or developer we have the expertise to bring your project to life efficiently and effectively.
              </p>
              <p className="text-gray-700 mb-6">
              Beyond our work, we are passionate about giving back to the community and supporting the next generation. We believe in making a difference, not just through the projects we complete, but also by helping those around us.

When you choose H&I Construction LLC, you’re not just hiring a contractor you’re partnering with a team that truly cares about your project, your vision, and the community we all share.
              </p>
              
              <div className="flex space-x-4 mb-6">
                <a 
                  href={COMPANY_INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#113065] text-white rounded-lg hover:bg-[#0f1056] transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  <span>@handiconstructionllc</span>
                </a>
                <a 
                  href={COMPANY_FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#113065] text-white rounded-lg hover:bg-[#0f1056] transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://i.ibb.co/wFsN1DFD/IMG-5111.jpg"
                alt="About Us Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These core principles guide our work and define our approach to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-[#aad6ec] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#113065]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Quality
              </h3>
              <p className="text-gray-700 text-center">
                We never compromise on quality. Our work meets the highest standards in the industry, using premium materials and expert craftsmanship.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-[#aad6ec] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#113065]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Reliability
              </h3>
              <p className="text-gray-700 text-center">
                We deliver on our promises. When we commit to a timeline and budget, you can count on us to meet those commitments.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-[#aad6ec] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#113065]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Customer Focus
              </h3>
              <p className="text-gray-700 text-center">
                Your satisfaction is our priority. We listen to your needs, communicate clearly, and work to exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We proudly serve the following communities in Eastern Washington:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <div 
                key={area}
                className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#113065] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#113065] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your construction needs and get a free estimate.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-[#aad6ec] text-[#113065] hover:bg-white hover:text-[#113065] rounded-xl text-lg"
          >
            <Link href="/contact">
              Get Your Free Estimate
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}