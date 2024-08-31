/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Parclo Serif', 'serif'],
				sans: ['Really Sans Small', 'sans-serif']
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
