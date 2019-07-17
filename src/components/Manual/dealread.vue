<template>
    <section class="Dealread">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">宠物直销</h2>
        </header>
        <main class="mainBox">
            <div class="banner">
                <img src="../../assets/icon/dealread.png" alt="">
            </div>
            <!--{{title}}-->
            <div class="Box">
                <h5>{{title}}</h5>
                <div class="timeBox" v-for="(list,listIndex) in listBox" :key="listIndex">
                    <div class="title">
                        <i></i><em>{{list.name}}</em>
                    </div>
                    <div class="liuBox" v-for="(lis,lisIndex) in list.list" :key="lisIndex">
                        <div class="name">
                            {{lis.name}}
                        </div>
                        <div class="txt">
                            <span v-for="(txt,txtIndex) in lis.txt" :key="txtIndex">
                                {{txt}}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <!--titles-->
            <div class="Box">
                <h5>{{titles}}</h5>
                <div class="questBox" v-for="(quest,questIndex) in questBox" :key="questIndex">
                    <div class="title"><em>{{questIndex+1}}</em>{{quest.name}}</div>
                    <span v-for="(info,infoIndex) in quest.info" :key="infoIndex">{{info}}</span>
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
    name:'Dealread',
    data(){
        return{
            title:'担保交易介绍',
            listBox:[{
                name:'宠物市场为您打造一个面向全国的宠物销售平台，让您更便捷的购买销售宠物。',
                list:[{
                    name:'支付',
                    txt:['买家通过平台担保支付','平台提醒卖家发货']
                },{
                    name:'发货',
                    txt:['卖家可通过汽运、飞机空运发货','买家也可以上门自取']
                },{
                    name:'担保',
                    txt:['宠物享受健康担保期','犬温细小等疾病可以退货退款','实物与描述严重不符可以退货退款']
                },{
                    name:'完成',
                    txt:['担保交易期限结束后1个工作日内','平台打款至卖家指定账户']
                }]
            },{
                name:'买卖双方私下交易造成自身权益损失，导致的纠纷与平台无关',
                list:[]
            },{
                name:'卖家被用户举报，一经证实做永久封号处理，并保留追究造成损失的权力。',
                list:[]
            }],
            titles:'常见问题',
            questBox:[{
                name:'如何使用宠物市场交易平台?',
                info:['买卖双方通过私聊了解宠物细节，通过担保交易付款(私下交易无任何保障)，卖家发货(汽运、空运或买家自提)，平台提供资金担保，担保期结束后平台打款至卖家指定账户。']
            },{
                name:'宠物配送方式与费用?',
                info:['交易之前，买卖双方根据各自地理位置确定配送方式，距离较近的可以选择自提或汽车运输配送，距离较远的可以通过飞机空运发货,  (空运费用600人民币左右、由航空公司收取)，选择空运发货的需要买家自己前往目的地机场提取宠物，具体物流方式与费用可以同卖家协商，宠物市场不参与具体的物流配送。']
            },{
                name:'商家要求微信或支付宝私下付款靠谱吗?',
                info:['私下交易属于个人行为，不享受平台任何保障，存在被诈骗和后期维权风险，据平台统计98%的私下交易最终产生纠纷。']
            },{
                name:'在宠物市场购买宠物和其它平台有什么不一.样?',
                info:['您通过宠物市场担保交易购宠资金将由平台托管，宠物发货10天后，若您无任何异议，这笔款项才会转至卖家账户，最大限度保障您的资金安全。']
            },{
                name:'商家不按时发货怎么办?',
                info:['卖家超过3天不发货，平台将自动退款至买家支付账户，3次未按期发货的卖家将被永久封号。']
            },{
                name:'宠物到家生病如何处理?',
                info:['如果宠物狗在担保期内检测出犬温、细小、犬沟螺旋、肝炎、流感等高至死率疾病的，宠物猫检测出瘟热、猫艾滋、猫鼻支等高至死率疾病的可提供持有正规行业许可证的宠物医院出具的相关诊断报告(需加盖医院公章)在平台担保期限内申请退款或赔偿，平台确认属实的可赔偿或退款。']
            },{
                name:'收到宠物与描述严重不符怎么办?',
                info:['收到宠物与描述严重不符，可提供相关证据(私聊记录、商家提供的视频、照片、单据等)申请退款，  平台确认属实的支持退款，(用户终端设备显示和宠物实际的合理色差不在理赔范围)']
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
.Dealread{
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
                color:#5a9eff;
                font-size:px2rem(26px);
                font-weight:bold;
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
                        background:#ffcbb5;
                    }
                    em{
                        font-size:px2rem(25px);
                        font-weight:500;
                        color:#000;
                        margin:auto 0 auto px2rem(12px);
                    }
                }
            }
            .timeBox:nth-child(3){
                em{
                    color:#ff966b;
                }
            }
            .liuBox{
                position:relative;
                margin:px2rem(12px) 0;
                display:flex;
                justify-content:flex-start;
                .name{
                    min-width:px2rem(60px);
                    width:px2rem(60px);
                    height:px2rem(60px);
                    border-radius:50%;
                    background:#ff966b;
                    line-height:px2rem(60px);
                    text-align:center;
                    font-size:px2rem(24px);
                    color:#fff;
                }
                .txt{
                    margin:auto 0 auto px2rem(26px);
                    display:flex;
                    flex-direction:column;
                    span{
                        margin:auto 0;
                        font-size:px2rem(24px);
                    }
                }
            }
            .questBox{
                display:flex;
                flex-direction:column;
                margin:px2rem(12px) 0;
                .title{
                    font-size:px2rem(26px);
                    font-weight:bold;
                    color:#ff966b;
                    em{
                        margin:0 px2rem(12px) 0 0;
                    }
                }
                span{
                    margin:px2rem(12px) 0;
                    font-size:px2rem(22px);
                    color:#000;
                    line-height:px2rem(36px);
                }
            }
        }
    }
}
</style>