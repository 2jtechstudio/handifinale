import { Fragment } from "react";
import { ServiceDetail } from "@/components/layout/service-detail";
import { SERVICES } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";
import { Separator } from "@/components/ui/separator";

export const metadata = constructMetadata({
  title: "Our Services | H & I Construction LLC",
  description: "Explore our comprehensive construction services including excavation, demolition, land clearing, utility installation, foundation work, concrete, septic systems, and material delivery.",
  path: "services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#113065] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Construction Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive construction solutions for all your project needs. From initial excavation to final concrete work, we handle it all with expertise and care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {SERVICES.map((service, index) => (
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
      </section>

      {SERVICES.map((service, index) => (
        <Fragment key={service.id}>
          <ServiceDetail
            id={service.id}
            title={service.title}
            description={service.description}
            benefits={service.benefits}
            image={service.image}
            reversed={index % 2 !== 0}
            className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
          />
          {index < SERVICES.length - 1 && (
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