<template>
  <div>
    <v-pagination
      light
      color="light-blue darken-4"
      :value="filter.page"
      :length="checkLength()"
      :total-visible="7"
      @next="nextPage()"
      @previous="prevPage()"
      @input="inputPage"
    ></v-pagination>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex'
export default {
  name: 'HomePagination',
  computed: {
    ...mapGetters('post', {
      filter: 'filter'
    }),
    ...mapState('post', {
      loading: 'loading'
    })
  },

  methods: {
    ...mapMutations('post', {
      SET_FILTER: 'SET_FILTER'
    }),
    fetchAPI() {
      this.$store.dispatch('post/getList')
    },
    nextPage() {
      this.SET_FILTER({ ...this.filter, page: this.filter.page + 1 })
      this.fetchAPI()
    },
    prevPage() {
      this.SET_FILTER({ ...this.filter, page: this.filter.page - 1 })
      this.fetchAPI()
    },
    inputPage(page) {
      this.SET_FILTER({ ...this.filter, page })
      this.fetchAPI()
    },
    checkLength() {
      //   if (this.loading) return 8
      return Math.round(this.filter.total / this.filter.limit)
    }
  }
}
</script>
