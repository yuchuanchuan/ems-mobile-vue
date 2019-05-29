<template>
<div id="app-info">
  <div class="box">
        <div class="beijing"><img src="../../img/beijing.png"></div>
        <div class="title">订单信息</div>
    <div class="content">
        <div class="info">
            <div class="num">运单号：&nbsp;10010010000</div>
            <div class="info-xi">
                <div class="info-img"><img src="../../img/info-img.png"></div>
                <div class="info-item">
                    <div>收件人：&nbsp;<span>张三</span></div>
                    <div>手机号：&nbsp;<span>15222222222</span></div> 
                    <div>文件类型：&nbsp;<span>房本</span></div>
                    <div>收货地址：&nbsp;<span>天津市南开区海泰信息广场</span></div>
                    <div>下单时间：&nbsp;<span>2019-5-11 15:59</span></div>
                </div>
            </div>
        </div>
        <div class="info-bf">
            <div class="info-box active">
                <div class="info-box-left">
                    <div class="info-left-title">已签收</div>
                    <div class="kuai"></div>
                </div>
                <div class="info-box-right">
                    <div class="info-time">2019-5-13 12:05</div> 
                    <div class="info-title">已签收，感谢使用，期待再次为您服务</div>
                </div>
            </div> 
            <div class="info-box">
                <div class="info-box-left">
                    <div class="info-left-title">正在派件</div>
                    <div class="kuai"></div>
                </div>
                <div class="info-box-right">
                    <div class="info-time">2019-5-13 11:35</div> 
                    <div class="info-title">快件交给刘舟山，正在派送途中</div>
                </div>
            </div>
            <div class="info-box">
                <div class="info-box-left">
                    <div class="info-left-title">运送中</div>
                    <div class="kuai"></div>
                </div>
                <div class="info-box-right">
                    <div class="info-time">2019-5-13 9:48</div> 
                    <div class="info-title">快件到达【海泰信息广场营业点】</div>
                </div>
            </div>
            <div class="info-box">
                <div class="info-box-left">
                    <div class="info-left-title">运送中</div>
                    <div class="kuai"></div>
                </div>
                <div class="info-box-right">
                    <div class="info-time">2019-5-13 8:26</div> 
                    <div class="info-title">快件已发车</div>
                </div>
            </div>
            <div class="info-box">
                <div class="info-box-left">
                    <div class="info-left-title">运送中</div>
                    <div class="kuai"></div>
                </div>
                <div class="info-box-right">
                    <div class="info-time">2019-5-13 6:21</div> 
                    <div class="info-title">快件在【天津市南开区集散中心】已装车，准备发送海泰信息广场营业点</div>
                </div>
            </div>
            <div class="info-box">
                <div class="info-box-left">
                    <div class="info-left-title">运送中</div>
                    <div class="kuai"></div>
                </div>
                <div class="info-box-right">
                    <div class="info-time">2019-5-12 21:05</div> 
                    <div class="info-title">快件送达【天津市南开区集散中心】</div>
                </div>
            </div>
            <div class="info-box">
                <div class="info-box-left">
                    <div class="info-left-title">运送中</div>
                    <div class="kuai"></div>
                </div>
                <div class="info-box-right">
                    <div class="info-time">2019-5-11 19:15</div> 
                    <div class="info-title">快件已发车</div>
                </div>
            </div>
            <div class="info-box">
                <div class="info-box-left">
                    <div class="info-left-title">运送中</div>
                    <div class="kuai"></div>
                </div>
                <div class="info-box-right">
                    <div class="info-time">2019-5-11 18:45</div> 
                    <div class="info-title">快件在【河北省石家庄市西桥区营业点】已装车，准备发往下一站</div>
                </div>
            </div>
            <div class="info-box">
                <div class="info-box-left">
                    <div class="info-left-title">已揽收</div>
                    <div class="kuai"></div>
                </div>
                <div class="info-box-right">
                    <div class="info-time">2019-5-11 15:59</div> 
                    <div class="info-title">已收取快件</div>
                </div>
            </div>
        </div>
    </div>
    </div>
</div> 
</template>
<script>
export default {
  data () {
    return {
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
    overflow:auto;
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
    margin:-10vw auto 3rem;}
.info{
    margin-bottom:2rem;
    padding:1rem 0 1rem;
    width:100%;
    border-radius: 10px;
    position: relative;
    background:#fff;}
.info>div{
    margin:0 auto;
    width:90%;}
.info .num{
    padding-bottom:0.5rem;
    margin:0.2rem auto 0;
    border-bottom:1px solid #cdcdcd;}
.info-xi{
    display:flex;
    align-items: center;}
.info .info-img{
    margin-right:1rem;
    width:20%;}
.info .info-img>img{
    margin:0;
    padding:0;
    display: block;
    border:2px solid #cccccc;
    border-radius: 50%;
    width:100%;}
.info-item>div{
    color:#595959;
    margin:0.2rem 0;
    font-size:4vw;}
.info-box{
    padding-top:1vw;
    position: relative;
    display:flex;}
.info-box-left{
    display:flex;
    height:6rem;
    border-right:1px dashed #333;
    width:35%;
    position: relative;}
.info-box:last-child .info-box-left{border-right: none !important;}
.info-left-title{
    position: absolute;
    top:-0.3rem;
    color:#595959;
    font-size:1rem;
    width:70%;
    justify-content: flex-end;
    display:flex;}
.info-box-right{
    margin:2vw;
    width:65%;}
.kuai{
    position: absolute;
    right:-0.3rem;
    width:0;
    height:0;
    transform: rotate(45deg);
    border:0.3rem solid #666;}
.info-box-right{
    padding:1vw 1vw;}
.info-time{
    color:#333333;
    position: absolute;
    top:-0.5vw;}
.info-item span{
    color:#595959;
    text-decoration: none;}
.info-title{
    color:#999;
    position: absolute;
    top:4vw;}
.active>div>.info-left-title{color:#ff0101 !important;}
.active>div>.kuai{border:0.3rem solid #ff0101 !important;}
</style>