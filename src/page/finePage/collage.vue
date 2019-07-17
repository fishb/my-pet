<template>
    <!--特惠拼购-->
    <div class="collage">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">特惠拼购</h2>
            <router-link :to="{path:'/collageRule'}" class="rule"><i class="iconfont icon-wenhao1"></i></router-link>
        </header>
        <main class="mainBox">
            <div class="collagelist">
                <router-link :to="'/Substance/'+fine.id" v-for="fine in collage" :key="fine.id">
                    <div class="collageImg">
                        <img :src="fine.img" alt="">
                    </div>
                    <div class="collageTxt">
                        <h4>{{fine.name}}</h4>
                        <div class="ty">
                            <span>江苏 苏州</span>
                            <span>¥{{fine.cost}}</span>
                        </div>
                    </div>
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
    name:'Collage',
    data(){
        return{
          collage:'',
          show1:false,
          show2:false,
          show3:false
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
    created(res){
        this.$nextTick(function(){
             var _this = this;
             _this.$dialog.loading.open('正在加载中！');
             axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/jpg')
                .then(function (res) {
                    _this.collage = res.data.data ;
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
.collage{
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
        .rule{
            position:absolute;
            right:0;
            width:px2rem(75px);
            height:px2rem(75px);
            display:flex;
            i{
                font-size:px2rem(46px);
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
        .collagelist{
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            a{
                background:#fff;
                width:px2rem(315px);
                display:flex;
                flex-direction:column;
                margin-top:px2rem(12px);
                .collageImg{
                    width:px2rem(315px);
                    height:px2rem(320px);
                    img{
                        width:100%;
                        height:100%;
                        margin:auto;
                    }
                }
                .collageTxt{
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
}
</style>