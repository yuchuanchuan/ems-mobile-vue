<template>
  <div id="app-sub">
    <div class="hidden"></div>
    <div class="box">
      <div class="beijing"><img src="../../img/beijing.png"></div>
      <div class="title">提交信息</div>
      <div class="content">
        <div class="content-item">
          <div class="shoujian">收件人</div>
          <div class="img"><img src="../../img/uname.png"> </div>
          <div class="info">
            <div class="item">
              <div class="info-left">姓名：</div>
              <div class="info-right"><input type="text" placeholder="输入您的姓名" v-model="dataForm.name" class="uname" @blur.prevent="changeName()"></div>
            </div>
            <div class="item">
              <div class="info-left">身份证号：</div>
              <div class="info-right"><input type="text" placeholder="输入您的身份证号" v-model="dataForm.idCard" class="uid" @blur.prevent="changeId()"></div>
            </div>
            <div class="item">
              <div class="info-left">手机号：</div>
              <div class="info-right"><input type="text" placeholder="输入您的手机号" v-model="dataForm.phone" class="uphone" @input="changePhone()"></div>
            </div>
            <div class="item">
              <div class="info-left"> </div>
              <div class="info-right"><input style="width:20vw" type="text" v-model="dataForm.mobileCode"></div>
              <button class="btn">
                <span class="count3">点击获取</span>
                <span @click="getCode" class="count1">点击获取</span>
                <span class="count2">{{count}} s</span>
              </button>
            </div>
          </div>
        </div>
        <div class="content-items">
          <div>
            <div class="flexz">产权人身份证正面</div>
            <div>
              <input type="file" name="file" ref="closeUp" accept="image" class="myfile file1"/>
            </div>
            <div class="myimg img1"></div>
          </div>
          <div>
            <div class="flexz">产权人身份证反面</div>
            <div>
              <input type="file" name="file" ref="closeUp" accept="image" class="myfile file2"/>
            </div>
            <div class="myimg img2"></div>
          </div>
        </div>
        <div class="content-items">
          <div>
            <div class="flexz">房管局受理凭证</div>
            <div>
              <input type="file" name="file" ref="closeUp" accept="image" class="myfile file3"/>
            </div>
            <div class="myimg img3"></div>
          </div>
        </div>
        <div class="emil">
          <div>邮寄类型 &nbsp;</div>
          <select v-model="dataForm.postType">
            <option v-for="(item,index) in postTypes" :key="index" :value="item.id">{{item.value}}</option>
          </select>
        </div>
        <div class="ji">
          <div class="btn-t">是否投递保险
            <img class="kai" src="../../img/i.png"></div>
          <div class="btn1">
            <div class="round" data="0"></div>
          </div>
        </div>
        <form class="hide-box" data-zt="0">
          <div class="hide-title">寄达地</div>
          <label class="hide-item" v-for="(item,index) in insuredList" :key="index">
            <div class="hide-left">
              <div class="left1">{{item.name}}</div>
              <div class="left2">￥<span class="left1">{{item.price}}</span></div>
            </div>
            <input type="radio" class="myinput1" name="dizhi" :value="item.id"/>
            <!--<div class="z">500g以内</div>-->
          </label>
          <!--<label class="hide-item">-->
          <!--<div class="hide-left">-->
          <!--<div class="left1">新疆、西藏</div>-->
          <!--<div class="left2">￥<span class="left1">24</span></div>-->
          <!--</div>-->
          <!--<input type="radio" class="myinput1" name="dizhi" value="a"/>-->
          <!--<div class="z">首重1kg</div>-->
          <!--</label>-->
        </form>
        <div class="emil">
          <div>受理地址： &nbsp;</div>
          <span>{{dataForm.riskName}}</span>
        </div>
        <div class="content-item" style="padding:0;">
          <div class="shoujian youji">收件地址
            <div class="y-img"><img src="../../img/yj-logo.png"> </div>
          </div>
          <div class="img"><img src="../../img/uname.png"> </div>
          <div class="emil-box">
            <div class="emil-item">
              <select v-model="dataForm.postProvinceId" @change="getCityNames">
                <option v-for="(item,index) in provinceNames" :key="index" :value="item.id">{{item.name}}</option>
              </select>
              <select v-model="dataForm.postCityId" @change="getCountyNames">
                <option v-for="(item,index) in cityNames" :key="index" :value="item.id">{{item.name}}</option>
              </select>
              <select v-model="dataForm.postCountyId">
                <option v-for="(item,index) in countyNames" :key="index" :value="item.id">{{item.name}}</option>
              </select>
            </div>
            <div class="xx">
              详细地址：<input type="text" v-model="dataForm.postAddress">
            </div>
          </div>
        </div>
        <div class="btn2">
          <button class="sub"  @click="jump">确认提交</button>
          <button class="del" @click="goBack">取消</button>
        </div>

      </div>
    </div>
    <div class="infos">
      <div class="infos-title">
        <div>投递保险详情</div>
        <div class="guan">×</div>
      </div>
      <div class="table-box">
        <div class="table-title">不动产权登记中心EMS邮寄寄费标准</div>
        <table  cellspacing=0 cellpadding=0 border="1">
          <tr>
            <td rowspan="2">寄达地</td>
            <td>咨费标准</td>
            <td rowspan="2">备注</td>
          </tr>
          <tr>
            <td>500G以内(元)</td>
          </tr>
          <tr>
            <td rowspan="2">天津<br></td>
            <td rowspan="2">20<br></td>
            <td rowspan="2"></td>
          </tr>
          <tr>

          </tr>
          <tr>
            <td rowspan="2">外阜<br></td>
            <td rowspan="2">20<br></td>
            <td rowspan="2">新疆、西藏除外<br></td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td rowspan="2">新疆、西藏<br></td>
            <td rowspan="2">24(首重1kg)<br></td>
            <td rowspan="2"></td>
          </tr>
          <tr>
          </tr>
        </table>
      </div>
      <div class="beizhu">
        <div class="b-title">备注：</div>
        <ul class="s-title">
          <li>1.个性化服务的业务，根据其特殊的服务标准、操作流程执行个性化的资费标准</li>
          <li>2.计泡规定：对长、宽、高三边中任一单边达到60cm以上（含60cm）的邮件，计算体积重量（长（cm））X宽（cm）X高（cm）/6000（cm3/kg）），并取体积重量和实际重量中的较大者，计算资费。</li>
          <li>3.返单业务资费：实物返单3元/票，个性化返单每增加一份，资费增加1元。</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import 'jquery'
  import BMap from 'BMap'

  var ownerPositive = '';  // 正面身份证
  var ownerNegative = '';  // 反面身份证
  var housingAuthority = ''; // 房产证
  export default {
    data () {
      return {
        parentId: 1,
        provinceNames: [],
        cityNames: [],
        countyNames: [],
        insuredList: [],
        handleAreas: [],
        postTypes:[{
          id:1, value: '房本'
        },{
          id:2, value: '正式'
        },{
          id:3, value: '其他'
        }],
        dataForm:{
          // id: '',
          name: '',
          idCard: '',
          phone: '',
          mobileCode: '',
          ownerPositive: '',
          ownerNegative: '',
          housingAuthority: '',
          postType: '',
          postRisk: 1,
          postRiskId: '',
          riskName: '',
          postProvinceId: '',
          postCityId: '',
          postCountyId: '',
          postAddress: '',
          handleAreaId: '',
          openid: ''
        },
        show: true,
        count: '',
        timer: null
      }
    },
    mounted(){
      this.yuan();
      this.kai();
      this.shang();
    },
    methods:{
      changeName(e){
        var u = event.currentTarget.value;
        var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
        if(!reg.test(u)){
              $(".count1").hide()
                return;
            }else{
              $(".count3").hide()
              $(".count1").show()
              $(".count2").hide()
            }
      },
      changeId(e){
        var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|x|X)$/;
        var u = event.currentTarget.value;
        if(!reg.test(u)){
              $(".uid").css("border","1px solid #ff3433")
                return;
            }else{
              $(".uid").css("border","1px solid #dadada")
            }
      },
      changePhone(e){
        var u = event.currentTarget.value;
        var reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
        if(!reg.test(u)){
              $(".count1").css("display","none")
                return;
            }else{
              $(".count3").css("display","none")
              $(".count1").css("display","flex")
            }
      },
      getCode(){
        this.$http({
          url: this.$http.adornUrl('/sendOrderMsg'),
          method: 'get',
          params: this.$http.adornParams({
            'phone': this.dataForm.phone
          })
        }).then(({ data }) => {
          if (data && data.code === 0) {
            const TIME_COUNT = 60;
            if (!this.timer) {
              this.count = TIME_COUNT;
              this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                  this.count--;
                  $('.count2').show()
                  $('.count1').hide()
                } else {
                  $('.count3').hide()
                  $('.count2').hide()
                  $('.count1').show()
                  clearInterval(this.timer);
                  this.timer = null;
                }
              }, 1000)
            }
          } else {
            alert("请输入正确的手机号")
            // console.log(data.msg)
            // this.$message.error(data.msg)
            // error
          }
        })
      },
      jump(e){
        var xdz = $(".xx input").val()
        console.log(xdz)
        if(xdz==null){
          alert("请填写详细地址")
          return
        }
        var dz = $('.emil-item select').val()
        if(dz==null){
          alert("请填写详细地址")
          return
        }
        var form_list = this.dataForm
        for(var i =0;i<form_list.length;i++){
          if(form_list[i] == ''){
            alert("请完善信息")
            return
          }
        }
        this.dataForm.ownerPositive = ownerPositive
        this.dataForm.ownerNegative = ownerNegative
        this.dataForm.housingAuthority = housingAuthority
        this.dataForm.openid = localStorage.getItem("openid")

        this.dataForm.postRiskId = $('input:radio[name="dizhi"]:checked').val();


        // let index = 'http://ems.jujinkeji.net/mobile/Index'
        // location.href = 'http://ems.jujinkeji.net/mobile-ems/wechat/authorize?returnUrl=' + index

        this.$http({
          url: this.$http.adornUrl('/mobile/order/create'),
          method: 'post',
          data: this.$http.adornData(this.dataForm)
        }).then(({ data }) => {
          if (data && data.code === 0) {
            console.log(data)
            // this.$message({
            //   message: '操作成功',
            //   type: 'success',
            //   duration: 1500,
            //   onClose: () => {
            //     this.visible = false
            //     this.$emit('refreshDataList')
            //   }
            // })
            // alert(data.orderId + '---------------' + data.data.orderId)
            this.wechatPay(data.data.orderId)
            console.log("操作成功")
            // this.$router.push("/Index")
          } else {
            // this.$message.error(data.msg)
            alert(data.msg)
          }
        })
      },
      wechatPay(orderId){
        this.$http({
          url: this.$http.adornUrl('/pay/create'),
          method: 'get',
          params: this.$http.adornParams({
            'orderId': orderId,
            'returnUrl': 'http://ems.jujinkeji.net/mobile/Index'
          })
        }).then(({ data }) => {
          if (data && data.code === 0) {
            if (typeof WeixinJSBridge == "undefined"){//微信浏览器内置对象。参考微信官方文档
              if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(data), false);
              }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady(data));
                document.attachEvent('onWeixinJSBridgeReady',this.onBridgeReady(data));
              }
            }else{
              this.onBridgeReady(data);
            }
          } else {
            alert(data.msg)
          }
        })
      },
      goBack(){
        this.$http({
          url: this.$http.adornUrl('/pay/create'),
          method: 'get',
          params: this.$http.adornParams({
            'orderId': '1560171846460907',
            'returnUrl': 'http://ems.jujinkeji.net/mobile/Index'
          })
        }).then(({ data }) => {
          if (data && data.code === 0) {
            if (typeof WeixinJSBridge == "undefined"){//微信浏览器内置对象。参考微信官方文档
              if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(data), false);
              }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady(data));
                document.attachEvent('onWeixinJSBridgeReady',this.onBridgeReady(data));
              }
            }else{
              this.onBridgeReady(data);
            }
          } else {
            alert(data.msg)
          }
        })

        // this.$router.push("/Index")
      },
      onBridgeReady:function(data){
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId": data.data.payResponse.appId,     //公众号名称，由商户传入
            "timeStamp": data.data.payResponse.timeStamp,         //时间戳，自1970年以来的秒数
            "nonceStr": data.data.payResponse.nonceStr, //随机串
            "package": data.data.payResponse.package,
            "signType": data.data.payResponse.signType,         //微信签名方式：
            "paySign": data.data.payResponse.paySign //微信签名
          },
          function(res){
            if(res.err_msg == "get_brand_wcpay_request:ok" ) {
              console.log("支付成功")
              this.$router.push("/Index")
            }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
            // location.href = "${returnUrl}";
          }
        );
      },
      city(){    //定义获取城市方法
        const geolocation = new BMap.Geolocation();
        var _this = this
        geolocation.getCurrentPosition(function getinfo(position){
          console.log(position)
          let district = position.address.district   // 获取区信息
          let city = position.address.city            //获取城市信息
          let province = position.address.province    //获取省份信息
          _this.dataForm.riskName = district
          // _this.LocationCity = city
          console.log("获取定位信息")
          console.log(city)
          console.log(province)
        }, function(e) {
          _this.LocationCity = "定位失败"
        }, {provider: 'baidu'});
      },

      kai(){
        var hei = $(window).height()
        $('.kai').click(function(){
          $('.hidden').show();
          document.body.style.overflow='hidden';
          $('.hidden').height($("body").height());
          $('.infos').show();
          $("body").addClass('gun')
        })
        $('.hidden').click(function(){
          $('.hidden').hide();
          document.body.style.overflow='auto';
          $('.hidden').css('height','auto')
          $('.infos').hide();
          $("body").removeClass('gun')
        })
        $('.guan').click(function(){
          $('.hidden').hide();
          document.body.style.overflow='auto';
          $('.hidden').css('height','auto')
          $('.infos').hide();
          $("body").removeClass('gun')
        })
      },
      yuan(){
        $('.round').click(function(){
          if($('.round').attr('data')==0){
            $('.round').attr('data',1)
            $('.round').animate({
              left:'4.5vw'
            },200,function(){
              $('.btn1').css('background','#09bb07')
              
            })
          }else{
            $('.round').attr('data',0)
            $('.round').animate({
              left:'0'
            },200,function(){
              $('.btn1').css('background','#fff')
              
            })
          }
        })
      },
      shang(){
        $(".img1").click(function(){
          $('.file1').click()
        })
        $('.file1').change(function() {
          let formData = new FormData();
          //接口接收参数 键值形式 添加到formData中
          formData.append("file",$(this)[0].files[0]);
          $.ajax({
            url: process.env.BASE_API + '/sys/file/uploadImg',//url地址
            type:'post',
            data: formData,
            contentType: false,
            processData: false,
            success:function(res){
              console.log(res);
              if(res.code === 0){
                ownerPositive = res.data
              }else{
                console.log(res.msg)
              }
            }
          })
          $('.img1').css('backgroundImage', "url(" + URL.createObjectURL($(this)[0].files[0]) + ')')
        })
        $(".img2").click(function(){
          $('.file2').click()
        })
        $('.file2').change(function(){
          let formData = new FormData();
          //接口接收参数 键值形式 添加到formData中
          formData.append("file",$(this)[0].files[0]);
          $.ajax({
            url: process.env.BASE_API + '/sys/file/uploadImg',//url地址
            type:'post',
            data: formData,
            contentType: false,
            processData: false,
            success:function(res){
              console.log(res);
              if(res.code === 0){
                ownerNegative = res.data
              }else{
                console.log(res.msg)
              }
            }
          })
          $('.img2').css('backgroundImage',"url("+URL.createObjectURL($(this)[0].files[0])+')')
        })
        $(".img3").click(function(){
          $('.file3').click()
        })
        $('.file3').change(function(){
          let formData = new FormData();
          //接口接收参数 键值形式 添加到formData中
          formData.append("file",$(this)[0].files[0]);
          $.ajax({
            url: process.env.BASE_API + '/sys/file/uploadImg',//url地址
            type:'post',
            data: formData,
            contentType: false,
            processData: false,
            success:function(res){
              console.log(res);
              if(res.code === 0){
                housingAuthority = res.data
              }else{
                console.log(res.msg)
              }
            }
          })
          $('.img3').css('backgroundImage',"url("+URL.createObjectURL($(this)[0].files[0])+')')
        })
      },

      getProvinceNames(){
        this.$http({
          url: this.$http.adornUrl('/mobile/area/list'),
          method: 'get',
          params: this.$http.adornParams({
            'parentId': this.parentId
          })
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.provinceNames = []
            this.cityNames = []
            this.countyNames = []
            data.data.forEach((item) => {
              this.provinceNames.push({
                id: item.id,
                name: item.name
              })
            })
          } else {
            console.log(data.msg)
          }
        })
      },
      getCityNames(){
        this.$http({
          url: this.$http.adornUrl('/mobile/area/list'),
          method: 'get',
          params: this.$http.adornParams({
            'parentId': this.dataForm.postProvinceId
          })
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.cityNames = []
            this.countyNames = []
            data.data.forEach((item) => {
              this.cityNames.push({
                id: item.id,
                name: item.name
              })
            })
          } else {
            console.log(data.msg)
          }
        })
      },
      getCountyNames(){
        this.$http({
          url: this.$http.adornUrl('/mobile/area/list'),
          method: 'get',
          params: this.$http.adornParams({
            'parentId': this.dataForm.postCityId
          })
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.countyNames = []
            data.data.forEach((item) => {
              this.countyNames.push({
                id: item.id,
                name: item.name
              })
            })
          } else {
            console.log(data.msg)
          }
        })
      },
      getInsuredList(){
        this.$http({
          url: this.$http.adornUrl('/mobile/insured/list'),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.insuredList = []
            data.data.forEach((item) => {
              this.insuredList.push({
                id: item.insuredId,
                name: item.insuredComment,
                price: item.insuredAmount
              })
            })
          } else {
            console.log(data.msg)
          }
        })
      },
      getHandleArea(){
        this.$http({
          url: this.$http.adornUrl('/mobile/handlerArea/list'),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({ data }) => {
          if (data && data.code === 0) {
            this.handleAreas = []
            data.data.forEach((item) => {
              this.handleAreas.push({
                id: item.id,
                name: item.handleAddress
              })
            })
          } else {
            console.log(data.msg)
          }
        })
      },
    },

    created(){
      this.getProvinceNames()
      this.getInsuredList()
      this.getHandleArea()
      this.city()
    }
  }
</script>
<style>
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
    width:94vw;
    padding:2vw;
    border-radius: 15px;
    position: relative;
    margin:-10vw auto 2rem;}
  .content-item{
    border-radius: 10px;
    padding:1vw 0 2vw !important;
    background:#fff;}
  .shoujian{
    color:#2e2e2e;
    margin:2vw 0 0 5vw;
    font-size:6vw;}
  .img{
    position: absolute;
    top:4vw;
    left:-3vw;
    width:10vw;}
  .img>img{width:100%;}
  .item{
    margin-top:3vw;
    display:flex;
  }
  .info-left{
    color:#333;
    height:8vw;
    line-height:8vw;
    text-align:right;
    font-size:4vw;
    width:30vw;}
  .info-right{
    line-height: 6vw;
    height:6vw;}
  .info-right>input{
    background:transparent;
    box-shadow: 0;
    font-size:4vw;
    border:1px solid #dadada;
    border-radius: 5px;
    outline: none;
    line-height: 8vw;
    width:50vw;
    padding-left:1vw;
    height:8vw;}
  .btn{
    color:#fff;
    border-radius: 5px;
    box-shadow: 0;
    background:#dadada;
    border:1px solid #dadada;
    font-size:4vw;
    margin-left: 8vw;
    width:22vw;}
  .content-items{
    background:#fff;
    margin:2vw 0;
    border-radius: 10px;
    display:flex;
    justify-content:center;}
  .myfile{display:none;}
  .flexz{
    color:#333;
    margin-bottom:3vw;
    font-size:4vw;}
  .content-items>div{
    margin:3vw;
    width:35vw;
    text-align:center;}
  .myimg{
    width:35vw;
    height:20vw;
    background:url(../../img/shang.jpg);
    background-repeat: no-repeat;
    background-position:center;
    background-size:contain;}
  .emil{
    height:10vw;
    line-height:10vw;
    margin:2vw 0;
    border-radius: 10px;
    background:#fff;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .emil>div{
    color:#333;
    margin-right:2vw;
    height:10vw;
    line-height:10vw;
    padding-left:6vw;
    font-size:4vw;
    width:30vw;}
  .emil>select{
    background:transparent;
    margin-right:4vw;
    color:#5a5a5a;
    height:8vw;
    display:flex;
    align-items: center;
    line-height:8vw;
    border-radius: 5px;
    border:1px solid #dadada;
    outline: none;
    font-size:4vw;
    padding-left:4vw;
    width:55vw;}
  .ji{
    margin:2vw 0vw 2vw 0;
    background:#fff;

    padding:2vw 4vw 2vw 0;
    border-radius: 10px;
    display:flex;
    justify-content: space-between;}
  .ji>.btn-t{
    display: flex;
    color:#333;
    height:5vw;
    line-height:5vw;
    padding-left:6vw;
    font-size:4vw;
    justify-content: space-between;
    width:38vw;}
  .btn-t>img{
    display: block;
    width:5vw;
    height:5vw;
    border-radius: 50%;}
  .btn1{
    border:1px solid #dadada;
    border-radius: 30px;
    background:#fff;
    width:10vw;
    position: relative;}
  .ji>.btn1>.round{
    position: absolute;
    border:1px solid #dadada;
    background:#fff;
    border-radius: 50%;
    top:-0.55vw;
    height:5.5vw;
    width:5.5vw;}
  .emil-item{
    margin:2vw 0 3.5vw 4vw;
    margin-left:5vw;
    display:flex;
    justify-content: space-between;}
  .emil-item>select{
    background:transparent;
    color:#5a5a5a;
    padding-left:2vw;
    outline: none;
    border:1px solid #dadada;
    height:6vw;
    line-height:6vw;
    border-radius: 5px;
    font-size:3vw;
    width:24vw;}
  .xx{
    color:#333;
    font-size:4vw;
    display: flex;
    justify-content: space-between;
    margin-left:5vw;}
  .emil-box{padding-right:4vw;}
  .xx>input{
    background:transparent;
    border:1px solid #dadada;
    outline: none;
    font-size:3vw;
    height:6vw;
    line-height: 6vw;
    padding-left:2vw;
    border-radius: 5px;
    width:51vw;}
  .btn2{
    width:70vw;
    display:flex;
    justify-content: space-between;
    margin:8vw 10vw 3vw;}
  .btn2>button{
    color:#fff;
    outline: none;
    border-radius: 40px;
    padding:1vw;
    font-size:4.5vw;
    width:26vw;}
  .sub{
    border:1px solid #1bb9ff;
    background:#1bb9ff;}
  .del{
    border:1px solid #999;
    background:#999;}
  input[type=radio] {
    display:block;
    /* vertical-align:middle; */
    width:5vw;
    height:5vw;
    -webkit-appearance:none;
    border-radius: 50%;
    border:1px solid #dadada;
    background-color: transparent;
    outline: 0 !important;
    line-height: 5vw;}
  input[type=radio]:after {
    content:"";
    display:block;
    width:5vw;
    height:5vw;
    border-radius:50%;
    text-align:center;
    line-height:5vw;
    font-size:5vw;
    box-sizing:border-box;}
  input[type=radio]:checked{border:0;}
  input[type=radio]:checked:after {
    content: "L";
    color:#fff;
    transform:matrix(-0.766044,-0.642788,-0.642788,0.766044,0,0);
    -webkit-transform:matrix(-0.766044,-0.642788,-0.642788,0.766044,0,0);
    border-color:2px solid #09bb07;
    background-color: #09bb07;}
  .hide-box{
    border-radius: 15px;
    padding:3vw 0 2vw;
    background:#fff;}
  .hide-item{
    padding:3vw 4vw 3vw 0;
    border-bottom:1px dashed #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left:6vw;}
  .hide-item:last-child{border:0;}
  .left2{
    font-size:3vw;
    color:#ccc;}
  .left1{
    color:#838383;
    font-size:4vw;}
  .hide-left{
    width:74vw;
    padding-right:3vw;
    justify-content: space-between;
    display:flex;}
  .myinput1{width:5vw;}
  .z{
    font-size:4vw;
    margin-top:2vw;
    font-weight:400;
    color:#ccc;}
  .hide-title{
    color:#333;
    font-weight: 500;
    height:5vw;
    line-height:5vw;
    padding-left:6vw;
    font-size:4vw;
    width:30vw;}
  .hidden{
    background:rgba(0,0,0,.5);
    display:none;
    /* bottom:0;*/
    position:fixed;
    width:100vw;
    z-index:100;
    height:100vh;}
  .infos{
    position: fixed;
    display: none;
    width:100vw;
    overflow: auto;
    bottom:0;
    z-index:200;
    background:#fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height:62vh;}
  .infos-title{
    display:flex;
    border-bottom:1px solid #999;
    color:#333333;
    font-size:5vw;
    font-weight: bold;
    padding:4vw 8vw;
    width:100vw;
    align-items: center;
    justify-content: space-between;}
  .guan{font-size:8vw;}
  .table-title{
    margin:3vw 0;
    font-size:5vw;
    color:#333;}
  .table-box{
    margin-bottom:8vw;
    text-align: center;
    width:100vw;}
  table{
    margin:0 auto;
    font-size:3.5vw;
    width:80vw;
    border-color:#999;
  }
  tr{height:5vw;}
  td{
    color:#333;
    text-align: center;}
  .beizhu{
    margin:0 auto 15vw;
    width:80vw;}
  .b-title{
    font-size:5vw;
    color:#333;}
  .s-title{
    font-size:4 vw;
    color:#595959;
    list-style: none;}
  .youji{position: relative;}
  .y-img{
    position: absolute;
    top:0;
    left:-10vw;
    width:10vw;}
  .y-img>img{width:100%;}
  .count3{
    display:flex;
    text-align: center;
    align-items: center;
    outline:none;
    height:2rem;
    background:#cdcdcd;
    width:30%;
    justify-content: center;
    width:100%;
    text-align:center;
    color:#fff;
    align-items: center;
    text-decoration: none;
  }
  .count2{
    display:none;
    text-align: center;
    align-items: center;
    outline:none;
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
    display:none;
    outline:none;
    text-align: center;
    align-items: center;
    height:2rem;
    background:#1bb9ff;
    width:30%;
    justify-content: center;
    width:100%;
    text-align:center;
    align-items: center;
    color:#fff;
    text-decoration: none;}
  .emil span{
    color: #333;
    margin-right: 4vw;
    height: 10vw;
    line-height: 10vw;
    padding-left: 6vw;
    font-size: 4vw;
  }
</style>
