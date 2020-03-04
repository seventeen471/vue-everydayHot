// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from'./store'
import flexible from './flexible'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp);
Vue.use(flexible);
Vue.config.productionTip = false;
if (module.hot) {
  module.hot.accept();
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
