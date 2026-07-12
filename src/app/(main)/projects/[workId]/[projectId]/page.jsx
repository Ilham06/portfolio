"use client";

import { works } from "@/data";
import Link from "next/link";
import Image from "next/image";
import BackgroundDecor from "@/components/common/BackgroundDecor";
import MainButton from "@/components/buttons/MainButton";
import useAOS from "@/hooks/useAos";

/* ---------- SVG ICONS ---------- */
const ArrowLeftIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const LockIcon = ({ className = "w-4 h-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ShieldIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

/* ---------- SECTION TITLE ---------- */
function SectionTitle({ title, icon, delay = 0 }) {
  return (
    <div className="flex items-center gap-3.5 mb-5" data-aos="fade-up" data-aos-duration="700" data-aos-delay={delay}>
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_8px_28px_-14px_rgba(59,130,246,0.45)]">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/60 via-transparent to-white/20" />
        <div className="absolute -inset-1 rounded-xl bg-blue-200/40 blur-xl" />
        <div className="relative z-10">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
  );
}

/* ---------- CONTEXT ICON ---------- */
const ContextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v9a2 2 0 01-2 2h-2z" />
  </svg>
);

/* ---------- TASK ICON ---------- */
const TaskIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

/* ---------- STACK ICON ---------- */
const StackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.84-5.84a2 2 0 010-2.83l.88-.88a2 2 0 012.83 0l5.84 5.84m-2.83 2.83l5.84 5.84a2 2 0 002.83 0l.88-.88a2 2 0 000-2.83l-5.84-5.84M3.59 4.76l2.83 2.83M20.41 19.24l-2.83-2.83M14 6l-1-1M18 10l1 1" />
  </svg>
);

/* ---------- CHECK ICON ---------- */
const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function ProjectDetailPage({ params }) {
  useAOS();
  const { workId, projectId } = params;

  const work = works[workId];
  const project = work?.projects[projectId];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
          <SearchIcon className="w-7 h-7 text-blue-500" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Project not found</h2>
        <p className="text-gray-500 mb-6">The project you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:-translate-y-0.5 transition-all duration-300">
            <ArrowLeftIcon /> Go back home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <BackgroundDecor />
      <section className="relative py-32 overflow-hidden">
        <div className="relative container mx-auto px-4 lg:px-36 max-w-[1200px]">

          {/* BACK */}
          <Link href={`/work/${workId}`} data-aos="fade-right" data-aos-duration="600">
            <div className="group inline-flex items-center gap-2.5 mb-16 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur border border-white/40 text-sm font-medium text-gray-700 hover:-translate-x-1 hover:bg-white/80 hover:border-blue-200 transition-all duration-300">
              <ArrowLeftIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to experience
            </div>
          </Link>

          {/* HERO */}
          <div className="text-center mb-20" data-aos="fade-up" data-aos-duration="800">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
              Project Overview
            </span>

            <div className="flex flex-col items-center gap-4">
              {/* PRIVATE BADGE */}
              {project.isPrivate && (
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-gray-900 text-white tracking-wide">
                  <LockIcon className="w-3.5 h-3.5" />
                  Private Project · NDA
                </span>
              )}

              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-6">
                {project.name}
              </h1>
            </div>

            {project.description && (
              <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            )}

            {/* Company info pills */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur border border-white/40 text-sm text-gray-600">
                <Image src={work.image} alt={work.company} width={20} height={20} className="w-5 h-5 rounded-full object-cover" />
                {work.company}
              </span>
              <span className="inline-flex px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur border border-white/40 text-sm text-gray-500">
                {work.role}
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="relative mb-24 rounded-[32px] overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.35)] group hover-zoom"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="relative w-full h-[260px] md:h-[440px]">
              <Image
                src="/images/projects/image_not_available.png"
                alt="Project preview"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {project.isPrivate && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4">
                  <ShieldIcon className="w-7 h-7 text-white" />
                </div>
                <span className="px-5 py-2 rounded-full bg-black/60 text-white text-sm font-medium">
                  Preview hidden (NDA)
                </span>
              </div>
            )}
          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* LEFT */}
            <div className="lg:col-span-2 space-y-14">
              {/* CONTEXT */}
              <div data-aos="fade-up" data-aos-duration="800">
                <SectionTitle title="Project context" icon={<ContextIcon />} />

                <p className="text-gray-600 leading-relaxed text-lg ml-[54px]">
                  {project.fullDescription}
                </p>

                {project.isPrivate && (
                  <div className="mt-4 ml-[54px] flex items-start gap-2.5 p-4 rounded-xl bg-amber-50/60 border border-amber-200/50">
                    <LockIcon className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-700">
                      Some technical details are intentionally omitted due to confidentiality and NDA restrictions.
                    </p>
                  </div>
                )}
              </div>

              {/* TASKS */}
              {project.tasks && project.tasks.length > 0 && (
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                  <SectionTitle title="What I worked on" icon={<TaskIcon />} delay={100} />

                  <ul className="mt-5 space-y-2 ml-[54px]">
                    {project.tasks.map((task, index) => (
                      <li
                        key={index}
                        className="group flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-blue-50/40 transition-colors duration-300 cursor-default"
                      >
                        <CheckIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        <p className="text-gray-600 leading-relaxed">{task}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* RIGHT — SIDEBAR */}
            <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
              {/* Tech Stack */}
              <div className="sticky top-24">
                <SectionTitle title="Tech stack" icon={<StackIcon />} delay={150} />

                <div className="flex flex-wrap gap-3 mt-6 ml-[54px] lg:ml-0">
                  {work.stacks.map((item, index) => (
                    <span
                      key={index}
                      className="group relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/75 backdrop-blur border border-white/40 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.15)] hover:border-blue-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-default"
                    >
                      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/40 via-transparent to-indigo-200/40 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">{item}</span>
                    </span>
                  ))}
                </div>

                {/* Project info card */}
                <div className="mt-8 p-5 rounded-2xl bg-white/50 backdrop-blur border border-white/40 shadow-sm ml-[54px] lg:ml-0" data-aos="fade-up" data-aos-delay="200">
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">Project info</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Company</span>
                      <span className="font-medium text-gray-700">{work.company}</span>
                    </div>
                    <div className="w-full h-px bg-gray-100" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Role</span>
                      <span className="font-medium text-gray-700">{work.role}</span>
                    </div>
                    <div className="w-full h-px bg-gray-100" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Period</span>
                      <span className="font-medium text-gray-700 text-right text-xs">{work.duration}</span>
                    </div>
                    {project.isPrivate && (
                      <>
                        <div className="w-full h-px bg-gray-100" />
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Status</span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-xs font-medium">
                            <LockIcon className="w-3 h-3" /> NDA
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-32 text-center" data-aos="fade-up" data-aos-duration="800">
            <div className="relative mx-auto max-w-lg rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/60 p-10">
              {/* Decorative dots */}
              <div className="pointer-events-none absolute top-4 right-6 w-2 h-2 rounded-full bg-blue-300/30 animate-float" />
              <div className="pointer-events-none absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full bg-indigo-300/30 animate-float-slow" />

              <p className="text-gray-700 mb-7 text-lg font-medium">
                Interested in building something similar?
              </p>

              <MainButton
                path="/#contact"
                title="Let's work together"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
