import React from "react";
import Link from "next/link";

export default function ContactIcon({ contact }) {
  const { url, icon } = contact;

  return (
    <Link href={url} target="_blank">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-[0_8px_25px_-5px_rgba(59,130,246,0.25)] transition-all duration-300 hover-icon-wiggle">
        {icon}
      </div>
    </Link>
  );
}
