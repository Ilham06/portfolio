"use client";

import { experiences, linkedin, product } from "@/data";
import Image from "next/image";
import React from "react";
import MainButton from "./buttons/MainButton";
import CountUp from "react-countup";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-12" id="about">
      <div
        className="flex items-center flex-wrap justify-center gap-10 lg:gap-4"
        data-aos-duration="1000"
        data-aos="fade-up"
      >
        <div className="lg:w-[25%]">
          <Image src="/images/me.png" width="223" height="255" alt="me" />
        </div>
        <div className="lg:w-[70%] text-center lg:text-start">
          <h2 className="font-bold text-2xl mb-4 text-black-primary">
            <span className="text-blue-primary">About</span> Me
          </h2>
          <p className="mb-4 text-black-main">
            Iam a software engineer with over 3 years of experience in web and
            mobile development, primarily focused on the education, business,
            and government sectors. With expertise in JavaScript and its
            ecosystem, I have worked with a variety of modern tools and
            technologies to deliver impactful solutions. In addition to my
            professional work, I also manage my personal project,{" "}
            <Link target="_blank" href={product.url}>
              <span className="font-bold text-blue-primary">
                {product.name}
              </span>
            </Link>
            , aimed at providing valuable resources for developers and students
            in the tech field. I am passionate about innovation and leveraging
            technology to solve real-world challenges.
          </p>
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start">
            <MainButton
              target={"_blank"}
              path={linkedin}
              title={"More about me"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              }
            />
            <MainButton
              target={"_blank"}
              path={product.url}
              title={"View my product"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
      <div
        className="bg-[#F7F9FB] w-full mt-16 p-6 rounded-xl grid grid-cols-1 lg:grid-cols-3 gap-4"
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {experiences.map((experience, index) => {
          return (
            <div className="mb-8 lg:mb-0" key={index}>
              <h2 className="text-4xl font-extrabold mb-2 text-[#1E84EC]">
                <CountUp
                  start={0}
                  end={experience.title}
                  duration={2.5}
                  separator=","
                />
                {index == 0 && "TH+"}
              </h2>
              <p className="text-sm text-[#404040]">{experience.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
