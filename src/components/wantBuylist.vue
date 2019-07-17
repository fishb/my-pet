<template>
    <div class="wantBuylist">
        <header class="buyHead">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">求购信息</h2>
        </header>
        <main class="mainBox">
            <!--无图-->
            <div class="listBox">
                <div class="BoxTop">
                    <div class="info">
                        <div class="img"><img src="../assets/img/tx.png" alt=""></div>
                        <div class="Name">
                            <span class="nes">柯基</span>
                            <span>广东 广州</span>
                        </div>
                        <div class="time">24小时前</div>
                    </div>
                    <div class="inTxt">双血统母柯基要三通大围脖的</div>
                </div>
                <div class="BoxBottom">
                    <a :href="'tel:'+tel">
                        <i class="iconfont icon-dianhua"></i>
                        <span>电话</span>
                    </a>
                    <a href="#">
                        <i class="iconfont icon-liaotian"></i>
                        <span>私聊</span>
                    </a>
                </div>
            </div>
            <!--有图-->
            <div class="listBox">
                <div class="BoxTop">
                    <div class="info">
                        <div class="img"><img src="../assets/img/tjsj.png" alt=""></div>
                        <div class="Name">
                            <span class="nes">哈士奇</span>
                            <span>上海  浦东新</span>
                        </div>
                        <div class="time">24小时前</div>
                    </div>
                    <div class="inTxt">我要 哈士奇纯种黑色幼犬蓝眼睛，打好疫苗的，还有就是1500以内可以接受，价高勿扰谢谢！
                        <yd-lightbox class="imgs">
                            <div class="img" v-for="item in list" :key="item.id">
                                <yd-lightbox-img :src="item.img"></yd-lightbox-img>
                            </div>
                        </yd-lightbox>
                    </div>
                </div>
                <div class="BoxBottom">
                    <a :href="'tel:'+tel">
                        <i class="iconfont icon-dianhua"></i>
                        <span>电话</span>
                    </a>
                    <a href="#">
                        <i class="iconfont icon-liaotian"></i>
                        <span>私聊</span>
                    </a>
                </div>
            </div>
            <div class="listBox">
                <div class="BoxTop">
                    <div class="info">
                        <div class="img"><img src="../assets/img/tjsj.png" alt=""></div>
                        <div class="Name">
                            <span class="nes">哈士奇</span>
                            <span>上海  浦东新</span>
                        </div>
                        <div class="time">24小时前</div>
                    </div>
                    <div class="inTxt">我要 哈士奇纯种黑色幼犬蓝眼睛，打好疫苗的，还有就是1500以内可以接受，价高勿扰谢谢！
                        <yd-lightbox class="imgs">
                            <div class="img" v-for="item in list2" :key="item.id">
                                <yd-lightbox-img :src="item.img"></yd-lightbox-img>
                            </div>
                        </yd-lightbox>
                    </div>
                </div>
                <div class="BoxBottom">
                    <a :href="'tel:'+tel">
                        <i class="iconfont icon-dianhua"></i>
                        <span>电话</span>
                    </a>
                    <a href="#">
                        <i class="iconfont icon-liaotian"></i>
                        <span>私聊</span>
                    </a>
                </div>
            </div>
            <div class="listBox">
                <div class="BoxTop">
                    <div class="info">
                        <div class="img"><img src="../assets/img/tjsj.png" alt=""></div>
                        <div class="Name">
                            <span class="nes">哈士奇</span>
                            <span>上海  浦东新</span>
                        </div>
                        <div class="time">24小时前</div>
                    </div>
                    <div class="inTxt">我要 哈士奇纯种黑色幼犬蓝眼睛，打好疫苗的，还有就是1500以内可以接受，价高勿扰谢谢！
                        <yd-lightbox class="imgs">
                            <div class="img" v-for="item in list3" :key="item.id">
                                <yd-lightbox-img :src="item.img"></yd-lightbox-img>
                            </div>
                        </yd-lightbox>
                    </div>
                </div>
                <div class="BoxBottom">
                    <a :href="'tel:'+tel">
                        <i class="iconfont icon-dianhua"></i>
                        <span>电话</span>
                    </a>
                    <a href="#">
                        <i class="iconfont icon-liaotian"></i>
                        <span>私聊</span>
                    </a>
                </div>
            </div>
        </main>
        <router-link :to="{path:'/Wantbuy'}" class="fixBox">
            <i class="iconfont icon-iconjia-copy"></i>
        </router-link>
    </div>
</template>

<script>
import Vue from 'vue'
import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox'
Vue.component(LightBox.name, LightBox)
Vue.component(LightBoxImg.name, LightBoxImg)
Vue.component(LightBoxTxt.name, LightBoxTxt)
export default {
    name:'wantBuylist',
    data(){
        return{
            tel:'18870033089',
            list:[{
                img:'http://axios.weakwater.com/img/bx.jpg',
            },{
                img:'http://axios.weakwater.com/img/kjq.jpg'
            },{
                img:'http://axios.weakwater.com/img/jmxhq.jpg'
            }],
            list2:[
                {
                    img:'http://axios.weakwater.com/img/bx.jpg'
                }
            ],
            list3:[
                {
                    img:'http://axios.weakwater.com/img/kjq.jpg'
                },{
                    img:'http://axios.weakwater.com/img/jmxhq.jpg'
                }
            ]
        }
    },
    methods:{
        history(){
            this.$router.go(-1);
        }
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
.wantBuylist{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .fixBox{
        position:fixed;
        left:50%;
        bottom:px2rem(60px);
        margin-left:-(px2rem(45px));
        width:px2rem(90px);
        height:px2rem(90px);
        background:#fe4f53;
        border-radius:50%;
        display:flex;
        box-shadow:px2rem(2px) px2rem(2px) px2rem(2px) solid #ff8c55;
        i{
            font-size:px2rem(40px);
            color:#000;
            margin:auto;
        }
    }
    .buyHead{
        height:px2rem(75px);
        background:#fe4f53;
        // background-image:url(../assets/img/searchBox.png);
        // background-repeat:no-repeat;
        // background-size:100% px2rem(75px);
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
        .listBox{
            margin:px2rem(12px) auto 0;
            background:#fff;
            .BoxTop{
                padding:px2rem(26px);
                .info{
                    height:px2rem(80px);
                    display:flex;
                    justify-content:space-between;
                    .img{
                        width:px2rem(80px);
                        height:px2rem(80px);
                        border-radius:50%;
                        overflow:hidden;
                        margin:auto 0;
                        img{
                            width:100%;
                            height:100%;
                        }
                    } 
                    .Name{
                        flex:1;
                        display:flex;
                        flex-direction:column;
                        margin:auto px2rem(26px);
                        .nes{
                            font-size:px2rem(26px);
                            color:#000;
                            margin:0 0 px2rem(6px);
                        }
                        span{
                            font-size:px2rem(20px);
                            color:#bac0c6;
                            margin:0 0 auto;
                        }
                    }
                    .time{
                        font-size:px2rem(20px);
                        color:#bac0c6;
                        margin:auto 0 px2rem(6px);
                    }
                }
                .inTxt{
                    margin:px2rem(12px) 0;
                    font-size:px2rem(26px);
                    color:#000;   
                    .imgs{
                        margin:px2rem(12px) auto 0;
                        display:flex;
                        // flex-wrap:wrap;
                        justify-content:space-between;
                        .img{
                            flex:1;
                            margin:0 px2rem(6px);
                            img{
                                width:100%;
                                height:100%;
                            }
                        }
                        
                    }           
                }
            }
            .BoxBottom{
                display:flex;
                height:px2rem(90px);
                border-top:px2rem(1px) solid #ddd;
                a{
                    display:flex;
                    flex:1;
                    justify-content:center;
                    color:#46474d;
                    i{
                        font-size:px2rem(30px);
                        margin:auto 0;
                    }
                    span{
                        font-size:px2rem(26px);
                        margin:auto px2rem(12px);
                    }
                }
            }
        }
        
    }
}
</style>
