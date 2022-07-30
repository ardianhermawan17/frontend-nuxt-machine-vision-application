export default ($axios, resource) => ({
    getList(filter) {
        return $axios.$get(`${resource}/post`, filter)
    },

    getListByUser(userId, filter) {
        return $axios.$get(`${resource}/user/${userId}/post`, filter)
    },

    getListByTag(tagName, filter) {
        return $axios.$get(`${resource}/tag/${tagName}/post`, filter)
    },

    getUserById(postId, filter) {
        return $axios.$get(`${resource}/post/${postId}`, filter)
    },

    createPost(payload) {
        return $axios.$post(`${resource}/post/create`, payload)
    },

    updatePost(postId, payload) {
        return $axios.$put(`${resource}/post/${postId}`, payload)
    },

    deletePost(postId) {
        return $axios.$delete(`${resource}/post/${postId}`)
    },
})