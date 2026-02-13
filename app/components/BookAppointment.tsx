"use client";

import Link from "next/link";

export default function BookAppointment() {
  return (
    <section className="bg-[#F4EFEA] px-8 md:px-16 py-24 text-[#223614]">

      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight">
          Book an appointment.
        </h2>

        {/* DESCRIPTION */}
        <p className="text-md sm:text-xl md:text-2xl mt-8 leading-relaxed max-w-3xl mx-auto">
          If you're ready to begin, you can schedule your first session below.
          Choose a time that works for you, and you’ll receive confirmation
          details right away.
        </p>

      </div>

      {/* SCHEDULING WIDGET CONTAINER */}
      <div className="mt-16 max-w-4xl mx-auto">

        <div className="border border-[#223614]/20 p-8 md:p-12 bg-white shadow-sm rounded-sm">

          {/* EMBED CALENDLY (Example) */}
          <div className="w-full h-[650px]">

            {/* Replace this iframe with your real scheduler */}
            <iframe
              src="https://calendly.com/your-link"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-sm"
            />

          </div>

        </div>

      </div>

      {/* OPTIONAL BACKUP CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 mt-6 border border-[#223614] px-7 py-4 uppercase text-sm transition-colors duration-500 hover:bg-[#223614] hover:text-white"
        >
          Contact Instead
        </Link>
      </div>

    </section>
  );
}
