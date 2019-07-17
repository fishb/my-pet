<template>
    <section class="fillin">
        <header class="headerBox">
            <span><i class="iconfont icon-guanbi2"></i></span>
            <h2 class="Title">外地配送</h2>
            <span @click="childClick"><i class="iconfont icon-dui"></i></span>
        </header>
        <main class="mainBox">
            <div class="inputBox">
                <input type="number" v-model="version">
                <span class="tips">请填写外地配送所需价格(元)</span>
            </div>
        </main>
    </section>
</template>

<script>
export default {
    name:'Ferry',
    data(){
        return{
            version:'',
            showName:false
        }
    },
    computed(){
    },
    methods:{
        childClick(){
            // childByValue是在父组件on监听的方法
            // 第二个参数this.childValue是需要传的值
            this.$emit('childValue',this.showName,this.version)
        }
    },
    computed:{
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
.fillin{
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    z-index:9999;
    display:flex;
    flex-direction:column;
    background:#f7fafc;
    .inputBox{
        display:flex;
        flex-direction:column;
        input{
            padding:0 px2rem(26px);
            height:px2rem(80px);
            background:#fff;
            font-size:px2rem(26px);
        }
        .tips{
            font-size:px2rem(24px);
            color:#999;
            padding:0 px2rem(26px);
            margin:px2rem(8px) 0;
        }
    }
}
</style>