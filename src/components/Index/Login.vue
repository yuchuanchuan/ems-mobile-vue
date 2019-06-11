<template>
<div id="app-login">
    <div class="logo"><img src="../../img/logo.png"></div>
<div class="myinput">
    <div class="input-title phone">手机号</div>
    <div>
        <input placeholder="输入手机号" class="input-item" style="width:50vw;" v-model="loginForm.phone">
    </div>
</div>
<div class="myinput">
    <div class="input-title">短信验证码</div>
    <div class="yanzheng">
        <input placeholder="短信验证码" class="input-item" v-model="loginForm.mobileCode">
    </div>
    <div class="huoqu">
        <span v-show="show" @click="getCode" class="count1">点击获取</span>
        <span v-show="!show" class="count2">{{count}} s</span>
    </div> 
</div>
<div class="login">
    <a @click.prevent="login">登录</a>
</div>
<div class="vx">微信授权登录</div>
<a href="#" class="vx-img" @click="weChatLogin"><img src="../../img/weixin.png"></a>
</div>
</template>
<script>
export default {
  data () {
    return {
      loginForm:{
        phone: '',
        mobileCode: ''
      },
      show: true,
      count: '',
      timer: null,
    }
  },
  methods:{
  getCode(){
     const TIME_COUNT = 60;
     if (!this.timer) {
       this.count = TIME_COUNT;
       this.show = false;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {
         this.count--;
        } else {
         this.show = true;
         clearInterval(this.timer);
         this.timer = null;
        }
       }, 1000)
      }
   },
    sendMsg(){
      this.$http({
        url: this.$http.adornUrl('/sendMsg'),
        method: 'get',
        params: this.$http.adornParams({
          'phone': this.loginForm.phone
        })
      }).then(({ data }) => {
        if (data && data.code === 0) {
          // success
        } else {
          console.log(data.msg)
          // this.$message.error(data.msg)
          // error
        }
      })
    },
    login(){
      this.$http({
        url: this.$http.adornUrl('/login'),
        method: 'post',
        data: this.$http.adornData(this.loginForm)
      }).then(({ data }) => {
        console.log("登录成功")
        console.log(data)
        if (data && data.code === 0) {
          this.$cookie.set('token', data.data)
          // this.$route
          this.$router.push({ path:'/Index'})
        } else {
          console.log(data.msg)
        }
      }).catch((err)=>{
        alert("请输入正确的手机号或验证码")
      })
    },
    weChatLogin(){
      let index = 'http://ems.jujinkeji.net/mobile/Index'
      location.href = 'http://ems.jujinkeji.net/mobile-ems/wechat/authorize?returnUrl=' + index
      // this.$http({
      //   url: this.$http.adornUrl('/wechat/authorize'),
      //   method: 'get',
      //   params: this.$http.adornParams({
      //     'returnUrl': 'http://ems.jujinkeji.net'
      //   })
      // }).then(({ data }) => {
      //   if (data && data.code === 0) {
      //     // success
      //   } else {
      //     console.log(data.msg)
      //     // this.$message.error(data.msg)
      //     // error
      //   }
      // }).catch(()=>{
      //   console.log("网络异常，请稍后重试...")
      // })
    }
  },
  // created(){
  //   console.log("------------")
  //   console.log(this.$route.params)
  // }
}
</script>
<style scoped>
*{
    box-sizing:border-box;
    padding:0;
    margin:0;}
body{background:#fff;}
.logo{
    margin-bottom:2rem;
    width:100%;}
.logo>img{width:100%;}
.myinput{
    position: relative;
    padding-bottom:0.5rem;
    border-bottom:1px solid #cdcdcd;
    background:transparent;
    display:flex;
    align-items: center;
    margin:0 auto 1rem;
    width:80vw;}
.input-item{
    border-radius: 10px;
    padding-left: 5vw;
    height:8vw;
    font-size:3.5vw;
    line-height: 8vw;
    outline: none;
    border:none;}
.input-title{
    font-size:4.5vw;
    line-height: 8vw;
    height:8vw;
    width:30vw;}
.yanzheng{width:30%;}
.yanzheng>input{width:100%;}
.huoqu{
    display:flex;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    height:2rem;
    background:#cdcdcd;
    width:30%;
    position: absolute;
   left:70%;}
.huoqu>a{
    display: block;
    width:100%;
    text-align:center;
    color:#fff;
    text-decoration: none;}
.login{
    background:#1bb9ff;
    border-radius:30px;
    height:3rem;
    margin:8vw auto 0;
    width:80%;}
.login>a{
    text-decoration: none;
    display: block;
    width:100%;
    height:3rem;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:1.2rem;
    font-weight:bold;
    color:#fff;}
.vx{
    font-size: 1rem;
    color:#959595;
    text-align:center;
    margin:8vw 0 1rem;}
.vx-img{
    display: block;
    margin:0 auto;
    width:12%;}
.vx-img>img{width:100%;}
.huoqu{
    display:flex;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    height:2rem;
    background:#cdcdcd;
    width:30%;
    position: absolute;
    left:70%;}
.count2{
    display:flex;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    height:2rem;
    background:#cdcdcd;
    width:30%;
    justify-content: center;
    width:100%;
    text-align:center;
    color:#fff;
    align-items: center;
    text-decoration: none;}
.count1{
    display:flex;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    height:2rem;
    background:#1bb9ff;
    width:30%;
    justify-content: center;
    width:100%;
    text-align:center;
    align-items: center;
    color:#fff;
    text-decoration: none;}

</style>
