import Vue from 'vue';

import './assets/custom.scss';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';
import store from './store';

Vue.use(BootstrapVue);

Vue.filter('currency', (value) => {
  if (typeof value !== 'number') {
    return value;
  }
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
