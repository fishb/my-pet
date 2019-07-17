<template>
<div class="Sock">
    <header class="HeaderBack">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">{{item.title}}</h2>
    </header>
    <!--内容循环-->
    <div class="mainBox">
        <router-link :to="'/Mallmain/'+imgs.listid" class="mainList" v-for="imgs in item.list" :key="imgs.id">
            <div class="img">
                <img :src="imgg.img" v-for="imgg in imgs.photo.slice(0,1)" :key="imgg.id">
            </div>
            <span class="dailyTitle">{{imgs.name}}</span>
            <span class="dailyInfo">{{imgs.desr}}</span>
            <span class="dailyFF">
                <em>¥{{imgs.price}}</em>
                <i>¥{{imgs.oprice}}</i>
            </span>
        </router-link>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Sock',
    data(){
        return{
            item:''
        }
    },
    methods:{
        history:function(){
            this.$router.go(-1);
        }
    },
    computed:{  	
    },
    mounted(){   
    },
    created(res){
        var that = this
        axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/sock')
            .then(function (res) {
                that.item  = res.data.data
                console.log(that.item)
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
.Sock{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .HeaderBack{
        height:px2rem(75px);
        background:#fe4f53;
        // background-image:url(../assets/img/searchBox.png);
        // background-repeat:no-repeat;
        // background-size:100% px2rem(75px);
        position:relative;
        display:flex;
        border-bottom:px2rem(1px) solid #eee;
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
        //background:#fff;
        padding:px2rem(20px);
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        .mainList{
            width:px2rem(290px);
            height:px2rem(430px);
            margin:px2rem(12px) 0 0;
            background:#fff;
            .img{
                background:#f9fdfa;
                width:px2rem(290px);
                height:px2rem(290px);
                display:flex;
                img{
                    margin:auto;
                    max-width:100%;
                    max-height:100%;
                }
            }
            .dailyTitle{
                margin:px2rem(10px) auto;
                //height:px2rem(70px);
                padding:0 px2rem(12px);
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient: vertical;
                font-size:px2rem(26px);
                color:#000;
            }
            .dailyInfo{
                padding:0 px2rem(12px);
                font-size:px2rem(20px);
                color:#949494;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            .dailyFF{
                padding:0 px2rem(12px);
                flex:1;
                display:flex;
                justify-content:space-between;
                em{
                    font-size:px2rem(24px);
                    font-weight:700;
                    color:#ec1614;
                }
                i{
                    font-size:px2rem(22px);
                    color:#949494;
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>