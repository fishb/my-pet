<template>
    <div class="Install">
        <header class="installTop">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">设置</h2>
        </header>
        <main class="mainBox">
            <router-link :to="{path:'/Forget'}" class="list">
                <span>忘记密码</span>
                <span><i class="iconfont icon-arrow-right"></i></span>
            </router-link>
            <a class="list">
                <span>帮助反馈</span>
                <span><i class="iconfont icon-arrow-right"></i></span>
            </a>
            <a class="list">
                <span>关于我们</span>
                <span><i class="iconfont icon-arrow-right"></i></span>
            </a>
        </main>
        <footer class="footerBox"><span @click="forget">退出登录</span></footer>
        <div class="model" v-show="showClose">
            <span>{{models}}</span>
        </div>
    </div>
</template>
<script>
import {setCookie,getCookie,delCookie} from '../../../assets/js/cookie.js'
export default {
    name:'Install',
    data(){
        return{
            mobile:'',
            showClose:false,
            models:''
        }
    },
    mounted(){
    },
    methods:{
         history(){
            this.$router.go(-1);
        },
        forget(){
            var that = this 
            /*删除cookie*/
            delCookie('mobile')
            that.models = '两秒后返回首页'
            that.showClose = true
            setTimeout(() => {  
                 that.$router.push({path:'/'})   
            }, 2000);
        }
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}

.Install{
    height:100%;
    display:flex;
    flex-direction:column;
    .model{
        position:fixed;
        left:0;
        right:0;
        bottom:px2rem(180px);
        height:px2rem(40px);
        text-align:center;
        line-height:px2rem(40px);
        z-index:999;
        span{
            background:rgba(0,0,0,0.8);
            color:#fff;
            font-size:px2rem(24px);
            padding:0.2rem 1rem;
            border-radius:px2rem(40px);
        }
    }
    .installTop{
        height:px2rem(75px);
        background:#fe4f53;
        // background-color:#fb7768;
        // background-image:url(../../../assets/img/searchBox.png);
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
        display:flex;
        flex-direction:column;
        .list{
            display:flex;
            background:#fff;
            height:px2rem(85px);
            border-bottom:px2rem(1px) solid #ddd;
            justify-content:space-between;
            padding:0 px2rem(26px);
            span{
                font-size:px2rem(26px);
                margin:auto 0;
            }
            span:last-child{
                i{
                    font-size:px2rem(24px);
                    color:#999;
                }
            }
        }
        .list:last-child{
            border:0;
        }
    }
    .footerBox{
        height:px2rem(80px);
        background:#fff;
        line-height:px2rem(80px);
        text-align:center;
        display:flex;
        span{
            width:100%;
            margin:0;
            font-size:px2rem(24px);
            color:#fb7768;
            cursor:pointer;
        }
    }
}
</style>
