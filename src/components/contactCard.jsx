import React from "react";
import Link from "next/link";

export default function ContactCard({ contact }) {
  return (
    <div
      className="
        group bg-white rounded-2xl px-6 py-8
        border border-black/5
        shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]
        transition-all duration-500
        hover:-translate-y-[2px]
      "
    >
      <div className="flex justify-center mb-4 p-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-primary p-1">
          {contact.icon}
        </div>
      </div>

      <h3 className="font-semibold text-black-primary mb-2 text-lg capitalize">
        {contact.title}
      </h3>

      <p className="text-sm text-black-main mb-3">
        {contact.description}
      </p>

      <Link href={contact.url} target="_blank">
        <span className="text-blue-primary font-medium text-sm">
          {contact.value}
        </span>
      </Link>
    </div>
  );
}
