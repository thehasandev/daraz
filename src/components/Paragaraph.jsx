import React from 'react'

function Paragaraph({text,className}) {
  return (
    <p className={`text-sm font-normal font-roboto text-[#8895B4] ${className}`}>{text}</p>
  )
}

export default Paragaraph