<template>
  <div
    class="fixed d-flex flex-column align-end"
    style="z-index: 9999"
  >
    <v-snackbar
      v-for="snackbar in snackbars"
      :id="snackbar.id"
      :key="snackbar.id"
      v-model="show"
      class="base-snackbar pa-0"
      elevation="0"
      color="transparent"
      :timeout="snackbar.duration"
      :right="right"
      :left="left"
      :top="top"
      :bottom="bottom"
      @mouseenter="
        clearAutoClose(snackbar.id)
      "
      @mouseleave="
        setAutoClose(
          snackbar.id,
          snackbar.duration
        )
      "
    >
      <v-card :color="snackbar.color">
        <v-row>
          <v-col cols="8">
            <v-card-title>
              {{ snackbar.title }}
            </v-card-title>

            <v-card-subtitle>
              {{ snackbar.text }}
            </v-card-subtitle>
          </v-col>
          <v-card-actions
            class="d-flex justify-center align-center"
          >
            <v-btn
              color="pink"
              text              
              @click="
                ;[
                  closeSnackbar(
                    snackbar
                  ),
                  clearAutoClose(
                    snackbar
                  )
                ]">
              Close
            </v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-snackbar>
  </div>
</template>

<script>
import { clearTimeout } from 'timers'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'BaseSnackbar',
  props: {
    name: {
      type: String,
      default: undefined
    },
    color: {
      type: String,
      default: undefined
    },
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      autoClose: {},
      show: false,
      snackbars: []
    }
  },
  mounted() {
    this.$nuxt.$on(
      'show-snackbar',
      (snackbar) =>
        snackbar.name === this.name &&
        this.showSnackbar(snackbar)
    )
  },
  methods: {
    clearAutoClose(id) {
      clearTimeout(this.autoClose[id])
      delete this.autoClose[id]
    },
    showSnackbar(snackbar) {
      const uuid = uuidv4()
      const s = Object.assign(
        snackbar,
        {
          id: uuid
        }
      )
      this.snackbars.push(s)

      this.show = true

      this.setAutoClose(
        uuid,
        snackbar.duration
      )
    },

    hideSnackbar(snackbar) {
      this.autoClose[snackbar.id] =
        setTimeout(() => {
          this.closeSnackbar(snackbar)
        }, snackbar.duration)
    },

    closeSnackbar(snackbar) {
      const snackbarEl =
        document.getElementById(
          snackbar.id
        )
      snackbarEl.style.animation =
        'snackbar-out .3s ease-out forwards'

      setTimeout(() => {
        const index =
          this.snackbars.findIndex(
            (item) =>
              item.id === snackbar.id
          )
        this.snackbars.splice(index, 1)
        delete this.autoClose[
          snackbar.id
        ]
      }, 300)
    },

    setAutoClose(id, duration) {
      if (!duration) {
        return false
      }

      const snackbar =
        this.snackbars.find(
          (snackbar) =>
            snackbar.id === id
        )
      this.hideSnackbar(snackbar)
    }
  }
}
</script>

<style scoped>
.fixed {
  position: fixed;
}
.base-snackbar {
  animation: snackbar 0.3s ease-out
    forwards;
}

@keyframes snackbar {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes snackbar-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
