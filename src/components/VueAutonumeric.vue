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
  name: 'VueAutonumeric',

  props: {
    value: { required: true },
    options: { type: Object, default: null }
  },

  data: () => ({
    anElement: null // Store the reference to the AutoNumeric object
  }),

  computed: {
    numericOptions: ({ options }) => ({
      ...options
    })
  },

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
      this.anElement.update(this.numericOptions)
    }
  },

  mounted () {
    this.anElement = new AutoNumeric(this.$refs.autoNumericRef, this.numericOptions)

    this.anElement.set(this.value)
    this.onChange()
  }
}
</script>
