/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			dark: 'var(--clr-dark)',
			light: 'var(--clr-light)',
			accent: 'var(--clr-accent)',
			gray: 'var(--clr-gray)',
			transparent: 'transparent',
			current: 'currentColor'
		},
		extend: {
			accentColor: 'var(--clr-accent)',
			fontFamily: {
				logo: ['Josefin Sans'],
				heading: ['Josefin Sans'],
				paragraph: ['Josefin Sans']
			}
		}
	},
	plugins: []
};
