<template>
<div class="Manage">
    <header class="headerBox">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">发布管理</h2>
    </header>
    <main class="mainBox">
        <div class="listBox" v-for="s in 10" :key="s.id">
            <div class="listBt">
                <img src="../assets/img/list1.png" alt="">
                <div class="listInfo">
                    <h5>哈士奇</h5>
                    <div class="tys"><em>¥10800</em><em>1个月</em><i>宠物级/公</i></div>
                    <div class="tys"><span>双血统柯基，三大桶大骨架，犬舍打算预留种犬，现特价出售，懂货的来，杭州可来自提。</span></div>
                </div>
            </div>  
            <div class="listBb">
                <a href="#">下架</a>
                <a href="#">删除</a>
                <a href="#" class="active">编辑</a>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Manage',
    data(){
        return{
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

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Manage{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
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
        .listBox{
            display:flex;
            flex-direction:column;
            background:#fff;
            margin:px2rem(26px) auto 0;
            padding:px2rem(16px) px2rem(16px) 0;
            .listBt{
                padding:px2rem(10px) 0;
                height:px2rem(200px);
                display:flex;
                justify-content:space-between;
                overflow:hidden;
                img{
                    width:px2rem(160px);
                    height:100%;
                }
                .listInfo{
                    flex:1;
                    margin:0 0 0 px2rem(16px);
                    display:flex;
                    flex-direction:column;
                    h5{
                        margin:auto 0;
                        font-size:px2rem(26px);
                        font-weight:normal;
                        color:#000;
                    }
                    .tys{
                        margin:auto 0;
                        display:flex;
                        justify-content:space-between;
                        margin:px2rem(12px) 0;
                        em{
                            font-size:px2rem(24px);
                            color:#000;
                        }
                        i{
                            font-size:px2rem(24px);
                            color:#fe4f53;
                        }
                        span{
                            font-size:px2rem(24px);
                            color:#999;
                            overflow : hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                    } 
                }
            }
            .listBb{
                padding:px2rem(12px) 0;
                margin:auto 0 0;
                display:flex;
                justify-content:flex-end;
                border-top:px2rem(1px) solid #eee;
                a{
                    padding:px2rem(6px) px2rem(16px);
                    font-size:px2rem(24px);
                    margin:auto px2rem(12px);
                    border:px2rem(1px) solid #eee;
                    border-radius:px2rem(12px);
                }
                a.active{
                    color:#fe4f53;
                    border-color:#fe4f53;
                }
            }
        }
    }
}
</style>