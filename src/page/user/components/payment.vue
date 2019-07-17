<template>
    <div class="Payment">
        <header class="paymentTop">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">收款账号管理</h2>
        </header>
        <main class="mainBox">
            <div class="Tips">
                {{msg}}
            </div>
            <div class="payBox">
                <div class="payTy">请填写真实姓名</div>
                <input type="text" class="payName" v-model="payName" placeholder="请输入真实姓名">
            </div>
            <div class="payBox">
                <div class="payTy">请填写收款账号(支付宝必填)</div>
                <div class="payPay">
                    <div class="img">
                        <img src="../../../assets/icon/zfb.png">
                    </div>
                    <span></span>
                    <input type="text" class="payInput" v-model="payZfb" placeholder="请输入您的支付宝账号">
                </div>
                <div class="payPay">
                    <div class="img">
                        <img src="../../../assets/icon/wx.png">
                    </div>
                    <span></span>
                    <input type="text" class="payInput" v-model="payWx" placeholder="请输入您的微信账号">
                </div>
            </div>
            <footer class="footerBox">
                <span @click="mempory">完成</span>
            </footer>
        </main>
        <div class="model" v-show="showClose">
            <span>{{models}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'Payment',
    data(){
        return{
            payName:'',
            payZfb:'',
            payWx:'',
            msg:'平台收取交易总额的5%作为平台手续费，买家提前确认收货或者发货后10天，若买卖双方无异议，平台将在一个工作日内打款到卖家指定账户',
            models:'',
            showClose:false
        }
    },
    methods:{
         history(){
            this.$router.go(-1);
        },
        mempory(){
            var that = this
            if(that.payName==''||that.payZfb==''||that.payWx==''){
                that.models = '主人，您好像忘了点什么'
                that.showClose = true,
                setTimeout(() => {
                    that.models = ''
                    that.showClose = false
                }, 2000);
            }else{
                var datas = {'names':that.payName,'zfb':that.payZfb,'wx':that.payWx}
                console.log(datas);
                axios.post('url',datas)
                .then(function(){

                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}

.Payment{
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
    .paymentTop{
        height:px2rem(75px);
        background:#fe4f53;
        // background-color:#fb7768;
        //background-image:url(../../../assets/img/searchBox.png);
        //background-repeat:no-repeat;
        //background-size:100% px2rem(75px);
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
        .Tips{
            padding:px2rem(16px);
            background:#31496b;
            color:#fff;
            font-size:px2rem(24px);
        }
        .payBox{
            display:flex;
            flex-direction:column;
            .payTy{
                height:px2rem(90px);
                line-height:px2rem(90px);
                background:#f2f1f7;
                font-size:px2rem(26px);
                padding:0 px2rem(16px);
                color:#999;
            }
            .payName{
                padding:0 px2rem(16px);
                height:px2rem(80px);
                line-height:px2rem(80px);
                background:#fff;
                color:#999;
                font-size:px2rem(22px);
            }
            .payPay{
                display:flex;
                justify-content:space-between;
                padding:0 px2rem(16px);
                height:px2rem(80px);
                background:#fff;
                border-bottom:px2rem(1px) solid #ddd;
                .img{
                    width:px2rem(50px);
                    height:px2rem(50px);
                    margin:auto 0;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                span{
                    width:px2rem(2px);
                    height:px2rem(50px);
                    background:#ddd;
                    margin:auto px2rem(16px);
                }
                .payInput{
                    flex:1;
                    padding:0 px2rem(16px);
                    height:px2rem(80px);
                    line-height:px2rem(80px);
                    color:#999;
                    font-size:px2rem(22px);
                }
            }
            .payPay:last-child{
                border-bottom:0;
            }
        }
    }
    .footerBox{
        margin:px2rem(26px);
        height:px2rem(80px);
        background:#bac0c6;
        line-height:px2rem(80px);
        text-align:center;
        display:flex;
        border-radius:px2rem(12px);
        span{
            width:100%;
            margin:0;
            font-size:px2rem(24px);
            color:#fff;
        }
    }
}
</style>
