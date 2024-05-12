import React from "react";
import Link from "next/link"
import SecondarySectionWrapper from "@/components/SecondarySectionWrapper";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import { workExperience } from "@/data";
import WorkExperienceDetail from "@/components/pages/WorkExperienceDetail";

export default function page() {
  return (
    <div className="container mx-auto px-2 lg:px-72 pt-14">
      <Link href="/">
        <button className="btn mb-2">Back</button>
      </Link>
      <SecondarySectionWrapper
        title={"Work Experience Detail"}
      >


        <WorkExperienceDetail detail={workExperience[0]}/>

        <div className="mt-16" >
          <div className="text-black-primary">
            <h3 className="font-semibold text-2xl mb-3">Other Experience</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              sed?
            </p>
          </div>
          <div className="mt-6">
            {workExperience.map((work, index) => {
              return <WorkExperienceCard key={index} experience={work} />;
            })}
          </div>
        </div>
      </SecondarySectionWrapper>
    </div>
  );
}
