import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/main-slyle.scss'
import Es6Promise from 'es6-promise'

Es6Promise.polyfill()

var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -110,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
