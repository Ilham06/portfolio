"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import MainButton from "../MainButton";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";

export default function Header() {

  return (
    <div
      className="h-svh flex flex-col justify-center mt-[-100px]"
      id="header"
      data-aos-duration="1100"
      data-aos="fade-up"
    >
      <div className="flex justify-center">
        <div className="bg-[#E0CFFE] rounded-[50%] overflow-hidden">
          <Image
            src="/images/avatar.webp"
            alt="me"
            width={200}
            height={200}
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="text-center">
          <h3 className="font-semibold mb-8 text-black-primary text-5xl lg:text-6xl">
            Hello, Im <span className="text-blue-primary">Ilham.</span>
          </h3>
          <p className=" text-black-main text-lg">
            <span className="font-medium">
              My journey as a Software Engginer,
            </span>{" "}
            to crafting a wonderfull digital experiences. Write line by line
            from the heart to produce wonderfull projects.
          </p>
        </div>
        <div className="flex justify-center mt-10">
          <a href="#about">
            <div className="bg-blue-primary w-[50px] h-[50px] rounded-[50%] flex justify-center items-center cursor-pointer hover:translate-y-[5px] duration-200">
              <svg
                color="#FFF"
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="4"
                >
                  <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                  <path stroke-linecap="round" d="m33 21l-9 9l-9-9" />
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
