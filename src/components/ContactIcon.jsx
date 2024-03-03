import React from "react";
import IgIcon from "./icons/ig-icon";
import Link from 'next/link'

export default function ContactIcon({contact}) {
   const {title, url, name, icon} = contact
  return (
    <Link href={url}>
      <div className="w-[50px]">
        {icon}
      </div>
    </Link>
  );
}
