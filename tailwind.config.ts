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
				primaryLight: 'rgba(150, 150, 150, 1)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
