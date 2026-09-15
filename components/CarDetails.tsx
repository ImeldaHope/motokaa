"use client"

import React, { Fragment, useEffect, useState } from 'react'
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';

import { CarProps } from '@/types';
import CarImage from './CarImage';

interface CarDetailsProps{
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
  }

// The angles CarImages supports; `undefined` = the default ¾-front shot.
const ANGLES: { view?: string; label: string }[] = [
  { view: undefined, label: 'Front' },
  { view: 'side', label: 'Side' },
  { view: 'rear34', label: 'Rear' },
];

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className='flex justify-between items-baseline gap-5 py-2 border-b border-ink/8 last:border-0'>
    <span className='eyebrow text-muted'>{label}</span>
    <span className='font-mono text-sm text-ink text-right'>{value}</span>
  </div>
)

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
  const [activeView, setActiveView] = useState<string | undefined>(undefined);
  const isElectric = car.fuel_type?.toLowerCase() === 'electricity';

  // Reset to the front angle each time the modal opens for a car.
  useEffect(() => {
    if (isOpen) setActiveView(undefined);
  }, [isOpen, car.make, car.model, car.year]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child as={Fragment}
          enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100'
          leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-ink/50 backdrop-blur-sm'/>
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <Transition.Child as={Fragment}
              enter='ease-out duration-300' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100'
              leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-4xl bg-paper p-6 text-left shadow-lift transition-all flex flex-col gap-4'>

                {/* Header row — close lives here, not over the image */}
                <div className='flex items-center justify-between'>
                  <p className='eyebrow text-emerald'>Vehicle details</p>
                  <button type='button' onClick={closeModal} aria-label='Close'
                    className='p-2 -mr-1 rounded-full bg-ink/5 hover:bg-ink/10 transition-colors'>
                    <Image src='/close.svg' alt='' width={18} height={18} className='object-contain'/>
                  </button>
                </div>

                {/* Main image — reflects the selected angle */}
                <div className='relative w-full h-52 rounded-3xl overflow-hidden bg-bone'>
                  <CarImage
                    key={activeView ?? 'front'}
                    car={car}
                    view={activeView}
                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-500'
                  />
                </div>

                {/* Angle thumbnails — click to swap the main image */}
                <div className='grid grid-cols-3 gap-3'>
                  {ANGLES.map(({ view, label }) => {
                    const isActive = activeView === view;
                    return (
                      <button
                        key={label}
                        type='button'
                        onClick={() => setActiveView(view)}
                        aria-pressed={isActive}
                        className={`relative h-20 rounded-2xl overflow-hidden bg-bone border-2 transition-colors ${isActive ? 'border-marigold' : 'border-transparent hover:border-ink/15'}`}
                      >
                        <CarImage car={car} view={view} className='absolute inset-0 w-full h-full object-cover' />
                        <span className='absolute bottom-0 inset-x-0 py-0.5 text-center eyebrow text-[0.6rem] bg-ink/55 text-bone'>{label}</span>
                      </button>
                    );
                  })}
                </div>

                <div>
                  <div className='flex items-center gap-2'>
                    <p className='eyebrow text-muted'>{car.year}</p>
                    {isElectric ? <span className='eyebrow text-emerald border border-emerald/30 rounded-full px-1.5 py-0.5'>EV</span> : null}
                  </div>
                  <h2 className='mt-1 font-display text-2xl font-bold capitalize text-ink'>{car.make} {car.model}</h2>
                </div>

                <div className='flex flex-col'>
                  {car.class && <Row label='Class' value={<span className='capitalize'>{car.class}</span>} />}
                  <Row label='Fuel' value={<span className='capitalize'>{car.fuel_type || '—'}</span>} />
                  {car.drive && <Row label='Drive' value={car.drive.toUpperCase()} />}
                  {car.transmission && <Row label='Transmission' value={car.transmission === 'a' ? 'Automatic' : 'Manual'} />}
                  {car.cylinders != null && <Row label='Cylinders' value={car.cylinders} />}
                  {car.displacement != null && <Row label='Engine' value={`${car.displacement} L`} />}
                  {car.city_mpg != null && <Row label='City' value={`${car.city_mpg} mpg`} />}
                  {car.highway_mpg != null && <Row label='Highway' value={`${car.highway_mpg} mpg`} />}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default CarDetails
