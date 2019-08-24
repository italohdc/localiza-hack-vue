<template>
  <div id="app">
    <div id="main-container">

      <img id="logo" alt="Localiza logo" src="./assets/logo.png">
      <MainCard id="main-card" class="card-container"/>

      <CalculatedTrips v-if="isDataComputed" class="card-container"/>
      <TableAluguel v-if="isDataComputed" class="card-container"/>
      <ContactUs v-if="isDataComputed" class="card-container"/>

    </div>
  </div>
</template>

<script>
import MainCard from './components/MainCard.vue';
import CalculatedTrips from './components/CalculatedTrips.vue';
import TableAluguel from './components/TableAluguel.vue';
import ContactUs from './components/ContactUs.vue';

import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {
    MainCard,
    CalculatedTrips,
    TableAluguel,
    ContactUs,
  },
  computed: {
    ...mapState({
      isDataComputed: state => state.isDataComputed
    })
  }
};
</script>

<style lang="scss">
@import '@/assets/variables.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: $primary;
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 2em;
}

#logo {
  max-width: 100%;
}

#main-card {
  margin-bottom: 3em;
}

#main-container {
  max-width: 720px;
  margin: 0 auto;
}

.card-container {
  margin: 1.2em;
}
</style>
