<template>
<div class="addressBox">
    <header class="headerBox">
        <span><i class="iconfont icon-fanhui2"></i></span>
        <h2 class="Title">修改地址</h2>
    </header>
    <main class="mainBox">
        <div class="inputBox">
            <div class="label">区域:</div>
            <input slot="right" type="text" @click.stop="show1=true" v-model="city" readonly placeholder="请选择所在地区">
            <span><i class="iconfont icon-arrow-right"></i></span>
        </div>
        <div class="inputBox">
            <div class="label">详址:</div>
            <input type="text" v-model="address" placeholder="请输入详细地址">
        </div>
        <div class="siteBtn" @click="siteBtn">
            <span>确定</span>
        </div>
    </main>
    <!--城市选择-->
    <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
</div>
</template>
<script>
import Vue from 'vue'
import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect';
Vue.component(CitySelect.name, CitySelect);
/* 前提是已经安装了 ydui-district */
import District from 'ydui-district/dist/jd_province_city_area_id';
export default {
    name:'Address',
    data(){
        return{
            show1: false,
            city:'', // 省市区
            address: '', //详细地址
            district: District,
            showName:false
        }
    },
    methods:{
        result1(ret) {
            this.city = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
        },
        siteBtn(){
            // childByValue是在父组件on监听的方法
            // 第二个参数this.childValue是需要传的值
            this.$emit('childValue',this.showName,this.city,this.address)
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
.addressBox{
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    z-index:99;
    background:#f7fafc;
    .inputBox{
        span{
            margin:auto px2rem(16px);
            i{
                font-size:px2rem(32px);
                color:#bac0c6;
            }
        }
    }
}
</style>