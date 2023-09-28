import React from 'react'
import Container from '../components/Container'
import Input from '../components/Input'
import Flex from '../components/Flex'

function Cheakout() {
  return (
    <section className='mt-32 mb-8 px-4'>
       <Container>
          <h2 className='font-roboto font-bold text-3xl text-secondary'>Cheakout</h2>
          <p className='font-roboto font-normal text-base mt-5 mb-32 text-secondary'>Have a coupon? Click here to enter your code</p>
       
          <h2 className='font-roboto font-bold text-3xl text-secondary'>Billing Details</h2>
          
          <Flex className="justify-between">
             
             <div className='w-[48%]'>
               <Input text="First Name *" type="text" placeholder="First Name"/>
             </div>
             
             <div className='w-[48%]'>
               <Input text="Last Name *" type="text" placeholder="Last Name"/>
             </div>
          </Flex>

          <div>
               <Input text="Companye Name (optional) * " type="text" placeholder="Companye Name (optional)"/>
          </div>

          <div className='w-full'>
               <Input text="Country *" type="text" placeholder="Country"/>
          </div>

          <div className='w-full'>
               <Input text="Street Address *" type="text" placeholder="House Number And stret name "/>
               <Input  type="text" placeholder="Apantment Address "/>
          </div>
             
          <div className='w-full'>
              <Input text="Town/City *" type="text" placeholder="Town/City"/>
          </div>

          <div className='w-full'>
              <Input text="Post Code * *" type="text" placeholder="Post Code"/>
          </div>

          <div className='w-full'>
              <Input text="Email Address*" type="text" placeholder="Email Address*"/>
          </div>

          <div className='w-full'>
                <Input text="Email Address*" type="text" placeholder="Email Address*"/>
            </div>

         <h2 className='font-roboto font-bold mt-8 mb-5 text-3xl text-secondary'>Your Order</h2>
         <table>
                <thead>
                    <tr>
                        <th className='border border-gray font-roboto font-bold text-base text-secondary py-4 md:px-32 px-16'>Product</th>
                        <th className='border border-gray font-roboto font-normal text-base text-gray py-4 md:px-32 px-16'>Total</th>  
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='border border-gray font-roboto font-bold text-base text-secondary py-4 md:px-32 px-16'>Product name x 1</td>
                        <td className='border border-gray font-roboto font-normal text-base text-gray py-4 md:px-32 px-16'>389.99 $</td>  
                    </tr>

                   <tr>
                    <td className='border border-gray font-roboto font-bold text-base text-secondary py-4 md:px-32 px-16'>Subtotal</td>
                    <td className='border border-gray font-roboto font-normal text-base text-gray py-4 md:px-32 px-16'>389.99 $</td>
                  </tr>

                   <tr>
                        <td className='border border-gray font-dm font-bold text-base text-secondary py-4 md:px-32 px-16'>Total</td>
                        <td className='border border-gray font-dm font-normal text-base text-gray py-4 md:px-32 px-16'>389.99 $</td>  
                   </tr>
                </tbody>
        
             </table>
       </Container>
    </section>
  )
}

export default Cheakout