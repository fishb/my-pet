<template>
    <section class="anthName">
        <header class="headerBox">
            <span><i class="iconfont icon-guanbi2"></i></span>
            <h2 class="Title">驱虫信息</h2>
            <span @click="childClick"><i class="iconfont icon-dui"></i></span>
        </header>
        <main class="mainBox">
            <div class="inputBox">
                <!--时间组件传值-->
                <TimeBox class="vaccBox" v-on:timeValue="timeValue" :time="timeOne"></TimeBox>
            </div>
            <div class="inputBox">
                <span>驱虫名称</span>
                <input type="text" v-model="version">
            </div>
            <span class="tips">请填写驱虫品牌名称</span>
        </main>
    </section>
</template>

<script>
import TimeBox from '@/components/relepet/timeBox'
export default {
    name:'anthName',
    components:{
        TimeBox
    },
    data(){
        return{
            version:'',
            showName:false,
            timeOne:'',
            timeIn:(new Date().getFullYear()) + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate()
        }
    },
    computed(){
    },
    methods:{
        childClick(){
            // childByValue是在父组件on监听的方法
            // 第二个参数this.childValue是需要传的值
            this.$emit('childValue',this.showName,this.version,this.timeIn)
        },
        timeValue(value){
            this.timeIn = value
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
.anthName{
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
        justify-content:space-between;
        padding:0 px2rem(26px);
        background:#fff;
        .vaccBox{
            width:100%;
            padding:0;
        }
        span{
            margin:auto 0;
            font-size:px2rem(24px);
            color:#000;
        }
        input{
            flex:1;
            padding:0 px2rem(26px);
            height:px2rem(80px);
            background:#fff;
            font-size:px2rem(26px);
        } 
    }
    .tips{
        font-size:px2rem(24px);
        color:#999;
        padding:0 px2rem(26px);
        margin:px2rem(8px) 0;
    }
}
</style>