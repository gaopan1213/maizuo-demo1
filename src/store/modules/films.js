import axios from 'axios'
export default {
  namespaced: true,
  state: {
    filmList: []
  },
  getters: {},
  mutations: {
    setFilmList(state, payload) {
      state.filmList = payload
    }
  },
  actions: {
    getFilmList({ commit }, payload) {
      axios
        .get('https://m.maizuo.com/gateway', {
          params: {
            cityId: 310100,
            pageNum: 1,
            pageSize: 10,
            type: payload.type,
            k: 2055983
          },
          headers: {
            'X-Client-Info':
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156981471617845589116479"}',
            'X-Host': 'mall.film-ticket.film.list'
          }
        })
        .then(response => {
          let result = response.data
          // console.log(result)
          // console.log(response)
          if (result.status == 0) {
            commit('setFilmList', result.data.films)
          }
        })
    }
  }
}
