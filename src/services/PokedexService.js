import Axios from 'axios'

const api_endpoint = process.env.VUE_APP_POKEDEX_ENDPOINT

export default {
  async getPokemonById (id) {
    try {
      let res = await Axios.get(`${api_endpoint}/monsters/${id}`)
      return res.data
    } catch (e) {
      
    }
  }
}