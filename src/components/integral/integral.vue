<template>
<div class="Integral">
    <header class="headerBox">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">我的积分</h2>
    </header>
    <main class="mainBox">
        <div class="hx">
            <span>500</span>
            <span>可用积分</span>
        </div>
        <router-link :to="{path:'/Intedatil'}" class="integrM">
            <span class="Lg"><i class="iconfont icon-jifen"></i><em>积分明细</em></span>
            <span class="Rg"><i class="iconfont icon-youjiantou"></i></span>
        </router-link>
        <div class="shareBox">
            <div class="shareBtn" @click="shareBtn">
                <span>分享得积分</span>
            </div>
        </div>
        <div class="question">
            <div class="title">
                <i class="iconfont icon-wenti-1"></i>
                <em>如何获取积分</em>
            </div>
            <div class="mainList">
                <h1>1、分享回馈积分</h1>
                <span>每天分享一次获得50积分，累积最多获得500积分</span>
            </div>
            <div class="mainList">
                <h1>2、交易成功回馈积分</h1>
                <span>订单交易成功返买家订单金额的千分之五等值积分</span>
            </div>
            <div class="mainList">
                <h1>3、评价回馈积分</h1>
                <span>每单评价完成获得100积分，累积最多获得1000积分</span>
            </div>
        </div>
        <div class="question">
            <div class="title">
                <i class="iconfont icon-wenti-1"></i>
                <em>积分用途</em>
            </div>
            <div class="mainList">
                <span>1、积分仅可在宠物直销app使用，如果用户被封号处理，则宠物直销将取消用户账号内积分相关使用权益</span>
            </div>
            <div class="mainList">
                <span>2、积分可直接用于支付宠物直销订单(充值等不支持积分支付的产品除外)</span>
            </div>
            <div class="mainList">
                <span>3、您可以在“我的—积分中查询到您的积分详情情况”</span>
            </div>
        </div>
    </main>
    <section class="Share" v-if="share">
        <Share></Share>
        <div class="falseShare" @click="noshareBtn">
            <span>取消分享</span>
        </div>
    </section>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import Share from '@/components/share'
export default {
    name:'Integral',
    components:{
        Share
    },
    data(){
        return{
            share:false
        }
    },
    methods:{
        history(){
            this.$router.go(-1)
        },
        shareBtn(){
            this.share = true
        },
        noshareBtn(){
            this.share = false
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
.Integral{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
        //background:#fff;
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
        .hx{
            height:px2rem(250px);
            background-image: -webkit-gradient(linear, left top, left bottom, from(#ff9c55), to(#fe4f53));
            background-image: linear-gradient(#ff9c55, #fe4f53);
            display:flex;
            flex-direction:column;
            justify-content:center;
            span{
                margin:auto auto 0;
                font-size:px2rem(60px);
                color:#fff;
            }
            span:last-child{
                font-size:px2rem(24px);
                margin:0 auto auto;
            }
        }
        .integrM{
            height:px2rem(100px);
            background:#fff;
            padding:0 px2rem(26px);
            display:flex;
            justify-content:space-between;
            .Lg{
                flex:1;
                margin:auto 0;
                display:flex;
                i{
                    margin:auto 0;
                    font-size:px2rem(40px);
                    color:#fe4f53;
                }
                em{
                    font-size:px2rem(28px);
                    margin:auto px2rem(6px);
                }
            }
            .Rg{
                width:px2rem(30px);
                margin:auto 0;
                i{
                    color:#bac0c6;
                    font-size:px2rem(24px);
                }
            }
        }
        .shareBox{
            height:px2rem(125px);
            padding:px2rem(16px);
            display:flex;
            .shareBtn{
                background: -webkit-gradient(linear, left top, left bottom, from(#ff7251), to(#ff456b));
                background: linear-gradient(#ff7251, #ff456b);
                border-radius:px2rem(26px);
                flex:1;
                display:flex;
                box-shadow:px2rem(2px) px2rem(2px) px2rem(2px) #bac0c6;
                span{
                    margin:auto;
                    color:#fff;
                    font-size:px2rem(28px);
                }
            }
        }
        .question{
            margin:px2rem(12px) auto;
            background:#fff;
            padding:px2rem(26px);
            display:flex;
            flex-direction:column;
            .title{
                height:px2rem(60px);
                display:flex;
                i{
                    margin:auto 0;
                    font-size:px2rem(40px);
                    color:#bac0c6;
                }
                em{
                    margin:auto px2rem(6px);
                    font-size:px2rem(24px);
                    color:#000;
                }
            }
            .mainList{
                display:flex;
                flex-direction:column;
                h1{
                    font-size:px2rem(26px);
                    font-weight:normal;
                }
                span{
                    margin:px2rem(12px) auto;
                    font-size:px2rem(26px);
                    color:#000;
                }
            }            
        }
    }
    .Share{
        position:fixed;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.4);
        .falseShare{
            width:100%;
            position:fixed;
            bottom:0;
            height:px2rem(90px);
            background:#fff;
            display:flex;
            span{
                width:100%;
                color:#46474d;
                font-size:px2rem(26px);
                text-align:center;
                line-height:px2rem(90px);
            }
        }
    }
}
</style>