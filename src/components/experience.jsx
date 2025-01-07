import React from "react";
import ExperienceCard from "./experienceCard";
import { works } from "@/data";

export default function Experience() {
  return (
    <section className="py-12" id="work">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-black-primary">MY <span className="text-blue-primary">WORK EXPERIENCE</span></h2>
        <p className="text-black-main">
        I have some amazing work experience in various fields <br /> such as start-ups, government, and vendors.
        </p>
      </div>
      <div className="">
         {
          works.map((work, index) => {
            return (
              <ExperienceCard work={work} key={index}/>
            )
          })
         }
      </div>
    </section>
  );
}
