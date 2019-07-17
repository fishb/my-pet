<template>
    <section class="Statement">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">宠物直销</h2>
        </header>
        <main class="mainBox">
            <div class="banner">
                <img src="../../assets/icon/statement.png" alt="">
            </div>
            <!--{{title}}-->
            <div class="Box">
                <h5>{{title}}</h5>
                <div class="timeBox" v-for="(list,listIndex) in listBox" :key="listIndex">
                    <div class="title">
                        <i></i><em>{{list.name}}</em>
                    </div>
                    <div class="liiIndex" v-for="(lii,liiIndex) in list.list" :key="liiIndex">
                        <b>{{liiIndex+1}})</b>{{lii}}
                    </div>
                </div>
            </div>
        </main>
    </section>    
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Statement',
    data(){
        return{
            title:'责任声明',
            listBox:[{
                name:'为保障买卖双方权益，交易之前需要特别注意：',
                list:[
                    '请用担保交易支付，资金可退回。私下交易遇到诈骗，平台不承担相关责任。',
                    '请用宠物直销私聊工具进行充分沟通，私聊证明可以作为售后仲裁的重要凭证。通过微信沟通并造成损失的，平台不承担相关责任。'
                ]
            },{
                name:'对商家打着低价、诚信等口号去欺骗用户，“ 宠物市场”官方平台会将商家资料提交至公安机关，全力协助买家维护权益。',
                list:[]
            },{
                name:'宠物市场致力于打造一一个安全、公开、透明的宠物交易平台，竭诚为用户服务，为规范化的市场交易做贡献是我们的不断追求!',
                list:[]
            }]
        }
    },
    computed:{
    },
    methods:{
        history(){
            this.$router.go(-1)
        }
    },
    mounted(){
    }
}
</script>
<style lang="scss" scroped>
@function px2rem($px){
   $rem :64.0px;
   @return ($px/$rem) + rem;
}
.Statement{
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
        .banner{
            width:100%;
            img{
                width:100%;
                height:100%;
            }
        }
        .Box{
            padding:0 px2rem(36px);
            margin:px2rem(26px) auto;
            display:flex;
            flex-direction:column;
            h5{
                height:px2rem(50px);
                line-height:px2rem(50px);
                color:#18c3b1;
                font-size:px2rem(26px);
                font-weight:500;
            }
            .timeBox{
                display:flex;
                flex-direction:column;
                margin-bottom:px2rem(26px);
                .title{
                    display:flex;
                    justify-content:flex-start;
                    i{
                        min-width:px2rem(12px);
                        width:px2rem(12px);
                        height:px2rem(12px);
                        border-radius:50%;
                        margin:px2rem(12px) 0;
                        background:#18c3b1;
                    }
                    em{
                        font-size:px2rem(24px);
                        font-weight:500;
                        color:#000;
                        margin:auto 0 auto px2rem(12px);
                    }
                }
                .liiIndex{
                    text-indent:1em;
                    margin:px2rem(12px) 0;
                    font-size:px2rem(24px);
                    line-height:px2rem(40px);
                    b{
                        font-weight:normal;
                        margin:0 px2rem(12px);
                    }
                    span{
                        color:#18c3b1;
                    }
                }
            }
        }
    }
}
</style>