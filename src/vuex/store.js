import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add (state) {
    'use strict'
    state.count++
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  count (state) {
    'use strict'
    state.count += 10
    return state.count
  }
}

const actions = {
  addAction ({ commit }) {
    // 'use strict';
    setTimeout(() => {
      commit('add', 10)
    }, 2000)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
