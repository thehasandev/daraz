import React from 'react'

import Section from '../Section'
import Mart from "../Mart"
import Flex from '../Flex'
import Container from '../Container'

import MartImage from "../../assets/bath.jpg"
import Feshon from "../../assets/feshon.png"
import Lipstik from "../../assets/lipstik.png"
import Tk from "../../assets/tk.png"
import Sufa from "../../assets/sufa.png"

import MartRes from '../MartRes'


function MartDemo() {
  return (
   <Section className="py-5">
    <Container>
     <Flex className="flex-wrap justify-between gap-y-4 px-2 xl:hidden">
        <MartRes src={MartImage} subHeading="Mart" />
        <MartRes src={Feshon} subHeading="Feshon"/>
        <MartRes src={Lipstik} subHeading="Lipstik"/>
        <MartRes src={Tk} subHeading="Doller"/>
        <MartRes src={Sufa} subHeading="Shufa"/>
        <MartRes src={Feshon} subHeading="Mart"/>
        <MartRes src={MartImage} subHeading="Feshon"/>
        <MartRes src={Feshon} subHeading="Mart"/>
        <MartRes src={MartImage} subHeading="Mart"/>
        <MartRes src={Feshon} subHeading="Feshon"/>
     </Flex>  

     <Flex className="justify-between flex-wrap">
        <Mart src={MartImage} text="Mart"/>
        <Mart src={Feshon} text="Feshon"/>
        <Mart src={Lipstik} text="Lipstik"/>
        <Mart src={Tk} text="Doller"/>
        <Mart src={Sufa} text="Home Maker"/>
     </Flex>
    </Container>
   </Section>
  )
}

export default MartDemo