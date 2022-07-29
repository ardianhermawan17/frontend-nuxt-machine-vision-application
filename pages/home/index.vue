<template>
  <v-container class="py-6">
    <!-- Search Bar -->
    <v-row class="my-4">
      <v-col cols="4">
        <HomeSearchBar/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeIndex',
  layout: 'admin/default',
  async fetch() {
    await this.$store.dispatch('user/getList')
    console.log(this.$store.state.user.items)
  }
}
</script>
