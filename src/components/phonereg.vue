<template>
    <div class="Reg">
        <header class="lohe">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <!-- <h2 class="Title">手机号注册</h2> -->
        </header>
        <div class="regHead">
            <div><span><img src="../assets/img/loginTop.png" alt=""></span></div>
        </div>
        <div class="regMain">
            <form action="">
                <div class="regBox">
                    <div class="inputBox">
                        <!-- <i class="iconfont icon-guke"></i> -->
                        <input type="text" name="手机号" placeholder="请输入手机号" @focus ="focus" @blur="nofocus" v-model="regPhone">
                    </div>
                    <div class="inputBox codes">
                        <!-- <i class="iconfont icon-yanzhengma"></i> -->
                        <input name="验证码" placeholder="请输入验证码" @focus ="focus" @blur="nofocus" v-model="regCode">
                        <div class="getOn">
                            <span @click="getCode">{{codeTxt}}</span>
                        </div>
                    </div>
                    <div class="inputBox password">
                        <!-- <i class="iconfont icon-mima"></i> -->
                        <input name="密码" :type="type" placeholder="请输入密码" @focus="focus" @blur="nofocus" v-model="regPassword">
                        <span class="iconfont" :class="icon" @click="look"></span>
                    </div>
                </div>
                <button type="button" class="regBtn" @click="regRequest">注册</button>
                <div class="steg">
                    <router-link :to="{path:'/Login'}">账号密码登录</router-link>
                </div>
            </form>
        </div>
        <div class="regInfo" v-show="toggle">
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
    name:'PhoneReg',
    data(){
        return{
            regPhone:'',
            regCode:'',
            regPassword:'',
            toggle:true,
            codeTxt:'获取验证码',
            timer:null,
            count:0,
            showClose:false,
            models:'',
            type:'password',
            icon:'icon-No-assets'
        }
    },
    methods:{
        history:function(){
            this.$router.go(-1);
        },
        focus:function(){
            this.toggle = !this.toggle;
        },
        nofocus:function(){
            this.toggle = this.toggle ;
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
        //获取验证码
        getCode:function(){
            var that = this
            let time_count = 120;
            if(this.regPhone==''||this.regPhone.length<11){
                this.showClose = !this.showClose
                this.models = '手机号错误'
                setTimeout(function(){
                    this.showClose=false
                        this.models = ''
                },2000)
            }
            if(this.regPhone!=''&&this.regPhone.length==11){
                //判断手机用户是否存在
                let modata = {'mobile':this.regPhone}
                axios.post(' http://192.168.0.200:1015/index.php/Mobile/Api/issetMobile',modata)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.status===1){
                        if (!this.timer) {
                            this.count = time_count;
                            this.timer = setInterval(() => {
                                if (this.count > 0 && this.count <= time_count) {
                                    this.count--;
                                    this.codeTxt = '倒计时' + this.count + '秒'
                                } else {
                                    this.codeTxt = '重新获取'
                                    clearInterval(this.timer);
                                    this.timer = null;
                                }
                            },1000)
                        }
                        let data = {'send':this.regPhone}
                        axios.post('http://192.168.0.200:1015/index.php/Mobile/Api/send_validate_code', data)
                        .then(res => {
                            console.log(res.data)
                            this.models= res.data.msg
                            this.showClose=true
                            setTimeout(() => {
                                that.models = ''
                                that.showClose = false 
                            }, 2000);
                        })
                    }
                    else{
                        this.models = res.data.msg
                        this.showClose = true
                        setTimeout(() => {
                            that.models = ''
                            that.showClose = false    
                        },2000);
                        //this.codeTxt = res.data.msg
                        return false   
                    }
                })
                
            } 
        },
        //注册判断
        regRequest:function(){
            var that = this
            //验证验证码是否正确
            let yzm = {'mobile':that.regPhone,'code':that.regCode}
            axios.post('http://192.168.0.200:1015/index.php/mobile/user/check_code', yzm)
                .then(res => {
                    console.log(res.data)
                    if (res.data.status === 1) {
                        let regRequest = {'mobile':that.regPhone,'password':that.regPassword}
                        axios.post('http://192.168.0.200:1015/mobile/user/ajax_reg',regRequest)
                            .then(res=>{
                                if(res.data.status === 1){
                                    that.models = res.data.msg
                                    that.showClose = true 
                                    setTimeout(function(){
                                        that.$router.push({path:'/Login'},2000) 
                                    })
                                }
                                else{
                                    return false
                                }
                            })
                    } else {
                        that.models = res.data.msg
                        that.showClose = true
                        setTimeout(function(){
                            that.models = ''
                            that.showClose = false
                        },2000)
                    }
                }
            )
        }
    },
    computed:{
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
.Reg{
    height:100%;
    flex:1;
    overflow-y:scroll;
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
        //background-color:#fe4f53;
        // background-image:url(../assets/img/searchBox.png);
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
    .regHead{
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
    .regMain{
        flex:1;
        display:flex;
        form{
            flex:1;
            display:flex;
            flex-direction:column; 
            .regBox{
                padding:px2rem(50px);
                .inputBox{
                    padding:0 px2rem(26px);
                    height:px2rem(80px);
                    border-radius:px2rem(8px);
                    border:px2rem(1px) solid #ededed;
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
                .inputBox:nth-child(2),.inputBox:nth-child(3){
                    border-top:0;
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
                .password{
                    position:relative;
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
            .regBtn{
                margin:0 px2rem(50px);
                height:px2rem(80px);
                background:#fe4f53;
                border-radius:px2rem(8px);
                font-size:px2rem(28px);
                color:#fff;
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
    .regInfo{
        height:px2rem(240px);
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