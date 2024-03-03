import React from 'react'
import Image from 'next/image'

export default function TechIcon({title, icon}) {
  return (
    <div className="tooltip cursor-pointer" data-tip={title}>
      <Image src={icon} alt={title} width={45} height={45} style={{marginRight: '18px'}}/>
    </div>
  )
}
