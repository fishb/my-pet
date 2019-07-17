<template>
    <div class="Topline">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">萌宠头条</h2>
        </header>
        <main class="mainBox">
            <!--1图的头条-->
            <template>
                <router-link :to="'/Linepage/'+'1'" class="lineBox">
                    <div class="lineBoxl">
                        <div class="lineName">【捕鼠梗】这闲事我管定了!</div>
                        <span>117天前</span>
                    </div>
                    <div class="lineImg">
                        <img src="http://axios.weakwater.com/msg/msg1.png" alt="">
                    </div>
                </router-link>
            </template>
            <!--多图的头条-->
            <template>
                <router-link :to="'/Linepage/'+'2'" class="lineBoxs">
                    <div class="lineBoxT">那些记录下动物美好瞬间的纪录片(二)</div>
                    <div class="lineImg">
                        <img src="http://axios.weakwater.com/msg/msg1.png" alt="">
                        <img src="http://axios.weakwater.com/msg/msg2.png" alt="">
                        <img src="http://axios.weakwater.com/msg/msg3.png" alt="">
                    </div>
                    <span>2018-07-21</span>
                </router-link>
                <router-link :to="'/Linepage/'+'3'" class="lineBox">
                    <div class="lineBoxl">
                        <div class="lineName">[吉娃娃]史上最小犬种!</div>
                        <span>119天前</span>
                    </div>
                    <div class="lineImg">
                        <img src="http://axios.weakwater.com/msg/msg3.png" alt="">
                    </div>
                </router-link>
                <router-link :to="'/Linepage/'+'4'" class="lineBox">
                    <div class="lineBoxl">
                        <div class="lineName">那些记录下动物美好瞬间的纪录片</div>
                        <span>119天前</span>
                    </div>
                    <div class="lineImg">
                        <img src="http://axios.weakwater.com/msg/msg4.png" alt="">
                    </div>
                </router-link>
                <router-link :to="'/Linepage/'+'5'" class="lineBox">
                    <div class="lineBoxl">
                        <div class="lineName">如何照顾小刺猬</div>
                        <span>124天前</span>
                    </div>
                    <div class="lineImg">
                        <img src="http://axios.weakwater.com/msg/msg4.png" alt="">
                    </div>
                </router-link>
                <router-link :to="'/Linepage/'+'6'" class="lineBoxs">
                    <div class="lineBoxT">【爱尔兰猎狼犬】超超超超超超超超大犬</div>
                    <div class="lineImg">
                        <img src="http://axios.weakwater.com/msg/msg4.png" alt="">
                        <img src="http://axios.weakwater.com/msg/msg5.png" alt="">
                        <img src="http://axios.weakwater.com/msg/msg6.png" alt="">
                    </div>
                    <span>2018-07-21</span>
                </router-link>
            </template>
        </main>
    </div>
</template>
<script>
export default {
    name:'Topline',
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
.Topline{
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
        .lineBox{
            height:px2rem(150px);
            padding:px2rem(16px) px2rem(26px);
            background:#fff;
            border-bottom:px2rem(1px) solid #eee;
            display:flex;
            justify-content:space-between;
            .lineBoxl{
                width:px2rem(420px);
                display:flex;
                flex-direction:column;
                //justify-content:center;
                .lineName{
                    margin:auto 0 0;
                    font-size:px2rem(26px);
                    color:#000; 
                }
                span{
                    margin:0 0 auto;
                    font-size:px2rem(26px);
                    color:#999;
                }
            }
            .lineImg{
                width:px2rem(185px);
                height:px2rem(115px);
                display:flex;
                img{
                    width:auto;
                    height:auto;
                    max-width:100%;
                    max-height:100%;
                    margin:auto;
                }
            }
        }
        .lineBoxs{
            width:100%;
            height:px2rem(280px);
            padding:px2rem(16px) px2rem(26px);
            background:#fff;
            border-bottom:px2rem(1px) solid #eee;
            display:flex;
            flex-direction:column;
            .lineBoxT{
                margin:auto 0 0;
                font-size:px2rem(26px);
                color:#000;
            }
            .lineImg{
                display:flex;
                justify-content:space-between;
                height:px2rem(115px);
                margin:px2rem(16px) auto;
                img{
                    flex:1;
                    height:px2rem(115px);
                }
            }
            span{
                margin:0 0 auto;
                font-size:px2rem(26px);
                color:#999;
            }
        }
    }
}
</style>