<template>
<div class="cnimal">
    <div class="cnimalContainer" v-for="item in pet" :key="item.id">
        <a class="list" href="#" v-for="lists in item.list" :key="lists.id">
            <div class="img">
                <img :src="lists.img" alt="">
            </div>
            <div class="name">{{lists.name}}</div>
            <div class="mold">{{lists.title}}</div>
            <div class="price">{{lists.price}}元</div>
        </a>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Cnimal',
    data(){
        return{
            pet:''
        }
    },
    methods:{
        
    },
    mounted(){
        this.$nextTick(console.log(this.pet))
    },
    created(res){
        var _this = this
        axios.post('http://192.168.0.200:1015/mobile/user/user_info')
        .then(function(res){
            console.log(res.data)
            _this.pet = res.data.pet_list
        })
        .catch(function(error){
            console.log('请求失败')  
        })
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.cnimal{
    flex:1;
    overflow-y:scroll;
    padding:px2rem(16px);    
    .cnimalContainer{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        .list{
            width:px2rem(296px);
            height:px2rem(390px);
            padding:px2rem(20px);
            background:#fff;
            display:flex;
            flex-direction:column;
            margin-bottom:px2rem(16px);
            .img{
                width:px2rem(242px);
                height:px2rem(242px);
                margin:0 auto;
                display:flex;
                img{
                    width:px2rem(242px);
                    height:px2rem(242px);
                    max-width:px2rem(242px);
                    max-height:px2rem(242px);
                    margin:auto;
                    border-radius:px2rem(12px);
                }
            }
            .name{
                font-size:px2rem(24px);
                margin:px2rem(12px) 0 0;
            }
            .mold{
                font-size:px2rem(22px);
                color:#949494;
                margin:auto 0;
                white-space:nowrap;
                text-overflow:ellipsis;
                overflow:hidden;
            }
            .price{
                font-size:px2rem(24px);
                color:#fe4f53;
            }
        }
    }
}
</style>