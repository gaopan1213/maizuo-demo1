import Vue from 'vue'
import Vuex from 'vuex'
import FilmsModule from './modules/films'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    film: FilmsModule
  }
})
export default store
