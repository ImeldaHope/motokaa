"use client"

import React from 'react'
import Link from 'next/link';
import CustomButton from './CustomButton';
import Logo from './Logo';

const Navbar = () => {

  const handleContact = () => {};

  return (
    <header className='sticky top-0 z-50'>
      <div className='bg-bone/80 backdrop-blur-md border-b border-ink/10'>
        <nav className='max-w-[1440px] mx-auto flex items-center justify-between md:px-16 px-6 py-4'>
          <div className='flex items-center gap-2.5'>
            <Link href="/" className='flex items-center gap-2 group' aria-label='Motokaa home'>
              <Logo className='h-6 w-auto' />
              <span className='font-display font-extrabold text-xl tracking-tight text-ink'>
                MOTOKAA
              </span>
            </Link>
            <a
              href='https://ihope.dev'
              target='_blank'
              rel='noopener noreferrer'
              className='hidden sm:inline-block font-mono text-[0.7rem] tracking-wide text-muted hover:text-emerald transition-colors border-l border-ink/15 pl-2.5'
            >
              ihope.dev
            </a>
          </div>

          <div className='hidden md:flex items-center gap-1 text-sm font-medium'>
            {['Home', 'Buy', 'Rent', 'Sell'].map((label) => (
              <Link
                key={label}
                href="/"
                className='px-3.5 py-2 rounded-full text-ink/80 hover:text-emerald hover:bg-emerald/5 transition-colors'
              >
                {label}
              </Link>
            ))}
          </div>

          <CustomButton
            title='Contact us'
            btnType='button'
            containerStyles='rounded-full bg-ink text-bone hover:bg-emerald transition-colors text-sm font-semibold'
            handleClick={handleContact}
          />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
