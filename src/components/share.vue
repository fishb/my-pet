<template>
    <div class="shareB">
        <h5>选择要分享到的平台</h5>
        <div class="listBox">
            <a href="#">
                <div class="img">
                    <img src="../assets/icon/wxIcon.png" alt="">
                </div>
                <div class="name">微信</div>
            </a>
            <a href="#">
                <div class="img">
                    <img src="../assets/icon/qqIcon.png" alt="">
                </div>
                <div class="name">QQ</div>
            </a>
            <a href="#">
                <div class="img">
                    <img src="../assets/icon/seinaIcon.png" alt="">
                </div>
                <div class="name">新浪</div>
            </a>
            <a href="#">
                <div class="img">
                    <img src="../assets/icon/wxpIcon.png" alt="">
                </div>
                <div class="name">微信朋友圈</div>
            </a>
        </div>
    </div>
</template>

<script>
//分享组件
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Share',
    data() {
        return {
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
    .shareB{
        width:100%;
        position:fixed;
        bottom:px2rem(90px);
        background:#eaeff5;
        display:flex;
        flex-direction:column;
        h5{
            font-size:px2rem(28px);
            font-weight:normal;
            text-align:center;
            margin:px2rem(26px) auto 0;
            color:#46474d;
        }
        .listBox{
            height:px2rem(160px);
            margin:px2rem(26px) 0;
            display:flex;
            justify-content:space-between;
            a{
                flex:1;
                display:flex;
                flex-direction:column;
                .img{
                    margin:auto;
                    width:px2rem(90px);
                    height:px2rem(90px);
                    background:#fff;
                    display:flex;
                    border-radius:px2rem(12px);
                    img{
                        width:px2rem(45px);
                        margin:auto;
                    }
                }
                .name{
                    font-size:px2rem(24px);
                    color:#46474d;
                    margin:auto;
                }
            }
        }
    }
</style>
