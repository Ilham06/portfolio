import React from "react";
import Link from "next/link";

export default function ContactIcon({ contact }) {
  const { url, icon } = contact;

  return (
    <Link href={url} target="_blank">
      <div
        className="
          w-12 h-12 rounded-xl
          bg-gradient-to-br from-blue-400 to-indigo-500
          flex items-center justify-center
          text-white
          transition-all duration-300
          hover:-translate-y-[2px]
          hover:shadow-lg
        "
      >
        {icon}
      </div>
    </Link>
  );
}
