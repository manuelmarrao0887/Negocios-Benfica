/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Each site picks its display/body font from these utilities (font-fraunces, font-space, ...).
      // Body default is Inter (font-sans). All families are loaded in index.html.
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        fraunces: ['Fraunces', 'Georgia', 'serif'],
        nunito: ['"Nunito Sans"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        plex: ['"IBM Plex Sans"', 'sans-serif'],
        plexmono: ['"IBM Plex Mono"', 'monospace'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        jost: ['Jost', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 28s linear infinite',
        'spin-slow': 'spin-slow 32s linear infinite',
      },
    },
  },
  plugins: [],
}
