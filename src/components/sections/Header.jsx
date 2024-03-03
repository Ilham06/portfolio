import React from "react";
import Image from "next/image";
import MainButton from "../MainButton";

export default function Header() {
  return (
    <div className="border-b pb-7">
      <Image src="/images/me.png" alt="me" width={255} height={255} loading="lazy" />
      <div className="flex justify-between items-center">
        <div className="">
          <h3 className="font-semibold text-3xl my-2 text-black-primary">
            Ilham Muhamad Suparyono
          </h3>
          <p className="text-sm text-black-main">
            Crafting Digital Experiences as a : software engineer
          </p>
        </div>
        <div className="">
          <MainButton title={'Contact Me'}/>
        </div>
      </div>
    </div>
  );
}
