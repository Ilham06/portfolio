import React from "react";
import Link from "next/link";

export default function MainButton({ path = "", title, target, icon }) {
  return (
    <Link href={path} target={target} className="inline-block">
      <button
        className="
          group relative inline-flex items-center gap-2
          px-6 py-3
          rounded-full
          bg-gradient-to-br from-blue-500 to-blue-600
          text-white font-medium
          shadow-[0_12px_30px_-12px_rgba(37,99,235,0.8)]
          transition-all duration-300 ease-out
          hover:-translate-y-[3px]
          hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.9)]
          active:translate-y-[0px]
          focus:outline-none
        "
      >
        {/* soft glow layer */}
        <span
          className="
            pointer-events-none absolute inset-0
            rounded-full
            bg-gradient-to-br from-white/30 via-transparent to-transparent
            opacity-60
          "
        />

        {/* content */}
        <span className="relative z-10 inline-flex items-center gap-2">
          {icon && (
            <span
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              {icon}
            </span>
          )}
          <span>{title}</span>
        </span>
      </button>
    </Link>
  );
}
