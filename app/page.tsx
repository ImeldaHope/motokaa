import { CarCard, CarSlider, Hero, SearchBar, ShowMore, CustomFilter } from "@/components"
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from "@/types";

export default async function Home({searchParams}: HomeProps) {
  const params = await searchParams;
  const limit = Number(params.limit) || 10;

  const allCars = await fetchCars({
    manufacturer: params.manufacturer || '',
    year: params.year,
    fuel: params.fuel || '',
    limit,
    model: params.model || ''
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

  return (
    <main className="flex min-h-screen flex-col items-center md:px-16 px-6">
      <Hero/>
      <div className='w-full mt-20 md:mt-28 max-w-[1440px] mx-auto' id="discover">
        <div className='flex flex-col items-start gap-y-3'>
          <p className='eyebrow text-emerald flex items-center gap-2.5'>
            <span className='dial-mark' aria-hidden />
            The fleet
          </p>
          <h2 className='font-display font-extrabold text-4xl md:text-5xl text-ink'>Car catalogue</h2>
          <p className='text-muted text-base md:text-lg'>Browse what is on the road right now — filter down to the one that fits.</p>
        </div>

        <div className='flex flex-wrap items-center justify-between w-full mt-10 gap-5'>
          <SearchBar />
          <div className='flex flex-wrap justify-start items-center gap-2'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        { !isDataEmpty ? (
          <section>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-6 pt-14 pb-12'>
              {allCars?.map((car, index) => (
                <CarCard key={`${car.make}-${car.model}-${car.year}-${index}`} car={car}/>
              ))}
            </div>
            <ShowMore pageNumber={limit / 10} isNext={limit > allCars.length}/>
          </section>
        ):(
          <div className='mt-16 mb-8 flex flex-col items-center justify-center gap-3 text-center border border-ink/10 rounded-4xl py-16 bg-paper'>
            <span className='dial-mark' aria-hidden />
            <h3 className='font-display text-ink text-2xl font-bold'>No cars match that search — yet</h3>
            <p className='text-muted max-w-sm'>Try a different make, year or fuel type, or clear a filter to see the full fleet.</p>
          </div>
        )}
      </div>
      <CarSlider />
    </main>
  )
}
