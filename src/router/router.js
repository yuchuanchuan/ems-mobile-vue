import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../components/Index/Index.vue'
import Sub from '../components/Index/Sub.vue'
import Ex from '../components/Index/Ex.vue'
import Info from '../components/Index/Info.vue'
import List from '../components/Index/List.vue'
import Login from '../components/Index/Login.vue'

Vue.use(Router)
export default new Router({
  base: '/mobile/',
  routes: [
    {path: '/', component: Login},
    {path: '/Sub', component: Sub},
    {path: "/Info", component: Info},
    {path: '/List', component: List},
    {path: '/Ex', component: Ex},
    {path: '/Index', component: Index}
  ]
})
