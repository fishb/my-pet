<template>
    <div class="refresh active" :class="status==0?'active':''">
        <div class="refresh-box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="refresh-txt">
            <template v-if="status==0">
                正在刷新
            </template>
            <template v-else-if="status==1">
                释放刷新
            </template>
            <template v-else>
                下拉刷新
            </template>
        </div>
    </div>
</template>
<script>
//下拉刷新状态组件
export default {
    name:'Refresh',
    props:['refreshIng'],
    data() {
        return {
            status:3,
            unfixName:'下拉刷新'
        }
    },
    methods:{
    },
    mounted(){
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.refresh{
    padding:px2rem(26px) 0;
    width:100%;
    //height:0;
    display:flex;
    justify-content:center;
    .refresh-box{
        width:px2rem(46px);
        display:flex;
        flex-direction:column;
        height:px2rem(100px);
        margin:auto 0;
        span{
            width:px2rem(4px);
            height:px2rem(4px);
            border-radius:px2rem(6px);
            background:#666;
            margin:auto;
        }
    }
    .refresh-txt{
        margin:auto px2rem(16px);
        font-size:px2rem(28px);
        color:#666;
    }
}
.active{
    .refresh-box{
        span{
            animation:refresh 1s infinite;
        }
    } 
}
@keyframes refresh{
    0%,100%{
        width:px2rem(46px);
    }
    50%{
        width:px2rem(4px);
    }
}
.refresh-box span:nth-child(2){
    animation-delay:0.25s;
}
.refresh-box span:nth-child(3){
    animation-delay:0.5s;
}
.refresh-box span:nth-child(4){
    animation-delay:0.75s;
}
</style>
        