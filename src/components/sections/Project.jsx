import React from "react";
import SecondarySectionWrapper from "../SecondarySectionWrapper";
import WorkExperienceCard from "../WorkExperienceCard";
import MainButton from "../MainButton";
import { projects, workExperience } from "@/data";
import ProjectCard from "../ProjectCard";

export default function Project() {
  return (
    <SecondarySectionWrapper title={'Personal Project'} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}>
      {
        projects.map((project, index) => {
          return (
            <ProjectCard key={index} detail={project}/>
          )
        })
      }
      <div className="text-center mt-10">
        <MainButton title={'view my other project in github'}/>
      </div>
    </SecondarySectionWrapper>
  );
}
