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
            @click.stop="$baseDialog('close', 'user-create-form-dialog')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-card-title
            class="black--text text-h5 text-center d-flex justify-center align-center"
            >Create User</v-card-title
          >
          <v-form ref="form" @submit.prevent="submit">
            <v-select
              v-model="form.title"
              light
              :items="listTitle"
              :error-messages="errors.title"
              clearable
              outlined
              dense
              chips
              small-chips
              label="Title"              
            ></v-select>

            <v-text-field
              v-model="form.firstName"
              :error-messages="errors.firstName"
              light
              label="FirstName"
              placeholder="Enter first name"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="form.lastName"
              :error-messages="errors.lastName"
              light
              label="LastName"
              placeholder="Enter last name"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              :error-messages="errors.email"
              light
              label="Email"
              placeholder="Enter email"
              outlined
              required
            ></v-text-field>

            <v-text-field
              v-model="form.picture"
              :error-messages="errors.picture"
              light
              label="Picture"
              placeholder="Enter picture"
              outlined
            ></v-text-field>

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
  </div>
</template>

<script>
export default {
  name: 'UserCreateFormDialog',
  props: {
    name: {
      type: String,
      default: () => 'search-dialog-input'
    }
  },
  data() {
    return {
      form: {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
      },
      errors: {
        title: null,
        firstName: null,
        lastName: null,
        email: null,
        picture: null
      },
      listTitle: ['mr', 'mrs', 'miss']
    }
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const res = await this.$store.dispatch('user/createUser', this.form)
        if (!res.error) {
          this.$baseSnackbar('admin-snackbar', {
            title: 'Success',
            text: 'Successfully create user ' + this.form.firstName + ' !',
            color: 'success',
            duration: 3000
          })
          await this.$store.dispatch('user/getList')
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
      this.$baseDialog('close', 'user-create-form-dialog')
      this.reset()
    },
    reset() {
      this.form = {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
      }
      this.$refs.form.reset()
    }
  }
}
</script>
