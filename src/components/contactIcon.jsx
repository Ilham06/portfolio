import React from "react";
import Link from "next/link";

export default function ContactIcon({ contact }) {
  const { url, icon } = contact;

  return (
    <Link href={url} target="_blank">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 hover:-translate-y-0.5 hover:bg-blue-100 transition-all duration-200">
        {icon}
      </div>
    </Link>
  );
}
