<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import loading from '@/components/loading'
export default {
  name: 'App',
  components:{
    loading
  },
  data(){
    return{
      transitionName:'',
    }
  }, 
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  created(){
  },
  methods:{
  }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
.qdy{
  width:100%;
  height:100%;
  z-index:999999;
  img{
    width:100%;
    height:100%;
    z-index:999999;
  }
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 200ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

#Loading {
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    z-index:999;
    display:flex;
    }
    .model_container{
        width:100%;
        height:100%;
        margin:auto;
        background:rgba(0,0,0,0.5);
        display:flex;
        flex-direction:column;
    }
    .model_container span{
            margin:auto auto 0;
            font-size:px2rem(25px);
            color:#fb7768;
    }
    .model_container img{
            width:px2rem(250px);
            height:px2rem(250px);
            margin:0 auto auto;
    }
.model{
  position:fixed;
  left:0;
  right:0;
  bottom:px2rem(180px);
  height:px2rem(40px);
  text-align:center;
  line-height:px2rem(40px);
  z-index:999;
  span{
    background:rgba(0,0,0,0.8);
    color:#fff;
    font-size:px2rem(24px);
    padding:0.2rem 1rem;
    border-radius:px2rem(40px);
  }
}    
</style>
