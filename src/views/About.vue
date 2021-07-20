<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hello-world number="3000"></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  components : {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/_variables';
h1 {
  color: $primary;
}
</style>