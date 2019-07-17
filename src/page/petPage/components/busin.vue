<template>
<div class="busin">
    <router-link :to="'/Detail/'+busin.shopId">
        <div class="businL">
            <img :src="busin.shopImg" alt="">
            <div class="businNa">
                <span>{{busin.shopName}}</span>
                <span>{{busin.shopaddress}}</span>
            </div>
        </div>
        <div class="businR">
            <span>进入店铺</span><i class="iconfont icon-jiantou2"></i>
        </div>
    </router-link>
    <div class="Boxs">
       <em>资质：</em> 
       <span>平台认证</span>
       <span>实地考察</span>
       <span>已缴押金</span>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'Busin',
    props:['busin'],
    data(){
        return{
            //photo:this.photo || []
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

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.busin{
    margin:px2rem(16px) 0;
    height:auto;
    display:flex;
    flex-direction:column;
    background:#fff;
    a{
        height:px2rem(125px);  
        padding:px2rem(26px);
        display:flex;
        justify-content:space-between;
        border-bottom:px2rem(1px) solid #eee;
        .businL{
            flex:1;
            margin:auto 0;
            display:flex;
            img{
                width:px2rem(70px);
                height:px2rem(70px);
                border-radius:px2rem(10px);
            }
            .businNa{
                margin:auto 0 auto px2rem(24px);
                display:flex;
                flex-direction:column;
                span{
                    font-size:px2rem(28px);
                    margin:auto 0 0;
                }
                span:last-child{
                    font-size:px2rem(26px);
                    color:#999;
                }
            }
        }
        .businR{
            width:px2rem(140px);
            margin:auto 0;
            font-size:px2rem(24px);
            color:#999;
            display:flex;
            justify-content:flex-end; 
            span{
                margin:auto px2rem(12px) auto 0;
            }
            i{
                font-size:px2rem(24px);
                margin:auto 0;
            }
        }
    }
    .Boxs{
        display:flex;
        justify-content:flex-start;
        height:px2rem(90px);
        padding:0 px2rem(26px);
        em{
            margin:auto 0;
            //width:px2rem(70px);
            font-size:px2rem(24px);
            color:#bac0c6;
        }
        span{
            width:px2rem(105px);
            height:px2rem(28px);
            line-height:px2rem(30px);
            margin:auto px2rem(6px);
            background:-webkit-gradient(linear,left top, right bottom, from(#fe4f53), to(#ff9c55));
            border-radius:px2rem(26px);
            text-align:center;
            color:#fff;
        }
    }
}
</style>