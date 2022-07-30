<template>
  <div class="flex">
    <slot name="toggler" />
    <base-dialog :name="name">
      <v-card
         v-if="!loading"
        class="blue-grey lighten-5 pb-8"
      >
        <v-toolbar
          color="blue-grey lighten-5"
          elevation="0"
          class="px-4"
        >
          <v-spacer></v-spacer>

          <v-btn
            icon
            fab
            color
            class="red"
            x-small
            @click.stop="
              $baseDialog(
                'close',
                name
              )
            "
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <!-- <v-divider></v-divider> -->
        <v-container>
          <v-card-title
            class="black--text text-h5 text-center d-flex justify-center align-center"
            >Detail
            Peraturan</v-card-title
          >
          <v-list
            flat
            light
            color="transparent"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon large
                  >mdi-clipboard-list</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="text-big"
                  >Nama
                  :</v-list-item-subtitle
                >
                <v-list-item-title
                  class="text-big"
                  >{{
                    detailItem.content
                  }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon large
                  >mdi-folder-star-multiple</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="text-big"
                  >Satuan
                  :</v-list-item-subtitle
                >
                <v-list-item-title
                  class="text-big"
                  >{{
                    detailItem.satuan
                  }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
             <v-list-item>
              <v-list-item-icon>
                <v-icon large
                  >mdi-cash</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="text-big"
                  >Harga Satuan
                  :</v-list-item-subtitle
                >
                <v-list-item-title
                  class="text-big"
                  >{{
                    detailItem.harga_satuan
                  }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
             <v-list-item v-if="detailItem.kategori">
              <v-list-item-icon>
                <v-icon large
                  >mdi-clipboard-list</v-icon
                >
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="text-big"
                  >kategori
                  :</v-list-item-subtitle
                >
                <v-list-item-title
                  class="text-big"
                  >{{
                    detailItem.kategori.name
                  }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-container>
      </v-card>
    </base-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AdminPeraturanDetailFormDialog',
  props: {
    name: {
      type: String,
      default: () =>
        'search-dialog-input'
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('admin/peraturan', {
      detailItem: 'detailItem',
      loading: 'loading'
    })
  }
}
</script>
