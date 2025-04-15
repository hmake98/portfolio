/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                'primary-dark': 'var(--primary-dark)',
                secondary: 'var(--secondary)',
                'secondary-dark': 'var(--secondary-dark)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            animation: {
                'gradient': 'gradient 15s ease infinite',
                'fadeIn': 'fadeIn 0.6s ease-in-out',
                'slideUp': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'typing': 'typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite',
            },
            keyframes: {
                gradient: {
                    '0%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                    '100%': { 'background-position': '0% 50%' },
                },
                fadeIn: {
                    'from': { opacity: 0 },
                    'to': { opacity: 1 },
                },
                slideUp: {
                    'from': { transform: 'translateY(50px)', opacity: 0 },
                    'to': { transform: 'translateY(0)', opacity: 1 },
                },
                float: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                    '100%': { transform: 'translateY(0px)' },
                },
                typing: {
                    'from': { width: 0 },
                    'to': { width: '100%' },
                },
                'blink-caret': {
                    'from, to': { 'border-color': 'transparent' },
                    '50%': { 'border-color': 'var(--primary)' },
                },
            },
        },
    },
    plugins: [],
}