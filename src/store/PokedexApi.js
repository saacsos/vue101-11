import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"

let api_endpoint = process.env.POKEMON_ENDPOINT || 'http://localhost:1337'

Vue.use(Vuex)

export default new Vuex.Store({
  // state คือ fields ใน oop
  state: {
    data: [],
  },

  getters: {
    pokemons: (state) => state.data,
  },

  // mutations เหมือน private setter ใน oop,
  // เอาไว้เปลี่ยนแปลงค่าใน state
  mutations: {
    fetch(state, { res }) {
      state.data = res.data
    },
    add(state, payload) {
      state.data.push(payload)
    },
    edit (state, payload) {
      state.data[payload.index] = payload.data
    },
  },

  // actions เหมือน public methods ใน oop,
  // ให้ภายนอกเรียกใช้ หรือ ดึงข้อมูลจากภายนอก
  actions: {
    // commit เป็น keyword ไว้เรียก mutation
    async fetchPokemon({ commit }) {
      let res = await Axios.get(api_endpoint + "/monsters")
      commit("fetch", { res })
    },

    async addPokemon({ commit }, payload) {
      let url = api_endpoint + "/monsters"
      let body = {
        name: payload.name,
        name_jp: payload.name_jp
      }

      // todo: หาว่า type เป็น id อะไร
      // let type_ids = []
      // for (let type of payload.pokemon_types) {
      //   let types = await Axios.get(api_endpoint + "/types?name=" + type)
      //   type_ids.push(types.data.id)
      // }

      let res = await Axios.post(url, body)
      let data = res.data
      commit("add", data)
    },

    async editPokemon ({ commit }, payload) {
      let url = api_endpoint + "/monsters/" + payload.id
      let body = {
        name: payload.name,
        name_jp: payload.name_jp
      }
      let res = await Axios.put(url, body)
      if (res.status === 200) {
        let data = {}
        data['data'] = res.data
        data['index'] = payload.index
        commit("edit", data)
      } else {
        console.err(res)
      }
    },
  },
  modules: {},
})
