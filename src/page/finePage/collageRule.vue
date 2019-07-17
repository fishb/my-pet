<template>
    <!--特惠拼购规则-->
    <div class="collageRule">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">特惠拼购规则</h2>
            <span><i class="iconfont icon-fenxiang"></i></span>
        </header>
        <main class="mainBox">
        </main>
    </div>
</template>

<script>
export default {
    name:'collageRule',
    data(){
        return{
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
<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.collageRule{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
        // background-color:#fb7768;
        // background-image:url(../../assets/img/searchBox.png);
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
        span:last-child{
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
        overflow-y:scroll;
        .collagelist{
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            a{
                background:#fff;
                width:px2rem(315px);
                display:flex;
                flex-direction:column;
                margin-top:px2rem(12px);
                .collageImg{
                    width:px2rem(315px);
                    height:px2rem(320px);
                    img{
                        width:100%;
                        height:100%;
                        margin:auto;
                    }
                }
                .collageTxt{
                    padding:0 px2rem(12px);
                    height:px2rem(70px);
                    display:flex;
                    flex-direction:column;
                    h4{
                        margin:auto 0 0;
                        font-size:px2rem(24px);
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                    }
                    .ty{
                        margin:0 0 auto;
                        display:flex;
                        justify-content:space-between;
                        span{
                            font-size:px2rem(22px);
                        }
                        span:first-child{
                            color:#bac0c6;
                        }
                        span:last-child{
                            color:#fe4f53;
                        }
                    }
                }   
            }
        }
    }
}
</style>