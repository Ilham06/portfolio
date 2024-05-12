import React from "react";
import Link from "next/link";

export default function MainButton({ path, title }) {
  return (
    <Link href={path || ''}>
      <button className="bg-blue-primary text-white p-2 rounded text-sm lg:text-base hover:translate-y-[5px] duration-200">
        {title}
      </button>
    </Link>
  );
}
