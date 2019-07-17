<template>
<div class="pet">
    <header class="petHeader">
        <div class="icons" @click="history">
            <span><i class="iconfont icon-fanhui7"></i></span>
        </div>
        <div class="icons">
            <span class="share"><i class="iconfont icon-aixin"></i></span>
        </div>
    </header>
    <!--宠物详情开始-->
    <main class="mainBox">
        <!--宠物基本信息-->
        <div class="basic">
            <!--视频图片组件-->
            <section class="lovely">
                <Movie :movie="video" v-if="toggle"></Movie>
                <Photo :photo="image" v-if="!toggle"></Photo>
                <div class="Tabs" v-show="tabshow">
                    <span @click="tabs" :class="toggle?'active':''">视频</span>
                    <span @click="tabs" :class="!toggle?'active':''">图片</span>
                </div>
            </section>
        </div>
        <section class="petDetail">
                <div class="tyName">
                    <div class="name">
                        <h4>柯基</h4>
                        <span>母</span>
                    </div>
                    <div class="price">¥9000</div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>年龄：</em><span>2个月</span>
                    </div>
                    <span class="oprice" v-if="orno">原价¥15000</span>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>上传：</em><span>23小时前</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>品级：</em><span>宠物级</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>疫苗：</em><span>第一次  2018-7-7  英特威</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>驱虫：</em><span>第一次  2018-7-2  拜耳</span>
                    </div>
                </div>
                <div class="tyBox">
                    <div class="tyinfo">
                        <em>描述：</em><span>双血统柯基，三大桶大骨架，犬舍打算预留种犬，现特价出售，懂货的来，杭州可来自提。</span>
                    </div>
                </div>
                <div class="distribut">
                    <div class="tyinfo">
                        <em>配送：</em>
                        <div class="tyfont"><i class="iconfont icon-feiji_"></i>外地<font>600元</font></div>
                        <div class="tyfont"><i class="iconfont icon-tubiaozhizuomoban"></i>同城<font>300元</font></div>
                        <div class="tyfont"><i class="iconfont icon-buhangren"></i>自提</div>
                    </div>
                </div>
                <div class="blood">
                    <div class="tyinfo">
                        <em>血缘：</em>
                    </div>
                    <div class="tyImg">
                        <div class="imgs" :style="'background-image:url('+dad+');'"></div>
                        <span>爸爸</span>
                    </div>
                    <div class="tyImg">
                        <div class="imgs" :style="'background-image:url('+mama+');'"></div>
                        <span class="woman">妈妈</span>
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
        <!--宠物详细信息-->
        <Busin :busin="shop"></Busin>
        <!--宠物不真实担保交易-->
        <section class="danger">
            <router-link :to="{path:'/Report'}" class="dangerBox">
                <div class="Names">
                    <i class="iconfont icon-jubao"></i>
                    <em>宠物不真实</em>
                </div>
                <div class="Mores">
                    <span>举报虚假</span>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </router-link>
            <a href="#" class="dangerBox">
                <div class="Names">
                    <i class="iconfont icon-baozhang1"></i>
                    <em>使用担保交易，保证交易安全</em>
                </div>
                <div class="Mores">
                    <span>了解详情</span>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </a>
        </section>
        <!--猜你喜欢-->
        <section class="WantLove">
            <div class="Tolove">猜你喜欢</div>
            <div class="LoveContainer swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="http://axios.weakwater.com/img/bx.jpg">
                            <div class="WantDe">
                                <!--品种-->
                                <div class="Varieties">比熊</div>
                                <!--价格-->
                                <div class="price">
                                <span>¥3200</span>
                                <span>1分钟前</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="http://axios.weakwater.com/img/bx.jpg">
                            <div class="WantDe">
                                <!--品种-->
                                <div class="Varieties">比熊</div>
                                <!--价格-->
                                <div class="price">
                                <span>¥3200</span>
                                <span>1分钟前</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="http://axios.weakwater.com/img/hsq.jpg">
                            <div class="WantDe">
                                <!--品种-->
                                <div class="Varieties">哈士奇</div>
                                <!--价格-->
                                <div class="price">
                                <span>¥3200</span>
                                <span>1分钟前</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="#">
                            <img src="http://axios.weakwater.com/img/hlcet.jpg">
                            <div class="WantDe">
                                <!--品种-->
                                <div class="Varieties">荷兰折耳兔</div>
                                <!--价格-->
                                <div class="price">
                                <span>¥3200</span>
                                <span>1分钟前</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <!--宠物详情结束-->
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
            <router-link :to="'/Single/'+id">立即购买</router-link>
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
import Swiper from 'swiper'
import Movie from '@/page/petPage/components/video'
import Photo from '@/page/petPage/components/image'
import Busin from '@/page/petPage/components/busin'
export default {
    name:'Substance',
    components:{
        Movie,Photo,Busin
    },
    data(){
        return{
            id:this.$route.params.id,
            item:'',
            video:'',
            image:'',
            tabshow:false,
            toggle:true,
            shop:'',
            orno:false,
            type:1,
            dad:'http://axios.weakwater.com/img/bx.jpg',
            mama:'http://axios.weakwater.com/img/gbq.jpg',
            dilog:false
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
                _this.video = _this.item.video
                _this.image = _this.item.photo
                _this.shop = _this.item.shop
                if(_this.video==''){
                    _this.tabshow=false
                    _this.toggle=false
                }else{
                    _this.tabshow=true
                }
            })
            .catch(function (error) {
                console.log(请求失败);
        });
    },
    created(){ 
        if(this.type==1){
            this.orno = true
        }
        this.$nextTick(function(){
            var WantLove = new Swiper('.LoveContainer', {
                slidesPerView: 3,
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
    .petHeader{
        width:100%;
        height:px2rem(115px);
        position:fixed;
        display: flex;
        justify-content:space-between;
        z-index:999;
        .icons{
            width:px2rem(100px);
            height:px2rem(100px);
            display:flex;
            span{
                width:px2rem(65px);
                height:px2rem(65px);
                margin:auto;
                background:rgba(0,0,0,0.2);
                display:flex;
                border:px2rem(1px) solid #fff;
                border-radius:50%;
                i{
                    font-size:px2rem(32px);
                    color:#fff;
                    margin:auto;
                }
            }
        }
    }
    .mainBox{
        flex:1;
        overflow-y:scroll;
        .basic{
            height:px2rem(425px);
            background:$color;
            .lovely{
                width:100%;
                height:100%;
                position:relative;
                .Tabs{
                    position:absolute;
                    bottom:px2rem(60px);
                    height:px2rem(40px);
                    left:0;
                    right:0;
                    display:flex;
                    justify-content:center;
                    z-index:999;
                    span{
                        width:px2rem(80px);
                        height:px2rem(40px);
                        background:rgba(255,255,255,0.6);
                        color:#000;
                        margin:auto px2rem(16px);
                        text-align:center;
                        line-height:px2rem(40px);
                        border-radius:px2rem(24px);
                        font-size:px2rem(18px);
                    }
                    span.active{
                        background:#fe4f53;
                        color:#fff;
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
                .name{
                    display:flex;
                    justify-content:flex-start;
                    h4{
                        margin:auto 0;
                        font-size:px2rem(30px);
                        font-weight:normal;
                    }
                    span{
                        margin:auto px2rem(12px);
                        background:#31b2ff;
                        color:#fff;
                        padding:px2rem(6px) px2rem(12px);
                        border-radius:px2rem(16px);
                    }
                    span.woman{
                        background:#fe4f53;
                    }
                }
                .price{
                    font-size:px2rem(24px);
                    color:#fe4f53;
                    margin:auto 0;
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
            .distribut{
                display:flex;
                height:px2rem(55px);
                border-top:px2rem(1px) solid #eee;
                .tyinfo{
                    flex:1;
                    margin:auto 0;
                    em{
                        margin:auto 0;
                    }
                    .tyfont{
                        flex:1;
                        color:#999;
                        display:flex;
                        margin:auto 0;
                        i{
                            width:px2rem(22px);
                            height:px2rem(22px);
                            text-align:center;
                            line-height:px2rem(22px);
                            margin:auto px2rem(6px);
                            background:#fe4f53;
                            border-radius:px2rem(6px);
                            color:#fff;
                            font-size:px2rem(16px);
                        }
                        font{
                            margin:auto px2rem(6px);
                            color:#fe4f53;
                        }
                    }
                }
            }
            .blood{
                display:flex;
                justify-content:flex-start;
                padding:px2rem(16px) 0;
                height:px2rem(165px);
                border-top:px2rem(1px) solid #eee;
                .tyImg{
                    width:px2rem(175px);
                    height:px2rem(124px);
                    margin:auto px2rem(12px);
                    position:relative;
                    .imgs{
                        width:px2rem(175px);
                        height:px2rem(115px);
                        background-size:cover;
                        background-position:center;
                    }
                    span{
                        width:px2rem(65px);
                        height:px2rem(35px);
                        line-height:px2rem(35px);
                        position:absolute;
                        bottom:-(px2rem(7px));
                        background:#31b2ff;
                        border-radius:0 px2rem(16px) px2rem(16px) 0;
                        color:#fff;
                        padding:0 px2rem(4px);
                        font-size:px2rem(22px);
                    }
                    span.woman{
                        background:#fe4f53;
                    }
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
        .danger{
            margin:px2rem(16px) auto;
            display:flex;
            flex-direction:column;
            background:#fff;
            .dangerBox{
                display:flex;
                justify-content:space-between;
                padding:0 px2rem(26px);
                height:px2rem(75px);
                border-bottom:px2rem(1px) solid #eee;
                .Names{
                    margin:auto 0;
                    flex:1;
                    i{
                        font-size:px2rem(24px);
                        color:#999;
                    }
                    em{
                        margin:auto px2rem(16px);
                        font-size:px2rem(21px);
                    }
                }
                .Mores{
                    display:flex;
                    justify-content:flex-end;
                    width:px2rem(140px);
                    margin:auto 0;
                    span{
                        color:#fe4f53;
                        font-size:px2rem(16px);
                    }
                    i{
                        margin:auto 0 auto px2rem(6px);
                        color:#bac0c6;
                        font-size:px2rem(16px);
                    }
                }
            }
        }
        .WantLove{
            margin:px2rem(16px) auto;
            background:#fff;
            .Tolove{
                padding:px2rem(12px) px2rem(12px) 0;
                color:#000;
                //height:px2rem(60px);
                //line-height:px2rem(60px);
                //text-align:center;
                font-size:px2rem(24px);
                // background-image:-webkit-gradient(linear,left top, right bottom, from(#fe4f53), to(#ff9c55));
                // -webkit-background-clip:text;
                // -webkit-text-fill-color: transparent;
            }
            .LoveContainer{
                flex:1;
                width:100%;
                padding-left:px2rem(12px);
                .swiper-slide{
                    padding:px2rem(12px) 0 0;
                    margin:0 0 px2rem(12px);
                    a{
                        width:100%;
                        height:100%;
                        padding-right:px2rem(12px);
                        display:flex;
                        flex-direction:column;
                        img{
                            width:px2rem(196px);
                            height:px2rem(196px);
                        }
                        .WantDe{
                            flex:1;
                            padding:px2rem(20px) 0 0;
                            display:flex;
                            text-align:justify;
                            flex-direction:column;
                            div{
                                flex:1;
                                display:flex;
                                justify-content:space-between;
                            }
                            .Varieties{
                                font-size:px2rem(22px);  
                            }
                            .price{
                                font-size:px2rem(18px);
                                span:first-child{
                                    color:#fe4f53;
                                }
                                span:last-child{
                                    font-size:px2rem(16px);
                                    color:#b2b2b2;
                                }
                            }
                        }
                    } 
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
            margin:auto px2rem(12px);
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