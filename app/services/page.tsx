import { Fragment } from "react";
import { ServiceDetail } from "@/components/layout/service-detail";
import { SERVICES } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const metadata = constructMetadata({
  title: "Our Services | H & I Construction LLC",
  description: "Explore our comprehensive construction services including excavation, demolition, land clearing, utility installation, foundation work, concrete, septic systems, and material delivery.",
  path: "services",
});

// Map service titles to images (same as homepage)
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

// Ensure "Construction" is included in SERVICES
const SERVICES_WITH_CONSTRUCTION = SERVICES.some(s => s.title === "Construction")
  ? SERVICES
  : [
      ...SERVICES,
      {
        id: "construction",
        title: "Construction",
        description: "Expert construction services for residential and commercial projects.",
        shortDesc: "Expert construction services for residential and commercial projects.",
        benefits: [
          "Comprehensive project management",
          "Experienced construction team",
          "Quality materials and workmanship",
        ],
      },
    ];

// Split into two rows: first 5, then the rest
const firstRow = SERVICES_WITH_CONSTRUCTION.slice(0, 5);
const secondRow = SERVICES_WITH_CONSTRUCTION.slice(5);

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#113065] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              OUR CONSTRUCTION SERVICES
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive construction solutions for all your project needs. From initial excavation to final concrete work, we handle it all with expertise and care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* --- New Social Media Projects Section --- */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#113065] mb-8">
              Stay up to date on our current projects shared on our social media pages
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {/* Instagram Tile */}
              <a
                href="https://www.instagram.com/handiconstructionllc/?fbclid=IwY2xjawKQiCtleHRuA2FlbQIxMABicmlkETFRb1JybkNYNHJpZ3lYM1Z0AR6Uf7dv-Gc2d0nx1YzdpgHnntd5IlLQduQY4StXl7MpU8nq5HwJ9NE6dlsoLA_aem_mboCjA-vi_SI_0rkZ_Ob-w"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/insta.png"
                    alt="Instagram"
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
              {/* Facebook Tile */}
              <a
                href="https://www.facebook.com/profile.php?id=100063801343662"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook"
                    fill
                    className="object-cover"
                  />
                </div>
              </a>
            </div>
          </div>
          {/* --- End Social Media Projects Section --- */}
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-wrap gap-4 justify-center">
              {firstRow.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-200 text-gray-800 hover:bg-[#aad6ec] hover:text-[#113065] transition-colors"
                >
                  {service.title}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {secondRow.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-200 text-gray-800 hover:bg-[#aad6ec] hover:text-[#113065] transition-colors"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {SERVICES_WITH_CONSTRUCTION.map((service, index) => (
        <Fragment key={service.id}>
          <ServiceDetail
            id={service.id}
            title={service.title}
            description={service.description}
            benefits={service.benefits}
            image={
              imageMap[service.title] ||
              `/images/${service.title.toLowerCase().replace(/[\s/&]+/g, "")}1.png`
            }
            reversed={false}
            className="bg-white"
          />
          {index < SERVICES_WITH_CONSTRUCTION.length - 1 && (
            <div className="container mx-auto px-4">
              <Separator />
            </div>
          )}
        </Fragment>
      ))}

      <section className="py-16 md:py-24 bg-[#113065] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your construction needs and get a free estimate for your project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#aad6ec] text-[#113065] rounded-xl text-lg font-medium hover:bg-white transition-colors"
          >
            Get Your Free Estimate
          </a>
        </div>
      </section>
    </>
  );
}