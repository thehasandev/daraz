import React from 'react'

import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import SubHeading from '../SubHeading'
import Image from '../Image'

import Visa from "../../assets/visaa.png"
import Roket from "../../assets/roket.png"
import Bkash from "../../assets/bkash.png"
import Nagot from "../../assets/nagot.png"
import DBBL from "../../assets/dbbl.jpg"
import CashOn from "../../assets/cashondelevary.png"
import American from "../../assets/american.png"

import Bangladesh from "../../assets/bangladesh.png"
import Pakisthan from "../../assets/pakistan.jpg"
import Srilanka from "../../assets/srilanka.jpg"
import Nepal from "../../assets/nepal.png"

import Pci from "../../assets/pci.png"

import { BsFacebook, BsGlobe, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import Paragaraph from '../Paragaraph'

function Payment() {
  return (
    <Section className="bg-white py-5">
        <Container>
            <div className=" justify-between gap-x-5 px-5 xl:gap-x-0 flex flex-wrap">

            <div className='w-[40%] xl:w-[19%]'>
                <div>
                   <SubHeading text="Payment Methods"/>
                    <Flex className="pt-5 flex-wrap gap-y-5 justify-between items-center">
                    <div className='w-[80px]'>
                       <Image src={Visa}/>
                    </div>
                    <div className='w-[45px]'>
                       <Image src={Roket}/>
                    </div>
                    <div className='w-[80px]'>
                       <Image src={Bkash}/>
                    </div>
                    <div className='w-[40px]'>
                       <Image src={CashOn}/>
                    </div>
                    <div className='w-[80px] '>
                       <Image src={Nagot}/>
                    </div>
                    <div className='w-[40px] '>
                       <Image src={DBBL}/>
                    </div>
                    <div className='w-[60px] hidden xl:block'>
                       <Image src={American}/>
                    </div>
                    </Flex>
                </div>
            </div>

            <div className='w-[40%] xl:w-[19%] mb-5'>
                <div>
                   <SubHeading text="Daraz International"/>
                    <Flex className="pt-5 gap-y-5 flex-wrap justify-between">
                        <div className='w-[50px]'>
                          <Image src={Bangladesh}/>
                        </div>
                        <div className='w-[50px]'>
                          <Image src={Pakisthan}/>
                        </div>
                        <div className='w-[50px]'>
                          <Image src={Srilanka}/>
                        </div>
                        <div className='w-[30px]'>
                          <Image src={Nepal}/>
                        </div>
            
                    </Flex>
                </div>
            </div>

            <div className='w-[40%] xl:w-[19%] mb-5 mt-5 xl:mt-0'>
                <div>
                   <SubHeading text="Follow Us"/>
                    <Flex className="pt-5 flex-wrap gap-y-5 md:justify-between gap-4 xl:gap-0">
                        <BsFacebook className='text-4xl text-blue-500'/>
                        <BsYoutube className='text-4xl text-[red] '/>
                        <BsInstagram className='text-4xl text-primary '/>
                        <BsGlobe className='text-4xl text-[orange] '/>
                        <BsTwitter className='text-4xl text-blue-500 '/>
                    </Flex>
                </div>
            </div>

            <div className='w-[40%] xl:w-[19%] mt-5 xl:mt-0'>
                <div>
                   
                   <SubHeading text="Verified by"/>
                    <Flex className="pt-5 flex-wrap gap-y-5 justify-between">
                    <div className='w-[80px]'>
                       <Image src={Pci}/>
                    </div>
                    </Flex>
                </div>
            </div>

            <div className='w-[40%] xl:w-[19%]'>
               <SubHeading text="DBID"/>
               <Paragaraph text="Registration Number: 304903094"/>
            </div>
            
            </div>
        </Container>
    </Section>
  )
}

export default Payment