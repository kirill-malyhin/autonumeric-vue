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
    value: { required: true },
    options: { type: Object, default: null }
  },

  data: () => ({
    anElement: null // Store the reference to the AutoNumeric object
  }),

  watch: {
    options () {
      this.updateOptions()
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
    }
  },

  mounted () {
    this.anElement = new AutoNumeric(this.$refs.autoNumericRef, this.options)

    this.anElement.set(this.value)
    this.onChange()
  }
}
</script>
