<template>
<div class="brief">
    <!--商家认证及地址-->
    <div class="natural">
        <div class="endown">
            <span>商家资质</span>
            <div class="endownM">
                <span><i class="iconfont icon-renzheng1"></i><em>认证商家</em></span>
                <span><i class="iconfont icon-baozhang"></i><em>交易担保</em></span>
            </div>
        </div>
        <div class="address">
            <span>商家地址</span>
            <span>{{address}}</span>
        </div>
    </div>
    <!--商家介绍-->
    <div class="briefInfo">
        <div class="tyTitle"><span></span><em>商家介绍</em><span></span></div>
        <div class="infoMain">
            {{info}}
            <img :src="img.img" v-for="img in pic" :key="img.id">
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Brief',
    data(){
        return{
            address:'',
            pic:'',
            info:''
        }
    },
    methods:{

    },
    mounted(){
    },
    created(res){
        var _this = this;
        // `this` 指向 vm 实例
        // 为给定 ID 的 user 创建请求
        axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/sjjj')
            .then(function (res) {
                _this.address=res.data.data.address
                _this.info=res.data.data.info
                _this.pic=res.data.data.pic
            })
            .catch(function (error) {
                console.log(请求失败);
         });
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.brief{
    flex:1;
    overflow-y:scroll;
    padding:px2rem(16px) 0;    
    .natural{
        background:#fff;
        margin-bottom:px2rem(16px);
        height:px2rem(245px);
        display:flex;
        flex-direction:column;
        .endown{
            flex:1;
            padding:px2rem(16px);
            border-bottom:px2rem(1px) solid #efeff7;
            display:flex;
            flex-direction:column;
            span{
                margin:auto 0;
                font-size:px2rem(26px);
            }
            .endownM{
                margin:0 0 auto;
                display:flex;
                span{
                    font-size:px2rem(20px);
                    display:flex;
                    i{
                        font-size:px2rem(30px);
                        color:#ff4f56;
                        margin:auto 0;
                    }
                    em{
                        color:#ff4f56;
                        margin:auto px2rem(6px);
                        text-align:center;
                    }
                }
            }
        }
        .address{
            flex:1;
            padding:px2rem(16px);
            display:flex;
            flex-direction:column;
            span{
                font-size:px2rem(26px);
                margin:auto 0;
            }
            span:last-child{
                font-size:px2rem(24px);
                margin:0 0 auto;
                color:#949494;
            }
        }
    }
    .briefInfo{
        background:#fff;
        display:flex;
        flex-direction:column;
        padding:px2rem(26px);
        .tyTitle{
            font-size:px2rem(28px);
            text-align:center;
            margin:0 0 px2rem(12px);
            display:flex;
            justify-content:center;
            em{
                width:px2rem(120px);
                margin:auto px2rem(12px);
            }
            span{
                flex:1;
                height:px2rem(1px);
                margin:auto;
                background:#efeff7;
            }
        }
        .infoMain{
            margin:px2rem(12px) 0;
            font-size:px2rem(24px);
            img{
                margin-top:px2rem(12px);
                max-width:100%;
                width:100%;
            }
        }
    }
}
</style>
