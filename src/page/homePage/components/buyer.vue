<template>
    <div class="buyer">
        <div class="buyerTop">
            <router-link :to="{path:'/Wantbuylist'}">
            <span>
                <i class="iconfont icon-banshizhinan"></i>
                <h4>买家求购</h4>
            </span>
            <span>更多
                <i class="iconfont icon-gengduo1"></i>
            </span>
            </router-link>
        </div>
        <div class="buyerMain">
            <router-link :to="{path:'/Wantbuylist'}" class="buyerBox">
                <div class="img">
                    <img src="../../../assets/img/tx.png" alt="">
                </div>
                <span>茶杯博美22222</span>
            </router-link>
            <router-link :to="{path:'/Wantbuylist'}" class="buyerBox">
                <div class="img">
                    <img src="../../../assets/img/img.png" alt="">
                </div>
                <span>求购一条柴犬，谢谢</span>
            </router-link>
            <router-link :to="{path:'/Wantbuylist'}" class="buyerBox">
                <div class="img">
                    <img src="../../../assets/img/touxiang.png" alt="">
                </div>
                <span>泰迪</span>
            </router-link>
            <router-link :to="{path:'/Wantbuylist'}" class="buyerBox">
                <div class="img">
                    <img src="../../../assets/img/touxiang.png" alt="">
                </div>
                <span>泰迪</span>
            </router-link>
            <router-link :to="{path:'/Wantbuylist'}" class="buyerBox">
                <div class="img">
                    <img src="../../../assets/img/touxiang.png" alt="">
                </div>
                <span>金毛寻回犬</span>
            </router-link>
            <router-link :to="{path:'/Wantbuylist'}" class="buyerBox">
                <div class="img">
                    <img src="../../../assets/img/touxiang.png" alt="">
                </div>
                <span>英短折耳猫</span>
            </router-link>
        </div>
        <div class="buyerMore">
            <router-link :to="{path:'/Wantbuy'}"><span>我要发求购</span><i class="iconfont icon-jia1"></i></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'Buyer',
    data(){
        return{
        }
    },
    methods:{
    },
    created(){
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.buyer{
    margin:px2rem(12px) auto;
    height:px2rem(300px);
    background:#fff;
    display:flex;
    flex-direction:column;
    .buyerTop{
        padding:px2rem(10px);
        height:px2rem(65px);
        a{
            width:100%;
            height:100%;
            display:flex;
            justify-content:space-between;
            span{
                margin:auto 0;
                font-size:px2rem(24px);
                display:flex;
                h4{
                    margin:auto;
                }
            }
            span:nth-child(1) i{
                font-size:px2rem(44px);
                //color:#00b6bb;
                margin-right:px2rem(12px);
                background-image:linear-gradient(#ff9c55, #fe4f53);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            span:nth-child(2){
                font-size:px2rem(20px);
                color:#969496;
                i{ 
                    margin:auto;
                    margin-left:px2rem(12px);
                    font-size:px2rem(20px);
                }
            }
        }
    }
    .buyerMain{
        flex:1;
        padding:px2rem(20px) px2rem(12px);
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        .buyerBox{
            width:px2rem(196px);
            height:px2rem(50px);
            background:#fffbef;
            display:flex;
            border-radius:px2rem(26px);
            padding:0 px2rem(12px);
            .img{
                width:px2rem(34px);
                height:px2rem(34px);
                border-radius:50%;
                overflow:hidden;
                margin:auto px2rem(12px) auto 0;
                img{
                    width:100%;
                    height:100%;
                }
            }
            span{
                max-width:px2rem(130px);
                font-size:px2rem(24px);
                margin:auto 0;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
        }
    }
    .buyerMore{
        height:px2rem(70px);
        border-top:px2rem(1px) solid #eee;
        display:flex;
        justify-content:center;
        a{
            font-size:px2rem(22px);
            display:flex;
            margin:auto;
            color:#fe4f53;
            span{
                margin:auto;
            }
            i{
                margin:auto px2rem(12px);
                font-size:px2rem(30px);
                border-radius:50%;
                border:px2rem(1px) solid #fe4f53;
            }
        }
    }
}
</style>
