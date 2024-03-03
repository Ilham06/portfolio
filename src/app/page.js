import About from "@/components/sections/About";
import Header from "@/components/sections/Header";
import WorkExperience from "@/components/sections/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-72">
        <Header/>
        <About/>
        <WorkExperience/>
      </div>
    </>
  );
}
