import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Section from '../components/Section';
import Container from '../components/Container';
import Flex from '../components/Flex';
import SubHeading from '../components/SubHeading';
import PriceDiscount from '../components/PriceDiscount';
import Paragaraph from '../components/Paragaraph';
import PortionHeading from '../components/PortionHeading';

import {AiFillStar,AiFillHeart} from "react-icons/ai"
import {PiShareNetworkBold} from "react-icons/pi"
import {MdOutlineLocationOn} from "react-icons/md"
import {FaMandalorian} from "react-icons/fa"
import {CiDeliveryTruck} from "react-icons/ci"
import {BiMoney} from "react-icons/bi"
import {LuShieldClose} from "react-icons/lu"
import { addtocart } from '../Slices/cartSlices';
import { useDispatch, useSelector } from 'react-redux';

function ForYouPartOne() {
    let dataLocation = useLocation()

    let {imageurl,porstionHeadingText,price,descount,pesent} = dataLocation.state
  
    let dispatch = useDispatch()

    let handleAddToCart= ()=>{
      dispatch(addtocart(
        {
          name : porstionHeadingText,
          imgUrl: imageurl,
          price  : price,
          quantity: 1
        }
      ))
    
      
    }

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }, []);
     
  return (

    <Section className="pt-32 pb-32 overflow-x-hidden">
        <Container>
          <div className="flex justify-between flex-wrap gap-y-8">
            <div className=' w-[350px] mx-auto'>
              <img src={imageurl} className='w-full' />
            </div>
        
            <div className='w-[500px] mx-auto px-4'>
            <SubHeading text={porstionHeadingText} className="w-[380px] px-4 md:w-[500px] md:text-center text-black mb-4"/>
              <Flex className="gap-x-10 md:justify-between items-center">
              {/* Start  */}
              <Flex className="gap-x-4 items-center">
                <Flex className="text-primary gap-x-1">
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </Flex>
                <p className='text-[#1A9CB7]'>4 Ratings</p>
                
              </Flex>
            {/* Love  */}
              <Flex className="text-gray gap-x-5 ">
                  <PiShareNetworkBold size={25}/>
                  <AiFillHeart size={25}/>
              </Flex>

              </Flex>

              <p className='text-[#1A9CB7]'>Brand:No Brand | More Jewellery from No Brand</p>
            
            <div className='bg-primary py-4 px-2 md:px-8 my-5 w-[330px] md:w-[450px]'>
              <Flex className="justify-between">
                <div className='md:w-[200px]'>
                  <SubHeading text="ENJOY EXCLUSIVE OFFER DISCOUNT" className="text-4xl font-extrabold text-white"/>
                </div>
                <Flex className='w-[250px] items-center justify-end'>
                  <SubHeading text="Shop Now" className="text-[40px] font-extrabold text-white"/>
                </Flex>
              </Flex>
            </div>
            <h1 className='font-roboto font-bold text-2xl text-primary'>{price}</h1>
            <PriceDiscount  discount={`${descount} of`} persent={pesent} className="mb-5"/>
              <Flex className=" justify-center gap-x-5 md:justify-between">
              
              <Link to="/check-out">
                  <button className=' md:w-[220px] w-[150px] px-4 md:px-0 py-4 bg-[#26ABD4] rounded-[2px] font-roboto font-semibold text-white text-xl md:text-2xl'>Buy now </button>
              </Link>


              <Link to="/add-to-card">
                <button onClick={handleAddToCart} className=' w-[150px] md:w-[220px] px-4 md:px-0 py-4 bg-primary rounded-[2px] font-roboto text-white font-semibold text-xl md:text-2xl'>Add to Card</button>
              </Link>

              </Flex>
            </div>

            <div className='w-[300px] mx-auto'>
              <Paragaraph text="Delivary"/>

              <Flex className="gap-x-5 items-center mt-5">
                <div className='w-[15%]'>
                  <MdOutlineLocationOn/>
                </div>
                <div className='w-[50%]'>
                  <PortionHeading text="Dhaka, Dhaka North, Banani Road No. 12 - 19"/>
                </div>
                <div className='w-[20%]'>
                  <PortionHeading text="CHANGE" className="text-[#1160D9] font-bold"/>
                </div>
              </Flex>

              <Flex className="gap-x-5 items-center mt-5">
                <div className='w-[15%]'>
                  <FaMandalorian/>
                </div>
                <div className='w-[50%]'>
                  <PortionHeading text="Ships from Overseas"/>
                </div>
              </Flex>

              <Flex className="gap-x-5 items-center mt-5">
                <div className='w-[15%]'>
                  <CiDeliveryTruck/>
                </div>
                <div className='w-[50%]'>
                  <PortionHeading text="Free Delivery"/>
                </div>
                <div className='w-[20%]'>
                  <PortionHeading text="Free" className="text-[#000000] font-bold"/>
                </div>
              </Flex>

            <PortionHeading text="Enjoy free shipping promotion with minimum spend of ৳ 499 from ILOVEDIY." className="px-4 mt-5" />
              
            <Flex className="gap-x-5 items-center mt-5">
                <div className='w-[15%]'>
                  <BiMoney/>
                </div>
                <div className='w-[50%]'>
                  <PortionHeading text="Cash on Delivery Available"/>
                </div>
            </Flex>

            <Paragaraph text="Service" className="mt-5"/>

            <Flex className="gap-x-5 items-center mt-5">
                <div className='w-[15%]'>
                  <BiMoney/>
                </div>
                <div className='w-[70%]'>
                  <PortionHeading text="7 Days Returns"/>
                  <Paragaraph text="Change of mind is not applicable" />
                </div>
            </Flex>

            <Flex className="gap-x-5 items-center mt-5">
                <div className='w-[15%]'>
                  <LuShieldClose/>
                </div>
                <div className='w-[50%]'>
                  <PortionHeading text="Warranty not available"/>
                </div>
            </Flex>
            
            </div>
          </div>  
        </Container>
    </Section>
  )
}

export default ForYouPartOne