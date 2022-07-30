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
        'items-per-page-options': [8, 10, 20, 100]
      }"
      @update:page="onPaginateClick"
      @update:items-per-page="updateItemsPerPage"
    >
      <template v-slot:[`item.tags`]="{ item }">
        <div class="d-flex flex-wrap">
          <div
            class="d-flex flex-wrap"
            v-for="(data, i) in item.tags"
            :key="`items-${i}`"
          >
            <v-chip
              color="light-blue darken-4 white--text"
              class="px-2 mx-1 my-2 text--white"
            >
              {{ data }}
            </v-chip>
          </div>
        </div>
      </template>
      <template v-slot:[`item.image`]="{ item }">
        <!-- Image Dialog -->
        <v-img
          height="100"
          width="100"
          :src="item.image"
        ></v-img>
      </template>
      <template v-slot:[`item.owner`]="{ item }">
        {{ item.owner.firstName }} {{ item.owner.lastName }}
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <div class="d-flex justify-center align-center">
          <!-- <PostTableButton
            description="Post"
            action-type="view"
            @click="detailItem(item)"
          ></PostTableButton> -->

          <PostTableButton
            description="Post"
            action-type="edit"
            @click="editItem(item)"
          ></PostTableButton>

          <PostTableButton
            description="Post"
            action-type="delete"
            @click="deleteItem(item)"
          ></PostTableButton>
        </div>
      </template>
    </v-data-table>
    <PostEditFormDialog name="post-edit-form-dialog" />
    <!-- <PostImageDialog  name="post-image-dialog" /> -->
    <!-- <PostDetailFormDialog
      name="post-detail-form-dialog"
    /> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import headers from '~/config/table/post'
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
    ...mapState('post', {
      items: 'items',
      loading: 'loading',
      detail: 'detailItem'
    }),
    ...mapGetters('post', {
      filter: 'filter'
    })
  },
  methods: {
    ...mapMutations('post', ['SET_FILTER', 'SET_DETAIL_ITEM']),
    fetchAPI() {
      this.$store.dispatch('post/getList')
    },
    detailItem(item) {
      this.SET_DETAIL_ITEM(item)
      this.$baseDialog('open', 'post-detail-form-dialog')
    },
    async editItem(item) {
      this.SET_DETAIL_ITEM(item)
      await this.$store.dispatch('post/getUserById', item.id)
      this.$baseDialog('open', 'post-edit-form-dialog')
    },
    async deleteItem(item) {
      await this.$baseSnackbar('admin-snackbar', {
        title: 'Confirm',
        text: 'Are you sure want to delete this post ?',
        itemId: item.id,
        destination: 'Post',
        color: 'info',
        duration: 3000
      })

      // const res = await this.$store.dispatch('post/deletePost', item.id)
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
