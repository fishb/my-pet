<template>
    <div class="Buy">
        <header class="Buyhead">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">我买到的</h2>
        </header>
        <main class="mainBox">
            <section class="headBox">
                <span v-for="(nam,namIndex) in name" :key="namIndex" @click="tab(namIndex)" :class="num==namIndex?'active':''">{{nam}}</span>
            </section>
            <pl-lazy time="400">
                <Btypeone v-if="num==0" :type="type1"></Btypeone>
                <Btypetwo v-if="num==1" :type="type2"></Btypetwo>
                <Btypethreen v-if="num==2" :type="type3"></Btypethreen>
                <Btypefour v-if="num==3" :type="type4"></Btypefour>
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
import Btypeone from '@/page/user/components/buys/Btypeone'
import Btypetwo from '@/page/user/components/buys/Btypetwo'
import Btypethreen from '@/page/user/components/buys/Btypethreen'
import Btypefour from '@/page/user/components/buys/Btypefour'
export default {
    name:'Buy',
    components:{
        PlLazy,Btypeone,Btypetwo,Btypethreen,Btypefour
    },
    data(){
        return{
            name:['待付款','待发货','已发货','退款'],
            total:'',
            models:'',
            list:'',
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
            // `this` 指向 vm 实例
            // 为给定 ID 的 user 创建请求
            that.$dialog.loading.open('加载中')
            axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/bs')  
            .then(function (res) { 
                that.$dialog.loading.close();
                that.$dialog.toast({
                    mes: '加载成功',
                    timeout: 1500,
                    icon: 'success'
                })
                that.list= res.data.data.list
                that.type1 = that.list.find(i=>i.type==1)
                that.type2 = that.list.find(i=>i.type==2)
                that.type3 = that.list.find(i=>i.type==3)
                that.type4 = that.list.find(i=>i.type==4)
                console.log(that.type4)
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

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Buy{
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
    .Buyhead{
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
            box-shadow:0 px2rem(4px) px2rem(1px) #eee;
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
                box-shadow:0 px2rem(4px) px2rem(1px) #eee;
                //border-bottom:px2rem(1px) solid #ddd;
                border-left:0;
                border-right:0;
                margin:px2rem(26px);
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
                    span{
                        flex:1;
                        margin:auto 0;
                        color:#999;
                        font-size:px2rem(26px);
                    }
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
            .red{
                color:#fe4f53 !important;
            }
        }  
    }
    .blank{
        color:#000 !important;
    }
    .tips{
        position:fixed;
        width:100%;
        top:px2rem(145px);
        padding:0 px2rem(26px);
        background:rgba(42,186,255,0.8);
        height:px2rem(60px);
        display:flex;
        justify-content:space-between;
        i{
            color:#fff;
            font-size:px2rem(22px);
            margin:auto 0;
        }
        span{
            flex:1;
            margin:auto px2rem(12px);
            color:#fff;
            font-size:px2rem(22px);
        }
        div{
            font-size:px2rem(26px);
            margin:auto 0;
            color:#fff;
        }
    }
}
</style>
