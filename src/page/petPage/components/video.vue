<template>
    <div class="movie">
        <div class="videoImg" v-show="!videoShow">
            <img src="../../../assets/img/zwt.jpg" alt="">
            <i class="iconfont icon-bofang1" @click="videoToggle"></i>
        </div>
        <video ref="videoBox" v-show="videoShow" type="video/*" x-webkit-airplay="true" webkit-playsinline="true" preload="auto" :autoplay="autoplay" controls :src="movie">您的浏览器不支持播放该视频！</video>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'Movie',
    props:['movie','photo'],
    data(){
        return{
            videoShow:false,
            autoplay:false
        }
    }, 
    methods:{
        videoToggle(){
            this.videoShow = !this.videoShow
            this.autoplay = !this.autoplay
        },
        videoPlus(){
            var that = this
            that.$refs.videoBox.addEventListener('ended',function(){
                that.videoShow = !that.videoShow
                that.autoplay = !that.autoplay
            })
        }
    },
    created(){ 
    },
    mounted(){   
        this.$nextTick(this.videoPlus())   
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.movie{
    width:100%;
    height:100%;
    background:transparent;
    video{
        background:#000;
        position:fixed;
        top:0;
        width:100%;
        height:100%;
        z-index:9999;
    }
    img{
        width:100%;
        height:100%;
    }
    .videoImg{
        width:100%;
        height:100%;
        position:relative;
        img{
            width:100%;
            height:100%;
        }
        i{
            z-index:999;
            position:absolute;
            top:50%;
            left:50%;
            margin-top:px2rem(-50px);
            margin-left:px2rem(-50px);
            width:px2rem(100px);
            height:px2rem(100px);
            background:rgba(0,0,0,0.3);
            color:#fff;
            font-size:px2rem(64px);
            border-radius:50%;
            display:flex;
            border:px2rem(1px) solid #eee;
            &:before{
                margin:auto;
            }
        }
    }
}
</style>
