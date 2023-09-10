import React from 'react'

function PriceDiscount({price,discount,persent, className}) {
  return (
    <div className={className}>
      <p className={`font-roboto font-bold text-lg text-primary`}>{price}</p>
      <span className='font-roboto font-normal text-sm text-gray mr-3'>{discount}</span>
      <span className='font-roboto font-normal text-sm text-secondary'>{persent}</span>
    </div>
  )
}

export default PriceDiscount