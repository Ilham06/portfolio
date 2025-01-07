import { services } from "@/data";
import Image from "next/image";
import React from "react";

export default function Services() {
  let cardDelay = 100;
  return (
    <section className="py-12" id="services">
      <div className="text-center" data-aos-duration="1000" data-aos="fade-up">
        <h2 className="text-2xl font-extrabold mb-2 text-black-primary">
          WHAT <span className="text-blue-primary">I DO?</span>
        </h2>
        <p className="text-black-main">
          Helping to Achieve Your Digital Goals <br /> with Expert and Amazing
          Solutions
        </p>
      </div>
      <div className="w-full mt-8 p-6 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4">
        {services.map((service, index) => {
          cardDelay += 200;
          return (
            <div
              className="text-start bg-white p-8 rounded-xl"
              key={index}
              data-aos-duration="1000"
              data-aos="fade-up"
              data-aos-delay={cardDelay}
            >
              <div className="">
                <Image src={service.icon} width="50" height="50" alt="icon" />

                <h5 className="text-[22px] font-bold mb-4 text-black-primary mt-2">
                  {service.title}
                </h5>
              </div>
              <p className="text-sm text-black-main">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
