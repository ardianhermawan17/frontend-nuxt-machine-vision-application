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
            @click.stop="$baseDialog('close', 'post-image-dialog')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <!-- <v-divider></v-divider> -->
        <v-container>
          <v-responsive max-height="400" class="overflow-y-auto">
            <v-img class="mx-auto" height="450" width="450" :src="url"></v-img>
          </v-responsive>
        </v-container>
      </v-card>
    </base-dialog>
  </div>
</template>

<script>
export default {
  name: 'PostImageDialog',
  props: {
    name: {
      type: String,
      default: () => 'search-dialog-input'
    },
    url: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
