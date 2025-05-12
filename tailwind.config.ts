import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx,css}"
	],
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				xml: '1400px',
				'2xl': '1680px'
			},
			colors: {
				background: "#0C0C0C",
				foreground: 'hsl(var(--foreground))',
				secondary: 'rgba(40, 40, 40, 1)',
				primary: 'rgba(56, 56, 56, 1)',
				primaryDark: 'rgba(24, 24, 24, 1)',
				primaryLight: 'rgba(150, 150, 150, 1)',
				primaryShiny: '#181818',
			},
			keyframes: {
				'pulse-glow': {
					'0%, 100%': {
						transform: 'scale(1)',
						opacity: '0.7',
						filter: 'blur(10px)',
					},
					'50%': {
						transform: 'scale(1.12)',
						opacity: '1',
						filter: 'blur(20px)',
					},
				},
			},
			animation: {
				'pulse-glow': 'pulse-glow 3.5s ease-in-out infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
