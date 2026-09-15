"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import { CarProps } from '@/types'
import { CarDetails, CustomButton } from '.'
import CarImage from './CarImage'
import { calculateCarRent } from '@/utils'

interface CarCardProps{
    car:CarProps
}

const CarCard = ({car}:CarCardProps) => {

    const { year, make, model, fuel_type, drive, transmission, city_mpg } = car;
    const isElectric = fuel_type?.toLowerCase() === 'electricity';
    const [isOpen, setIsOpen] = useState(false);
    const carRent = calculateCarRent(car);

  return (
    <div className='group flex flex-col p-5 bg-paper border border-ink/8 hover:border-emerald/30 hover:shadow-lift transition-all duration-300 rounded-4xl'>
        <div className='flex items-start justify-between gap-2'>
            <div>
                <div className='flex items-center gap-2'>
                    <p className='eyebrow text-muted'>{year}</p>
                    {isElectric ? <span className='eyebrow text-emerald border border-emerald/30 rounded-full px-1.5 py-0.5'>EV</span> : null}
                </div>
                <h3 className='mt-1.5 font-display text-xl font-bold capitalize text-ink leading-tight'>{make} {model}</h3>
            </div>
            <p className='font-mono text-ink whitespace-nowrap'>
                <span className='align-top text-xs text-marigold font-bold'>$</span>
                <span className='text-2xl font-bold'>{carRent}</span>
                <span className='text-xs text-muted'>/day</span>
            </p>
        </div>

        <div className='relative w-full h-44 my-5 rounded-2xl overflow-hidden bg-bone'>
            <CarImage
                car={car}
                className='absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105'
            />
        </div>

        <div className='relative flex w-full mt-auto'>
            <div className='flex w-full justify-between text-muted group-hover:opacity-0 transition-opacity duration-200'>
                <div className='flex flex-col items-center gap-1.5'>
                    <Image src='/steering-wheel.svg' alt='' width={20} height={20}/>
                    <p className='eyebrow'>{transmission === 'a' ? 'Auto' : 'Manual'}</p>
                </div>
                <div className='flex flex-col items-center gap-1.5'>
                    <Image src='/tire.svg' alt='' width={20} height={20}/>
                    <p className='eyebrow'>{drive?.toUpperCase() || '—'}</p>
                </div>
                <div className='flex flex-col items-center gap-1.5'>
                    <Image src='/gas.svg' alt='' width={20} height={20}/>
                    <p className='eyebrow'>{city_mpg ? `${city_mpg} MPG` : (isElectric ? 'Electric' : '—')}</p>
                </div>
            </div>
            <div className='hidden group-hover:flex absolute inset-x-0 bottom-0 z-10'>
                <CustomButton
                    title='View details'
                    containerStyles='w-full justify-center gap-2 py-3.5 rounded-2xl bg-marigold hover:bg-[#d99a00] transition-colors'
                    textStyles='text-ink text-sm font-display font-bold'
                    handleClick={() => setIsOpen(true)}/>
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
    </div>
  )
}

export default CarCard
