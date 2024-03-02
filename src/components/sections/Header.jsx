import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="border-b pb-7">
      <Image src="/images/me.png" alt="me" width={255} height={255} />
      <div className="flex justify-between items-center">
        <div className="">
          <h3 className="font-semibold text-3xl my-2 text-black-primary">
            Ilham Muhamad Suparyono
          </h3>
          <p className="text-sm text-black-main">
            Crafting Digital Experiences: My Journey in Code.
          </p>
        </div>
        <div className="">
          <button className="text-whit bg-black-primary-bg text-white p-2 rounded">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
