<template>
<div class="Single">
    <header class="headerBox">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">填写订单</h2>
    </header>
    <main class="mainBox">
        <router-link :to="{path:'/Edit'}" class="consignee">
            <div class="consigneeL">
                <div class="consigneeT">
                    <span>收货人:</span>
                    <em>江泽东</em>
                </div>
                <div class="consigneeB">
                    <span>收货地址:</span>
                    <em>南昌市国际金融中心A座2807</em>
                </div>
            </div>
            <div class="consigneeR">
                 <i class="iconfont icon-youjiantou"></i>   
            </div>
        </router-link>
        <!--商品信息-->
        <div class="petInformation">
            <div class="petImg">
                <img src="../../../assets/img/stape.png" alt="">
            </div>
            <div class="petInfo">
                <div class="petName">
                    <h4>顽皮Wanpy 牛肉慕斯狗罐头</h4>
                </div>
                <div class="price">
                    ¥{{unitPrice}}
                </div>
            </div>
            <div class="counter">
                <span @click="reduce" :class="defult?'defult':''">－</span>
                <em>{{counter}}</em>
                <span @click="plus">＋</span>
            </div>
        </div>
        <!--卖家信息-->
        <section class="sellerBox">
            <div class="sellName">
                <span>卖家名称:</span>
                <em>阳光宠物</em>
            </div>
            <div class="sellName">
                <span>卖家地址:</span>
                <em>福建泉州丰泽区刺桐路金信花苑</em>
            </div>
        </section>
        <!--选择积分、优惠券-->
        <section class="choice">
            <h5>选择积分、优惠券</h5>
            <div class="choiceBox">
                <div class="choiceBtn" @click="dilogT">
                    <em>优惠券:</em>
                    <h6>满3000，减<font>58元</font></h6>
                    <span class="usable">2张可用<i class="iconfont icon-arrow-right"></i></span>
                </div>
                <div class="choiceBtn">
                    <em>积分:</em>
                    <h6>可用{{choice}}分，抵扣{{choice/100}}元</h6>
                    <div class="switch" @click="switchActive" :class="actived?'switchActive':''">
                        <span class="switchBtn"></span>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="footerBox">
        <div class="total">
            <div class="totalBox"><span>合计:<em>{{total}}元</em></span></div>
            <div class="totalBox">
                <span>运费<em>0元</em></span>
                <span>抵扣<em>{{dk}}元</em></span>
            </div>
        </div>
        <div class="goPay" @click="cancelBtn">安心支付</div>
    </footer>
    <!--优惠券弹出层-->
    <div class="coupon" v-if="dilog" @click="dilogT">
        <div class="dilog">
            <div class="Title">优惠券</div>
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
                <div class="couponL">60<em>元</em></div>
                <span class="line"></span>
                <div class="couponR">
                    <div class="mains">
                        <h1>新人注册158元优惠券</h1>
                        <span>满2000元即可使用，此优惠券仅在精品馆使用</span>
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
        </div>
    </div>
    <!--支付弹窗-->
    <section class="payBox" v-if="cancel">
        <div class="dilog">
            <div class="dilogTy">
                <router-link :to="'/Order/'+id">支付宝</router-link>
                <span>微信</span>
            </div>
            <div class="cancel" @click="cancelBtn">取消</div>
        </div>
    </section>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'MallSingle',
    data(){
        return{
            id:this.$route.params.id,
            unitPrice:68.0,//单价
            total:'',//总价,
            choice:500,//积分
            actived:false,
            dilog:false,
            cancel:false,
            counter:1,
            defult:false,
            dk:0
        }
    },
    methods:{
        history:function(){
            this.$router.go(-1);
        },
        switchActive(){
            if(this.actived == false){
                this.actived = true
                this.dk = this.choice/100
                this.total = this.total-(this.choice/100)
            }else{
                this.actived = false
                this.dk = 0
                this.total = this.total+(this.choice/100)
            } 
        },
        dilogT(){
            if(this.dilog == false){
                this.dilog = true
            }
            else{
                this.dilog = false
            }
        },
        cancelBtn(){
            if(this.cancel == false){
                this.cancel = true
            }else{
                this.cancel = false
            }
        },
        reduce(){
            if(this.counter==1){
                return
            }
            this.counter--
            this.defult = false
            if(this.actived == true){
                this.total = (this.unitPrice*this.counter)-(this.choice/100)
            }else{
                this.total = this.unitPrice*this.counter
            }
        },
        plus(){
            this.counter++
            this.defult = false
            if(this.actived == true){
                this.total = (this.unitPrice*this.counter)-(this.choice/100)
            }else{
                this.total = this.unitPrice*this.counter
            } 
        }
    },
    mounted(){
        if(this.counter==1){
            this.defult=true
        }
        this.total = this.unitPrice*this.counter
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
.Single{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
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
        .consignee{
            display:flex;
            justify-content:space-between;
            height:px2rem(142px);
            background:#ffe7cd;
            padding:0 px2rem(16px);
            .consigneeL{
                width:px2rem(580px);
                display:flex;
                flex-direction:column;
                .consigneeT{
                    margin:auto 0 px2rem(6px);
                    display:flex;
                    justify-content:flex-start;
                    span{
                        margin:auto 0;
                        font-size:px2rem(24px);
                        color:#999;
                    }
                    em{
                        margin:auto 0;
                        font-size:px2rem(24px);
                        color:#000;
                    }
                }
                .consigneeB{
                    margin:px2rem(6px) 0 auto;
                    display:flex;
                    justify-content:flex-start;
                    span{
                        margin:auto 0;
                        font-size:px2rem(24px);
                        color:#999;
                    }
                    em{
                        margin:auto 0;
                        font-size:px2rem(24px);
                        color:#000;
                    }
                }
            }
            .consigneeR{
                margin:auto 0;
                font-size:px2rem(30px);
                color:#bac0c6;
            }
        }
        .petInformation{
            padding:0 px2rem(16px);
            height:px2rem(185px);
            margin:px2rem(16px) auto;
            background:#fff;
            display:flex;
            justify-content:space-between;
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
                margin:auto 0;
                width:px2rem(320px);
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
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
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
                }
            }
            .counter{
                padding:0;
                height:px2rem(45px);
                border:px2rem(1px) solid #eee;
                margin:auto 0;
                display:flex;
                justify-content:space-between;
                span{
                    margin:auto px2rem(12px);
                    line-height:px2rem(45px);
                    font-size:px2rem(30px);
                    color:#fe4f53;
                }
                em{
                    line-height:px2rem(45px);
                    margin:auto px2rem(12px);
                    font-size:px2rem(20px);
                    color:#46474d;
                }
                span.defult{
                    color:#46474d;
                }
            }
        }
        .sellerBox{
            display:flex;
            flex-direction:column;
            padding:0 px2rem(16px);
            height:px2rem(110px);
            margin:px2rem(16px) auto;
            background:#fff;
            .sellName{
                //flex:1;
                display:flex;
                margin:auto 0 px2rem(6px);
                span{
                    margin:auto 0;
                    width:px2rem(145px);
                    font-size:px2rem(24px);
                    color:#46474d;
                }
                em{
                    margin:auto 0 ;
                    font-size:px2rem(24px);
                    color:#46474d;
                }
            }
            .sellName:last-child{
                margin:px2rem(6px) 0 auto;
            }
        }
        .shipping{
            display:flex;
            flex-direction:column;
            h5{
                height:px2rem(60px);
                line-height:px2rem(60px);
                font-size:px2rem(26px);
                padding:0 px2rem(16px);
                color:#46474d;
                font-weight:normal;
            }
            .shippingBox{
                height:px2rem(105px);
                background:#fff;
                padding:0 px2rem(16px);
                display:flex;
                justify-content:flex-start;
                .Box{
                    flex:1;
                    display:flex;
                    cursor:pointer;
                    .input{
                        width:px2rem(30px);
                        height:px2rem(30px);
                        margin:auto 0;
                        background:url(../../../assets/icon/nocheck.png);
                        background-size:cover;
                        input{
                            opacity:0;
                        }
                    }
                    .checked{
                        background:url(../../../assets/icon/checked.png);
                        background-size:cover;
                    }
                    span{
                        font-size:px2rem(24px);
                        color:#000;
                        margin:auto px2rem(12px);
                    }
                    em{
                        font-size:px2rem(24px);
                        margin:auto 0;
                        color:#fe4f53;
                    }
                }
            }
        }
        .choice{
            display:flex;
            flex-direction:column;
            h5{
                height:px2rem(60px);
                line-height:px2rem(60px);
                font-size:px2rem(26px);
                padding:0 px2rem(16px);
                color:#46474d;
                font-weight:normal;
            }
            .choiceBox{
                background:#fff;
                display:flex;
                flex-direction:column;
                padding:0 px2rem(18px);
                .choiceBtn{
                    height:px2rem(90px);
                    border-bottom:px2rem(1px) solid #eee;
                    display:flex;
                    justify-content:space-between;
                    em{
                        width:px2rem(125px);
                        font-size:px2rem(24px);
                        color:#999;
                        margin:auto 0;
                    }
                    h6{
                        flex:1;
                        font-size:px2rem(22px);
                        color:#000;
                        margin:auto 0;
                        font-weight:normal;
                    }
                    .usable{
                        width:px2rem(150px);
                        display:flex;
                        justify-content:flex-end;
                        margin:auto 0;
                        font-size:px2rem(24px);
                        color:#000;
                        i{
                            margin:auto 0;
                            color:#999;
                            font-size:px2rem(28px);
                        }
                    }
                    .switch{
                        width:px2rem(90px);
                        height:px2rem(40px);
                        padding:px2rem(2px);
                        background:#efefef;
                        margin:auto 0;
                        display:flex;
                        justify-content:flex-start;
                        border-radius:px2rem(26px); 
                        .switchBtn{
                            background:#fff;
                            width:px2rem(36px);
                            height:px2rem(36px);
                            border-radius:50%;
                            margin:auto 0;
                        }
                    }
                    .switchActive{
                        justify-content:flex-end;
                        background:#fe4f53;
                    }
                }
                .choiceBtn:last-child{
                    border-bottom:0;
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
    .footerBox{
        height:px2rem(95px);
        background:#fff;
        display:flex;
        justify-content:space-between;
        .total{
            flex:1;
            padding:0 px2rem(18px);
            display:flex;
            flex-direction:column;
            .totalBox{
                margin:auto 0 0;
                span{
                    font-size:px2rem(26px);
                    color:#46474d;
                    em{
                        color:#fe4f53;
                    }
                }
            }
            .totalBox:last-child{
                margin:0 0 auto;
            }
        }
        .goPay{
            width:px2rem(270px);
            background:#fe4f53;
            font-size:px2rem(25px);
            text-align:center;
            color:#fff;
            line-height:px2rem(95px);
        }
    }
    .coupon{
        position:fixed;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.4);
        z-index:9999;
        .dilog{
            position:fixed;
            width:100%;
            height:75%;
            max-height:100%;
            min-height:px2rem(855px);
            bottom:0;
            background:#f2f2f2;
            display:flex;
            flex-direction:column;
            overflow-y:scroll;
            .Title{
                height:px2rem(90px);
                background:#fff;
                font-size:px2rem(32px);
                color:#000;
                text-align:center;
                line-height:px2rem(90px);
            }
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
                padding:px2rem(12px);
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
    .payBox{
        position:fixed;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.4);
        z-index:9999;
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
}
</style>