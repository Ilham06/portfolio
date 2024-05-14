"use client";

import React from "react";
import Image from "next/image";
import DescriptionDetailWrapper from "../DescriptionDetailWrapper";

export default function WorkExperienceDetail({ detail }) {
  console.log(detail)
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
    <div className="rounded-[10px] bg-white mt-6 p-6">
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
          {jobDesk.map((job, index) => {
            return <li key={index}>{job}</li>;
          })}
        </ul>
      </DescriptionDetailWrapper>
      <DescriptionDetailWrapper title={"Projects"}>
        <ul className="list-disc ml-6 text-sm lg:text-base">
          {projects.map((project, index) => {
            return <li key={index}>{project.name}</li>;
          })}
        </ul>
      </DescriptionDetailWrapper>
      <DescriptionDetailWrapper title={"Techstack used"}>
        <ul className="list-disc ml-6 text-sm lg:text-base">
          {stacks.map((stack, index) => {
            return <li key={index}>{stack}</li>;
          })}
        </ul>
      </DescriptionDetailWrapper>
    </div>
  );
}
