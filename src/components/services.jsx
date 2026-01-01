import { services } from "@/data";
import Image from "next/image";
import React from "react";

export default function Services() {
  let cardDelay = 100;

  return (
    <section id="services" className="py-32 px-4">
      {/* Heading */}
      <div
        className="relative max-w-4xl mx-auto text-center mb-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-primary">
          Services
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-black-primary mb-4 leading-tight">
          What I <span className="text-blue-primary">specialize in</span>
        </h2>

        <p className="text-black-main max-w-2xl mx-auto text-lg leading-relaxed">
          Thoughtfully crafted digital solutions with attention to detail,
          performance, and long-term scalability.
        </p>
      </div>

      {/* True glass cards */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
  {services.map((service, index) => {
    cardDelay += 150;

    return (
      <div
        key={index}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay={cardDelay}
        className="
          group relative overflow-hidden
          rounded-3xl p-8 lg:p-10
          bg-white/35 backdrop-blur-xl
          border border-white/30
          shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]
          transition-all duration-500 ease-out
          hover:-translate-y-[2px]
          hover:shadow-[0_30px_80px_-35px_rgba(0,0,0,0.35)]
        "
      >
        {/* Ambient glow on hover */}
        <div
          className="
            pointer-events-none absolute -inset-1 rounded-[28px]
            bg-gradient-to-br from-blue-300/25 via-transparent to-indigo-300/25
            opacity-0
            group-hover:opacity-100
            blur-2xl
            transition-opacity duration-500
          "
        />

        {/* Inner light reflection */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-3xl
            bg-gradient-to-br from-white/40 via-transparent to-white/10
            opacity-60
          "
        />

        {/* Content */}
        <div className="relative">
          {/* Icon */}
          <div className="mb-6">
            <div
              className="
                w-12 h-12 rounded-lg
                bg-white/40 backdrop-blur
                flex items-center justify-center
                shadow-sm
                transition-all duration-500
                group-hover:-translate-y-1
                group-hover:rotate-3
                group-hover:shadow-md
              "
            >
              <Image
                src={service.icon}
                width={24}
                height={24}
                alt={`${service.title} icon`}
              />
            </div>
          </div>

          <h5 className="text-xl font-semibold text-black-primary mb-3 tracking-tight">
            {service.title}
          </h5>

          <p className="text-sm text-black-main leading-relaxed">
            {service.description}
          </p>

          
        </div>
      </div>
    );
  })}
</div>

    </section>
  );
}
