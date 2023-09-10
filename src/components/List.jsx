import React from 'react'

function List({text,calssName,navList}) {
  return (
    <li className={`font-roboto text-xs text-normal  ${navList ? "border-b border-transparent hover:border-primary hover:text-primary" : " mb-1 border-transparent hover:border-white "}  border-primary  cursor-pointer ${calssName}`}>{text}</li>
  )
}

export default List