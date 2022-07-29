export default {
    localStorage: {
        prefix: 'auth.'
    },
    plugins: [
        '~/plugins/nuxt/axios'
    ],
    redirect: {
        login: '/auth/login',
        logout: '/',
        callback: '/auth/login',
        home: '/'
    },
    rewriteRedirects: true,
    strategies: {
        local: {
            token: {
                property: 'token',
                maxAge: 604800,
                // required: true,
                // type: 'Bearer'
            },
            user: {
                property: false,
                // autoFetch: false
            },
            endpoints: {
                login: { url: '/api/auth/login', method: 'post' },
                logout: { url: '/api/auth/logout', method: 'get' },
                user: { url: '/api/auth/get-user', method: 'get' }
            }
        }
    },
    token: {
        prefix: '_token.',
        global: true
    }
}