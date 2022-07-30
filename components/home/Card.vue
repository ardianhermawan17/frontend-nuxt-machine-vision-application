<template>
  <div>
    <base-card size="s">
      <v-card min-height="440" elevation="0">
        <v-img
          height="150"
          :src="item.image"
        ></v-img>

        <v-card-title
          >{{ item.owner.firstName }}_{{ item.owner.lastName }}</v-card-title
        >

        <v-card-text>
          <div>
            {{ item.text }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Post Tag</v-card-title>

        <v-card-text class="my-2">
          <v-row>
            <template v-for="(tag, i) in item.tags">
              <v-chip :key="i" color="light-blue darken-4" class="mx-2 my-2 white--text"
                >{{tag}}</v-chip
              >
            </template>
          </v-row>
        </v-card-text>
      </v-card>
    </base-card>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => Object.assign({})
    }
  }
}
</script>
