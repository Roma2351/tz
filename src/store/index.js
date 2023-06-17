import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[]
  },
  getters: {
  },
  mutations: {

    SET_TASK(state,value){
      state.tasks = value
    },
    },
  actions: {
  },
  modules: {
  }
})
