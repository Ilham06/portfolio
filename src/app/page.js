import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Header from "@/components/sections/Header";
import Project from "@/components/sections/Project";
import WorkExperience from "@/components/sections/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-72">
        <Header/>
        <About/>
        <WorkExperience/>
        <Project/>
        <Contact/>
      </div>
    </>
  );
}
