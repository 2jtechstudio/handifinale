import Image from "next/image";

export default function WhyConstruction() {
  return (
    <section className="py-16 md:py-24 bg-white text-[#113065]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight mb-4">
              Why Choose H &amp; I Construction
            </h2>
            <p className="text-lg mb-8">
              At H &amp; I Construction, we pride ourselves on delivering top-notch
              construction services with a focus on quality, integrity, and customer
              satisfaction. Our team of experienced professionals is dedicated to
              bringing your vision to life, whether it's a residential or commercial
              project.
            </p>
            <ul className="list-disc list-inside mb-8">
              <li className="mb-2">
                <strong>Quality Craftsmanship:</strong> We use the best materials and
                latest techniques to ensure your project stands the test of time.
              </li>
              <li className="mb-2">
                <strong>Customer-Centric Approach:</strong> Your satisfaction is our
                priority. We work closely with you throughout the project to ensure
                your needs are met.
              </li>
              <li className="mb-2">
                <strong>Integrity:</strong> We believe in honest communication and
                transparency in all our dealings.
              </li>
            </ul>
            <p className="text-lg">
              Choose H &amp; I Construction for your next project and experience the
              difference. Contact us today for a free consultation!
            </p>
          </div>
          {/* 2x2 image grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 h-96">
            <div className="relative w-full h-full">
              <Image
                src="/images/photo1.png"
                alt="Project photo 1"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority
              />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/images/photo2.png"
                alt="Project photo 2"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority
              />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/images/photo3.png"
                alt="Project photo 3"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority
              />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/images/photo4.png"
                alt="Project photo 4"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}