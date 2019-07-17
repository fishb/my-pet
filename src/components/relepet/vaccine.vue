<template>
    <section class="DiologBox">
        <main class="mainBox">
            <div class="vaccBox" @click="anShow">
                <span>{{version}}</span>
                <div class="timeBox">
                    <span>{{timeIn}}</span>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>   
        </main>
        <!--疫苗名称组件传来两个值-->
        <fillin v-if="showName" v-on:childValue="childValue"></fillin>
        <div @click="click" ref="ons"></div>
    </section>
</template>

<script>
import fillin from '@/components/relepet/fillin'
export default {
    name:'Vaccine',
    components:{
        fillin
    },
    props:["mess"],
    data(){
        return{
            numx:this.mess,
            version:'',
            showName:false,
            time:'',
            timeOne:'',
            vaccine:[],
            showTime:false,
            timeIn:(new Date().getFullYear()) + '-' + (new Date().getMonth()+1) + '-' + new Date().getDate()
        }
    },
    computed:{
    },
    methods:{
        anShow(){
            this.showName = true
        },
        childValue(showName,version,timeIn){
            // childValue就是子组件传过来的值
            this.showName = showName
            this.version = version
            this.timeIn = timeIn
            this.$refs.ons.click()
        },
        click(){
           this.$emit('vaccineValue',this.numx.num,this.showName,this.version,this.timeIn) 
        }
    },
    computed:{
    },
    mounted(){ 
        this.timeIn = this.numx.time
        this.version = this.numx.name
        console.log(this.numx)
        // childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
            
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
.DiologBox{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .mainBox{
        .vaccBox{
            padding:0 px2rem(26px);
            height:px2rem(80px);
            display:flex;
            justify-content:space-between;
            span{
                font-size:px2rem(26px);
                color:#000;
                margin:auto 0;
            }
            input{
                flex:1;
                font-size:px2rem(24px);
                color:#000;
                margin:0 px2rem(12px);
            }
            .timeBox{
                flex:1;
                margin:0 px2rem(12px);
                display:flex;
                justify-content:flex-end;
                i{
                    color:#fe4f53;
                    font-size:px2rem(24px);
                    margin:auto 0 auto px2rem(26px);
                }
            }
            .weui-cells{
                flex:1;
                margin:0;
                display:flex;
                a{
                    font-size:px2rem(26px);
                    padding:0;
                    flex:1;
                }
            }
        }
    }
}
</style>