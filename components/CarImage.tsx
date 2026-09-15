"use client"

import React, { useEffect, useRef, useState } from 'react'
import { CarProps } from '@/types'
import { carImagePath } from '@/utils'

interface CarImageProps {
  car: Pick<CarProps, 'make' | 'model' | 'year'>
  view?: string
  className?: string
}

// Renders a car image with a skeleton shimmer while it loads and a neutral
// silhouette placeholder if it fails. The <img> src goes through /api/car-image,
// which already redirects to the placeholder when keys/data are missing — the
// onError swap is a belt-and-suspenders fallback.
const CarImage = ({ car, view, className = '' }: CarImageProps) => {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  const ref = useRef<HTMLImageElement>(null)

  const src = errored ? '/car-placeholder.svg' : carImagePath(car, view)

  // If the image is already cached/complete before React attaches onLoad
  // (common with the tiny SVG placeholder), the event never fires — so sync
  // state from the element on mount / src change.
  useEffect(() => {
    const img = ref.current
    if (img?.complete) {
      if (img.naturalWidth === 0) setErrored(true)
      setLoaded(true)
    }
  }, [src])

  return (
    <>
      {!loaded && <div className='absolute inset-0 skeleton rounded-2xl' aria-hidden />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        alt={`${car.make} ${car.model}`}
        onLoad={() => setLoaded(true)}
        onError={() => { setErrored(true); setLoaded(true) }}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  )
}

export default CarImage
