<template>
    <section class="shopBox">
        <div class="shopType">
            <div class="typeHead">
                <span>下单时间：{{list.time}}</span>
                <span class="red">待发货</span>
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
                <span>共8件商品</span>
                <span class="todollr">实付：¥296</span>
            </div>
            <!--按条件渲染出来-->
            <div class="settle">
                <a href="#" class="active">催单</a>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Btypetwo',
    props:['type'],
    data(){
        return{
            list:this.type,
            total:'',
            models:'',
            showClose:false,
            hollow:false
        }
    },
    created(){
    },
    mounted(){
    }
}
</script>