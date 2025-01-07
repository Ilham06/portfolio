import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="text-center py-24" id="header">
      <div className="flex justify-center mb-6">
        <div className="bg-[#E0CFFE] rounded-[50%] overflow-hidden">
          <Image
            src="/images/avatar.webp"
            alt="me"
            width={151}
            height={151}
            loading="lazy"
          />
        </div>
      </div>
      <h2 className="text-[56px] font-bold text-black-primary mb-6">
        Hello, I’m Ilham
      </h2>
      <p className="text-[18px] text-black-main mb-5">
        Gifted with the skill to create charming illustrations and captivating
        animated <br /> stories, they bring to life a dynamic world where the
        limits <br /> of creativity are nonexistent
      </p>
      <Link href={"#about"}>
        <button className="btn btn-circle bg-blue-primary text-slate-200 hover:bg-blue-primary hover:translate-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
