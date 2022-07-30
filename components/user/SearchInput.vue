<template>
  <base-text-field
    v-model="search"
    :is-neumorphism="true"
    :outlined="true"
    append-icon="mdi-magnify"
    label="User"
    placeholder="Search User"
    @change="searchItem"
  />
</template>

<script>
export default {
  name: 'UserSearchInput',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchItem(query) {
      let search = query

      // eslint-disable-next-line no-unused-expressions
      search === '' ? (search = null) : search

      this.$store.dispatch('user/getList')
    }
  }
}
</script>
