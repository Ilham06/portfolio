import { services } from "@/data";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <section className="py-12" id="services">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold mb-2 text-black-primary">
          WHAT <span className="text-blue-primary">I DO?</span>
        </h2>
        <p className="text-black-main">
          Helping to Achieve Your Digital Goals <br /> with Expert and Amazing
          Solutions
        </p>
        <div className="w-full mt-8 p-6 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4">
          {services.map((service, index) => {
            return (
              <div className="text-start bg-white p-8" key={index}>
                <div className="">
                  <Image src={service.icon} width="50" height="50" alt="icon"/>

                  <h5 className="text-[22px] font-bold mb-4 text-black-primary mt-2">
                    {service.title}
                  </h5>
                </div>
                <p className="text-sm text-black-main">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
