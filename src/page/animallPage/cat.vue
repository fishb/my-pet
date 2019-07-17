<template>
    <div class="Cat">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">猫猫</h2>
        </header>
        <main class="mainBox">
            <div class="lists">
                <router-link :to="'/Screen/'+1">
                    <div class="img">
                        <img src="../../assets/img/category5.png" alt="">
                    </div>
                    <span class="Name">蓝猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+2">
                    <div class="img">
                        <img src="../../assets/img/category6.png" alt="">
                    </div>
                    <span class="Name">波斯猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+3">
                    <div class="img">
                        <img src="../../assets/img/category7.png" alt="">
                    </div>
                    <span class="Name">英国短毛猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+4">
                    <div class="img">
                        <img src="../../assets/img/category8.png" alt="">
                    </div>
                    <span class="Name">加菲猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+5">
                    <div class="img">
                        <img src="http://axios.weakwater.com/img/mgdmm.jpg" alt="">
                    </div>
                    <span class="Name">美国短毛猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+6">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=2333090299,850498900&fm=5" alt="">
                    </div>
                    <span class="Name">暹罗猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+7">
                    <div class="img">
                        <img src="http://t10.baidu.com/it/u=1569462993,172008204&fm=5" alt="">
                    </div>
                    <span class="Name">苏格兰折耳猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+8">
                    <div class="img">
                        <img src="http://t12.baidu.com/it/u=1996483760,1134669411&fm=5" alt="">
                    </div>
                    <span class="Name">俄罗斯蓝猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+9">
                    <div class="img">
                        <img src="http://t12.baidu.com/it/u=1917461690,696184102&fm=5" alt="">
                    </div>
                    <span class="Name">挪威森林猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+10">
                    <div class="img">
                        <img src="http://t12.baidu.com/it/u=2287816931,1201096380&fm=5" alt="">
                    </div>
                    <span class="Name">孟买猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+11">
                    <div class="img">
                        <img src="http://t10.baidu.com/it/u=885744084,3886146253&fm=5" alt="">
                    </div>
                    <span class="Name">缅因猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+12">
                    <div class="img">
                        <img src="http://t12.baidu.com/it/u=1855682282,311511202&fm=5" alt="">
                    </div>
                    <span class="Name">埃及猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+13">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=1891064581,255096779&fm=5" alt="">
                    </div>
                    <span class="Name">土耳其梵猫</span>
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
    name:'Cat',
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
.Cat{
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