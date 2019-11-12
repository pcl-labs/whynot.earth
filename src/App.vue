<template>
  <v-app id="app">
    <PageToolbar></PageToolbar>
    <router-view :key="$route.name + ($route.params.id || '')"/> 
    <!-- for reloading created while trying to navigate to different ids in the dynamic route -->
    <Footer style="position:relative;"></Footer>
  </v-app>
</template>

<script>
const PageToolbar = () => import ('@/components/Toolbar.vue')
const PageFooter = () => import ('@/components/Footer.vue')

export default {
  name: "app",
  components: {
    PageToolbar,
    PageFooter
  },

}
</script>

<style>
  #app {
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background: linear-gradient(115.51deg, #121416 0%, #2B354C 100%);
    min-height: 100vh;
  }
  body{
    overflow-x: hidden;
  }
  html {
    scroll-behavior: smooth;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
