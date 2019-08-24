<template>
  <div>
    <b-card
      title="Você vai gastar de Aplicativo de Mobilidade*..."
    >
      <div id="uber-values">
        <p><b>{{ daily | currency }}</b> em um dia</p>
        <p><b>{{ monthly | currency }}</b> em um mês</p>
      </div>

      <span id="disclaimer">
        * A simulação foi feita utilizando a categoria UberX.
        Foram desconsideradas tarifas dinâmicas.
        O preço real pode variar.
      </span>
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CalculatedTrips',
  computed: {
    ...mapState({
      daily: state => state.daily,
      monthly: state => state.monthly,
    })
  }
}
</script>

<style lang="scss" scoped>
#uber-values {
  margin-left: 1.2em;

  margin-top: 2em;

  p {
    font-size: 1.4em;
  }
}

#disclaimer {
  font-size: 0.6em;
  opacity: 0.6;
}
</style>
