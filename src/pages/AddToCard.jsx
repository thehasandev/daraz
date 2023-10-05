import React, { useEffect, useState } from 'react'

import Image from '../components/Image'
import Container from "../components/Container"
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import {AiOutlineCloseSquare} from "react-icons/ai"


import { useDispatch, useSelector } from 'react-redux';

import { increment,decrement,removeCart } from '../Slices/cartSlices'


function AddToCard() {
    let cardData = useSelector((state)=>state.cart.cartitem)
    let dispatch = useDispatch()
  // Add to cart
let [tottal,setTottal] =useState("")

let handleDecrement =(item)=>{
    dispatch(decrement(item))
  }  


let handleIncrement =(item)=>{
    dispatch(increment(item))
  }  

let handelRemove =(item)=>{
    dispatch(removeCart(item))
  }  
  
  useEffect(()=>{
    let total =0
    cardData.map((item)=>{
      total +=item.price*item.quantity
      
    })
    setTottal(total)
  },[cardData])

  return (
    <section className='mt-36 mb-16 px-5'>
       <Container>
        
        <h2 className='font-roboto font-bold text-2xl text-secondary'>Card</h2>
        
        <ul className='flex justify-between md:px-2 mt-5 mb-5 md:mb-16'>
            <li className='font-roboto font-medium text-base text-secondary'>Action</li>
            <li className='font-roboto font-medium text-base text-secondary'>Product</li>
            <li className='font-roboto font-medium text-base text-secondary'>Name</li>
            <li className='font-roboto font-medium text-base text-secondary'>Price</li>
            <li className='font-roboto font-medium text-base text-secondary'>Quantity</li>
            <li className='font-roboto font-medium text-base text-secondary'>Subtottal</li>
        </ul>

        {
            cardData.map((item,index)=>{
             
    return  <ul key={index} className='flex  justify-between items-center  mb-5 bg-primary py-1 text-white px-2'>
              <li onClick={()=>{handelRemove(item)}} className='w-[50px] md:w-[250px]'>
              <AiOutlineCloseSquare size={25}/>
              </li>

              <li className='w-12 mr-2 md:w-16 bg-sky-500'>
                <Image src={item.imgUrl}/>
              </li>

              <li className='w-[90px] md:w-[450px] '>
                <p className=' font-roboto  text-center mx-auto font-normal text-xs text-white'>{item.name}</p>
              </li>
             
              <li className='md:w-[260px] '>
                <p className='md:pl-5 font-roboto font-normal text-base text-white '>{item.price}</p>
              </li>

              <li className='md:w-[70px]  text-center '>
                <div className='border ml-4 border-white flex gap-x-2 justify-center'>
                    <button onClick={()=>{handleDecrement(item)}}>-</button>
                      {item.quantity}
                    <button onClick={()=>{handleIncrement(item)}}>+</button>
                </div>
              </li>

              <li className='md:w-[280px] w-16 '>
               <p className=' text-right font-roboto font-normal text-base text-white '>{item.price*item.quantity}</p>
              </li>
                

            </ul>

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
                            <td className='border border-gray/50 font-dm font-normal text-base text-gray py-4 px-8 md:px-32'>{tottal}</td>
                            <td className='border border-gray/50 font-dm font-bold text-base  text-secondary py-4 px-8 md:px-32'>{tottal}</td>  
                        </tr>
                    </tbody>
                    
            </table>
        </Flex>

            <Flex className="justify-end mt-5">
                <Link to="/check-out">
                <button  className='md:w-[300px] border-secondary border-[1px]  px-4  py-4 bg-secondary rounded-[2px] font-roboto text-white font-semibold hover:bg-white hover:text-secondary duration-500 text-base   md:text-xl'>Proceed to Checkout</button>
                </Link>
            </Flex>
       </Container>
    </section>
  )
}

export default AddToCard