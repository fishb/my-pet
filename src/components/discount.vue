<template>
<div class="Discount">
    <header class="headerBox">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">优惠券</h2>
    </header>
    <main class="mainBox">
        <div class="couponM">
            <div class="couponL">158<em>元</em></div>
            <span class="line"></span>
            <div class="couponR">
                <div class="mains">
                    <h1>新人注册158元优惠券</h1>
                    <span>满5000元即可使用，此优惠券仅在精品馆使用</span>
                    <span>有效期至2019-01-01 00:00:00</span>
                </div>
                <div class="state">待使用</div>
            </div>
        </div>
        <div class="couponM">
            <div class="couponL">68<em>元</em></div>
            <span class="line"></span>
            <div class="couponR">
                <div class="mains">
                    <h1>新人注册68元优惠券</h1>
                    <span>满5000元即可使用，此优惠券仅在精品馆使用</span>
                    <span>有效期至2019-01-01 00:00:00</span>
                </div>
                <div class="state">待使用</div>
            </div>
        </div>
        <div class="couponM">
            <div class="couponL">60<em>元</em></div>
            <span class="line"></span>
            <div class="couponR">
                <div class="mains">
                    <h1>新人注册60元优惠券</h1>
                    <span>满5000元即可使用，此优惠券仅在精品馆使用</span>
                    <span>有效期至2019-01-01 00:00:00</span>
                </div>
                <div class="state">待使用</div>
            </div>
        </div>
        <div class="couponM">
            <div class="couponL">12<em>元</em></div>
            <span class="line"></span>
            <div class="couponR">
                <div class="mains">
                    <h1>新人注册12元优惠券</h1>
                    <span>满5000元即可使用，此优惠券仅在精品馆使用</span>
                    <span>有效期至2019-01-01 00:00:00</span>
                </div>
                <div class="state">待使用</div>
            </div>
        </div>
        <div class="couponM">
            <div class="couponL">18<em>元</em></div>
            <span class="line"></span>
            <div class="couponR">
                <div class="mains">
                    <h1>新人注册18元优惠券</h1>
                    <span>满5000元即可使用，此优惠券仅在精品馆使用</span>
                    <span>有效期至2019-01-01 00:00:00</span>
                </div>
                <div class="state">待使用</div>
            </div>
        </div>
        <div class="couponM">
            <div class="couponL">10<em>元</em></div>
            <span class="line"></span>
            <div class="couponR">
                <div class="mains">
                    <h1>新人注册10元优惠券</h1>
                    <span>满5000元即可使用，此优惠券仅在精品馆使用</span>
                    <span>有效期至2019-01-01 00:00:00</span>
                </div>
                <div class="state">待使用</div>
            </div>
        </div>
        <section class="rule">
            <div class="title">
                <span></span>
                <h5>优惠券规则</h5>
                <span></span>
            </div>
            <h4>1、优惠券必须在有效期内和指定使用范围内使用</h4>
            <h4>2、一个订单只能使用一张优惠券，可以和积分一起使用</h4>
            <h4>3、包括但不限于恶意刷单、利用程序漏洞、被封号处理等行为，平台将取消优惠券使用资格</h4>
            <h4>4、用户获得但未使用的积分，将在一个自然年底过期，宠物市场将在每年1月1日清空.上一年度获得但未使用的积分</h4>
            <h4>5、使用积分支付的订单，如果发生退款，积分将直接进行作废处理，不再返回</h4>
        </section>
    </main>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Discount',
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
.Discount{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
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
        .couponM{
            margin:px2rem(12px) px2rem(12px) 0;
            height:px2rem(130px);
            background:#fff;
            border-radius:px2rem(16px);
            display:flex;
            justify-content:space-between;
            padding:px2rem(16px) 0;
            .couponL{
                width:px2rem(125px);
                margin:auto 0;
                font-size:px2rem(41px);
                color:#fe4f53;
                text-align:right;
                em{
                    font-size:px2rem(21px);
                    margin:auto px2rem(6px);
                }
            }
            span.line{
                width:px2rem(2px);
                margin:0 px2rem(16px);
                background:#bac0c6;
            }
            .couponR{
                width:px2rem(430px);
                margin:auto 0;
                display:flex;
                justify-content:space-between;
                padding:0 px2rem(16px) 0 0;
                .mains{
                    width:px2rem(315px);
                    display:flex;
                    flex-direction:column;
                    h1{
                        font-size:px2rem(27px);
                        font-weight:normal;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                    }
                    span{
                        margin:auto 0;
                        font-size:px2rem(18px);
                        color:#999; 
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    span:last-child{
                        -webkit-line-clamp: 1;
                    }
                }
                .state{
                    width:px2rem(70px);
                    height:px2rem(70px);
                    line-height:px2rem(70px);
                    text-align:center;
                    margin:auto 0;
                    border:px2rem(1px) solid #fe4f53;
                    color:#bac0c6;
                    font-size:px2rem(21px);
                    border-radius:50%;
                    font-style:oblique;
                }
            }
        }
        .rule{
            padding:px2rem(42px);
            display:flex;
            flex-direction:column;
            .title{
                height:px2rem(40px);
                line-height:px2rem(40px);
                display:flex;
                justify-content:space-between;
                span{
                    flex:1;
                    height:px2rem(2px);
                    background:#bac0c6;
                    margin:auto 0;
                }
                h5{
                    font-size:px2rem(32px);
                    margin:auto px2rem(26px);
                    color:#999;
                    font-weight:normal;
                }
            }
            h4{
                font-size:px2rem(24px);
                font-weight:normal;
                color:#999;
                margin:px2rem(26px) 0;
            }
        }
    }
}
</style>