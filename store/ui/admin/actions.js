export default {
    getDrawer({ commit }) {
        return {
            error: null,
            message: 'Success',
            data: {}
        }
    },

    setDrawer({ commit }, { payload }) {
        commit('UPDATE_DRAWER', payload)
        return {
            error: null,
            message: 'Success',
            data: {
                payload
            }
        }
    }
}