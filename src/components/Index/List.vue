<template>
<div id="app-list">
   <div class="box">
    <div class="beijing"><img src="../../img/beijing.png">
    </div>
    <div class="title">订单列表</div>
    <ul class="content">
        <li class="items">
            <div class="list">运单号：<span>10216359874</span></div>
            <div class="list">下单时间：<span>2019-5-11 15:59</span></div>
            <div class="list last">发货状态：<span>待揽件</span></div>
            <div class="tab"><router-link class="router" to="/Info">查看详情</router-link></div>
        </li>
        <li class="items">
                <div class="list">运单号：<span>10216359354</span></div>
                <div class="list">下单时间：<span>2019-5-10 09:59</span></div>
                <div class="list last">发货状态：<span>待收货</span></div>
                <div class="tab"><router-link class="router" to="/Info">查看详情</router-link></div>
        </li>
        <li class="items">
            <div class="list">运单号：<span>10216359682</span></div>
            <div class="list">下单时间：<span>2019-5-9 11:23</span></div>
            <div class="list last">发货状态：<span>已完成</span></div>
            <div class="tab"><router-link class="router" to="/Info">查看详情</router-link></div>
        </li>
        <li class="items">
            <div class="list">运单号：<span>10216356358</span></div>
            <div class="list">下单时间：<span>2019-5-7 11:23</span></div>
            <div class="list last">发货状态：<span>已完成</span></div>
            <div class="tab"><router-link class="router" to="/Info">查看详情</router-link></div>
        </li>
    </ul>
    <div style="clear:both;"></div>
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
#app-list{
    padding:0;
    width:100%;
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
    overflow:auto;
    list-style: none;
    width:94%;
    margin:-10vw auto 3rem;} 
.items{
    color:#575757;
    margin-bottom:1rem;
    position: relative;
    background:#fff;
    border-radius: 10px;
    padding:1rem 0 1rem;
    width:100%;}
.list>span{
    text-decoration: none;
    color:#575757;}
.list{
    font-size:1.2rem;
    height:2.4rem;
    line-height: 2.4rem;
    border-bottom:1px solid #cdcdcd;
    margin:0.2rem auto 0.3rem;
    width:90%;}
.tab{
    font-size:1.2rem;
    position: absolute;
    bottom:1.3rem;
    height:2.4rem;
    line-height:2.4rem;
    right:5%;}
.router{
    text-decoration: none;
    color:#fbc013;}
</style>