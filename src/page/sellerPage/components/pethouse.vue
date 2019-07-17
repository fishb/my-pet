<template>
    <section class="PetContainer">
        <!--认证开始-->
        <!-- <div class="rzSwiper swiper-container">
            <div class="swiper-wrapper">
                <a class="swiper-slide">
                    <img src="@/assets/img/rzswiper.png" alt="">
                </a>
                <a class="swiper-slide">
                    <img src="@/assets/img/rzswiper.png" alt="">
                </a>
                <a class="swiper-slide">
                    <img src="@/assets/img/rzswiper.png" alt="">
                </a>
                <a class="swiper-slide">
                    <img src="@/assets/img/rzswiper.png" alt="">
                </a>
            </div>
        </div> -->
        <!--认证结束-->
        <!--宠舍循环开始-->
        <Pet></Pet>
        <!--宠舍循环结束-->
    </section>
</template>

<script>
import Pet from '@/page/sellerPage/components/page/pet.vue'
import Swiper from 'swiper'
export default {
    name:'Pethouse',
    components:{
        Pet
    },
    data(){
        return{
        }
    },
    methods:{
        
    },
    mounted(){
        var oddsHot = new Swiper('.rzSwiper', {
            autoplay:true,
            speed:2000,
            loop:true
        });
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.PetContainer{
    flex:1;
    overflow-y:scroll;
    .rzSwiper{
        height:px2rem(255px);
        margin-bottom:px2rem(12px);
        img{
            width:100%;
            height:100%;
        }
    }

}
</style>
