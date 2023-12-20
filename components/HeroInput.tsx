import React from 'react'
import Image from 'next/image'

const HeroInput = () => {
  return (
    <form className='bg-white bg-opacity-10 w-full md:h-[100px] h-[300px] rounded-full mb-5'>
        <div className='flex flex-row flex-wrap justify-between items-center my-2.5 px-10'>    
          <div className='border-r p-5'>
            Choose location: 
            
            <input type="text" placeholder='Nairobi, Kenya' className='mx-3 p-2 rounded-full text-black'></input>
            
          </div>        
          <div className='border-r p-5'>
            Pick-up date:
            <input type="date" placeholder='dd/mm/yyyy' className='mx-3 p-2 rounded-full text-black'></input>
          </div>
          <div className='border-r p-5'>
            Return date:
            <input type="date" placeholder='dd/mm/yyyy' className='mx-3 p-2 rounded-full text-black'></input>
          </div>        
      </div>
    </form>
  )
}

export default HeroInput