import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceCard({ work }) {
  const { id, image, company, location, role, duration } = work;
  return (
    <Link href={`/work/${id}`}>
      <div className="rounded-[10px] p-4 lg:p-8 bg-white flex items-center mt-6 cursor-pointer hover:translate-y-[-2px] duration-500">
        <div className="border-r pr-4">
          <Image
            src={image}
            alt="vorta"
            width={90}
            height={90}
            style={{ borderRadius: "50%" }}
            className="w-[50px] lg:w-[90px]"
          />
        </div>
        <div className="pl-6">
          <h3 className="text-black-primary font-semibold text-base sm:text-lg mb-1">
            {role}, {company}
          </h3>
          <p className="text-black-main mb-1 text-sm lg:text-base">
            {duration}
          </p>
          <p className="text-grey-primary text-xs lg:text-sm">{location}</p>
        </div>
      </div>
    </Link>
  );
}
