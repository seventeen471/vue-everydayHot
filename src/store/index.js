import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showComp: true,
    url:'',
    homeUrl: '',
    scrollDisable: true
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
