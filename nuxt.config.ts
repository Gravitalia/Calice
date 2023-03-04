// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
            charset: "utf-8",
            viewport: "width=device-width,initial-scale=1",
            title: "Gravitalia | Support",
            meta: [
                { name: "description", content: "Helping you is our priority, Gravitalia" },
                { name: "og:description", content: "Helping you is our priority, Gravitalia" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: "Gravitalia" },
                { property: "og:image", content: "/favicon.webp" },
                { name: "theme-color", content: "#332b43" },
                { name: "robots", content: "index, follow" }
            ],
            link: [
                { rel: "icon", type: "image/webp", href: "/favicon.webp" }
            ],
            bodyAttrs: {
                //class: "dark:bg-zinc-900 dark:text-white"
            }
        }
    },

    ssr: true,
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/content",
        /*["@nuxtjs/color-mode", {
            preference: 'system',
            fallback: 'light',
            hid: 'color-script',
            globalName: '__NUXT_COLOR_MODE__',
            componentName: 'ColorScheme',
            classPrefix: '',
            classSuffix: '',
            storageKey: 'mode'
        }]*/
    ],

    experimental: {
        noScripts: true
    }
});