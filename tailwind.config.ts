import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://swiperjs.com/demos/images/nature-1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
export default config
