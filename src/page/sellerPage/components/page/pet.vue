<template>
    <div>
    <div class="pet" v-for="item in pet" :key="item.id">
        <!--宠舍信息-->
        <div class="petTop">
            <router-link :to="{name: 'Detail'}">
                <div class="petName">
                    <img :src="item.pic" alt="">
                    <div class="name">
                        <span>{{item.name}}</span>
                        <span>{{item.site}}</span>
                    </div>
                </div>
                <div class="petAmount">
                    <span>{{item.amount}}</span>
                    <span>宝贝数量</span>
                </div>
            </router-link>
        </div>
        <!--宠舍宠物列表-->
        <div class="petBox">
            <router-link :to="{name: 'Detail'}" v-for="lists in item.list.slice(0,3)" :key="lists.id">
                <img :src="lists.img" alt="">
                <span class="Title">{{lists.title}}</span>
                <span class="price">{{lists.price}}元</span>
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
    name:'Pet',
    data(){
        return{
            pet:''
        }
    }, 
    methods:{
        
    },
    mounted(){
    },
    created(res){
        var _this = this;
        // `this` 指向 vm 实例
        // 为给定 ID 的 user 创建请求
        axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/csqy')
            .then(function (res) {
                _this.pet=res.data.data
                //_this.pet.item.list.length=3
			    console.log(_this.pet);
            })
            .catch(function (error) {
                console.log(请求失败);
         });
    }
}
</script>
<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.pet{
    height:px2rem(365px);
    background:#fff;
    margin-bottom:px2rem(12px);
    display:flex;
    flex-direction:column;
    padding:0 px2rem(12px);
    .petTop{
        height:px2rem(90px);
        padding:px2rem(12px) 0;
        a{
            display:flex;
            justify-content:space-between;
            .petName{
                flex:1;
                margin:auto 0;
                display:flex;
                img{
                    width:px2rem(60px);
                    height:px2rem(60px);
                    border-radius:50%;
                }
                .name{
                    flex:1;
                    display:flex;
                    flex-direction:column;
                    span{
                        font-size:px2rem(22px);
                        margin:auto px2rem(12px);
                    }
                    span:last-child{
                        color:#949494;
                    }
                }
            }
            .petAmount{
                width:px2rem(100px);
                margin:auto;
                display:flex;
                flex-direction:column;
                span{
                    font-size:px2rem(22px);
                    color:#949494;
                    text-align:right;
                    margin:auto 0;
                }
            }
        } 
    }
    .petBox{
        flex:1;
        display:flex;
        justify-content:space-between;
        a{
            width:px2rem(194px);
            display:flex;
            flex-direction:column;
            img{
                width:px2rem(194px);
                height:px2rem(194px);
            }
            .Title{
                padding:px2rem(12px) 0;
                font-size:px2rem(24px);
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
            } 
            .price{
                font-size:px2rem(24px);
                color:#ec1614;
            }
        }
    }
}
</style>
