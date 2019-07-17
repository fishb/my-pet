<template>
<div class="search">
    <div class="searchBox">
        <div class="searchInput">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="宠物直销用户名或者id" class="searchBtn" @focus="toggle" @blur="toggle" v-model="value">
        </div>
        <span class="off" v-show="ifshow">取消</span>
    </div>
    <div class="result" v-show="ifshow">
        <div class="search-item" v-for="item in value2" :key="item.id">{{item.itm}}</div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    data() {
        return {
            value:'',
            ifshow:false,
            value2:'',
            result: []
        }
    },
    methods:{
        toggle(){
            if(this.ifshow==false){
                this.ifshow=true
            }else{
                this.ifshow=false
                this.value=''
            }    
        },
        getResult(val) {
            if (!val) return [];
            return [
                'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
                'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
            ].filter(value => new RegExp(val, 'i').test(value));
            }
        },
        watch: {
            value2(val) {
                this.result = this.getResult(val);
            }
        }
    }
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
$color:#fff;
.search{
    width:100%;
    height:100%;
    background:#f2f2f2;
    display:flex;
    flex-direction:column;
    .searchBox{
        background:#fff;
        height:px2rem(80px);
        padding:px2rem(12px) px2rem(20px);
        display:flex;
        justify-content:space-between;
        .searchInput{
            padding:px2rem(10px);
            flex:1;
            display:flex;
            justify-content:space-between;
            background:#f2f2f2;
            border-radius:px2rem(10px);
            i{
                margin:auto 0;
                font-size:px2rem(24px);
                width:px2rem(30px);
                height:px2rem(30px);
                color:#999;
                display:flex; 
            }
            i:before{
                margin:auto;
            }
            .searchBtn{
                flex:1;
                margin:0 px2rem(6px);
                font-size:px2rem(26px);
                color:#000;
            }
       
       }
       .off{
           margin:auto px2rem(20px);
           font-size:px2rem(26px);
           color:#fb7768;
       }
    }
    .result{
        flex:1;
        background:#fff;
        padding:px2rem(20px);
        .search-item{
            height:px2rem(45px);
            line-height:px2rem(45px);
            border-bottom:px2rem(1px) solid #f4f4f4;
            color:#999;
            text-overflow:ellipsis;
            overflow:hidden;
            white-space:nowrap;
            font-size:px2rem(26px);
        }
    }
}
</style>
