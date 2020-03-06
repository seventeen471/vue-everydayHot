<template>
  <div id="tongzhi">
    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4173986492,694571026&fm=26&gp=0.jpg">
    <h3>还没有收到通知</h3>
    <article>您获得的赞同、赞、感谢、评论；您关注的问题、专栏更新等动态会显示在这里</article>
  </div>
</template>

<script>
    export default {
        name: "tongzhi",
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
#tongzhi img{
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 5rem;
  left: 3.067rem;
  opacity: 0.2;
}
  #tongzhi h3{
    position: absolute;
    top: 9.4rem;
    left: 2.8rem;
    opacity: 0.4;
    text-align: center;
    font-size: 0.667rem;
  }
#tongzhi article{
  position: absolute;
  top: 10rem;
  left: 0;
  opacity: 0.5;
  text-align: center;
  font-size: 0.533rem;
  margin: 0.533rem;
}
</style>
