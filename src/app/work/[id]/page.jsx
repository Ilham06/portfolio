import BackgroundDecor from "@/components/common/BackgroundDecor";
import ExperienceCard from "@/components/experienceCard";
import { works } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getEmploymentType = (role) =>
  role.toLowerCase().includes("intern") ? "Internship" : "Full-time";

export default function Page({ params }) {
  const id = Number(params.id);
  const detail = works[id];

  if (!detail) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Experience not found.</h2>
      </div>
    );
  }

  const { image, company, role, duration, summary, jobDesk, stacks, highlights, learnings } = detail;
  const employmentType = getEmploymentType(role);
  const otherWorks = works.filter((_, i) => i !== id);

  return (
    <>
      <BackgroundDecor />

      <div className="relative container mx-auto max-w-[1400px] px-4 lg:px-32 pt-8 pb-32">

        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Experience
        </Link>

        {/* Hero card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-10">
          <span className="inline-block mb-5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
            {employmentType}
          </span>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* Logo + info */}
            <div className="flex items-start gap-6 flex-1">
              <div className="w-20 h-20 rounded-full bg-white border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center flex-shrink-0">
                <Image src={image} alt={company} width={80} height={80} className="rounded-full object-cover" />
              </div>

              <div className="flex-1">
                <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
                  {role} <span className="text-gray-400 font-normal">· {company}</span>
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Indonesia
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-2xl">{summary}</p>

                <div className="flex flex-wrap gap-2">
                  {stacks?.map((s, i) => (
                    <span key={i} className="px-3 py-1 rounded-full border border-gray-200 text-xs text-gray-500 bg-white">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="hidden lg:block border-l border-gray-100 pl-8 flex-shrink-0 space-y-4 min-w-[160px]">
              <div>
                <p className="text-xs text-gray-400 mb-1">Role</p>
                <p className="text-sm font-medium text-gray-800">{role}</p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-400 mb-1">Employment</p>
                <p className="text-sm font-medium text-gray-800">{employmentType}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content (single column) */}
        <div className="space-y-10 mb-20">

          {/* About the role */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">About the role</h2>
            <p className="text-gray-600 leading-relaxed">{summary}</p>
          </div>

          <div className="border-t border-gray-100" />

          {/* Key responsibilities */}
          {jobDesk?.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Key responsibilities</h2>
              <ul className="space-y-3">
                {jobDesk.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlights & impact */}
          {highlights?.length > 0 && (
            <>
              <div className="border-t border-gray-100" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-5">Highlights & impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {highlights.map((h, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                          {i === 0 && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          )}
                          {i === 1 && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          )}
                          {i === 2 && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          )}
                        </div>
                        <p className="text-2xl font-extrabold text-blue-600">{h.value}</p>
                      </div>
                      <p className="font-bold text-gray-800 text-sm mb-1">{h.label}</p>
                      <p className="text-xs text-gray-400">{h.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="border-t border-gray-100" />

          {/* Technologies used */}
          {stacks?.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Technologies used</h2>
              <div className="flex flex-wrap gap-2">
                {stacks.map((s, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full border border-gray-200 text-sm text-gray-600 bg-white">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* What I learned */}
          {learnings?.length > 0 && (
            <>
              <div className="border-t border-gray-100" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-5">What I learned</h2>
                <ul className="space-y-3">
                  {learnings.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Other experiences */}
        {otherWorks.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Other experiences</h2>
            <div className="space-y-4">
              {otherWorks.map((work, i) => (
                <ExperienceCard key={i} work={work} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
