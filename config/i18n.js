// import en from '~/plugins/nuxt/i18n/en'
// import id from '~/plugins/nuxt/i18n/id'

export default {
    detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: false
    },
    default: 'en',
    locales: [{
            code: 'en',
            name: 'English'
        },
        {
            code: 'id',
            name: 'Bahasa'
        }
    ],
    vueI18n: {
        fallbackLocale: 'en',
        messages: {
            // en,
            // id
        }
    }
}