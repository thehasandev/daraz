import React from 'react'

import Section from '../Section'
import Container from '../Container'
import ForYou from "../ForYou"
import SubHeading from '../SubHeading'
function FouYours() {
  return (
    <Section className="py-5">
      <Container>
        <SubHeading text="Just For You" className="mb-5 text-secondary pl-2 xl:pl-0"/>
         <div className='xl:bg-white'>
         <ForYou/>
         </div>
      </Container>
    </Section>
  )
}

export default FouYours