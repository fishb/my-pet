<template>
    <div class="Reg">
        <header class="lohe">
            <span><i class="iconfont icon-fanhui6" @click="history"></i></span>
            <h2 class="Title">注册</h2>
        </header>
        <div class="regHead">
            <div><span><img src="../assets/img/regTop.png" alt=""></span></div>
        </div>
        <div class="regMain">
            <form action="">
                <div class="regBox">
                    <div class="inputBox">
                        <i class="iconfont icon-guke"></i>
                        <input type="text" name="用户名" placeholder="请输入用户名" @focus ="focus" @blur="nofocus" v-model="regName">
                    </div>
                    <div class="inputBox password">
                        <i class="iconfont icon-mima"></i>
                        <input :type="type" name="密码" placeholder="请输入密码" @focus ="focus" @blur="nofocus" v-model="regPassword">
                        <span class="iconfont" :class="icon" @click="look"></span>
                    </div>
                </div>
                <button type="button" class="regBtn" @click="regBtn">注册</button>
                <div class="steg">
                    <router-link :to="{path:'/Login'}">账号密码登录</router-link>
                    <a href="#">忘记密码</a>
                </div>
            </form>
        </div>
        <div class="regInfo" v-show="toggle">
            <span class="Title">使用第三方账号登录</span>
            <div class="Third-li">
                <a href="#"><i class="iconfont icon-weixin1"></i></a>
                <a href="#"><i class="iconfont icon-qq2"></i></a>
                <a href="#"><i class="iconfont icon-icoweibo"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Reg',
    data(){
        return{
            regName:'',
            regPassword:'',
            type:'password',
            icon:'icon-No-assets',
            toggle:true
        }
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
        //登录判断
        regBtn:function(){
            if(this.regName==''||this.regPassword==''){
                console.log('请输入用户名或密码!')
            }else{
                let data = {'username':this.regName,'password':this.regPassword}
                axios.post('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/login', data)
                .then(res => {
                    console.log(res.data)
                    if (res.data.code === 0) {
                        this.$message({
                            showClose: true,
                            message: '注册成功',
                            type: 'success'
                        })
                        router.push({name:'Login'})
                    } else {
                        this.$message({
                            showClose: true,
                            message: '注册失败',
                            type: 'error'
                        })
                    }
                })
            }
        }
    },
    computed:{

    },
    mounted(){    
    },
    created(res){
        var _this = this;
        // `this` 指向 vm 实例
        // 为给定 ID 的 user 创建请求
        axios.post('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/reg')
            .then(function (res) {
                var reg = res.data.data
                _this.conveyName = reg.user
                _this.conveyPassword = reg.password
                console.log(reg);
                // if(_this.name==reg.name||_this.password==reg.password){
                //     alert('登录成功')
                // }
                // _this.arrival = res.data.data ;
            })
            .catch(function (error) {
                console.log(请求失败);
         });
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
    .lohe{
        height:px2rem(75px);
        background-color:#fb7768;
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
                font-size:px2rem(46px);
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
    .regHead{
        height:px2rem(195px);
        display:flex;
        div{
            margin:auto auto 0;
            width:px2rem(143px);
            height:px2rem(143px);
            background:#fb7768;
            border-radius:50%;
            border:px2rem(2px) solid #fb7768;
            span{
                width:100%;
                height:100%;
                border:px2rem(4px) solid #fff;
                border-radius:50%;
                display:flex;
                img{
                    width:px2rem(100px);
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
                padding:px2rem(50px) 0;
                .inputBox{
                    padding:0 px2rem(26px);
                    height:px2rem(80px);
                    border-bottom:px2rem(1px) solid #ededed;
                    display:flex;
                    i{
                        font-size:px2rem(40px);
                        color:#fb7768;
                        margin:auto px2rem(14px) auto 0;
                    }
                    input{
                        flex:1;
                        font-size:px2rem(26px);
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
                        color:#fb7768;
                    }
                    span:before{
                        margin:auto;
                    }
                }
            }
            .regBtn{
                margin:0 px2rem(26px);
                height:px2rem(80px);
                background:#fb7768;
                border-radius:px2rem(56px);
                font-size:px2rem(28px);
                color:#fff;
            }
            .steg{
                padding:px2rem(40px) auto 0;
                display:flex;
                flex:1;
                justify-content:space-around;
                a{
                    font-size:px2rem(24px);
                    color:#fb7768;
                    margin:auto 0;
                }
            }
        }
    }
    .regInfo{
        height:px2rem(200px);
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
                background:#fb7768;
                border-radius:50%;
                text-align:center;
                margin:px2rem(40px) auto;
                i{
                    margin:auto;
                    font-size:px2rem(36px);
                    color:#fff;
                }
            }
        }
    }
}
</style>
