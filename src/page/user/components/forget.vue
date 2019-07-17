<template>
    <div class="Login">
        <header class="lohe">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">忘记密码</h2>
        </header>
        <div class="loginHead">
            <h5>找回密码，找回真我</h5>
        </div>
        <div class="loginMain">
            <form action="">
                <div class="loginBox">
                    <div class="inputBox">
                        <input type="text" name="手机号" placeholder="请输入手机号" @focus ="focus" @blur="nofocus" v-model="userPhone">
                    </div>
                    <div class="inputBox codes">
                        <!-- <i class="iconfont icon-yanzhengma"></i> -->
                        <input name="验证码" placeholder="请输入验证码" @focus ="focus" @blur="nofocus" v-model="regCode">
                        <div class="getOn">
                            <span @click="getCode">{{codeTxt}}</span>
                        </div>
                    </div>
                </div>
                <span class="loginBtn" @click="loginBtn">登录</span>
                <div class="steg">
                    <router-link :to="{path:'/PhoneReg'}">注册</router-link>
                    <a href="#">忘记密码</a>
                </div>
            </form>
        </div>
        <div class="loginInfo" v-show="toggle">
            <span class="Title">使用第三方账号登录</span>
            <div class="Third-li"> 
                <a href="#"><i class="iconfont icon-qq2"></i></a>
                <a href="#"><i class="iconfont icon-weixin1"></i></a>
                <a href="#"><i class="iconfont icon-icoweibo"></i></a>
            </div>
        </div>
        <div class="model" v-show="showClose">
            <span>{{models}}</span>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Login',
    data(){
        return{
            userPhone:'',
            userPassword:'',
            conveyName:'',
            conveyPassword:'',
            type:'password',
            icon:'icon-No-assets',
            toggle:true,
            showClose:false,
            models:''
        }
    },
    mounted(){    
    },
    methods:{
        history:function(){
            this.$router.go(-1);
        },
        look:function(){
            if(this.type=='password'){
                this.type='text';
                this.icon='icon-kan'
            }else{
                this.type='password';
                this.icon='icon-No-assets';
            }   
        },
        focus:function(){
            this.toggle = false;
        },
        nofocus:function(){
            this.toggle = true ;
        },
    },
    computed:{
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
.Login{
    height:100%;
    display:flex;
    flex-direction:column;
    background:#fff;
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
    .lohe{
        height:px2rem(75px);
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
                color:#bac0c6;
            }
        }
        .Title{
            margin:auto;
            color:#fff;
            font-size:px2rem(30px);
            font-weight:normal;
        }
    }
    .loginHead{
        height:px2rem(100px);
        display:flex;
        h5{
            margin:auto;
            font-size:px2rem(32px);
            font-weight:bold;
            font-family:Helvetica;
        }
    }
    .loginMain{
        flex:1;
        display:flex;
        form{
            flex:1;
            display:flex;
            flex-direction:column; 
            .loginBox{
                padding:px2rem(50px);
                .inputBox{
                    padding:0 px2rem(26px);
                    height:px2rem(80px);
                    border:px2rem(1px) solid #ededed;
                    border-radius:px2rem(8px);
                    display:flex;
                    i{
                        font-size:px2rem(40px);
                        color:#fe4f53;
                        margin:auto px2rem(14px) auto 0;
                    }
                    input{
                        flex:1;
                        font-size:px2rem(26px);
                    }
                }
                .codes{
                    position:relative;
                    .getOn{
                        position:absolute;
                        top:0;
                        bottom:0;
                        right:px2rem(26px);
                        //width:px2rem(170px);
                        display:flex;
                        span{
                            padding:0 px2rem(20px);
                            flex:1;
                            margin:auto 0;
                            height:px2rem(40px);
                            line-height:px2rem(40px);
                            font-size:px2rem(24px);
                            background:#fe4f53;
                            border-radius:px2rem(20px);
                            color:#fff;
                            text-align:center;
                            cursor:pointer;
                        }
                    }
                }
            }
            .loginBtn{
                margin:0 px2rem(50px);
                height:px2rem(80px);
                background:#fe4f53;
                border-radius:px2rem(8px);
                font-size:px2rem(28px);
                color:#fff;
                text-align:center;
                line-height:px2rem(80px);
            }
            .steg{
                padding:px2rem(40px) 0;
                display:flex;
                justify-content:space-around;
                a{
                    font-size:px2rem(24px);
                    color:#fe4f53;
                    margin:auto 0;
                }
            }
        }
    }
    .loginInfo{
        height:px2rem(320px);
        display:flex;
        flex-direction:column;
        span{
            height:px2rem(50px);
            line-height:px2rem(50px);
            font-size:px2rem(24px);
            color:#949494;
            margin:auto 0;
            text-align:center;
        }
        .Third-li{
            flex:1;
            width:70%;
            display:flex;
            margin:auto;
            justify-content:space-between;
            a{
                display:flex;
                width:px2rem(75px);
                height:px2rem(75px);
                background:#fe4f53;
                border-radius:50%;
                text-align:center;
                margin:px2rem(40px) auto;
                i{
                    margin:auto;
                    font-size:px2rem(36px);
                    color:#fff;
                }
            }
            a:first-child{
                background:#64aefb;
            }
            a:nth-child(2){
                background:#9acc75;
            }
            a:last-child{
                background:#fba170;
            }
        }
    }
}
</style>