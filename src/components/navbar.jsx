"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/#header" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("header");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["header", "about", "work", "services", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    const id = href.replace("/#", "");
    return activeSection === id;
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-gray-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
          : "backdrop-blur-md border-b border-gray-100/60"
        }`}
    >
      <div className="container mx-auto max-w-[1200px] px-4 lg:px-32 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm select-none group-hover:scale-110 group-hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)] transition-all duration-300">
            IM
          </div> */}
          <span className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-300">
            Ilham Muhammad
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label} className="relative flex flex-col items-center pb-1">
              <a
                href={href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${isActive(href)
                    ? "text-blue-600"
                    : "text-gray-500"
                  }`}
              >
                {label}
              </a>
              {/* Animated underline indicator */}
              <span
                className={`absolute -bottom-0 h-1.5 w-1.5 rounded-full bg-blue-600 transition-all duration-300 ${isActive(href)
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                  }`}
              />
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — animated */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-b border-gray-100 px-4 py-3">
          {links.map(({ label, href }, index) => (
            <a
              key={label}
              href={href}
              className={`block py-2.5 text-sm transition-all duration-300 ${isActive(href)
                  ? "text-blue-600 font-semibold translate-x-2"
                  : "text-gray-600 hover:text-gray-900 hover:translate-x-1"
                }`}
              style={{ transitionDelay: menuOpen ? `${index * 50}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
