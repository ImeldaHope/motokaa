"use client"

import React from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState, Fragment } from 'react'

import { SearchManufacturerProps } from '@/types'
import { manufacturers } from '@/constants'


const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps) => {
    const [query, setQuery] = useState('');

    const filteredManufacturers = 
        query === "" 
            ? manufacturers 
            : manufacturers.filter((item) => (
                item.toLowerCase()
                .replace(/\s+/g,"")
                .includes(query.toLowerCase().replace(/\s+/g,"")
                )))
  return (
    <div className='flex-1 max-sm:w-full flex justify-start items-center'>
        <Combobox value={manufacturer} onChange={(value) => setManufacturer(value ?? '')}>
            <div className='relative w-full'>
                <Combobox.Button className="absolute top-[14px]">
                    <Image src="/car-logo.svg" width={20} height={20} className="ml-4 opacity-60" alt=""/>
                </Combobox.Button>
                <Combobox.Input
                    className="w-full h-[48px] pl-12 pr-4 bg-transparent outline-none cursor-text text-sm placeholder:text-ink/40"
                    placeholder='Make — e.g. Volkswagen'
                    displayValue={(manufacturer:string) => manufacturer}
                    onChange={(e) => setQuery(e.target.value)}/>
                <Transition
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                    afterLeave={() => setQuery('')}>
                    <Combobox.Options className='absolute z-20 mt-2 max-h-60 w-full min-w-[200px] overflow-auto rounded-2xl bg-paper py-1.5 text-sm shadow-lift ring-1 ring-ink/10 focus:outline-none'>
                        {/* {filteredManufacturers.length === 0 && query !== "" ?(
                            <Combobox.Option value={query} className='search-manufacturer__option'>
                                Create "{query}"
                            </Combobox.Option>
                        ) : ( */}
                        {    filteredManufacturers.map((item) => (
                                <Combobox.Option 
                                    key={item} 
                                    className={({active}) =>
                                    ` relative cursor-pointer select-none py-2 pl-10 pr-4
                                    ${active ? 'bg-emerald text-bone'
                                    : 'text-ink' }`}
                                    value={item}
                                >
                                    {({selected, active}) => (
                                        <>
                                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                            {item}
                                        </span>

                                        {/* Show an active blue background color if the option is selected */}
                                        {selected ? (
                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                                        ></span>
                                        ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            
                            ))
                        }
                    </Combobox.Options>

                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer