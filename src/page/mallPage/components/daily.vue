<template>
<div class="daily">
    <div class="dailyTop">
        <span>用品</span>
        <span class="more">
            查看全部 >
        </span>
    </div>
    <div class="dailyB">
        <a href="#">
            <div class="img"><img src="@/assets/img/daily.png" alt=""></div>
            <span class="dailyTitle">法瑞特 宠物吸水去异味尿垫</span>
            <span class="dailyInfo">吸水性强、除臭佳、养宠必备</span>
            <span class="dailyFF">
                <em>¥108</em>
                <i>¥147</i>
            </span>
        </a>
        <a href="#">
            <div class="img"><img src="@/assets/img/stape1.png" alt=""></div>
            <span class="dailyTitle">顽皮 全犬种鸡肉丝 400g</span>
            <span class="dailyInfo">户外休闲娱乐的好伙伴</span>
            <span class="dailyFF">
                <em>¥48</em>
                <i>¥68</i>
            </span>
        </a>
        <a href="#">
            <div class="img"><img src="@/assets/img/daily.png" alt=""></div>
            <span class="dailyTitle">顽皮 全犬种鸡肉丝 400g</span>
            <span class="dailyInfo">新包装更美味</span>
            <span class="dailyFF">
                <em>¥66</em>
                <i>¥78</i>
            </span>
        </a>
        <a href="#">
            <div class="img"><img src="@/assets/img/stape1.png" alt=""></div>
            <span class="dailyTitle">顽皮 全犬种鸡肉丝 400g</span>
            <span class="dailyInfo">新包装更美味</span>
            <span class="dailyFF">
                <em>¥32</em>
                <i>¥38</i>
            </span>
        </a>
    </div>    
</div>
</template>

<script>
export default {
    name:'Daily',
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
.daily{
    margin:px2rem(12px) auto;
    background:#fff;
    padding:px2rem(20px);
    display:flex;
    flex-direction:column;
    .dailyTop{
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
    .dailyB{
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
            .dailyTitle{
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
            .dailyInfo{
                font-size:px2rem(20px);
                color:#949494;
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            .dailyFF{
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
