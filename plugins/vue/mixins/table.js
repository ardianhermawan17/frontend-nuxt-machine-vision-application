/* eslint-disable no-unused-expressions */
/* eslint-disable object-shorthand */
import _ from 'lodash'

export default {
    beforeDestroy() {
        this.SET_FILTER({
            total: null,
            page: null,
            created: 0,
            limit: 8
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
                    limit: itemsPerPage
                })
                this.fetchAPI()
            },
            500
        )
    }
}