<template>
    <section class="Screen">
        <header class="headerBox">
            <span @click="history"><i class="iconfont icon-fanhui2"></i></span>
            <h2 class="Title">泰迪</h2>
            <span class="Rg"><i class="iconfont icon-fenxiang"></i></span>
        </header>
        <main class="mainBox">
            <div class="imgBox" :style="'background-image:url('+img+')'"></div>
            <div class="txtBox">
                <h4>简介</h4>
                <div class="infoBox">
                    比熊犬（法语：Bichon Frisé，意指“白色卷毛的玩赏用小狗”）原产于地中海地区，是一种小型犬品种。它们不会自然脱毛，因此毛发需要整理。颜色一般白色。
                    原称巴比熊犬，后缩为比熊犬。怀疑是巴比特犬和水猎融犬的后裔。是一种娇小的、强健的白色粉扑型的狗，具有欢快的性格，从它羽毛般欢快地卷在背后的尾巴和好奇的眼神中就能体现出来。
                    外形可爱，深受大家喜欢，现在多被当作家养宠物 ，因此需要定期处理它的毛发，疾病等。比熊犬性情温顺、敏感、顽皮而可爱。逗人喜欢的特点也是此品种是否纯正的标志，或者说至少应该有这一点。整体外貌而言，比熊犬是小型犬，健壮，萌，蓬松的小尾巴贴在后背，有着一双充满好奇的黑色眼睛。同时它的动作优雅，灵活逗人喜爱。还有一个好处，它不太会掉毛，活动空间小，主要分布在欧洲，但近几年来，一些亚洲国家的人们也开始乐于饲养这类乖巧的小型犬，分布范围逐渐扩大。
                </div>
                <h4>形态特征</h4>
                <div class="infoBox">
                    耳朵下垂，隐藏在长而流动的毛发中。耳朵的位置略高于眼睛，并且在比较靠前的位置。黑色或深褐色的眼睛，眼睛周围有黑色或非常设的褐色皮肤环绕，眼圈本身是黑色的。口吻与脑袋的长度比例非常匀称。黑色的嘴唇精致但不下垂。大腿肌肉发达，距离略宽。前驱伸展轻松，后驱驱动有力。尾巴有许多羽毛，尾巴的位置与背线齐平，温和的卷在背后
                </div>
                <h4>性格特点</h4>
                <div class="infoBox">
                    性情开朗、活泼、聪明、勇敢、机警、感情丰富，有较强的适应能力。它忠实于主人，但也具有坚强的个性。温和而守规矩，敏感、顽皮、且挚爱。愉快的态度是这个品种的特点，而且很容易因为小事情而满足。虽然个子小，卷毛比熊犬颇有个性，天性活泼、爱好自由，能给主人带来
                </div>
                <h4>养护知识</h4>
                <div class="infoBox">
                    要保持卷毛比熊犬最佳的形态，那就需要每日梳理，定期进行专业修剪，当然这种护理还包括定期为它洗澡并吹干毛发使变得蓬松。比熊犬泪腺发达，需要小心护理，每日要以沾上眼药水的棉花抹拭眼分泌物。被毛必须每天梳理及经常修剪。潮湿天气时，较易出现皮肤问题。亦要小心嘴旁的毛，因为易沾污变脏。每个月需带它去做一次修整、定期的梳洗、刷饰都是必要的。比熊犬的毛发很独特，软毛里有很硬的螺旋状卷毛，所以很蓬松，摸起来很软，可是这样的毛很容易打结，特别是使用肩带时，在腋下、背部、颈部、后腿的位置，不注意梳理，打结的情况就会很严重，因此大部分犬主都认为一天至少梳理一次毛是必要的。不要让狗讨厌梳毛。梳完后应尽量给与奖励
                </div>
                <h4>喂养要点</h4>
                <div class="infoBox">
                    比熊犬以双层毛皮形成的蓬松外形而著名，毛质纤细卷曲如丝般柔软，丰富的卷毛，分为上被毛和下被毛．必须经常修剪，被毛的质地最为重要。底毛柔软而浓厚，外层被毛粗硬且卷曲。毛色除了白色之外，还有乳黄色与杏仁色.
                </div>
            </div>
        </main>
    </section>    
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'PenEntry',
    data(){
        return{
            img:'http://axios.weakwater.com/img/bx.jpg'
        }
    },
    methods:{
        history(){
            this.$router.go(-1)
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
   $rem :64.0px;
   @return ($px/$rem) + rem;
}
.Screen{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
        // background-color:#fb7768;
        // background-image:url(../../../assets/img/searchBox.png);
        // background-repeat:no-repeat;
        // background-size:100% px2rem(75px);
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
        .Rg{
            right:0;
        }
        .Title{
            margin:auto;
            color:#fff;
            font-size:px2rem(30px);
            font-weight:normal;
        }
    }
    .mainBox{
        flex:1;
        display:flex;
        flex-direction:column;
        background:#fff;
        overflow-y:scroll;
        .imgBox{
            margin:px2rem(26px) auto;
            width:px2rem(480px);
            height:px2rem(480px);
            background-size:cover;
            background-position:center;
            background-repeat:no-repeat;
        }
        .txtBox{
            padding:px2rem(26px);
            h4{
                font-size:px2rem(28px);
                margin:px2rem(16px) 0;
                color:#fe4f53;
            }
            .infoBox{
                font-size:px2rem(24px);
                color:#000;
                line-height:px2rem(30px);
            }
        }
    }
}
</style>