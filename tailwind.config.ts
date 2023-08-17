import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryGrand: "#2A9D8F",
        darkGreen: "#34847B",
        blueGreen: "#DFF1EE",
        lightGreen: "#29A71A",
        secondPrimary: "#0094A6",
        primaryBlue: "#2476BC",
        textBlue: "#193894",
        lightBlue: "#29A2CC",
        darkBlue: "#155976",
        primaryRed: "#FF0000",
        darkRed: "#9D0A0A",
        primaryPurple: "#730E5D",
        // asu: "#0094A6",
      },
    },
  },
  plugins: [],
}
export default config
