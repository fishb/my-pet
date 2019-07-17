<template>
<div class="cnmments">
    <div class="com-container">
        <div class="list" v-for="com in cnmments" :key="com.id">
            <!--评价信息-->
            <div class="listTop">
                <div class="name">
                    <img :src="com.tx">
                    <div class="rank">
                        <span><em>{{com.name}}</em><i>LV.{{com.lv}}</i></span>
                        <span>{{com.time}}</span>
                    </div>
                </div>
                <div class="talk">{{com.talk}}</div>
                <!--图片-->
                <yd-lightbox class="print">
                    <yd-lightbox-img v-for="imgs in com.print" :key="imgs.id" :src="imgs.img"></yd-lightbox-img>
                </yd-lightbox>
            </div>
            <!--购宠信息-->
            <div class="listBottom">
                <a :href="com.shop.shopid">
                    <img :src="com.shop.shopImg">
                    <div class="name">
                        <span>{{com.shop.shopname}}</span>
                        <span>{{com.shop.shopClass}}</span>
                    </div>
                    <div class="price">
                        <em>{{com.shop.shopPrice}}元</em><i class="iconfont icon-gengduo1"></i>
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
import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox';
Vue.component(LightBox.name, LightBox);
Vue.component(LightBoxImg.name, LightBoxImg);
Vue.component(LightBoxTxt.name, LightBoxTxt);
export default {
    name:'cnmments',
    data(){
        return{
            cnmments:this.$route.params.comment
        }
    },
    methods:{

    },
    mounted(){
    },
    created(res){
        //var _this = this;
        // `this` 指向 vm 实例
        // 为给定 ID 的 user 创建请求
        // axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/pjlb')
        //     .then(function (res) {
        //         _this.cnmments=res.data.data
        //         console.log(_this.cnmments);
        //     })
        //     .catch(function (error) {
        //         console.log(请求失败);
        //  });
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.cnmments{
    flex:1;
    overflow-y:scroll;
    padding:px2rem(16px) 0;    
    .com-container{
        display:flex;
        flex-direction:column;
        .list{
            background:#fff;
            margin-bottom:px2rem(16px);
            .listTop{
                padding:px2rem(26px);
                display:flex;
                flex-direction:column;
                .name{
                    display:flex;
                    height:px2rem(80px);
                    img{
                        width:px2rem(80px);
                        height:px2rem(80px);
                        border-radius:50%;
                    }
                    .rank{
                        margin:0 px2rem(16px);
                        flex:1;
                        display:flex;
                        flex-direction:column;
                        span:first-child{
                            margin:auto 0 0;
                            display:flex;
                            em{
                                font-size:px2rem(22px);
                                text-overflow:ellipsis;
                                white-space:nowrap;
                                overflow:hidden;
                            }
                            i{
                                width:px2rem(80px);
                                margin-left:px2rem(6px);
                                font-size:px2rem(20px);
                                font-weight:bold;
                                background: -webkit-gradient(linear, left top, left bottom, from(#ff9c55), to(#ff4f56));
                                background: linear-gradient(#ff9c55, #ff4f56);
                                color:#fff;
                                text-align:center;
                                font-family:'Courier New', Courier, monospace;
                            }  
                        }
                        span:last-child{
                            margin:0 0 auto 0;
                            font-size:px2rem(22px);
                            color:#949494;
                        }
                    }
                }
                .talk{
                    margin:px2rem(16px) 0;
                    font-size:px2rem(24px);
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .print{
                    display:flex;
                    flex-wrap:wrap;
                    img{
                        width:px2rem(188px);
                        height:px2rem(188px);
                        margin-right:px2rem(12px);
                        margin-bottom:px2rem(12px);
                    }
                    img:nth-child(3n){
                        margin-right:0;
                    }
                }
            }
            .listBottom{
                padding:px2rem(16px) px2rem(26px);
                height:px2rem(110px);
                border-top:px2rem(1px) solid #ddd;
                a{
                    display:flex;
                    justify-content:space-between;
                    img{
                        width:px2rem(74px);
                        height:px2rem(74px);
                        border-radius:px2rem(18px);
                    }
                    .name{
                        margin:auto px2rem(16px);
                        display:flex;
                        flex-direction:column;
                        flex:1;
                        span{
                            font-size:px2rem(24px);
                            margin:auto 0 0;
                        }
                        span:last-child{
                            margin:0 0 auto;
                            color:#949494;
                        }
                    }
                    .price{
                        width:px2rem(160px);
                        margin:auto;
                        display:flex;
                        font-size:px2rem(22px);
                        justify-content:flex-end;
                        em{
                            color:#ff4f56;
                            margin:auto px2rem(12px);
                        }
                        i{
                            font-size:px2rem(22px);
                            color:#949494;
                            margin:auto 0;
                        }
                    }
                }
            }
        }
        .list:last-child{
            margin-bottom:0;
        }
    }
}
</style>