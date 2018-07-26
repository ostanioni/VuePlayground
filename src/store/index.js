import Vue from 'vue'
import Vuex from 'vuex'

//import NavPanel from './NavPanel'
//import MainContent from './MainContent'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  strict: true,
  state:{},
  mutations: {},
  actions: {},
  getters: {},
  modules:{
    //NavPanel,
    //MainContent
  }
})

export default store
