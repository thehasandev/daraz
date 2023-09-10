import React from 'react'

function PortionHeading({text,className}) {
  return (
    <h4 className={`font-roboto font-normal text-sm text-secondary ${className}`}>{text}</h4>
  )
}

export default PortionHeading