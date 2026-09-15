"use client"

import React, { useEffect, useState } from 'react'

interface HeroVideoProps {
  poster: string
  src: string
  className?: string
}

// Ambient hero background. Renders the still poster on the server and for anyone
// who prefers reduced motion; otherwise swaps to a muted, looping, autoplaying
// video after mount. If the video src is missing, the poster stays visible — so
// the hero looks right before /hero.mp4 exists.
const HeroVideo = ({ poster, src, className = '' }: HeroVideoProps) => {
  const [motion, setMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setMotion(!mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  if (!motion) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt='' aria-hidden className={className} />
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      aria-hidden
      className={className}
    >
      <source src={src} type='video/mp4' />
    </video>
  )
}

export default HeroVideo
