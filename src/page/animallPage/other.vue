<template>
    <div class="Other">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">小宠</h2>
        </header>
        <main class="mainBox">
            <div class="lists">
                <router-link :to="'/Screen/'+1">
                    <div class="img">
                        <img src="http://t10.baidu.com/it/u=2678502888,1023585895&fm=5" alt="">
                    </div>
                    <span class="Name">龙猫</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+2">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=3115831678,1524951908&fm=5" alt="">
                    </div>
                    <span class="Name">仓鼠</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+3">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=3079896985,1444898581&fm=58" alt="">
                    </div>
                    <span class="Name">鱼</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+4">
                    <div class="img">
                        <img src="http://t12.baidu.com/it/u=3174331430,1615920734&fm=58" alt="">
                    </div>
                    <span class="Name">虾</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+5">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=3101162749,1675756722&fm=58" alt="">
                    </div>
                    <span class="Name">松鼠</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+6">
                    <div class="img">
                        <img src="http://t12.baidu.com/it/u=211121387,3333039044&fm=58" alt="">
                    </div>
                    <span class="Name">鹦鹉</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+7">
                    <div class="img">
                        <img src="http://t10.baidu.com/it/u=1155416223,519567889&fm=58" alt="">
                    </div>
                    <span class="Name">豚鼠</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+8">
                    <div class="img">
                        <img src="http://t12.baidu.com/it/u=4197968171,333966885&fm=58" alt="">
                    </div>
                    <span class="Name">宠物貂</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+9">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=1681070035,578485277&fm=58" alt="">
                    </div>
                    <span class="Name">兔</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+10">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=1959540223,602513666&fm=58" alt="">
                    </div>
                    <span class="Name">蛇</span>
                </router-link>
            </div>
            <div class="lists">
                <router-link :to="'/Screen/'+11">
                    <div class="img">
                        <img src="http://t11.baidu.com/it/u=356345377,1100738682&fm=58" alt="">
                    </div>
                    <span class="Name">宠物蜥蜴</span>
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
        </main>
    </div>    
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Other',
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
.Other{
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