import React from "react";
import ExperienceCard from "./experienceCard";
import { works } from "@/data";

export default function Experience() {
  let expDelay = 100;
  return (
    <section className="py-12" id="work">
      <div className="text-center" data-aos-duration="1000" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-2 text-black-primary">
          MY <span className="text-blue-primary">WORK EXPERIENCE</span>
        </h2>
        <p className="text-black-main">
          I have some amazing work experience in various fields <br /> such as
          start-ups, government, and vendors.
        </p>
      </div>
      <div className="mt-16">
        {works.map((work, index) => {
          expDelay += 200;
          return (
            <div
              className=""
              key={index}
              data-aos-duration="1000"
              data-aos="fade-up"
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
