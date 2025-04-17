/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class', // This enables dark mode with the 'dark' class on HTML element
    theme: {
        extend: {
            colors: {
                // Primary and secondary colors
                primary: 'var(--primary)',
                'primary-dark': 'var(--primary-dark)',
                'primary-light': 'var(--primary-light)',
                secondary: 'var(--secondary)',
                'secondary-dark': 'var(--secondary-dark)',
                'secondary-light': 'var(--secondary-light)',

                // Background and foreground colors
                background: 'var(--background)',
                'background-secondary': 'var(--background-secondary)',
                'background-tertiary': 'var(--background-tertiary)',
                foreground: 'var(--foreground)',
                'foreground-secondary': 'var(--foreground-secondary)',
                'foreground-tertiary': 'var(--foreground-tertiary)',

                // Status colors
                success: 'var(--success)',
                error: 'var(--error)',
                warning: 'var(--warning)',
                info: 'var(--info)',

                // UI Element colors
                border: 'var(--border)',
                card: 'var(--card)',
                'card-foreground': 'var(--card-foreground)',
            },

            // Box shadows
            boxShadow: {
                'custom-sm': 'var(--shadow-sm)',
                'custom': 'var(--shadow)',
                'custom-md': 'var(--shadow-md)',
                'custom-lg': 'var(--shadow-lg)',
            },

            // Border radius
            borderRadius: {
                'custom': 'var(--border-radius)',
            },

            // Animations
            animation: {
                'gradient': 'gradient 15s ease infinite',
                'fadeIn': 'fadeIn 0.6s ease-in-out',
                'slideUp': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'typing': 'typing 3.5s steps(30, end), blink-caret 0.75s step-end infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 3s linear infinite',
                'bounce-slow': 'bounce 2s infinite',
                'slide-in-right': 'slideInRight 0.5s ease-out',
                'slide-in-left': 'slideInLeft 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in-down': 'fadeInDown 0.6s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
            },

            // Keyframes for animations
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
                slideInRight: {
                    'from': { transform: 'translateX(50px)', opacity: 0 },
                    'to': { transform: 'translateX(0)', opacity: 1 },
                },
                slideInLeft: {
                    'from': { transform: 'translateX(-50px)', opacity: 0 },
                    'to': { transform: 'translateX(0)', opacity: 1 },
                },
                fadeInUp: {
                    'from': { transform: 'translateY(20px)', opacity: 0 },
                    'to': { transform: 'translateY(0)', opacity: 1 },
                },
                fadeInDown: {
                    'from': { transform: 'translateY(-20px)', opacity: 0 },
                    'to': { transform: 'translateY(0)', opacity: 1 },
                },
                scaleIn: {
                    'from': { transform: 'scale(0.9)', opacity: 0 },
                    'to': { transform: 'scale(1)', opacity: 1 },
                },
            },

            // Typography
            fontFamily: {
                sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
            },

            // Add responsive height utilities
            height: {
                'screen-50': '50vh',
                'screen-75': '75vh',
                'screen-80': '80vh',
                'screen-90': '90vh',
            },

            // Responsive spacing
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '128': '32rem',
            },

            // Z-index utility
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },

            // Transitions
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
                'width': 'width',
                'position': 'top, right, bottom, left',
            },

            // Blurs
            backdropBlur: {
                'xs': '2px',
            },

            // Gradient utilities
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-diagonal': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [
        // Add any plugins you want to use here
    ],
    // Enable JIT mode for faster development
    mode: 'jit',
    // Set future flags for upcoming features
    future: {
        hoverOnlyWhenSupported: true,
    }
}