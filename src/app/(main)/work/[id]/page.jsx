"use client";

import BackgroundDecor from "@/components/common/BackgroundDecor";
import ExperienceCard from "@/components/experienceCard";
import { works } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useAOS from "@/hooks/useAos";

/* ---------- SVG ICONS ---------- */
const SparklesIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

const RocketIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.82m2.56-5.84a14.98 14.98 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const WrenchIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.84-5.84a2 2 0 010-2.83l.88-.88a2 2 0 012.83 0l5.84 5.84m-2.83 2.83l5.84 5.84a2 2 0 002.83 0l.88-.88a2 2 0 000-2.83l-5.84-5.84M3.59 4.76l2.83 2.83M20.41 19.24l-2.83-2.83M14 6l-1-1M18 10l1 1" />
  </svg>
);

const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ArrowLeftIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);

const LightBulbIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

/* ---------- SECTION WRAPPER ---------- */
function Section({ title, icon, subtitle, children, delay = 0 }) {
  return (
    <div className="mb-14" data-aos="fade-up" data-aos-duration="800" data-aos-delay={delay}>
      <div className="flex items-center gap-3 mb-2">
        {icon && (
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      {subtitle && (
        <p className="text-gray-500 mb-6 ml-12">{subtitle}</p>
      )}
      <div className={icon ? "ml-12" : ""}>{children}</div>
    </div>
  );
}

export default function Page({ params }) {
  useAOS();
  const detail = works[params.id];

  if (!detail) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
          <SearchIcon className="w-7 h-7 text-blue-500" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Experience not found
        </h2>
        <p className="text-gray-500 mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:-translate-y-0.5 transition-all duration-300">
            <ArrowLeftIcon /> Go back home
          </button>
        </Link>
      </div>
    );
  }

  const { image, company, location, role, duration, summary, jobDesk, projects, stacks, highlights, learnings } = detail;

  const getEmploymentType = (r) =>
    r.toLowerCase().includes("intern") ? "Internship" : "Full-time";

  return (
    <>
      <BackgroundDecor />
      <section className="relative py-32 overflow-hidden">
        <div className="relative container mx-auto px-4 lg:px-36 max-w-[1200px]">

          {/* BACK BUTTON */}
          <Link href="/" data-aos="fade-right" data-aos-duration="600">
            <div className="group inline-flex items-center gap-2.5 mb-12 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur border border-white/40 text-sm font-medium text-gray-700 hover:-translate-x-1 hover:bg-white/80 hover:border-blue-200 transition-all duration-300">
              <ArrowLeftIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to experience
            </div>
          </Link>

          {/* HERO */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-10" data-aos="fade-up" data-aos-duration="800">
            <div className="w-[88px] h-[88px] rounded-full bg-white flex items-center justify-center shadow-[0_15px_30px_-15px_rgba(0,0,0,0.3)] group hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 flex-shrink-0">
              <Image src={image} alt={company} width={64} height={64} className="rounded-full object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1.5">{role}</h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="text-gray-600 font-medium">{company}</p>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
                <p className="text-gray-500 text-sm">{location}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {duration}
                </span>
                <span className="inline-flex px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                  {getEmploymentType(role)}
                </span>
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS (if available) */}
          {highlights && highlights.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              {highlights.map((h, i) => (
                <div key={i} className="group rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 p-5 hover-lift hover:border-blue-200 transition-all duration-300 cursor-default">
                  <p className="text-2xl font-extrabold text-gradient-blue mb-1">{h.value}</p>
                  <p className="font-semibold text-gray-900 text-sm">{h.label}</p>
                  <p className="text-xs text-gray-400 mt-1">{h.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* MAIN CONTENT CARD */}
          <div className="rounded-[32px] bg-white/55 backdrop-blur-xl border border-white/40 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.35)] p-8 lg:p-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">

            {/* SUMMARY */}
            <Section title="What I did here" icon={<SparklesIcon />} subtitle="A short overview of my role and responsibilities.">
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">{summary}</p>
            </Section>

            {/* JOB DESK */}
            <Section title="My main responsibilities" icon={<BriefcaseIcon />} subtitle="Things I worked on day-to-day." delay={50}>
              <ul className="grid sm:grid-cols-2 gap-3">
                {jobDesk?.map((job, index) => (
                  <li key={index} className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-blue-50/40 transition-colors duration-300 cursor-default">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-600">{job}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* PROJECTS */}
            <Section title="Projects I worked on" icon={<RocketIcon />} subtitle="Some notable products and features I helped build." delay={100}>
              <div className="space-y-4">
                {projects?.map((project, index) => (
                  <Link key={index} href={`/projects/${detail.id}/${index}`} className="block group" scroll>
                    <div className="relative overflow-hidden rounded-2xl p-5 lg:p-6 bg-white/50 backdrop-blur-lg border border-white/40 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.15)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_24px_50px_-20px_rgba(59,130,246,0.2)] hover:border-blue-200">
                      {/* glow */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-200/30 via-transparent to-indigo-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative flex items-center gap-5">
                        {/* Thumbnail */}
                        <div className="w-[72px] h-[72px] lg:w-[96px] lg:h-[96px] rounded-xl overflow-hidden bg-white shadow-sm flex-shrink-0 group-hover:shadow-md transition-shadow duration-300">
                          <Image src="/images/projects/image_not_available.png" alt={project.name} width={96} height={96} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-base lg:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 truncate">{project.name}</h4>
                            {project.isPrivate && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[10px] font-medium flex-shrink-0">
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                NDA
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-2">{project.description || "No description available"}</p>
                          <div className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 opacity-80 group-hover:opacity-100 transition-all duration-300">
                            View details
                            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Section>

            {/* TECH STACK */}
            <Section title="Tech stack" icon={<WrenchIcon />} subtitle="Tools and technologies I used in this role." delay={150}>
              <div className="flex flex-wrap gap-3">
                {stacks?.map((stack, index) => (
                  <span key={index} className="group relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/75 backdrop-blur border border-white/40 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.15)] hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-default">
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/40 via-transparent to-indigo-200/40 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{stack}</span>
                  </span>
                ))}
              </div>
            </Section>

            {/* KEY LEARNINGS (if available) */}
            {learnings && learnings.length > 0 && (
              <Section title="Key learnings" icon={<LightBulbIcon />} subtitle="What this experience taught me." delay={200}>
                <ul className="space-y-3">
                  {learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-3 group cursor-default">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <span className="text-gray-600">{learning}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            )}
          </div>

          {/* OTHER EXPERIENCE */}
          <div className="mt-28" data-aos="fade-up" data-aos-duration="800">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                <BriefcaseIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Other experiences</h3>
            </div>
            <p className="text-gray-500 mb-6 ml-12">Want to see what else I&apos;ve worked on?</p>
            <div className="space-y-6 ml-12">
              {works.filter((_, i) => i !== parseInt(params.id)).map((work, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 80}>
                  <ExperienceCard work={work} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
