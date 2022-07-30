<template>
  <v-container class="py-6">
    <!-- Search Bar -->
    <v-row class="my-4">
      <v-col sm="12" md="6" lg="4">
        <HomeSearchBar />
      </v-col>
    </v-row>

    <!-- Post Card -->

    <v-row v-if="!loading" class="my-4">
      <template v-for="(item, i) in items.data">
        <v-col :key="i" sm="6" md="4" lg="3">
          <HomeCard :item="item" />
        </v-col>
      </template>
    </v-row>

    <v-row v-else class="my-4">
      <template v-for="(_, i) in 8">
        <v-col :key="i" sm="6" md="4" lg="3">
          <v-skeleton-loader
            light
            v-bind="attrs"
            type=" image, divider, list-item-three-line, card-heading, actions"
          ></v-skeleton-loader>
        </v-col>
      </template>
    </v-row>

    <!-- Pagination -->
    <div class="my-4">
      <HomePagination />
    </div>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'HomeIndex',
  layout: 'admin/default',
  data() {
    return {
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2
      }
    }
  },
  async fetch() {
    this.SET_FILTER({...this.filter, limit: 8 })
    await this.$store.dispatch('post/getList')
  },
  computed: {
    ...mapState('post', {
      items: 'items',
      loading: 'loading'
    }),
    ...mapGetters('post', {
      filter: 'filter'
    }),
  },
  methods: {
    ...mapMutations('post', {
      SET_FILTER: 'SET_FILTER'
    })
  }
}
</script>
