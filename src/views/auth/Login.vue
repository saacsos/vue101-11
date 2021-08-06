<template>
  <div>
    <h1>LOG IN</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input v-model="form.email" type="text" placeholder="email" autocomplete="off">
      </div>

      <div>
        <label for="password">Password</label>
        <input v-model="form.password" type="password" autocomplete="off">
      </div>

      <div>
        <button>Login</button>
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
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      // let res = await AuthService.login(this.form)
      let res = await AuthUser.dispatch('login', this.form)
      if (res.success) {
        this.$swal("Login Success", `Welcome, ${res.user.username}`, "success")
        this.$router.push('/pokedex')
      } else {
        this.$swal("Login Failed", res.message, "error")
      }
    }
  }
}
</script>

<style>

</style>