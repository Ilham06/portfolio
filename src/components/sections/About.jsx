import { skills, techExperience } from "@/data";
import React from "react";
import TechIcon from "../TechIcon";
import TechExperienceCard from "../TechExperienceCard";
import Image from "next/image";

export default function About() {
  let techDelay = 0;
  return (
    <div className="mt-24" id="about">
      <div
        className="flex items-center flex-wrap justify-center gap-10 lg:gap-0"
        data-aos-duration="1000"
        data-aos="fade-up"
      >
        <div className="lg:w-[25%]">
          <Image
            src="/images/me.png"
            alt="me"
            width={255}
            height={255}
            loading="lazy"
          />
        </div>
        <div className="lg:w-[70%] text-center lg:text-start">
          <h3 className="text-2xl mb-4 font-semibold text-black-primary">
            <span className="text-blue-primary">About</span> Me
          </h3>
          <p className="text-black-main mb-4">
            I’m a Web Developer with 2 year work experience, I have a strong
            foundation in frontend and backend technologies. with a focus on
            Laravel and NestJs for backend, and React for build a modern
            frontend application. In my current role, I have worked on a wide
            range of projects, from small websites to large-scale web
            applications for business, goverment and educations. I am a lifelong
            learner, and really likes challenges especially in technology...
          </p>
          <p className="text-black-main font-medium">
            here is my techstack as a software engineer
          </p>
        </div>
      </div>

      <div class="tech-slideshow-wrapper whitespace-nowrap relative overflow-x-hidden overflow-y-visible">
        <div className="tech-slideshow mt-9">
          {skills.map((skill, index) => {
            techDelay += 50;
            return (
              <div
                className="inline mx-5 lg:mx-10"
                key={index}
                data-aos-delay={techDelay}
                data-aos="zoom-in"
              >
                <TechIcon title={skill.title} icon={skill.icon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
