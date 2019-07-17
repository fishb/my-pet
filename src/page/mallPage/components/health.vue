<template>
<div class="health">
    <div class="healthTop">
        <span>保健品</span>
        <span class="more">
            查看全部 >
        </span>
    </div>
    <div class="healthB">
        <a href="#">
            <div class="img"><img src="@/assets/img/stape1.png" alt=""></div>
            <span class="healthTitle">乐宝 肠乐康益生菌 5g*12袋</span>
            <span class="healthInfo">治疗拉肚子、腹泻、呕吐</span>
            <span class="healthFF">
                <em>¥65</em>
                <i>¥88</i>
            </span>
        </a>
        <a href="#">
            <div class="img"><img src="@/assets/img/stape3.png" alt=""></div>
            <span class="healthTitle">顽皮 全犬种鸡肉丝 400g</span>
            <span class="healthInfo">新包装更美味</span>
            <span class="healthFF">
                <em>¥60</em>
                <i>¥65</i>
            </span>
        </a>
        <a href="#">
            <div class="img"><img src="@/assets/img/stape3.png" alt=""></div>
            <span class="healthTitle">小宠 EHD优能钙 400g</span>
            <span class="healthInfo">补钙吸收快、口感好</span>
            <span class="healthFF">
                <em>¥66</em>
                <i>¥78</i>
            </span>
        </a>
        <a href="#">
            <div class="img"><img src="@/assets/img/stape3.png" alt=""></div>
            <span class="healthTitle">顽皮 全犬种鸡肉丝 400g</span>
            <span class="healthInfo">新包装更美味</span>
            <span class="healthFF">
                <em>¥35</em>
                <i>¥42</i>
            </span>
        </a>
    </div>    
</div>
</template>

<script>
export default {
    name:'Health',
    data(){
        return{
        }
    },
    methods:{

    },
    computed:{  	
    },
    mounted(){   
    },
    created(){
    }
}
</script>
<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.health{
    margin:px2rem(12px) auto;
    background:#fff;
    padding:px2rem(20px);
    display:flex;
    flex-direction:column;
    .healthTop{
        height:px2rem(50px);
        display:flex;
        justify-content:space-between;
        span{
            font-size:px2rem(30px);
            color:#000;
            font-weight:700;
            margin:auto 0;
        }
        span.more{
            font-size:px2rem(20px);
            color:#949494;
        }
    }
    .healthB{
        flex:1;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        a{
            width:px2rem(290px);
            //height:px2rem(430px);
            margin:px2rem(12px) 0 0;
            .img{
                background:#f9fdfa;
                width:px2rem(290px);
                height:px2rem(290px);
                display:flex;
                img{
                    margin:auto;
                    max-width:100%;
                    max-height:100%;
                }
            }
            .healthTitle{
                margin:px2rem(10px) auto;
                //height:px2rem(70px);
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient: vertical;
                font-size:px2rem(26px);
                color:#000;
            }
            .healthInfo{
                font-size:px2rem(20px);
                color:#949494;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            .healthFF{
                flex:1;
                display:flex;
                justify-content:space-between;
                em{
                    font-size:px2rem(24px);
                    font-weight:700;
                    color:#ec1614;
                }
                i{
                    font-size:px2rem(22px);
                    color:#949494;
                    text-decoration: line-through;
                }
            }
        }
    }
}
</style>
