export default {
    async getList({ state, commit }) {
        commit('SET_LOADING', true)
        const res = await this.$userService.getList({
            params: {
                ...state.filter
            }
        })

        if (res.error) {
            return {
                error: res.error,
                data: res.data ? res.data : null
            }
        }

        commit(
            'SET_ITEMS',
            Object.assign({}, res)
        )

        commit('SET_LOADING', false)
        return {
            error: null,
            res
        }
    },

    async getUserById({ state, commit }, userId) {
        commit('SET_LOADING', true)
        const res = await this.$userService.getUserById(userId)


        if (res.error) {
            return {
                error: res.error,
                data: res.data ? res.data : null
            }
        }

        commit(
            'SET_DETAIL_ITEM',
            Object.assign({}, res)
        )

        commit('SET_LOADING', false)
        return {
            error: null,
            res
        }
    },

    async createUser({ state, commit }, payload) {
        commit('SET_LOADING', true)
        const res = await this.$userService.createUser(payload)


        if (res.error) {
            return {
                error: res.error,
                data: res.data ? res.data : null
            }
        }

        commit('SET_LOADING', false)
        return {
            error: null,
            res
        }
    },

    async updateUser({ state, commit }, { userId, payload }) {
        commit('SET_LOADING', true)
        const res = await this.$userService.updateUser(userId, payload)


        if (res.error) {
            return {
                error: res.error,
                data: res.data ? res.data : null
            }
        }

        commit(
            'SET_DETAIL_ITEM',
            Object.assign({}, res)
        )

        commit('SET_LOADING', false)
        return {
            error: null,
            res
        }
    },

    async deleteUser({ state, commit }, userId) {
        commit('SET_LOADING', true)
        const res = await this.$userService.deleteUser(userId)


        if (res.error) {
            return {
                error: res.error,
                data: res.data ? res.data : null
            }
        }

        commit('SET_LOADING', false)
        return {
            error: null,
            res
        }
    },
}