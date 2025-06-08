import { type Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
  ],
  plugins: [require('@tailwindcss/typography')],
} satisfies Config

export default config
