import { CarCard, CarSlider, Hero, SearchBar, ShowMore, CustomFilter } from "@/components"
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from "@/types";

export default async function Home({searchParams}: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-16 px-8">      
      <Hero/>
      <div className='mt-12 py-4 max-w-[1440px] mx-auto' id="discover">
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Discover the cars that suit your preferences.</p>
        </div>
        <div className=' flex flex-wrap flex-between items-center w-full mt-10 gap-5  '>
          <SearchBar />
          <div className='flex flex-wrap justify-start items-center gap-2 text-black'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>          
        </div>

        { !isDataEmpty ? (
          <section>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 pb-12'>    
              {allCars?.map((car) => (
                <CarCard car={car}/>
              ))}          
            </div>
            <ShowMore pageNumber = {(searchParams.limit || 10) / 10} isNext={(searchParams.limit || 10) > allCars.length}/>
          </section>
        ):(
          <div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-black text-xl font-bold'> Ooops, we have no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
      <CarSlider />
    </main>
  )
}
