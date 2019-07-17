<template>
    <section class="citySwtich">
        <main class="cityMain">
            <!--城市列表-->
            <div class="list" ref="list">
                <div v-for="(cit,cityIndex) in city" :key="cityIndex" ref="citys" :class="cityIndex=='0'?'hot':''">
                    <div class="hA" :class="cityIndex == num?'active':''">{{cit.hA=='☆'?'热门城市':cit.hA}}</div>
                    <div class="liBox">
                        <li v-for="(cityss,cityssIndex) in cit.citylist" :key="cityssIndex" @click="selectCityBtn(cityIndex,cityssIndex)">{{cityss}}</li>
                    </div>
                </div>
            </div>
            <!--字母-->
            <ul class="alphabet">
                <li v-for="(al,alIndex) in city" :key="alIndex" @click="altab(alIndex)" :class="alIndex == num?'active':''">{{al.hA}}</li>
            </ul>
        </main>
    </section>    
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import '../assets/js/city.js'
Vue.prototype.$ajax = axios
export default {
    name:'citySwtich',
    data(){
        return{
            city:citys,
            selectCity:'',
            selectNum:'',
            num:'',
            cityShow:false
        }
    },
    computed:{
    },
    methods:{
        altab(index){
            var that = this
            that.num = index 
            that.$refs.list.scrollTop = that.$refs.citys[that.num].offsetTop - that.$refs.citys[that.num].clientHeight 
        },
        Ascroll(){
            var that = this
            var percentage = that.$refs.list.scrollTop  / (that.$refs.list.scrollHeight - that.$refs.list.clientHeight )
            that.num = Math.round( percentage * that.city.length )
            if(that.num == that.city.length){
                that.num = that.city.length - 1 
            }
        },
        selectCityBtn(sx,index){
            var that = this
            that.selectCity = []
            that.num = sx
            that.selectNum = index
            that.selectCity = that.city[that.num].citylist[that.selectNum]
            this.$emit('cityValue',that.cityShow,that.selectCity)
        }
    },
    mounted(){
        this.$refs.list.addEventListener('scroll',this.Ascroll)
    }
}
</script>
<style lang="scss" scroped>
@function px2rem($px){
   $rem :64.0px;
   @return ($px/$rem) + rem;
}
.citySwtich{
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    display:flex;
    z-index:9999;
    .cityMain{
        flex:1;
        display:flex;
        padding:0 px2rem(36px);
        position:relative;
        background:#fff;
        .list{
            margin:0 auto;
            flex:1;
            overflow-y:scroll;
            .h5{
                height:px2rem(50px);
                line-height:px2rem(50px);
                font-size:px2rem(26px);
                color:#000;
            }
            .liBox{
                display:flex;
                flex-wrap:wrap;
                height:auto;
                margin:0 auto px2rem(40px);
                li{
                    margin:px2rem(12px) px2rem(20px) 0 0;
                    width:px2rem(175px);
                    height:px2rem(55px);
                    line-height:px2rem(55px);
                    text-align:center;
                    color:#666;
                    font-size:px2rem(24px);
                    border:px2rem(1px) solid #eee;
                    border-radius:px2rem(12px);
                } 
                li:nth-child(3n){
                    margin-right:0;
                }
            }
            .hA{
                font-size:px2rem(26px);
                margin:px2rem(16px) 0;
                width:px2rem(50px);
                height:px2rem(50px);
                background:#666;
                border-radius:50%;
                color:#fff;
                text-align:center;
                line-height:px2rem(50px);
            }
            .hA.active{
                background:#fe4f53;
            }
        }
        .hot{
            .hA{
                width:px2rem(160px);
                border-radius:px2rem(12px);
            }
            .liBox{
                li{
                    background:#eee;
                    border:0;
                }
            } 
        }
        .alphabet{
            padding:px2rem(16px) 0;
            position:absolute;
            right:0;
            width:px2rem(36px);
            height:100%;
            display:flex;
            flex-direction:column;
            li{
                flex:1;
                font-size:px2rem(18px);
                color:#666;
                margin:auto;
            }
            li.active{
                color:#fe4f53;
                font-size:px2rem(30px);
            }
        }
    }
}
</style>