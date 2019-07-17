<template>
    <div class="Msg">
        <header class="headerBox">
            <div class="icon">
                <img src="../../assets/img/like.png" alt="">
            </div>
            <span>消息</span>
        </header>
        <main class="mainBox">
            <!-- <router-link :to="{path:'/MsgSearch'}" class="searchBox">
                <i class="iconfont icon-sousuo"></i>
                <span>搜索</span>
            </router-link> -->
            <!-- <div class="listBox" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip">
                <router-link :to="{path:'/Topline'}">
                    <div class="img"><img src="../../assets/icon/Topline.png" alt=""></div>
                    <div class="listTxt">
                        <h4>萌宠头条</h4>
                        <span>[捕鼠梗]这闲事我管定了!</span>
                    </div>
                    <div class="times">刚刚</div>
                </router-link>
                <div class="delete">
                    <span>删除</span>
                </div>
            </div>           -->
            <div class="list-item" ref="list" v-for="(lists,index) in listBox" :key="index" data-type="0">
                <div class="list-box" @touchstart.capture="touchStart" @touchend.capture="touchEnd" @click="skip(lists.id)">
                    <div class="img"><img :src="lists.head_pic"></div>
                    <div class="listTxt">
                        <h4>{{lists.name}}</h4>
                        <span>{{lists.listTxt}}</span>
                    </div>
                    <div class="times">{{lists.times}}</div>
                </div>
                <div class="delete" @click="deleteItem" :data-index="index">
                    <span>删除</span>
                </div>
            </div>
            <div class="nomore">
                暂时没有更多啦~
            </div>
        </main>
        <Navlist></Navlist>
    </div>
</template>

<script>
import Navlist from '@/components/nav.vue'
export default {
    name:'Msg',
    components:{
        Navlist
    },
    data(){
        return{
            listBox:[{
                id:'1',
                head_pic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1293860636,1088191402&fm=27&gp=0.jpg',
                name:'宠物直销官方',
                listTxt:'有问题就问小助手',
                times:'2018/08/02'
            },{
                id:'2',
                head_pic:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3506739232,2945471821&fm=27&gp=0.jpg',
                name:'宠物屋专卖',
                listTxt:'你好请问有什么可以帮到你的',
                times:'昨天'
            },{
                id:'3',
                head_pic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4115825325,3478781251&fm=27&gp=0.jpg',
                name:'宠她',
                listTxt:'超喜欢这里的',
                times:'2018、08、05'
            },{
                id:'4',
                head_pic:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3088153185,441194950&fm=27&gp=0.jpg',
                name:'智宠',
                listTxt:'震惊!28岁小伙从小被溺爱,至今不会自己穿衣服,这是人性的扭曲还是道德的伦桑，欢迎收看晚间800',
                times:'去年'
            },{
                id:'5',
                head_pic:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1044447418,3068024759&fm=27&gp=0.jpg',
                name:'哥哥',
                listTxt:'今天晚上回家吃饭不',
                times:'一个月前'
            }],
            startX:0,
            endX:0
        }
    },
    methods:{
        //跳转
        skip(ids){
            if(this.checkSlide()){
                this.restSlide();
            }else{
                this.$router.push('/chat/'+ids)
            }
        },
        //滑动开始
        touchStart(e){
            // 记录初始位置
            this.startX = e.touches[0].clientX;
        },
        //滑动结束
        touchEnd(e){
            // 当前滑动的父级元素
            let parentElement = e.currentTarget.parentElement;
            // 记录结束位置
            this.endX = e.changedTouches[0].clientX;
            // 左滑
            if(parentElement.dataset.type == 0 && this.startX - this.endX > 30 ){
                this.restSlide();
                parentElement.dataset.type = 1;
            }
            // 右滑
            if(parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
                this.restSlide();
                parentElement.dataset.type = 0;
            }
            this.startX = 0;
            this.endX = 0;
        },
        //判断当前是否有滑块处于滑动状态
        checkSlide(){
            let listItems=this.$refs.list;
            for(let i=0;i<listItems.length;i++){
                if(listItems[i].dataset.type == 1){
                    return true;
                }
            }
            return false;
        },
        //复位滑动状态
        restSlide(){
            let listItems = this.$refs.list;
            // 复位
            for(let i = 0 ; i < listItems.length ; i++){
                listItems[i].dataset.type = 0;
            }
        },
        //删除
        deleteItem(e){
            //当前索引
            let index = e.currentTarget.dataset.index;
            // 复位
            this.restSlide();
            // 删除
            this.listBox.splice(index,1);
        }
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Msg{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        display:flex;
        height:px2rem(75px);
        background:#fe4f53;
        position:relative;
        .icon{
            position: absolute;
            left:px2rem(20px);
            width:px2rem(75px);
            height:px2rem(75px);
            display:flex;
            img{
                width:px2rem(55px);
                height:px2rem(55px);
                margin:auto;
                border-radius:50%;
            }
        }
        span{
            margin:auto;
            font-size:px2rem(30px);
            color:#fff;
        }
    }
    .mainBox{
        flex:1;
        overflow-y:scroll;
        padding:px2rem(26px) 0;
        overflow:hidden;
        .nomore{
            margin:px2rem(26px) auto;
            text-align:center;
            font-size:px2rem(24px);
            color:#bac0c6;
        }
        .searchBox{
            margin:px2rem(26px);
            height:px2rem(60px);
            background:#fff;
            border-radius:px2rem(6px);
            display:flex;
            justify-content:center;
            i{
                margin:auto 0;
                font-size:px2rem(24px);
                color:#bac0c6;
            }
            span{
                margin:auto px2rem(12px);
                font-size:px2rem(24px);
                color:#bac0c6;
            }
        }
        .list-item{
            position:relative;
            height:px2rem(105px);
            transition:all 0.2s;
            background:#fff;
            border-bottom:px2rem(1px) solid #eee;
            .list-box{
                display:flex;
                height:px2rem(105px);
                padding:0 px2rem(26px);
                justify-content:space-between;
                .img{
                    width:px2rem(80px);
                    height:px2rem(80px);
                    margin:auto 0;
                    border-radius:50%;
                    overflow:hidden;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .listTxt{
                    flex:1;
                    display:flex;
                    flex-direction:column;
                    margin:0 px2rem(16px);
                    h4{
                        font-size:px2rem(28px);
                        font-weight:normal;
                        color:#000;
                        margin:auto 0 0;
                    }
                    span{
                        font-size:px2rem(24px);
                        color:#999;
                        margin:auto 0;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        overflow:hidden;
                        max-width:px2rem(420px);
                    }
                }
                .times{
                    margin:auto 0;
                    font-size:px2rem(20px);
                    color:#999;
                }
            }
            .delete{
                position:absolute;
                top:0;
                right:-(px2rem(150px));
                width:px2rem(150px);
                height:px2rem(105px);
                background:#fe4f53;
                display:flex;
                span{
                    font-size:px2rem(32px);
                    color:#fff;
                    margin:auto;
                }
            }
            
        }
        .list-item[data-type="0"]{
            transform: translate3d(0,0,0);
        }
        .list-item[data-type="1"]{
            transform: translate3d(-(px2rem(150px)),0,0);
        }
        .list-item:last-child{
            border-bottom:0;
        }
    }
}
</style>