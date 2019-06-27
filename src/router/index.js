import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/news'
import Map from '@/components/map'
import QRCode from '@/components/QRCode'

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
    {
      path: '/qrcode',
      name: 'qrcode',
      component: QRCode
    },
  ]
})
