"use client"

import React from 'react'
import { CustomButton } from '.'

const fieldWrap = 'flex flex-col gap-1 px-5 py-3.5 flex-1 min-w-[150px]'
const label = 'eyebrow text-muted flex items-center gap-2'
const input =
  'bg-transparent outline-none text-ink font-medium text-[15px] placeholder:text-ink/35 w-full'

const HeroInput = () => {

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSearch}
      className='bg-paper rounded-3xl md:rounded-full shadow-lift border border-ink/5 flex flex-col md:flex-row md:items-stretch divide-y md:divide-y-0 md:divide-x divide-ink/10 p-2 md:p-2 md:pl-2'
    >
      <div className={fieldWrap}>
        <span className={label}>
          <span className='dial-mark' aria-hidden />
          Location
        </span>
        <input type='text' defaultValue='Nairobi, Kenya' className={input} aria-label='Pick-up location' />
      </div>

      <div className={fieldWrap}>
        <span className={label}>Pick-up</span>
        <input type='date' className={`${input} uppercase`} aria-label='Pick-up date' />
      </div>

      <div className={fieldWrap}>
        <span className={label}>Return</span>
        <input type='date' className={`${input} uppercase`} aria-label='Return date' />
      </div>

      <div className='flex items-center p-2 md:pl-3'>
        <CustomButton
          title='Search cars'
          btnType='submit'
          containerStyles='w-full md:w-auto gap-2 rounded-2xl md:rounded-full bg-marigold text-ink font-display font-bold hover:bg-ink hover:text-marigold transition-colors'
          rightIcon='/magnifying-glass.svg'
          handleClick={handleSearch}
        />
      </div>
    </form>
  )
}

export default HeroInput
