<template>
<div class="pet">
    <header class="headerBox" :class="active?'scH':''">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">商品详情</h2>
    </header>
    <!--宠物详情开始-->
    <main class="mainBox" ref="scrollM">
        <!--宠物基本信息-->
        <div class="basic">
            <!--视频图片组件-->
            <section class="lovely">
                <div class="swiper-container photo">
                    <yd-lightbox class="swiper-wrapper">
                        <yd-lightbox-img class="swiper-slide" v-for="item in photo" :key="item.id" :src="item.img"></yd-lightbox-img>
                    </yd-lightbox> 
                </div>
            </section>
        </div>
        <section class="petDetail">
                <div class="tyName">
                    <h4>哈姆小宠 松鼠营养液908g</h4>
                </div>
                <div class="tyPrice">
                    <div class="priceBtn">¥98</div>
                    <div class="opriceBtn">¥108</div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>阶段：</em><span>各个阶段</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>适宜：</em><span>松鼠</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>毛重：</em><span>908g</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>口味：</em><span>蔬菜坚果味</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>期限：</em><span>18个月以上</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>优惠：</em><span>无</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>配送：</em><span>全国包邮</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>品牌：</em><span>哈姆小宠</span>
                    </div>
                </div>
        </section>
        <section class="voucher">
            <a href="#" class="Box" @click="dilogT">
                <div class="Boxl">
                    <em>领劵：</em>
                    <span>2张劵可用</span>
                </div>
                <i class="iconfont icon-youjiantou"></i>
            </a>
            <router-link :to="{path:'/Integral'}" class="Box">
                <div class="Boxl">
                    <em>积分：</em>
                    <span>500积分可用</span>
                </div>
                <i class="iconfont icon-youjiantou"></i>
            </router-link>
        </section>
        <!--品质服务保障-->
        <section class="tone">
            <div class="toneTy">
                <h4><em>品质服务保障</em></h4>
                <ul>
                    <li>
                        <img src="../../../assets/icon/seven.png" alt="">
                        <div class="toneInfo">
                            <span>七天无理由退货</span>
                            <span>自商品签收之日起7天内，支持无理由退款，食品健康品外包装不能拆封；其他品类商品外包装完整，吊牌完整（若有）,相关附（配）件齐全，商品无破损可申请无理由退货，包邮商品有买家承担相应邮费</span>
                        </div>
                    </li>
                    <li>
                        <img src="../../../assets/icon/xfz.png" alt="">
                        <div class="toneInfo">
                            <span>消费者保障服务</span>
                            <span>平台为卖家提供1000元担保金，在确认收货11天内，如有商品质量问题、描述不符或未收货等，您有权申请退款退货，来回邮费由卖家承担</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="toneImg">
                <img src="../../../assets/icon/ys.png" alt="">
            </div>
        </section>
    </main>
    <!--商品详情结束-->
    <!--立即购买-->
    <footer class="footer">
        <div class="goBox">
            <a href="#">
                <i class="iconfont icon-dianpu"></i>
                <span>店铺</span>
            </a>
            <router-link :to="'/Chat/'+id">
                <i class="iconfont icon-kefu"></i>
                <span>客服</span>
            </router-link>
            <a href="#">
                <i class="iconfont icon-shoucang"></i>
                <span>收藏</span>
            </a>
        </div>
        <div class="goBuy">
            <router-link :to="'/MallSingle/'+id">立即购买</router-link>
        </div>
    </footer>
    <!--优惠券弹出层-->
    <div class="coupon" v-if="dilog" @click="dilogT">
        <div class="dilog">
            <div class="Title">优惠券</div>
            <div class="couponM">
                <div class="couponL">158<em>元</em></div>
                <span class="line"></span>
                <div class="couponR">
                    <div class="mains">
                        <h1>新人注册158元优惠券</h1>
                        <span>满5000元即可使用，此优惠券仅在精品馆使用</span>
                        <span>有效期至2019-01-01 00:00:00</span>
                    </div>
                    <div class="state">待使用</div>
                </div>
            </div>
            <div class="couponM">
                <div class="couponL">60<em>元</em></div>
                <span class="line"></span>
                <div class="couponR">
                    <div class="mains">
                        <h1>新人注册158元优惠券</h1>
                        <span>满2000元即可使用，此优惠券仅在精品馆使用</span>
                        <span>有效期至2019-01-01 00:00:00</span>
                    </div>
                    <div class="state">待使用</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox'
Vue.component(LightBox.name, LightBox)
Vue.component(LightBoxImg.name, LightBoxImg)
Vue.component(LightBoxTxt.name, LightBoxTxt)
import Swiper from 'swiper'
export default {
    name:'Mallmain',
    data(){
        return{
            id:this.$route.params.id,
            item:'',
            photo:[{
                img:'http://axios.weakwater.com/img/stape.png',
            },{
                img:'http://axios.weakwater.com/img/stape1.png'
            }],
            dilog:false,
            active:false
        }
    },
    methods:{
        history(){
            this.$router.go(-1);
        },
        tabs(){
            if(this.toggle==true){
                this.toggle=false
            }else{
                this.toggle=true
            }
        },
        dilogT(){
            if(this.dilog == false){
                this.dilog = true
            }
            else{
                this.dilog = false
            }
        },
        scHt(){
            var scrollTops = this.$refs.scrollM.scrollTop
            var offsets = this.$refs.scrollM.offsetTop
            if(offsets<scrollTops){
                this.active = true
            }else{
                this.active = false
            }
        }
    },
    mounted(res){
        var _this = this;
        // `this` 指向 vm 实例
        // 为给定 ID 的 user 创建请求
        axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/thqg')
            .then(function (res) {
                _this.item  = res.data.data.find(p=>p.id===_this.id)
                //var item = res.data.find(p=>p.id===this.$route.params.id)
                //_this.photo = _this.item.photo
            })
            .catch(function (error) {
                console.log(请求失败);
        });
        this.$refs.scrollM.addEventListener('scroll',this.scHt)
    },
    created(){ 
        this.$nextTick(function(){
            var photos = new Swiper('.photo', {
                loop: true,
                speed:600,
                pagination: {
                    el:'.fyq',
                    dynamicBullets: true
                }
            });
        })
        
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
$color:#fff;
.pet{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        transition:all 2s;
        position:fixed;
        top:0;
        width:100%;
        height:px2rem(75px);
        background:transparent;
        display:flex;
        z-index:999;
        opacity:0.5;
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
        span:last-child{
            right:0;
        }
        .Title{
            margin:auto;
            color:#fff;
            font-size:px2rem(30px);
            font-weight:normal;
        }
    }
    .scH{
        opacity:1;
        background:rgba(255,255,255,1);
        span{
            i{
                color:#000;
            }
        }
        .Title{
            color:#000;
        }
    }
    .mainBox{
        flex:1;
        overflow-y:scroll;
        .basic{
            height:px2rem(650px);
            background:$color;
            .lovely{
                width:100%;
                height:100%;
                position:relative;
                .photo{
                    width:100%;
                    height:100%;
                    background:transparent;
                    .photo{
                        width:100%;
                        height:100%;
                    }
                }
            }
            
        }
        .petDetail{
            background:#fff;
            padding:px2rem(26px);
            display:flex;
            flex-direction:column;
            .tyName{
                display:flex;
                justify-content:space-between; 
                h4{
                    margin:auto 0;
                    font-size:px2rem(34px);
                    font-weight:normal;
                }
            }
            .tyPrice{
                display:flex;
                justify-content:flex-start;
                margin:px2rem(12px) 0;
                .priceBtn{
                    margin:auto 0 0;
                    font-size:px2rem(34px);
                    font-weight:bold;
                    color:#fe4f53;
                }
                .opriceBtn{
                    font-size:px2rem(28px);
                    margin:auto 0 0 px2rem(12px);
                    text-decoration:line-through;
                    color:#bac0c6;
                }
            }
            .tyBox{
                margin:px2rem(12px) 0;
                display:flex;
                justify-content:space-between; 
                .oprice{
                    margin:auto 0;
                    font-size:px2rem(24px);
                    color:#bac0c6;
                }
            }
        }
        .voucher{
            margin:px2rem(16px) auto;
            background:#fff;
            display:flex;
            flex-direction:column;
            .Box{
                padding:0 px2rem(16px);
                height:px2rem(90px);
                border-bottom:px2rem(1px) solid #eee;
                display:flex;
                justify-content:space-between;
                .Boxl{
                    flex:1;
                    margin:auto;
                    em{
                        width:px2rem(70px);
                        font-size:px2rem(24px);
                        color:#bac0c6;
                    }
                    span{
                        font-size:px2rem(24px);
                        color:#000;
                    }
                }
                i{
                    margin:auto 0;
                    font-size:px2rem(20px);
                    color:#bac0c6;
                }
            }
            .Box:last-child{
                border-bottom:0;
            }
        }
        .tone{
            background:#fff;
            margin:px2rem(16px) 0;
            display:flex;
            flex-direction:column;
            .toneTy{
                padding:px2rem(16px) px2rem(26px);
                h4{
                    margin:px2rem(26px);
                    display:flex;
                    height:px2rem(50px);
                    line-height:px2rem(50px);
                    background:url(../../../assets/icon/xx.png) repeat-x;
                    background-size:px2rem(30px);
                    background-position:center;
                    em{
                        margin:0 auto;
                        font-size:px2rem(18px);
                        color:#000;
                        background:#fff;
                        //width:px2rem(100px);
                        height:px2rem(50px);
                    }
                }
                ul{
                    overflow:hidden;
                    display:flex;
                    flex-direction:column;
                    li{
                        display:flex;
                        justify-content:space-between;
                        margin-bottom:px2rem(16px);
                        img{
                            min-width:px2rem(45px);
                            width:px2rem(45px);
                            height:px2rem(45px);
                            margin-right:px2rem(26px);
                        }
                        .toneInfo{
                            display:flex;
                            flex-direction:column;
                            span{
                                font-size:px2rem(26px);
                                color:#000;
                            }
                            span:last-child{
                                font-size:px2rem(24px);
                                color:#797679;
                            }
                        }
                    }
                }
            }
            .toneImg{
                height:auto;
                img{
                    max-width:100%;
                }
            }
        }
    }
    .tyinfo{
        margin:auto 0;
        display:flex;
        justify-content:flex-start;
        em{
            font-size:px2rem(24px);
            color:#bac0c6;
        }
        span{
            flex:1;
            font-size:px2rem(24px);
            color:#000;
            margin:auto px2rem(12px) auto px2rem(6px);
        }
    }
    .footer{
        height:px2rem(90px);
        background:$color;
        border-top:px2rem(1px) solid #eee;
        display:flex;
        justify-content:space-between;
        .goBox{
            flex:1;
            display:flex;
            a{
                flex:1;
                display:flex;
                flex-direction:column;
                color:#999;
                margin:auto; 
                i{
                    margin:auto auto px2rem(5px);
                    font-size:px2rem(32px);
                }
                span{
                    margin:0 auto auto;
                    font-size:px2rem(20px);
                }
            }
            a:first-child{
                border-right:px2rem(1px) solid #ddd;
                color:#fe4f53;
            }
            a:last-child{
                border-left:px2rem(1px) solid #ddd;
            }
        }
        .goBuy{
            width:px2rem(225px);
            a{
                display:block;
                line-height:px2rem(90px);
                text-align:center;
                font-size:px2rem(24px);
                background-color:#fe4f53;
                color:$color;
            }
        }
    }
    .coupon{
        position:fixed;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.4);
        z-index:9999;
        .dilog{
            position:fixed;
            width:100%;
            height:auto;
            min-height:px2rem(855px);
            bottom:0;
            background:#f2f2f2;
            display:flex;
            flex-direction:column;
            overflow-y:scroll;
            .Title{
                height:px2rem(90px);
                background:#fff;
                font-size:px2rem(32px);
                color:#000;
                text-align:center;
                line-height:px2rem(90px);
            }
            .couponM{
                margin:px2rem(12px) px2rem(12px) 0;
                height:px2rem(130px);
                background:#fff;
                border-radius:px2rem(16px);
                display:flex;
                justify-content:space-between;
                padding:px2rem(16px) 0;
                .couponL{
                    width:px2rem(125px);
                    margin:auto 0;
                    font-size:px2rem(41px);
                    color:#fe4f53;
                    text-align:right;
                    em{
                        font-size:px2rem(21px);
                        margin:auto px2rem(6px);
                    }
                }
                span.line{
                    width:px2rem(2px);
                    margin:0 px2rem(16px);
                    background:#bac0c6;
                }
                .couponR{
                   width:px2rem(430px);
                   margin:auto 0;
                   display:flex;
                   justify-content:space-between;
                   padding:0 px2rem(16px) 0 0;
                   .mains{
                       width:px2rem(315px);
                       display:flex;
                       flex-direction:column;
                       h1{
                           font-size:px2rem(27px);
                           font-weight:normal;
                           overflow:hidden;
                           text-overflow:ellipsis;
                           white-space:nowrap;
                       }
                       span{
                           margin:auto 0;
                           font-size:px2rem(18px);
                           color:#999; 
                           text-overflow: ellipsis;
                           display: -webkit-box;
                           -webkit-line-clamp: 2;
                           -webkit-box-orient: vertical;
                       }
                       span:last-child{
                           -webkit-line-clamp: 1;
                       }
                   }
                   .state{
                       width:px2rem(70px);
                       height:px2rem(70px);
                       line-height:px2rem(70px);
                       text-align:center;
                       margin:auto 0;
                       border:px2rem(1px) solid #fe4f53;
                       color:#bac0c6;
                       font-size:px2rem(21px);
                       border-radius:50%;
                       font-style:oblique;
                   }
                }
            }
        }
    }
}
</style>