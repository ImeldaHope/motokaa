import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Savannah Dusk — East African automotive marketplace
        ink: '#0E1A14',        // deep forest-black — primary text
        emerald: {
          DEFAULT: '#116A43',  // brand green
          deep: '#0B3D28',     // darker panel green
        },
        marigold: '#F2A900',   // warm sun accent / CTA
        clay: '#C6472B',       // sparing secondary warm accent
        bone: '#F3EFE6',       // warm off-white page ground
        paper: '#FBFAF6',      // card surface
        muted: '#5C6058',      // muted stone text
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(14,26,20,0.04), 0 12px 32px -12px rgba(14,26,20,0.14)',
        lift: '0 8px 20px -6px rgba(14,26,20,0.18), 0 24px 48px -18px rgba(14,26,20,0.22)',
        panel: '0 40px 80px -32px rgba(11,61,40,0.55)',
      },
      keyframes: {
        'rise': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'roll-in': {
          '0%': { opacity: '0', transform: 'translateX(48px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'dial': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'roll-in': 'roll-in 1s cubic-bezier(0.22,1,0.36,1) both',
        'dial-slow': 'dial 60s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
