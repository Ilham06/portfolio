import React from "react";

export default function DescriptionDetailWrapper({ title, children }) {
  return (
    <div className="mt-7">
      <h3 className="font-semibold text-base text-black-primary mb-2">
        {title}
      </h3>
      {children}
    </div>
  );
}
