import React from "react";
import SecondarySectionWrapper from "../SecondarySectionWrapper";
import WorkExperienceCard from "../WorkExperienceCard";
import MainButton from "../MainButton";
import { projects, workExperience } from "@/data";
import ProjectCard from "../pages/ProjectCard";
import SecondaryProjectCard from "../SecondaryProjectCard";
import MainProjectCard from "../MainProjectCard";

export default function Project() {
  let delay = 100;
  return (
    <section className="mt-24" id="project">
      <div className="text-black-primary">
        <h3 className="font-semibold text-2xl mb-3">
          Personal
          <span className="text-blue-primary"> Projects</span>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-6">
        {projects.map((project, index) => {
          delay += 100;
          const type = index % 2 !== 0 ? "fade-right" : "fade-left";
          return (
            <div
              className=""
              key={index}
              data-aos-delay={delay}
              data-aos={type}
            >
              <MainProjectCard detail={project} index={index} />
            </div>
          );
        })}
      </div>
      <div className="text-center mt-10" data-aos-delay="300" data-aos="fade-up" data-aos-duration="500" >
        <MainButton title={"view my other project in github"} />
      </div>
    </section>
  );
}
