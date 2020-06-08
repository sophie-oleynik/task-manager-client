import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import todo from './modules/todo';
import projects from './modules/project';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    serverUrl: 'http://localhost:3000/api',
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    todo,
    projects
  },
});
