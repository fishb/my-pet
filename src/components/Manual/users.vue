<template>
    <section class="Merchant">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">宠物直销</h2>
        </header>
        <main class="mainBox">
            <div class="banner">
                <img src="../../assets/icon/rzhu.png" alt="">
            </div>
            <!--为什么选择我们-->
            <div class="Box">
                <h5>为什么选择我们</h5>
                <span>
                    <em>宠物活体电商领导者</em>
                    <i>2015年诞生，三年发展积淀，宠物活体担保交易领导者</i>
                </span>
                <span>
                    <em>海量移动端用户</em>
                    <i>专注移动端覆盖全国，月活跃用户十万，百万级浏览量</i>
                </span>
                <span>
                    <em>商户利益最大化</em>
                    <i>无中间环节，买家直接找到商户，买卖过程简单高效</i>
                </span>
            </div>
            <!--入驻标准-->
            <div class="Box">
                <h5>入驻标准</h5>
                <span>
                    <em>接受质保要求</em>
                    <i>1) 接受宠物直销质保要求，为消费者提供至少10天担保交易期缴纳平台保证金</i>
                    <i>2) 缴纳5000-10000元平台保证金，接受平台担保支付完成交易</i>
                </span>
                <span>
                    <em>接受实地考察</em>
                    <i>接受宠物直销安排专人进行实地考察</i>
                </span>
                <span>
                    <em>接受不定期回访</em>
                    <i>接受宠物直销不定期电话回访，提供宠物免疫、驱虫记录证明</i>
                </span>
            </div>
            <!--入驻流程-->
            <div class="Box">
                <h5>入驻流程</h5>
                <div class="timeBox" v-for="(lc,lcIndex) in liucheng" :key="lcIndex">
                    <div class="timeTop">
                        <span>{{lcIndex+1}}</span>
                        <div class="title">{{lc.name}}</div>
                    </div>
                    <div class="timeBottom">
                        <i :ss="lcIndex+1" :class="lcIndex+1==liucheng.length?'lenI':''" ></i>
                        <div class="timeInfo">
                            <span v-for="(info,infoIndex) in lc.list" :key="infoIndex">{{infoIndex+1}}）{{info}}</span>
                        </div>
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
    name:'Merchant',
    data(){
        return{
            liucheng:[{
                name:'选择入驻类型',
                list:['个人认证','商家认证','平台认证']
            },{
                name:'提交入驻资料（5-10分钟）',
                list:['真实姓名、身份证号','申请人本人手持身份证照片（要求脸部和身份证清晰）','营业执照（营业范围含宠物、法人为申请人本人）','环境照片（犬舍、猫舍场所实拍照片）']
            },{
                name:'等待审核（1-5个工作日）',
                list:['审核人员电话联系，审核确认','平台认证商家实地考察']
            },{
                name:'缴纳保证金开店',
                list:['平台缴纳保证金，开通店铺','熟悉平台操作流程']
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
.Merchant{
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
                margin:auto;
                width:px2rem(240px);
                height:px2rem(50px);
                line-height:px2rem(50px);
                text-align:center;
                color:#fff;
                background-image: -webkit-gradient(linear,right top,left bottom,from(#fe4f53),to(#ff9c55));
                font-size:px2rem(28px);
                font-weight:normal;
                border-radius:px2rem(26px);
            }
            span{
               margin:px2rem(12px) 0;
               display:flex;
               flex-direction:column;
               em{
                   position:relative;
                   padding-left:px2rem(26px);
                   font-size:px2rem(26px);
                   font-weight:bold;
                   color:#000;
                   margin:px2rem(12px) 0;
               } 
               em:before{
                   content:'';
                   position:absolute;
                   width:px2rem(12px);
                   height:px2rem(12px);
                   border-radius:50%;
                   top:50%;
                   left:0;
                   margin-top:-(px2rem(6px));
                   background:#fe4f53;
               }
               i{
                   margin:px2rem(12px) 0 0;
                   text-indent:3em;
                   font-size:px2rem(24px);
                   color:#000;
               }
            }
            .timeBox{
                margin:px2rem(6px) 0;
                display:flex;
                flex-direction:column;
                .timeTop{
                    display:flex;
                    justify-content:flex-start;
                    span{
                        width:px2rem(50px);
                        height:px2rem(50px);
                        border-radius:50%;
                        background-image: -webkit-gradient(linear,right top,left bottom,from(#fe4f53),to(#ff9c55));
                        text-align:center;
                        line-height:px2rem(50px);
                        color:#fff;
                        font-size:px2rem(26px);
                    }
                    .title{
                        margin:auto px2rem(16px);
                        font-size:px2rem(26px);
                        font-weight:bold;
                    }
                }
                .timeBottom{
                    display:flex;
                    justify-content:flex-start;
                    i{
                        margin:0 px2rem(24px);
                        width:px2rem(2px);
                        background-image: -webkit-gradient(linear,right top,left bottom,from(#fe4f53),to(#ff9c55));
                    }
                    .lenI{
                        background:transparent;
                    }
                    .timeInfo{
                        max-width:px2rem(540px);
                        margin:auto px2rem(16px);
                        span{
                            font-size:px2rem(26px);
                            font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                        }
                    }
                }
            }
        }
    }
}
</style>