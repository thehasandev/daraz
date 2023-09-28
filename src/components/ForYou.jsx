import React from 'react'

import forYou from '../data/forYou'


import PortionHeading from './PortionHeading'
import PriceDiscount from './PriceDiscount'


import Flex from './Flex'
import { Link } from 'react-router-dom'


function ForYou() {
  return (
    <Flex className="flex-wrap gap-y-2 px-4 justify-center xl:px-0 gap-x-3">
      { 
        forYou.map((item,index)=>{
          let{card,imageurl,porstionHeadingText,price,descount,pesent} = item  
    return  <Link key={index} to={`card/${card}`} state={{imageurl,porstionHeadingText,price,descount,pesent}}> 
            <div className='w-[170px] mx-auto xl:w-[200px]  shadow-[gray] border border-transparent xl:hover:border-gray md:hover:shadow-xl'>
            <img src={imageurl}/>
            <div>
            <div className='pl-1 xl:pl-2 py-2 bg-white'>
              <PortionHeading text={porstionHeadingText} className="text-xs xl:text-sm xl:w-[185px]"/>
              <PriceDiscount price={price} discount={descount} persent={pesent}/>
            </div>
            </div>
            </div>
           </Link>
        }


        )
      }
    </Flex>
  )
}

export default ForYou