<template>
    <!--最新上架-->
    <div class="newArral">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">最新上架</h2>
        </header>
        <main class="mainBox">
            <section class="filter">
               <span @click="filter1"><em>全国</em><i class="iconfont icon-svg19"></i></span>
               <span @click="filter2"><em>价格</em><i class="iconfont icon-svg19"></i></span>
               <span @click="filter3"><em>来源</em><i class="iconfont icon-svg19"></i></span>
            </section>
            <div class="Arrallist">
                <router-link :to="'/Substance/'+fine.id" v-for="fine in newArral" :key="fine.id">
                    <div class="ArralImg">
                        <img :src="fine.img" alt="">
                    </div>
                    <div class="ArralTxt">
                        <h4>{{fine.name}}</h4>
                        <div class="ty">
                            <span>江苏 苏州</span>
                            <span>¥{{fine.cost}}</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </main>
        <section class="range" v-if="show1">
            城市切换
        </section>
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
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'newArral',
    data(){
        return{
          newArral:'',
          show1:false,
          show2:false,
          show3:false
        }
    },
    methods:{
        history(){
            this.$router.go(-1)
        },
        filter1(){
            if(this.show1 == false){
                this.show1 = true
                this.show2 = false
                this.show3 = false
            }
        },
        filter2(){
            if(this.show2 == false){
                this.show1 = false
                this.show2 = true
                this.show3 = false
            }else{
                this.show2 = false
            }
        },
        filter3(){
            if(this.show3 == false){
                this.show1 = false
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
    created(res){
        this.$nextTick(function(){
             var _this = this;
             _this.$dialog.loading.open('正在加载中！');
             axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/jpg')
                .then(function (res) {
                    _this.newArral = res.data.data ;
                    _this.$dialog.loading.close();
                    _this.$dialog.toast({
                        mes: '加载成功',
                        timeout: 1500,
                        icon: 'success'
                    });
                })
                .catch(function (error) {
                    _this.$dialog.loading.close();
                    _this.$dialog.toast({
                        mes: '加载失败',
                        timeout: 1500,
                        icon: 'error'
                    });
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
.newArral{
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
        overflow-y:scroll;
        .filter{
            background:#fff;
            height:px2rem(85px);
            display:flex;
            justify-content:space-between;
            border-bottom:px2rem(1px) solid #eee;
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
            }
        }
        .Arrallist{
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            a{
                background:#fff;
                width:px2rem(315px);
                display:flex;
                flex-direction:column;
                margin-top:px2rem(12px);
                .ArralImg{
                    width:px2rem(315px);
                    height:px2rem(320px);
                    img{
                        width:100%;
                        height:100%;
                        margin:auto;
                    }
                }
                .ArralTxt{
                    padding:0 px2rem(12px);
                    height:px2rem(70px);
                    display:flex;
                    flex-direction:column;
                    h4{
                        margin:auto 0 0;
                        font-size:px2rem(24px);
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                    }
                    .ty{
                        margin:0 0 auto;
                        display:flex;
                        justify-content:space-between;
                        span{
                            font-size:px2rem(22px);
                        }
                        span:first-child{
                            color:#bac0c6;
                        }
                        span:last-child{
                            color:#fe4f53;
                        }
                    }
                }   
            }
        }
    }
    .range{
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
