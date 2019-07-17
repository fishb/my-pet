<template>
    <section class="shopBox">
        <div class="shopType">
            <div class="typeHead">
                <span>订单编号：1808101529121754</span>
                <span class="red">待付款</span>
            </div>
            <router-link :to="'/Substance/'+item.src" class="typeItem" v-for="item in list.items" :key="item.id">
                <div class="img"><img :src="item.img"></div>
                <div class="middle">
                    <h4>{{item.name}}</h4>
                    <span>型号：{{item.size}}</span>
                </div>
                <div class="sum">
                    <div class="price">
                        <span>¥{{item.price}}</span>
                        <span class="oprice">¥{{item.oprice}}</span>
                    </div>
                    <div class="amount">X{{item.amount}}</div>
                </div>
            </router-link>
            <div class="total">
                <span>共20件商品</span>
                <span class="todollr">实付：¥296</span>
            </div>
            <!--按条件渲染出来-->
            <div class="settle">
                <span>2018-02-05 23:44:35</span>
                <a href="#" class="active">去支付</a>
            </div>
        </div>
        <div class="tips" v-if="tips">
            <i class="iconfont icon-jingshi"></i>
            <span>订单号半个小时内有效，过期自动关闭</span>
            <div class="iconfont icon-guanbi2" @click="gbTips"></div>
        </div>
   </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Btypeone',
    props:['type'],
    data(){
        return{
            list:this.type,
            total:'',
            models:'',
            showClose:false,
            hollow:false,
            tips:true
        }
    },
    created(){
    },
    methods:{
        gbTips(){
            this.tips = false
        }
    },
    mounted(){
    }
}
</script>