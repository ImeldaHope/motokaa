import React from 'react'

const quotes = [
  {
    name: 'Kariuki J.',
    place: 'Nairobi',
    text: 'Switching to electric has been a game-changer. Driving green feels good, and the cars here make the whole experience genuinely stylish.',
  },
  {
    name: 'Webster M.',
    place: 'Mombasa',
    text: 'I never thought driving could be this thrilling and responsible at once. The range of EVs on Motokaa let me go greener without giving up performance.',
  },
  {
    name: 'David S.',
    place: 'Kisumu',
    text: 'As a committed environmentalist, finding a platform that takes low-emission mobility seriously has been a real relief.',
  },
  {
    name: 'John C.',
    place: 'Nakuru',
    text: 'I was hesitant at first, but after the switch I cannot imagine going back. The convenience, the savings, the cleaner drive — a genuine win.',
  },
  {
    name: 'Wei L.',
    place: 'Eldoret',
    text: 'Finding the right electric vehicle was seamless, and the benefits go well beyond the road: lower emissions, lower costs, a cleaner future.',
  },
]

const Testimonials = () => {
  return (
    <section className='w-full mt-24 md:mt-32'>
      <div className='max-w-[1440px] mx-auto rounded-4xl bg-gradient-to-b from-emerald-deep to-ink text-bone px-7 md:px-16 py-14 md:py-20 shadow-panel'>
        <div className='grid md:grid-cols-2 gap-6 md:gap-12 items-end'>
          <div>
            <p className='eyebrow text-marigold flex items-center gap-2.5'>
              <span className='dial-mark' aria-hidden />
              Powering the future
            </p>
            <h2 className='mt-4 font-display font-extrabold text-4xl md:text-5xl'>
              Drive electric.<br /><span className='text-marigold'>Drive green.</span>
            </h2>
          </div>
          <p className='text-bone/70 leading-relaxed md:text-lg md:pb-2'>
            Cruise the roads in a car that gives back — zero-emission and efficient
            hybrids that pair real performance with a cleaner conscience. Drivers
            across East Africa are already making the change.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
          {quotes.map((q) => (
            <figure
              key={q.name}
              className='flex flex-col rounded-3xl bg-bone/5 border border-bone/10 p-6 hover:bg-bone/10 transition-colors'
            >
              <blockquote className='text-bone/85 leading-relaxed text-[15px] flex-1'>“{q.text}”</blockquote>
              <figcaption className='mt-5 pt-4 border-t border-bone/10 flex items-baseline justify-between'>
                <span className='font-display font-bold'>{q.name}</span>
                <span className='eyebrow text-marigold'>{q.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
