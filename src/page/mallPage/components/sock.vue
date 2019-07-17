<template>
<div class="sock">
    <div class="sockTop">
        <span>零食</span>
        <span class="more">
            查看全部 >
        </span>
    </div>
    <div class="sockB">
        <a href="#">
            <div class="img"><img src="@/assets/img/stape1.png" alt=""></div>
            <span class="socTitle">顽皮 全犬种鸡肉丝 400g</span>
            <span class="socInfo">新包装更美味</span>
            <span class="socFF">
                <em>¥108</em>
                <i>¥147</i>
            </span>
        </a>
        <a href="#">
            <div class="img"><img src="@/assets/img/stape1.png" alt=""></div>
            <span class="socTitle">顽皮 全犬种鸡肉丝 400g</span>
            <span class="socInfo">新包装更美味</span>
            <span class="socFF">
                <em>¥60</em>
                <i>¥65</i>
            </span>
        </a>
        <a href="#">
            <div class="img"><img src="@/assets/img/stape1.png" alt=""></div>
            <span class="socTitle">顽皮 全犬种鸡肉丝 400g</span>
            <span class="socInfo">新包装更美味</span>
            <span class="socFF">
                <em>¥66</em>
                <i>¥78</i>
            </span>
        </a>
        <a href="#">
            <div class="img"><img src="@/assets/img/stape1.png" alt=""></div>
            <span class="socTitle">顽皮 全犬种鸡肉丝 400g</span>
            <span class="socInfo">新包装更美味</span>
            <span class="socFF">
                <em>¥108</em>
                <i>¥147</i>
            </span>
        </a>
    </div>    
</div>
</template>

<script>
export default {
    name:'Sock',
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
.sock{
    margin:px2rem(12px) auto;
    background:#fff;
    padding:px2rem(20px);
    display:flex;
    flex-direction:column;
    .sockTop{
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
    .sockB{
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
            .socTitle{
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
            .socInfo{
                font-size:px2rem(20px);
                color:#949494;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            .socFF{
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
