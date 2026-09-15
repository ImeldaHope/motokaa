"use client" 

import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import { CustomButton } from '.'
import { updateSearchParams } from '@/utils'

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {

    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathname = updateSearchParams('limit',`${newLimit}`);

        router.push(newPathname, {scroll: false})
    }

  return (
    <div className='w-full flex items-center justify-center gap-5'>
        {!isNext && (
            <CustomButton title='Show more' btnType='button' containerStyles='bg-ink hover:bg-emerald transition-colors rounded-full text-bone font-display font-semibold' handleClick={handleNavigation} />
        )}
    </div>
  )
}

export default ShowMore