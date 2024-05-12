"use client";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Header from "@/components/sections/Header";
import Project from "@/components/sections/Project";
import WorkExperience from "@/components/sections/WorkExperience";
import SkillExperience from "@/components/sections/SkillExperience";
import Navbar from "@/components/sections/Navbar";
import useAOS from "@/hooks/useAos";

export default function Home() {
  useAOS()
  return (
    <>
      <div className="bg-[#F7F9FB] pb-52">
        <div className="container mx-auto px-4 lg:px-60">
          <Navbar/>
          <Header />
          <About />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-60 mt-[-200px]">
        <SkillExperience />
      </div>
      <div className="container mx-auto px-4 lg:px-60">
        <WorkExperience />
        <Project />
        <Contact />
      </div>
    </>
  );
}
