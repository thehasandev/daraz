import React from 'react'

import List from '../List'
import Section from '../Section'
import Container from '../Container'
import SubHeading from '../SubHeading'
import Flex from '../Flex'
import Image from '../Image'
import PortionHeading from '../PortionHeading'

import Qr from "../../assets/qr.png"
import Logo from "../../assets/logo.png"
import Companey from "../../assets/qrThree.png"

function Customer() {
  return (
    <Section className="bg-[#2E2E54] text-white py-5">
    <Container>
      <Flex className="gap-x-16 flex-wrap px-4 xl:px-0">
        <div className='w-[30%]'>
         <SubHeading text="Customer Care" className="text-white mb-3 w-[140px]"/>
         <ul>
            <List text="Help Center"/>
            <List text="How to Buy"/>
            <List text="Returns & Refunds"/>
            <List text="Contact Us"/>
            <List text="Terms & Conditons"/>
            <List text="CCMS-Central COmpilin Management"/>
         </ul>
         
         <SubHeading text="Earn With Daraz" className="text-white mb-3 mt-5 w-[150px]"/>
          <ul>
              <List text="Daraz University"/>
              <List text="Sell on Daraz"/>
              <List text="Code of Conduct"/>
              <List text="Join the Daraz"/>
          </ul>
        </div>

        <div className='pt-6 pr-32 w-[22%]'>
         <SubHeading text="Daraz" className="text-white mb-3"/>
         <ul className='w-[100px]'>
            <List text="About Daraz"/>
            <List text="Privacy Policy"/>
            <List text="Digital Payments"/>
            <List text="Daraz Blog"/>
            <List text="Daraz Cares"/>
            <List text="Daraz Mart"/>
            <List text="Privacy Policy"/>
            <List text="Daraz App"/>
            <List text="Daraz Exclusives"/>
            <List text="Hungrynaki Food Delivery"/>
            <List text="Daraz Donates"/>
            <List text="Daraz BPL Live"/>
         </ul>
        
        </div>

        <div className='pt-2'>
            <Flex className="gap-x-8">
                <div className='w-44 '>
                   <Image src={Qr} className="rounded-lg"/>
                </div>
                <div className='pt-8'>
                   <Image src={Logo} className="w-16"/>
                   <SubHeading text="Happy Shoing" className="text-primary"/>
                   <PortionHeading text="Download App" className="text-white text-2xl"/>
                </div>
            </Flex>
             
            <Flex className="pt-8 gap-x-5">
              <div className='w-36'>
                <Image src={Companey}/>
              </div>
              <div className='w-36'>
                <Image src={Companey}/>
              </div>
              <div className='w-36 hidden md:block'>
                <Image src={Companey}/>
              </div>
            </Flex> 

        </div>

      </Flex>
    </Container>
    </Section>
  )
}

export default Customer