<template>
  <div>
    Add New Pokemon

    <div>
      <div>
        <label for="name">Name (En)</label>
        <input type="text" v-model="form.name" />
      </div>

      <div>
        <label for="name_jp">Name (Jp)</label>
        <input type="text" v-model="form.name_jp" />
      </div>

      <div>
        <label for="type">Type</label>
        <input type="text" v-model="form.pokemon_types" />
      </div>

      <div>
        <button @click="addPokemon">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import PokedexApiStore from "@/store/PokedexApi"

export default {
  data() {
    return {
      form: {
        name: "",
        name_jp: "",
        pokemon_types: ""
      },
    }
  },
  methods: {
    clearForm() {
      this.form = {
        name: "",
        name_jp: "",
        pokemon_types: ""
      }
    },
    addPokemon() {
      let payload = {
        name: this.form.name,
        name_jp: this.form.name_jp,
        pokemon_types: this.form.pokemon_types.split(",").map((item) => item.trim()),
      }

      console.log(payload)
      PokedexApiStore.dispatch("addPokemon", payload)

      this.clearForm()
    },
  },
}
</script>

<style></style>
