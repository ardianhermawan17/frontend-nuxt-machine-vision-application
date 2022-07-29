export default {
    axios: {
        browserBaseURL: process.env.BROWSER_BASE_URL || 'https://dummyapi.io/data/v1'
    },
    baseURL: process.env.BASE_URL || 'https://dummyapi.io/data/v1',
}

// TODO::dont forget to change baseURL on dev