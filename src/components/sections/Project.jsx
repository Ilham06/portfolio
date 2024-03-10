import React from "react";
import SecondarySectionWrapper from "../SecondarySectionWrapper";
import WorkExperienceCard from "../WorkExperienceCard";
import MainButton from "../MainButton";
import { projects, workExperience } from "@/data";
import ProjectCard from "../pages/ProjectCard";
import SecondaryProjectCard from "../SecondaryProjectCard";

export default function Project() {
  return (
    <section className="mt-14">
      <SecondarySectionWrapper
        title={"Personal Project"}
        subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => {
            return <SecondaryProjectCard key={index} detail={project} />;
          })}
        </div>
        <div className="text-center mt-10">
          <MainButton title={"view my other project in github"} />
        </div>
      </SecondarySectionWrapper>
    </section>
  );
}
