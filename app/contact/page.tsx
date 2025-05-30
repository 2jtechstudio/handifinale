import { constructMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/layout/contact-form";
import { 
  COMPANY_PHONE, 
  COMPANY_EMAIL, 
  COMPANY_ADDRESS,
  GOOGLE_MAPS_EMBED_URL
} from "@/lib/constants";

export const metadata = constructMetadata({
  title: "Contact Us | H & I Construction LLC",
  description: "Contact H & I Construction LLC for a free estimate on your construction project. We serve the Tri-Cities area and surrounding communities.",
  path: "contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#113065] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200">
              Get in touch with our team for a free estimate on your construction project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our services or want to request a quote? Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-2xl mb-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#113065]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">
                      <a href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, '')}`} className="hover:text-[#113065]">
                        {COMPANY_PHONE}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#113065]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-[#113065]">
                        {COMPANY_EMAIL}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#113065]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">
                      {COMPANY_ADDRESS}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="H & I Construction Location"
                ></iframe>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}