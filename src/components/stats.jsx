"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const stats = [
  {
    value: 5,
    suffix: "+",
    label: "Years of experience",
    description: "Delivering impactful solutions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.82m2.56-5.84a14.98 14.98 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
  {
    value: 10,
    suffix: "+",
    label: "Projects delivered",
    description: "Across various industries",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
        />
      </svg>
    ),
  },
  {
    value: 7,
    suffix: "+",
    label: "Industries worked with",
    description: "Diverse experiences, deeper insight",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 px-6 py-6 sm:px-8 sm:py-8 mb-2 hover-glow"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 sm:gap-5 py-5 sm:py-0 sm:px-6 first:pt-0 sm:first:pt-0 sm:first:pl-0 last:pb-0 sm:last:pb-0 sm:last:pr-0 hover-icon-wiggle group cursor-default"
          >
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
              {stat.icon}
            </div>

            {/* Text */}
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 leading-none mb-1">
                {isVisible ? (
                  <CountUp end={stat.value} duration={2.5} delay={index * 0.2} />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </p>
              <p className="font-bold text-gray-900 text-sm mb-0.5">{stat.label}</p>
              <p className="text-xs text-gray-400">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
