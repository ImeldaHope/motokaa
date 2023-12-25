"use client"

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {

  const handleContact = () => {};

  return (
    <header>
        <nav className='bg-white bg-opacity-10 px-8 flex flex-row items-center justify-between'>
            <Link href="/" className=''>
                <Image src="/motokaa-logo.png" alt="Motokaa-logo" width={80} height={80}/>
            </Link>
            <div className=' flex justify-between items-center gap-5 md:gap-20'>
                <Link href="/" className='hover:text-[#e77924] rounded-none p-2'>Home</Link>
                <Link href="/" className='hover:text-[#e77924] rounded-none p-2'>Buy</Link>
                <Link href="/" className='hover:text-[#e77924] rounded-none p-2'>Rent</Link>
            </div>
            <CustomButton 
              title='Contact us'
              btnType= 'button'
              containerStyles='rounded-full bg-[#e77924]'
              
              handleClick={handleContact} />                       
        </nav>        
    </header>
  )
}

export default Navbar