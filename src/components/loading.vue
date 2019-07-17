<template>
    <div class="loading">
        <img src="@/assets/icon/loading4.gif" alt="">
    </div>
</template>

<script>
export default {
    name:'loading',
    data(){
        return{

        }
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
.loading{
    margin:px2rem(10px) auto;
    img{
        height:px2rem(200px);
        margin:auto;
    }
} 

</style>
