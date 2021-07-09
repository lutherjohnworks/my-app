import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarDrawer: null,
    currentJoke: "SAmple text from state",
    alljokes: []
  },
  mutations: {
    setSidebarDrawer: (state,payload) => (state.sidebarDrawer = payload),
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getcurrentJoke: state => state.currentJoke
  }
})
