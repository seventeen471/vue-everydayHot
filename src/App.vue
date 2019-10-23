<template>
  <div id="app">
<!--    <router-view/>-->
    <transition name="home">
    <my-home v-show="this.$store.state.showComp"></my-home>
    </transition>
    <transition name="detail">
    <my-detail v-if="!this.$store.state.showComp"></my-detail>
    </transition>
  </div>
</template>

<script>
  import home from './components/home.vue'
  import detail from './components/detail.vue'
  import './components/animate.css'
  import { Indicator } from 'mint-ui';
export default {
  name: 'App',
  components: {
    'my-home': home,
    'my-detail': detail,
  },
  data(){
    return{

    }
  },
  beforeCreate() {
  },
  created() {
  },
  methods: {
  },
}
</script>

<style scoped>
#app {
}

  .detail-enter,
  .detail-leave-to{
    transform: translateY(70px);
  }
  .detail-enter-active,
  .detail-leave-active{
    transition: all 0.8s ease;
  }
.home-enter,
.home-leave-to{
  transform: translateX(-260px);
}
.home-enter-active{
  transition: all 0.6s ease;
}
</style>
