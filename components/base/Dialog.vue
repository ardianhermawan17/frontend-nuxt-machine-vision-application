<template>
  <v-dialog
    v-model="isOpened"  
    transition="dialog-transition"  
    @click:outside="e => $emit('click:outside', e)"
  >
    <slot :closeDialog="closeDialog">
      Default Content
    </slot>
  </v-dialog>
</template>

<!-- .stop modifier to the event that triggers the dialog.  Eg: @click.stop="onSave"-->

<script>
export default {
  name: 'BaseDialog',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpened: false
    }
  },
  mounted() {
    document.body.insertBefore(
      this.$el,
      document.body.firstChild
    )

    this.$nuxt.$on(
      'toggle-dialog',
      ({ action, dialog }) =>
        this.toggle({ action, dialog })
    )
  },

  beforeDestroy() {
    this.closeDialog()
  },

  methods: {
    toggle({ action, dialog }) {
      if (dialog === this.name) {
        if (action === 'open') {
          this.openDialog()
          this.$emit('onAfterOpen')
        } else {
          this.closeDialog()
          this.$emit('onAfterClose')
        }
      }
    },
    openDialog() {
      this.$emit('onBeforeOpen')
      this.isOpened = true
    },

    closeDialog() {
      this.$emit('onBeforeClose')
      this.isOpened = false
    }
  }
}
</script>
