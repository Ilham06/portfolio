import React from "react";
import Link from "next/link";

export default function ContactCard({ contact }) {
  const { title, description, icon, value, url } = contact;

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:-translate-y-0.5 transition-all duration-200 text-left">
      <div className="flex items-center gap-5">
        {/* Icon box */}
        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
          {icon}
        </div>

        {/* Text */}
        <div className="min-w-0">
          <h3 className="font-bold text-gray-900 capitalize text-base mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-400 mb-2">{description}</p>
          <Link href={url} target="_blank">
            <span className="text-sm text-blue-600 font-medium hover:underline break-all">
              {value}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
