import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}'
	],
	prefix: '',
	theme: {
		screens: {
			xs: '320px',
			// => @media (min-width: 320px) { ... }

			sm: '375px',
			// => @media (min-width: 375px) { ... }

			md: '480px',
			// => @media (min-width: 480px) { ... }

			lg: '834px',
			// => @media (min-width: 834px) { ... }

			xl: '1440px',
			// => @media (min-width: 1440px) { ... }

			'2xl': '1500px'
			// => @media (min-width: 1500px) { ... }
		},

		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [
		require('tailwindcss-animate'),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.custom-flex-col': {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				},

				'.custom-flex-center': {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				},
				'.custom-flex-start': {
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'flex-start'
				},
				'.custom-flex-end': {
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'flex-end'
				},
				'.custom-flex-between': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				},
				'.custom-flex-around': {
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center'
				},
				'.custom-flex-evenly': {
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center'
				},

				'.custom-flex-row': {
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center'
				},

				'.custom-full-screen': {
					width: '100%',
					height: '100%'
				}
			})
		})
	]
}
