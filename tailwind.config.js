/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                hb: {
                    orange: '#FB841C',
                    dark: '#141414',
                    darker: '#141414',
                    gray: '#1f1f1f',
                    text: '#cccccc'
                }
            },
            fontFamily: {
                sans: ['Jost', 'sans-serif'],
                script: ['Dancing Script', 'cursive'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #362515 1px, transparent 1px), linear-gradient(to bottom, #362515 1px, transparent 1px)",
            },
            backgroundSize: {
                'grid-size': '80px 80px',
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 80s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
}
