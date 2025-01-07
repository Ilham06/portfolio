import ExperienceCard from "@/components/experienceCard";
import { works } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DescriptionDetailWrapper({ title, children }) {
  return (
    <div className="mt-7">
      <h3 className="font-semibold text-base text-black-primary mb-2">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function page({ params }) {
  const detail = works[params.id];
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
    <div className="container mx-auto px-4 lg:px-36 max-w-[1200px] mb-6 pt-4">
      <Link href="/">
        <button className="btn mb-2 bg-grey-primary-bg border-none">
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
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Back
        </button>
      </Link>
      <div className="bg-grey-primary-bg rounded-xl p-6">
        <h2 className="font-semibold text-2xl">Work Experience Detail</h2>
        <div className="bg-white p-4 mt-6 rounded-xl">
          <div className="">
            <Image
              src={image}
              alt="logo"
              width={90}
              height={90}
              className="rounded-[50%] border"
            />
          </div>
          <div className="mt-6">
            <table className="text-black-main">
              <tbody>
                <tr className="mb-3">
                  <td width="45%">Company</td>
                  <td className="font-medium">{company}</td>
                </tr>
                <tr className="mb-3">
                  <td width="45%">Position</td>
                  <td className="font-medium">{role}</td>
                </tr>
                <tr className="mb-3">
                  <td width="45%">Duration</td>
                  <td className="font-medium">{duration}</td>
                </tr>
                <tr className="mb-3">
                  <td width="45%">Location</td>
                  <td className="font-medium">{location}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <DescriptionDetailWrapper title={"Job Desk"}>
            <p className="text-black-main text-sm lg:text-base">{summary}</p>
          </DescriptionDetailWrapper>
          <DescriptionDetailWrapper title={"What i do here?"}>
            <ul className="list-disc ml-6 text-sm lg:text-base">
              {jobDesk?.map((job, index) => {
                return <li key={index}>{job}</li>;
              })}
            </ul>
          </DescriptionDetailWrapper>
          <DescriptionDetailWrapper title={"Projects"}>
            <ul className="list-disc ml-6 text-sm lg:text-base">
              {projects?.map((project, index) => {
                return <li key={index}>{project.name}</li>;
              })}
            </ul>
          </DescriptionDetailWrapper>
          <DescriptionDetailWrapper title={"Techstack used"}>
            <ul className="list-disc ml-6 text-sm lg:text-base">
              {stacks?.map((stack, index) => {
                return <li key={index}>{stack}</li>;
              })}
            </ul>
          </DescriptionDetailWrapper>
        </div>
        <div className="mt-16">
          <div className="text-black-primary">
            <h3 className="font-semibold text-2xl mb-3">Other Experience</h3>
            <p>See my amazing other word experience in another company.</p>
          </div>
          <div className="mt-6">
            {works.map((work, index) => {
              return <ExperienceCard key={index} work={work} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
