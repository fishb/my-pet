<template>
    <div class="wantBuy">
        <header class="buyHead">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">发布求购信息</h2>
        </header>
        <main class="mainBox">
            <div class="tips">
                仅用于买家发布求购信息，发布后信息将被审核，杜绝发布广告
            </div>
            <div class="inputName">
                <input type="text" name="" id="" placeholder="输入求购品种">
            </div>
            <div class="inputTxt">
                <textarea name="" placeholder="输入求购详细描述(不超过200字)"></textarea>
            </div>
            <div class="inputBox">
                <div class="inputTy">添加参照图片（最多3张，非必填）</div>
                <div class="upfile">
                    <input type="file" accept="image/*" class="file">
                </div>
            </div>
        </main>
        <footer class="footerBox">
            <span>发布</span>
        </footer>
    </div>
</template>

<script>
export default {
    name:'wantBuy',
    data(){
        return{
        }
    },
    methods:{
        history(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.wantBuy{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .buyHead{
        height:px2rem(75px);
        background:#fe4f53;
        // background-image:url(../assets/img/searchBox.png);
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
        background:#fafafa;
        .tips{
            height:px2rem(100px);
            line-height:px2rem(30px);
            background:#fdf3e9;
            font-size:px2rem(24px);
            padding:px2rem(12px) px2rem(26px);
        }
        .inputName{
            margin:px2rem(12px) auto;
            height:px2rem(90px);
            background:#fff;
            display:flex;
            input{
                flex:1;
                padding:0 px2rem(26px);
                font-size:px2rem(24px);
                color:#999;
            }
        }
        .inputTxt{
            height:px2rem(250px);
            background:#fff;
            display:flex;
            textarea{
                flex:1;
                border:0;
                padding:px2rem(26px);
                font-size:px2rem(24px);
            }
        }
        .inputBox{
            height:auto;
            .inputTy{
                padding:px2rem(26px);
                font-size:px2rem(28px);
                color:#46474d;
            }
            .upfile{
                width:px2rem(215px);
                height:px2rem(215px);
                background-color:#fff;
                margin:auto px2rem(16px) auto 0;
                background-image:url(../assets/icon/files.png);
                background-size:px2rem(120px);
                background-repeat:no-repeat;
                background-position:center;
                input{
                    width:100%;
                    height:100%;
                }
                input.file{
                    opacity: 0;
                    filter: alpha(opacity=0);
                    cursor: pointer;
                }
            }
        }
    }
    .footerBox{
        height:px2rem(80px);
        background:#bac0c6;
        line-height:px2rem(80px);
        text-align:center;
        display:flex;
        span{
            width:100%;
            margin:0;
            font-size:px2rem(26px);
            color:#fff;
        }
    }
}
</style>
