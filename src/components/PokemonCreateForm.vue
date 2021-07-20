<template>
  <div>
    Add New Pokemon

    <div>
      <div>
        <label for="name">Name (En)</label>
        <input type="text" v-model="form.name.english">
      </div>

      <div>
        <label for="name_jp">Name (Jp)</label>
        <input type="text" v-model="form.name.japanese">
      </div>

      <div>
        <label for="type">Type</label>
        <input type="text" v-model="form.type">
      </div>

      <div>
        <button @click="addPokemon">Add</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: {
          english: '',
          japanese: ''
        },
        type: ''
      }
    }
  },
  methods: {
    clearForm() {
      this.form = {
        name: {
          english: '',
          japanese: ''
        },
        type: ''
      }
    },
    addPokemon() {
      let payload = {
        name: this.form.name,
        type: this.form.type.split(",").map(
          (item) => item.trim()
        )
      }
      // todo: เรียก action ใน PokemonStore เพื่อเพิ่มข้อมูล
      console.log(payload)

      this.clearForm()
    }
  }
}
</script>

<style>

</style>