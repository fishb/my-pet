<template>
    <div class="seller">
        <header class="filter">
               <span @click="coseBtn"><em>{{city}}</em><i class="iconfont icon-svg19"></i></span>
               <span @click="filter2"><em>资质</em><i class="iconfont icon-svg19"></i></span>
               <span @click="filter3"><em>信誉</em><i class="iconfont icon-svg19"></i></span>
        </header>
        <main class="mainBox">
           <Activesell></Activesell>
           <div class="pet" v-for="item in pet" :key="item.id" v-if="toggle">
                <!--宠舍信息-->
                <div class="petTop">
                    <router-link :to="'/Detail/'+1">
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
                    <router-link :to="'/Substance/'+1" v-for="lists in item.list.slice(0,3)" :key="lists.id">
                        <img :src="lists.img">
                        <span class="Title">{{lists.title}}</span>
                        <span class="price">{{lists.price}}元</span>
                    </router-link> 
                </div>
            </div>
            <div class="errors"  v-if="errors" @click="begin">
                <div class="imgs">
                    <img src="../../assets/icon/nomores.png" alt="">
                </div>
                <span class="error">{{msg}}</span>
            </div>
        
        </main>
        <Navlist></Navlist>
        <!-- <section class="range" v-if="show1">
            城市切换
        </section> -->
        <section class="range" v-if="show2">
            <span>不限</span>
            <span>实名认证</span>
            <span>商家认证</span>
            <span>平台认证</span>
        </section>
        <section class="range" v-if="show3">
            <span>不限</span>
            <span>交易量</span>
            <span>好评数</span>
        </section>
        <!--城市切换隐藏-->
        <citySwitch v-if="cityShow" v-on:cityValue="cityValue"></citySwitch>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import Navlist from '@/components/nav.vue'
import Activesell from '@/page/sellerPage/components/page/activesell.vue'
import citySwitch from '@/components/citySwitch'//城市选择组件
export default {
    name:'Seller',
    components:{
        Navlist,Activesell,citySwitch
    },
    data(){
        return{
            show1:false,
            show2:false,
            show3:false,
            msg:'(>﹏<),好阔怜,加载失败了',
            pet:'',
            toggle:false,
            errors:false,
            cityShow:false,
            city:''
        }
    },
    methods:{
        filter2(){
            if(this.show2 == false){
                this.show2 = true
                this.show3 = false
            }else{
                this.show2 = false
            }
        },
        filter3(){
            if(this.show3 == false){
                this.show3 = true
                this.show2 = false
            }else{
                this.show3 = false
            }
        },
        coseBtn(){
            this.cityShow = true
        },
        cityValue(cityShow,cityItem){
            this.cityShow = cityShow
            this.city = cityItem
        },
        quest(){
            var _this = this;
            _this.$dialog.loading.open('正在加载中');
            // `this` 指向 vm 实例
            // 为给定 ID 的 user 创建请求
            axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/csq')
                .then(function (res) {
                    _this.$dialog.loading.close();
                    _this.pet=res.data.data
                    _this.toggle = true
                    _this.$dialog.toast({
                        mes: '加载成功',
                        timeout: 1500,
                        icon: 'success'
                    });
                    _this.msg = '~没有更多了~'
                })
                .catch(function (error) {
                    _this.$dialog.toast({
                        mes: '主人加载失败了',
                        timeout: 1500,
                        icon: 'error'
                    });
                    _this.$dialog.loading.close();
                    _this.errors = true
            });
        },
        begin(){
          var _this = this;
            _this.$dialog.loading.open('正在加载中');
            // `this` 指向 vm 实例
            // 为给定 ID 的 user 创建请求
            axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/csqy')
                .then(function (res) {
                    _this.$dialog.loading.close();
                    _this.pet=res.data.data
                    _this.toggle = true
                    _this.$dialog.toast({
                        mes: '加载成功',
                        timeout: 1500,
                        icon: 'success'
                    });
                    _this.msg = '~没有更多了~'
                })
                .catch(function (error) {
                    _this.$dialog.toast({
                        mes: '主人加载失败了',
                        timeout: 1500,
                        icon: 'error'
                    });
                    _this.$dialog.loading.close();
                    _this.errors = true
            });  
        }
    },
    mounted(){
        this.city = '南昌'
        //this.$nextTick(this.quest)
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.seller{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .filter{
        background:#fff;
        height:px2rem(85px);
        display:flex;
        justify-content:space-between;
        border-bottom:px2rem(1px) solid #eee;
        span{
            flex:1;
            display:flex;
            justify-content:center;
            em{
                font-size:px2rem(24px);
                margin:auto 0;
                color:#000;
              }
              i{
                margin:auto px2rem(6px);
                font-size:px2rem(24px);
            }
        }
    }
    .mainBox{
        flex:1;
        overflow-y:scroll;
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
    }
    .range{
        position:fixed;
        width:100%;
        top:px2rem(85px);
        background:#fff;
        z-index:999;
        padding:0 px2rem(16px);
        span{
            display:block;
            width:100%;
            height:px2rem(85px);
            line-height:px2rem(85px);
            border-bottom:px2rem(1px) solid #eee;
            font-size:px2rem(25px);
        }
        span:last-child{
            border:0;
        }
    }
    .errors{
        margin:px2rem(50px) auto;
        display:flex;
        flex-direction:column;
        padding:0 px2rem(12px);
        .imgs{
            width:px2rem(150px);
            height:px2rem(150px);
            margin:auto;
            img{
                width:100%;
                height:100%;
            }
        }
        .error{
            margin:auto;
            font-size:px2rem(32px);
            color:#46474d;
        }
    } 
}

</style>