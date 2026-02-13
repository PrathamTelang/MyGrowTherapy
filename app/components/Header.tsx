"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm 
        transition-transform duration-500 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="h-18 flex justify-between items-center md:px-20 px-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#223614]">
          My Grow Therapy
        </h1>

        <div className="flex gap-8 text-lg md:text-2xl text-[#223614]">
          <Link
              href="/contact"
              className="block "
            >
              Contact
            </Link>

            <Link
              href="/blog"
              className="block"
            >
              Blog
            </Link>
        </div>
      </div>
    </header>
  );
}
