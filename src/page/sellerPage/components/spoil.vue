<template>
    <section class="spoil">
        <!--筛选开始-->
        <div class="filter">
            <span @click="rotate"><em>{{filterTxt}}</em><i class="iconfont icon-svg19" :class="show1?'rotate':''"></i></span>
            <span @click="filter"><em>筛选</em><i class="iconfont icon-svg19" :class="show2?'rotate':''"></i></span>
        </div>
        <!--宠物分类-->
        <div class="itemize" v-show="show1">
            <div class="itemizeL">
                <span :class="ifshow?'active':''" @click="ifs">不限</span>
                <span :class="itemRow1?'active':''" @click="item1">狗狗</span>
                <span :class="itemRow2?'active':''" @click="item2">猫猫</span>
                <span :class="itemRow3?'active':''" @click="item3">小宠</span>
            </div>
            <div class="itemizeR">
                <div class="itemRow" v-show="ifshow"></div>
                <div class="itemRow" v-show="itemRow1">
                    <div class="item" v-for="item in dog" :key="item.id">
                        <img :src="item.src">
                        <span>{{item.name}}</span>
                    </div>
                </div>
                <div class="itemRow" v-show="itemRow2">
                    <div class="item" v-for="item in cat" :key="item.id">
                        <img :src="item.src" alt="">
                        <span>{{item.name}}</span>
                    </div>
                </div>
                <div class="itemRow" v-show="itemRow3">
                    <div class="item" v-for="item in other" :key="item.id" @click="request(item.url)">
                        <img :src="item.src">
                        <span>{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
        <!--筛选条件-->
        <div class="itemize filt" v-show="show2">
            <div class="itemizeT">
                <div class="filts">
                    <div class="filtTit">价格</div>
                    <div class="filtTy">
                        <span>2000元以下</span>
                        <span>2000-5000</span>
                        <span>5000-10000</span>
                        <span>10000以上</span>
                    </div>
                </div>
                <div class="filts">
                    <div class="filtTit">排序</div>
                    <div class="filtTy">
                        <span>价格升序</span>
                        <span>价格降序</span>
                        <span>最新</span>
                        <span>推荐</span>
                    </div>
                </div>
                <div class="filts">
                    <div class="filtTit">性别</div>
                    <div class="filtTy">
                        <span>DD</span>
                        <span>MM</span>
                    </div>
                </div>
            </div>
            <!--条件按钮-->
            <div class="itemizeB">
                <span class="reset">重置</span>
                <span class="confirm">确定</span>
            </div>
        </div>
        <!--筛选结束-->
        <div class="scrollBox" v-for="item in items" :key="item.id">
            <div class="model" v-show="loading">
                <loading></loading>
            </div>
            <a href="#" class="list" v-for="lists in item.list" :key="lists.id">
                <div class="img">
                    <img :src="lists.img">
                </div> 
                <div class="name">{{lists.name}}</div>
                <div class="mold">{{lists.title}}</div>
                <div class="price">{{lists.price}}元</div>
            </a>
        </div>
    </section>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios

import loading from '@/components/loading'
export default {
    name:'Spoil',
    components:{
        loading
    },
    data(){
        return{
            show1:false,
            show2:false,
            itemRow1:true,
            itemRow2:false,
            itemRow3:false,
            items:'',
            ifshow:false,
            loading:false,
            filterTxt:'分类',
            dog:[{
                src:'http://axios.weakwater.com/img/all.png',
                name:'全部狗狗'
            },{
                src:'http://axios.weakwater.com/img/gbq.jpg',
                name:'贵宾犬'
            },{
                src:'http://axios.weakwater.com/img/bx.jpg',
                name:'比熊'
            },{
                src:'http://axios.weakwater.com/img/bjmyq.jpg',
                name:'牧羊犬'
            },{
                src:'http://axios.weakwater.com/img/hsq.jpg',
                name:'哈士奇' 
            },{
                src:'http://axios.weakwater.com/img/jmxhq.jpg',
                name:'金毛寻回犬'
            },{
                src:'http://axios.weakwater.com/img/kjq.jpg',
                name:'柯基'
            },{
                src:'http://axios.weakwater.com/img/smy.jpg',
                name:'萨摩耶'
            },{

            }],
            cat:[{
                    src:'http://axios.weakwater.com/img/all.png',
                    name:'全部猫猫'
                },{
                    src:'http://axios.weakwater.com/img/mgdmm.jpg',
                    name:'美国短毛猫'
                },{
                    src:'http://axios.weakwater.com/img/bom.jpg',
                    name:'布偶猫'
                },{
                    src:'http://axios.weakwater.com/img/sglzem.jpg',
                    name:'苏格兰折耳猫'
                },{
                    src:'http://axios.weakwater.com/img/ygdmm.jpg',
                    name:'异国短毛猫'
                },{
                    src:'http://axios.weakwater.com/img/yinggdmm.jpg',
                    name:'英国短毛猫'
                }
            ],
            other:[{
                src:'http://axios.weakwater.com/img/all.png',
                name:'全部小宠'
            },{
                src:'http://axios.weakwater.com/img/cw.jpg',
                name:'刺猬'
            },{
                src:'http://axios.weakwater.com/img/hlcet.jpg',
                name:'荷兰折耳兔'
            },{
                url:'https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/qs_copy_1530596538397',
                src:'http://axios.weakwater.com/img/jsx.jpg',
                name:'金丝熊'
            },{
                url:'https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/qs',
                src:'http://axios.weakwater.com/img/hlzrt.jpg',
                name:'荷兰侏儒兔'
            },{
                url:'https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/qs',
                src:'http://axios.weakwater.com/img/ss.jpg',
                name:'松鼠'
            },{
                url:'https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/qs',
                src:'http://axios.weakwater.com/img/wg.jpg',
                name:'乌龟'
            }]
        }
    },
    mounted(){
    },
    methods:{
        rotate(){
            if(this.show1==false){
                this.show1 = true
                this.show2 = false
            }else{
                this.show1 = false
            }   
        },
        filter(){
            if(this.show2==false){
                this.show2 = true
                this.show1 = false
            }else{
                this.show2 = false
            }
        },
        ifs(){
            this.items = ''
            this.ifshow = true
            this.show1 = false
            this.itemRow1=false
            this.itemRow2=false
            this.itemRow3=false
            this.filterTxt = '分类'
        },
        item1(){
            if(this.itemRow1==false){
                this.ifshow = false
                this.itemRow1=true
                this.itemRow2=false
                this.itemRow3=false
            }
        },
        item2(){
            if(this.itemRow2==false){
                this.ifshow = false
                this.itemRow2=true
                this.itemRow1=false
                this.itemRow3=false
            }
        },
        item3(){
            if(this.itemRow3==false){
                this.ifshow = false
                this.itemRow3=true
                this.itemRow1=false
                this.itemRow2=false
            }
        },
        request(url){
            var _this = this
            _this.show1 = false
            _this.items = ''
            _this.loading = true
            axios.get(url)
            .then(function (res) {
                _this.items=res.data.data
                setTimeout(() => {
                    _this.loading = false
                }, 1000);
            })
            .catch(function (error) {
                console.log(请求失败);
            });
        }
    },  
    created(res){
        // var _this = this;
        // axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/qs')
        //     .then(function (res) {
        //         _this.items=res.data.data
        //         // var List = _this.pet.
        //         // console.log(List);
        //     })
        //     .catch(function (error) {
        //     console.log(请求失败);
        // });
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.model{
    width:100%;
    margin:px2rem(10px);
    font-size:px2rem(50px);
    color:#000;
    display:flex;
    img{
        margin:auto;
        height:px2rem(250px);
    }
}
.spoil{
    display:flex;
    flex:1;
    flex-direction:column;
    .filter{
        height:px2rem(80px);
        line-height:px2rem(80px);
        background:#fff;
        display:flex;
        justify-content:space-between;
        span{
            flex:1;
            margin:auto;
            display:flex;
            justify-content:center;
            em{
                font-size:px2rem(24px);
            }
            i{
                font-size:px2rem(24px);
                margin:auto px2rem(10px);
                color:#959595;
            }
            i.rotate{
                transform:rotate(180deg);
            }
        }
    }
    .itemize{
        position:fixed;
        top:px2rem(170px);
        bottom:0;
        left:0;
        right:0;
        z-index:9999;
        border-top:px2rem(1px) solid #eee;
        background:#fff;
        display:flex;
        .itemizeL{
            width:px2rem(132px);
            margin:0;
            border-right:px2rem(1px) solid #eee;
            display:flex;
            flex-direction:column;
            span{
                text-align:center;
                height:px2rem(90px);
                line-height:px2rem(90px);
                font-size:px2rem(26px);
                cursor:pointer;
            }
            span.active{
                color:#fb7768;
                position:relative;
            }
            span.active:after{
                content:'';
                position:absolute;
                bottom:50%;
                left:50%;
                margin-left:-20%;
                margin-bottom:-20%;
                width:40%;
                height:px2rem(3px);
                background:#fb7768;
            }
        }
        .itemizeR{
            flex:1;
            overflow-y:scroll;
            padding:px2rem(20px);
            .itemRow{
                display:flex;
                flex-wrap:wrap;
                justify-content:space-between;
                .item{
                    width:px2rem(126px);
                    height:auto;
                    display:flex;
                    flex-direction:column;
                    margin:px2rem(40px) 0;
                    img{
                        width:px2rem(126px);
                        height:px2rem(126px);
                        margin:auto auto px2rem(12px);
                        border-radius:50%;
                    }
                    span{
                        font-size:px2rem(21px);
                        margin:0 auto auto;
                    }
                }
            }
        }
    }
    .filt{
        flex-direction:column;
        .itemizeT{
            flex:1;
            .filts{
                padding:px2rem(50px) px2rem(35px) 0;
                display:flex;
                flex-direction:column;
                .filtTit{
                    font-size:px2rem(22px);
                }
                .filtTy{
                    display:flex;
                    justify-content:space-between;
                    flex-wrap:wrap;
                    span{
                        width:px2rem(172px);
                        height:px2rem(45px);
                        border:px2rem(1px) solid #bbb;
                        border-radius:px2rem(20px);
                        font-size:px2rem(22px);
                        text-align:center;
                        line-height:px2rem(45px);
                        margin:px2rem(30px) 0 0;
                        color:#bbb;
                    }
                }
            }
        }
        .itemizeB{
            border-top:px2rem(1px) solid #eee;
            height:px2rem(115px);
            display:flex;
            justify-content:space-around;
            span{
                width:px2rem(200px);
                height:px2rem(60px);
                line-height:px2rem(60px);
                border:px2rem(1px) solid #bbb;
                border-radius:px2rem(20px);
                font-size:px2rem(22px);
                text-align:center;
                margin:auto 0;
                color:#bbb;
            }
            span.confirm{
                background:#fb7768;
                color:#fff;
                border:0;
            }
        }
    }
    .scrollBox{
        padding:px2rem(16px);
        flex:1;
        overflow-y:scroll;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        .list{
            width:px2rem(296px);
            height:px2rem(390px);
            padding:px2rem(20px);
            background:#fff;
            display:flex;
            flex-direction:column;
            margin-bottom:px2rem(16px);
            .img{
                width:px2rem(242px);
                height:px2rem(242px);
                margin:0 auto;
                display:flex;
                img{
                    width:px2rem(242px);
                    height:px2rem(242px);
                    max-width:px2rem(242px);
                    max-height:px2rem(242px);
                    margin:auto;
                    border-radius:px2rem(12px);
                }
            }
            .name{
                font-size:px2rem(24px);
                margin:px2rem(12px) 0 0;
            }
            .mold{
                font-size:px2rem(22px);
                color:#949494;
                margin:auto 0;
                white-space:nowrap;
                text-overflow:ellipsis;
                overflow:hidden;
            }
            .price{
                font-size:px2rem(24px);
                color:#ec1614;
            }
        }
    }
}
</style>
