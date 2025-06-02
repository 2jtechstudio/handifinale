import Image from "next/image";
import Link from "next/link";
import { COMPANY_YEAR_FOUNDED, COMPANY_INSTAGRAM, COMPANY_FACEBOOK, SERVICE_AREAS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
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
                <br /><br />
                When you choose H&I Construction LLC, you’re not just hiring a contractor you’re partnering with a team that truly cares about your project, your vision, and the community we all share.
              </p>
              <div className="flex space-x-4 mb-6">
                <a 
                  href={COMPANY_INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#113065] text-white rounded-lg hover:bg-[#0f1056] transition-colors"
                >
                  <span>Instagram</span>
                </a>
                <a 
                  href={COMPANY_FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#113065] text-white rounded-lg hover:bg-[#0f1056] transition-colors"
                >
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

      {/* --- Built on Community section (moved above Our Values) --- */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built on Community
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We’re proud to support and give back to the communities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Tile 1 */}
            <div className="flex flex-col items-center group transition-transform duration-300 hover:scale-105">
              <div className="relative h-56 w-full flex items-center justify-center">
                <Image
                  src="/images/basketball.png"
                  alt="Mid Columbia Hoops Basketball Tournament Sponsorship"
                  fill
                  className="object-contain"
                  style={{ position: "absolute" }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold text-center text-[#113065] mb-4 group-hover:text-[#0f1056] transition-colors">
                  Mid Columbia Hoops Basketball Tournament Sponsorship
                </h3>
                <a
                  href="https://www.facebook.com/share/p/1Ys5Kmc5Ta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <span className="inline-block px-4 py-2 rounded-lg bg-[#113065] text-white font-medium hover:underline hover:bg-[#0f1056] transition cursor-pointer">
                    Read &rarr;
                  </span>
                </a>
              </div>
            </div>
            {/* Tile 2 */}
            <div className="flex flex-col items-center group transition-transform duration-300 hover:scale-105">
              <div className="relative h-56 w-full flex items-center justify-center">
                <Image
                  src="/images/baseball.png"
                  alt="Benton City Little League Baseball Field Renovation"
                  fill
                  className="object-contain"
                  style={{ position: "absolute" }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold text-center text-[#113065] mb-4 group-hover:text-[#0f1056] transition-colors">
                  Benton City Little League Baseball Field Renovation
                </h3>
                <a
                  href="https://www.facebook.com/share/p/1CFRzAwhaf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <span className="inline-block px-4 py-2 rounded-lg bg-[#113065] text-white font-medium hover:underline hover:bg-[#0f1056] transition cursor-pointer">
                    Read &rarr;
                  </span>
                </a>
              </div>
            </div>
            {/* Tile 3 */}
            <div className="flex flex-col items-center group transition-transform duration-300 hover:scale-105">
              <div className="relative h-56 w-full flex items-center justify-center">
                <Image
                  src="/images/kionagrass.jpg"
                  alt="Kiona Benton High School Baseball Field"
                  fill
                  className="object-contain"
                  style={{ position: "absolute" }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold text-center text-[#113065] mb-4 group-hover:text-[#0f1056] transition-colors">
                  Kiona Benton High School Baseball Field
                </h3>
                <a
                  href="https://www.facebook.com/share/p/16hQkddU8n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <span className="inline-block px-4 py-2 rounded-lg bg-[#113065] text-white font-medium hover:underline hover:bg-[#0f1056] transition cursor-pointer">
                    Read &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- End Built on Community section --- */}

      {/* --- Our Values section with light blue background --- */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#aad6ec" }}>
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
                {/* Quality Icon */}
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
                {/* Reliability Icon */}
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
                {/* Customer Focus Icon */}
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
      {/* --- End Our Values section --- */}

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