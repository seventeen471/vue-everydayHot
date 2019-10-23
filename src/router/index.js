import Vue from 'vue'
import Router from 'vue-router'
import tongzhi from '../components/tongzhi.vue'
import sixin from '../components/sixin.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/t', redirect: '/tongzhi'},
    {path: '/tongzhi', component: tongzhi},
    {path: '/sixin', component: sixin}
  ]
})
