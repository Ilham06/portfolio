import { works } from "@/data";
import Link from "next/link";
import Image from "next/image";
import BackgroundDecor from "@/components/common/BackgroundDecor";
import MainButton from "@/components/buttons/MainButton";

export default function ProjectDetailPage({ params }) {
  const { workId, projectId } = params;

  const work = works[workId];
  const project = work?.projects[projectId];

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-xl font-semibold text-black-primary">
          Project not found
        </h2>
      </div>
    );
  }

  return (
    <>
      <BackgroundDecor />
      <section className="relative py-32 overflow-hidden">
        <div className="relative container mx-auto px-4 lg:px-36 max-w-[1200px]">
          {/* BACK */}
          <Link href={`/work/${workId}`}>
            <div
              className="
              inline-flex items-center gap-2 mb-16
              px-5 py-2.5 rounded-full
              bg-white/70 backdrop-blur
              border border-white/40
              text-sm font-medium text-black-primary
            "
            >
              ← Back to experience
            </div>
          </Link>

          {/* HERO */}
          <div className="text-center mb-20">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-primary">
              Project Overview
            </span>

            <div className="flex flex-col items-center gap-4">
              {/* PRIVATE BADGE */}
              {project.isPrivate && (
                <span
                  className="
        inline-flex items-center gap-2
        px-4 py-1.5
        rounded-full
        text-xs font-medium
        bg-black/80 text-white
        tracking-wide
      "
                >
                  🔒 Private Project · NDA
                </span>
              )}

              <h1 className="text-4xl md:text-5xl font-extrabold text-black-primary leading-snug mb-6">
                {project.name}
              </h1>
            </div>

            {project.description && (
              <p className="max-w-3xl mx-auto text-lg text-black-main leading-relaxed">
                {project.description}
              </p>
            )}
          </div>

          {/* IMAGE */}
          <div
            className="
            relative mb-24
            rounded-[32px] overflow-hidden
            bg-white/60 backdrop-blur-xl
            border border-white/40
            shadow-[0_40px_90px_-40px_rgba(0,0,0,0.35)]
          "
          >
            <div className="relative w-full h-[260px] md:h-[440px]">
              <Image
                src="/images/projects/image_not_available.png"
                alt="Project preview"
                fill
                className="object-cover"
              />
            </div>

            {project.isPrivate && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-black/70 text-white text-sm">
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
              <div>
                <SectionTitle
                  title="Project context"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v8m4-4H8"
                    />
                  }
                />

                <p className="text-black-main leading-relaxed text-lg">
                  {project.fullDescription}
                </p>

                {project.isPrivate && (
                  <p className="mt-4 text-sm text-black/50 italic">
                    Some technical details are intentionally omitted due to
                    confidentiality and NDA restrictions.
                  </p>
                )}
              </div>

              {/* TASKS */}
              {project.tasks && project.tasks.length > 0 && (
                <div>
                  <SectionTitle
                    title="What I worked on"
                    icon={
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    }
                  />

                  <ul className="mt-5 space-y-3">
                    {project.tasks.map((task, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-black-main"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-primary flex-shrink-0" />
                        <p className="leading-relaxed">{task}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div>
              <SectionTitle
                title="Tech stack"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                }
              />

              <div className="flex flex-wrap gap-3 mt-6">
                {work.stacks.map((item, index) => (
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
                    <span className="relative z-10">{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-32 text-center">
            <p className="text-black-main mb-7 text-lg">
              Interested in building something similar?
            </p>

            <MainButton
              path="/#contact"
              title="Let’s work together"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Section Title with Luxury Icon ---------- */

function SectionTitle({ title, icon }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div
        className="
          relative w-10 h-10
          rounded-xl
          bg-gradient-to-br from-blue-100 to-indigo-100
          text-blue-primary
          flex items-center justify-center
          shadow-[0_8px_28px_-14px_rgba(59,130,246,0.45)]
        "
      >
        {/* inner highlight */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/60 via-transparent to-white/20" />

        {/* glow */}
        <div className="absolute -inset-1 rounded-xl bg-blue-200/40 blur-xl" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          {icon}
        </svg>
      </div>

      <h3 className="text-2xl font-bold text-black-primary">{title}</h3>
    </div>
  );
}
