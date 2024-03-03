import React from "react";
import Link from "next/link";

export default function MainButton({ path, title }) {
  return (
    <Link href={path || ''}>
      <button className=" bg-black-primary-bg text-white p-2 rounded text-sm lg:text-base">
        {title}
      </button>
    </Link>
  );
}
