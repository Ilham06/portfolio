import React from "react";
import Image from "next/image";
import Link from "next/link";
import DescriptionDetailWrapper from "../DescriptionDetailWrapper";

export default function ProjectCard({ detail }) {
  const { images, title, category, description, stacks } = detail;
  return (
    <div className="rounded-[10px] bg-white mt-6">
      <div className="carousel carousel-center space-x-2 rounded-t-lg">
        {images.map((image, index) => {
          return (
            <div key={index} className="carousel-item">
              <div className="image-container h-[300px] lg:h-[500px]">
                <Image
                  src={image}
                  alt={index}
                  layout="fill"
                  className={"image"}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg lg:text-xl text-black-main mt-[22px] mb-2">
          {title}
        </h3>
        <h3 className="font-semibold text-sm lg:text-base text-grey-primary">
          {category}
        </h3>
        <DescriptionDetailWrapper title={"Project Summary"}>
          <p className="text-black-main text-sm lg:text-base">{description}</p>
        </DescriptionDetailWrapper>
        <DescriptionDetailWrapper title={"Key Feature"}>
          <ul className="list-disc ml-6 text-sm lg:text-base">
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
              aut.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deleniti, explicabo!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              consequatur.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              similique?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              est?
            </li>
          </ul>
        </DescriptionDetailWrapper>
        <DescriptionDetailWrapper title={"TechStack"}>
          <ul className="list-disc ml-6 text-sm lg:text-base">
            {stacks.map((stack, index) => {
              return <li key={index}>{stack.title}</li>;
            })}
          </ul>
        </DescriptionDetailWrapper>
        <DescriptionDetailWrapper title={"Relate Links"}>
          <ul className="list-disc ml-6 text-sm lg:text-base">
            <li>
              <Link href="github.com">Github Repository</Link>
            </li>
          </ul>
        </DescriptionDetailWrapper>
      </div>
    </div>
  );
}
