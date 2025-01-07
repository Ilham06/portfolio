'use client'

import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import useAOS from "@/hooks/useAos";
import Image from "next/image";

export default function Home() {
  useAOS()
  return (
    <>
      <div className="container mx-auto max-w-[1200px] px-4 lg:px-36 pb-16">
        {/* <Navbar /> */}
        <Header/>
        <About/>
      </div>
      <div className="bg-[#F7F9FB]">
        <div className="container mx-auto max-w-[1200px] px-4 lg:px-36">
          <Services/>
          <Experience/>
        </div>
      </div>
      <div className="container mx-auto max-w-[1200px] px-4 lg:px-36 pb-16">
       <Contact/>
      </div>
    </>
  );
}
