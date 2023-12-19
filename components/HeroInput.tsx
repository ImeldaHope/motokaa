import React from 'react'

const HeroInput = () => {
  return (
    <form className='bg-white bg-opacity-10 w-full md:h-[100px] h-[300px] rounded-full'>
        <div className='flex flex-row flex-wrap justify-between items-center  px-10'>    
          <div className='border-r p-5'>
            Choose location 
            <input type="text" placeholder='Nairobi, Kenya' className='bg-opacity-20 text-black rounded-full'></input>
          </div>
          <div className='border-r p-5'>
            Pick-up date
            <input type="date" placeholder='dd/mm/yyyy' className='bg-opacity-20'></input>
          </div>
          <div className='border-r p-5'>
            Return date
            <input type="date" placeholder='dd/mm/yyyy' className='bg-opacity-20'></input>
          </div>        
      </div>
    </form>
  )
}

export default HeroInput