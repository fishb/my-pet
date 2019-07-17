<template>
<!--最新上架-->
<div class="arrival">
  <div class="arrivalTop">
    <router-link :to="{path:'/newArral'}">
      <span>
        <i class="iconfont icon-naozhong"></i>
        <h4>最新上架</h4>
      </span>
      <span>更多
        <i class="iconfont icon-gengduo1"></i>
      </span>
    </router-link>
  </div>
  <!--上架内容-->
  <div class="arrivalMain swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in arrival" :key="item.id">
        <router-link :to="'/Substance/'+item.id">
          <img :src="item.img">
          <div class="arrivalDe">
            <!--品种-->
            <div class="Varieties">{{item.title}}</div>
            <!--价格-->
            <div class="price">
              <span>¥{{item.price}}</span>
              <span>1分钟前</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import Swiper from 'swiper'
export default {
    name:'arrival',
    data(){
        return{
          arrival:''
        }
    },
    methods:{
    },
    computed:{  	
    },
    mounted(){ 
    },
    created(res){
        this.$nextTick(function(){
            var _this = this;
        // `this` 指向 vm 实例
        // 为给定 ID 的 user 创建请求
        axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/zxsj')
            .then(function (res) {
                _this.arrival = res.data.data ;
                console.log(_this.arrival)
            })
            .then(function(){
              var arrivalMain = new Swiper('.arrivalMain', {
                slidesPerView: 3,
              });
            })
            .catch(function (error) {
                console.log(请求失败);
            });
        })
       
    }
}
</script>
<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
/**最新上架**/
.arrival{
    margin:px2rem(10px) auto;
    //height:px2rem(365px);
    background:#fff;
    display:flex;
    flex-direction:column;
    .arrivalTop{
        padding:px2rem(10px);
        height:px2rem(65px);
        a{
            width:100%;
            height:100%;
            display:flex;
            justify-content:space-between;
            span{
                margin:auto 0;
                font-size:px2rem(24px);
                display:flex;
                h4{
                    margin:auto;
                }
            }
            span:nth-child(1) i{
                font-size:px2rem(44px);
                //color:#00b6bb;
                margin-right:px2rem(12px);
                background-image:linear-gradient(#fe4f53, #ec1614);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            span:nth-child(2){
                font-size:px2rem(20px);
                color:#969496;
                i{ 
                    margin:auto;
                    margin-left:px2rem(12px);
                    font-size:px2rem(20px);
                }
            }
        }
    }
    .arrivalMain{
        width:100%;
        flex:1;
        padding-left:px2rem(12px);
        .swiper-slide{
            padding:px2rem(12px) 0 0;
            margin:0 0 px2rem(12px);
            a{
                width:100%;
                height:100%;
                padding-right:px2rem(12px);
                display:flex;
                flex-direction:column;
                img{
                    width:px2rem(196px);
                    height:px2rem(196px);
                }
                .arrivalDe{
                    flex:1;
                    padding:px2rem(20px) 0 0;
                    display:flex;
                    text-align:justify;
                    flex-direction:column;
                    div{
                        flex:1;
                        display:flex;
                        justify-content:space-between;
                    }
                    .Varieties{
                        font-size:px2rem(22px);  
                    }
                    .price{
                        font-size:px2rem(18px);
                        span:first-child{
                            color:#fe4f53;
                        }
                        span:last-child{
                            font-size:px2rem(16px);
                            color:#b2b2b2;
                        }
                    }
                }
            } 
        }
    }
}
</style>
