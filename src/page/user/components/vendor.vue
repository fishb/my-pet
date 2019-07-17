<template>
    <div class="vendor">
        <header class="Vendorhead">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">卖家认证</h2>
        </header>
        <main class="mainBox">
            <div class="tips"><i class="iconfont icon-tips"></i><em>请选择认证类型，认证后无法更改账号类型</em></div>
            <router-link :to="{path:'/Personauth'}" class="verdor">
                <div class="icons">
                    <img src="../../../assets/icon/per.png" alt="">
                </div>
                <div class="name">
                    <h4>个人认证</h4>
                    <span>适合个人及家庭养殖户</span>
                </div>
            </router-link>
            <router-link :to="{path:'/sellerauth'}">
                <div class="icons">
                    <img src="../../../assets/icon/sh.png" alt="">
                </div>
                <div class="name">
                    <h4>商家认证</h4>
                    <span>适合有营业执照的专业卖家</span>
                </div>
            </router-link>
            <router-link :to="{path:'/platauth'}">
                <div class="icons">
                    <img src="../../../assets/icon/pt.png" alt="">
                </div>
                <div class="name">
                    <h4>平台认证</h4>
                    <span>适合有实力的优质卖家</span>
                </div>
            </router-link>
        </main>
    </div>
</template>

<script>
export default {
    name:'Vendor',
    data(){
        return{
        }
    },
    mounted(){
    },
    methods:{
         history(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.vendor{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;  
    .Vendorhead{
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
        padding:0 px2rem(26px);
        background:#f7f7f7;
        .tips{
            margin:px2rem(26px) 0 0;
            height:px2rem(50px);
            line-height:px2rem(50px);
            padding:0 px2rem(26px);
            font-size:px2rem(24px);
            display:flex;
            i{
                font-size:px2rem(40px);
                color:#999;
                margin:auto 0;
            }
            em{
                font-size:px2rem(24px);
                font-style:normal;
                margin:auto px2rem(6px);
                color:#999;
            }
        }
        a{
            display:flex;
            margin:px2rem(26px) auto ;
            padding:0 px2rem(26px);
            height:px2rem(160px);
            background-color:#fff;
            box-shadow:px2rem(4px) px2rem(4px) solid #999;
            .name{
                flex:1;
                margin:auto 0;
                display:flex;
                flex-direction:column;
                h4{
                    margin:auto 0 px2rem(6px);
                    font-size:px2rem(32px);
                    font-weight:normal;
                    color:#333;
                }
                span{
                    margin:px2rem(6px) 0 auto;
                    font-size:px2rem(22px);
                    color:#999;
                }
            }   
            .icons{
                width:px2rem(100px);
                height:px2rem(100px);
                margin:auto 0;
                display:flex;
                img{
                    width:80%;
                    margin:auto;
                }
            }
        }
        a.verdor{
            background-image:url(../../../assets/icon/shing.png);
            background-size:px2rem(160px);
            background-repeat:no-repeat;
            background-position:right;
        }
    }
}
</style>
