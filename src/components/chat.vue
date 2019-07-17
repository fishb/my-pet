<template>
    <div class="chat">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">宠物屋</h2>
            <a href="#"><i class="iconfont icon-geren"></i></a>
        </header>
        <main class="mainBox" ref="chat">
            <div class="nomore">暂时没有更多啦~</div>
            <div class="chatList">
                <div class="title"><i></i><em>2018年07月03日 15:45</em><i></i></div>
                <!--自己-->
                <div class="chatM">
                    <span>没事   打扰了</span>
                    <img class="headP" src="http://img5.imgtn.bdimg.com/it/u=31422714,766613105&fm=27&gp=0.jpg" alt="">
                </div>
                <!--他人-->
                <div class="chatM chatO">
                    <img class="headP" src="http://img1.imgtn.bdimg.com/it/u=1144695494,2503434203&fm=27&gp=0.jpg" alt="">
                    <span>你好</span>
                </div>
                <!--自己-->
                <div class="chatM">
                    <span>没事   打扰了    哈哈哈哈哈哈哈哈哈哈哈哈  逗你玩的啦  你别生气哦</span>
                    <img class="headP" src="http://img5.imgtn.bdimg.com/it/u=31422714,766613105&fm=27&gp=0.jpg" alt="">
                </div>
                <!--他人-->
                <div class="chatM chatO">
                    <img class="headP" src="http://img1.imgtn.bdimg.com/it/u=1144695494,2503434203&fm=27&gp=0.jpg" alt="">
                    <span>靠  你这人怎么这样</span>
                </div>
                <!--自己-->
                <div class="chatM">
                    <span>没事   打扰了    哈哈哈哈哈哈哈哈哈哈哈哈  逗你玩的啦  你别生气哦</span>
                    <img class="headP" src="http://img5.imgtn.bdimg.com/it/u=31422714,766613105&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="chatM">
                    <span>么么哒嘿嘿咻  666老司机</span>
                    <img class="headP" src="http://img5.imgtn.bdimg.com/it/u=31422714,766613105&fm=27&gp=0.jpg" alt="">
                </div>
                <!--他人-->
                <div class="chatM chatO">
                    <img class="headP" src="http://img1.imgtn.bdimg.com/it/u=1144695494,2503434203&fm=27&gp=0.jpg" alt="">
                    <span>怎么回事</span>
                </div>
                <!--自己-->
                <div class="chatM">
                    <span>嗯，我想学习vue.js然后做出宠物市场</span>
                    <img class="headP" src="http://img5.imgtn.bdimg.com/it/u=31422714,766613105&fm=27&gp=0.jpg">
                </div>
                <div class="chatM">
                    <span>这就有点难了</span>
                    <img class="headP" src="http://img5.imgtn.bdimg.com/it/u=31422714,766613105&fm=27&gp=0.jpg">
                </div>
                <!--他人-->
                <div class="chatM chatO">
                    <img class="headP" src="http://img1.imgtn.bdimg.com/it/u=1144695494,2503434203&fm=27&gp=0.jpg">
                    <span>可以啊，那就学呗！不过react比较好，可以实现原生应用，体验也超好，安卓、ios、前端工程师都可以学的，所以推荐你学一下吧！或者学一下谷歌出的基于anglaur语法的混合app框架ionic,退而求其次的还有 apicloud！<img class="icon" src="../assets/icon/xk.png" v-for="xk in 10" :key="xk.id"><img class="icon" src="../assets/icon/hj.png" v-for="hj in 28" :key="hj.id"><img class="icon" src="../assets/icon/dx.png" v-for="dx in 5" :key="dx.id"></span>
                </div>
                <!--自己(图文页)-->
                <div class="chatM">
                    <span>react从入门到入土<img class="icon" src="../assets/icon/xk.png" v-for="xk in 1" :key="xk.id"><img class="icon" src="../assets/icon/dx.png" v-for="dx in 4" :key="dx.id"><img class="icon" src="../assets/icon/hj.png" v-for="hj in 5" :key="hj.id">这表情很魔性啊</span>
                    <img src="http://img5.imgtn.bdimg.com/it/u=31422714,766613105&fm=27&gp=0.jpg" class="headP">
                </div>
                <!--自己(图片)-->
                <div class="chatM">
                    <div class="ImgBox">
                        <img v-for="item in photo" :key="item.id" :src="item.item">
                    </div>
                    <!-- <yd-lightbox class="ImgBox">
                        <yd-lightbox-img v-for="item in img" :key="item.id" :src="item.item"></yd-lightbox-img>
                    </yd-lightbox> -->
                    <img src="http://img5.imgtn.bdimg.com/it/u=31422714,766613105&fm=27&gp=0.jpg" class="headP">
                </div>
                <!--他人(图片)-->
                <div class="chatM chatO">
                    <img class="headP" src="http://img1.imgtn.bdimg.com/it/u=1144695494,2503434203&fm=27&gp=0.jpg">
                    <div class="ImgBox">
                        <img v-for="item in photo" :key="item.id" :src="item.item">
                    </div>
                </div>
                <!--自己(图片)-->
                <div class="chatM">
                    <div class="ImgBox">
                        <img v-for="item in img" :key="item.id" :src="item.item">
                    </div>
                    <img src="http://img5.imgtn.bdimg.com/it/u=31422714,766613105&fm=27&gp=0.jpg" class="headP">
                </div>
                <!--发送-->
                <div class="chatM" v-for="me in message" :key="me.id">
                    <span>{{me.msg}}</span>
                    <img :src="me.head_pic" class="headP">
                </div>
            </div>
        </main>
        <section class="footer">
            <div class="Inputarea">
                <textarea placeholder="无人回复可电话联系" ref="textarea"></textarea>
                <span @click="shoss"><em>发送</em></span>
            </div>
            <div class="domain">
                <span class="active"><i class="iconfont icon-yuyin1"></i></span>
                <span><i class="iconfont icon-dianhua1"></i></span>
                <span><i class="iconfont icon-tupian"></i></span>
                <span><i class="iconfont icon-paizhao1"></i></span>
                <span><i class="iconfont icon-luxiang-shixin"></i></span>
                <span><i class="iconfont icon-dingweiweizhi"></i></span>
                <span @click="emojiBtn" :class="emojiShow?'active':''"><i class="iconfont icon-expression"></i></span>
            </div>
        </section>
        <section class="emojiBox" v-if="emojiShow">
            <div class="emojiSwiper">
                <ul>
                    <li v-for="(gif,gifIndex) in bqlength" :key="gifIndex">
                        <img :src="'http://axios.weakwater.com/arclist/'+gif+'.gif'">
                    </li>
                    <li><img src="../assets/icon/delete.png" alt=""></li>
                </ul>
            </div>
            <div class="emojiBtn">
                <span>
                    <img src="http://axios.weakwater.com/arclist/1.gif">
                </span>
            </div>
        </section>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import Swiper from 'swiper'
export default {
    name:'Chat',
    data(){
        return{
            photo:[{
                item:'http://axios.weakwater.com/img/loading.gif'
            }],
            img:[{
                item:'http://axios.weakwater.com/img/react.png'
            }],
            shos:false,
            message:[],
            head_pic:'http://img5.imgtn.bdimg.com/it/u=31422714,766613105&fm=27&gp=0.jpg',
            msg:'',
            bqlength:75,
            dylength:20,
            emojiShow:false
        }
    },
    methods:{
        history(){
            this.$router.go(-1);
        },
        scroll(){
        //     //var cH = this.$refs.chat.scrollHeight
        //     var cT = this.$refs.chat.scrollTop
        //     // var ccH = this.$refs.chat.offsetHeight
        //     // var ccT = this.$refs.chat.offsetTop
        //     // console.log(cH,cT,ccH,ccT)
        //    // this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
        //     // console.log(this.$refs.chat.offsetHeight)
        },
        shoss(){
            console.log(this.$refs.textarea.value)
            this.msg = this.$refs.textarea.value
            if(this.msg==''){
                return false
            }else{
                this.message.push({'msg':this.msg,'head_pic':this.head_pic})
                console.log(this.message)
                this.$refs.textarea.value = ''
                this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight + 90
                console.log(this.$refs.chat.scrollTop,this.$refs.chat.style.height)
            } 
        },
        emojiBtn(){
            if(this.emojiShow == false){
                this.emojiShow = true
            }else{
                this.emojiShow = false
            }
            
        }
    },
    created(){  
    },
    mounted(){
        this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight + 90
        console.log(this.$refs.chat.scrollTop)
        this.$refs.textarea.focus(function(){
            this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
        })
        //this.scroll()
        //this.$refs.chat.addEventListener('scroll',this.scroll)
        this.$nextTick(function(){
             var mySwiper = new Swiper(".emojiSwiper", {
                    slidesPerView: "auto",
                    centeredSlides: true
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
$maxW:px2rem(250px);
.chat{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(90px);
		background: linear-gradient(left,#fe4f53, #ff9c55);
        display:flex;
        span{
            width:px2rem(90px);
            height:px2rem(90px);
            display:flex;
            i{
                font-size:px2rem(40px);
                margin:auto;
                color:#fff;
            }
        }
        .Title{
            flex:1;
            margin:auto px2rem(12px);
            color:#fff;
            font-size:px2rem(35px);
            font-weight:normal;
        }
        a{
           width:px2rem(90px);
           height:px2rem(90px);
           display:flex;
           i{
                font-size:px2rem(40px);
                margin:auto;
                color:#fff;
            } 
        }
    }
    .mainBox{
        flex:1;
        overflow-y:scroll;
        padding:0 px2rem(26px);
        .nomore{
            font-size:px2rem(26px);
            color:#999;
            font-weight:bold;
            margin:px2rem(40px) auto;
            text-align:center;
        }
        .chatList{
            margin:px2rem(26px) auto;
            display:flex;
            flex-direction:column;
            .title{
                display:flex;
                margin:px2rem(26px) 0;
                justify-content:space-between;
                i{
                    flex:1;
                    height:px2rem(1px);
                    background:#bac0c6;
                    margin:auto 0;
                }
                em{
                    margin:auto px2rem(26px);
                    font-size:px2rem(20px);
                    color:#bbb;
                }
            }
            img.headP{
                min-width:px2rem(75px);
                width:px2rem(75px);
                height:px2rem(75px);
                border-radius:50%;
            }
            .chatM{
                display:flex;
                justify-content:flex-end;
                margin:0 0 px2rem(26px); 
                span{
                    margin:auto px2rem(13px);
                    padding:px2rem(13px) px2rem(26px);
                    border-radius:0 px2rem(12px) 0 px2rem(12px);
                    background:#fe4f53;
                    color:#fff;
                    font-size:px2rem(26px);
                    img.icon{
                        width:px2rem(46px);
                        height:auto;
                    }
                    img{
                        max-width:100%;
                    }
                }
                .ImgBox{
                    border:px2rem(1px) solid #eee;
                    max-width:$maxW;
                    max-height:$maxW;
                    margin:0 px2rem(13px);
                    border-radius:0 px2rem(12px) 0 px2rem(12px);
                    img{
                        max-width:100%;
                        max-height:100%;
                    }
                }
            }
            .chatO{
                justify-content:flex-start;
                span{
                    border-radius:px2rem(12px) 0 px2rem(12px) 0 ;
                    background:#ccc;
                    color:#000;
                }
            }
        }
    }
    .footer{
        display:flex;
        flex-direction:column;
        padding:0 px2rem(16px);
        .Inputarea{
            height:px2rem(70px);
            display:flex;
            justify-content:space-between;
            textarea{
                flex:1;
                padding:px2rem(12px);
                border-radius:px2rem(12px);
                border:none;
                background:#fff;
                font-size:px2rem(26px);
                color:#000;
            }
            span{
                width:px2rem(90px);
                margin-left:px2rem(12px);
                background:#dbdfe2;
                border-radius:px2rem(12px);
                display:flex;
                em{
                    font-size:px2rem(24px);
                    margin:auto;
                    color:#fff;
                }
            }
        }
        .domain{
            height:px2rem(80px);
            display:flex;
            justify-content:space-between;
            span{
                flex:1;
                margin:auto;
                text-align:center;
                i{
                    font-size:px2rem(45px);
                    color:#46474d;
                }
            }
            span.active{
                i{
                    color:#fe4f53;
                }
            }
        }
    }
    //表情样式
    .emojiBox{
        height:px2rem(330px);
        display:flex;
        flex-direction:column;
        .emojiSwiper{
            height:px2rem(280px);
            padding:px2rem(26px);
            ul{
                height:100%;
                display:flex;
                overflow-y:scroll;
                flex-wrap:wrap;
                justify-content:flex-start;
                li{
                    display:flex;
                    width:px2rem(80px);
                    height:px2rem(80px);
                    margin:auto px2rem(2px);
                    img{
                        margin:auto;
                    }
                }
                li:last-child{
                    img{
                        width:px2rem(50px);
                    }
                }
            }
        }
        .emojiBtn{
            background:#fff;
            height:px2rem(50px);
            border-top:px2rem(1px) solid #eee;
            span{
                width:px2rem(80px);
                height:px2rem(50px);
                background:#eee;
                display:flex;
                img{
                    margin:auto;
                }
            }
        }
    }

}
</style>
