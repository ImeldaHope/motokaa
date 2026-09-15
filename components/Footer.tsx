import React from 'react'
import Link from 'next/link'

import { footerLinks } from '@/constants'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='w-full mt-24 md:mt-32 bg-ink text-bone'>
      <div className='max-w-[1440px] mx-auto md:px-16 px-6 pt-16 pb-10'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between'>
          <div className='max-w-sm'>
            <div className='flex items-center gap-2.5'>
              <Logo className='h-7 w-auto' />
              <span className='font-display font-extrabold text-2xl tracking-tight'>MOTOKAA</span>
            </div>
            <p className='mt-5 text-bone/60 leading-relaxed'>
              Auto elegance for East Africa. Rent, buy or sell with a platform built
              to connect drivers with the machine that fits — seamlessly, and on your terms.
            </p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12'>
            {footerLinks.map((column) => (
              <div key={column.title} className='flex flex-col gap-3.5'>
                <h3 className='eyebrow text-marigold'>{column.title}</h3>
                {column.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className='text-sm text-bone/70 hover:text-bone transition-colors'
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='mt-14 pt-6 border-t border-marigold/30 flex flex-col sm:flex-row justify-between items-center gap-3'>
          <p className='eyebrow text-bone/50'>© 2026 Motokaa · All rights reserved</p>
          <p className='eyebrow text-bone/50'>Made for the open road</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
