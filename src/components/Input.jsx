import React from 'react'

function Input({text,type,placeholder,className}) {
  return (
    <div className={`mt-5 ${className}`}>
        <p className='font-roboto font-semibold text-base text-secondary mb-2'>{text}</p>
        <input type={type} placeholder={placeholder} className='w-full px-4 py-4 bg-white border-b border-gray/50'/>
    </div>
  )
}

export default Input