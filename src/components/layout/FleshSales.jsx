import React from 'react'

import Section from '../Section'
import Container from '../Container'
import FalshSale from '../FalshSale'
import SubHeading from '../SubHeading'

function FleshSales() {
  return (
    <Section className="py-10">
        <Container>
          <SubHeading text="FlashSale" className=" text-gray mb-4 text-[22px] pl-2 xl:pl-0"/>
          <div className='bgt-transparent xl:bg-white rounded-lg'>
            <FalshSale/>
          </div>
        </Container>
    </Section>
  )
}

export default FleshSales