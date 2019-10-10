import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '张三'
  },
  getters: {
    reverseTitle(state) {
      return state.title
        .split('')
        .reverse()
        .join('')
    }
  },
  mutations: {
    changeTitle(state) {
      state.title = 'lisi'
    }
  },
  actions: {
    SyncTitle(context, payload) {
      setTimeout(() => {
        context.commit('changeTitle')
      })
    }
  }
})
export default store
