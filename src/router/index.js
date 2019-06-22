import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/news'
import Map from '@/components/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
  ]
})
