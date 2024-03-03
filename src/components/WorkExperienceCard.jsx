import React from "react";
import Image from "next/image";

export default function WorkExperienceCard({ experience }) {
  const { image, company, location, role, duration } = experience;
  return (
    <div className="rounded-[10px] p-8 bg-white flex items-center mt-6 cursor-pointer">
      <div className="border-r pr-4">
        <Image
          src={image}
          alt="vorta"
          width={90}
          height={90}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="pl-6">
        <h3 className="text-black-primary font-semibold text-[18px] mb-1">
          {role}, {company}
        </h3>
        <p className="text-black-main mb-1">{duration}</p>
        <p className="text-grey-primary text-sm">{location}</p>
      </div>
    </div>
  );
}
