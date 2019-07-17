<template>
<div class="Edit">
    <header class="headerBox">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">编辑资料</h2>
    </header>
    <main class="mainBox">
        <div class="inputBox">
            <div class="label">联系人:</div>
            <input type="text">
        </div>
        <div class="inputBox">
            <div class="label">电话:</div>
            <input type="text">
        </div>
        <div class="siteBox">
            <div class="label">地址:</div>
            <div class="siteRight">
                <div class="siteT" @click="showN">
                    <div class="city">{{city}}</div>
                    <span><i class="iconfont icon-arrow-right"></i></span>
                </div>
                <div class="siteB">
                    <i class="iconfont icon-dingwei"></i>
                    <em>中国江西省南昌市东湖区红谷中大道1619号</em>
                    <span class="iconfont icon-gouxuan"></span>
                </div>
            </div>
        </div>
        <div class="siteBtn">
            <span>确定</span>
        </div>
    </main>
    <Address v-on:childValue="childValue" v-if="showName"></Address>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import Address from '@/page/petPage/Single/address'
export default {
    name:'Edit',
    components:{
        Address
    },
    data(){
        return{
            id:this.$route.params.id,
            show1: false,
            city:'',// 省市区
            showName:false,
            address:''
        }
    },
    methods:{
        history:function(){
            this.$router.go(-1);
        },
        childValue(shoBox,city,address){
            this.showName = shoBox
            this.city = city + address
        },
        showN(){
            this.showName = true
        }
    },
    mounted(){
    },
    created(){ 
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Edit{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
        position:relative;
        display:flex;
        span{
            position:absolute;
            width:px2rem(75px);
            height:px2rem(75px);
            display:flex;
            i{
                font-size:px2rem(32px);
                margin:auto;
                color:#fff;
            }
        }
        .Title{
            margin:auto;
            color:#fff;
            font-size:px2rem(30px);
            font-weight:normal;
        }
    }
    .mainBox{
        flex:1;
        overflow-y:scroll;
        .inputBox{
            height:px2rem(80px);
            display:flex;
            justify-content:space-between;
            background:#fff;
            border-bottom:px2rem(1px) solid #eee;
            .label{
                width:px2rem(80px);
                color:#46474d;
                font-size:px2rem(24px);
                margin:auto px2rem(26px);
            }
            input{
                flex:1;
                margin:0 px2rem(26px);
                font-size:px2rem(24px);
                color:#000;
            }
        }
        .siteBox{
            height:px2rem(190px);
            background:#fff;
            display:flex;
            justify-content:space-between;
            border-bottom:px2rem(1px) solid #eee;
            .label{
                width:px2rem(80px);
                color:#46474d;
                font-size:px2rem(24px);
                margin:auto px2rem(26px);
            }
            .siteRight{
                flex:1;
                display:flex;
                flex-direction:column;
                .siteT{
                    display:flex;
                    justify-content:space-between;
                    padding:0 px2rem(26px);
                    height:px2rem(75px);
                    border-bottom:px2rem(1px) solid #eee;
                    .city{
                        flex:1;
                        margin:auto 0;
                        font-size:px2rem(26px);
                    }
                    span{
                        margin:auto 0;
                        i{
                            font-size:px2rem(30px);
                            color:#46474d;
                        }
                    }
                }
                .siteB{
                    display:flex;
                    justify-content:space-between;
                    padding:0 px2rem(26px);
                    height:px2rem(120px);
                    i{
                        margin:auto 0;
                        font-size:px2rem(32px);
                        color:#ddd;
                    }
                    em{
                        margin:auto px2rem(12px);
                        font-size:px2rem(24px);
                        color:#999;
                    }
                    span{
                        margin:auto 0;
                        font-size:px2rem(32px);
                        color:#999;
                    }
                }
            }
        }
        .siteBtn{
            margin:px2rem(36px);
            display:flex;
            background:#fe4f53;
            border-radius:px2rem(16px);
            height:px2rem(70px);
            box-shadow:-(px2rem(2px)) px2rem(2px) px2rem(2px) #bac0c6;
            span{
                margin:auto;
                font-size:px2rem(26px);
                color:#fff;
            }
        }
    }
}
</style>