<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name (En)</th>
          <th>Name (Jp)</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(poke, index) in pokemons" :key="index">
          <td>{{ index + 1}}</td>
          <td>{{ poke.name.english }}</td>
          <td>{{ poke.name.japanese }}</td>
          <td>{{ poke.type }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
// src/components/PokemonTable.vue
import PokemonStore from '@/store/Pokemon'

export default {
  data() {
    return {
      pokemons: []
    }
  },
  created() {
    // ใช้ this เรียก methods ใน component ตัวเอง
    this.fetchPokemon()
  },
  methods: {
    fetchPokemon() {
      // เรียก action ใน Store ใช้ ชื่อStore.dispatch('ชื่อaction')
      PokemonStore.dispatch('fetchPokemon')

      // เรียก getter ใน Store
      this.pokemons = PokemonStore.getters.pokemons
    }
  }
}
</script>

<style>

</style>