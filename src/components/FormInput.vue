<template>
  <div>

    <label v-if="label">{{ label }}</label>

    <b-button-toolbar>

      <b-input-group append="km">
        <b-form-input
          v-model="content"
          :placeholder="placeholder"
          :label="label"
          :type="type"
          class="text-right"
          @input="$emit('change', content)"
        />
      </b-input-group>

    </b-button-toolbar>

    <b-button-toolbar>
      <b-button-group class="ml-5 mt-3 mr-3">
        <b-button @click="$emit('click')">Calcular</b-button>
      </b-button-group>
    </b-button-toolbar>

  </div>
</template>

<script>
export default {
  name: 'FormInput',
  model: {
    prop: 'input',
    event: 'change'
  },
  props: [
    'input',
    'placeholder',
    'label',
    'type',
    'append',
  ],
  data() {
    return {
      content: this.input || null
    };
  },
  watch: {
    input(newValue) {
      if (newValue !== this.content) {
        this.content = newValue;
      }
    }
  },
}
</script>
