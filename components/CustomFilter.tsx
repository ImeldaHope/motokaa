"use client"

import React from 'react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'

const CustomFilter = ({title, options}: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams =(e: {title: string, value: string}) =>{
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName, {scroll: false})
  }

  return (
    <div className='w-fit'>
      <Listbox value={selected} onChange={(e) => {setSelected(e); handleUpdateParams(e);}}>
        <div className='relative w-fit z-10'>
          <Listbox.Button className='relative w-full min-w-[127px] flex justify-between items-center cursor-pointer rounded-full bg-paper border border-ink/10 py-2.5 px-4 text-left text-ink shadow-card sm:text-sm hover:border-emerald/40 transition-colors'>
            <span className='block truncate font-medium'>{selected.title}</span>
            <Image src='/chevron-up-down.svg' width={18} height={18} className='ml-3 object-contain' alt=''/>
          </Listbox.Button>
          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Listbox.Options className='absolute mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-paper py-1.5 text-sm shadow-lift ring-1 ring-ink/10 focus:outline-none'>{options.map((option) => (
              <Listbox.Option key={option.title} value={option} className={ ({ active }) => `relative cursor-pointer select-none py-2 px-4 ${ active? 'bg-emerald text-bone' : 'text-ink'}`}>
                {({selected}) => (
                <span className={`block truncate ${selected? 'font-bold' : 'font-normal'}`}>{option.title}</span>
              )}
              </Listbox.Option>
            ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter