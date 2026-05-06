import React from "react";

const stats = [
  {
    value: "4+",
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
    value: "10+",
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
    value: "7+",
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
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-white rounded-3xl border border-gray-100 shadow-sm px-8 py-8 mb-2"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-5 px-6 py-4 sm:py-0 first:pl-0 last:pr-0">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              {stat.icon}
            </div>

            {/* Text */}
            <div>
              <p className="text-3xl font-extrabold text-blue-600 leading-none mb-1">
                {stat.value}
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
