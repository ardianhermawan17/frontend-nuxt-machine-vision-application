<template>
  <div>
    <v-data-table
      light
      class="blue-grey lighten-5 rounded"
      item-key="id"
      :headers="headers"
      :items="items.data"
      :loading="loading"
      :page="filter.page"
      :items-per-page="parseInt(filter.limit)"
      :server-items-length="filter.total"
      :footer-props="{
        'items-per-page-options': [5, 8, 10, 20, 50]
      }"
      @update:page="onPaginateClick"
      @update:items-per-page="updateItemsPerPage"
    >
      <template v-slot:[`item.firstName`]="{ item }">
        {{ item.firstName }} {{ item.lastName }}
      </template>
      <template v-slot:[`item.picture`]="{ item }">
        <v-img height="100" width="100" :src="item.picture"></v-img>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <div class="d-flex justify-center align-center">
          <!-- <UserTableButton
            description="User"
            action-type="view"
            @click="detailItem(item)"
          ></UserTableButton> -->

          <UserTableButton
            description="User"
            action-type="edit"
            @click="editItem(item)"
          ></UserTableButton>

          <UserTableButton
            description="User"
            action-type="delete"
            @click="deleteItem(item)"
          ></UserTableButton>
        </div>
      </template>
    </v-data-table>
    <UserEditFormDialog name="user-edit-form-dialog" />
    <!-- <UserDetailFormDialog
      name="user-detail-form-dialog"
    /> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import headers from '~/config/table/user'
import tableMixin from '~/plugins/vue/mixins/table'
export default {
  name: 'AdminPeraturanTable',
  mixins: [tableMixin],
  data() {
    return {
      headers
    }
  },
  async fetch() {
    await this.fetchAPI()
  },
  computed: {
    ...mapState('user', {
      items: 'items',
      loading: 'loading',
      detail: 'detailItem'
    }),
    ...mapGetters('user', {
      filter: 'filter'
    })
  },
  methods: {
    ...mapMutations('user', ['SET_FILTER', 'SET_DETAIL_ITEM']),
    fetchAPI() {
      this.$store.dispatch('user/getList')
    },
    detailItem(item) {
      this.SET_DETAIL_ITEM(item)
      this.$baseDialog('open', 'user-detail-form-dialog')
    },
    async editItem(item) {
      this.SET_DETAIL_ITEM(item)
      await this.$store.dispatch('user/getUserById', item.id)
      this.$baseDialog('open', 'user-edit-form-dialog')
    },
    async deleteItem(item) {
      await this.$baseSnackbar('admin-snackbar', {
        title: 'Confirm',
        text: 'Are you sure want to delete this user ?',
        itemId: item.id,
        destination: 'User',
        color: 'info',
        duration: 3000
      })

      // const res = await this.$store.dispatch('user/deleteUser', item.id)
      // if (!res.error) {
      //   this.$baseSnackbar('admin-snackbar', {
      //     title: 'Success',
      //     text: 'Success delete user !',
      //     color: 'success',
      //     duration: 3000
      //   })
      //   this.fetchAPI()
      // } else
      //   this.$baseSnackbar('admin-snackbar', {
      //     title: 'Delete',
      //     text: res.error,
      //     color: 'error',
      //     duration: 3000
      //   })
    }
  }
}
</script>
