<template>
  <div>
    <h1>Register</h1>

    <form @submit.prevent="register">
      <div>
        <label for="username">Username</label>
        <input v-model="form.username" type="text" autocomplete="off" placeholder="username" />
      </div>

      <div>
        <label for="email">Email</label>
        <input v-model="form.email" type="text" autocomplete="off" placeholder="email" />
      </div>

      <div>
        <label for="password">Password</label>
        <input v-model="form.password" type="password" />
      </div>

      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
// import AuthService from "@/services/AuthService"
import AuthUser from "@/store/AuthUser"

export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
    }
  },
  methods: {
    async register() {
      // let res = await AuthService.register(this.form)
      let res = await AuthUser.dispatch('register', this.form)
      if (res.success) {
        this.$swal("Register Success", `Welcome ${res.user.username}`, "success")
        this.$router.push("/pokedex")
      } else {
        this.$swal("Register Failed", res.message, "error")
      }
    },
  },
}
</script>

<style></style>
