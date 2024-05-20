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
        <div className="container mx-auto max-w-[1200px] px-4">
          <Navbar/>
          <Header />
          <About />
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-[1200px] mt-[-200px]">
        <SkillExperience />
      </div>
      <div className="container mx-auto px-4 max-w-[1200px] overflow-hidden">
        <WorkExperience />
        <Project />
        <Contact />
      </div>
    </>
  );
}
