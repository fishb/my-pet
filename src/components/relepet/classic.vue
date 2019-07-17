<template>
    <section class="rr">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">所属分类</h2>
            <span><i class="iconfont icon-zhengque-icon-" @click="history"></i></span>
        </header>
        <main class="mainBox">
            <ul class="tyBox">
               <li><input type="radio" v-model="radio1" placeholder="宠物狗"></li>
               <li><input type="radio" v-model="radio1" placeholder="宠物猫"></li>
               <li><input type="radio" v-model="radio1" placeholder="异宠"></li>
            </ul>
            <ul class="tyBox">
                <template>
                    <li><input type="radio" v-model="radio2" placeholder="泰迪"></li>
                    <li><input type="radio" v-model="radio2" placeholder="哈士奇"></li>
                    <li><input type="radio" v-model="radio2" placeholder="阿拉斯加"></li>
                </template>
                <template>
                    <li><input type="radio" v-model="radio2" placeholder="波斯猫"></li>
                    <li><input type="radio" v-model="radio2" placeholder="加菲猫"></li>
                    <li><input type="radio" v-model="radio2" placeholder="美国短毛猫"></li>
                </template>
                <template>
                    <li><input type="radio" v-model="radio2" placeholder="乌龟"></li>
                    <li><input type="radio" v-model="radio2" placeholder="刺猬"></li>
                    <li><input type="radio" v-model="radio2" placeholder="羊驼"></li>
                </template>
            </ul>
        </main>
    </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Relepet',
    data(){
        return{
            classiced:'宠物狗',
            classiced2:'泰迪',
            classic:[{
                'pet':'宠物狗',
                'nameBox':[{
                    'name':'泰迪',
                },{
                    'name':'哈士奇'
                },{
                    'name':'阿拉斯加'
                },{
                    'name':'杜宾犬'
                }]
            },{
                'pet':'宠物猫',
                'nameBox':[{
                    'name':'波斯猫'
                },{
                    'name':'加菲猫'
                },{
                    'name':'美国短毛猫'
                }]
            },{
                'pet':'异宠',
                'nameBox':[{
                    'name':'乌龟'
                },{
                    'name':'刺猬'
                },{
                    'name':'羊驼'
                }]
            }]
        }
    },
    computed(){
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
    created(){
    }
}
</script>
<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.rr{
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
        span:last-child{
            right:0;
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
        justify-content:space-between;
        .tyBox{
            flex:1;
        }
    }
}
</style>