export default {
    filter: (state) => {
        const filterState = Object.assign({}, state.filter)
        filterState.total = state.filter.total ? parseInt(state.filter.total) : null
        filterState.page = state.filter.page && state.filter.page <= 999 && state.filter.page >= 0 ? parseInt(state.filter.page) : 1
        filterState.limit = state.filter.limit && state.filter.limit >= 5 && state.filter.limit <= 50 ? state.filter.limit : 20
        filterState.created = state.filter.created ? state.filter.created : 0
        return filterState
    }
}