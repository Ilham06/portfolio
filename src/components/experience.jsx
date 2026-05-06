import React from "react";
import ExperienceCard from "./experienceCard";
import { works } from "@/data";

const getEmploymentType = (role) =>
  role.toLowerCase().includes("intern") ? "Internship" : "Full-time";

export default function Experience() {
  return (
    <section id="work" className="relative py-16 sm:py-20 overflow-hidden bg-white rounded-2xl sm:rounded-3xl">
      {/* Heading */}
      <div
        className="max-w-2xl mx-auto text-center mb-10 sm:mb-16 px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="inline-block mb-3 sm:mb-4 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-50 text-blue-600">
          Experience
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Where I&apos;ve <span className="text-gradient-blue">worked</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="mx-auto px-6 sm:px-12 md:px-16">
        {works.map((work, index) => (
          <div key={index} className="flex group/timeline">
            {/* Left — date + type */}
            <div className="hidden md:flex flex-col w-44 flex-shrink-0 pr-6 pt-1 text-left">
              <p className="text-sm text-gray-500 leading-snug group-hover/timeline:text-blue-600 transition-colors duration-300">{work.duration}</p>
              <p className="text-xs text-gray-400 mt-1">
                {getEmploymentType(work.role)}
              </p>
            </div>

            {/* Center — timeline with pulsing dot */}
            <div className="flex flex-col items-center flex-shrink-0 w-6 md:w-10">
              <div className="relative mt-1.5 flex-shrink-0">
                {/* Pulse ring */}
                <div className="absolute inset-0 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-blue-400 animate-pulse-ring" />
                {/* Dot */}
                <div className="relative z-10 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-white border-2 border-blue-500 group-hover/timeline:bg-blue-500 group-hover/timeline:scale-125 transition-all duration-300" />
              </div>
              {index < works.length - 1 && (
                <div className="flex-1 border-l-2 border-dashed border-blue-200 mt-1" />
              )}
            </div>

            {/* Right — card content */}
            <div
              className="flex-1 pb-10 sm:pb-12 pl-4 sm:pl-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              {/* Mobile: show date above card */}
              <div className="md:hidden mb-2.5">
                <p className="text-[11px] font-medium text-blue-600 uppercase tracking-wider">
                  {work.duration} <span className="text-gray-300 mx-1.5">•</span> <span className="text-gray-400 font-normal normal-case tracking-normal">{getEmploymentType(work.role)}</span>
                </p>
              </div>
              <ExperienceCard work={work} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
