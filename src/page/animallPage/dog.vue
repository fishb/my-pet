<template>
    <div class="Dog">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">狗狗</h2>
        </header>
        <main class="mainBox">
            <div class="lists">
                <router-link :to="'/Screen/'+1">
                    <div class="img">
                        <img src="../../assets/img/category1.png" alt="">
                    </div>
                    <span class="Name">泰迪</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+2">
                    <div class="img">
                        <img src="../../assets/img/category2.png" alt="">
                    </div>
                    <span class="Name">茶杯泰迪</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+3">
                    <div class="img">
                        <img src="../../assets/img/category3.png" alt="">
                    </div>
                    <span class="Name">萨摩耶</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+4">
                    <div class="img">
                        <img src="../../assets/img/category4.png" alt="">
                    </div>
                    <span class="Name">法国斗牛犬</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+5">
                    <div class="img">
                        <img src="http://axios.weakwater.com/img/bx.jpg" alt="">
                    </div>
                    <span class="Name">比熊</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+6">
                    <div class="img">
                        <img src="http://axios.weakwater.com/img/kjq.jpg" alt="">
                    </div>
                    <span class="Name">柯基</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+7">
                    <div class="img">
                        <img src="http://axios.weakwater.com/img/bjmyq.jpg" alt="">
                    </div>
                    <span class="Name">边境牧羊犬</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+8">
                    <div class="img">
                        <img src="http://t10.baidu.com/it/u=942120003,4005302423&fm=5" alt="">
                    </div>
                    <span class="Name">松狮</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+9">
                    <div class="img">
                        <img src="http://t10.baidu.com/it/u=416160078,4249346239&fm=5" alt="">
                    </div>
                    <span class="Name">吉娃娃</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+10">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=2038406380,317017081&fm=5" alt="">
                    </div>
                    <span class="Name">蝴蝶犬</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+11">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=2029921186,158604549&fm=5" alt="">
                    </div>
                    <span class="Name">博美犬</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+12">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=620185774,165030302&fm=5" alt="">
                    </div>
                    <span class="Name">杜宾犬</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+13">
                    <div class="img">
                        <img src="http://t10.baidu.com/it/u=1995132213,601620123&fm=5" alt="">
                    </div>
                    <span class="Name">大丹犬</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+14">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=2165241247,947729812&fm=5" alt="">
                    </div>
                    <span class="Name">萨摩耶犬</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+15">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=2102578504,1136252409&fm=5" alt="">
                    </div>
                    <span class="Name">大白熊犬</span>
                </router-link>
            </div>
        </main>
    </div>    
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Dog',
    data(){
        return{
        }
    },
    methods:{
        history(){
            this.$router.go(-1)
        }
    },
    computed:{  	
    },
    mounted(){    
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
.Dog{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
        // background-color:#fb7768;
        // background-image:url(../../assets/img/searchBox.png);
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
        // display:flex;
        // flex-wrap:wrap;
        overflow-y:scroll;
        .lists{
            width:33.33%;
            //height:px2rem(242px);
            float:left;
            padding:px2rem(12px) 0;
            //max-height:px2rem(242px);
            display:flex;
            a{
                width:px2rem(200px);
                height:px2rem(242px);
                background:#fff;
                margin:0 auto;
                .img{
                    width:px2rem(200px);
                    height:px2rem(200px);
                    display:flex;
                    img{
                        width:100%;
                        height:100%;
                        margin:auto;
                    }
                }
                .Name{
                    padding:0 px2rem(12px);
                    font-size:px2rem(26px);
                    color:#000;
                    line-height:px2rem(42px);
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
                }
            }
        }
        
    }
}
</style>
