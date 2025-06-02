import { Hero } from "@/components/ui/hero";
import { SERVICES as ORIGINAL_SERVICES } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const SERVICES = [
    ...ORIGINAL_SERVICES,
    ...(!ORIGINAL_SERVICES.some(s => s.title === "Construction")
      ? [{
          id: "construction",
          title: "Construction",
          shortDesc: "Expert construction services for residential and commercial projects.",
        }]
      : [])
  ];

  const imageMap: Record<string, string> = {
    "Concrete": "/images/concrete1.png",
    "Construction": "/images/construction1.png",
    "Excavation": "/images/excavation1.png",
    "Foundation": "/images/foundation1.png",
    "Foundation Work": "/images/foundation1.png",
    "Landclearing": "/images/landclearing1.png",
    "Land Clearing / Grading": "/images/landclearing1.png",
    "Land Clearing": "/images/landclearing1.png",
    "Land Clearing & Grading": "/images/landclearing1.png",
    "Demolition": "/images/demolition1.png",
    "demolition": "/images/demolition1.png",
    "Septic Sewer": "/images/septic1.png",
    "Septic/Sewer": "/images/septic1.png",
    "Septic & Sewer": "/images/septic1.png",
    "Rock and Sand Delivery": "/images/rockandsanddelivery1.png",
    "Rock/Sand Delivery": "/images/rockandsanddelivery1.png",
    "Rock & Sand Delivery": "/images/rockandsanddelivery1.png",
    "rock and sand delivery": "/images/rockandsanddelivery1.png",
    "Utility Installation": "/images/utility1.png",
  };

  return (
    <>
      {/* --- Enhanced Hero Section --- */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-white overflow-hidden">
        <Image
          src="/images/header.png"
          alt="Construction site aerial view"
          fill
          className="object-cover object-center z-0"
          priority
        />
        {/* Navy overlay, half as transparent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#113065]/40 via-[#113065]/20 to-[#113065]/10 z-10" />
        <div className="relative z-20 w-full flex justify-center">
          <div className="max-w-2xl w-full mx-4 md:mx-0 bg-white rounded-2xl shadow-xl px-8 py-10 md:py-14 flex flex-col items-center animate-fade-in border border-gray-100">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#113065] text-center mb-4 tracking-tight drop-shadow-sm">
              H&amp;I CONSTRUCTION LLC
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 text-center mb-8 font-medium">
              Providing professional construction services for residential and commercial projects throughout Eastern Washington.
            </p>
            <Button asChild size="lg" className="bg-[#113065] hover:bg-[#0f1056] text-white rounded-xl px-8 py-4 text-lg font-semibold shadow-md transition">
              <Link href="/contact">
                Get Your Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* --- End Enhanced Hero Section --- */}

      {/* Our Construction Services - navy background, white text */}
      <section className="py-16 md:py-24 bg-[#113065]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              OUR CONSTRUCTION SERVICES
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              From excavation to foundation work, we provide comprehensive construction services to meet all your project needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              let imageSrc = imageMap[service.title];
              if (!imageSrc) {
                const fallback = `/images/${service.title.toLowerCase().replace(/[\s/&]+/g, "")}1.png`;
                imageSrc = fallback;
              }
              return (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-white hover:bg-[#aad6ec] text-[#113065] rounded-xl">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Construction Services - white background, navy text */}
      <section className="py-16 md:py-24 bg-white text-[#113065]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quality Construction Services in Eastern Washington
            </h2>
            <p className="text-xl mb-8 text-[#113065]">
              With years of experience and a commitment to quality, we're the trusted choice for construction projects throughout the Tri-Cities area.
            </p>
            <Button asChild size="lg" className="bg-[#113065] text-white hover:bg-[#0f1056] rounded-xl text-lg">
              <Link href="/contact">
                Get Your Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose H & I Construction - navy background, white text */}
      <section className="py-16 md:py-24 bg-[#113065] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose H & I Construction?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <span className="text-[#113065] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Experienced Professionals</h3>
                    <p className="text-gray-200">Our team brings years of construction experience to every project we undertake.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <span className="text-[#113065] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quality Workmanship</h3>
                    <p className="text-gray-200">We pride ourselves on delivering high-quality results that stand the test of time.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <span className="text-[#113065] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reliable Service</h3>
                    <p className="text-gray-200">Count on us to complete your project on time and within budget.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <span className="text-[#113065] font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Customer Satisfaction</h3>
                    <p className="text-gray-200">Our success is measured by the satisfaction of our clients and the quality of our work.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl">
              <Image
                src="/whychooseus.jpeg"
                alt="Why choose us image"
                fill
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}