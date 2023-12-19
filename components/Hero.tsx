import React from 'react'
import Image from 'next/image'
import { HeroInput } from '.'

const Hero = () => {
  return (
    <div className='flex flex-row flex-wrap border-b border-[#e77924] pb-10'>
      
      <div className='flex flex-row flex-wrap'>
        <div className='flex flex-col flex-wrap max-w-[500px]'>
          <h1 className='lg:text-[40px] text-[20px] font-extrabold'>Find, Rent, or Book — your ideal ride with ease!</h1>
          <p>Unleash Your Drive, Elevate Your Style: Where Dreams Meet the Open Road!</p>
        </div>
        <p className='font-black opacity-10 md:text-[200px] text-5xl z-0'>MOTOKAA</p>
        <div className='items-center z-0'>
          <Image src='/hero-bg-plain.png' alt='hero car image' width={300} height={300}/>
        </div>        
        <div className='hero-bg justify-end items-end'>Explore a world of possibilities with our user-friendly interface and discover the road to convenience, choice, and satisfaction. Your automotive dreams, realized effortlessly with us</div> 
      </div>
      <HeroInput />
      
    </div>
    
    
  )
}

export default Hero