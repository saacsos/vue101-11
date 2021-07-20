<template>
  <div>
    <pokemon-create-form></pokemon-create-form>
    <pokemon-table></pokemon-table>
    
  </div>
</template>

<script>
// src/views/PokemonList.vue

import PokemonCreateForm from '@/components/PokemonCreateForm'
import PokemonTable from '@/components/PokemonTable'
export default {
  components: {
    PokemonCreateForm,
    PokemonTable
  }
}
</script>

<style>

</style>