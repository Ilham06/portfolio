import React from "react";
import TechExperienceCard from "../TechExperienceCard";
import { techExperience } from "@/data";

export default function SkillExperience() {
  let delay = 500;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14 bg-white rounded-md">
      {techExperience.map((exp, index) => {
        delay += 250;
        return (
          <div className="" key={index} data-aos="fade-up" data-aos-delay={delay} data-aos-duration="800">
            <TechExperienceCard
              icon={exp.icon}
              title={exp.title}
              description={exp.description}
            />
          </div>
        );
      })}
    </div>
  );
}
