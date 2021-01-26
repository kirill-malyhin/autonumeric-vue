<template>
	<div id="app">
    <vue-autonumeric :options="''" v-model="autoNumericModel"/>
    <div class="rawValue">{{ autoNumericModel }}</div>
	</div>
</template>

<script>
import VueAutonumeric from '../src/components/VueAutonumeric.vue';

export default {
  name: 'app',

  components: {
    VueAutonumeric,
  },

  data: () => ({
    autoNumericModel : 221456.72
  }),

  mounted() {
    this.$refs.parentListener.addEventListener('autoNumeric:rawValueModified', e => {
      console.log(`autoNumeric:rawValueModified event detected`, e); //DEBUG
    });

    this.$refs.parentListener.addEventListener('autoNumeric:formatted', e => {
      console.log(`autoNumeric:formatted event detected`, e); //DEBUG
    });
  }
};
</script>

