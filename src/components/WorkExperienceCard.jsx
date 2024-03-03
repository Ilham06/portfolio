import React from 'react'
import Image from 'next/image'

export default function WorkExperienceCard() {
  return (
    <div className="rounded-[10px] p-8 bg-white flex items-center mt-6">
      <div className="border-r pr-4">
         <Image src={'/images/vorta.jpeg'} alt="vorta" width={90} height={90}/>
      </div>
      <div className="pl-6">
         <h3 className="text-black-primary font-semibold text-[18px] mb-1">Software Engineer, Vorta Siber Indonesia</h3>
         <p className="text-black-main mb-1">September 2023 - Present</p>
         <p className="text-grey-primary text-sm">Mampang Prapatan, South Jakarta.</p>
      </div>
    </div>
  )
}
