import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/main-slyle.scss'
import Es6Promise from 'es6-promise'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import VBodyScrollLock from 'v-body-scroll-lock'

Vue.use(VBodyScrollLock)
Vue.use(Viewer)

Es6Promise.polyfill()

var VueScrollTo = require('vue-scrollto');

const VueInputMask = require('vue-inputmask').default
Vue.use(VueInputMask)
 
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -120,
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
