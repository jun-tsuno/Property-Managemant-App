const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			noto_sans: ["var(--font-inter)", ...fontFamily.serif],
		},
		extend: {
			colors: {
				primary: "#0EA5E9",
				primaryDark: "#0369A1",
				slate: "#475069",
			},
		},
	},
	plugins: [],
};
