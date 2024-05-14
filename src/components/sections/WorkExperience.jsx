import React from "react";
import SecondarySectionWrapper from "../SecondarySectionWrapper";
import WorkExperienceCard from "../WorkExperienceCard";
import MainButton from "../MainButton";
import { workExperience } from "@/data";

export default function WorkExperience() {
  let delay = 100;
  return (
    <section className="mt-24" id="experience">
      <SecondarySectionWrapper
        title={
          <>
            <span className="text-blue-primary">Work</span> Experience
          </>
        }
        subtitle={"I have some amazing work experience in various fields such as start-ups, government, and vendors."}
      >
        {workExperience.map((exp, index) => {
          delay += 100
          return (
            <div className="" key={index} data-aos-delay={delay} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="500">
              <WorkExperienceCard experience={exp} />
            </div>
          );
        })}
      </SecondarySectionWrapper>
    </section>
  );
}
