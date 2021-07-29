import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"

let api_endpoint = process.env.POKEMON_ENDPOINT || "http://localhost:1337"

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
    edit(state, index, data) {
      state.data[index] = data
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
      // todo: หาว่า type เป็น id อะไร
      let qs = payload.pokemon_types.map((it) => "name_in=" + it).join("&")
      let res_types = await Axios.get(api_endpoint + "/types?" + qs)

      let url = api_endpoint + "/monsters"
      let body = {
        name: payload.name,
        name_jp: payload.name_jp,
        pokemon_types: res_types.data.map((it) => it.id),
      }

      let res = await Axios.post(url, body)
      if (res.status === 200) {
        commit("add", res.data)
      } else {
        console.error(res)
      }
    },

    async editPokemon({ commit }, payload) {
      let qs = payload.pokemon_types.map((it) => "name_in=" + it).join("&")
      let res_types = await Axios.get(api_endpoint + "/types?" + qs)

      let url = api_endpoint + "/monsters/" + payload.id
      let body = {
        name: payload.name,
        name_jp: payload.name_jp,
        pokemon_types: res_types.data.map((it) => it.id),
      }
      let res = await Axios.put(url, body)
      if (res.status === 200) {
        console.log("commit('edit')", payload.index, res.data)
        commit("edit", payload.index, res.data)
      } else {
        console.err(res)
      }
    },
  },
  modules: {},
})
