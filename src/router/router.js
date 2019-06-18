import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../components/Index/Index.vue'
import Sub from '../components/Index/Sub.vue'
import Ex from '../components/Index/Ex.vue'
import Info from '../components/Index/Info.vue'
import List from '../components/Index/List.vue'
import Login from '../components/Index/Login.vue'
import Tz from '../components/Index/Tz.vue'

Vue.use(Router)
export default new Router({
  base: '/mobile/',
  mode: 'history',
  routes: [
    { path: '/', redirect: '/login' },
    {path: '/tz', name:'tz', component: Tz},
    {path: '/login', name:'login', component: Login},
    {path: '/Sub', name:'Sub', component: Sub},
    {path: "/Info", name:'Info', component: Info},
    {path: '/List', name:'List', component: List},
    {path: '/Ex', name:'Ex', component: Ex},
    {path: '/Index', name:'Index', component: Index}
  ]
})
