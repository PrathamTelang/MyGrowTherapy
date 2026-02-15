"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll && currentScroll > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md 
        transition-transform duration-500 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="h-20 flex justify-between items-center md:px-20 px-6 text-textcolor">

        {/* Logo */}
        <Link href="/" className="leading-tight">
          <div className="text-2xl md:text-3xl font-heading">
            Dr. Maya .R, PsyD
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-10 text-lg md:text-xl">
          <Link
            href="/blog"
            className={`transition ${
              pathname.startsWith("/blog")
                ? "underline underline-offset-8"
                : "hover:opacity-70"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`transition ${
              pathname === "/contact"
                ? "underline underline-offset-8"
                : "hover:opacity-70"
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
