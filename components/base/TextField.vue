<template>
  <v-text-field
    :height="height"
    :hide-details="hideDetails"
    :outlined="outlined"
    :append-icon="appendIcon"
    :label="label"
    :placeholder="placeholder"
    :color="color"
    :class="neumorphismClass"
    dense
    light
    @change="onChange"
    @click:append="$emit('click:append',$event.target)"
    @keydown.enter="onKeydownEnter"
  ></v-text-field>
</template>

<script>
export default {
  name: 'BaseTextField',
  props: {
    height: {
      type: [String,Number],
      default: undefined
    },
    hideDetails: {
      type: Boolean,
      default: undefined
    },
    isNeumorphism: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Your value',
      required: true
    },
    placeholder: {
      type: String,
      default: 'Value...',
      required: true
    },
    color: {
      type: String,
      default:
        'light-blue darken-4 light-blue--text text--lighten-4'
    },
    className: {
      type: String,
      default: ''
    },
    appendIcon: {
      type: String,
      default: undefined
    }
  },
  computed: {
    neumorphismClass() {
      if (this.isNeumorphism) {
        return [
          'neumorphism-shadow ' +
            this.className
        ]
      } else {
        return [this.className]
      }
    }
  },
  methods: {
    onChange(e) {      
      this.$emit('change', e)
    },
    onKeydownEnter(e){
      this.$emit('keydown.enter', e)
    },
    onAppendIcon(e) {      
      this.$emit('click:append',e)
    }
  }
}
</script>

<style scoped>
.neumorphism-border {
  border: 4px solid #01579b;
}
.neumorphism-shadow {
  box-shadow: -6px -6px 12px #ffffff,
    6px 6px 12px
      rgba(111, 112, 113, 0.8);
  border-radius: 10px;
}
</style>
