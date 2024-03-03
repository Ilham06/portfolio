import React from "react";
import Image from "next/image";

export default function ProjectCard({ detail }) {
  const { images, title, category, description, stacks } = detail;
  return (
    <div className="rounded-[10px] p-8 bg-white mt-6 cursor-pointer">
      <div className="carousel carousel-center space-x-4 rounded-box">
        {images.map((image, index) => {
          return (
            <div key={index} className="carousel-item">
              <div className="image-container h-[285px]">
              <Image src={image} alt={index} layout="fill" className={'image'} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <h3 className="font-semibold text-lg lg:text-xl text-grey-primary my-4">
          {title}, {category}
        </h3>
        <p className="text-black-main mb-4 text-sm lg:text-base">{description}</p>
        {
          stacks.map((stack, index) => {
            return (
              <button key={index.title} className={`btn ${stack.class} btn-xs mr-2`}>{stack.title}</button>
            )
          })
        }
      </div>
    </div>
  );
}
