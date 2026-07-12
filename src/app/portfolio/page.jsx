"use client";

import { useState, useEffect, useCallback } from "react";
import { works } from "@/data";
import Image from "next/image";
import Link from "next/link";
import BackgroundDecor from "@/components/common/BackgroundDecor";

/* ─── Flatten all projects with work context ─── */
const allProjects = works.flatMap((work, wi) =>
  work.projects.map((project, pi) => ({
    ...project,
    workId: wi,
    projectId: pi,
    company: work.company,
    companyImage: work.image,
    role: work.role,
    duration: work.duration,
    stacks: work.stacks,
  }))
);

/* ─── Icons ─── */
const ArrowLeftIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const LockIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ShieldIcon = ({ className = "w-8 h-8" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ClockIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
  </svg>
);


export default function PortfolioPage() {
  /* ── project slider state ── */
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState("next");
  const [animKey, setAnimKey] = useState(0);
  const [lang, setLang] = useState("en");

  /* ── image slider state (within a project) ── */
  const [imgIndex, setImgIndex] = useState(0);
  const [imgDir, setImgDir] = useState("next");
  const [imgKey, setImgKey] = useState(0);
  const [imgError, setImgError] = useState(false);

  /* ── navigate projects ── */
  const goTo = useCallback(
    (index) => {
      if (index === current) return;
      setAnimDir(index > current ? "next" : "prev");
      setCurrent(index);
      setAnimKey((k) => k + 1);
      setImgIndex(0);
      setImgKey((k) => k + 1);
      setImgError(false);
    },
    [current]
  );

  const goPrev = useCallback(() => {
    goTo(current === 0 ? allProjects.length - 1 : current - 1);
  }, [current, goTo]);

  const goNext = useCallback(() => {
    goTo(current === allProjects.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  /* ── navigate images within a project ── */
  const goImgTo = useCallback(
    (index) => {
      if (index === imgIndex) return;
      setImgDir(index > imgIndex ? "next" : "prev");
      setImgIndex(index);
      setImgKey((k) => k + 1);
      setImgError(false);
    },
    [imgIndex]
  );

  const goImgPrev = useCallback(
    (len) => {
      const newIdx = imgIndex === 0 ? len - 1 : imgIndex - 1;
      setImgDir("prev");
      setImgIndex(newIdx);
      setImgKey((k) => k + 1);
      setImgError(false);
    },
    [imgIndex]
  );

  const goImgNext = useCallback(
    (len) => {
      const newIdx = imgIndex === len - 1 ? 0 : imgIndex + 1;
      setImgDir("next");
      setImgIndex(newIdx);
      setImgKey((k) => k + 1);
      setImgError(false);
    },
    [imgIndex]
  );

  /* ── keyboard: arrow keys → project navigation ── */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);

  const project = allProjects[current];
  const images = project.images ?? [];
  const currentImageUrl = images[imgIndex] ?? null;
  const showImage = currentImageUrl !== null && !imgError;
  const hasMultipleImages = images.length > 1;

  const slideAnim = animDir === "next" ? "animate-slide-from-right" : "animate-slide-from-left";
  const imgSlideAnim = imgDir === "next" ? "animate-slide-from-right" : "animate-slide-from-left";
  const total = allProjects.length;
  const counter = `${String(current + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <div className="relative flex flex-col lg:flex-row lg:h-screen overflow-hidden">
      <BackgroundDecor />

      {/* ─────────── LEFT PANE ─────────── */}
      <div className="relative flex flex-col w-full lg:w-[46%] min-h-[55vh] lg:h-full px-8 lg:px-16 pt-24 lg:pt-0 pb-8 lg:pb-0 lg:justify-between">

        {/* Back button */}
        <Link
          href="/"
          className="group absolute top-6 left-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-white/40 text-sm font-medium text-gray-700 hover:-translate-x-1 hover:bg-white/80 hover:border-blue-200 transition-all duration-300 z-10"
        >
          <ArrowLeftIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back
        </Link>

        {/* ─── Slide content ─── */}
        <div key={animKey} className={`flex-1 flex flex-col justify-center ${slideAnim} relative overflow-hidden`}>

          {/* Big faded background number */}
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -left-4 top-1/2 -translate-y-1/2 text-[clamp(100px,18vw,180px)] font-black leading-none text-gray-100"
            style={{ zIndex: 0 }}
          >
            {String(current + 1).padStart(2, "0")}
          </span>

          <div className="relative z-10 lg:py-16">

            {/* Company badge */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-full bg-white shadow-[0_4px_12px_-4px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src={project.companyImage}
                  alt={project.company}
                  width={28}
                  height={28}
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-sm font-medium text-gray-500">{project.company}</span>
            </div>

            {/* Project name */}
            <h1 className="text-[clamp(22px,3.5vw,40px)] font-extrabold text-gray-900 leading-[1.15] mb-5">
              {project.name}
            </h1>

            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                <BriefcaseIcon />
                {project.role}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                <ClockIcon />
                {project.duration}
              </span>
              {project.isPrivate && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-600 text-xs font-medium border border-amber-100">
                  <LockIcon />
                  NDA · Private
                </span>
              )}
            </div>

            {/* Description */}
            <div className="mb-7">
              {/* Language toggle */}
              <div className="flex items-center gap-1 mb-3 w-fit rounded-full bg-gray-100 p-0.5">
                {["en", "id"].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                      lang === l
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-400 hover:text-gray-500"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed text-[15px] line-clamp-4 max-w-md">
                {lang === "id"
                  ? project.fullDescriptionId || project.descriptionId || project.fullDescription || project.description
                  : project.fullDescription || project.description}
              </p>
            </div>

            {/* Tasks */}
            {project.tasks?.length > 0 && (
              <div className="mb-9">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                  {lang === "id" ? "Yang saya kerjakan" : "What I worked on"}
                </p>
                <ul className="space-y-2">
                  {(lang === "id" ? project.tasksId ?? project.tasks : project.tasks).slice(0, 4).map((task, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-500 leading-relaxed">
                      <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                  {project.tasks.length > 4 && (
                    <li className="text-[13px] text-gray-400 pl-4">
                      +{project.tasks.length - 4} {lang === "id" ? "lainnya" : "more"}
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* CTA */}
            <Link
              href={`/projects/${project.workId}/${project.projectId}`}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all duration-300"
            >
              View project details
              <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ─── Navigation ─── */}
        <div className="flex items-center justify-between pt-4 pb-4 lg:pb-10">
          {/* Prev */}
          <button
            onClick={goPrev}
            className="w-11 h-11 rounded-full bg-white/70 backdrop-blur border border-white/40 shadow-sm flex items-center justify-center text-gray-600 hover:border-blue-200 hover:text-blue-600 hover:-translate-x-0.5 transition-all duration-300"
            aria-label="Previous project"
          >
            <ArrowLeftIcon className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-1.5">
            {allProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-blue-500"
                    : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter + Next */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-400 tabular-nums">{counter}</span>
            <button
              onClick={goNext}
              className="w-11 h-11 rounded-full bg-white/70 backdrop-blur border border-white/40 shadow-sm flex items-center justify-center text-gray-600 hover:border-blue-200 hover:text-blue-600 hover:translate-x-0.5 transition-all duration-300"
              aria-label="Next project"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ─────────── RIGHT PANE — Visual ─────────── */}
      <div className="group/imgpane relative w-full lg:w-[54%] h-[50vw] min-h-[280px] lg:h-full flex-shrink-0 overflow-hidden">

        {/* Project-change fade-in wrapper */}
        <div key={`proj-${animKey}`} className="absolute inset-0 animate-fade-in">

          {showImage ? (
            <>
              {/* Image with slide animation on image-index change */}
              <div key={`img-${imgKey}`} className={`absolute inset-0 ${imgSlideAnim}`}>
                <Image
                  src={currentImageUrl}
                  alt={project.name}
                  fill
                  className="object-cover object-top"
                  priority
                  onError={() => setImgError(true)}
                />
              </div>

              {/* Gradient overlays */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/20 to-transparent hidden lg:block pointer-events-none" />
              {!project.isPrivate && (
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              )}
            </>
          ) : (
            /* ── No-image state: gradient + company logo ── */
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50">
              <div className="absolute top-1/4 -left-20 w-[380px] h-[380px] rounded-full bg-blue-100/50 blur-[100px]" />
              <div className="absolute bottom-1/4 -right-20 w-[320px] h-[320px] rounded-full bg-indigo-100/50 blur-[90px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-blue-200/30 blur-[60px]" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/40 to-transparent hidden lg:block pointer-events-none" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <div className="w-[88px] h-[88px] rounded-[28px] bg-white shadow-[0_24px_60px_-16px_rgba(0,0,0,0.18)] flex items-center justify-center">
                  <Image src={project.companyImage} alt={project.company} width={60} height={60} className="rounded-full object-contain" />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-800">{project.company}</p>
                  <p className="text-sm text-gray-400 mt-1">{project.role}</p>
                </div>
                <span className="px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-white/60 text-xs font-medium text-gray-500 shadow-sm">
                  {project.name}
                </span>
              </div>
            </div>
          )}

          {/* NDA overlay */}
          {project.isPrivate && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4">
                <ShieldIcon className="text-white" />
              </div>
              <span className="px-5 py-2 rounded-full bg-black/50 text-white text-sm font-medium tracking-wide">
                Preview hidden · NDA
              </span>
            </div>
          )}
        </div>

        {/* ── Image prev/next arrows (only when multiple images, not private) ── */}
        {hasMultipleImages && !project.isPrivate && (
          <>
            <button
              onClick={() => goImgPrev(images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/imgpane:opacity-100 hover:bg-black/40 transition-all duration-300"
              aria-label="Previous image"
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => goImgNext(images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/imgpane:opacity-100 hover:bg-black/40 transition-all duration-300"
              aria-label="Next image"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </>
        )}

        {/* ── Bottom bar: image dots + caption ── */}
        {!project.isPrivate && showImage && (
          <div className="absolute bottom-5 inset-x-5 z-20 flex items-end justify-between pointer-events-none">
            {/* Project name */}
            <span className="px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
              {project.name}
            </span>

            <div className="flex flex-col items-end gap-2.5">
              {/* Image dots */}
              {hasMultipleImages && (
                <div className="flex items-center gap-1.5 pointer-events-auto">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goImgTo(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === imgIndex
                          ? "w-5 h-1.5 bg-white"
                          : "w-1.5 h-1.5 bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
              {/* Company */}
              <span className="px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-sm text-white/80 text-xs">
                {project.company}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
