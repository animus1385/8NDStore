/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        container: {
            center: true,
            padding: '24px',
        },
        screens: {
            mobile: '320px',
            mobileMedium: '375px',
            mobileWide: '425px',
            tablet: '640px',
            tabletMedium: '768px',
            laptop: '992px',
            laptopMedium: '1024px',
            desktop: '1280px',
            desktopMedium: '1440px',
            desktopWide: '1600px',
            desktopBig: '1920px',
        },
        extend: {},
    },

    plugins: [],
};
