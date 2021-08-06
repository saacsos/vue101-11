<template>
  <div>
    <h1>Edit Pokemon {{ id }}</h1>

    <div>
      <label for="name">Name (EN)</label>
      <input v-model="form.name" type="text">
    </div>

  </div>
</template>

<script>
import PokedexService from "@/services/PokedexService"
export default {
  data() {
    return {
      id: '',
      form: {
        name: '',
        name_jp: '',
        pokemon_types: ''
      }
    }
  },
  async created() {
    this.id = this.$route.params.id
    let pokemon = await PokedexService.getPokemonById(this.id)
    console.log(pokemon)
    this.form.name = pokemon.name
  }
}
</script>

<style>

</style>