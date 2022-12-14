/* eslint-disable no-unused-expressions */
export default {
    SET_ITEMS: (state, items) => {
        state.items = items
        state.filter = {
            ...state.filter,
            total: items.total,
            page: items.page,
            limit: items.limit,
        }
    },
    SET_DETAIL_ITEM: (state, payload) => {
        state.detailItem = payload
    },
    SET_LOADING(state, payload) {
        state.loading = payload
    },
    SET_FILTER(state, filter) {
        filter.total ? state.filter.total = filter.total : ''
        filter.page && filter.page <= 999 && filter.page >= 0 ? state.filter.page = filter.page : ''
        filter.limit && filter.limit >= 5 && filter.limit <= 50 ? state.filter.limit = filter.limit : 20
        filter.created ? state.filter.created = filter.created : 0
    },
}