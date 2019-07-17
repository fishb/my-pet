<template>
    <section class="Screen">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">泰迪</h2>
        </header>
        <main class="mainBox">
            <!--筛选按钮-->
            <div class="screenBox">
                <div class="filter">
                    <span><em>南昌</em><i class="iconfont icon-svg19"></i></span>
                    <span @click="filter2"><em>价格</em><i :class="show2?'rotate':''" class="iconfont icon-svg19"></i></span>
                    <span @click="filter3"><em>来源</em><i :class="show3?'rotate':''" class="iconfont icon-svg19"></i></span>
                </div>
                <router-link :to="'/PetEntry/'+1" class="petEntry">
                    <div class="img">
                        <img src="../../../assets/img/category1.png" alt="">
                    </div>
                    <span>对主人及家人、其他宠物宽容</span>
                    <i class="iconfont icon-youjiantou"></i>
                </router-link>
            </div>
            <!--宠物栏-->
            <div class="mainList">
                <router-link :to="'/Substance/'+1">
                    <div class="imgBox">
                        <img src="http://axios.weakwater.com/img/bjmyq.jpg" alt="">
                    </div>
                    <div class="nameBox">
                        <h4>泰迪</h4>
                        <div class="price">
                            <span>上海 闸北</span>
                            <span class="cold">¥8500</span>
                        </div>
                    </div>
                </router-link>
                <router-link :to="'/Substance/'+2">
                    <div class="imgBox">
                        <img src="http://axios.weakwater.com/img/bom.jpg" alt="">
                    </div>
                    <div class="nameBox">
                        <h4>泰迪</h4>
                        <div class="price">
                            <span>四川 成都</span>
                            <span class="cold">¥5600</span>
                        </div>
                    </div>
                </router-link>
                <router-link :to="'/Substance/'+3">
                    <div class="imgBox">
                        <img src="http://axios.weakwater.com/img/cw.jpg" alt="">
                    </div>
                    <div class="nameBox">
                        <h4>泰迪</h4>
                        <div class="price">
                            <span>江苏 新乡</span>
                            <span class="cold">¥5600</span>
                        </div>
                    </div>
                </router-link>
                <router-link :to="'/Substance/'+4">
                    <div class="imgBox">
                        <img src="http://axios.weakwater.com/img/gbq.jpg" alt="">
                    </div>
                    <div class="nameBox">
                        <h4>泰迪</h4>
                        <div class="price">
                            <span>北京 新城</span>
                            <span class="cold">¥10600</span>
                        </div>
                    </div>
                </router-link>
                <router-link :to="'/Substance/'+5">
                    <div class="imgBox">
                        <img src="http://axios.weakwater.com/img/hlcet.jpg" alt="">
                    </div>
                    <div class="nameBox">
                        <h4>泰迪</h4>
                        <div class="price">
                            <span>北京 新城</span>
                            <span class="cold">¥10600</span>
                        </div>
                    </div>
                </router-link>
                <router-link :to="'/Substance/'+6">
                    <div class="imgBox">
                        <img src="http://axios.weakwater.com/img/hlzrt.jpg" alt="">
                    </div>
                    <div class="nameBox">
                        <h4>泰迪</h4>
                        <div class="price">
                            <span>北京 新城</span>
                            <span class="cold">¥10600</span>
                        </div>
                    </div>
                </router-link>
                <router-link :to="'/Substance/'+7">
                    <div class="imgBox">
                        <img src="http://axios.weakwater.com/img/lm.jpg" alt="">
                    </div>
                    <div class="nameBox">
                        <h4>泰迪</h4>
                        <div class="price">
                            <span>北京 新城</span>
                            <span class="cold">¥10600</span>
                        </div>
                    </div>
                </router-link>
                <router-link :to="'/Substance/'+8">
                    <div class="imgBox">
                        <img src="http://axios.weakwater.com/img/mgdmm.jpg" alt="">
                    </div>
                    <div class="nameBox">
                        <h4>泰迪</h4>
                        <div class="price">
                            <span>北京 新城</span>
                            <span class="cold">¥10600</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </main>
        <section class="range" v-if="show2">
            <span>不限</span>
            <span>2000以下</span>
            <span>2000-5000</span>
            <span>5000-10000</span>
            <span>10000以上</span>
        </section>
        <section class="range" v-if="show3">
            <span>不限</span>
            <span>个人</span>
            <span>商户</span>
        </section>
    </section>    
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Screen',
    data(){
        return{
            show2:false,
            show3:false
        }
    },
    methods:{
        history(){
            this.$router.go(-1)
        },
        filter2(){
            if(this.show2 == false){
                this.show2 = true
                this.show3 = false
            }else{
                this.show2 = false
            }
        },
        filter3(){
            if(this.show3 == false){
                this.show3 = true
                this.show2 = false
            }else{
                this.show3 = false
            }
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
   $rem :64.0px;
   @return ($px/$rem) + rem;
}
.Screen{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
        // background-color:#fb7768;
        // background-image:url(../../../assets/img/searchBox.png);
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
        display:flex;
        flex-direction:column;
        .screenBox{
            height:px2rem(230px);
            background:#fff;
            display:flex;
            flex-direction:column;
            .filter{
                height:px2rem(85px);
                display:flex;
                justify-content:space-between;
                span{
                    flex:1;
                    display:flex;
                    justify-content:center;
                    em{
                        font-size:px2rem(24px);
                        margin:auto 0;
                        color:#000;
                    }
                    i{
                        margin:auto px2rem(6px);
                        font-size:px2rem(24px);
                    }
                    .rotate{
                        transform:rotate(180deg);
                    }
                }
            }
            .petEntry{
                display:flex;
                justify-content:space-between;
                padding:0 px2rem(26px);
                height:px2rem(145px);
                border-top:px2rem(1px) solid #eee;
                .img{
                    margin:auto 0;
                    width:px2rem(110px);
                    height:px2rem(110px);
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                span{
                    flex:1;
                    margin:auto px2rem(12px);
                    font-size:px2rem(28px);
                    overflow : hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                i{
                    font-size:px2rem(20px);
                    color:#46474d;
                    margin:auto 0;
                }
            }
        }
        .mainList{
            flex:1;
            overflow-y:scroll;
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            padding:px2rem(12px);
            a{
                margin:px2rem(12px) 0;
                //width:px2rem(315px);
                background:#fff;
                .imgBox{
                    width:px2rem(300px);
                    height:px2rem(300px);
                    //width:px2rem(315px);
                    //height:px2rem(315px);
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .nameBox{
                    display:flex;
                    flex-direction:column;
                    height:px2rem(70px);
                    padding:0 px2rem(6px);
                    h4{
                        font-size:px2rem(24px);
                        font-weight:normal;
                        margin:auto 0;
                    }
                    .price{
                        margin:auto 0;
                        display:flex;
                        justify-content:space-between;
                        span{
                            font-size:px2rem(20px);
                            color:#bac0c6;
                        }
                        .cold{
                            font-size:px2rem(20px);
                            color:#fe4f53;
                        }
                    }
                }
            }
        }
    }
    .range{
        border-top:px2rem(1px) solid #eee;
        position:fixed;
        width:100%;
        top:px2rem(160px);
        background:#fff;
        z-index:999;
        padding:0 px2rem(16px);
        span{
            display:block;
            width:100%;
            height:px2rem(85px);
            line-height:px2rem(85px);
            border-bottom:px2rem(1px) solid #eee;
            font-size:px2rem(25px);
        }
        span:last-child{
            border:0;
        }
    }
}
</style>