import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='min-h-[70vh] flex flex-col items-center justify-center text-center md:px-16 px-6 py-24'>
      <p className='eyebrow text-marigold flex items-center gap-2.5'>
        <span className='dial-mark' aria-hidden />
        Error 404 · off the map
      </p>

      <h1 className='mt-6 font-display font-extrabold text-ink text-5xl md:text-7xl leading-[0.95]'>
        This road<br />
        <span className='text-emerald'>doesn’t exist.</span>
      </h1>

      <p className='mt-5 max-w-md text-muted md:text-lg'>
        The page you were looking for took a wrong turn. Let’s get you back on the open road.
      </p>

      <Link
        href='/'
        className='mt-9 inline-flex items-center gap-2 rounded-full bg-marigold text-ink font-display font-bold px-7 py-3.5 hover:bg-ink hover:text-marigold transition-colors'
      >
        Back to home
      </Link>
    </main>
  )
}
