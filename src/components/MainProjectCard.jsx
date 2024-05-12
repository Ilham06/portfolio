"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TechBadge from "./TechBadge";

export default function MainProjectCard({ detail, index }) {
  const { images, title, category, description, stacks } = detail;

  const isOddIndex = (index) => {
    return index % 2 !== 0;
  };

  const imageContent = () => {
    return (
      <div class="col-span-12 lg:col-span-6">
        <div className="image-container">
          <Image
            src={images[0]}
            alt={"image"}
            layout="fill"
            className={"image rounded-lg"}
          />
        </div>
      </div>
    );
  };

  const descriptionContent = () => {
    return (
      <div class="col-span-12 lg:col-span-5 flex justify-center items-center">
        <div className="text-center lg:text-start">
          <h3 className="font-semibold text-lg lg:text-xl mt-1 mb-4">
            {title}
          </h3>
          <p className="text-black-main text-sm lg:text-base">{description}</p>
          <div className="mt-3 flex gap-2 justify-center lg:justify-normal">
            {
              stacks.map((stack, index) => {
                return (
                  <TechBadge key={index} title={stack.title} color={stack.class}/>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  };

  return (
    <Link href={`/projects/${title}`}>
      <div className="grid grid-cols-12 gap-5 rounded-[10px] p-4 cursor-pointer bg-white hover:translate-y-[-5px] duration-500 ">
        {!isOddIndex(index) ? (
          <>
            {imageContent()}
            {descriptionContent()}
          </>
        ) : (
          <>
            {descriptionContent()}
            {imageContent()}
          </>
        )}
      </div>
    </Link>
  );
}
