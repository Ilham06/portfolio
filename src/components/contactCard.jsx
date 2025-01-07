import React from "react";
import Link from "next/link";

export default function ContactCard({ contact }) {
  return (
    <div className="shadow-custom-shadow rounded-md py-4 px-10 hover:translate-y-[-3px] duration-500 cursor-pointer">
      <div className="flex justify-center mb-2">
        <div className="w-[35px] text-center text-black-primary">{contact.icon}</div>
      </div>
      <h3 className="font-semibold text-black-primary mb-3 capitalize text-xl">
        {contact.title}
      </h3>
      <p className="text-black-main mb-2">{contact.description}</p>
      <Link href={contact.url} target="_blank">
        <p className="text-blue-primary font-semibold">{contact.value}</p>
      </Link>
    </div>
  );
}
