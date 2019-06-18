<template>
  <div id="app-zf">
    <div class="prompt_text">群发创建失败，<span id="num">{{count}}</span>秒后转至群发记录</div>
  </div> 
</template>
<script>
export default {
  data () {
    return {
      count:""
    }
  },
  created(){
    this.goGrdoupRecor()
  },
  methods:{
    goGrdoupRecor(){
    const TIME_COUNT = 3;
    if(!this.timer){
      this.count = TIME_COUNT;
      this.show = false;
      this.timer = setInterval(()=>{
        if(this.count > 0 && this.count <= TIME_COUNT){
          this.count--;
        }else{
          this.show = true;
          clearInterval(this.timer);
          this.timer = null;
          //跳转的页面写在此处

        }
      },1000)
    }
  }
}
}
</script>
<style scoped>
</style>