"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SecondaryProjectCard({ detail }) {
  const { images, title, category, description, stacks } = detail;

  return (
    <Link href={`/projects/${title}`}>
      <div
        className="rounded-[10px] p-4 bg-white cursor-pointer"
      >
        <div className="image-container">
          <Image
            src={images[0]}
            alt={"image"}
            layout="fill"
            className={"image rounded-lg"}
          />
        </div>
        <div className="">
          <p className="text-grey-primary mt-2 font-semibold text-base">
            {category}
          </p>
          <h3 className="font-semibold text-lg lg:text-xl mt-1">{title}</h3>
        </div>
      </div>
    </Link>
  );
}
