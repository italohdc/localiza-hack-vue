<template>
  <b-card
    title="Cálculo de Economia"
  >
    <FormInput
      v-model="mileage"
      label="Quantos quilômetros você se desloca diariamente?"
      placeholder="ex.: 32"
      type="number"
      @click="calculate(mileage)"
    />
  </b-card>
</template>

<script>
import FormInput from './FormInput.vue';

import { mapActions } from 'vuex';

export default {
  name: 'MainCard',
  components: {
    FormInput,
  },
  data() {
    return {
      mileage: null
    };
  },
  methods: {
    ...mapActions({
      calculate: 'calculateTaxes'
    })
  },
}
</script>

<style lang="scss" scoped>

</style>
