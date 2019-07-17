<template>
    <div class="Like">
        <div class="LikeTop">
            <span>为/您/推/荐</span>
        </div>
        <div class="LikeMain">
            <router-link :to="'/Substance/'+item.id" class="Likeli" v-for="item in list" :key="item.id">
                <img :src="item.img" alt="">
                <div class="LikeTitle">
                    <div class="Likeprice">
                        <span>{{item.title}}</span>
                        <span>¥{{item.Likeprice}}</span>
                    </div>
                    <div class="Likeme">
                        <span><img src="@/assets/img/img.png" alt=""><i>{{item.Likeme}}</i></span>
                        <!-- <span>北京 良辰</span> -->
                    </div>
                </div>
            </router-link>
        </div>
    </div>

</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import Swiper from 'swiper'
export default {
    name:'Like',
    data(){
        return{
            list:''
        }
    },
    methods: {
       
    },
    computed:{  

    },
    mounted(){  
    },
    created(res){
        this.$nextTick(function(){
            var _this = this;
        // `this` 指向 vm 实例
        // 为给定 ID 的 user 创建请求
        axios.post('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/like')
            .then(function (res) {
                _this.list = res.data.data ;
			        console.log(_this.list);
            })
            .catch(function (error) {
                console.log(请求失败);
         }); 
        })    
    }
}
</script>
<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Like{
    background:#fff;
    margin:px2rem(12px) auto;
    display:flex;
    flex-direction:column;
    .LikeTop{
        height:px2rem(65px);
        line-height:px2rem(65px);
        text-align:center;
        border-bottom:px2rem(1px) solid #eee;
        span{
            font-size:px2rem(24px);
            font-weight:bold;
            background-image:-webkit-gradient(linear,right top, left bottom, from(#fe4f53), to(#ff9c55));
            -webkit-background-clip:text;
            -webkit-text-fill-color: transparent;
            letter-spacing:px2rem(12px);
        }     
    }
    .LikeMain{
        padding:px2rem(12px) 0 px2rem(12px) px2rem(12px);
        display:flex;
        flex-wrap:wrap;
        //justify-content:space-between;
        .Likeli{
            margin-right:px2rem(12px);
            width:px2rem(196px);
            //height:px2rem(400px);
            margin-bottom:px2rem(12px);
            text-align:justify;
            img{
                width:px2rem(196px);
                height:px2rem(196px);
                //width:100%;
                //height:px2rem(300px);
            }
            .LikeTitle{
                padding-top:px2rem(12px);
                height:px2rem(86px);
                display:flex;
                flex-direction:column;
                .Likeprice{
                    height:50%;
                    display:flex;
                    justify-content:space-between;
                    margin:auto 0;
                    span{
                        font-size:px2rem(22px);
                    }
                    span:last-child{
                        color:#fe4f53;
                    }
                }
                .Likeme{
                    height:50%;
                    display:flex;
                    justify-content:space-between;
                    margin:auto 0;
                    span{
                        color:#ccc;
                    }
                    span:first-child{
                        width:px2rem(190px);
                        font-size:px2rem(22px);
                        text-overflow:ellipsis;
                        overflow:hidden;
                        white-space:nowrap;
                        display:flex;
                        img{
                            width:px2rem(32px);
                            height:px2rem(32px);
                            margin:auto 0;
                        }
                        i{
                            margin:auto px2rem(6px);
                            overflow:hidden;
                            text-overflow:ellipsis;
                            white-space:nowrap;
                        }
                    }
                    span:last-child{
                        //margin:auto;
                        font-size:px2rem(22px);
                    }
                }   
            }
        }
    }
}
.yd-list-img{
    width:100%;
    height:px2rem(300px);
    max-height:px2rem(300px);
    border-radius:px2rem(24px) px2rem(24px) 0 0;
    img{
        width:100%;
        height:px2rem(300px);
        max-height:px2rem(300px);
    }
}
</style>
