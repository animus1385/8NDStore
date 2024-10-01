// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/icon'],
    css: ['@/assets/styles/main.scss'],
    components: [
        {
            path: '~/components',
            pathPrefix: false,
            prefix: 'Component',
        },
    ],
    colorMode: {
        preference: 'dark',
    },
    icon: {
        mode: 'svg',
        customCollections: [
            {
                prefix: 'custom-icons',
                dir: './assets/custom-icons',
            },
        ],
    },
});
