<template>
<div class="odds">
  <div class="oddsTop">
    <!-- <img src="@/assets/img/xsqg.png" alt=""> -->
    <!-- <div class="oddsHot swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <a href="#">
            <img src="@/assets/img/touxiang.png" alt="">
            <span class="hotList">
              上海多乐萌宠 特价¥1888 2220 021h1
            </span>
            <span class="more">更多
              <i class="iconfont icon-gengduo1"></i>
            </span>
          </a>
        </li>
        <li class="swiper-slide">
          <a href="#">
            <img src="@/assets/img/touxiang.png" alt="">
            <span class="hotList">
              爱屋吉屋萌宠店 阿拉斯加 特价¥18888 欢迎抢购
            </span>
            <span class="more">更多
              <i class="iconfont icon-gengduo1"></i>
            </span>
          </a>
        </li>
        <li class="swiper-slide">
          <a href="#">
            <img src="@/assets/img/touxiang.png" alt="">
            <span class="hotList">
              滚动滚动 阿拉斯加 特价¥18888 欢迎抢购
            </span>
            <span class="more">更多
              <i class="iconfont icon-gengduo1"></i>
            </span>
          </a>
        </li>
      </ul>
    </div> -->
    <router-link :to="{path:'/Collage'}">
      <span>
        <i class="iconfont icon-pinpaitehui"></i>
        <h4>特惠拼购</h4>
      </span>
      <span>更多
        <i class="iconfont icon-gengduo1"></i>
      </span>
    </router-link>
  </div>
  <div class="oddsMain swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="odd in odds" :key="odd.id">
        <router-link :to="'/Substance/'+odd.id"> 
          <img :src="odd.img" alt="">
          <div class="oddsDetail">
            <!--现价-->
            <div class="Pr-price">
              <span>{{odd.name}}</span>
              <span>¥{{odd.cost}}</span>
            </div>
            <!--原价-->
            <div class="Or-price">
              <span>{{odd.shop.shopaddress}}</span>
              <span>¥{{odd.ocost}}</span>
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
    name:'odds',
    data(){
        return{
          odds:''
        }
    },
    methods:{

    },
    computed:{  	
    },
    mounted(){
        var oddsHot = new Swiper('.oddsHot', {
            direction: 'vertical',
            autoplay:true,
            speed:2000,
            loop:true
        }); 
        this.$nextTick(function(){
            var _this = this;
            // `this` 指向 vm 实例
            // 为给定 ID 的 user 创建请求
            axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/thqg')
                .then(function (res) {
                    _this.odds = res.data.data ;
                })
                .then(function(){
                var oddsMain = new Swiper('.oddsMain', {
                    slidesPerView:3,
                    autoplay:true,
                    speed:2000,
                    loop:true
                });
                })
                .catch(function (error) {
                    console.log(请求失败);
            });
        })     
    },
    created(){  
    }
}
</script>
<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.odds{
    margin:px2rem(16px) auto;
    height:px2rem(365px);
    background:#fff;
    display:flex;
    flex-direction:column;
    .oddsTop{
        padding:px2rem(10px);
        height:px2rem(65px);
        display:flex;
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
        img{
            height:100%;
            margin-right:px2rem(20px);
        }
        .oddsHot{
            flex:1;
            overflow:hidden;
            ul{
                height:100%;
                flex-direction:column;
                li{
                    height:100%; 
                    a{
                        height:100%;
                        display:flex;
                        flex-direction:row;
                        img{
                            width:px2rem(36px);
                            height:px2rem(36px);
                            margin:auto px2rem(22px);
                        }
                        span.hotList{
                            flex:1;
                            font-size:px2rem(24px);
                            margin:auto;
                            text-overflow:ellipsis;
                            overflow:hidden;
                            white-space:nowrap;
                        }
                        span.more{
                            margin:auto px2rem(11px);
                            font-size:px2rem(20px);
                            color:#969496;
                            i{
                                font-size:px2rem(20px);
                            }
                        }
                    }
                }
            }
        }
    }
    .oddsMain{
        width:100%;
        flex:1;
        padding-left:px2rem(12px);
        .swiper-slide{
            padding:px2rem(12px) 0 0;
            a{
                width:100%;
                height:100%;
                padding-right:px2rem(12px);
                display:flex;
                flex-direction:column;
                img{
                    //width:px2rem(257px);
                    height:100%;
                    width:px2rem(196px);
                    height:px2rem(196px);
                }
                .oddsDetail{
                    flex:1;
                    padding:px2rem(20px) 0 0;
                    display:flex;
                    text-align:justify;
                    flex-direction:column; 
                    div{
                        flex:1;
                        display:flex;
                        justify-content:space-between;
                        margin:auto 0;
                    }
                    .Pr-price{
                        font-size:px2rem(22px);
                        span:last-child{
                            color:#fe4f53;
                        }
                    }
                    .Or-price{
                        font-size:px2rem(18px);
                        color:#bebcbe;
                        span:last-child{
                            text-decoration:line-through;
                        }
                    }
                }
            }
        }
    }
}
</style>
