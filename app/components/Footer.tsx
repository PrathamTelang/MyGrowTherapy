"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#D7D2CB] text-[#223614]">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Lilac Template
          </h2>

          <div className="space-y-2 text-lg">
            <p>123 Example Road</p>
            <p>Minneapolis, MN</p>
          </div>

          <div className="space-y-2 text-lg pt-4">
            <p className="underline underline-offset-4 cursor-pointer">
              email@example.com
            </p>
            <p className="underline underline-offset-4 cursor-pointer">
              (555) 555-5555
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div className="space-y-6 md:text-center">
          <h3 className="text-2xl font-medium">Hours</h3>

          <div className="space-y-2 text-lg">
            <p>Monday – Friday</p>
            <p>10am – 6pm</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6 md:text-right">
          <h3 className="text-2xl font-medium">Find</h3>

          <div className="space-y-2 text-lg">
            <Link
              href="/"
              className="block underline underline-offset-4"
            >
              Home
            </Link>

            <Link
              href="/contact"
              className="block underline underline-offset-4"
            >
              Contact
            </Link>

            <Link
              href="/blog"
              className="block underline underline-offset-4"
            >
              Blog
            </Link>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="bg-[#CFCAC3] text-center px-6 py-10 space-y-6 text-sm">

        <div className="flex flex-wrap justify-center gap-6">
          <span className="underline underline-offset-4 cursor-pointer">
            Privacy & Cookies Policy
          </span>
          <span className="underline underline-offset-4 cursor-pointer">
            Good Faith Estimate
          </span>
          <span className="underline underline-offset-4 cursor-pointer">
            Website Terms & Conditions
          </span>
          <span className="underline underline-offset-4 cursor-pointer">
            Disclaimer
          </span>
        </div>

        <p>
          Website Template Credits:{" "}
          <span className="underline underline-offset-4 cursor-pointer">
            Go Bloom Creative
          </span>
        </p>

        <p>
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>

      </div>

    </footer>
  );
}
