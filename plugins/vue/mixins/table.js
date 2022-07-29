/* eslint-disable no-unused-expressions */
/* eslint-disable object-shorthand */
import _ from 'lodash'

export default {
    beforeDestroy() {
        this.SET_FILTER({
            per_page: 5,
            page: 1,
            total: null,
            search: null,
            sortBy: [],
            desc: []
        })
        this.fetchAPI()
    },
    methods: {
        onPaginateClick: _.throttle(
            function(page) {
                this.SET_FILTER({
                    page: page
                })
                this.fetchAPI()
            },
            1000
        ),
        updateItemsPerPage: _.throttle(
            function(itemsPerPage) {
                this.SET_FILTER({
                    per_page: itemsPerPage
                })
                this.fetchAPI()
            },
            500
        ),
        // onSortBy(query) {
        //     console.log(query)
        //     this.SET_FILTER({
        //         ...this.filter,
        //         sortBy: query,
        //     })
        //     this.fetchAPI()
        // },
        // onSortDesc(query) {
        //     console.log(query)
        //     const desc = query[0] === false ? 0 : 1
        //     this.SET_FILTER({
        //         ...this.filter,
        //         desc: desc,
        //     })
        //     this.fetchAPI()
        // }
    }
}