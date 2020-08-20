import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  actions,
  getters,
  modules: {

  }
})

export default store
