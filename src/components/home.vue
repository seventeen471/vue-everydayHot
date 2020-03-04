<template>
    <div id="home">
      <div class="top">
      <img src="./menu.svg" class="topbarImg menu" @click="popupVisibleMenu=true">
      <span class="today">今日热点</span>
      <img src="./message.svg" class="topbarImg message" @click="popupVisible=true">
      </div>
      <div class="hot-story">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in hotStory" :key="item.id">
          <img :src="item.image" class="itemImg" @click="open(item.id)">
          <p class="itemP">{{item.title}}</p>
        </mt-swipe-item>
      </mt-swipe>
      </div>

      <div class="all-story" v-if="$store.state.scrollDisable">
        <ul v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="20">
          <li v-for="item in allStory" :key="item.id">
            <div class="title" @click="open(item.id)">
              <span >{{item.title|lengthControl}}</span>
            </div>
            <img :src="item.images" @click="open(item.id)">
          </li>
          <li v-for="item in allStory2" :key="item.id">
            <div class="title" @click="open(item.id)">
              <span>{{item.title|lengthControl}}</span>
            </div>
            <img :src="item.images" @click="open(item.id)">
          </li>
        </ul>
      </div>
      <div>
        <mt-popup
          v-model="popupVisible"
          position="right">
            <div class="head">
              <img src="./return.svg" class="left" @click="returnHome">
              <p>消息中心</p>
              <span class="tongzhi" @click="tongzhiEvent" ref="tongzhiDom">通知</span>
              <span class="sixin" @click="sixinEvent" ref="sixinDom">私信</span>
              <tongzhi v-if="tzsxShow"></tongzhi>
              <sixin v-if="!tzsxShow"></sixin>
            </div>
              <div class="msgContent"></div>
        </mt-popup>
      </div>
      <div class="myMenuDiv">
        <mt-popup
          v-model="popupVisibleMenu"
          position="left">
          <div class="shang">
          <div class="homeDiv" @click="homeEvent">
            <img src="./home.svg" class="homeImg">
            <div class="font">首页<span v-text="afterTB"></span></div>
          </div>
          <div class="aboutDiv" @click="aboutEvent">
            <img src="./about.svg" class="aboutImg">
            <div class="font">关于<span v-text="afterTB"></span></div>
          </div>
          <div class="moreDiv" @click="moreEvent">
            <img src="./more.svg" class="moreImg">
            <div class="font">更多<span v-text="afterTB"></span></div>
          </div>
          </div>
            <div class="menuContent"></div>
          <div class="setingDiv" @click="setingEvent">
            <img src="./setting.svg" class="setingImg">
            <div class="font setingText">设置</div>
          </div>
          <div class="quitDiv" @click="quitEvent">
            <img src="./quit.svg" class="quitImg">
            <div class="font quitText">退出</div>
          </div>
        </mt-popup>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import 'mint-ui/lib/style.css'
  import { Swipe, SwipeItem } from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  import { Loadmore } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';
  import Sixin from "./sixin";
  import tongzhi from "./tongzhi";
  import { Indicator } from 'mint-ui';
  Vue.use(InfiniteScroll);
  Vue.component(Loadmore.name, Loadmore);
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
    export default {
      name: "home",
      components: {Sixin,tongzhi},
      data(){
        return{
          hotStory: [],
          allStory: [],
          allStory2: [],
          date: '',
          popupVisible: false,
          popupVisibleMenu: false,
          afterTB: '>',
          loading: false,
          x: 1,
          tzsxShow: true,
        }
      },
      methods: {
        open(id){
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          window.sessionStorage.setItem("scrollTop", scrollTop.toString());
          this.$store.state.scrollDisable = false;
          this.$store.commit('changeShow');
          this.$store.state.url = 'https://zhihu-agent.herokuapp.com/get?api=/4/news/'+id;
        },
        returnHome(){
          this.popupVisible = false;
        },
        ajaxMore() {
          this.getDate();
          Indicator.open();
          axios.get('https://zhihu-agent.herokuapp.com/get?api=/4/news/before/'+this.date).then(res2=>{
            Indicator.close();
            for (var i=0;i<res2.data.stories.length;i++){
              this.allStory2.push(res2.data.stories[i]);
            }
          }).catch(err=>{
            this.requestError();
          })
        },
        getDate(x) {
          x = this.x;
          var time = new Date();
          var y = time.getFullYear().toString();
          var m = (time.getMonth()+1).toString().padStart(2,'0');
          var d = (time.getDate()).toString().padStart(2,'0');
          if (parseInt(d)-x<1){
            if ((parseInt(m)-1)==1||(parseInt(m)-1)==3||(parseInt(m)-1)==5||(parseInt(m)-1)==7||(parseInt(m)-1)==8||(parseInt(m)-1)==10||(parseInt(m)-1)==12) {
              m = (parseInt(m)-1).toString().padStart(2,'0');
              d = (31 -(x-parseInt(d))).toString().padStart(2,'0');
            }else if(parseInt(m)-1===2){
                m = (parseInt(m) - 1).toString().padStart(2, '0');
                d = (28 - (x - parseInt(d))).toString().padStart(2, '0');
              }else {
                m = (parseInt(m) - 1).toString().padStart(2, '0');
                d = (30 - (x - parseInt(d))).toString().padStart(2, '0');

            }
          }else{
            d = ((time.getDate())-x).toString().padStart(2,'0');
          }
          this.date = y + m + d;
          this.x ++;
        },
        loadMore() {
          this.ajaxMore();
        },
        tongzhiEvent(){
          this.$refs.tongzhiDom.style.borderBottom = '0.026rem solid grey';
          this.$refs.sixinDom.style.borderBottom = '';
          this.tzsxShow = true;
        },
        sixinEvent(){
          this.$refs.sixinDom.style.borderBottom = '0.026rem solid grey';
          this.$refs.tongzhiDom.style.borderBottom = '0.026rem solid transparent';
          this.tzsxShow = false;
        },
        requestError(){
          MessageBox({
            title: '提示',
            message: '获取数据失败，请检查网络！',
          });
        },
        homeEvent(){
          this.popupVisibleMenu = false;
        },
        aboutEvent(){
          MessageBox({
            title: '关于',
            message: '数据来源于“知乎”每日最新内容。',
          });
        },
        moreEvent(){
          MessageBox({
            title: '更多',
            message: '作者：施启银<br> 邮箱：1772065618@qq.com',
          });
        },
        setingEvent(){
          alert("设置功能还未实现")
        },
        quitEvent(){
          this.closeWebPage();
        },
        closeWebPage() {
          if (navigator.userAgent.indexOf("MSIE") > 0) {
            //判断是否为ie6
            if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
              window.opener = null; window.close();
            }
            else {
              window.open('', '_top'); window.top.close();
            }
          }
          //判断是否为firefox
          else if (navigator.userAgent.indexOf("Firefox") > 0) {
            window.location.href = 'about:blank ';
          }
          //其他非firefox等主流浏览器如chrome,safari
          else {
            window.opener = null;
            window.open('', '_self', '');
            window.close();
          }
        }
      },
      filters: {
        lengthControl: function(text){
          if (text.length>=25){
            text = text.substring(0,25);
            return text+'···'
          }else{
            return text;
          }
        }
      },
      updated() {
      },
      beforeMount() {
        this.$store.state.homeUrl = window.location.href;
        axios.get('https://zhihu-agent.herokuapp.com/get?api=/4/news/latest').then(res1=>{
          setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('main').style.display = 'block';
          }, 1000);
          this.date = res1.data.date;
          this.hotStory = res1.data.top_stories;
          this.allStory = res1.data.stories;
        }).catch(err=>{
          this.requestError();
        })
        console.log("请调成iphoneX屏幕以获得最好的体验效果");
      },
      mounted() {
      }
    }
</script>

<style scoped>
.top{
  width: 100%;
  height: 1.333rem;
  background-color: darkturquoise;
  position: fixed;
  z-index: 999;
}
.topbarImg{
    width: 0.8rem;
    height: 0.8rem;
    position: fixed;
    top: 0;
    margin: 0.267rem 0.267rem;
  }
  .message{
    right: 0;
  }
  .shang{
    margin-top: 1.867rem;
  }
  .today{
    position: fixed;
    top: 0.267rem;
    left: 40%;
    font-size: 0.533rem;
  }
  .hot-story{
    width: 100%;
    height: 5.867rem;
    padding-top: 1.333rem;
    background-color: #ccc;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

.itemImg{
  width: 100%;
  height: 6.667rem;
}
.itemP{
  width: 100%;
  height: 1.333rem;
  height: 1.533rem;
  display: block;
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  bottom: 0;
  padding-left: 0.267rem;
  padding-top: 0.267rem;
  color: #fff;
  font-size: 0.507rem;
}
  .all-story{
    width: 100%;
    margin-top: 0.267rem;
  }
  .all-story ul li{
    width: 95%;
    height: 2.133rem;
    margin: 0.267rem;
    box-shadow: 0 0 0.133rem 0 #888888;
    border-radius: 2%;
  }
.all-story ul li .title{
  width: 70%;
  height: 100%;
  float: left;
}
.all-story ul li .title span{
  width: 6.667rem;
  height: 0.8rem;
  overflow: hidden;
  padding: 0.533rem;
  margin-top: -0.133rem;
  display: inline-block;
  font-size: 0.453rem;
}
.all-story ul li img{
  width: 20%;
  height: 1.6rem;
  float: right;
  margin-top: 0.267rem;
  margin-right: 0.32rem;
}
  .bottom{
    display: flex;
    width: 100%;
  }
.head{
  padding-top: 1.067rem;
  width: 10.027rem;
  height: 1.6rem;
}
.msgContent{
    width: 10.027rem;
    height: 20.053rem;
  }
.head img{
  position: absolute;
  top: 1.6rem;
  left: 0.267rem;
  width: 0.8rem;
  height: 0.8rem;
}
  .head p{
    text-align: center;
    font-size: 0.56rem;
    margin-top: 0.533rem;
  }
  .head span{
    position: absolute;
    width: 50%;
    height: 1.067rem;
    font-size: 0.533rem;
    top: 2.7rem;
    text-align: center;
    line-height: 1.067rem;
    color: black;
  }
  .head .tongzhi{
    left: 0;
    border-bottom: 0.027rem solid black;
  }
.head .sixin{
  right: 0;
}
  .myMenuDiv .font{
    font-size: 0.533rem;
    margin-left: 1.333rem;
    margin-top: 0.533rem;
  }
.myMenuDiv img{
  width: 0.533rem;
  height: 0.533rem;
  position: absolute;
}
.myMenuDiv .homeImg{
  top: 2rem;
  left: 0.533rem;
}
.myMenuDiv .aboutImg{
  top: 3.33rem;
  left: 0.533rem;
}
.myMenuDiv .moreImg{
  top: 4.65rem;
  left: 0.533rem;
}
.myMenuDiv span{
  margin-left: 1.733rem;
}
  .menuContent{
    width: 5.333rem;
    height: 17.92rem;
  }
  .myMenuDiv .setingImg{
    width: 0.88rem;
    height: 0.88rem;
    position: absolute;
    top: 19.2rem;
    left: 0.533rem;
  }
.myMenuDiv .quitImg{
  width: 0.667rem;
  height: 0.667rem;
  position: absolute;
  top: 19.333rem;
  left: 2.4rem;
}
.myMenuDiv .setingText{
  position: absolute;
  top: 19.467rem;
  left: -0.96rem;
}
.myMenuDiv .quitText{
  position: absolute;
  top: 19.467rem;
  left: 0.853rem;
}
  .loading{
    margin: auto;
  }
</style>
