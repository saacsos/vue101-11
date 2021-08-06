<template>
  <div>

  </div>
</template>

<script>
// import AuthService from "@/services/AuthService"
import AuthUser from "@/store/AuthUser"
export default {
  mounted() {
    // AuthService.logout()
    AuthUser.dispatch('logout')
    this.$router.push('/pokedex')
  }
}
</script>

<style>

</style>