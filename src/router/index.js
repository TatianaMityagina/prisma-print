import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import Office from '../views/Office.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

export default new VueRouter ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      props: true
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
