<template>
    <div class="noway">
        <img src="../assets/icon/hollow.png" alt="">
    </div>
</template>

<script>
export default {
    name:'noway',
    data(){
        return{
        }
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.noway{
    margin:auto;
    width:px2rem(100%);
    height:auto;
    img{
        width:100%;
        height:auto;
    }
}
</style>
