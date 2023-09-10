import React from 'react'

import cetagori from '../data/cetagori'

import Flex from './Flex'
import PortionHeading from './PortionHeading'

function Categories() {
  return (

<>
<Flex className="flex-wrap justify-center">
  {
    cetagori.map((item,index)=>{
      let{imageUrl,name} = item
   return  <div key={index} className='w-50 h-50  bg-white border border-gray hover:border-secondary'>
              <div className='w-40'>
                <img src={imageUrl} />
              </div>
              <PortionHeading text ={name} className="text-center mt-2 pb-2"/>
            </div>

    }
        
    )
  }

</Flex>
</>

  )
}

export default Categories