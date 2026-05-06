"use client";
import React, { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/#header", active: true },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="1100"
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/60"
    >
      <div className="container mx-auto max-w-[1200px] px-4 lg:px-32 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm select-none">
            IM
          </div>
          <span className="font-semibold text-gray-900 text-sm">
            Ilham Muhammad
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(({ label, href, active }) => (
            <li key={label} className="relative flex flex-col items-center pb-1">
              <a
                href={href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {label}
              </a>
              {active && (
                <span className="absolute -bottom-0 w-1.5 h-1.5 rounded-full bg-blue-600" />
              )}
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-3">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="block py-2.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
