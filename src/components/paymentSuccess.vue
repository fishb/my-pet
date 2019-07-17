<template>
<div class="paymentSuccess">
    <header class="headerBox">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">订单详情</h2>
    </header>
    <!--支付成功的订单详情--> 
    <main class="mainBox">
        <div class="payBox">
            <div class="typeHead">
                <span>订单编号：1808101529121754</span> 
                <span class="red">已完成</span>
            </div> 
            <a href="/Substance/id1" class="typeItem">
                <div class="img">
                    <img src="http://img3.imgtn.bdimg.com/it/u=3713981835,3306284512&amp;fm=27&amp;gp=0.jpg">
                </div> 
                <div class="middle">
                    <h4>四季猫咪垫子猫屋猫房子宠物用品</h4> 
                    <span>型号：S</span>
                </div> 
                <div class="sum">
                    <div class="price">
                        <span>¥198</span>
                        <span class="oprice">¥208</span>
                    </div> 
                    <div class="amount">X1</div>
                </div>
            </a>
            <div class="total">
                <span>共20件商品</span> 
                <span class="todollr">实付：¥296</span>
            </div> 
            <div class="settle">
                <span>2018-02-05 23:44:35</span> 
            </div>
        </div>
        <div class="payMethods">
            <div class="payMT">
                <span>支付方式</span>
                <div class="payth">
                    <img src="../assets/icon/wx.png" alt="">
                    <em>微信支付</em>
                    <!-- <img src="../assets/icon/zfb.png" alt="">
                    <em>支付宝</em> -->
                </div>
            </div>
            <div class="payMB">
                <div class="payTy">
                    <span>订单金额</span>
                    <em>¥188.00</em>
                </div>
                <div class="payTy">
                    <span>优惠抵扣</span>
                    <em>-¥0.00</em>
                </div>
                <div class="payTy">
                    <span>实付金额</span>
                    <em>¥128.00</em>
                </div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'paymentSuccess',
    data(){
        return{
            id:this.$route.params.id,
            cancel:false
        }
    },
    methods:{
        history:function(){
            this.$router.go(-1);
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
.paymentSuccess{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
        position:relative;
        display:flex;
        box-shadow:0 px2rem(4px) px2rem(1px) #eee;
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
        padding:px2rem(26px);
        flex:1;
        overflow-y:scroll;
        .payBox{
            background:#fff;
            box-shadow:0 px2rem(4px) px2rem(1px) #eee;
            .typeHead{
                height:px2rem(70px);
                padding:0 px2rem(26px);
                display:flex;
                justify-content:space-between;
                span{
                    font-size:px2rem(21px);
                    color:#999;
                    margin:auto 0;
                }
                span:first-child{
                    flex:1;
                }
            }
            .typeItem{
                display:flex;
                justify-content:space-between;
                padding:0 px2rem(26px);
                height:px2rem(160px);
                .img{
                    display:flex;
                    width:px2rem(108px);
                    img{
                        max-width:100%;
                        margin:auto;
                    }
                }
                .middle{
                    flex:1;
                    display:flex;
                    flex-direction:column;
                    margin:0 px2rem(26px);
                    h4{
                        margin:auto 0 px2rem(6px);
                        font-size:px2rem(22px);
                        overflow:hidden;
                        text-overflow:ellipsis;
                        display:-webkit-box;
                        -webkit-line-clamp:2;
                        -webkit-box-orient:vertical;
                    }
                    span{
                        margin:px2rem(6px) 0 auto;
                        font-size:px2rem(20px);
                        color:#999;
                    }
                }
                .sum{
                    width:px2rem(140px);
                    display:flex;
                    flex-direction:column;
                    margin:auto 0;
                    .price{
                        margin:auto 0 px2rem(6px);
                        text-align:right;
                        span{
                            display:block;
                            font-size:px2rem(20px);
                            margin:px2rem(6px) auto;
                        }
                        span.oprice{
                            color:#999;
                            text-decoration:line-through;
                        }
                    }
                    .amount{
                        font-size:px2rem(20px);
                        color:#999;
                        text-align:right;
                    }
                }
            }
            .total{
                border-top:px2rem(1px) dashed #ddd;
                border-bottom:px2rem(1px) dashed #ddd;
                height:px2rem(70px);
                padding:0 px2rem(26px);
                display:flex;
                justify-content:flex-end;
                span{
                    margin:auto px2rem(6px);
                    color:#999;
                    font-size:px2rem(22px);
                }
                span.todollr{
                    color:#000;
                }
            }
            .settle{
                height:px2rem(85px);
                padding:0 px2rem(26px);
                display:flex;
                justify-content:flex-end;
                span{
                    flex:1;
                    margin:auto 0;
                    color:#999;
                    font-size:px2rem(26px);
                }
                a{
                    margin:auto px2rem(16px);
                    border:px2rem(1px) solid #000;
                    font-size:px2rem(20px);
                    padding:px2rem(8px);
                    border-radius:px2rem(6px);
                }
                a:first-child{
                    margin:auto 0;
                }
                a.active{
                    color:#fe4f53;
                    border-color:#fe4f53;
                }
            }
        }
        .payMethods{
            margin:px2rem(26px) 0;
            background:#fff;
            box-shadow:0 px2rem(4px) px2rem(1px) #eee;
            display:flex;
            flex-direction:column;
            .payMT{
                border-bottom:px2rem(1px) solid #eee;
                padding:px2rem(26px);
                display:flex;
                flex-direction:column;
                span{
                    margin:px2rem(12px) 0;
                    font-size:px2rem(26px);
                    color:#999;
                }
                .payth{
                    display:flex;
                    justify-content:flex-start;
                    margin:px2rem(16px) 0 0;
                    img{
                        width:px2rem(80px);
                        height:px2rem(80px);
                        margin:auto px2rem(16px);
                    }
                    em{
                        font-size:px2rem(28px);
                        color:#000;
                        margin:auto 0;
                    }
                }
            }
            .payMB{
                padding:px2rem(26px);
                display:flex;
                flex-direction:column;
                .payTy{
                    display:flex;
                    justify-content:space-between;
                    margin:px2rem(12px) 0;
                    span{
                        font-size:px2rem(24px);
                        color:#46474d;
                        margin:auto 0;
                    }
                    em{
                        font-size:px2rem(24px);
                        color:#fe4f53;
                        margin:auto 0;
                    }
                }
            }
        }
    }
}
</style>