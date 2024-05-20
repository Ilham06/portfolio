import ProjectCard from "@/components/pages/ProjectCard";
import SecondarySectionWrapper from "@/components/SecondarySectionWrapper";
import React from "react";
import { projects } from "@/data";
import SecondaryProjectCard from "@/components/SecondaryProjectCard";
import Link from "next/link";
export default function page() {
  return (
    <div className="container mx-auto px-2 max-w-[1200px] pt-14">
      <Link href='/'>
        <button className="btn mb-2">Back</button>
      </Link>
      <SecondarySectionWrapper
        title={"Project Detail"}
        subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      >
        <ProjectCard detail={projects[0]} />

        <div className="mt-16">
          <div className="text-black-primary">
            <h3 className="font-semibold text-2xl mb-3">Other Project</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              sed?
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {projects.map((project, index) => {
              return <SecondaryProjectCard key={index} detail={project} />;
            })}
          </div>
        </div>
      </SecondarySectionWrapper>
    </div>
  );
}
