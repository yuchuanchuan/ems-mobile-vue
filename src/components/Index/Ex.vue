<template>
<div id="app-login">
  <div class="box">
          <div class="beijing"><img src="../../img/beijing.png"></div>
          <div class="title">使用步骤</div>
      <div class="content">
      </div>
      <button class="tab" @click="jump">已了解</button>
  </div>
</div> 
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    jump(e){
      this.$router.push("/Index")
        }
  }
}
</script>
<style scoped>
*{
    box-sizing:border-box;
    padding:0;
    margin:0;}
html,body{
    width:100%;
    background:#f2f2f2;}
.box{ 
    position: relative;
    width:100%;}
.beijing{width:100%;}
.beijing>img{width:100%;}
.title{
    font-size:7vw;
    color:#fff;
    width:100%;
    text-align: center;
    position: absolute;
    top:12vw;}
.content{
    width:94%;
    padding:1rem;
    background:#fff;
    border-radius: 15px;
    position: relative;
    min-height:70vh;
    margin:-10vw auto 2rem;}
.tab{
    width:26%;
    margin-left:37%;
    border:none;
    outline: none;
    border-radius: 20px;
    background:#1ab9ff;
    color:#fff;
    margin-bottom:3rem;
    line-height:10vw;
    height:10vw;
    font-size:5vw;}
.content>img{
    width:100%;}
.content>video{
    width:100%;}
</style>