<template>
 <div class="list" ref="wrapper">
  <div>
   <div class="area">
    <div class="title border-topbottom">当前城市</div>
    <div class="button-list">
     <div class="button-wrapper">
      <div class="button">郑州</div>
     </div>
    </div>
   </div>
   <div class="area">
    <div class="title border-topbottom">热门城市</div>
    <div class="button-list">
     <div class="button-wrapper" v-for="item in hot" :key="item.id">
      <div class="button">{{item.name}}</div>
     </div>
    </div>
   </div>
   <div class="area"
    v-for="(item,key) in list"
    :ref="key"
    :key="key">
    <div class="title border-topbottom">{{key}}</div>
    <ul class="item-list">
     <li class="item border-bottom"
       v-for="listInner in item"
       :key="listInner.id"
     >{{listInner.name}}</li>
    </ul>
   </div>
  </div>
 </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
 props: {
   hot: Array,
   list: Object,
   letter:String
  },
 mounted () {
  this.scroll = new BScroll(this.$refs.wrapper)
 },
 watch:{
  letter () { //监听列表滚动事件 A-Z
   if(this.letter) {
    const element = this.$refs[this.letter][0]
    this.scroll.scrollToElement(element)
   }
  }
 }
}
</script>
<style lang="scss" scoped>

</style>