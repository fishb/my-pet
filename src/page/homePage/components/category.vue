<template>
  <div class="category">
      <div class="categoryTop">
        <span>热/门/分/类</span>
      </div>
      <div class="categoryMain">
          <router-link :to="'/Screen/'+'1'">
              <div class="img">
                  <img src="../../../assets/img/category1.png" alt="">
              </div>
              <div class="name">
                  <span>泰迪</span>
              </div>
          </router-link>
          <router-link :to="'/Screen/'+'2'">
              <div class="img">
                  <img src="../../../assets/img/category2.png" alt="">
              </div>
              <div class="name">
                  <span>金毛</span>
              </div>
          </router-link>
          <router-link :to="'/Screen/'+'3'">
              <div class="img">
                  <img src="../../../assets/img/category3.png" alt="">
              </div>
              <div class="name">
                  <span>边境牧羊犬</span>
              </div>
          </router-link>
          <router-link :to="'/Screen/'+'4'">
              <div class="img">
                  <img src="../../../assets/img/category4.png" alt="">
              </div>
              <div class="name">
                  <span>柯基</span>
              </div>
          </router-link>
          <router-link :to="'/Screen/'+'5'">
              <div class="img">
                  <img src="../../../assets/img/category5.png" alt="">
              </div>
              <div class="name">
                  <span>英国短毛猫</span>
              </div>
          </router-link>
          <router-link :to="'/Screen/'+'6'">
              <div class="img">
                  <img src="../../../assets/img/category6.png" alt="">
              </div>
              <div class="name">
                  <span>波斯猫</span>
              </div>
          </router-link>
          <router-link :to="'/Screen/'+'7'">
              <div class="img">
                  <img src="../../../assets/img/category7.png" alt="">
              </div>
              <div class="name">
                  <span>加菲猫</span>
              </div>
          </router-link>
          <router-link :to="'/Screen/'+'8'">
              <div class="img">
                  <img src="../../../assets/img/category8.png" alt="">
              </div>
              <div class="name">
                  <span>布偶猫</span>
              </div>
          </router-link>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Category',
    data(){
        return{
        }
    },
    methods:{

    },
    computed:{

    },
    mounted(){    
    },
    created(res){
        var _this = this;
        // `this` 指向 vm 实例
        // 为给定 ID 的 user 创建请求
        axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/jpg')
            .then(function (res) {
                _this.fine = res.data.data
            })
            .catch(function (error) {
                console.log(请求失败);
         });
   }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.category{
    height:px2rem(525px);
    margin:px2rem(10px) auto;
    background:#fff;
    display:flex;
    flex-direction:column;
    .categoryTop{
        height:px2rem(65px);
        line-height:px2rem(65px);
        text-align:center;
        border-bottom:px2rem(1px) solid #eee;
        span{
            font-size:px2rem(24px);
            font-weight:bold;
            background-image:-webkit-gradient(linear,left top, right bottom, from(#fe4f53), to(#ff9c55));
            -webkit-background-clip:text;
            -webkit-text-fill-color: transparent;
            letter-spacing:px2rem(12px);
        }     
    }
    .categoryMain{
        flex:1;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        padding:px2rem(26px) px2rem(12px) px2rem(12px);
        a{
            width:px2rem(145px);
            max-width:px2rem(145px);
            .img{
               width:px2rem(145px);
               height:px2rem(145px);
               display:flex;
               img{
                   width:100%;
                   height:100%;
                   margin:auto;
               } 
            } 
            .name{
                max-width:100%;
                margin:px2rem(12px) auto;
                text-align:center;
                span{
                    display:block;
                    font-size:px2rem(20px);
                    text-overflow:ellipsis;
                    overflow:hidden;
                    white-space:nowrap;
                }
            }
        }
    }
}
</style>