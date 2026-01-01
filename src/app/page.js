'use client'

import About from "@/components/about";
import BackgroundDecor from "@/components/common/BackgroundDecor";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Services from "@/components/services";
import useAOS from "@/hooks/useAos";

export default function Home() {
  useAOS();

  return (
    <>
      <BackgroundDecor />

      {/* HERO + ABOUT */}
      <section className="relative">
        <div className="container mx-auto max-w-[1200px] px-4 lg:px-32">
          <Header />
          <About />
        </div>
      </section>

      {/* SERVICES + EXPERIENCE */}
      <section className="relative bg-[#F7F9FB]/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-[1200px] px-4 lg:px-36">
          <Services />
          <Experience />
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative">
        <div className="container mx-auto max-w-[1200px] px-4 lg:px-32 pb-32">
          <Contact />
        </div>
      </section>
    </>
  );
}
