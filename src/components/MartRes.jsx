import React from 'react'

   import Image from './Image'
   import SubHeading from './SubHeading'

function MartRes({src,subHeading}) {
  return (
    <div className='w-16 '>
    <div className='w-14 mx-auto'>
      <Image src={src} className="rounded-full"/>
    </div>
     <SubHeading text={subHeading} className="text-black text-[14px] flex justify-center"/>
    </div>
  )
}

export default MartRes