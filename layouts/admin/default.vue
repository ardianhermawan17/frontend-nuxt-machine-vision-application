<template>
  <v-app id="inspire">
    <base-snackbar name="admin-snackbar" />
    <AdminLayoutNavigationDrawer />

    <v-app-bar app light>
      <v-app-bar-nav-icon
        @click="
          (payload) =>
            UPDATE_DRAWER(payload)
        "
      ></v-app-bar-nav-icon>

      <v-toolbar-title
        class="light-blue--text text--darken-4"
        >MACHINE VISION</v-toolbar-title
      >
      <v-spacer/>
      <v-menu
          light
          bottom
          left
          offset-y
          origin="top right"
          transition="scale-transition"
      >
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn
                  class="ml-2"
                  min-width="0"
                  text
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
              >
                <v-icon>mdi-account-circle</v-icon>
              </v-btn>
            </template>
            <span>{{ username ? username : "test" }}</span>
          </v-tooltip>
        </template>
        <!-- <v-list
            :tile="false"
            nav
        >
          <v-list-item                     
              @click="$router.push('/home')"
            >
            <v-icon left>
              mdi-home
            </v-icon>
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item>
          <v-list-item                      
            @click="logout()"
          >
            <v-icon left>t
              mdi-logout-variant
            </v-icon>
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list> -->
      </v-menu>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container
        fluid
        class="px-0 py-0 blue-grey lighten-5"
      >
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'

export default {
  name: 'AdminPages',  
  data() {
    return {
       accounts: [
        // {
        //   icons: 'mdi-account',
        //   words: 'My Profile',
        //   route_name: 'user.profile'          
        // },
        {
          icons: 'mdi-logout-variant',
          words: 'Sign Out',
          route_name: 'logout'
        }
      ],
      // username: this.$auth.$state.user.data.name || 'Lecturer'
      username: 'User'
    }
  },
  computed: {
    ...mapState('ui/admin', {
      drawer: 'drawer'
    })
  },
  methods: {
    ...mapMutations('ui/admin', {
      UPDATE_DRAWER: 'UPDATE_DRAWER'
    }),
    logout() {
      this.$auth.logout()      
            this.$baseSnackbar(
          'admin-snackbar',
          {
            title: 'Success',
            text: 'Logout Successfully',
            color: 'success',
            duration: 3000
          }
        )      
    }
  }
}
</script>
