<template>
  <div id="sixin">
    <p>没有更多内容</p>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "sixin",
      mounted() {
        this.$mui.plusReady(() => {
          this.$mui.back = () => {
            this.$store.state.scrollDisable = true;
            this.$store.commit('changeShow');
            this.$store.commit('scrollPosition');
          }
        });
      }
    }
</script>

<style scoped>
#sixin p{
  position: absolute;
  top: 40%;
  left: 34%;
  opacity: 0.5;
  font-size: 0.533rem;
}
</style>
