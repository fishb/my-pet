<template>
<div class="inteDatil">
    <header class="headerBox">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">积分明细</h2>
    </header>
    <main class="mainBox">
        <div class="list">
            <div class="name">
                <span>注册赠送</span>
                <span>2018-06-15 10:44:24</span>
            </div>
            <span class="zj">+500分</span>
        </div>
        <div class="list">
            <div class="name">
                <span>分享赠送</span>
                <span>2018-06-15 10:44:24</span>
            </div>
            <span class="zj">+500分</span>
        </div>
        <div class="list">
            <div class="name">
                <span>充值赠送</span>
                <span>2018-06-15 10:44:24</span>
            </div>
            <span class="zj">+500分</span>
        </div>
    </main>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'inteDatil',
    data(){
        return{
        }
    },
    methods:{
        history(){
            this.$router.go(-1)
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
.inteDatil{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
        // background-image:url(../../assets/img/searchBox.png);
        // background-repeat:no-repeat;
        // background-size:100% px2rem(75px);
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
        .list{
            padding:0 px2rem(26px);
            height:px2rem(90px);
            background:#fff;
            display:flex;
            justify-content:space-between;
            border-bottom:px2rem(1px) solid #eee;
            .name{
                flex:1;
                display:flex;
                flex-direction:column;
                span{
                    margin:auto 0 0;
                    font-size:px2rem(24px);
                }
                span:last-child{
                    margin:0 0 auto;
                    font-size:px2rem(18px);
                    color:#999;
                }
            }
            span.zj{
                margin:auto 0;
                font-size:px2rem(22px);
                color:#fe4f53;
            }
        }
        .list:last-child{
            border-bottom:0;
        }
    }
}
</style>