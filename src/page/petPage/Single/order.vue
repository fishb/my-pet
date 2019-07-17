<template>
<div class="Order">
    <header class="headerBox">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">订单信息</h2>
    </header>
    <!--未支付成功的订单模板--> 
    <template>
    <main class="mainBox">
        <div class="tips">
            <span>等您支付，您可以通过支付宝或微信支付</span>
            <span>距买家付款还剩<em>29分47秒</em>,超时未付款，订单将自动关闭</span>
        </div> 
        <div class="sellerBox">
            <div class="name">
                <div class="imgBox"><img src="../../../assets/img/category6.png"></div>
                <span>乐家宠物</span>
            </div>
            <div class="line"></div>
            <router-link :to="/Chat/+'1'" class="contact">
                <i class="iconfont icon-xinxi"></i>
                <span>联系卖家</span>
            </router-link>
        </div> 
        <!--宠物信息-->
        <div class="petInformation">
            <div class="petImg">
                <img src="../../../assets/img/category1.png" alt="">
            </div>
            <div class="petInfo">
                <div class="petName">
                    <h4>泰迪</h4>
                    <span>母</span>
                </div>
                <div class="price">
                    <span>实付<em>¥495.0</em></span>
                    <span>(含自提运费0元)</span>
                </div>
            </div>
        </div>
        <!--付款明细-->
        <div class="payMain">
            <div class="flexs">
                <div class="flexBox">
                    <span>原价:</span>
                    <span><font>500</font>元</span>
                </div>
                <div class="flexBox">
                    <span>运费:</span>
                    <span><font>0</font>元</span>
                </div>
                <div class="flexBox">
                    <span>优惠券抵扣:</span>
                    <span><font>-0.0</font>元</span>
                </div>
                <div class="flexBox">
                    <span>积分抵扣:</span>
                    <span><font>-5.0</font>元</span>
                </div>
                <div class="flexBox">
                    <span>实付:</span>
                    <span><font>495.0</font>元</span>
                </div>
            </div>
        </div>
        <!--订单编号-->
        <section class="dealBox">
            <div class="dealT">
                <div class="ty">
                    <span>收货人:</span>
                    <span>初学前端</span>
                    <span>18870033089</span>
                </div>
                <div class="ty">
                    <span>收货地址:</span>
                    <span>中国江西省南昌市东湖区红谷中大道1619号</span>
                </div>
            </div>
            <div class="dealB">
                <div class="ty">
                    <span>卖家名称:</span>
                    <span>乐家宠物</span>
                </div>
                <div class="ty">
                    <span>订单编号</span>
                    <span>0721107930481</span>
                </div>
                <div class="ty">
                    <span>下单时间</span>
                    <span>2018-07-21 10:47:19</span>
                </div>
            </div>
        </section>
        <!--交易提醒-->
        <section class="tipBox">
            <h5>交易提醒</h5>
            <span>1、买家下单前，请向卖家充分了解商品情况，并约定交易细节</span>
            <span>2、请用宠物直销私聊功能约定，并保持相关聊天记录作为担保凭证</span>
            <span>3、点击安心支付表示同意 <a href="#">用户条款</a></span>
            <router-link :to="'/paymentSuccess/'+id">
                支付成功后的页面，暂时先展示在此处
            </router-link>
        </section>
    </main>
    <footer class="footerBox" @click="cancelBtn" >
        <span>我要付款</span>
    </footer>
    <!--支付弹窗-->
    <section class="payBox" v-if="cancel">
        <div class="dilog">
            <div class="dilogTy">
                <router-link :to="{path:'/Order'}">支付宝</router-link>
                <span>微信</span>
            </div>
            <div class="cancel" @click="cancelBtn">取消</div>
        </div>
    </section>
    </template>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Order',
    data(){
        return{
            id:this.$route.params.id,
            cancel:false
        }
    },
    methods:{
        history:function(){
            this.$router.go(-1);
        },
        cancelBtn(){
            if(this.cancel == false){
                this.cancel = true
            }else{
                this.cancel = false
            }
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
.Order{
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
        .tips{
            height:px2rem(160px);
            padding:0 px2rem(16px);
            background:#fefbdc;
            display:flex;
            flex-direction:column;
            span{
                font-size:px2rem(26px);
                font-weight:600;
                color:#000;
                margin:auto 0 px2rem(6px);
                em{
                    color:#fe4f53;
                }
            }
            span:last-child{
                margin:px2rem(6px) 0 auto;
            }
        }
        .sellerBox{
            height:px2rem(110px);
            background:#fff;
            padding:px2rem(16px);
            display:flex;
            justify-content:space-between;
            box-shadow:0 px2rem(4px) px2rem(1px) #eee;
            .name{
                flex:1;
                display:flex;
                justify-content:flex-start;
                .imgBox{
                    width:px2rem(160px);
                    height:px2rem(80px);
                    margin:auto 0;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                span{
                    font-size:px2rem(26px);
                    font-weight:600;
                    color:#000;
                    margin:auto 0;
                }
            }
            .line{
                width:px2rem(2px);
                background:#eee;
                margin:0 px2rem(26px);
            }
            .contact{
                width:px2rem(170px);
                display:flex;
                justify-content:center;
                color:#46474d;
                i{
                    margin:auto px2rem(12px);
                    font-size:px2rem(36px);
                }
                span{
                    margin:auto 0;
                    font-size:px2rem(26px);
                    font-weight:600;
                }
            }
        }
        .petInformation{
            padding:0 px2rem(26px);
            height:px2rem(185px);
            margin:px2rem(26px) auto;
            background:#fff;
            display:flex;
            justify-content:flex-start;
            box-shadow:0 px2rem(4px) px2rem(1px) #eee;
            .petImg{
                margin:auto 0;
                width:px2rem(155px);
                height:px2rem(155px);
                img{
                    width:100%;
                    height:100%;
                }
            }
            .petInfo{
                margin:auto px2rem(16px);
                flex:1;
                display:flex;
                flex-direction:column;
                .petName{
                    margin:auto 0 px2rem(6px);
                    display:flex;
                    justify-content:flex-start;
                    h4{
                        margin:auto 0;
                        font-size:px2rem(30px);
                        font-weight:normal;
                    }
                    span{
                        margin:auto px2rem(12px);
                        background:#31b2ff;
                        color:#fff;
                        padding:px2rem(6px) px2rem(12px);
                        border-radius:px2rem(16px);
                    }
                    span.woman{
                        background:#fe4f53;
                    }
                }
                .price{
                    font-size:px2rem(24px);
                    color:#fe4f53;
                    margin:px2rem(6px) 0 auto;
                    span{
                        color:#46474d;
                        em{
                            color:#fe4f53;
                        }
                    }
                }
            }
        }
        .payMain{
            padding:px2rem(12px) px2rem(26px);
            margin:px2rem(26px) auto;
            background:#fff;
            display:flex;
            justify-content:space-between;
            box-shadow:0 px2rem(4px) px2rem(1px) #eee;
            h5{
                margin:px2rem(16px) 0;
                width:px2rem(145px);
                font-size:px2rem(24px);
                color:#46474d;
                font-weight:normal;
            }
            .flexs{
                flex:1;
                display:flex;
                flex-direction:column;
                .flexBox{
                    margin:px2rem(16px) 0 0;
                    //height:px2rem(50px);
                    display:flex;
                    justify-content:space-between;
                    span{
                       margin:auto 0;
                       font-size:px2rem(24px);
                       color:#46474d; 
                       font{
                           color:#fe4f53;
                       }
                    }
                }
            }
        }
        .dealBox{
            background:#fff;
            box-shadow:0 px2rem(4px) px2rem(1px) #eee;
            .dealT{
                padding:0 px2rem(16px);
                height:px2rem(130px);
                border-bottom:px2rem(1px) solid #eee;
                display:flex;
                flex-direction:column;
                .ty{
                   flex:1; 
                   display:flex;
                   //justify-content:space-between;
                   span{
                       font-size:px2rem(24px);
                       color:#46474d;
                       margin:auto 0;
                   }
                   span:first-child{
                       width:px2rem(140px);
                   }
                   span:nth-child(2){
                       flex:1;
                   }
                }
            }
            .dealB{
                padding:px2rem(36px) px2rem(16px);
                height:px2rem(180px);
                display:flex;
                flex-direction:column;
                .ty{
                   flex:1; 
                   display:flex;
                   span{
                       font-size:px2rem(24px);
                       color:#46474d;
                       margin:auto 0;
                   }
                   span:first-child{
                       width:px2rem(140px);
                   }
                   span:nth-child(2){
                       flex:1;
                   }
                }
            }
        }
        .tipBox{
            padding:px2rem(26px);
            display:flex;
            flex-direction:column;
            h5{
                font-size:px2rem(24px);
                font-weight:normal;
                color:#999;
            }
            span{
                font-size:px2rem(24px);
                color:#999;
                a{
                    color:#fe4f53;
                }
            }
        }
    }
    .payBox{
        position:fixed;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.4);
        z-index:46474d9;
        .dilog{
            position:fixed;
            width:100%;
            bottom:0;
            display:flex;
            flex-direction:column;
            padding:0 px2rem(12px);
            .dilogTy{
                height:px2rem(165px);
                background:rgba(255,255,255,0.8);
                border-radius:px2rem(16px);
                span,a{
                    display:block;
                    height:px2rem(165px/2);
                    text-align:center;
                    line-height:px2rem(165px/2);
                    margin:auto;
                    font-size:px2rem(36px);
                    color:#31b2ff;
                }
                span:first-child,a:first-child{
                    border-bottom:px2rem(1px) solid #bac0c6;
                }
            }
            .cancel{
                height:px2rem(165px/2);
                margin:px2rem(12px) 0;
                text-align:center;
                line-height:px2rem(165px/2);
                background:rgba(255,255,255,0.8);
                border-radius:px2rem(16px);
                color:#31b2ff;
                font-size:px2rem(36px);
            }
        }
    }
    .footerBox{
        width:100%;
        height:px2rem(90px);
        display:flex;
        cursor:pointer;
        span{
            width:100%;
            line-height:px2rem(90px);
            background:#fe4f53;
            color:#fff;
            text-align:center;
            font-size:px2rem(24px);
        }
    }
}
</style>