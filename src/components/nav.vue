<template>
  <footer class="footerBox">
      <router-link :to="{path: '/'}" exact>
        <i class="iconfont icon-shouyedianji"></i>
        <!-- <img src="../assets/icon/icon1.png" class="icon">
        <img src="../assets/icon/icon1h.png" class="iconh">       -->
        <h4>首页</h4>
      </router-link>
      <router-link :to="{path: '/Seller'}">
        <i class="iconfont icon-shangjia"></i>
        <!-- <img src="../assets/icon/icon2.png" class="icon">
        <img src="../assets/icon/icon2h.png" class="iconh"> -->
        <h4>商家</h4>
      </router-link>
      <!-- <div class="releaseBtn">
        <div class="releIcon">
            <i class="iconfont icon-zengjia2"></i>
        </div>
        <h4>发布</h4>
      </div> -->
      <router-link :to="{path: '/Mall'}"> 
        <i class="iconfont icon-shangcheng1"></i>
        <!-- <img src="../assets/icon/icon3.png" class="icon">
        <img src="../assets/icon/icon3h.png" class="iconh"> -->
        <h4>商城</h4>
      </router-link>
      <router-link :to="{path:'/Msg'}"> 
        <i class="iconfont icon-liaotian"></i>
        <h4>消息</h4>
      </router-link>
      <router-link :to="{path: '/User'}">
        <i class="iconfont icon-wode1"></i>
        <!-- <img src="../assets/icon/icon4.png" class="icon">
        <img src="../assets/icon/icon4h.png" class="iconh"> -->
        <h4>我的</h4>
      </router-link>
  </footer>
</template>

<script>
export default {
    name:'Navlist',
    data(){
        return{
        }
    },
    methods:{  
    },
    created(){
        
        
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.footerBox{
    height:px2rem(90px);
    background:#fff;
    display:flex;
    position:relative;
    z-index:999;
    border-top:px2rem(1px) solid #eee;
    a{
      flex:1;
      display:flex;
      flex-direction: column;
      color:#bac0c6;
      transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
      position: relative;
      i{
        margin:auto;
        font-size:px2rem(44px);
        color:#bac0c6;
      }
      img{
          height:px2rem(40px);
          margin:auto;
      }
      img.iconh{
          display:none;
      }
      h4{
          font-size:px2rem(22px);
          font-weight:normal;
          margin:0 auto auto; 
      }
    }
    a.selected{
      color:#fe4f53;
      i{
        color:#fe4f53;
        // background-image:linear-gradient(#ff9c55, #fe4f53);
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
      }
      .icon{
          display:none;
      }
      .iconh{
          display:block;
      }
    } 
}
.footerBox a.selected:before, .footerBox a.selected:after {
  position: absolute;
  content: '';
  display: block;
  width: 140%;
  height: 100%;
  left: -20%;
  z-index: -1000;
  transition: all ease-in-out 0.5s;
  background-repeat: no-repeat;
}
.footerBox a.selected:before {
  display: none;
  top: -75%;
  background-image: radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, transparent 20%, #fb7768 20%, transparent 30%), radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, transparent 10%, #fb7768 15%, transparent 20%), radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, #fb7768 20%, transparent 20%);
  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
}
.footerBox a.selected:after {
  display: none;
  bottom: -75%;
  background-image: radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, transparent 10%, #fb7768 15%, transparent 20%), radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, #fb7768 20%, transparent 20%), radial-gradient(circle, #fb7768 20%, transparent 20%);
  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
}
.footerBox a:active {
  transform: scale(0.9);
}
.footerBox a.selected:before {
  display: block;
  animation: topBubbles ease-in-out 0.75s forwards;
}
.footerBox a.selected:after {
  display: block;
  animation: bottomBubbles ease-in-out 0.75s forwards;
}

@keyframes topBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
  }
  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
  }
}
@keyframes bottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
  }
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
  }
}
</style>
