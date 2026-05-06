import BackgroundDecor from "@/components/common/BackgroundDecor";
import ExperienceCard from "@/components/experienceCard";
import { works } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ---------- SECTION WRAPPER ---------- */
function Section({ title, subtitle, children }) {
  return (
    <div className="mb-14">
      <h3 className="text-xl font-bold text-black-primary mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="text-black-main mb-6">{subtitle}</p>
      )}
      {children}
    </div>
  );
}

export default function Page({ params }) {
  const detail = works[params.id];

  if (!detail) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-xl font-semibold text-black-primary">
          Experience not found 😅
        </h2>
      </div>
    );
  }

  const {
    image,
    company,
    location,
    role,
    duration,
    summary,
    jobDesk,
    projects,
    stacks,
  } = detail;

  return (
   <> <BackgroundDecor />
    <section className="relative py-32 overflow-hidden">
     

      <div className="relative container mx-auto px-4 lg:px-36 max-w-[1200px]">

        {/* BACK */}
        <Link href="/">
          <div
            className="
              inline-flex items-center gap-2 mb-12
              px-5 py-2.5 rounded-full
              bg-white/60 backdrop-blur
              border border-white/40
              text-sm font-medium text-black-primary
              hover:-translate-x-1 transition
            "
          >
            ← Back to experience
          </div>
        </Link>

        {/* HERO */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
          <div
            className="
              w-[88px] h-[88px]
              rounded-full bg-white
              flex items-center justify-center
              shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)]
            "
          >
            <Image
              src={image}
              alt={company}
              width={64}
              height={64}
              className="rounded-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-black-primary mb-1">
              {role}
            </h1>
            <p className="text-black-main">
              {company} · {location}
            </p>
            <p className="text-sm text-black/50 mt-1">
              {duration}
            </p>
          </div>
        </div>

        {/* MAIN CONTENT CARD */}
        <div
          className="
            rounded-[32px]
            bg-white/55 backdrop-blur-xl
            border border-white/40
            shadow-[0_40px_90px_-45px_rgba(0,0,0,0.35)]
            p-8 lg:p-12
          "
        >
          {/* SUMMARY */}
          <Section
            title="What I did here ✨"
            subtitle="A short overview of my role and responsibilities."
          >
            <p className="text-black-main text-lg leading-relaxed max-w-3xl">
              {summary}
            </p>
          </Section>

          {/* JOB DESK */}
          <Section
            title="My main responsibilities"
            subtitle="Things I worked on day-to-day."
          >
            <ul className="grid sm:grid-cols-2 gap-4 text-black-main">
              {jobDesk?.map((job, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-primary mt-1">•</span>
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* PROJECTS */}
          <Section
            title="Projects I worked on 🚀"
            subtitle="Some notable products and features I helped build."
          >
            <div className="space-y-4">
              {projects?.map((project, index) => (
                <Link
                  key={index}
                  href={`/projects/${detail.id}/${index}`}
                  className="block group"
                  scroll
                >
                  <div
                    className="
                      relative overflow-hidden
                      rounded-2xl p-5 lg:p-6
                      bg-white/50 backdrop-blur-lg
                      border border-white/40
                      shadow-[0_20px_40px_-30px_rgba(0,0,0,0.3)]
                      transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                      hover:-translate-y-[3px]
                    "
                  >
                    {/* glow */}
                    <div
                      className="
                        pointer-events-none absolute inset-0
                        bg-gradient-to-br from-blue-200/30 via-transparent to-indigo-200/30
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-500
                      "
                    />

                    <div className="relative flex items-center gap-5">
                      {/* Thumbnail */}
                      <div
                        className="
                          w-[72px] h-[72px] lg:w-[96px] lg:h-[96px]
                          rounded-xl overflow-hidden
                          bg-white shadow-sm flex-shrink-0
                        "
                      >
                        <Image
                          src="/images/projects/image_not_available.png"
                          alt={project.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4
                          className="
                            text-base lg:text-lg font-semibold text-black-primary
                            
                          "
                        >
                          {project.name}
                        </h4>

                        <p className="text-sm text-black/50 line-clamp-2">
                          {project.description || "No description available"}
                        </p>

                        <div
                          className="
                            mt-2 inline-flex items-center gap-1
                            text-sm font-medium text-blue-primary
                            opacity-80 group-hover:opacity-100 transition
                          "
                        >
                          View details
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Section>

          {/* TECH STACK */}
          <Section
            title="Tech stack 🛠️"
            subtitle="Tools and technologies I used in this role."
          >
            <div className="flex flex-wrap gap-3">
              {stacks?.map((stack, index) => (
                <span
                    key={index}
                    className="
                    relative inline-flex items-center
                    px-4 py-2 rounded-full
                    text-sm font-medium
                    bg-white/75 backdrop-blur
                    border border-white/40
                    shadow-[0_12px_30px_-16px_rgba(0,0,0,0.28)]
                  "
                  >
                    {/* inner glow */}
                    <span
                      className="
                      pointer-events-none absolute inset-0 rounded-full
                      bg-gradient-to-br from-blue-200/40 via-transparent to-indigo-200/40
                    "
                    />
                    <span className="relative z-10">{stack}</span>
                  </span>
              ))}
            </div>
          </Section>
        </div>

        {/* OTHER EXPERIENCE */}
        <div className="mt-28">
          <h3 className="text-2xl font-bold text-black-primary mb-2">
            Other experiences
          </h3>
          <p className="text-black-main mb-6">
            Want to see what else I’ve worked on?
          </p>

          <div className="space-y-6">
            {works.map((work, index) => (
              <ExperienceCard key={index} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section></>
  );
}
