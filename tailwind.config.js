/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Modern dark theme colors
                'bg-primary': 'var(--bg-primary)',
                'bg-secondary': 'var(--bg-secondary)',
                'bg-tertiary': 'var(--bg-tertiary)',
                'bg-hover': 'var(--bg-hover)',
                
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-muted': 'var(--text-muted)',
                
                'accent-primary': 'var(--accent-primary)',
                'accent-hover': 'var(--accent-hover)',
                'accent-secondary': 'var(--accent-secondary)',
                'accent-success': 'var(--accent-success)',
                'accent-warning': 'var(--accent-warning)',
                
                'border-primary': 'var(--border-primary)',
                'border-secondary': 'var(--border-secondary)',
            },

            fontFamily: {
                sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
            },

            backgroundImage: {
                'gradient-primary': 'var(--gradient-primary)',
                'gradient-secondary': 'var(--gradient-secondary)',
            },

            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'shooting-star': 'shooting-star 5s linear infinite',
            },

            keyframes: {
                fadeInUp: {
                    'from': { opacity: 0, transform: 'translateY(30px)' },
                    'to': { opacity: 1, transform: 'translateY(0)' },
                },
                fadeIn: {
                    'from': { opacity: 0 },
                    'to': { opacity: 1 },
                },
                slideInLeft: {
                    'from': { opacity: 0, transform: 'translateX(-30px)' },
                    'to': { opacity: 1, transform: 'translateX(0)' },
                },
                slideInRight: {
                    'from': { opacity: 0, transform: 'translateX(30px)' },
                    'to': { opacity: 1, transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulse: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.8 },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(88, 166, 255, 0.1)' },
                    '50%': { boxShadow: '0 0 30px rgba(88, 166, 255, 0.2)' },
                },
            },

            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },

            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
        },
    },
    plugins: [],
}
