import React from 'react'

import flash from '../data/flash'



import PortionHeading from "../components/PortionHeading"
import PriceDiscount from "../components/PriceDiscount"

import Flex from './Flex'
import { Link } from 'react-router-dom'

function FalshSale() {
  return (
    <Flex className="flex-wrap justify-center md:justify-between gap-x-2 gap-y-4 xl:gap-x-4 px-2 xl:px-0">
    {
      flash.map((item,index)=>{
        let {tittle,image,price,peragraph,discount,persent} = item
  
    return  <Link key={index} to={tittle} state={{image,price,peragraph,discount,persent}}>
            <div  className='w-[168px] mx-auto xl:w-[205px] shadow-[gray] border border-transparent xl:hover:border-gray xl:hover:shadow-xl '>
                <img src={image} alt="Pillow" />
                <div className='xl:pl-2 pl-1 py-2 bg-white '>
                <PortionHeading text={peragraph} className="w-[158px] text-xs xl:text-sm xl:w-[190px]" />
                <PriceDiscount price={price} discount={discount} persent={persent}/>
                </div>
           </div>
           </Link>
      }
        
      )
    }
    </Flex>
  )
}

export default FalshSale