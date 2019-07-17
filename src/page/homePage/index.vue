<template>
    <div class="index">
        <!--顶部搜索开始-->
        <header class="searchBox">
            <div class="shareBtn">
                <img src="../../assets/icon/logo.png" alt="">
                <!-- <i class="iconfont icon-shouye3"></i> -->
            </div>
            <router-link :to="{path: '/Search'}" class="searchBtn">
                <i class="iconfont icon-sousuo"></i>
                <span>大家都在搜"狗子去哪儿"</span>
            </router-link>
            <span class="coseBtn" @click="coseBtn">
                <span>{{city}}</span>
                <i class="iconfont icon-xiala"></i>
            </span>
        </header>
        <!--顶部搜索结束-->
        <!--刷新组件-->
        <Refresh :refreshIng="refreshing"></Refresh>
        <!--视图容器开始-->
        <main class="mainBox" ref="mainBox" @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" :style="'transform:translateY('+top+'px'+')'">
            <!--轮播图-->
            <Ydslider></Ydslider>
            <!--版块开始-->
            <div class="clasicBox">
                <router-link :to="{path:'/Nearby'}">
                    <span class="imgs"><img src="../../assets/icon/fuj.png" alt=""></span>
                    <!-- <i class="iconfont icon-fujin"></i> -->
                    <span>附近</span>
                </router-link>
                <router-link :to="{path:'/Dog'}">
                    <span class="imgs"><img src="../../assets/icon/dog.png" alt=""></span>
                    <!-- <i class="iconfont icon-gou"></i> -->
                    <span>宠物狗</span>
                </router-link>
                <router-link :to="{path:'/Cat'}">
                    <span class="imgs"><img src="../../assets/icon/cat.png" alt=""></span>
                    <!-- <i class="iconfont icon-maomi"></i> -->
                    <span>宠物猫</span>
                </router-link>
                <router-link :to="{path:'/Other'}">
                    <span class="imgs"><img src="../../assets/icon/rabbit.png" alt=""></span>
                    <!-- <i class="iconfont icon-tuzi"></i> -->
                    <span>异宠</span>
                </router-link>
            </div>
            <!--版块结束-->
            <!--热门-->
            <Hot></Hot>
            <!--特惠抢购开始-->
            <Odds></Odds>
            <!--特惠抢购结束-->
            <!--最新上架开始-->
            <Arrival></Arrival>
            <!--最新上架结束-->
            <!--精品馆开始-->
            <Fine></Fine>
            <!--精品馆结束-->
            <!--买家求购开始-->
            <Buyer></Buyer>
            <!--买家求购结束-->
            <!--热门分类开始-->
            <Category></Category>
            <!--热门分类结束-->
            <!--推荐商家开始-->
            <Onbusine></Onbusine>
            <!--推荐商家结束-->
            <!--猜你喜欢开始-->
            <Like></Like>
            <!--猜你喜欢结束-->
        </main>
        <!--视图容器结束-->
        <!--加载组件-->

        <!--底部tabbar-->
        <Navlist></Navlist>
        <!--发布按钮-->
        <Pushbtn></Pushbtn>
        <!--城市切换隐藏-->
        <citySwitch v-if="cityShow" v-on:cityValue="cityValue"></citySwitch>
    </div>    
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import Refresh from '@/components/refresh' //下拉刷新内容组件
import Navlist from '@/components/nav.vue'
import Pushbtn from '@/page/homePage/components/pushBtn.vue'
import Hot from '@/page/homePage/components/hot.vue'
import Odds from '@/page/homePage/components/odds.vue'
import Arrival from '@/page/homePage/components/arrival.vue'
import Ydslider from '@/page/homePage/components/Ydslider.vue'
import Fine from '@/page/homePage/components/fine.vue'
import Buyer from '@/page/homePage/components/buyer.vue'
import Category from '@/page/homePage/components/category.vue'
import Onbusine from '@/page/homePage/components/Onbusine.vue'
import Onseller from '@/page/homePage/components/Onseller.vue'
import Like from '@/page/homePage/components/Like.vue'
import citySwitch from '@/components/citySwitch'//城市选择组件
export default {
    name:'Index',
    components:{
        Refresh,//刷新组件
        Navlist,Pushbtn,Ydslider,Odds,Hot,Arrival,Fine,Buyer,Category,Onbusine,Onseller,Like,citySwitch
    },
    data(){
        return{
            slider:'',
            msg:'首页',
            cityShow:false,
            city:'',
            //refreshIng:'',//下拉刷新
            state:'',
            top: 0,
　　　　　　 startY: 0,     //保存 y轴点的位置
　　　　　　 refreshing:false //代表当前是否处于下拉刷新行为的开关
        }
    },
    methods:{
        coseBtn(){
            this.cityShow = true
        },
        cityValue(cityShow,cityItem){
            this.cityShow = cityShow
            this.city = cityItem
        },
        touchStart(e){ //触摸事件
            //e代表该事件对象,e.targetTouches[0].pageY可以拿到手指按下的 y轴点
　　　　　　this.startY = e.targetTouches[0].pageY
           console.log(this.startY)
　　　　　　// 开启下拉刷新状态
　　　　　　this.refreshing = true
        },
        touchMove(e) {
  　　　　  //这个touchMove,只要页面在动都会发生的,所以refreshing就起作用了
　　　　　　//如果 touching为false,说明这个正在移动的页面不是我们想要的下拉刷新,有可能是用户随意拉了一下页面而已,或者其他
　　　　　　if(!this.refreshing) return
　　　　　　// 获取移动的距离
　　　　　　let diff = e.targetTouches[0].pageY - this.startY 
　　　　　　//判断是向上拉还是向下拉 
　　　　　　if(diff>0) { 
　　　　　　　　e.preventDefault()
　　　　　　}else{
　　　　　　　　return 　　
　　　　　　}
　　　　　　//这个this.top要对应绑定到该元素的transform:translateY(+top+'px')上,不然是无法拉动的
　　　　　　// 因此这里还要对偏移高度做一下处理,直接设置diff +(this.state === 2 ? 40 : 0) 太快了，因为拉取幅度太大
　　　　　　// 让diff*0.25这样子就差不多了
　　　　　　this.top = Math.floor(diff*0.25) + (this.state === 2 ? 100 : 0)
            this.top<=100
　　　　　　if(this.top >= 100){
　　　　　　　　this.state = 1   //代表正在拉取
　　　　　　}else {
　　　　　　　　this.state = 0  //代表初始转态
　　　　　　}　　　
　　　　},
        touchEnd(e) {
　　　　　　this.refreshing = false
　　　　　　if(this.state === 2) {
　　　　　　　　this.top = 100
　　　　　　　　return 
　　　　　　}
　　　　　　// 判断抬起时的高度，是大于40 就开启刷新
　　　　　　if(this.top >= 100) {
            console.log('刷新中')
　　　　　　　　//this.refresh()
　　　　　　}else{
　　　　　　　　this.state = 0
　　　　　　　　this.top = 0
　　　　　　}
　　　　},
    },
    computed:{  	
    },
    mounted(){  
        this.city = '南昌'  
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
$background:'@/assets/img/bg.png';
.index{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    position:relative;
    /**搜索栏**/
    .searchBox{
        width:100%;
        height:px2rem(75px);
        display:flex;
        justify-content:space-between;
        z-index:999;
        background:#fff;
        border-bottom:px2rem(1px) solid #eee;
        .shareBtn{
            width:px2rem(75px);
            height:px2rem(75px);
            display:flex;
            margin:0 px2rem(12px);
            img{
                width:px2rem(46px);
                height:px2rem(46px);
                margin:auto;
            }
            i{
                border-radius:50%;
                font-size:px2rem(45px);
                color:#000;
                margin:auto;
                text-align:center;
            }
        }
        .coseBtn{
            max-width:px2rem(165px);
            height:px2rem(75px);
            display:flex;
            margin:0 px2rem(12px);
            span{
                font-size:px2rem(26px);
                color:#46474d;
                margin:auto px2rem(6px);
            }
            i{
                font-size:px2rem(26px);
                color:#46474d;
                margin:auto 0;
            }
        }
        .searchBtn{
            flex:1;
            height:px2rem(55px);
            margin:auto;
            padding:0 px2rem(26px);
            border-radius:px2rem(12px);
            display:flex;
            justify-content:flex-start;
            background:#f7fafc;
            i{
                font-size:px2rem(22px);
                color:#8b8b8b;
                margin:auto px2rem(10px);
            }
            span{
                font-size:px2rem(22px);
                color:#8b8b8b;
                margin:auto 0;
            }
        }
    }
    /**mainBox**/
    .mainBox{
        flex:1;
        overflow-y:scroll;
        -webkit-overflow-scrolling: touch;
        //padding-top:px2rem(89px);
        background-color:#fffbff;
    }
}
.clasicBox{
    margin:px2rem(16px) auto;
    height:px2rem(170px);
    background:#fff;
    display:flex;
    justify-content:space-between;
}
.clasicBox a{
    display:flex;
    flex:1;
    flex-direction:column;
    color:#fff;
    font-size:px2rem(44px);
}
.clasicBox a img{
    width:px2rem(77px);
    height:px2rem(77px);
    margin:auto;
    text-align:center;
}
.clasicBox a i{
    width:px2rem(77px);
    height:px2rem(77px);
    font-size:px2rem(50px);
    margin:auto;
    text-align:center;
    line-height:px2rem(77px);
    background: -webkit-gradient(linear, left top, left bottom, from(#ffd700), to(#ffb707));
    background: linear-gradient(#ffd700, #ffb707);
    border-radius:50%;
}
.clasicBox a:nth-child(2) i{
   background: -webkit-gradient(linear, left top, left bottom, from(#39bbe7), to(#1886ef));
   background: linear-gradient(#39bbe7, #1886ef); 
}
.clasicBox a:nth-child(3) i{
   background: -webkit-gradient(linear, left top, left bottom, from(#ff7251), to(#ff456b));
   background: linear-gradient(#ff7251, #ff456b); 
}
.clasicBox a:nth-child(4) i{
   background: -webkit-gradient(linear, left top, left bottom, from(#ce71f7), to(#bd55ef));
   background: linear-gradient(#ce71f7, #bd55ef); 
}
.clasicBox a .imgs{
    width:px2rem(77px);
    height:px2rem(77px);
    font-size:px2rem(50px);
    margin:auto;
    text-align:center;
    line-height:px2rem(77px);
    background: -webkit-gradient(linear, left top, left bottom, from(#ffd700), to(#ffbd00));
    background: linear-gradient(#ffd700, #ffbd00);
    border-radius:50%;
    display:flex;
}
.clasicBox a .imgs img{
    width:80%;
    height:80%;
    margin:auto;
}
.clasicBox a:nth-child(2) .imgs{
   background: -webkit-gradient(linear, left top, left bottom, from(#39bbe7), to(#1886ef));
   background: linear-gradient(#39bbe7, #1886ef); 
}
.clasicBox a:nth-child(3) .imgs{
   background: -webkit-gradient(linear, left top, left bottom, from(#ff7251), to(#ff456b));
   background: linear-gradient(#ff7251, #ff456b); 
}
.clasicBox a:nth-child(4) .imgs{
   background: -webkit-gradient(linear, left top, left bottom, from(#ce71f7), to(#bd55ef));
   background: linear-gradient(#ce71f7, #bd55ef); 
}
.clasicBox a span{
    color:#000;
    margin:0 auto auto;
    font-size:px2rem(22px);
}
</style>
