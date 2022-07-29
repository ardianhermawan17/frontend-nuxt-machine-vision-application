export default ($axios, resource) => ({
    getList(filter) {
        return $axios.$get(`${resource}/`, filter)
    },

    getUserById(userId) {
        return $axios.$get(`${resource}/${userId}`)
    },

    createUser(payload) {
        return $axios.$post(`${resource}/create`, payload)
    },

    updateUser(userId, payload) {
        return $axios.$put(`${resource}/${userId}`, payload)
    },

    deleteUser(userId) {
        return $axios.$delete(`${resource}/${userId}`)
    },
})