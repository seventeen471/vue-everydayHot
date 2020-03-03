<template>
    <div id="detail">
      <div class="head">
      <img src="./return.svg" class="left" @click="changeShowComp()">
        <span>详情页</span>
        <img src="./share.svg" class="right" @click="popupVisible=!popupVisible">
      </div>
      <div class="box">
        <img :src="msg.image" class="itemImg">
        <p class="itemP">{{msg.title}}</p>
      </div>
      <div class="body" v-html="msg.body"></div>

      <mt-popup
        v-model="popupVisible"
        position="bottom">
        <div class="share-box">
        <p>分享到：</p>
          <ul>
            <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2364754101,3807084153&fm=26&gp=0.jpg"></li>
            <li><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3912720973,3627926735&fm=26&gp=0.jpg"></li>
            <li><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2716092914,1740098833&fm=26&gp=0.jpg"></li>
            <li><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2584811240,193084535&fm=26&gp=0.jpg"></li>
          </ul>
          <span>微信</span><span>朋友圈</span><span>QQ</span><span>空间</span>
        </div>
      </mt-popup>
    </div>
</template>

<script>
  import { Indicator } from 'mint-ui';
  import axios from 'axios'
  import { Popup } from 'mint-ui';
  import Vue from 'vue'
  Vue.component(Popup.name, Popup);
    export default {
        name: "detail",
      data(){
          return{
            msg:[],
            popupVisible: false
          }
      },
      methods: {
          changeShowComp(){
            this.$store.commit('changeShow');
            this.$store.commit('scrollPosition');
          }
      },
      beforeCreate() {Indicator.open();},
      mounted() {
          axios.get(this.$store.state.url).then(res=>{
            this.msg = res.data;
            Indicator.close();
          }).catch(err=>{
            console.log("获取数据2失败！")
          })
      }
    }
</script>
<style scoped>
  .head{
    position: fixed;
    width: 100%;
    height: 1.333rem;
    background-color: rgba(250,250,250,0.8);
  }
.box{
  width: 100%;
  height: 5.867rem;
}
  .left{
    position: fixed;
    left: 0.267rem;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0.133rem;
  }
  .right{
    position: fixed;
    right: 0.267rem;
    width: 0.933rem;
    height: 0.933rem;
    margin: 0.133rem;
  }
.itemImg{
  width: 100%;
  height: 100%;
  margin-bottom: -0.267rem;
}
.itemP{
  width: 100%;
  height: 0.933rem;
  display: block;
  text-align: center;
  color: #000;
  font-size: 0.533rem;
  margin-top: 0.32rem;
}
.head span{
    position: fixed;
    top: 0;
    left: 42%;
    font-size: 0.533rem;
    margin-top: 0.267rem;

  }
  .share-box{
    width: 10rem;
    height: 3.467rem;
    background-color: rgba(255,255,255,0.5);
  }
  .share-box p{
    text-align: center;
    padding-top: 0.133rem;
  }
  .share-box ul li{
    float: left;
    padding: 0.267rem;
  }
  .share-box ul li img{
    width: 1.867rem;
    height: 1.333rem;
  }
  .share-box span{
    /*margin: 1.867rem;*/
    padding: 1.02rem;
  }
</style>
<style scoped>
  .body >>>
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section,
  summary {
    display: block;
  }

  .body >>>
  audio,
  canvas,
  video {
    display: inline-block;
  }

  .body >>>
  audio:not([controls]) {
    display: none;
    height: 0;
  }

  .body >>>
  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
  }

  .body >>>
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, Sans-serif;
    background: #fff;
    padding-top: 0;
    margin: 0;
  }

  .body >>>
  a:focus {
    outline: thin dotted;
  }

  .body >>>
  a:active,
  a:hover {
    outline: 0;
  }

  .body >>>
  h1 {
    margin: .67em 0;
  }

  .body >>>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 0.427rem;
  }

  .body >>>
  abbr[title] {
    border-bottom: 0.027rem dotted;
  }

  .body >>>
  hr {
    box-sizing: content-box;
    height: 0;
  }

  .body >>>
  mark {
    background: #ff0;
    color: #000;
  }

  .body >>>
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, serif;
    font-size: 1em;
  }

  .body >>>
  pre {
    white-space: pre-wrap;
  }

  .body >>>
  small {
    font-size: 80%;
  }

  .body >>>
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  .body >>>
  sup {
    top: -0.5em;
  }

  .body >>>
  sub {
    bottom: -0.25em;
  }

  .body >>>
  img {
    border: 0;
    vertical-align: middle;
    color: transparent;
    font-size: 0;
  }

  .body >>>
  svg:not(:root) {
    overflow: hidden;
  }

  .body >>>
  figure {
    margin: 0;
  }

  .body >>>
  fieldset {
    border: 0.027rem solid silver;
    margin: 0 0.053rem;
    padding: .35em .625em .75em;
  }

  .body >>>
  legend {
    border: 0;
    padding: 0;
  }

  .body >>>
  table {
    border-collapse: collapse;
    border-spacing: 0;
    overflow: hidden;
  }

  .body >>>
  a {
    text-decoration: none;
  }

  .body >>>
  blockquote {
    border-left: 0.08rem solid #D0E5F2;
    font-style: normal;
    display: block;
    vertical-align: baseline;
    font-size: 100%;
    margin: .5em 0;
    padding: 0 0 0 1em;
  }

  .body >>>
  ul,
  ol {
    padding-left: 0.533rem;
  }

  .body >>>
  .main-wrap {
    max-width: 100%;
    min-width: 8rem;
    margin: 0 auto;
  }

  .body >>>
  .content-wrap {
    overflow: hidden;
    background-color: #f9f9f9;
  }

  .body >>>
  .content-wrap a {
    word-break: break-all;
  }

  .body >>>
  .headline {
    border-bottom: 0.107rem solid #f6f6f6;
  }

  .body >>>
  .headline-title.onlyheading {
    margin: 0.533rem 0;
  }

  .body >>>
  .headline img {
    max-width: 100%;
    vertical-align: top;
  }

  .body >>>
  .headline-background-link {
    line-height: 2em;
    position: relative;
    display: block;
    padding: 0.533rem 1.2rem 0.533rem 0.533rem !important;
  }

  .body >>>
  .icon-arrow-right {
    position: absolute;
    top: 50%;
    right: 0.533rem;
    background-image: url(http://static.daily.zhihu.com/img/share-icons.png);
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    background-position: -1.867rem -0.533rem;
    width: 0.267rem;
    height: 0.4rem;
    margin-top: -0.2rem;
  }

  .body >>>
  .headline-background .heading {
    color: #999;
    font-size: 0.4rem !important;
    margin-bottom: 0.213rem;
    line-height: 1em;
  }

  .body >>>
  .headline-background .heading-content {
    color: #444;
    font-size: 0.453rem !important;
    line-height: 1.2em;
  }

  .body >>>
  .headline-title {
    line-height: 1.2em;
    color: #000;
    font-size: 0.587rem;
    margin: 0.533rem 0 0.267rem;
    padding: 0 0.533rem !important;
    font-weight: bold;
  }

  .body >>>
  .meta {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.427rem;
    color: #b8b8b8;
  }

  .body >>>
  .meta .source-icon {
    width: 0.533rem;
    height: 0.533rem;
    margin-right: 0.107rem;
  }

  .body >>>
  .meta .time {
    float: right;
    margin-top: 0.053rem;
  }

  .body >>>
  .content {
    color: #444;
    line-height: 1.6em;
    font-size: 0.453rem;
    margin: 0.267rem 0 0.533rem;
  }

  .body >>>
  .content img {
    max-width: 100%;
    display: block;
    margin: 0.8rem auto;
  }

  .body >>>
  .content img + img {
    margin-top: 0.4rem;
  }

  .body >>>
  .content img[src*="zhihu.com/equation"] {
    display: inline-block;
    margin: 0 0.08rem;
  }

  .body >>>
  .content a {
    color: #259;
  }

  .body >>>
  .content a:hover {
    text-decoration: underline;
  }

  .body >>>
  .view-more {
    margin-bottom: 0.667rem;
    text-align: center;
  }

  .body >>>
  .view-more a {
    font-size: 0.427rem;
    display: inline-block;
    width: 3.333rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #f0f0f0;
    color: #B8B8B8;
  }

  .body >>>
  .question {
    overflow: hidden;
    padding: 0 0.533rem !important;
  }

  .body >>>
  .question + .question {
    border-top: 0.133rem solid #f6f6f6;
  }

  .body >>>
  .question-title {
    line-height: 1.4em;
    color: #000;
    font-weight: 700;
    font-size: 0.48rem;
    margin: 0.533rem 0;
  }

  .body >>>
  .meta .author {
    color: #444;
    font-weight: 700;
  }

  .body >>>
  .answer + .answer {
    border-top: 0.053rem solid #f6f6f6;
    padding-top: 0.533rem;
  }

  .body >>>
  .footer {
    text-align: center;
    color: #b8b8b8;
    font-size: 0.347rem;
    padding: 0.533rem 0;
  }

  .body >>>
  .footer a {
    color: #b8b8b8;
  }

  .body >>>
  .question .view-more a {
    width: 100%;
    display: block;
  }

  .body >>>
  .hot-comment {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  .body >>>
  .comment-label {
    font-size: 0.427rem;
    color: #333;
    line-height: 1.5em;
    font-weight: 700;
    border-top: 0.027rem solid #eee;
    border-bottom: 0.027rem solid #eee;
    margin: 0;
    padding: 0.24rem 0.533rem;
  }

  .body >>>
  .comment-list {
    margin-bottom: 0.533rem;
  }

  .body >>>
  .comment-item {
    font-size: 0.4rem;
    color: #666;
    border-bottom: 0.027rem solid #eee;
    padding: 0.4rem 0.533rem;
  }

  .body >>>
  .comment-meta {
    position: relative;
    margin-bottom: 0.267rem;
  }

  .body >>>
  .comment-meta .author {
    vertical-align: middle;
    color: #444;
  }

  .body >>>
  .comment-meta .vote {
    position: absolute;
    color: #b8b8b8;
    font-size: 0.32rem;
    right: 0;
  }

  .body >>>
  .night .comment-label {
    color: #b8b8b8;
    border-top: 0.027rem solid #303030;
    border-bottom: 0.027rem solid #303030;
  }

  .body >>>
  .night .comment-item {
    color: #7f7f7f;
    border-bottom: 0.027rem solid #303030;
  }

  .body >>>
  .icon-vote,
  .icon-voted {
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: 0;
    width: 0.293rem;
    height: 0.32rem;
    margin-right: 0.107rem;
    background-image: url(http://static.daily.zhihu.com/img/app/Comment_Vote.png) !important;
  }

  .body >>>
  .icon-voted {
    background-image: url(http://static.daily.zhihu.com/img/app/Comment_Voted.png) !important;
  }

  .body >>>
  .night .icon-vote {
    background-image: url(http://static.daily.zhihu.com/img/app/Dark_Comment_Vote.png) !important;
  }

  .body >>>
  .img-wrap .headline-title {
    bottom: 0.133rem;
  }

  .body >>>
  .img-wrap .img-source {
    right: 0.267rem !important;
    font-size: 0.24rem;
  }

  .body >>>
  .global-header {
    position: static;
  }

  .body >>>
  .button {
    width: 1.6rem;
  }

  .body >>>
  .button i {
    margin-right: 0;
  }

  .body >>>
  .headline .img-place-holder {
    height: 1.653rem;
  }

  .body >>>
  .from-column {
    width: 7.467rem;
    line-height: 0.8rem;
    height: 0.8rem;
    padding-left: 2.4rem;
    color: #2aacec;
    background-image: url(http://static.daily.zhihu.com/img/News_Column_Entrance.png);
    box-sizing: border-box;
    margin: 0 0.533rem 0.533rem;
  }

  .body >>>
  .from-column:active {
    background-image: url(http://static.daily.zhihu.com/img/News_Column_Entrance_Highlight.png);
  }

  .body >>>
  .night .headline {
    border-bottom: 0.107rem solid #303030;
  }

  .body >>>
  .night img {
    -webkit-mask-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7)));
  }

  .body >>>
  body.night,
  .night .content-wrap {
    background: #343434;
  }

  .body >>>
  .night .answer + .answer {
    border-top: 0.053rem solid #303030;
  }

  .body >>>
  .night .question + .question {
    border-top: 0.107rem solid #303030;
  }

  .body >>>
  .night .view-more a {
    background: #292929;
    color: #666;
  }

  .body >>>
  .night .icon-arrow-right {
    background-image: url(http://static.daily.zhihu.com/img/share-icons.png);
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    background-position: -1.867rem -0.933rem;
    width: 0.267rem;
    height: 0.4rem;
  }

  .body >>>
  .night blockquote,
  .night sup {
    border-left: 0.08rem solid #666;
  }

  .body >>>
  .night .content a {
    color: #698ebf;
  }

  .body >>>
  .night .from-column {
    color: #2b82ac;
    background-image: url(http://static.daily.zhihu.com/img/Dark_News_Column_Entrance.png);
  }

  .body >>>
  .night .from-column:active {
    background-image: url(http://static.daily.zhihu.com/img/Dark_News_Column_Entrance_Highlight.png);
  }

  .body >>>
  .large .question-title {
    font-size: 0.64rem;
  }

  .body >>>
  .large .meta {
    font-size: 0.48rem;
  }

  .body >>>
  .large .content {
    font-size: 0.533rem;
  }

  .body >>>
  .large blockquote,
  .large sup {
    line-height: 1.6;
  }

  .body >>>
  .meta .meta-item {
    -o-text-overflow: ellipsis;
    width: 39%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    color: #929292;
    margin-right: 0.187rem;
  }

  .body >>>
  .headline .meta {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.293rem;
    color: #b8b8b8;
    margin: 0.4rem 0;
    padding: 0 0.533rem;
  }

  .body >>>
  .headline .meta a,
  .headline .meta a:hover {
    padding-left: 1em;
    margin-top: 0.053rem;
    float: right;
    font-size: 0.293rem;
    color: #0066cf;
    text-decoration: none;
  }

  .body >>>
  .highlight {
    width: auto;
    overflow: auto;
    word-wrap: normal;
  }

  .body >>>
  .highlight::-webkit-scrollbar {
    width: 0.16rem;
    height: 0.16rem;
  }

  .body >>>
  .highlight code {
    overflow: auto;
  }

  .body >>>
  .highlight::-webkit-scrollbar-thumb:horizontal {
    border-radius: 0.16rem;
    background-color: rgba(0, 0, 0, .5);
  }

  .body >>>
  .highlight::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: rgba(0, 0, 0, .6);
  }

  .body >>>
  .highlight pre {
    margin: 0;
    white-space: pre;
  }

  .body >>>
  .highlight .hll {
    background-color: #ffc;
  }

  .body >>>
  .highlight .err {
    color: #a61717;
    background-color: #e3d2d2;
  }

  .body >>>
  .highlight .cp {
    color: #999;
    font-weight: 700;
  }

  .body >>>
  .highlight .cs {
    color: #999;
    font-weight: 700;
    font-style: italic;
  }

  .body >>>
  .highlight .gd {
    color: #000;
    background-color: #fdd;
  }

  .body >>>
  .highlight .gi {
    color: #000;
    background-color: #dfd;
  }

  .body >>>
  .highlight .gu {
    color: #aaa;
  }

  .body >>>
  .highlight .ni {
    color: purple;
  }

  .body >>>
  .highlight .nt {
    color: navy;
  }

  .body >>>
  .highlight .w {
    color: #bbb;
  }

  .body >>>
  .highlight .sr {
    color: olive;
  }

  .body >>>
  [hidden],
  .button span {
    display: none;
  }

  .body >>>
  b,
  strong,
  .highlight .k,
  .highlight .o,
  .highlight .gs,
  .highlight .kc,
  .highlight .kd,
  .highlight .kn,
  .highlight .kp,
  .highlight .kr,
  .highlight .ow {
    font-weight: 700;
  }

  .body >>>
  dfn,
  .highlight .ge {
    font-style: italic;
  }

  .body >>>
  .meta span,
  .meta .source {
    vertical-align: middle;
  }

  .body >>>
  .meta .avatar,
  .comment-meta .avatar {
    width: 0.533rem;
    height: 0.533rem;
    border-radius: 0.053rem;
    margin-right: 0.133rem;
  }

  .body >>>
  .meta .bio,
  .highlight .gh,
  .highlight .bp {
    color: #999;
  }

  .body >>>
  .night .comment-meta .author,
  .night .content,
  .night .meta .author,
  .highlight .go {
    color: #888;
  }

  .body >>>
  .night .headline-title,
  .night .headline-background .heading-content,
  .night .question-title {
    color: #B8B8B8;
  }

  .body >>>
  .highlight .c,
  .highlight .cm,
  .highlight .c1 {
    color: #998;
    font-style: italic;
  }

  .body >>>
  .highlight .gr,
  .highlight .gt {
    color: #a00;
  }

  .body >>>
  .highlight .gp,
  .highlight .nn {
    color: #555;
  }

  .body >>>
  .highlight .kt,
  .highlight .nc {
    color: #458;
    font-weight: 700;
  }

  .body >>>
  .highlight .m,
  .highlight .mf,
  .highlight .mh,
  .highlight .mi,
  .highlight .mo,
  .highlight .il {
    color: #099;
  }

  .body >>>
  .highlight .s,
  .highlight .sb,
  .highlight .sc,
  .highlight .sd,
  .highlight .s2,
  .highlight .se,
  .highlight .sh,
  .highlight .si,
  .highlight .sx,
  .highlight .s1,
  .highlight .ss {
    color: #d32;
  }

  .body >>>
  .highlight .na,
  .highlight .nb,
  .highlight .no,
  .highlight .nv,
  .highlight .vc,
  .highlight .vg,
  .highlight .vi {
    color: teal;
  }

  .body >>>
  .highlight .ne,
  .highlight .nf {
    color: #900;
    font-weight: 700;
  }

  .body >>>
  .answer h1,
  .answer h2,
  .answer h3,
  .answer h4,
  .answer h5 {
    font-size: 0.507rem;
  }

  .body >>>
  .meta .meta-item {
    width: 39%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    color: #929292;
    margin-right: 0.187rem;
  }

  .body >>>
  .headline .meta {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.293rem;
    color: #b8b8b8;
    margin: 0.533rem 0;
    padding: 0 0.533rem;
  }

  .body >>>
  .headline .meta a,
  .headline .meta a:hover {
    margin-top: 0.053rem;
    float: right;
    font-size: 0.293rem;
    color: #0066cf;
    text-decoration: none;
  }

  .body >>>
  .answer h1,
  .answer h2,
  .answer h3,
  .answer h4,
  .answer h5 {
    font-size: 0.507rem;
  }

  .body >>>
  .origin-source,
  a.origin-source:link {
    display: block;
    margin: 0.667rem 0;
    height: 1.333rem;
    overflow: hidden;
    background: #f0f0f0;
    color: #888;
    position: relative;
    -webkit-touch-callout: none;
  }

  .body >>>
  .origin-source .source-logo,
  a.origin-source:link .source-logo {
    float: left;
    width: 1.333rem;
    height: 1.333rem;
    margin-right: 0.267rem;
  }

  .body >>>
  .origin-source .text,
  a.origin-source:link .text {
    line-height: 1.333rem;
    height: 1.333rem;
    font-size: 0.347rem;
  }

  .body >>>
  .origin-source.with-link .text {
    color: #333;
  }

  .body >>>
  .origin-source.with-link:after {
    display: block;
    position: absolute;
    border-color: transparent transparent transparent #f0f0f0;
    border-width: 0.187rem;
    border-style: solid;
    height: 0;
    width: 0;
    top: 0.48rem;
    right: 0.107rem;
    line-height: 0;
    content: "";
  }

  .body >>>
  .origin-source.with-link:before {
    display: block;
    height: 0;
    width: 0;
    position: absolute;
    top: 0.48rem;
    right: 0.08rem;
    border-color: transparent transparent transparent #000;
    border-width: 0.187rem;
    border-style: solid;
    line-height: 0;
    content: "";
  }

  .body >>>
  .origin-source-wrap {
    position: relative;
    background: #f0f0f0;
  }

  .body >>>
  .origin-source-wrap .focus-link {
    position: absolute;
    right: 0;
    top: 0;
    width: 1.2rem;
    color: #00a2ed;
    height: 1.333rem;
    display: none;
    text-align: center;
    font-size: 0.32rem;
    -webkit-touch-callout: none;
  }

  .body >>>
  .origin-source-wrap .focus-link .btn-label {
    text-align: center;
    display: block;
    margin-top: 0.213rem;
    border-left: solid 0.027rem #ccc;
    height: 0.907rem;
    line-height: 0.907rem;
  }

  .body >>>
  .origin-source-wrap.unfocused .focus-link {
    display: block;
  }

  .body >>>
  .origin-source-wrap.unfocused .origin-source:before,
  .origin-source-wrap.unfocused .origin-source:after {
    display: none;
  }

  .body >>>
  .night .origin-source-wrap {
    background: #292929;
  }

  .body >>>
  .night .origin-source-wrap .focus-link {
    color: #116f9e;
  }

  .body >>>
  .night .origin-source-wrap .btn-label {
    border-left: solid 0.027rem #3f3f3f;
  }

  .body >>>
  .night .origin-source,
  .night .origin-source.with-link {
    background: #292929;
    color: #666;
  }

  .body >>>
  .night .origin-source .text,
  .night .origin-source.with-link .text {
    color: #666;
  }

  .body >>>
  .night .origin-source.with-link:after {
    border-color: transparent transparent transparent #292929;
  }

  .body >>>
  .night .origin-source.with-link:before {
    border-color: transparent transparent transparent #666;
  }

  .body >>>
    /* ==== */
  .question-title {
    color: #494b4d;
  }

  .body >>>
  blockquote {
    color: #9da3a6;
    border-left: 0.08rem solid #Dfe3e6;
  }

  .body >>>
  .content a {
    color: #4786b3;
  }

  .body >>>
  .content {
    font-size: 0.453rem;
    color: #616466;
  }

  .body >>>
  .content-wrap {
    background: #fff;
  }

  .body >>>
  hr {
    margin: 0.8rem 0;
    border-top-width: 0;
  }

  .body >>>
  p {
    margin: 0.533rem 0 !important;
  }

  .body >>>
  .dudu-night .content {
    color: #797b80;
  }

  .body >>>
  .dudu-night hr {
    color: #27282b;
    border-color: #27282b;
  }

  .body >>>
  .dudu-night .meta .author,
  .dudu-night .meta .bio {
    color: #555659;
  }

  .body >>>
  .dudu-night .headline-title,
  .dudu-night .headline-background .heading-content,
  .dudu-night .question-title {
    color: #919499;
  }

  .body >>>
  .dudu-night .headline {
    border-bottom: none;
  }

  .body >>>
  .dudu-night img {
    -webkit-mask-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.7)));
  }

  .body >>>
  body.dudu-night,
  .dudu-night .content-wrap {
    background: #1d1e1f;
  }

  .body >>>
  .dudu-night .answer + .answer {
    border-top: 0.053rem solid #27282b;
  }

  .body >>>
  .dudu-night .question + .question {
    border-top: 0.107rem solid #27282b;
  }

  .body >>>
  .dudu-night .view-more a {
    background: #1d1e1f;
    color: #396280;
  }

  .body >>>
  .dudu-night .icon-arrow-right {
    background-image: url(http://static.daily.zhihu.com/img/share-icons.png);
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: middle;
    background-position: -1.867rem -0.933rem;
    width: 0.267rem;
    height: 0.4rem;
  }

  .body >>>
  .dudu-night blockquote,
  .dudu-night sup {
    border-left: 0.08rem solid #2e3033;
    color: #555659;
  }

  .body >>>
  .dudu-night .content a {
    color: #396280;
  }

  .body >>>
  .dudu-night img {
    opacity: 0.7;
  }

  .body >>>
  .dudu-night .from-column {
    color: #2b82ac;
    background-image: url(http://static.daily.zhihu.com/img/Dark_News_Column_Entrance.png);
  }

  .body >>>
  .dudu-night .from-column:active {
    background-image: url(http://static.daily.zhihu.com/img/Dark_News_Column_Entrance_Highlight.png);
  }

  .body >>>
  .dudu .headline {
    border-bottom: none;
  }

  .body >>>
  .dudu-night .origin-source,
  .dudu-night a.origin-source:link {
    background: #222324;
  }

  .body >>>
  .dudu-night .origin-source.with-link .text {
    color: #797b80;
  }

  .body >>>
  .dudu-night .origin-source.with-link:after {
    border-color: transparent transparent transparent #797b80;
  }

</style>
