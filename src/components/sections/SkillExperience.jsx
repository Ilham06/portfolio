import React from "react";
import TechExperienceCard from "../TechExperienceCard";
import { techExperience } from "@/data";

export default function SkillExperience() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14 bg-white rounded-md">
      {techExperience.map((exp, index) => {
        return (
          <TechExperienceCard
            icon={exp.icon}
            title={exp.title}
            description={exp.description}
            key={index}
          />
        );
      })}
    </div>
  );
}
