<template>
    <section class="DiologBox">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">疫苗信息</h2>
            <span @click="click"><em>保存</em></span>
        </header>
        <main class="mainBox">
            <div class="vaccBox" @click="anShow">
                <span>疫苗型号</span>
                <div class="timeBox">
                    <span>{{version}}</span>
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
            <!--时间组件传来两个值-->
            <TimeBox class="vaccBox" v-on:timeValue="timeValue" :time="timeOne"></TimeBox>
        </main>
        <!--疫苗名称组件传来两个值-->
        <fillin v-if="showName" v-on:childValue="childValue"></fillin>
    </section>
</template>

<script>
import fillin from '@/components/relepet/fillin'
import TimeBox from '@/components/relepet/timeBox'
export default {
    name:'Vaccine',
    components:{
        fillin,TimeBox
    },
    props:["mess"],
    data(){
        return{
            //numx:this.mess,
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
//         pokerHistory(){
// 　　　　   return this.numx= this.mess.num
//           return this.version = this.mess.name
//           return this.timeOne = this.mess.time
// 　　    }
    },
    methods:{
        history(){
            this.$router.go(-1)
        },
        anShow(){
            this.showName = true
        },
        // addValue(showName,versio){
        //     this.showName = showName
        //     this.version = version
        // },
        childValue(showName,version){
            // childValue就是子组件传过来的值
            this.showName = showName
            this.version = version
        },
        timeValue(value){
            this.timeIn = value
        },
        //保存
        click(){
            // childByValue是在父组件on监听的方法
            // 第二个参数this.childValue是需要传的值
            this.$emit('addValue',this.mess,this.showName)
            //this.mess.num,this.showName,this.version,this.timeIn
        }
    },
    computed:{
    },
    mounted(){     
        // this.version = this.mess.name
        // this.timeOne = this.mess.time
        // console.log(this.mess.num)  
        // console.log(this.mess.time)
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
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    z-index:9999;
    display:flex;
    flex-direction:column;
    background:#f7fafc;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
        position:relative;
        display:flex;
        span{
            position:absolute;
            width:px2rem(75px);
            height:px2rem(75px);
            display:flex;
            i{
                font-size:px2rem(32px);
                margin:auto;
                color:#fff;
            }
        }
        .Title{
            margin:auto;
            color:#fff;
            font-size:px2rem(30px);
            font-weight:normal;
        }
        span:last-child{
            cursor:pointer;
            right:0;
            em{
                font-size:px2rem(26px);
                margin:auto;
                color:#fff;
            }
        }
    }
    .mainBox{
        padding:px2rem(16px) 0;
        flex:1; 
        .vaccBox{
            padding:0 px2rem(16px);
            height:px2rem(80px);
            background:#fff;
            //border-bottom:px2rem(1px) solid #eee;
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