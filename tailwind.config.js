/** @type {import('tailwindcss').Config} */
import { guerrillaColorScheme } from './src/lib/colors';
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'rama-slab': ['rama-slab'],
      'rama-slab-bold': ['rama-slab-bold'],
      'ibm-plex-regular': ['ibm-plex-regular'],
      'ibm-plex-medium': ['ibm-plex-medium'],
    },
    extend: {
      colors: guerrillaColorScheme,
    },
  },
  plugins: [],
}

