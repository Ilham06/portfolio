import React from "react";
import Link from "next/link";

export default function MainButton({ path, title }) {
  return (
    <Link href={path || ''}>
      <button className="text-whit bg-black-primary-bg text-white p-2 rounded">
        {title}
      </button>
    </Link>
  );
}
