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
import {AiOutlineScan} from "react-icons/ai"
import {MdOutlineMobileScreenShare} from "react-icons/md"

function Nav() {

  const [scroll, serScroll] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
          if (window.scrollY > 0) {
            serScroll(true);
          } else {
            serScroll(false);
          }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [search,setSearch] = useState("")
  const [searchIcon,setSearchIcon] = useState(true)

  let handleSerchChange = (e)=>{
    if(e.target.value!= ""){
      setSearchIcon(false)
    }else{
      setSearchIcon(true)
    }
     setSearch(e.target.value)  
  }
  

 let dataFiler =Data.filter((item)=>{
  let searchValue = search.toLowerCase()
  return searchValue =="" ? "" : item.name.toLowerCase().includes(searchValue)
 }

 
  
)

  return (
    <>
    <Section>
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
    
    <Section className={`bg-white py-4 lg:py-5  fixed w-full z-10 ${scroll && "top-0"}`}>
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

      <div className='lg:hidden pr-2'>
          <div className='text-primary'>
            <MdOutlineMobileScreenShare size={23} className='ml-1'/>
          </div>
          <p className='text-dm text-xs'>Top Up</p>
        </div>
   </Flex>

          <div className='hidden lg:block'>
            <Flex className="items-center gap-x-8">
              <div>
                <BsCart className='text-3xl'/>
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
                <li className='pt-2 pb-1' key={index}>{item.name}</li>
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