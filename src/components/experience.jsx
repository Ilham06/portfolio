import React from "react";
import ExperienceCard from "./experienceCard";
import { works } from "@/data";

export default function Experience() {
  let expDelay = 100;

  return (
    <section id="work" className="relative py-32 overflow-hidden">
      {/* Heading */}
      <div
        className="relative max-w-4xl mx-auto text-center mb-28 px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-primary">
          Experience
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-black-primary mb-5 leading-tight">
          Places I’ve <span className="text-blue-primary">grown</span>
        </h2>

        <p className="text-black-main max-w-2xl mx-auto text-lg leading-relaxed">
          Teams and organizations where I learned, collaborated, and shipped
          real-world digital products.
        </p>
      </div>

      {/* Experience list */}
      <div className="relative max-w-5xl mx-auto space-y-10 px-4">
        {works.map((work, index) => {
          expDelay += 150;

          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={expDelay}
            >
              <ExperienceCard work={work} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
