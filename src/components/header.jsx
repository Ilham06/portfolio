import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <section
      id="header"
      data-aos="fade-up"
      data-aos-duration="1100"
      className="relative text-center py-24 md:py-28 px-4 overflow-hidden"
    >
      {/* Avatar */}
      <div className="relative flex justify-center mb-14">
        {/* Blue radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-blue-400/30 blur-3xl" />

        {/* Photo circle */}
        <div className="relative w-36 h-36 rounded-full bg-white shadow-[0_8px_40px_rgba(59,130,246,0.25)] overflow-hidden ring-4 ring-white z-10">
          <Image
            src="/images/avatar2.png"
            alt="Ilham Avatar"
            width={144}
            height={144}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Open to collaborate badge */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-sm font-medium text-gray-800 whitespace-nowrap">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          Open to collaborate
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-[42px] sm:text-[52px] md:text-[64px] font-extrabold text-gray-900 mb-5 leading-tight">
        I turn ideas into
        <br />
        <span className="text-blue-600">meaningful experiences</span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-500 mb-10 leading-relaxed">
        Helping individuals and organizations bring ideas to life with clarity,
        creativity, and execution.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="#about">
          <button className="inline-flex items-center gap-3 px-7 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-[0_12px_30px_-8px_rgba(37,99,235,0.6)] hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            View my work
          </button>
        </Link>

        <Link href="#contact">
          <button className="inline-flex items-center gap-3 px-7 py-4 bg-white text-gray-800 font-semibold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
              />
            </svg>
            Start a conversation
          </button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 flex justify-center animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
