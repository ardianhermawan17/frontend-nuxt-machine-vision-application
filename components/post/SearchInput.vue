<template>
  <div>
    <base-text-field
      v-model="search"
      :is-neumorphism="true"
      :outlined="true"
      append-icon="mdi-magnify"
      label="Search"
      placeholder="Search by tag (single tag)"
      @change="searchItem"
    />
  </div>
</template>

<script>
export default {
  name: 'UserSearchInput',
 data() {
    return {
      search: null
    }
  },
  methods: {
    searchItem(query) {
      let search = query

      // eslint-disable-next-line no-unused-expressions
      search === '' ? (search = null) : search

      if (search === null) {
        this.$store.dispatch('post/getList')
      } else {
        this.$store.dispatch('post/getListByTag', search)
      }
    }
  }
}
</script>
