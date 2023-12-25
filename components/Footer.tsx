import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col '>
      <div className='p-10 flex  flex-row flex-wrap gap-5 justify-center items-center'>
        <div className='flex-1 flex-col justify-start items-start'>
          <Image src='/motokaa-logo.png' alt='Motokaa logo' width={70} height={70}/>
          <p className='font-bold'>Motokaa — Auto elegance</p>
          <p className='max-w-[500px]'>Buy, Rent, Sell a car! <br/><br/> Empower your journey with us, where seamless automotive transactions come to life. Our platform offers a tailored experience, connecting passionate drivers with their perfect ride. Your automotive dreams, realized effortlessly at Motokaa.</p>
        </div>
        <div className='flex flex-wrap'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col gap-3 min-w-[170px] min-h-[200px]'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url}> {item.title}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center py-3 border-t border-[#e77924]'>
        <p>< sup> &copy; </sup>2023 <a href=" " className='underline'>Motokaa</a> All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer