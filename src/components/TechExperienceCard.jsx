import React from "react";

export default function TechExperienceCard({ icon, title, description }) {
  return (
    <div className="p-6">
      <div className="flex gap-4">
        {icon}
        <h5 className="font-semibold text-black-primary mb-6">{title}</h5>
      </div>
      <p className="text-black-primary text-justify">
        {description}
      </p>
    </div>
  );
}
