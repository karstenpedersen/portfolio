/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			accentColor: 'var(--clr-accent)',
			colors: {
				dark: 'var(--clr-dark)',
				light: 'var(--clr-light)',
				accent: 'var(--clr-accent)',
				gray: 'var(--clr-gray)'
			},
			fontFamily: {
				logo: ['Josefin Sans'],
				heading: ['Josefin Sans'],
				paragraph: ['Josefin Sans']
			}
		}
	},
	plugins: []
};
