"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'

const HeroInput = () => {

  const handleSearch = () => {};

  return (
    <form className='bg-white bg-opacity-10 w-full md:h-[100px] h-[300px] rounded-full mb-5'>
        <div className='flex md:flex-row flex-col flex-wrap justify-between items-center my-2.5'>    
          <div className='md:border-r md:p-5 p-2'>
            Choose location:             
            <input type="text" placeholder='Nairobi, Kenya' className='md:mx-3 mx-2 md:p-2 rounded-full text-slate-300'></input>            
          </div>        
          <div className='md:border-r md:p-5 p-2'>
            Pick-up date:
            <input type="date" placeholder='dd/mm/yyyy' className='md:mx-3 mx-2 md:p-2 rounded-full text-slate-300'></input>
          </div>
          <div className='md:border-r md:p-5 p-2'>
            Return date:
            <input type="date" placeholder='dd/mm/yyyy' className='md:mx-3 mx-2 md:p-2 rounded-full text-slate-300'></input>
          </div>          
          <div className='flex flex-row mr-5'>
            <CustomButton 
              title='Search'
              btnType= 'submit'
              containerStyles='flex items-center gap-2 rounded-full text-[#e77924] hover:text-white hover:bg-[#e77924] p-2'
              rightIcon='\magnifying-glass.svg'
              handleClick={handleSearch}/>
          </div>        
      </div>
    </form>
  )
}

export default HeroInput