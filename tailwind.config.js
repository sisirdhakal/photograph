/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        clrprimary1: "#453227",
        clrprimary2: "#5f4435",
        clrprimary3: "#795744",
        clrprimary4: "#936a53",
        /* primary/main color */
        clrprimary5: "#ab7a5f",
        /* lighter shades of primary color */
        clrprimary6: "#b99179",
        clrprimary7: "#c5a491",
        clrprimary8: "#d1b6a8",
        clrprimary9: "#decbc0",
        clrprimary10: "#eaded7",
        /* darkest grey - used for headings */
        clrgrey1: "#102a42",
        clrgrey2: "#243a52",
        clrgrey3: "#324d67",
        clrgrey4: "#48647f",
        /* grey used for paragraphs */
        clrgrey5: "#617d98",
        clrgrey6: "#829ab0",
        clrgrey7: "#9eb2c7",
        clrgrey8: "#bcccdc",
        clrgrey9: "#dae2ec",
        clrgrey10: "#f1f5f8",
        clrreddark: "#ba2626",
        clrredlight: "#e66b6b",
        clrgreendark: "#25bb32",
        clrgreenlight: "#6be675",
        clrblack: "#222"
      },
      gridTemplateColumns: {
        aboutSection: "342px 1fr"
      }
    }
  },
  plugins: [],
}
