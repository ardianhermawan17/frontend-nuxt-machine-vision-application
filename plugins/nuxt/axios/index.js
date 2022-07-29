export default ({ $axios }) => {
    $axios.setHeader('app-id', '62996cb2689bf0731cb00285')
    $axios.onError((err) => {
        return Promise.resolve(err.response)
    })
}