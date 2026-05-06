import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceCard({ work }) {
  const { id, image, company, role, summary, location } = work;

  const country = location.toLowerCase().includes("jakarta") ? "Jakarta, ID" : "Indonesia";

  return (
    <Link href={`/work/${id}`} className="group block" scroll>
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white shadow-sm border border-gray-100 overflow-hidden flex items-center justify-center">
          <Image
            src={image}
            alt={`${company} logo`}
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900 text-base mb-1.5">
            {role}{" "}
            <span className="font-normal text-gray-400">· {company}</span>
          </p>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {summary}
          </p>
        </div>

        {/* Location badge */}
        <div className="hidden sm:block flex-shrink-0 pt-0.5">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-500 text-xs font-medium whitespace-nowrap">
            {country}
          </span>
        </div>
      </div>
    </Link>
  );
}
