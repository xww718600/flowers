import Vue from 'vue'
import Router from 'vue-router'
import One from '@/pages/One'
import Two from '@/pages/Two'
import Three from '@/pages/Three'
import Four from '@/pages/Four'
import Five from '@/pages/Five'
import Six from '@/pages/Six'
import Seven from '@/pages/Seven'
import Eight from '@/pages/Eight'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'One',
      component: One
    },
    {
      path:'/Two',
      name:'Two',
      component:Two
    },
    {
      path:'/Three',
      name:'Three',
      component:Three
    },
    {
      path:'/Four',
      name:'Four',
      component:Four
    },
    {
      path:'/Five',
      name:'Five',
      component:Five
    },
    {
      path:'/Six',
      name:'Six',
      component:Six
    },
    {
      path:'/Seven',
      name:'Seven',
      component:Seven
    },
    {
      path:'/Eight',
      name:'Eight',
      component:Eight
    }
  ]
})





