<template>
    <div class="Login">
        <header class="lohe">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        </header>
        <div class="loginHead">
            <div><span><img src="../assets/img/loginTop.png" alt=""></span></div>
        </div>
        <div class="loginMain">
            <form action="">
                <div class="loginBox">
                    <div class="inputBox">
                        <input type="text" name="手机号" placeholder="请输入手机号" @focus ="focus" @blur="nofocus" v-model="userPhone">
                    </div>
                    <div class="inputBox password">
                        <input :type="type" name="密码" placeholder="请输入密码" @focus ="focus" @blur="nofocus" v-model="userPassword">
                        <span class="iconfont" :class="icon" @click="look"></span>
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
import {setCookie} from '../assets/js/cookie.js'
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
        history(){
            this.$router.go(-2);
        },
        look(){
            if(this.type=='password'){
                this.type='text';
                this.icon='icon-kan'
            }else{
                this.type='password';
                this.icon='icon-No-assets';
            }   
        },
        focus(){
            this.toggle = false;
        },
        nofocus(){
            this.toggle = true ;
        },
        //登录判断
        loginBtn(){
            var that = this
            var datas = {'mobile':that.userPhone,'password':that.userPassword}
            axios.post('http://192.168.0.200:1015/mobile/user/do_login',datas)
            .then(function(res){
                if(res.data.status == 1){
                    that.models = res.data.msg + '两秒后进入会员中心'
                    that.showClose = true 
                    //setCookie('mobile',that.userPhone,1*60)
                    that.$router.push({path:'/User',name:'User'})
                }
                else{
                    return false
                    that.models = res.data.msg
                    that.showClose = true
                    setTimeout(function(){
                        that.models = ''
                        that.showClose = false
                    },2000);
                }
            })
            .catch(function(error){
                that.models = '好尴尬，请求失败了'
                that.showClose = true
                setTimeout(function(){
                    that.models =''
                    that.showClose = false
                }, 2000);
                console.log(请求失败);
            });
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
        height:px2rem(160px);
        //height:px2rem(195px);
        display:flex;
        div{
            margin:auto auto;
            // width:px2rem(195px);
            // height:px2rem(195px);
            width:px2rem(143px);
            height:px2rem(143px);
            // background:#fe4f53;
            // border-radius:50%;
            // border:px2rem(2px) solid #fe4f53;
            span{
                width:100%;
                height:100%;
                // border:px2rem(4px) solid #fff;
                // border-radius:50%;
                display:flex;
                img{
                    width:100%;
                    //width:px2rem(100px);
                    margin:auto;
                }
            }
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
                .password{
                    position:relative;
                    border-top:0;
                    span{
                        position:absolute;
                        right:px2rem(26px);
                        font-size:px2rem(40px);
                        height:px2rem(80px);
                        display:flex;
                        color:#fe4f53;
                    }
                    span:before{
                        margin:auto;
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
        overflow:hidden;
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
