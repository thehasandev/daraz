// Dinamic Hove Text And src  classname

import React from 'react'

import Flex from "../components/Flex"
import SubHeading from "../components/SubHeading"
import Image from "../components/Image"

// import {Flex,Image, SubHeading} from './'
import { AiOutlineRight } from 'react-icons/ai';

function Mart({src,text,className}) {
  return (
    <div className={`hidden xl:block w-[220px] bg-white shadow-[gray] hover:shadow-md rounded-full px-3 py-2 group ${className}`}>
    
      <Flex className=" justify-between">
        <Flex className="gap-x-5">
        <div className='w-8'>
        <Image src={src} alt="asdf" className="w-full"/>
        </div>
        <SubHeading text={text} className="text-secondary group-hover:text-gray"/>
        </Flex>

         <Flex className="items-center">
          <AiOutlineRight className="text-secondary group-hover:text-gray"/>
        </Flex> 
    
      </Flex>
    </div>
  )
}

export default Mart