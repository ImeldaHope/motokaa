import React from 'react';
import Image from 'next/image';
import { HeroInput } from '.';

const Hero = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-wrap justify-center items-center border-b border-[#e77924] bg-hero-bg bg-no-repeat bg-center bg-contain'>
        
        <div className='flex justify-between my-20'>
          <div className='flex flex-wrap gap-y-5 '>
            <h1 className=' text-6xl font-extrabold'>Find, Rent, or Book — your ideal ride with ease!</h1>
            <p>Unleash Your Drive, Elevate Your Style: Where Dreams Meet the Open Road!</p>
          </div>
          <p className='flex items-center font-black opacity-10 text-9xl'>MOTOKAA</p>
          
          <div className='flex items-top '>Explore a world of possibilities with our user-friendly interface and discover the road to convenience, choice, and satisfaction. Your automotive dreams, realized effortlessly with us</div> 
        </div>      
        {/* <div className=''>
          <Image src='/hero-bg-plain.png' alt='hero car image' width={900} height={300}/>
        </div> */}
        <HeroInput />
        
      </div>
    </>
  );
}

export default Hero;
