import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showComp: true,
    url:'',
    homeUrl: '',
  },
  mutations: {
    changeShow(state){
      state.showComp = !state.showComp;
    },
    scrollPosition(){
      setTimeout(()=>window.scrollTo(0,parseFloat(window.sessionStorage.getItem("scrollTop"))),10);
    }
  },
  getters: {},
  actions: {}
})
export default store
