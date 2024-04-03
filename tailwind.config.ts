import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
			},
			colors: {
				"primary": "#4CAF4F",
				"primary-tint-5": "#E8F5E9",
				"secondary": "#263238",
				"secondary-2": "#717171",
				"neutral": "#F5F7FA",
			}
		},
	},
	plugins: [],
};
export default config;
