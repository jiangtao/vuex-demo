import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)

let store = new Vuex.Store({
  actions, // 异步 dispatch
  mutations, // 同步 commit
  getters,
  modules,
  state,
  strict: process.env.NODE_ENV === 'develop'
})

if (module.hot) {
  module.hot.accept(['./mutations', './actions'], () => {
    // 因为 babel 6 的模块编译格式问题，这里需要加上 .default
    const newMutations = require('./mutations').default
    const newActions = require('./actions').default

    store.hotUpdate({
      mutations: newMutations,
      actions: newActions
    })
  })
}

export default store
