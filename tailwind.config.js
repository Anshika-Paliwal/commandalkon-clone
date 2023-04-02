/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    letterSpacing: {
      '1': '0em',
      '2': '0.025em',
      '3': '0.05em',
    },
    // backgroundImage: {
    //   'Contractor': "url('/assets/Contractor.jpg')",
    //   'Producer': "url('/assets/Producer.jpg')",
    //   'Supplier': "url('/assets/Supplier.jpg')",
    //   'Hauler': "url('/assets/Hauler.jpg')",
    // }
  },
  plugins: [],
}