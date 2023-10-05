import React, { useState,useEffect } from 'react'

import Data from "../../data/search"

import Section from "../Section"
import Container  from "../Container"
import List from '../List'
import Image from "../Image"
import Flex from "../Flex"



import Daraz from "../../assets/darazLogo.png"
import Free from "../../assets/freeDelevary.png"
import Tittle from "../../assets/tittle.png"

import {BsCart} from "react-icons/bs"
import {BiSearchAlt2} from "react-icons/bi"
import { AiOutlineClose, AiOutlineScan,AiOutlineCloseSquare} from "react-icons/ai"
import {MdOutlineMobileScreenShare} from "react-icons/md"
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,removeCart } from '../../Slices/cartSlices'


function Nav() {
  const [scroll, setScroll] = useState(false);
  const [open,setOpen] =useState(false)
  const [card,setCard]=useState (false)
  
  const [search,setSearch] = useState("")
  const [searchIcon,setSearchIcon] = useState(true)
  
  let location = window.location.pathname
  let cardData = useSelector((state)=>state.cart.cartitem)
  let dispatch =useDispatch()
  
  
  let handleSerchChange = (e)=>{
    if(e.target.value!= ""){
      setSearchIcon(false)
    }else{
      setSearchIcon(true)
    }
    setSearch(e.target.value)  
  }
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
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

 let dataFiler = Data.filter((item)=>{
  let searchValue = search.toLowerCase()
  return searchValue == "" ? "" : item.name.toLowerCase().includes(searchValue)
 }


)

  return (
    <>
    <Section>
      
      {/* Add to Card for Large Device  */}
      
      <div className={`absolute w-4/12 h-screen bg-primary z-50 top-0 right-0   duration-500 ${open ? "rotate-x-0" : "rotate-x-90"}`}>
          <Flex className="justify-end px-2 text-white">
            <AiOutlineClose size={30} onClick={()=>{setOpen(false)}} className='cursor-pointer'/>
          </Flex>
          <h2 className='font-roboto font-bold text-xl px-2 text-white mt-4 mb-4'>SHOPPING CART</h2>

          <ul className='flex justify-between mb-2 px-2'>
            <li className='font-roboto font-medium text-base text-white'>Action</li>
            <li className='font-roboto font-medium text-base text-white'>Product</li>
            <li className='font-roboto font-medium text-base text-white'>Name</li>
            <li className='font-roboto font-medium text-base ml-6 text-white'>Price</li>
            <li className='font-roboto font-medium text-base text-white'>Quantity</li>
            <li className='font-roboto font-medium text-base text-white'>Subtotal</li>
          </ul>
          {
            cardData.length>0 ? 
            <div>
                {
                  cardData.map((item,index)=>{
                    
          return  <ul key={index} className='flex bg-white justify-between text-secondary items-center my-4'>
                  <li onClick={()=>{handelRemove(item)}} className='w-24 font-roboto pl-5 font-normal text-base cursor-pointer text-secondary'>
                    <AiOutlineCloseSquare size={25}/>
                  </li>

                  <li className='w-10 mr-5 '>
                    <Image src={item.imgUrl}/>
                  </li>

                  <li className='w-36 mr-2 text-center font-roboto  font-normal text-base text-secondary'>
                    {item.name}
                  </li>
                  
                  <li className='w-[80px] ml-1 font-roboto font-normal text-base text-secondary'>
                      {item.price}
                  </li>

                  <li className='w-16 font-roboto  font-normal text-base text-secondary'>
                      <div className=' border border-secondary border-solid flex justify-center gap-x-1.5'>
                        <button onClick={()=>{handleDecrement(item)}}>-</button>
                          {item.quantity}
                        <button onClick={()=>{handleIncrement(item)}}>+</button>
                      </div>
                  </li>

                  <li className='w-24 text-right font-roboto mr-2  font-normal text-base text-secondary'>
                        {item.price*item.quantity}
                  </li>
                  


                  </ul>

                    
                  })
                }
                <p className='text-right pr-8 font-roboto  font-medium text-lg text-white'>Totall : {tottal}</p> 
                <Flex className="mt-5 justify-end">
                  <Link to="/check-out">
                    <button onClick={()=>{setOpen(false)}} className='w-[200px] lg:w-[150px] mr-4  px-4  py-4 bg-white rounded-[2px] font-roboto font-semibold text-secondary hover:bg-secondary duration-500 hover:text-white text-xl md:text-xl'>Cheack Out </button>
                  </Link>

                  <Link to="/add-to-card">
                  <button onClick={()=>{setOpen(false)}} className='w-[200px] lg:w-[150px] px-4  py-4 bg-secondary rounded-[2px] font-roboto text-white font-semibold hover:bg-white hover:text-secondary duration-500 text-xl md:text-xl'>Add to Card</button>
                  </Link>
                  
                </Flex>   

            </div>
            :
            <h1 className='font-roboto font-bold absolute top-1/2 left-1/2 -translate-x-1/2 items-center text-3xl  text-white'>Card is Empty</h1>
          }
      </div>
       
      {/* Add to Card for Large Device  */}
      
      
      <Container>
        <div className='hidden lg:block'>
          <div className='bg-[#ECECEC] py-2 flex justify-center'>
              <ul className='list-none flex gap-x-10 '>
                  <List text="SAVE MORE ON APP" navList/> 
                  <List text="DARAZ DONATES" navList/> 
                  <List text="CUSTOMER CARE" navList/> 
                  <List text="TRACK MY ORDER " navList/> 
                  <List text="SIGNUP / LOGIN  " navList/> 
                  <List text="DARAZ AFFILIATE PROGRAM" navList/> 
                  <List text="ভাষা" navList/> 
              </ul> 
          </div>
        </div>
      </Container>
    </Section>
    
    <Section className={`bg-white py-4 lg:py-5  fixed w-full z-10 ${scroll ? "top-0" : "top-0 md:top-8"}`}>
      <Container>
        <Flex className=" justify-between items-center">
           <div className='lg:hidden pl-4'>
              <AiOutlineScan size={23} className='text-primary'/>
               <p className='text-dm text-xs'>Scan</p>
           </div>
           
          <div className='w-[120px] hidden lg:block'>
            <Image src={Daraz} alt="Daraz-logo"/>
          </div>

          
          <div className='relative'>
             <div className='w-[200px] sm:w-[500px]  lg:w-[550px] 2xl:w-[800px]'>
                  <input onChange={handleSerchChange} value={search} type="text" placeholder='Search in Daraz' className='focus:outline-none py-3 px-5 rounded-lg w-full bg-[#F5F5F5]'/>
             </div>
           
             <div className='h-full px-2 flex items-center lg:bg-primary absolute top-0 right-0 '>
              
              <BiSearchAlt2 className={`${searchIcon?"block" :"hidden md:block"} text-xl lg:text-3xl lg:text-white`}/>
               
             </div>
          </div>

   <Flex className="gap-x-3 ">
      <div className='lg:hidden'>
        <div className='w-6 border rounded-full border-primary '>
          <Image src={Tittle}/>
        </div>
         <p className='text-dm text-xs'>Coins</p>
      </div>
{/* Change  */}

      <div className='lg:hidden pr-2'>
          <div className='text-primary'>
            {
              location == "/" ?
              <>
              <MdOutlineMobileScreenShare size={23} className='ml-1'/>
              <p className='text-dm text-xs'>Top Up</p>
              </>
              :
              <div className='relative'>
              <BsCart size={23} onClick={()=>{setCard(true)}} className='cursor-pointer'/>
              <p className='font-roboto text-lg font-semibold top-[-18px] right-[-4px] absolute'>{cardData.length}</p>
              <p className='text-dm text-xs'>Card</p>
              </div>
              
            }
          </div>
          
      </div>

{/* Add to Cart for mobile  */}


 
  <div className={`absolute w-full right-0 h-screen   bg-primary z-50 top-0 duration-500 ${card ? "rotate-x-0" : "rotate-x-90"}`}>
        <Flex className="justify-end text-white mt-5 mr-5 ">
          <AiOutlineClose size={30} onClick={()=>{setCard(false)}}/>
        </Flex>
        <h2 className='font-roboto font-bold text-xl pl-2 text-white mt-5 mb-8'>SHOPPING CART</h2>

        <ul className='flex justify-between px-2'>
            <li className='font-roboto md:font-medium md:text-base text-white'>Action</li>
            <li className='font-roboto md:font-medium md:text-base text-white'>Product</li>
            <li className='font-roboto md:font-medium md:text-base text-white'>Name</li>
            <li className='font-roboto md:font-medium md:text-base text-white'>Price</li>
            <li className='font-roboto md:font-medium md:text-base text-white'>Quantity</li>
            <li className='font-roboto md:font-medium md:text-base text-white'>Subtottal</li>
        </ul>

        {
          cardData.length>0 ? 
        <div>
            {
              cardData.map((item,index)=>{
        return<ul key={index} className='flex justify-between bg-white items-center mt-10 mb-5 py-1'>
                
                  <li onClick={()=>{handelRemove(item)}} className=' font-roboto pl-5 font-normal text-base cursor-pointer text-secondary'>
                          <AiOutlineCloseSquare size={25}/>
                  </li>

                  <li className='w-8'>
                          <Image src={item.imgUrl}/>
                    </li>

                    <li className='w-16 font-roboto  font-normal text-xs text-secondary'>
                      {item.name}
                    </li>
                    
                    <li className=' bg-white  font-roboto font-normal text-base text-secondary'>
                        {item.price}
                    </li>

                    <li className='mr-6 w-12 font-roboto  font-normal text-base text-secondary'>
                        <div className=' border border-secondary border-solid flex justify-center gap-x-1.5'>
                          <button onClick={()=>{handleDecrement(item)}}>-</button>
                            {item.quantity}
                          <button onClick={()=>{handleIncrement(item)}}>+</button>
                        </div>
                    </li>

                    <li className=' mr-2 font-roboto  font-normal text-base text-secondary'>
                          {item.price*item.quantity}
                    </li>
          
              </ul>
              })
            }
              <p className='text-right pr-8  mb-4 font-roboto  font-medium text-lg text-white'>Totall : {tottal}</p> 
              <Flex className="flex-col  items-end mr-5">
                <Link to="/check-out">
                  <button onClick={()=>{setCard(false)}} className='w-[200px] mb-4 px-4  py-4 bg-white rounded-[2px] font-roboto font-semibold text-secondary hover:bg-secondary duration-500 hover:text-white text-lg md:text-xl'>Cheack Out </button>
                </Link>

                <Link to="/add-to-card">
                <button onClick={()=>{setCard(false)}}  className='w-[200px] px-4  py-4 bg-secondary rounded-[2px] font-roboto text-white font-semibold hover:bg-white hover:text-secondary duration-500 text-lg md:text-xl'>Add to Card</button>
                </Link>
              </Flex>

        </div>   
        :
        <h1 className='font-roboto font-bold absolute top-1/2 left-1/2 -translate-x-1/2 items-center text-3xl  text-white'>Card is Empty</h1>
        }


  </div>


{/* Add to Cart for mobile  */}


   </Flex>

          <div className='hidden lg:block'>
            <Flex className="items-center gap-x-8">
             
              <div onClick={()=>setOpen(!open)} className='cursor-pointer relative'>
                <BsCart className='text-3xl'/>
                 <p className='font-roboto text-xl font-bold top-[-16px] right-[-10px] absolute'>{cardData.length}</p>
              </div>
               
            
                          
              <div className='w-[220px] '>
                <Image src={Free} alt="free Delevary"/>
              </div>
            </Flex>
          </div>


        </Flex>

        <div className='absolute mt-2 xl:left-[350px] rounded-md bg-white left-[100px] w-[170px] xl:w-[550px] px-5  text-secondary  text-xl'>
        <ul>
             {
              dataFiler.map((item,index)=>(
                <li key={index} className='pt-2 pb-1'>{item.name}</li>
              ))
             }
             
           </ul>
        </div>
      </Container>
    </Section>

    </>
  )
}

export default Nav