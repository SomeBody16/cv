/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './sections/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            primary: '#00AA00',
        },
        extend: {},
    },
    plugins: [],
}
