<template>
  <div>
    <pokedex-create-form></pokedex-create-form>
    <pokedex-table></pokedex-table>
    
  </div>
</template>

<script>
// src/views/PokemonList.vue

import PokedexCreateForm from '@/components/PokedexCreateForm'
import PokedexTable from '@/components/PokedexTable'
export default {
  components: {
    PokedexCreateForm,
    PokedexTable
  }
}
</script>

<style>

</style>