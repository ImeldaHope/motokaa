import React from 'react'

// Motokaa brand mark — a simple marigold car. Badge-less so it reads on both
// the light navbar and the dark footer. The favicon (app/icon.svg) is the
// badged version for the browser tab.
const Logo = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox='4 10.5 24 14.5'
    className={className}
    aria-hidden
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M10.8 15.8 l1.9-3.1 a1.3 1.3 0 0 1 1.1-.6 h4.4 a1.3 1.3 0 0 1 1.1 .6 l1.9 3.1 z' fill='#F2A900' />
    <rect x='5.6' y='15.3' width='20.8' height='5' rx='2.4' fill='#F2A900' />
    <circle cx='11' cy='20.8' r='2.6' fill='#F2A900' />
    <circle cx='21' cy='20.8' r='2.6' fill='#F2A900' />
    <circle cx='11' cy='20.8' r='1.05' fill='#0E1A14' />
    <circle cx='21' cy='20.8' r='1.05' fill='#0E1A14' />
  </svg>
)

export default Logo
