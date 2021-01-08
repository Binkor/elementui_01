import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Button from '../components/Button'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Example1 from '../components/Example1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      // name: 'HelloWorld',
      component: Button
    },
    {path:'/layout',component:Layout},
    {path:'/container',component:Container},
    {path:'/example1',component:Example1}
  ]
})
