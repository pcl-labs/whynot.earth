<template>
  <v-container-fluid>
    <Parallax></Parallax>
  </v-container-fluid>
</template>

<script>
const Parallax = () => import ('@/components/Parallax.vue')

export default {
  components: {
    Parallax
  }
}
</script>

<style>
.container{
  margin: 0;
}
html {
  scroll-behavior: smooth;
}
</style>
