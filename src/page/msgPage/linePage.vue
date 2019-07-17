<template>
    <div class="linePage">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">【捕鼠梗】这闲事我管定了！</h2>
        </header>
        <main class="mainBox">
            <section class="PageBox">
                <h4>如何让狗狗不咬人</h4>
                <div class="autour">
                    <span>风儿令</span>
                    <span class="red">宠物屋交易平台</span>
                    <span>3月9日</span>
                </div>
                <span>大家好，我家狗狗很不听话，喜欢随地大小便，晚上乱叫被邻居投诉，在家咬家具，出门乱咬人，乱吃东西。请问我该怎么训练它，可付费求经验求分享，谢谢！</span>
                <img src="http://axios.weakwater.com/msg/msg1.png" alt="">
                <img src="http://axios.weakwater.com/msg/msg2.png" alt="">
                <img src="http://axios.weakwater.com/msg/msg3.png" alt="">
                <img src="http://axios.weakwater.com/msg/msg4.png" alt="">
                <img src="http://axios.weakwater.com/msg/msg5.png" alt="">
                <img src="http://axios.weakwater.com/msg/msg6.png" alt="">
                <span>大家好，我家狗狗很不听话，喜欢随地大小便，晚上乱叫被邻居投诉，在家咬家具，出门乱咬人，乱吃东西。请问我该怎么训练它，可付费求经验求分享，谢谢！</span>
                <span>大家好，我家狗狗很不听话，喜欢随地大小便，晚上乱叫被邻居投诉，在家咬家具，出门乱咬人，乱吃东西。请问我该怎么训练它，可付费求经验求分享，谢谢！</span>
            </section>
        </main>
    </div>
</template>
<script>
export default {
    name:'linePage',
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

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.linePage{
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
        .PageBox{
            display:flex;
            flex-direction:column;
            padding:px2rem(12px) px2rem(26px);
            background:#fff;
            h4{
                font-size:px2rem(36px);
                font-weight:normal;
                margin:px2rem(26px) 0;
            }
            .autour{
                margin:0 0 px2rem(26px);
                span{
                    font-size:px2rem(26px);
                    color:#999;
                }
                span.red{
                    margin:auto px2rem(12px);
                    color:#fe4f53;
                }
            }
            span{
                font-size:px2rem(25px);
                color:#999;
                line-height:px2rem(46px);
            }
            img{
                margin:px2rem(12px) auto;
                max-width:100%;
            }
        }
    }
}
</style>