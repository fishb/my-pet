<template>
<div class="Onbusine">
    <div class="OnbusineTop">
        <span>推/荐/商/家</span>
    </div>
    <div class="OnbusineMain">
        <router-link :to="'/Detail/'+'1'">
            <div class="iconImg">
                <div class="img"><img src="../../../assets/img/category1.png" alt=""></div>
                <div class="authType authType1">平台认证</div>
            </div>
            <div class="iconName">
                <h4>乐家宠物</h4>
                <span>江苏 徐州</span>
            </div>
        </router-link>
        <router-link :to="'/Detail/'+'2'">
            <div class="iconImg">
                <div class="img"><img src="../../../assets/img/category2.png" alt=""></div>
                <div class="authType authType2">自营店</div>
            </div>
            <div class="iconName">
                <h4>阿宝精品宠物</h4>
                <span>江西 九江</span>
            </div>
        </router-link>
        <router-link :to="'/Detail/'+'3'">
            <div class="iconImg">
                <div class="img"><img src="../../../assets/img/category5.png" alt=""></div>
                <div class="authType authType3">实名认证</div>
            </div>
            <div class="iconName">
                <h4>千乐宠物</h4>
                <span>四川 成都</span>
            </div>
        </router-link>
        <router-link :to="'/Detail/'+'4'">
            <div class="iconImg">
                <div class="img"><img src="../../../assets/img/category7.png" alt=""></div>
                <div class="authType authType4">个人认证</div>
            </div>
            <div class="iconName">
                <h4>爱宠</h4>
                <span>江西 南昌</span>
            </div>
        </router-link>
        <router-link :to="'/Detail/'+'5'">
            <div class="iconImg">
                <div class="img"><img src="../../../assets/img/category3.png" alt=""></div>
                <div class="authType">个人认证</div>
            </div>
            <div class="iconName">
                <h4>宠她</h4>
                <span>江西 宜春</span>
            </div>
        </router-link>
        <router-link :to="'/Detail/'+'6'">
            <div class="iconImg">
                <div class="img"><img src="../../../assets/img/category1.png" alt=""></div>
                <div class="authType">个人认证</div>
            </div>
            <div class="iconName">
                <h4>振宇犬舍</h4>
                <span>河南 新乡</span>
            </div>
        </router-link>
        <router-link :to="'/Detail/'+'7'">
            <div class="iconImg">
                <div class="img"><img src="../../../assets/img/category4.png" alt=""></div>
                <div class="authType">个人认证</div>
            </div>
            <div class="iconName">
                <h4>甄乐宠</h4>
                <span>北京 朝阳</span>
            </div>
        </router-link>
        <router-link :to="'/Detail/'+'8'">
            <div class="iconImg">
                <div class="img"><img src="../../../assets/img/category8.png" alt=""></div>
                <div class="authType">个人认证</div>
            </div>
            <div class="iconName">
                <h4>终身犬舍</h4>
                <span>云南 大理</span>
            </div>
        </router-link>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Onbusine',
    data(){
        return{
            onseller:''
        }
    },
    methods:{
        ssf(){
            var _this = this;
            // `this` 指向 vm 实例
            // 为给定 ID 的 user 创建请求
            axios.post('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/tuijianshangjia')  
                .then(function (res) { 
                    _this.onseller = res.data.data ;                
                })
                .catch(function (error) {
                    console.log(请求失败);
            });
        }

    },
    computed:{  	
    },
    mounted(){  
        this.$nextTick(this.ssf)
    },
    created(){     
    }
}
</script>
<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Onbusine{
    // height:px2rem(435px);
    background:#fff;
    margin:px2rem(12px) auto;
    display:flex;
    flex-direction:column;
    .OnbusineTop{
        height:px2rem(65px);
        line-height:px2rem(65px);
        text-align:center;
        border-bottom:px2rem(1px) solid #eee;
        span{
            font-size:px2rem(24px);
            font-weight:bold;
            background-image:-webkit-gradient(linear,left top, right bottom, from(#fe4f53), to(#ff9c55));
            -webkit-background-clip:text;
            -webkit-text-fill-color: transparent;
            letter-spacing:px2rem(12px);
        }     
    }
    .OnbusineMain{
        display:flex;
        flex-wrap:wrap;
        padding:px2rem(26px);
        a{
            width:25%;
            display:flex;
            flex-direction:column;
            .iconImg{
                display:flex;
                flex-direction:column;
                text-align:center;
                .img{
                    width:px2rem(80px);
                    background:#fafdfa;
                    border-radius:50%;
                    overflow:hidden;
                    margin:auto;
                    img{
                        width:auto;
                        max-width:100%;
                        margin:auto;
                    }
                }
                .authType{
                    margin:auto;
                    margin-top:-(px2rem(20px));
                    padding:px2rem(3px) px2rem(12px);
                    font-size:px2rem(22px);
                    color:#fff;
                    background:linear-gradient(#ee3f53, #fe4f53);
                    border-radius:px2rem(20px);
                }
                .authType1{
                    background:linear-gradient(#f2709c, #ff9472);
                }
                .authType2{
                    background: linear-gradient(#ce71f7, #bd55ef);
                }
                .authType3{
                    background:linear-gradient(#39bbe7, #1886ef);
                }
                .authType4{
                    background:linear-gradient(#ff7251,#ff456b);
                }
            }
            .iconName{
                margin:px2rem(12px) 0;
                display:flex;
                flex-direction:column;
                h4{
                    font-size:px2rem(22px);
                    font-weight:normal;
                    text-align:center;
                    color:#000;
                    text-overflow:ellipsis;
                    overflow:hidden;
                    white-space:nowrap;
                }
                span{
                    margin:px2rem(6px) 0 0;
                    font-size:px2rem(20px);
                    color:#bac0c6;
                    text-align:center;
                }
            }
        }
    }
}
</style>