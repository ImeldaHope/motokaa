"use client"

import React from 'react'
import Image from 'next/image'

import { CustomButton } from '.'

const CarSlider = () => {
    const handleLearnMore = () => {}

  return (
    <div className='flex flex-wrap p-5'>
        <div className='flex flex-wrap'>
            <div className=''>
                <p className='text-4xl font-black'>Powering the Future</p> 
                <p className='text-xl font-semibold'>Drive Electric ⚡️, Drive Green 🌿 — Unleash the Potential of Eco-Mobility.</p>
            </div>
            <div>
                <p className='py-5'>Cruise the roads in an eco-friendly car—where sustainability meets performance. Enjoy a guilt-free drive with zero emissions or efficient hybrid technology, embracing a cleaner, greener future. Drive eco-friendly, drive the change. 🌿🚗✨</p>
                <CustomButton 
                title='Learn More'
                btnType= 'button'
                containerStyles='rounded-full bg-[#e77924] p-2'
                handleClick={handleLearnMore}/>
            </div>
        </div>
        <div className='flex flex-wrap p-10'>
            <div className='relative w-full h-[500px] rounded-3xl object-contain '>
                <Image src='/sports-car.jpeg' alt='car-image' fill priority className='object-contain'/>
                <Image src='/chevron-up-down.svg' width={20} height={20} className='ml-4 object-contain absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md' alt='chevron-up-down'/>
                <Image src='/chevron-up-down.svg' width={20} height={20} className='mr-4 object-contain absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md' alt='chevron-up-down'/>
            </div>
        </div>
    </div>
  )
}

export default CarSlider