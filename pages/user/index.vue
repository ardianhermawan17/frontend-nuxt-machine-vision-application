<template>
  <v-container class="py-6">
    <div class="my-11">
      <p class="text-h6 black--text">List User</p>
      <v-row class="py-4" justify="space-between">
        <v-col sm="6" md="6">
          <UserCreateFormDialog
            name="user-create-form-dialog"
          >
            <div
              slot="toggler"
              @click="$baseDialog('open', 'user-create-form-dialog')"
            >
              <v-btn color="green">
                <v-icon left dark> mdi-plus-circle </v-icon>
                Create User
              </v-btn>
            </div>
          </UserCreateFormDialog>
        </v-col>
        <v-col sm="6" md="6">
          <v-row>
            <v-col cols="2"></v-col>

            <!-- <v-col sm="10"><UserSearchInput /> </v-col> -->
          </v-row>
        </v-col>
      </v-row>
      <div class="py-5">
        <base-card>
          <UserTable />
        </base-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'UserIndex',
  layout: 'admin/default'
}
</script>
