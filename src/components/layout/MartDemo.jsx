import React from 'react'

import Section from '../Section'
import Mart from "../Mart"
import Flex from '../Flex'
import Container from '../Container'

import Miso from "../../assets/miso.png"
import Delevary from "../../assets/de.png"
import Feshon from "../../assets/beauty.png"
import  Maggei from "../../assets/mage.png"
import Beauty from "../../assets/beauty.png"
import Bud from "../../assets/bud.png"
import Mahe from "../../assets/mahe.png"
import Tk from "../../assets/tk.png"
import Sufa from "../../assets/sufa.png"
import Hot from "../../assets/hot.png"

import MartRes from '../MartRes'
import SubHeading from '../SubHeading'


function MartDemo() {
  return (
   <Section className="py-5">
    <Container>
     <Flex className="flex-wrap justify-between gap-y-4 px-2 xl:hidden">
        <MartRes src={Miso} subHeading="Man"/>
        <MartRes src={Mahe} subHeading="Woman"/>
        <MartRes src={Tk} subHeading="Doller"/>
        <MartRes src={Sufa} subHeading="Shufa"/>
        <MartRes src={Feshon} subHeading="Mart"/>
        <MartRes src={Maggei} subHeading="Magic"/>
        <MartRes src={Beauty} subHeading="Mart"/>
        <MartRes src={Bud} subHeading="Mart"/>
        <MartRes src={Delevary} subHeading="Delevary"/>
        <MartRes src={Hot} subHeading="Hot"/>
     </Flex>  

     <Flex className="justify-between flex-wrap">
        <Mart src={Miso} text="Man Feshon"/>
        <Mart src={Mahe} text="Women"/>
        <Mart src={Feshon} text="Feshon"/>
        <Mart src={Tk} text="Doller"/>
        <Mart src={Sufa} text="Home Maker"/>
    
     </Flex>
    </Container>
   </Section>
  )
}

export default MartDemo