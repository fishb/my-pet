<template>
    <div class="Sellout">
        <header class="Sellouthead">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">我卖出的</h2>
        </header>
        <main class="mainBox">
            <section class="headBox">
                <span v-for="(nam,namIndex) in name" :key="namIndex" @click="tab(namIndex)" :class="num==namIndex?'active':''">{{nam}}</span>
            </section>
            <pl-lazy time="400">
                <Stypeone v-if="num==0" :type="type1"></Stypeone>
                <Stypetwo v-if="num==1" :type="type2"></Stypetwo>
                <Stypethreen v-if="num==2" :type="type3"></Stypethreen>
                <Stypefour v-if="num==3" :type="type4"></Stypefour>
            </pl-lazy>
        </main>
        <div class="model" v-show="showClose">
            <span>{{models}}</span>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import PlLazy from "@/components/lazy/plLazy"
import Stypeone from '@/page/user/components/sellout/Stypeone'
import Stypetwo from '@/page/user/components/sellout/Stypetwo'
import Stypethreen from '@/page/user/components/sellout/Stypethreen'
import Stypefour from '@/page/user/components/sellout/Stypefour'
export default {
    name:'Sellout',
    components:{
        PlLazy,Stypeone,Stypetwo,Stypethreen,Stypefour
    },
    data(){
        return{
            name:['待付款','待发货','已发货','退款'],
            total:'',
            models:'',
            showClose:false,
            hollow:false,
            num:'',
            type1:'',
            type2:'',
            type3:'',
            type4:''
        }
    },
    methods:{
        history(){
            this.$router.go(-1);
        },
        tab(index){
            this.num = index
        },
        request(){
            var that = this;
            axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/bs')  
            .then(function (res) { 
                that.list= res.data.data.list
                that.type1 = that.list.find(i=>i.type==1)
                that.type2 = that.list.find(i=>i.type==2)
                that.type3 = that.list.find(i=>i.type==3)
                that.type4 = that.list.find(i=>i.type==4)
            })
            .catch(function (error) {
                that.models = '小主，请求失败了'
                that.showClose = true
                setTimeout(() => {
                    that.models = ''
                    that.showClose = false  
                }, 2000);
            });
        }
    },
    mounted(){
        this.$nextTick(this.request())
    },
    created(){
    }
}
</script>

<style  lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Sellout{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column; 
    .hollow{
        width:px2rem(385px);
        height:px2rem(385px);
        display:flex;
        margin:auto;
    }
    .Sellouthead{
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
        display:flex;
        flex-direction:column;
        .headBox{
            display:flex;
            height:px2rem(70px);
            background:#fff;
            border:px2rem(1px) solid #ddd; 
            span{
               flex:1;
                text-align:center;
                line-height:px2rem(70px);
                font-size:px2rem(24px);
                color:#46474d; 
            } 
            span:before{
                content:'';
                transition:all 0.5s;
            }
            span.active{
                position:relative;
                color:#fe4f53;
            }
            span.active:before{
                content:'';
                position:absolute;
                left:50%;
                bottom:0;
                width:50%;
                margin-left:-25%;
                height:px2rem(4px);
                background:#fe4f53;
                border-radius:px2rem(10px);
            }
        }
        .shopBox{
            flex:1;
            overflow-y:scroll;
            .shopType{
                background:#fff;
                border-bottom:px2rem(1px) solid #ddd;
                border-left:0;
                border-right:0;
                //height:px2rem(300px);
                margin:px2rem(16px) auto;
                .typeHead{
                    height:px2rem(70px);
                    padding:0 px2rem(26px);
                    display:flex;
                    justify-content:space-between;
                    border-bottom:px2rem(1px) dashed #ddd;
                    span{
                        font-size:px2rem(21px);
                        color:#999;
                        margin:auto 0;
                    }
                    span:first-child{
                        flex:1;
                    }
                }
                .typeItem{
                    display:flex;
                    justify-content:space-between;
                    padding:px2rem(26px);
                    height:px2rem(160px);
                    .img{
                        display:flex;
                        width:px2rem(108px);
                        img{
                            max-width:100%;
                            max-width:100%;
                            margin:auto;
                        }
                    }
                    .middle{
                        flex:1;
                        display:flex;
                        flex-direction:column;
                        margin:0 px2rem(26px);
                        h4{
                            margin:auto 0 px2rem(6px);
                            font-size:px2rem(22px);
                            overflow:hidden;
                            text-overflow:ellipsis;
                            display:-webkit-box;
                            -webkit-line-clamp:2;
                            -webkit-box-orient:vertical;
                        }
                        span{
                            margin:px2rem(6px) 0 auto;
                            font-size:px2rem(20px);
                            color:#999;
                        }
                    }
                    .sum{
                        width:px2rem(140px);
                        display:flex;
                        flex-direction:column;
                        margin:auto 0;
                        .price{
                            margin:auto 0 px2rem(6px);
                            text-align:right;
                            span{
                                display:block;
                                font-size:px2rem(20px);
                                margin:px2rem(6px) auto;
                            }
                            span.oprice{
                                color:#999;
                                text-decoration:line-through;
                            }
                        }
                        .amount{
                            font-size:px2rem(20px);
                            color:#999;
                            text-align:right;
                        }
                    }
                }
                .total{
                    border-top:px2rem(1px) dashed #ddd;
                    border-bottom:px2rem(1px) dashed #ddd;
                    height:px2rem(70px);
                    padding:0 px2rem(26px);
                    display:flex;
                    justify-content:flex-end;
                    span{
                        margin:auto px2rem(6px);
                        color:#999;
                        font-size:px2rem(22px);
                    }
                    span.todollr{
                        color:#000;
                    }
                }
                .settle{
                    height:px2rem(85px);
                    padding:0 px2rem(26px);
                    display:flex;
                    justify-content:flex-end;
                    a{
                        margin:auto px2rem(16px);
                        border:px2rem(1px) solid #000;
                        font-size:px2rem(20px);
                        padding:px2rem(8px);
                        border-radius:px2rem(6px);
                    }
                    a:first-child{
                        margin:auto 0;
                    }
                    a.active{
                        color:#fe4f53;
                        border-color:#fe4f53;
                    }
                }
            }
        }
    }
    .red{
        color:#fe4f53 !important;
    }
    .blank{
        color:#000 !important;
    }
}
</style>
