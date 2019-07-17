<template>
<div class="Onseller">
    <div class="OnsellerTop">
        <a href="#">
            <span><i class="iconfont icon-icon"></i><h4>推荐商家</h4></span>
            <span>更多<i class="iconfont icon-gengduo1"></i></span>
        </a>
    </div>
    <div class="OnsellerSlide swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in onseller" :key="item.id">
                <a :href="item.num">
                    <img :src="item.img">
                    <div class="Ontitle">
                        <span>{{item.name}}</span><span>{{item.address}}</span>
                    </div>
                </a>
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
    name:'Onseller',
    data(){
        return{
            onseller:''
        }
    },
    methods:{
        ssf(){
            var _this = this;
            // `this` 指向 vm 实例
            // 为给定 ID 的 user 创建请求
            axios.post('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/tuijianshangjia')  
                .then(function (res) { 
                    _this.onseller = res.data.data ;                
                })
                .then(function(){
                    var OnsellerSlide = new Swiper('.OnsellerSlide', {
                        slidesPerView:2.5
                    })
                })
                .catch(function (error) {
                    console.log(请求失败);
            });
        }

    },
    computed:{  	
    },
    mounted(){  
        this.$nextTick(this.ssf)
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
.Onseller{
    height:px2rem(360px);
    background:#fff;
    margin:px2rem(12px) auto;
    display:flex;
    flex-direction:column;
    .OnsellerTop{
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
                color:#ff4f56;
                margin-right:px2rem(12px);
            }
            span:nth-child(2){
                font-size:px2rem(20px);
                color:#ff4f56;
                i{ 
                    margin:auto;
                    margin-left:px2rem(12px);
                    color:#969496;
                }
            }
        }
    }
    .OnsellerSlide{
        width:100%;
        flex:1;
        padding-left:px2rem(12px);
        .swiper-slide{
            margin:0 px2rem(12px);
            padding:px2rem(12px) 0 0;
            border-radius:px2rem(12px);
            box-shadow:px2rem(1px) px2rem(1px) px2rem(10px) #eee;
            a{
                width:100%;
                height:100%;
                padding-right:px2rem(12px);
                display:flex;
                flex-direction:column;
                img{
                    width:px2rem(132px);
                    height:px2rem(132px);
                    margin:px2rem(30px) auto px2rem(15px);
                    border-radius:50%;
                }
                .Ontitle{
                    flex:1;
                    margin:auto;
                    display:flex;
                    flex-direction:column;
                    span{
                        margin:px2rem(4px) auto;
                        font-size:px2rem(28px);
                    }
                    span:last-child{
                        font-size:px2rem(24px);
                        color:#999;
                    }
                }
            }
        }
    }
}
</style>