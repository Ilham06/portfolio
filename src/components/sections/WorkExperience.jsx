import React from "react";
import SecondarySectionWrapper from "../SecondarySectionWrapper";
import WorkExperienceCard from "../WorkExperienceCard";
import MainButton from "../MainButton";
import { workExperience } from "@/data";

export default function WorkExperience() {
  return (
    <SecondarySectionWrapper title={'Work Experience'} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}>
      {
        workExperience.map((exp, index) => {
          return (
            <WorkExperienceCard key={index} experience={exp}/>
          )
        })
      }
    </SecondarySectionWrapper>
  );
}
