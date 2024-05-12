import { skills, techExperience } from "@/data";
import React from "react";
import TechIcon from "../TechIcon";
import TechExperienceCard from "../TechExperienceCard";
import Image from "next/image";

export default function About() {
  let techDelay = 0;
  return (
    <div className="mt-24" id="about">
      <div className="flex items-center" data-aos-duration="1000" data-aos="fade-up">
        <div className="w-[25%]">
          <Image
            src="/images/me.png"
            alt="me"
            width={255}
            height={255}
            loading="lazy"
          />
        </div>
        <div className="w-[70%]">
          <h3 className="text-2xl mb-4 font-semibold text-black-primary">
            <span className="text-blue-primary">About</span> Me
          </h3>
          <p className="text-black-main mb-4">
            I’m a Web Developer with more than 1 year experience, I have a
            strong foundation in frontend and backend technologies. with a focus
            on Laravel for backend, and React for build a modern frontend
            application. In my current role, I have worked on a wide range of
            projects, from small websites to large-scale web applications for
            business and education. I am a lifelong learner, and really likes
            challenges especially in technology...
          </p>
          <p className="text-black-main font-medium">
            here is my techstack as a software engineer
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mt-5 justify-start ml-9">
        {skills.map((skill, index) => {
          techDelay += 50;
          return (
            <div className="" key={index} data-aos-delay={techDelay} data-aos="zoom-in">
              <TechIcon title={skill.title} icon={skill.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
