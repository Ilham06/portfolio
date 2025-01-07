import React from "react";
import Link from "next/link";

export default function MainButton({ path, title, target, icon }) {
  return (
    <Link href={path || ''} target={target}>
      <button className="btn bg-blue-primary text-slate-100 hover:bg-[#1c7ad9] duration-200 outline-none border-none">
       {icon} {title}
      </button>
    </Link>
  );
}
