<template>
<div>
    <!-- <router-link @click="gb" :to="" class="releaseBtn">
        <i class="iconfont icon-iconjia-copy"></i>
    </router-link> -->
    <span @click="gb" class="releaseBtn">
        <i class="iconfont icon-iconjia-copy"></i>
    </span>
    <!-- :to="{path:'/Vendor'}" -->
    <div class="pushBox" v-if="toggle" name="fade">
        <div class="dilog">
            <div class="pushMain">
                <router-link :to="{path:'/Wantbuy'}">
                    <i class="iconfont icon-fabuqiugou"></i>
                    <span>发布求购</span>
                </router-link>
                <router-link :to="{path:'/Relepet'}">
                    <i class="iconfont icon-chongwu"></i>
                    <span>发布宠物</span>
                </router-link>
            </div>
            <div class="gbox">
                <span @click="gb"><i class="iconfont icon-guanbi1"></i></span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {getCookie} from '../../../assets/js/cookie.js'
export default {
    name:'releaseBtn',
    data(){
        return{
            toggle:false
        }
    },
    methods:{
        gb(){
            if(this.toggle == false){
                this.toggle = true
            }else{
                this.toggle = false
            }    
        }
    },
    mounted(){
        // let uname = getCookie('mobile')
        // this.name = uname
        // if(this.name==''){
        //     this.$router.push('/Login')
        // }else{
        //     console.log(this.name)
        // }
    }    
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.releaseBtn{
    position:fixed;
    left:50%;
    margin-left:-(px2rem(40px));
    bottom:px2rem(100px);
    width:px2rem(80px);
    height:px2rem(80px);
    display:flex;
    flex-direction:column;
    z-index:999;
    background:#fe4f53;
    border-radius:50%;
    i{
        font-size:px2rem(45px);
        margin:auto;
        color:#fff;
    }
}
.pushBox{
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    background:rgba(255,255,255,0.98);
    z-index:999;
    .dilog{
        position:fixed;
        bottom:0;
        width:100%;
        height:75%;
        display:flex;
        flex-direction:column;
        .pushMain{
            flex:1;
            padding:px2rem(26px);
            display:flex;
            a{
                margin:auto;
                flex:1;
                display:flex;
                flex-direction:column;
                i{
                    margin:auto;
                    width:px2rem(150px);
                    height:px2rem(150px);
                    font-size:px2rem(64px);
                    color:#fff;
                    background:#fe4f53;
                    border-radius:50%;
                    display:flex;
                }
                i:before{
                    margin:auto;
                }
                span{
                    font-size:px2rem(32);
                    font-weight:normal;
                    margin:px2rem(12px) auto;
                }
            }
            a:last-child{
                i{
                    background:#34b781;
                }
            }
        }
        .gbox{
            height:px2rem(80px);
            border-top:px2rem(1px) solid #eee;
            span{
                width:100%;
                height:100%;
                display:flex;
                i{
                    font-size:px2rem(28px);
                    margin:auto;
                    color:#999;
                }
            }
        }
    }
}
</style>
