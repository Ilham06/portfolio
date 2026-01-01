import Image from "next/image";
import Link from "next/link";
import React from "react";
import MainButton from "./buttons/MainButton";

export default function Header() {
  return (
    <section
      id="header"
      data-aos="fade-up"
      data-aos-duration="1100"
      className="relative text-center py-24 md:py-28 px-4 overflow-hidden"
    >
      {/* Avatar */}
      <div className="relative flex justify-center mb-8">
        {/* Premium gradient ring */}
        <div
          className="
            relative rounded-full p-[3px]
            bg-gradient-to-br from-blue-400 via-indigo-400 to-blue-600
            shadow-[0_20px_60px_-25px_rgba(59,130,246,0.6)]
          "
        >
          {/* inner glow */}
          <div className="absolute -inset-1 rounded-full bg-blue-400/30 blur-xl" />

          <div className="relative bg-[#f5f9ff] rounded-full overflow-hidden">
            <Image
              src="/images/avatar2.png"
              alt="Ilham Avatar"
              width={150}
              height={150}
              priority
            />
          </div>
        </div>

        {/* Current status pill */}
      <span
  className="
    absolute -bottom-4
    inline-flex items-center gap-2
    px-2 py-1.5
    rounded-full
    text-xs font-medium text-white

    bg-gradient-to-r from-blue-500 to-indigo-500
    shadow-[0_12px_30px_-12px_rgba(59,130,246,0.8)]

    before:content-['']
    before:absolute before:-inset-1
    before:rounded-full
    before:bg-gradient-to-r before:from-blue-400/40 before:to-indigo-400/40
    before:blur-xl before:-z-10

    left-1/2 -translate-x-1/2
    md:left-auto md:translate-x-0 md:right-[42%]

    transition-transform duration-300
    md:rotate-[-6deg] md:hover:rotate-0
  "
>
  {/* green status */}
  <span className="relative flex h-2.5 w-2.5">
    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]" />
  </span>

  <span className="tracking-wide">
    Currently at <strong className="font-semibold">FTL Gym</strong>
  </span>
</span>

      </div>

      {/* Text */}
      <h1 className="text-[42px] sm:text-[48px] md:text-[64px] font-extrabold text-black-primary mb-5 leading-tight">
        I turn ideas into <br />
        <span className="text-blue-primary">useful digital products</span>
      </h1>

      <p className="max-w-2xl mx-auto text-base sm:text-lg text-black-main mb-10 leading-relaxed">
        Software Engineer focused on building clean, scalable, and thoughtful
        digital products — with just the right balance between engineering and UX.
      </p>

      {/* CTA */}
      <div
        className="
          flex flex-col sm:flex-row
          justify-center
          gap-3 sm:gap-4
        "
      >
        <MainButton
          path="#about"
          title="Explore my work"
          icon={
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
                d="M13 7h6m0 0v6m0-6L10 20l-4-4"
              />
            </svg>
          }
        />

        <MainButton
          path="#contact"
          title="Let’s talk"
          variant="outline"
          icon={
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
                d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
              />
            </svg>
          }
        />
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 flex justify-center animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black/40"
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
