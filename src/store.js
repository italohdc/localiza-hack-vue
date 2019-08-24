import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDataComputed: false,
    daily: null,
    monthly: null,
  },
  mutations: {
    setDataComputed(state) {
      state.isDataComputed = true;
    },
    setDaily(state, value) {
      state.daily = value;
    },
    setMonthly(state, value) {
      state.monthly = value;
    },
  },
  actions: {
    calculateTaxes({ commit }, dailyMileage) {
      if (dailyMileage === null) return;

      const mileage = Number(dailyMileage);
      console.log(dailyMileage, mileage);

      const daily = mileage * 1.89;
      const monthly = daily * 30;

      commit('setDaily', daily);
      commit('setMonthly', monthly);

      commit('setDataComputed');
    },
  },
});
