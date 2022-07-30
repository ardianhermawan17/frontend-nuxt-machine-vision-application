<template>
  <v-container class="py-6">
    <div class="my-11">
      <p class="text-h6 black--text">List Post</p>
      <v-row class="py-4" justify="space-between">
        <v-col sm="6" md="6">
          <PostCreateFormDialog name="post-create-form-dialog">
            <div
              slot="toggler"
              @click="$baseDialog('open', 'post-create-form-dialog')"
            >
              <v-btn color="green">
                <v-icon left dark> mdi-plus-circle </v-icon>
                Create Post
              </v-btn>
            </div>
          </PostCreateFormDialog>
        </v-col>
        <v-col sm="6" md="6">
          <v-row>
            <v-col cols="2"></v-col>

            <v-col sm="10"><PostSearchInput /> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="py-5">
        <base-card>
          <PostTable />
        </base-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'PostIndex',
  layout: 'admin/default'
}
</script>
