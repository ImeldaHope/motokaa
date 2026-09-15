import React from 'react';

import { HeroInput } from '.';
import HeroVideo from './HeroVideo';

const stats = [
  { figure: '1,200+', label: 'Cars ready' },
  { figure: '38', label: 'Towns served' },
  { figure: '4.9', label: 'Driver rating' },
];

const Hero = () => {
  return (
    <section className='w-full max-w-[1440px] mx-auto pt-6 md:pt-10'>
      <div className='relative overflow-hidden rounded-4xl shadow-panel min-h-[32rem] md:min-h-[34rem] flex'>
        {/* Ambient cinematic background — poster now, /hero.mp4 when added */}
        <HeroVideo
          poster='/sports-car.jpeg'
          src='/hero.mp4'
          className='absolute inset-0 w-full h-full object-cover object-center md:object-[70%_center]'
        />
        {/* Darkening + brand tint so the copy stays readable over the footage */}
        <div
          className='absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-emerald-deep via-emerald-deep/85 to-emerald-deep/25'
          aria-hidden
        />
        <div className='absolute inset-0 bg-ink/20' aria-hidden />

        {/* The thesis */}
        <div className='relative z-10 max-w-xl px-7 md:px-14 py-14 md:py-20 flex flex-col justify-center animate-rise'>
          <p className='eyebrow text-marigold flex items-center gap-2.5'>
            <span className='dial-mark' aria-hidden />
            Est. Nairobi · East Africa
          </p>
          <h1 className='mt-5 font-display font-extrabold text-bone text-[2.75rem] leading-[0.98] sm:text-6xl md:text-[4.25rem]'>
            Find your<br />
            <span className='text-marigold'>open road.</span>
          </h1>
          <p className='mt-5 max-w-md text-bone/80 text-base md:text-lg leading-relaxed'>
            Rent, buy or sell across the region — from a weekend runabout to
            the machine you have been dreaming about. Keys in hand, effortlessly.
          </p>

          <dl className='mt-9 flex flex-wrap gap-x-8 gap-y-4'>
            {stats.map((s) => (
              <div key={s.label}>
                <dt className='font-mono text-2xl md:text-3xl font-bold text-bone'>{s.figure}</dt>
                <dd className='eyebrow mt-1' style={{ color: 'rgba(243,239,230,0.6)' }}>
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Booking bar — overlaps the panel like an instrument strip */}
      <div className='px-4 sm:px-8 -mt-6 md:-mt-9 relative z-10'>
        <HeroInput />
      </div>
    </section>
  );
}

export default Hero;
