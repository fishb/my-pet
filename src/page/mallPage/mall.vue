<template>
    <div class="mall">
        <main class="mainBox">
            <!--商城入驻规则-->
            <div class="sellCome">
                <img src="../../assets/img/sell.png" alt="">
            </div>
            <!--商品分类-->
            <div class="sellClasic">
                <router-link :to="{path:'/Staple'}">
                    <i class="iconfont icon-jitui"></i>
                    <span>主粮</span>
                </router-link>
                <router-link :to="{path:'/Sock'}">
                    <i class="iconfont icon-guge"></i>
                    <span>零食</span>
                </router-link>
                <router-link :to="{path:'/Health'}">
                    <i class="iconfont icon-baojianpin"></i>
                    <span>保健品</span>
                </router-link>
                <router-link :to="{path:'/Daily'}">
                    <i class="iconfont icon-chongwuyongpin"></i>
                    <span>用品</span>
                </router-link>
            </div>
            <!--主粮开始-->
            <Staple></Staple>
            <!--主粮结束-->
            <!--零食开始-->
            <!-- <Sock></Sock> -->
            <!--零食结束-->
            <!--保健品开始-->
            <!-- <Health></Health> -->
            <!--保健品结束-->
            <!--用品开始-->
            <!-- <Daily></Daily> -->
            <!--用品结束-->
        </main>
        <Navlist></Navlist>
    </div>
</template>

<script>
import Navlist from '@/components/nav.vue'
import Staple from '@/page/mallPage/components/staple.vue'
import Sock from '@/page/mallPage/components/sock.vue'
import Health from '@/page/mallPage/components/health.vue'
import Daily from '@/page/mallPage/components/daily.vue'
export default {
    name:'Mall',
    components:{
        Navlist,Staple,Sock,Health,Daily
    },
    data(){
        return{
            msg:'商城页'
        }
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.mall{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
}
.mainBox{
    flex:1;
    overflow-y:scroll;
    .sellCome{
        height:px2rem(265px);
        img{
            width:100%;
            height:100%;
        }
    }
    .sellClasic{
        height:px2rem(170px);
        background:#fff;
        margin:px2rem(12px) auto;
        display: flex;
        justify-content: space-between;
        a{
            display: flex;
            flex: 1;
            flex-direction: column;
            color: #fff;
            font-size:px2rem(44px);
             img{
                width:px2rem(77px);
                height:px2rem(77px);
                margin:auto;
                text-align:center;
            }
            i{
                width:px2rem(77px);
                height:px2rem(77px);
                font-size:px2rem(50px);
                margin:auto;
                text-align:center;
                line-height:px2rem(77px);
                background: -webkit-gradient(linear, left top, left bottom, from(#ffd700), to(#ffbd00));
                background: linear-gradient(#ffd700, #ffbd00);
                border-radius:50%;
            }
        }
        a:nth-child(2) i{
        background: -webkit-gradient(linear, left top, left bottom, from(#39bbe7), to(#1886ef));
        background: linear-gradient(#39bbe7, #1886ef); 
        }
        a:nth-child(3) i{
        background: -webkit-gradient(linear, left top, left bottom, from(#ff7251), to(#ff456b));
        background: linear-gradient(#ff7251, #ff456b); 
        }
        a:nth-child(4) i{
        background: -webkit-gradient(linear, left top, left bottom, from(#ce71f7), to(#bd55ef));
        background: linear-gradient(#ce71f7, #bd55ef); 
        }
        a span{
            color:#000;
            margin:0 auto auto;
            font-size:px2rem(22px);
        }
    }
}
</style>