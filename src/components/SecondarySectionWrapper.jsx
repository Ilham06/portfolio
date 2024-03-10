import React from "react";

export default function SecondarySectionWrapper({ children, title, subtitle }) {
  return (
    <div className="bg-grey-primary-bg rounded-xl p-4 lg:p-6">
      <div className="text-black-primary">
        <h3 className="font-semibold text-2xl mb-3">{title}</h3>
        <p>{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
