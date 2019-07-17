<template>
  <div class="fine">
      <div class="fineTop">
          <router-link :to="{path:'/fineBox'}">
            <span>
                <i class="iconfont icon-zuanshi-01"></i>
                <h4>精品上架</h4>
            </span>
            <span>平台审核、品质保障
                <i class="iconfont icon-gengduo1"></i>
            </span>
          </router-link>
      </div>
      <div class="fineMain fineSwiper swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="fin in fine2" :key="fin.id">
                    <router-link :to="'/Substance/'+fin.id">
                        <img :src="fin.img" alt="">
                        <div class="fineDetails">
                            <!--品种-->
                            <div class="price"><span>{{fin.name}}</span><span>¥{{fin.cost}}</span></div>
                        </div>
                    </router-link>
                </div>
            </div>
      </div>
      <div class="fineMain wrap">
        <div class="fineBox" v-for="fin in fine" :key="fin.id">
            <router-link :to="'/Substance/'+fin.id">
                <img :src="fin.img" alt="">
                <div class="fineDetails">
                    <!--品种-->
                    <div class="price"><span>{{fin.name}}</span><span>¥{{fin.cost}}</span></div>
                </div>
            </router-link>
        </div>
      </div>
      <div class="fineMore">
        <router-link :to="{path:'/fineBox'}"><span>进入精品馆</span><i class="iconfont icon-gengduo1"></i></router-link>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Fine',
    data(){
        return{
            fine:'',
            fine2:''
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
                _this.fine = res.data.data.slice(0,6)
                _this.fine2 = res.data.data.slice(7,11)
                _this.fine.length = 6
            })
            .then(function(){
              var oddsMain = new Swiper('.fineSwiper', {
                  slidesPerView:3,
                //   spaceBetween:12,
                  //autoplay:3000,
                  loop:true
              })
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
.fine{
    margin:px2rem(10px) auto;
    background:#fff;
    display:flex;
    flex-direction:column;
    .fineTop{
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
                margin-right:px2rem(12px);
                background-image:linear-gradient(#39bbe7, #1886ef);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            span:nth-child(2){
                font-size:px2rem(20px);
                color:#fe4f53;
                i{ 
                    margin:auto;
                    font-size:px2rem(20px);
                    margin-left:px2rem(12px);
                    color:#969496;
                }
            }
        }
    }
    .wrap{
        flex-wrap:wrap;
    }
    .fineMain{
        flex:1;
        width:100%;
        // padding:0 px2rem(12px);
        display:flex;
        justify-content:space-between;
        .fineBox{
            width:auto;
            margin:0 0 0 px2rem(12px);
            padding:px2rem(12px) 0;
            a{
                width:100%;
                height:100%;
                display:flex;
                flex-direction:column;
                img{
                    width:px2rem(196px);
                    height:px2rem(196px);
                }
                .fineDetails{
                    flex:1;
                    padding:px2rem(20px) 0 0;
                    .price{
                        display:flex;
                        justify-content:space-between;
                        span{
                            font-size:px2rem(22px);
                        }
                        span:last-child{
                            color:#fe4f53;
                        }
                    }
                }
            }   
        }
        .fineBox:nth-child(3n){
            margin-right:px2rem(12px);
        }
    }
    .fineSwiper{
            width:100%;
            display:flex;
            flex:1;
            padding-left:px2rem(12px);
            justify-content:space-between;
            .swiper-slide{
                padding:px2rem(12px) 0 0;
                a{
                    padding-right:px2rem(12px);
                    width:100%;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    img{
                        width:px2rem(196px);
                        height:px2rem(196px);
                    }
                    .fineDetails{
                        flex:1;
                        padding:px2rem(20px) 0 0;
                        .price{
                            display:flex;
                            justify-content:space-between;
                            span{
                                font-size:px2rem(22px);
                            }
                            span:last-child{
                                color:#fe4f53;
                            }
                        }
                    }
                } 
            }
        }
    .fineMore{
        height:px2rem(70px);
        border-top:px2rem(1px) solid #eee;
        display:flex;
        justify-content:center;
        a{
            font-size:px2rem(22px);
            display:flex;
            margin:auto;
            color:#ec1614;
            span{
                margin:auto;
            }
            i{
                margin:auto px2rem(12px);
                font-size:px2rem(30px);
                border-radius:50%;
                border:px2rem(1px) solid #ff6d4b;
            }
        }
    }
}
</style>
