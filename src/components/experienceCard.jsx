import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceCard({ work }) {
  const { id, image, company, location, role, duration } = work;

  return (
    <Link href={`/work/${id}`} className="block">
      <article
        className="
          group relative overflow-hidden
          rounded-3xl bg-white
          px-6 py-6 lg:px-10 lg:py-8
          border border-black/5
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          hover:-translate-y-[2px]
        "
        style={{
          boxShadow:
            "0 10px 30px -18px rgba(0,0,0,0.25)",
        }}
      >
        {/* Ambient glow (tetap boleh, ini mahal) */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-blue-200/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="pointer-events-none absolute top-20 -left-20 w-60 h-60 bg-indigo-200/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative flex items-center gap-6">
          {/* Logo – clean & premium */}
          <div className="flex-shrink-0">
            <div
              className="
                w-14 h-14 lg:w-[72px] lg:h-[72px]
                rounded-full
                bg-white
                flex items-center justify-center
                shadow-[0_8px_20px_-10px_rgba(0,0,0,0.25)]
              "
            >
              <Image
                src={image}
                alt={`${company} logo`}
                width={56}
                height={56}
                className="rounded-full object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3
              className="
                text-[15px] lg:text-[17px]
                font-semibold text-black-primary
                tracking-tight mb-1
              "
            >
              {role}
              <span className="text-black/40 font-normal">
                {" "}· {company}
              </span>
            </h3>

            <p className="text-[13px] lg:text-[14px] text-black-main mb-1">
              {duration}
            </p>

            <p className="text-[12px] lg:text-[13px] text-black/40">
              {location}
            </p>
          </div>

          {/* CTA */}
          <div
            className="
              hidden sm:flex items-center
              text-sm font-medium
              text-blue-primary
              opacity-0
              group-hover:opacity-100
              transition-all duration-300
              group-hover:translate-x-1
            "
          >
            View →
          </div>
        </div>
      </article>
    </Link>
  );
}
