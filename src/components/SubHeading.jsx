import React from 'react'

function SubHeading({text,className}) {
  return (
    <h2 className={`text-roboto text-xl font-normal text-[#424242] ${className}`}>{text}</h2>
  )
}

export default SubHeading