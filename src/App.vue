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

<style src="./styles/fonts.css"></style>

<style>
:root {
  --font-sans-serif: 'Ubuntu', sans-serif;
  --font-serif: 'Bitter-Regular', serif;
}
.font-sans-serif {
  font-family: var(--font-sans-serif);
}
  #app {
    font-family: var(--font-sans-serif);
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

.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.aspect-ratio-box {
  height: 0;
  position: relative;
}
.ratio-1-1 {
  padding-top: 100%;
}
.ratio-16-9 {
  padding-top: 56.25%;
}
.ratio-9-16 {
  padding-top: 177.78%;
}
.ratio-3-2 {
  padding-top: 66.7%;
}
.aspect-ratio-box-inside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
.text-decoration-none {
  text-decoration: none;
}
.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0,0,0,0);
}
</style>
