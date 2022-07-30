<template>
  <div class="flex">
    <slot name="toggler" />
    <base-dialog :name="name" @click:outside="reset">
      <v-card class="blue-grey lighten-5">
        <v-toolbar color="blue-grey lighten-5" elevation="0" class="px-4">
          <v-spacer></v-spacer>

          <v-btn
            icon
            fab
            color
            class="red"
            x-small
            @click.stop="$baseDialog('close', 'post-edit-form-dialog')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <!-- <v-divider></v-divider> -->
        <v-container>
          <v-card-title
            class="black--text text-h5 text-center d-flex justify-center align-center"
            >Edit Post</v-card-title
          >
          <v-form ref="form" @submit.prevent="submit">
            <v-select
              v-model="form.owner"
              light
              :items="listOwner"
              :error-messages="errors.owner"
              :item-text="ownerName"
              item-value="id"
              clearable
              outlined
              dense
              chips
              small-chips
              label="Owner"
            ></v-select>

            <v-text-field
              v-model="form.text"
              :error-messages="errors.text"
              light
              label="Text"
              placeholder="Enter text"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="form.image"
              :error-messages="errors.image"
              light
              label="Image"
              placeholder="Enter image"
              outlined
            ></v-text-field>

            <v-btn class="mb-6" color="info" outlined @click="openImageDialog">
              Preview Image
            </v-btn>

            <v-text-field
              v-model="form.likes"
              :error-messages="errors.likes"
              light
              label="Likes"
              type="number"
              placeholder="Enter likes"
              outlined
              required
            ></v-text-field>

            <v-combobox
              v-model="form.tags"
              :error-messages="errors.tags"
              light
              label="Create Tags"
              deletable-chips
              multiple
              chips
            >
            </v-combobox>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="light-blue darken-4 white--text" type="submit">
                Save
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-container>
      </v-card>
    </base-dialog>
    <!-- Image Dialog -->
    <PostImageDialog :url="form.image" name="post-image-dialog" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'PostCreateFormDialog',
  props: {
    name: {
      type: String,
      default: () => 'search-dialog-input'
    }
  },
  data() {
    return {
      form: {
        owner: '',
        text: '',
        image: '',
        likes: '',
        tags: []
      },
      errors: {
        owner: '',
        text: '',
        image: '',
        likes: '',
        tags: []
      },
      listOwner: []
    }
  },

  computed: {
    ...mapState('user', {
      items: 'items'
    }),
    ...mapState('post', {
      detailItem: 'detailItem',
      loading: 'loading'
    })
  },

  watch: {
    items(value) {
      this.listOwner = this.items.data
    },
    detailItem(value) {
      this.form = Object.assign({}, this.detailItem)
    }
  },
  beforeDestroy() {
    this.SET_FILTER({
      total: null,
      page: null,
      created: 0,
      limit: 8
    })
  },
  methods: {
    ...mapMutations('post', {
      SET_DETAIL_ITEM: 'SET_DETAIL_ITEM'
    }),
    ...mapMutations('user', {
      SET_FILTER: 'SET_FILTER'
    }),
    ownerName(data) {
      return data.firstName + ' ' + data.lastName
    },
    openImageDialog() {
      this.$baseDialog('open', 'post-image-dialog')
    },
    async submit() {
      if (this.$refs.form.validate()) {
        const res = await this.$store.dispatch('post/updatePost', {
          postId: this.form.id,
          payload: Object.assign({}, this.form)
        })
        if (!res.error) {
          this.$baseSnackbar('admin-snackbar', {
            title: 'Success',
            text: 'Successfully update post !',
            color: 'success',
            duration: 3000
          })
          this.SET_FILTER({ ...this.filter, created: 0 })
          await this.$store.dispatch('post/getList')
          this.close()
        } else if (res.error) {
          this.errors = { ...this.errors, ...res.data }
          this.$baseSnackbar('admin-snackbar', {
            title: 'Error',
            text: res.error,
            color: 'error',
            duration: 3000
          })
        }
      }
    },
    close() {
      this.$baseDialog('close', 'post-edit-form-dialog')
      this.reset()
    },
    reset() {
      this.form = {
        owner: '',
        text: '',
        image: '',
        likes: '',
        tags: []
      }
      this.$refs.form.reset()
    }
  }
}
</script>
