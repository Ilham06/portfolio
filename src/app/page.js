"use client";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Header from "@/components/sections/Header";
import Project from "@/components/sections/Project";
import WorkExperience from "@/components/sections/WorkExperience";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TechExperienceCard from "@/components/TechExperienceCard";
import SkillExperience from "@/components/sections/SkillExperience";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 500, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
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
