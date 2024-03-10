'use client'

import React from "react";
import Image from "next/image";
import MainButton from "../MainButton";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <div className="border-b pb-7 mt-8">
      <Image
        src="/images/me.png"
        alt="me"
        width={255}
        height={255}
        loading="lazy"
        style={{ marginLeft: "-25px" }}
      />
      <div className="flex justify-between items-center">
        <div className="">
          <h3 className="font-semibold text-3xl my-2 text-black-primary">
            Ilham Muhamad Suparyono
          </h3>
          <p className="text-sm text-black-main">
            Crafting Digital Experiences as a Software Engineer
          </p>
        </div>
        <div className="hidden">
          <MainButton title={"Contact Me"} />
        </div>
      </div>
    </div>
  );
}
