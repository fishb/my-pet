<template>
    <div class="swiper-container photo">
        <yd-lightbox class="swiper-wrapper">
            <yd-lightbox-img class="swiper-slide" v-for="item in photo" :key="item.id" :src="item.item"></yd-lightbox-img>
        </yd-lightbox> 
    </div>
</template>

<script>
import Vue from 'vue'
import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox'
Vue.component(LightBox.name, LightBox)
Vue.component(LightBoxImg.name, LightBoxImg)
Vue.component(LightBoxTxt.name, LightBoxTxt)
import Swiper from 'swiper'
export default {
    name:'Movie',
    props:['photo'],
    data(){
        return{
            //photo:this.photo || []
            
        }
    }, 
    methods:{
    },
    created(){ 
    },
    mounted(){
        this.$nextTick(function(){
            var photos = new Swiper('.photo', {
                loop: true,
                speed:600,
                pagination: {
                    el:'.fyq',
                    dynamicBullets: true
                }
            });
        })
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.photo{
    width:100%;
    height:100%;
    background:transparent;
    .photo{
        width:100%;
        height:100%;
    }
}
</style>
