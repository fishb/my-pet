<template>
    <div class="detail">
        <header class="headerBox">
            <span class="Back" @click="history">
                <i class="iconfont icon-fanhui2"></i>
            </span>
            <div class="HTitle">商家详情</div>
            <span class="share">
                <i class="iconfont icon-fenxiang2"></i>
            </span>
        </header>
        <main class="mainBox">
            <!--商家名称开始-->
            <div class="Name" v-for="item in list" :key="item.id">
                <img :src="item.src" alt="">
                <div class="NameInfo">
                    <span class="man">{{item.man}}</span>
                    <span class="address">{{item.address}}</span>
                    <span class="touch">
                        <a :href="'tel:'+item.phone"><i class="iconfont icon-weibiaoti-"></i>联系TA</a>
                        <a href="#"><i class="iconfont icon-lianxi"></i>私聊</a>
                    </span>
                </div>
            </div>
            <!--商家名称结束-->
            <!--嵌套路由开始-->
            <div class="nesting">
                <div class="nestingRoute">
                    <router-link :to="{name: 'Animal'}" >宠物</router-link>
                    <router-link :to="{name: 'Comments'}">评价</router-link>
                    <router-link :to="{name: 'Brief'}">简介</router-link>
                </div>
                <router-view/>
            </div>
            <!--嵌套路由结束-->
        </main>
    </div>
</template>

<script>
export default {
    name:'detail',
    data(){
        return{
            list:[{
                src:'http://t11.baidu.com/it/u=3115831678,1524951908&fm=5',
                man:'小宠到家',
                address:'上海市 青浦区',
                phone:'18870033089'
            }]
        }
    },
    methods:{
        history:function(){
            this.$router.go(-1);
        }
    },
    mounted(){
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
.detail{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
        display:flex;
        position:relative;
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
        span.share{
            right:0;
        }
        .HTitle{
            margin:auto;
            font-size:px2rem(32px);
            color:#fff;
        }
    }
    .mainBox{
        flex:1;
        display:flex;
        flex-direction:column;
        overflow-y:scroll;
        .Name{
            height:px2rem(250px);
            display:flex;
            padding:px2rem(30px);
            border-bottom:px2rem(1px) solid #eee;
            background:#fff;
            img{
                width:px2rem(180px);
                height:px2rem(180px);
                border-radius:50%;
                margin:auto px2rem(25px);
            }
            .NameInfo{
                flex:1;
                display:flex;
                flex-direction:column;
                margin:auto px2rem(25px);
                max-width:px2rem(300px);
                span{
                    margin:px2rem(6px) 0;
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                span.man{
                    font-size:px2rem(30px);
                }
                span.address{
                    font-size:px2rem(22px);
                    color:#949494;
                }
                span.touch{
                    text-align:center;
                    color:#fe4f53;
                    display:flex;
                    justify-content:flex-start;
                    a{
                        width:px2rem(150px);
                        height:px2rem(45px);
                        line-height:px2rem(45px);
                        font-size:px2rem(24px);
                        border:px2rem(1px) solid #fe4f53;
                        border-radius:px2rem(12px);
                        i{
                        font-size:px2rem(18px);
                        margin-right:px2rem(6px);
                        }
                    } 
                    a:first-child{
                        margin-right:px2rem(12px);
                    } 
                }
            }
        }
        .nesting{
            flex:1;
            display:flex;
            flex-direction:column;
            overflow-y:scroll;
            .nestingRoute{
                display:flex;
                justify-content:space-between;
                height:px2rem(80px);
                line-height:px2rem(80px);
                background:#fff;
                border-bottom:px2rem(1px) solid #eee;
                a{
                    flex:1;
                    text-align:center;
                    font-size:px2rem(28px);
                }
                a.router-link-exact-active{
                    color:#fe4f53;
                    position:relative;
                }
                a.router-link-exact-active:after{
                    content:'';
                    position:absolute;
                    left:50%;
                    bottom:0;
                    margin-left:-25%;
                    width:50%;
                    background:#fe4f53;
                    height:px2rem(2px);
                }
            }
        }
    }
}
</style>
