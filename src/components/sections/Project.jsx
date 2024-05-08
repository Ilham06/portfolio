import React from "react";
import SecondarySectionWrapper from "../SecondarySectionWrapper";
import WorkExperienceCard from "../WorkExperienceCard";
import MainButton from "../MainButton";
import { projects, workExperience } from "@/data";
import ProjectCard from "../pages/ProjectCard";
import SecondaryProjectCard from "../SecondaryProjectCard";
import MainProjectCard from "../MainProjectCard";

export default function Project() {
  return (
    <section className="mt-14">
      <div className="text-black-primary">
        <h3 className="font-semibold text-2xl mb-3">Personal Project</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-6">
        {projects.map((project, index) => {
          return <MainProjectCard key={index} detail={project} index={index} />;
        })}
      </div>
      <div className="text-center mt-10">
        <MainButton title={"view my other project in github"} />
      </div>
    </section>
  );
}
