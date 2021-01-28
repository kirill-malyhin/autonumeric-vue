<template>
  <input
    type="text"
    ref="autoNumericRef"
    @autoNumeric:rawValueModified="onChange"
    @blur="$emit('blur')"
  />
</template>

<script>

import AutoNumeric from 'autonumeric/dist/autoNumeric.min'

export default {
  name: 'AutoNumericVue',

  props: {
    value: { required: true, default: null },
    options: { type: Object, default: null }
  },

  data: () => ({
    anElement: null // Store the reference to the AutoNumeric object
  }),

  watch: {
    options () {
      this.updateOptions()
    },

    value () {
      this.updateValue()
    }
  },

  methods: {
    onChange () {
      if (!this.anElement) return

      const value = this.anElement.rawValue !== '' ? this.anElement.getNumber() : null
      this.$emit('input', value)
    },

    updateOptions () {
      this.anElement.update(this.options)
    },

    updateValue () {
      const value = this.value !== null ? this.value : ''
      this.anElement.set(value)
    }
  },

  mounted () {
    this.anElement = new AutoNumeric(this.$refs.autoNumericRef, this.options)
    this.updateValue()
  }
}
</script>
