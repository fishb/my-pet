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
                <a href="#" class="active">待收货</a>
            </div>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Btypethreen',
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
    created(res){
            var that = this;
            // `this` 指向 vm 实例
            // 为给定 ID 的 user 创建请求
            axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/bs')  
            .then(function (res) { 
                that.list= res.data.data.list.find(i=>i.type==3)
                if(that.list == ''){
                    that.showClose = true
                }
            })
            .catch(function (error) {
                that.models = '小主，请求失败了'
                that.showClose = true
                setTimeout(() => {
                    that.models = ''
                    that.showClose = false  
                }, 2000);
            });
    }
}
</script>
