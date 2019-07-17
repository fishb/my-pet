<template>
    <div class="Activesell">
        <div class="activeTop"><span>活跃商家</span></div>
        <div class="activeMain swiper-container">
            <div class="swiper-wrapper">
                <router-link :to="'/Detail/'+1" class="swiper-slide">
                     <div class="iconImg">
                        <div class="img"><img src="../../../../assets/img/category1.png" alt=""></div>
                        <div class="authType authType1">平台认证</div>
                    </div>
                    <div class="iconName">
                        <h4>乐家宠物</h4>
                        <span>江苏 徐州</span>
                    </div>
                </router-link>
                <router-link :to="'/Detail/'+2" class="swiper-slide">
                    <div class="iconImg">
                        <div class="img"><img src="../../../../assets/img/category2.png" alt=""></div>
                        <div class="authType authType2">自营店</div>
                    </div>
                    <div class="iconName">
                        <h4>阿宝精品宠物</h4>
                        <span>江西 九江</span>
                    </div>
                </router-link>
                <router-link :to="'/Detail/'+3" class="swiper-slide">
                    <div class="iconImg">
                        <div class="img"><img src="../../../../assets/img/category5.png" alt=""></div>
                        <div class="authType authType3">实名认证</div>
                    </div>
                    <div class="iconName">
                        <h4>千乐宠物</h4>
                        <span>四川 成都</span>
                    </div>
                </router-link>
                <router-link :to="'/Detail/'+4" class="swiper-slide">
                    <div class="iconImg">
                        <div class="img"><img src="../../../../assets/img/category7.png" alt=""></div>
                        <div class="authType authType4">个人认证</div>
                    </div>
                    <div class="iconName">
                        <h4>爱宠</h4>
                        <span>江西 南昌</span>
                    </div>
                </router-link>
                <router-link :to="'/Detail/'+5" class="swiper-slide" href="#">
                    <div class="iconImg">
                        <div class="img"><img src="../../../../assets/img/category3.png" alt=""></div>
                        <div class="authType">个人认证</div>
                    </div>
                    <div class="iconName">
                        <h4>宠她</h4>
                        <span>江西 宜春</span>
                    </div>
                </router-link>
                <router-link :to="'/Detail/'+6" class="swiper-slide">
                    <div class="iconImg">
                        <div class="img"><img src="../../../../assets/img/category1.png" alt=""></div>
                        <div class="authType">个人认证</div>
                    </div>
                    <div class="iconName">
                        <h4>振宇犬舍</h4>
                        <span>河南 新乡</span>
                    </div>
                </router-link>
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
    name:'Activesell',
    data(){
        return{
            sss:''
        }
    },
    created(){

    },
    mounted(){
        this.$nextTick(function(){
            var activeMain = new Swiper(".activeMain", {
               slidesPerView: 3
            });
        })
        
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem :64.0px;
   @return ($px/$rem) + rem;
}
.Activesell{
    height:px2rem(245px);
    background:#fff;
    display:flex;
    flex-direction:column;
    margin-bottom:px2rem(12px);
    .activeTop{
        height:px2rem(65px);
        border-bottom:px2rem(1px) solid #eee;
        padding:0 px2rem(26px);
        line-height:px2rem(65px);
        span{
            font-size:px2rem(26px);
            color:#bac0c6;
            margin:auto 0;
        }
    }
    .activeMain{
        width:100%;
        height:px2rem(180px);
        padding-left:px2rem(12px);
        .swiper-slide{
            display:flex;
            flex-direction:column;
            padding:px2rem(12px) 0 0;
            margin:0 0 px2rem(12px);
            .iconImg{
                display:flex;
                flex-direction:column;
                text-align:center;
                .img{
                    width:px2rem(80px);
                    background:#fafdfa;
                    border-radius:50%;
                    overflow:hidden;
                    margin:auto;
                    img{
                        width:auto;
                        max-width:100%;
                        margin:auto;
                    }
                }
                .authType{
                    margin:auto;
                    margin-top:-(px2rem(20px));
                    padding:px2rem(3px) px2rem(12px);
                    font-size:px2rem(22px);
                    color:#fff;
                    background:linear-gradient(#ee3f53, #fe4f53);
                    border-radius:px2rem(20px);
                }
                .authType1{
                    background:linear-gradient(#f2709c, #ff9472);
                }
                .authType2{
                    background: linear-gradient(#ce71f7, #bd55ef);
                }
                .authType3{
                    background:linear-gradient(#39bbe7, #1886ef);
                }
                .authType4{
                    background:linear-gradient(#ff7251,#ff456b);
                }
            }
            .iconName{
                margin:px2rem(6px) 0;
                display:flex;
                flex-direction:column;
                h4{
                    font-size:px2rem(22px);
                    font-weight:normal;
                    text-align:center;
                    color:#000;
                    text-overflow:ellipsis;
                    overflow:hidden;
                    white-space:nowrap;
                }
                span{
                    margin:0;
                    font-size:px2rem(20px);
                    color:#bac0c6;
                    text-align:center;
                }
            }
        }
    }
}
</style>
