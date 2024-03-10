import { skills, techExperience } from "@/data";
import React from "react";
import TechIcon from "../TechIcon";
import TechExperienceCard from "../TechExperienceCard";

export default function About() {
  return (
    <div className="mt-7">
      <h3 className="text-2xl mb-4 font-semibold text-black-primary">
        About Me
      </h3>
      <p className="text-black-main mb-4">
        I’m a Web Developer with more than 1 year experience, I have a strong
        foundation in frontend and backend technologies. with a focus on Laravel
        for backend, and React for build a modern frontend application. In my
        current role, I have worked on a wide range of projects, from small
        websites to large-scale web applications for business and education. I
        am a lifelong learner, and really likes challenges especially in
        technology...
      </p>
      <p className="text-black-main">
        here is my techstack as a software engineer
      </p>
      <div className="flex flex-wrap mt-5 justify-start">
        {skills.map((skill, index) => {
          return <TechIcon key={index} title={skill.title} icon={skill.icon} />;
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
         {
            techExperience.map((exp, index) => {
               return (
                  <TechExperienceCard icon={exp.icon} title={exp.title} description={exp.description} key={index}/>
               )
            })
         }
      </div>
    </div>
  );
}
