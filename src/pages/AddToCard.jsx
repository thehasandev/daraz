import React, { useState } from 'react'

import One from "../assets/f1.png"
import Image from '../components/Image'
import Container from "../components/Container"
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'

import {AiOutlineClose} from "react-icons/ai"
import {BsCart} from "react-icons/bs"

import { useSelector } from 'react-redux';


function AddToCard() {
    let cardData = useSelector((state)=>state.cart.cartitem)
    let cartData =useSelector((state)=>state.cart.cartitem)
    const [open,setOpen] =useState(false)
  return (
    <section className='mt-36 mb-16 px-5'>
       <Container>
       
   
{/* Add to Card part */}

{
  open &&
  <div className={`absolute w-[90%] h-screen px-10  bg-primary right-0 z-50 top-0 duration-500 `}>
          <Flex className="justify-end text-white mt-5 mr-5 ">
              <AiOutlineClose size={30} onClick={()=>{setOpen(false)}}/>
          </Flex>
              <h2 className='font-roboto font-bold text-xl text-white mt-5 mb-8'>SHOPPING CART</h2>

              <ul className='flex justify-between'>
                <li className='font-roboto md:font-medium md:text-base text-white'>Product</li>
                <li className='font-roboto md:font-medium md:text-base text-white'>Name</li>
                <li className='font-roboto md:font-medium md:text-base text-white'>Price</li>
                <li className='font-roboto md:font-medium md:text-base text-white'>Quantity</li>
              </ul>
              
            {
              cartData.map((item)=>{
      return<div className='flex justify-between mt-10 mb-5'>
                  <div className='w-2/12'>
                    <Image src={item.imgUrl}/>
                  </div>

                  <div className='w-4/12'>
                    <p className='text-left   font-roboto font-normal text-xs text-white'>{item.name}</p>
                  </div>

                  <div className='w-1/12'>
                    <p className='text-left font-roboto font-normal text-base text-white ml-[-22px]'>{item.price}</p>
                  </div>

                  <div className='w-1/12'>
                    <p className='text-left flex justify-end font-roboto font-normal text-base text-white ml-[-15px]'>{item.quantity}</p>
                  </div>
              </div>
              })
            }
              
              <Flex className="flex-col  items-center">
                  <Link to="/">
                    <button className='w-[200px] mb-5 px-4  py-4 bg-white rounded-[2px] font-roboto font-semibold text-secondary hover:bg-secondary duration-500 hover:text-white text-lg md:text-xl'>Cheack Out </button>
                  </Link>

                  <Link to="/add-to-card">
                  <button className='w-[200px] px-4  py-4 bg-secondary rounded-[2px] font-roboto text-white font-semibold hover:bg-white hover:text-secondary duration-500 text-lg md:text-xl'>Add to Card</button>
                  </Link>
              </Flex>

  </div>
}
    

       {/* Add to Card part */}


       <Flex className="justify-end p-10 cursor-pointer">
               <BsCart size={30}  onClick={()=>{setOpen(true)}} className='block xl:hidden'/>
        </Flex>



    <h2 className='font-roboto font-bold text-2xl text-secondary'>Card</h2>
    <ul className='flex justify-between  md:gap-x-[300px] mt-5'>
        <li className='font-roboto font-medium text-base text-secondary'>Product</li>
        <li className='font-roboto font-medium text-base text-secondary'>Name</li>
        <li className='font-roboto font-medium text-base text-secondary'>Price</li>
        <li className='font-roboto font-medium text-base text-secondary'>Quantity</li>
    </ul>

        {
            cardData.map((item,index)=>{
             
    return  <div key={index} className='flex justify-between md:gap-x-16 mt-16 mb-5'>
                <div className='w-1/12'>
                  <Image src={item.imgUrl}/>
                </div>

                <div className='w-4/12'>
                <p className=' font-roboto  text-center mx-auto font-normal text-xs text-secondary'>{item.name}</p>
                </div>

                <div className='w-2/12'>
                <p className='pl-[20px] font-roboto font-normal text-base text-secondary '>{item.price}</p>
                </div>

                <div className='w-1/12'>
                <p className='text-left flex justify-end font-roboto font-normal text-base text-secondary '>{item.quantity}</p>
                </div>

            </div>

            })
        }


            
            <h2 className='font-roboto font-bold text-2xl text-secondary text-right mt-2'> Cart totals</h2>
            
        <Flex className="justify-end my-8">
            <table>
                    <thead>
                        <tr>
                            <th className='border border-gray/50  font-dm font-normal text-base text-gray py-4 px-8 md:px-32'>Subtotal</th>
                            <th className='border border-gray/50 font-dm font-bold text-base  text-secondary py-4 px-8 md:px-32'>Total</th>  
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='border border-gray/50 font-dm font-normal text-base text-gray py-4 px-8 md:px-32'>389.99 $</td>
                            <td className='border border-gray/50 font-dm font-bold text-base  text-secondary py-4 px-8 md:px-32'>389.99 $</td>  
                        </tr>
                    </tbody>
                    
            </table>
        </Flex>

            <Flex className="justify-end mt-5">
                <Link to="/add-to-card">
                <button className='md:w-[300px] border-secondary border-[1px]  px-4  py-4 bg-secondary rounded-[2px] font-roboto text-white font-semibold hover:bg-white hover:text-secondary duration-500 text-base   md:text-xl'>Proceed to Checkout</button>
                </Link>
            </Flex>
       </Container>
    </section>
  )
}

export default AddToCard