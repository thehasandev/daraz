import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import Section from '../Section';
import Container from '../Container';
import Flex from "../Flex"
import List from "../List"


function Banner() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        arrows:false,
        fade:true,
        appendDots: dots => (
          <div>
             <ul className='flex justify-center gap-x-2 absolute -bottom-3 left-1/2 -translate-x-1/2'> {dots} </ul>
          </div>
        ),
       
        customPaging: i => (
          <div className='text-[100px] text-gray  hidden xl:block'>
              .
          </div>
        )
      };
    
  return (
 <Section className="pt-[80px] xl:pt-[92px]">
  <Container>
    <Flex>
     <div className='w-[20%] hidden lg:block'>
         <ul className='text-gray bg-white md:h-[367px] w-full pl-4'>
            <List text=" Women's & Girls' Fashion" calssName="pb-2 pt-4 hover:text-[#579CB9]"/>
            <List text="Health & Beauty"  calssName="pb-2 hover:text-[#579CB9]"/>
            <List text="Watches, Bags, Jewellery"  calssName="pb-2 hover:text-[#579CB9]"/>
            <List text="Men's & Boys' Fashion"  calssName="pb-2 hover:text-[#579CB9]"/>
            <List text="Mother & Baby"  calssName="pb-2 hover:text-[#579CB9]"/>
            <List text="Electronics Devices"  calssName="pb-2 hover:text-[#579CB9]"/>
            <List text="TV & Home Appliances"  calssName="pb-2 hover:text-[#579CB9]"/>
            <List text="Electronic Accessories"  calssName="pb-2 hover:text-[#579CB9]"/>
            <List text="Groceries"  calssName="pb-2 hover:text-[#579CB9]"/>
            <List text="Home & Lifestyle"  calssName="pb-2 hover:text-[#579CB9]"/>
            <List text="Sports & Outdoors"  calssName="pb-2 hover:text-[#579CB9]"/>
            <List text="Automotive & Motorbike"  calssName="pb-2 hover:text-[#579CB9]"/>
         </ul>
     </div>

       <div className='w-[100%] sm:w-[600px] md:w-[600px] mx-auto lg:w-[80%]'>
        <Slider {...settings} className='relative'>
            <div className='bg-one  lg:h-[410px] h-[150px] md:[200px] bg-contain bg-no-repeat '></div>
            <div className='bg-two  lg:h-[410px] h-[150px] md:[200px] bg-contain bg-no-repeat '></div>
            <div className='bg-three  lg:h-[410px] h-[150px] md:[200px] bg-contain bg-no-repeat '></div>
            <div className='bg-four  lg:h-[410px] h-[150px] md:[200px] bg-contain bg-no-repeat '></div>
            <div className='bg-five  lg:h-[410px] h-[150px] md:[200px] bg-contain bg-no-repeat '></div>        
            <div className='bg-six  lg:h-[410px] h-[150px] md:[200px]  bg-contain bg-no-repeat '></div>
            <div className='bg-seven  lg:h-[410px] h-[150px] md:[200px] bg-contain bg-no-repeat '></div>
            <div className='bg-eight  lg:h-[410px] h-[150px] md:[200px] bg-contain bg-no-repeat '></div>
        </Slider> 
       </div>
    </Flex>
  </Container>   
 </Section>
  )
}

export default Banner