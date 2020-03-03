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
        axios.get('http://127.0.0.1/shop/test').then(res=>{
          console.log('my shop user:' + res);
        }).catch('获取数据失败！');
      }
    }
</script>

<style scoped>
#sixin p{
  position: absolute;
  top: 25%;
  left: 33%;
  opacity: 0.5;
  font-size: 0.533rem;
}
</style>
