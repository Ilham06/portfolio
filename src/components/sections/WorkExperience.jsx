import React from "react";
import SecondarySectionWrapper from "../SecondarySectionWrapper";
import WorkExperienceCard from "../WorkExperienceCard";
import MainButton from "../MainButton";

export default function WorkExperience() {
  return (
    <SecondarySectionWrapper title={'Work Experience'} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}>
      <WorkExperienceCard/>
      <WorkExperienceCard/>
      <WorkExperienceCard/>
    </SecondarySectionWrapper>
  );
}
