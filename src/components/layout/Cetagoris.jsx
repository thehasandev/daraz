import React from 'react'

import Categories from '../Categories'
import Section from '../Section'
import Container from '../Container'
import SubHeading from '../SubHeading'
import Flex from '../Flex'


function Cetagoris() {
  return (
    <>
     <Section className="py-5">
        <Container>
           <SubHeading text="Categories" className="my-3 pl-2 xl:pl-0 text-[22px]"/>
           <Categories/>
        </Container>
     </Section>
    </>
  )
}

export default Cetagoris