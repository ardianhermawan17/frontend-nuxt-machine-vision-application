export default {
    filter: (state) => {
        const filterState = Object.assign({}, state.filter)
        filterState.total = state.filter.total ? parseInt(state.filter.total) : null
        filterState.page = state.filter.page ? parseInt(state.filter.page) : 1
        filterState.limit = state.filter.limit ? state.filter.limit : 10
        filterState.created = state.filter.created ? state.filter.created : 0
        return filterState
    }
}