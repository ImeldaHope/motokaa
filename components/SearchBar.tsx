"use client"

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

import { SearchManufacturer } from '.'
import { useRouter } from 'next/navigation'

const SearchButton = ({otherClasses}:{otherClasses : string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src='/magnifying-glass.svg' alt='magnifying glass' width={40} height={40} className='object-contain'/>
  </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(manufacturer === '' && model === ''){
        return alert('Please fill in the search bar')
      }

      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(model){
        searchParams.set('model', model)
      } else {
        searchParams.delete('model')
      }

      if(manufacturer){
        searchParams.set('manufacturer', manufacturer)
      } else {
        searchParams.delete('manufacturer')
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathname, {scroll: false})

    }

  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-3 max-w-3xl text-ink bg-paper border border-ink/10 rounded-full max-sm:rounded-3xl shadow-card p-1.5 pr-2' onSubmit={handleSearch}>
        <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer} />
            <SearchButton otherClasses='sm:hidden'/>
        </div>
        <div className='flex-1 max-sm:w-full flex justify-start items-center relative sm:border-l sm:border-ink/10'>
          <Image src='/model-icon.png' width={20} height={20} className='absolute w-[20px] h-[20px] ml-4 opacity-60' alt=''/>
          <input type='text' name='model' value={model} onChange={(e) => setModel(e.target.value)} placeholder='Model — e.g. Tiguan' className='w-full h-[48px] pl-12 pr-4 bg-transparent outline-none cursor-text text-sm placeholder:text-ink/40' />
          <SearchButton otherClasses='sm:hidden'/>
        </div>
        <SearchButton otherClasses='max-sm:hidden'/>
    </form>
  )
}

export default SearchBar