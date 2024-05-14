import React from "react";
import IgIcon from "./icons/ig-icon";
import Link from 'next/link'

export default function ContactIcon({contact}) {
   const {title, url, name, icon} = contact
  return (
    <Link href={url} target="_blank">
      <div className="w-[45px] h-[45px] bg-blue-primary flex justify-center items-center hover:scale-105 rounded-md duration-300">
        {icon}
      </div>
    </Link>
  );
}
