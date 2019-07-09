// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(Vuetify,{
  iconfont: 'md',
})

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
  
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
