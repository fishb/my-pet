<template>
<div class="Ydslider">
    <div class="swiper-container mainSwiper">
        <div class="swiper-wrapper">
            <a class="swiper-slide" v-for="slide in slider" :key="slide.id" :style="'background:url('+slide.img+');background-repeat:no-repeat;background-size:cover;background-position:top center;'"></a>
        </div>
    </div>
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import Swiper from 'swiper'
export default {
    name:'Ydslider',
    data(){
        return{
            slider:''
        }
    },
    methods:{
    },
    computed:{  	
    },
    mounted(){ 
        this.$nextTick(function(){
            var _this = this;
            // `this` 指向 vm 实例
            // 为给定 ID 的 user 创建请求
            axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/swiper')
                .then(function (res) {
                    _this.slider = res.data.data ;
                        console.log(_this.slider);
                })
                .then(function(){
                    var mySwiper = new Swiper(".mainSwiper", {
                    loop:true,
                    autoplay:4000,
                    spaceBetween:15,
                    slidesPerView: "auto",
                    centeredSlides: true,  
                    pagination: ".swiper-pagination"
                    });
                })
                .catch(function (error) {
                    console.log(请求失败);
            }); 
        })    
    },
    created(){    
   }
}
</script>

<style lang="scss" scroped>
//@import '../../../assets/swiper/swiper.min.css';
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Ydslider{
    width:100%;
    height:px2rem(340px);
    background:#fff;
    position:relative;
}
.mainSwiper{
    width:100%;
    .swiper-wrapper{
        margin:px2rem(20px) auto;
    }
}
.mainSwiper .swiper-slide{
    width:px2rem(520px);
    height:px2rem(260px);
    border-radius:px2rem(10px);
    margin:auto;
}
.Ydslider .swiper-pagination{
    width:100%;
}
.Ydslider .swiper-pagination-bullet{
    width:px2rem(30px);
    height:px2rem(6px);
    background:#d4e5f2;
    border-radius:px2rem(5px);
    margin:auto px2rem(5px);
}
.Ydslider .swiper-pagination-bullet-active{
    background:#fe4f53;
}
</style>
