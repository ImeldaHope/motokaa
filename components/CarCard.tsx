"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import { CarProps } from '@/types'
import { CarDetails, CustomButton } from '.'
import { calculateCarRent, generateCarImageUrl } from '@/utils'

interface CarCardProps{
    car:CarProps
}

const CarCard = ({car}:CarCardProps) => {  

    const {city_mpg, year, make, model, transmission, drive } = car;
    const [isOpen, setIsOpen] = useState(false);
    const carRent = calculateCarRent(city_mpg, year)

  return (
    <>
        <div className='group flex flex-col p-6 justify-center items-start text-black-100 bg-yellow-100 hover:bg-white hover:shadow-md rounded-3xl'>
            <div className='relative w-full h-40 my-3 object-contain '>
                <Image src={generateCarImageUrl(car)} alt="car image" fill priority className='object-contain'/>
            </div>
            <div className='w-full flex justify-between items-start gap-2'>
                <h2 className='text-[22px] leading-[26px] font-bold capitalize text-black'>{make} {model}</h2>
            </div>
            <p className='flex mt-3 mb-10 text-[32px] font-extrabold text-black'>
                <span className='self-start text-[14px] font-semibold'> $ </span>
                {carRent}
                <span className='self-end text-[14px] font-medium'> /day </span>
            </p>
            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-black'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/steering-wheel.svg' alt='steering wheel' width={20} height={20}/>
                        <p className='text-[14px]'>{transmission === 'a'? 'Automatic' : 'Manual'}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/tire.svg' alt='tire' width={20} height={20}/>
                        <p className='text-[14px]'>{drive.toUpperCase()}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/gas.svg' alt='gas' width={20} height={20}/>
                        <p> {city_mpg} MPG </p>
                    </div>                    
                </div>
                <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
                    <CustomButton 
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-[#e77924]'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg' 
                        handleClick={() => setIsOpen(true)}/>
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
        </div>          
    </>
  )
}

export default CarCard