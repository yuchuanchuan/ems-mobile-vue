<template>
  <div class="content">
    <div class="logo"><img src="../../img/logo.png"></div> 
    <div class="tongzhi">
        <img src="../../img/tongzhi.png">
        <span>快递通知：</span>
        <div class="scroll_area">
        <div class="content">
          <div class="scrolltxt">
            <div class="font" @click="a">您的快递您的快递您的快递</div>
          </div>
        </div>
        </div>
    </div> 
    <div class="zixun">
        <div>
            <div><img src="../../img/youji.png"></div>
            <div class="tab"><router-link to="/Sub">邮寄</router-link></div>
        </div>
        <div>
            <div><img src="../../img/chaxun.png"></div>
            <div class="tab"><router-link to="/List">查询</router-link></div>
        </div>
    </div>  
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted(){
    this.a();
  },
  methods:{
    a(){
	function fun(){
		$('.scrolltxt').css('left',"100%");
		var font = $(window).width()/100*5;
		var width = $('.font').text().length*font;
		var sudu;
		if($('.font').text().length<10){
			sudu=10000
		}else{
			sudu=20000
		};
		$(".scrolltxt").width(width)
		$('.scrolltxt').animate({left:'-'+width+'px'},sudu,function(){
			setTimeout(fun,500)
		})
	}
  fun();
}
  }
}
</script>
<style scoped>
html{
  padding:0;
  margin:0;}
.content{
    padding:0;
    margin:0;
    width:100%;}
*{
    box-sizing:border-box;
    padding:0;
    margin:0;}
.logo{width:100%;}
.logo>img{width:100%;}
.tongzhi{
    margin:4vw auto 4vw;
    display:flex;
    align-items: center;
    width:88%;}
.tongzhi>img{width:10%;}
.tongzhi>span{
    font-size:4vw;
    margin:0 4%;}
.scroll_area{
    width:48vw;
    margin:0 auto;}
.scroll_area .content{
    overflow:hidden;
    position:relative;
    color:#666;
    height:50px;
    width:48vw;
    line-height:50px;}
.scroll_area .scrolltxt{
    position:absolute;
    width:48vw;
    top:0;
    white-space:nowrap;}
.scroll_area .scrolltxt div{
    font-size:3.5vw;
    width:48vw;
    display:inline-block;}
.zixun{
    width:88%;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
}
.zixun>div{
    display:flex;
    flex-direction: column;
    align-items: center;
    background:#f2f2f2;
    border-radius: 20px;
    width:45%;}
.zixun>div>div{
    margin-top:4vw;
    width:80%;}
.zixun>div>.tab{
    height:2rem;
    line-height: 2rem;
    width:70%;
    font-size:1.2rem;
    background:#0fbbff;
    text-align:center;
    border-radius: 5px;
    margin:6vw 0;}
.zixun>div>.tab>a{
    display:block;
    text-decoration:none;
    color:#fff;}
.zixun>div>div>img{
    width:100%;}
</style>