import React from "react";
import ExperienceCard from "./experienceCard";
import { works } from "@/data";

const getEmploymentType = (role) =>
  role.toLowerCase().includes("intern") ? "Internship" : "Full-time";

export default function Experience() {
  return (
    <section id="work" className="relative py-20 overflow-hidden bg-white rounded-3xl">
      {/* Heading */}
      <div
        className="max-w-2xl mx-auto text-center mb-16 px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
          Experience
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Where I've <span className="text-blue-600">worked</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="mx-auto px-16">
        {works.map((work, index) => (
          <div key={index} className="flex">
            {/* Left — date + type */}
            <div className="hidden md:flex flex-col w-44 flex-shrink-0 pr-6 pt-1 text-left">
              <p className="text-sm text-gray-500 leading-snug">{work.duration}</p>
              <p className="text-xs text-gray-400 mt-1">
                {getEmploymentType(work.role)}
              </p>
            </div>

            {/* Center — timeline */}
            <div className="flex flex-col items-center flex-shrink-0 w-10">
              <div className="relative z-10 mt-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-500 flex-shrink-0" />
              {index < works.length - 1 && (
                <div className="flex-1 border-l-2 border-dashed border-blue-200 mt-1" />
              )}
            </div>

            {/* Right — card content */}
            <div
              className="flex-1 pb-12 pl-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              {/* Mobile: show date above card */}
              <div className="md:hidden mb-2">
                <p className="text-xs text-gray-400">{work.duration}</p>
              </div>
              <ExperienceCard work={work} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
