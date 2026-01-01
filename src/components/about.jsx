"use client";

import { experiences, linkedin, product } from "@/data";
import React from "react";
import MainButton from "./buttons/MainButton";
import CountUp from "react-countup";

export default function About() {
  return (
    <section id="about" className="relative pb-32 pt-10 px-4 overflow-hidden">
      {/* Heading */}
      <div
        className="relative max-w-4xl mx-auto text-center mb-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-primary">
          About me
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-black-primary mb-4 leading-tight">
          A little story <span className="text-blue-primary">about me</span>
        </h2>

        <p className="text-black-main max-w-2xl mx-auto text-lg leading-relaxed">
          More than a résumé — this is a glimpse into how I think, build,
          and continuously grow as a software engineer.
        </p>
      </div>

      {/* Story */}
      <div
        className="relative max-w-5xl mx-auto mb-24 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="text-black-main text-lg leading-relaxed mb-12">
          I’m a software engineer with <strong>4+ years of hands-on experience</strong>{" "}
          building web and mobile applications across education, business,
          and government sectors. I work primarily with JavaScript and its ecosystem,
          focusing on creating products that are clean in architecture,
          reliable in production, and maintainable in the long run.
          <br /><br />
          I enjoy turning complex requirements into simple, thoughtful solutions —
          balancing technical quality, user experience, and real-world constraints
          in every project I work on.
        </p>

        {/* CTA */}
        <div className="mt-14 flex gap-4 flex-wrap justify-center">
          <MainButton
            target="_blank"
            path={linkedin}
            title="Explore my background"
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          />

          <MainButton
            target="_blank"
            path={product.url}
            title="See what I’ve built"
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
                  d="M12 6v12m6-6H6"
                />
              </svg>
            }
          />
        </div>
      </div>

      {/* Stats */}
      <div
        className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="150"
      >
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="
              rounded-2xl
              bg-white/60 backdrop-blur
              border border-white/40
              shadow-[0_20px_40px_-25px_rgba(0,0,0,0.3)]
              p-6 text-center
              transition-all duration-300
              hover:-translate-y-[3px]
            "
          >
            <h3 className="text-4xl font-extrabold text-blue-primary mb-2">
              <CountUp start={0} end={experience.title} duration={2.5} />
              {index === 0 && "TH+"}
            </h3>
            <p className="text-sm text-black-main">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
