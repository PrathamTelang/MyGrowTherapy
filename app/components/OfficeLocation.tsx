"use client";

export default function OfficeSection() {
  return (
    <section className="bg-accent text-white px-8 md:px-20 py-24">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

        {/* LEFT SIDE */}
        <div className="space-y-12">

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">
            My Office
          </h2>

          <div className="space-y-4 text-lg md:text-xl leading-relaxed">
            <p>123th Street 45 W, Santa Monica, CA 90401</p>
          </div>

          <div className="pt-6">
            <h3 className="text-2xl md:text-3xl font-medium mb-6">
              Hours
            </h3>

            <p className="text-lg md:text-xl">Monday – Friday</p>
            <p className="text-lg md:text-xl">10am – 6pm</p>
          </div>

        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="w-full h-[400px] md:h-[480px] lg:h-[520px] overflow-hidden shadow-lg">
          
          <iframe
            src="https://www.google.com/maps?q=Minneapolis,MN&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) contrast(95%)" }}
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
}
