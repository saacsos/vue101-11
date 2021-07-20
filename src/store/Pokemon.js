import Vue from "vue"
import Vuex from "vuex"

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
    fetch (state, { res }) {
      state.data = res.data
    }
  },

  // actions เหมือน public methods ใน oop, 
  // ให้ภายนอกเรียกใช้ หรือ ดึงข้อมูลจากภายนอก
  actions: {
    // commit เป็น keyword ไว้เรียก mutation
    fetchPokemon ({ commit }) {
      // สมมติไปเรียกข้อมูลจาก api
      let res = {
        data: [
          {
            name: {
              english: "Bulbasaur",
              japanese: "Fushikidane",
            },
            type: ["Grass", "Poison"],
          },
          {
            name: {
              english: "Bulbasaur 2",
              japanese: "Fushikidane 2",
            },
            type: ["Grass", "Poison"],
          },
        ],
      }
      commit('fetch', { res })
    }
  },
  modules: {},
})
