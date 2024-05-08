import React from 'react'
import Image from 'next/image'

export default function TechBadge({title, color}) {
  return (
    <button className={`btn btn-xs ${color}`}>{title}</button>
  )
}
