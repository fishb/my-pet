<template>
    <div class="user">
        <main class="mainBox">
            <!--用户信息-->
           <section class="userTop">
                <router-link :to="{path:'/Center'}" class="userImg">
                   <img :src="head_pic" alt="">
                </router-link>
                <router-link :to="{path:'/Center'}" class="userName">
                    <div class="name"><span>{{nickname}}</span></div>
                    <div class="five">
                        <template v-if="parseInt(level%2)==0">
                            <li class="On" v-for="l in parseInt(level/2)" :key="l.id"></li>
                            <li v-for="f in parseInt((five-level)/2)" :key="f.id"></li>
                        </template>
                        <template v-else>
                            <li class="On" v-for="l in parseInt(level-1)/2" :key="l.id"></li>
                            <li class="Os"></li>
                            <li v-for="f in parseInt(five-level-1)/2" :key="f.id"></li>
                        </template>
                    </div>
                    <span class="address">江西 南昌</span>
                </router-link>
           </section>
           <section class="userInfo">
               <router-link :to="{path:'/Discount'}" class="userlist">
                   <div class="ico gsd">
                       <i class="iconfont icon-youhuiquan"></i>
                   </div>
                   <div class="flexs">
                       <span class="load">优惠券</span>
                       <span class="more"><em>{{coupon_count}}张</em><i class="iconfont icon-arrow-right"></i></span>
                   </div>
               </router-link>
               <router-link :to="{path:'/Integral'}" class="userlist">
                   <div class="ico blue">
                       <i class="iconfont icon-jifen1"></i>
                   </div>
                   <div class="flexs">
                       <span class="load">积分</span>
                       <span class="more"><i class="iconfont icon-arrow-right"></i></span>
                   </div>
               </router-link>
               <router-link :to="{path:'/Payment'}" class="userlist">
                   <div class="ico yellow">
                       <i class="iconfont icon-shoukuan2"></i>
                   </div>
                   <div class="flexs">
                       <span class="load">收款账号</span>
                       <span class="more"><i class="iconfont icon-arrow-right"></i></span>
                   </div>
               </router-link>
           </section>
           <section class="userInfo">  
               <router-link :to="{path:'/Vendor'}" class="userlist">
                   <div class="ico gay">
                       <i class="iconfont icon-quanguomaijia"></i>
                   </div>
                   <div class="flexs">
                      <span class="load">卖家认证</span>
                      <span class="more"><i class="iconfont icon-arrow-right"></i></span>
                   </div>
               </router-link>
               <router-link :to="{path:'/Sellout'}" class="userlist">
                   <div class="ico green">
                       <i class="iconfont icon-maichu"></i>
                   </div>
                   <div class="flexs">
                    <span class="load">我卖出的</span>
                    <span class="more"><i class="iconfont icon-arrow-right"></i></span>
                   </div>
               </router-link>
               <router-link :to="{path:'/Buy'}" class="userlist">
                   <div class="ico blue">
                       <i class="iconfont icon-201"></i>
                   </div>
                   <div class="flexs">
                    <span class="load">我买到的</span>
                    <span class="more"><i class="iconfont icon-arrow-right"></i></span>
                   </div>
               </router-link>
               <router-link :to="{path:'/Manage'}" class="userlist">
                   <div class="ico yellow">
                       <i class="iconfont icon-fabu1"></i>
                   </div>
                   <div class="flexs">
                       <span class="load">发布管理</span>
                       <span class="more"><i class="iconfont icon-arrow-right"></i></span>
                   </div>
               </router-link>
           </section>
          <section class="userInfo">
               <a :href="'tel:'+kefu" class="userlist">
                   <div class="ico scce">
                       <i class="iconfont icon-lianxikefu"></i>
                   </div>
                   <div class="flexs">
                    <span class="load">客服热线</span>
                    <span class="more"><em>{{kefu}}</em><i class="iconfont icon-arrow-right"></i></span>
                   </div>
               </a>
               <router-link :to="{path:'/Love'}" class="userlist">
                   <div class="ico gray">
                       <i class="iconfont icon-shoucang2"></i>
                   </div>
                   <div class="flexs">
                        <span class="load">收藏</span>
                        <span class="more"><i class="iconfont icon-arrow-right"></i></span>
                   </div>
               </router-link>
               <router-link :to="{path:'/Install'}" class="userlist">
                   <div class="ico gsd">
                       <i class="iconfont icon-shezhi1"></i>
                   </div>
                   <div class="flexs">
                    <span class="load">设置</span>
                    <span class="more"><i class="iconfont icon-arrow-right"></i></span>
                   </div>
               </router-link>
           </section>
        </main>
        <Navlist></Navlist>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import {getCookie} from '../../assets/js/cookie.js'
import Navlist from '@/components/nav.vue'
export default {
    name:'User',
    components:{
        Navlist
    },
    data(){
        return{
            data:'',
            head_pic:'',
            kefu:'',
            nickname:'',
            five:10,
            level:'',
            coupon_count:''
        }
    },
    methods:{
        cookies(){
            var that = this
            let uname = getCookie('user_id')
            that.name = uname
            if(that.name==''){
                that.$router.push('/Login')
            }else{
                axios.post('http://192.168.0.200:1015/mobile/user/index')
                .then(function(res){
                    that.data = res.data
                    if(res.data.head_pic ==''){
                        that.head_pic = 'http://axios.weakwater.com/img/logo.png'
                    }else{
                        that.head_pic = res.data.head_pic
                    }
                    that.kefu = res.data.kefu
                    that.nickname = res.data.nickname
                    that.level = (res.data.level)*2
                    that.coupon_count = res.data.coupon_count
                    console.log(res.data)
                })
                .catch(function(){
                    console.log('加载失败')
                })
            }
        }
        
    },
    computed:{
    },
    mounted(){
        this.$nextTick(this.cookies)
    },
    created(){
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.user{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    background:#f6f6f6;
    .mainBox{
        height:100%;
        flex:1;
        overflow-y:scroll;
        .userTop{
            height:px2rem(400px);
            background:#fff url(../../assets/img/userTop.png) no-repeat top center; 
            background-size:100% px2rem(200px);
            display:flex;
            flex-direction:column;
            .userImg{
                margin:px2rem(110px) auto 0;
                width:px2rem(160px);
                height:px2rem(160px);
                border:px2rem(10px) solid #fff;
                border-radius:50%;
                background:#f6f6f6;
                display:flex;
                overflow:hidden;
                img{
                    max-width:px2rem(120px);
                    height:px2rem(120px);
                    margin:auto;
                }
            }
            .userName{
                margin:px2rem(20px) auto;
                display:flex;
                flex-direction:column;
                .name{
                    display:flex;
                    margin:auto auto 0;
                    span{
                        font-size:px2rem(30px);
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        overflow:hidden;
                    }
                }
                .five{
                   height:px2rem(25px);
                   display:flex;
                   justify-content:center;
                   margin:px2rem(6px) auto;
                   li{
                       width:px2rem(25px);
                       height:px2rem(25px);
                       margin:auto px2rem(4px);
                       background:url(../../assets/icon/five.png) no-repeat center;
                       background-size:cover;
                   }
                   li.Os{
                      background:url(../../assets/icon/fiveO.png) no-repeat center;
                      background-size:cover; 
                   }
                   li.On{
                       background:url(../../assets/icon/fiveOn.png) no-repeat center;
                       background-size:cover;
                   }
                }
                .address{
                    margin:auto;
                    font-size:px2rem(22px);
                    color:#999;
                }
            }
        }
        .userInfo{
            margin:px2rem(30px) 0 px2rem(30px);
            background:#fff; 
            display:flex;
            flex-direction:column;
            //min-height:px2rem(400px);
            a{
                padding:0 px2rem(26px);
                display:flex;
                justify-content:space-between;
                height:px2rem(80px);
                border-bottom:px2rem(1px) solid #ccc;
                .ico{
                    width:px2rem(50px);
                    height:px2rem(50px);
                    display:flex;
                    border-radius:px2rem(12px);
                    margin:auto 0;
                    i{
                        margin:auto;
                        font-size:px2rem(26px);
                        color:#fff;    
                    }
                }
                .yellow{background:linear-gradient(#f9cc3f,#ffab0d);}
                .gay{background:linear-gradient(#31cdff,#42b3ff);}
                .blue{background:linear-gradient(#31cdfd,#3bb6ff);}
                .green{background:linear-gradient(#46e787,#04e393);}
                .gray{background:linear-gradient(#42e37c,#02dd89);}
                .scce{background:linear-gradient(#c67dff,#a463fd);}  
                .gsd{background:linear-gradient(#ff7f70,#ff4f76);} 
                .flexs{
                    flex:1;
                    display:flex;
                    margin:0 0 0 px2rem(16px) ; 
                    .load{
                        margin:auto px2rem(16px) auto 0;
                        font-size:px2rem(24px);
                        color:#000;
                    }
                    .more{
                        flex:1;
                        display:flex;
                        justify-content:flex-end;
                        i{
                            margin:auto 0;
                            font-size:px2rem(42px);
                            color:#d2d2d2;
                        }
                        em{
                            margin:auto px2rem(10px);
                            font-size:px2rem(24px);
                        }
                    }
                }
            }
            a:last-child{
                border-bottom:0;
            }
        }
    }
}

</style>
