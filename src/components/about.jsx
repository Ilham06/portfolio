"use client";

import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="relative pb-32 pt-10 px-4 overflow-hidden">
      <div
        className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Left — image + approach card */}
        <div className="relative">
          {/* Main image */}
          <div className="rounded-3xl overflow-hidden shadow-sm">
            <Image
              src="/images/about-me.png"
              alt="About Ilham"
              width={560}
              height={480}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* My approach card */}
          <div className="absolute bottom-6 right-0 translate-x-4 bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] p-5 w-52">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <p className="font-bold text-gray-900 text-sm mb-2">My approach</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Listen. Understand. Create. Deliver. Improve. Repeat.
            </p>
          </div>
        </div>

        {/* Right — text content */}
        <div>
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
            About me
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            My <span className="text-blue-600">story</span>
          </h2>

          {/* Body */}
          <p className="text-gray-600 text-base leading-relaxed mb-5">
            I help turn complex ideas into simple, effective solutions. My work
            focuses on clarity, usability, and long-term impact — whether
            building products, improving systems, or shaping new concepts.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-10">
            I enjoy turning challenges into opportunities and creating
            experiences that people truly value.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            {/* Years of experience */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-extrabold text-blue-600">4+</p>
                <p className="text-sm text-gray-500">Years of experience</p>
              </div>
            </div>

            {/* Client-focused */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-extrabold text-blue-600">
                  Client-focused
                </p>
                <p className="text-sm text-gray-500">
                  Dedicated to quality and results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
