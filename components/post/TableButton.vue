<template>
  <v-tooltip bottom>
    <template
      #activator="{ on, attrs }"
    >
      <v-btn
        class="transparent"
        small
        icon
        v-bind="attrs"
        :disabled="disabled"
        v-on="on"
        @click="onClick"
      >
        <v-icon
          :color="iconColor()"
          class="ma-1"
        >
          {{ iconName() }}
        </v-icon>
      </v-btn>
    </template>
    <span
      >{{ buttonDescription() }}
      {{ description }}</span
    >
  </v-tooltip>
</template>

<script>
export default {
  name: 'TableButton',
  props: {
    disabled: {
      type: Boolean,
      default: undefined
    },
    description: {
      type: String,
      required: true
    },
    actionType: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    },
    buttonDescription() {
      switch (
        this.actionType.toLowerCase()
      ) {
        case 'edit':
          return 'Edit'
        case 'delete':
          return 'delete'
        default:
          return 'Detail'
      }
    },
    iconColor() {
      switch (
        this.actionType.toLowerCase()
      ) {
        case 'edit':
          return 'yellow'
        case 'delete':
          return 'red'
        default:
          return 'blue'
      }
    },
    iconName() {
      switch (
        this.actionType.toLowerCase()
      ) {
        case 'edit':
          return 'mdi-pencil'
        case 'delete':
          return 'mdi-delete'
        default:
          return 'mdi-eye'
      }
    }
  }
}
</script>
