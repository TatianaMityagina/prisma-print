import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import Video from '../views/Video.vue'
import Home from '../views/Home.vue'
import Office from '../views/Office.vue'
import About from '../views/About.vue'
import Contract from '../views/Contract.vue'
import Gallery from '../views/Gallery.vue'
import Calculation from '../views/Calculation.vue'


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
      path: '/video',
      name: 'Video',
      component: Video
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
    },
    {
      path: '/contract',
      name: 'Contract',
      component: Contract,
      props: true
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
      props: true
    },
    {
      path: '/calculation',
      name: 'Calculation',
      component: Calculation,
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
