export default {
    async getList({ state, commit }) {
        commit('SET_LOADING', true)
        const res = await this.$postService.getList({
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

    async getListByUser({ state, commit }, userId) {
        commit('SET_LOADING', true)
        const res = await this.$postService.getListByUser(userId)


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

    async getListByTag({ state, commit }, tagName) {
        commit('SET_LOADING', true)
        const res = await this.$postService.getListByTag(tagName)


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

    async createPost({ state, commit }, payload) {
        commit('SET_LOADING', true)
        const res = await this.$postService.createPost(payload)


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

    async getUserById({ state, commit }, postId) {
        commit('SET_LOADING', true)
        const res = await this.$postService.getUserById(postId)


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

    async updatePost({ state, commit }, { postId, payload }) {
        commit('SET_LOADING', true)
        const res = await this.$postService.updatePost(postId, payload)


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

    async deletePost({ state, commit }, postId) {
        commit('SET_LOADING', true)
        const res = await this.$postService.deletePost(postId)


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