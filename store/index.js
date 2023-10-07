// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import tabBar from './modules/tabBar';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tabBar
  }
});