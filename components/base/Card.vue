<template>
  <v-card
    light
    outlined
    :ripple="ripple"
    :color="color"
    :class="[
      className,
      ' ',
      neumorphismShadow,
      ' ',
      scrollDirectionClass
    ]"
    :width="width"
    :height="height"
    :min-width="minWidth"
    :min-height="minHeight"
    :max-height="maxHeight"
    :max-width="maxWidth"    
  >
    <slot></slot>
  </v-card>
  <!-- <div
    :key="key"
    :class="neumorphismShadow"
  >
    <v-card
      light
      outlined
      :color="color"
      :class="className"
      :width="width"
      :height="height"
    >
      <slot></slot>
    </v-card>
  </div> -->
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    scrollDirection: {
      type: String,
      default: ''
    },
    shadowSize: {
      type: String,
      default: 'normal'
    },
    title: {
      type: String,
      default: 'Your value'
    },
    color: {
      type: String,
      default: 'blue-grey lighten-5'
    },
    className: {
      type: String,
      default: ''
    },
    ripple: {
      type: [Boolean, Object],
      default: undefined
    },
    width: {
      type: [String, Number],
      default: undefined
    },
    height: {
      type: [String, Number],
      default: undefined
    },
    maxHeight: {
      type: [String, Number],
      default: undefined
    },
    maxWidth: {
      type: [String, Number],
      default: undefined
    },
    minHeight: {
      type: [String, Number],
      default: undefined
    },
    minWidth: {
      type: [String, Number],
      default: undefined
    }
  },
  computed: {
    scrollDirectionClass() {
      if (
        this.scrollDirection ===
        'vertical'
      )
        return 'overflow-y-auto'
      else if (
        this.scrollDirection ===
        'horizontal'
      )
        return 'overflow-x-auto'
      else return ''
    },
    neumorphismShadow() {
      switch (this.shadowSize) {
        case 'normal':
          return 'neumorphism-shadow'
        case 's':
          return 'neumorphism-shadow-s'
        case 'xs':
          return 'neumorphism-shadow-xs'
        case 'l':
          return 'neumorphism-shadow-l'
        case 'xl':
          return 'neumorphism-shadow-xl'
        default:
          return 'neumorphism-shadow'
      }
    }
  }
}
</script>

<style scoped>
.neumorphism-shadow-xl {
  box-shadow: -10px -10px 20px #ffffff,
    10px 10px 20px
      rgba(111, 112, 113, 0.8);
  border-radius: 10px;
}
.neumorphism-shadow-l {
  box-shadow: -8px -8px 16px #ffffff,
    8px 8px 16px
      rgba(111, 112, 113, 0.8);
  border-radius: 10px;
}
.neumorphism-shadow {
  box-shadow: -6px -6px 12px #ffffff,
    6px 6px 12px
      rgba(111, 112, 113, 0.8);
  border-radius: 10px;
}
.neumorphism-shadow-s {
  box-shadow: -4px -4px 8px #ffffff,
    4px 4px 8px rgba(111, 112, 113, 0.8);
  border-radius: 10px;
}
.neumorphism-shadow-xs {
  box-shadow: -2px -2px 4px #ffffff,
    2px 2px 4px rgba(111, 112, 113, 0.8);
  border-radius: 10px;
}
</style>
