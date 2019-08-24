<template>
  <b-card>
    <h3 id="title">Enquanto isso, na Localiza...</h3>

    <div id="aluguel-values">
      <p>Você terá um custo mensal de aproximadamente <b>{{ aluguelMensal | currency }}</b>.</p>
      <p>A seguir, você confere a tabela de preços progressivos.</p>
    </div>

    <h4 id="subtitle">Tabela de Preços</h4>
    <b-table class="text-center" striped hover :items="items"></b-table>

    <div id="aluguel-values">
      <p>
        O custo mensal estimado foi calculado utilizando o valor mensal
        médio do aluguel e outras despesas provenientes do uso do veículo.
      </p>
      <p>
        Confira a tabela dos valores utilizados para o cálculo:
      </p>
    </div>

    <h4 id="subtitle">Valores utilizados para o cálculo</h4>
    <b-table class="text-center" striped hover :items="extra"></b-table>

    <span id="disclaimer">
      * Os valores apresentados foram calculados utilizando como base o
      aluguel de carros econômicos em 24/08/2019. O valor real atual
      pode variar.
    </span>
  </b-card>
</template>

<script>
export default {
  name: 'TableAluguel',
  data() {
    return {
      aluguelMensal: 2692.31,
      items: [
        { 'mês': '1º mês', valor_mensal: 'R$ 1643,04' },
        { 'mês': '2º mês', valor_mensal: 'R$ 1618,39' },
        { 'mês': '3º mês', valor_mensal: 'R$ 1528,03' },
        { 'mês': '4º mês', valor_mensal: 'R$ 1470,52' },
        { 'mês': '5º mês', valor_mensal: 'R$ 1437,66' },
        { 'mês': '6º mês', valor_mensal: 'R$ 1421,23' },
      ],
      extra: [
        { despesa: 'Aluguel', valor_mensal: 'R$ 1519,81' },
        { despesa: 'Gasolina', valor_mensal: 'R$ 1172,50' },
        { despesa: 'Total', valor_mensal: 'R$ 2692,31' },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
#title {
  font-size: 1.5rem;
}

#subtitle {
  margin-top: 3em;
  margin-bottom: 1em;
  font-size: 1.2rem;
  text-align: center;
}

#aluguel-values {
  margin-left: 1.2em;
  margin-top: 2em;

  p {
    font-size: 1.2em;
  }
}

#disclaimer {
  font-size: 0.6em;
  opacity: 0.6;
}
</style>
