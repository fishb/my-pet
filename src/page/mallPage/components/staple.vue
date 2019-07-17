<template>
<div class="item">
    <div class="staple" v-for="itm in item" :key="itm.id" v-if="toggle">
        <router-link :to="'/Html/'+itm.id" class="staPT">
            <span>{{itm.title}}</span>
            <span class="more">
                查看全部 >
            </span>
        </router-link>
        <div class="staPB">
            <router-link :to="'/Mallmain/'+list.listid" v-for="list in itm.list" :key="list.id">
                <div class="img"><img :src="imgs.img" v-for="imgs in list.photo.slice(0,1)" :key="imgs.id"></div>
                <span class="staTitle">{{list.name}}</span>
                <span class="staInfo">{{list.desr}}</span>
                <span class="staFF">
                    <em>¥{{list.price}}</em>
                    <i>¥{{list.oprice}}</i>
                </span>
            </router-link>
        </div>    
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import Swiper from 'swiper'
export default {
    name:'Staple',
    data(){
        return{
            item:'',
            toggle:false
        }
    },
    methods:{
        openSease(res) {
            let that = this
            that.$dialog.loading.open('正在加载中！');
            axios.get('https://easy-mock.com/mock/5b237d53936534796c9473f7/cwsc/shoplist')
            .then(function(res){
                that.item = res.data.data
                that.toggle = true
                that.$dialog.loading.close();
                that.$dialog.toast({
                    mes: '加载成功',
                    timeout: 1500,
                    icon: 'success'
                });
            })
            .catch(function(){
                that.$dialog.loading.close();
                that.$dialog.toast({
                    mes: '加载失败',
                    timeout: 1500,
                    icon: 'error'
                });
            })
        }
    },
    computed:{  	
    },
    mounted(){   
        this.$nextTick(this.openSease)
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
.item{
    width:100%;
    height:100%;  
    .staple{
        margin:px2rem(12px) auto;
        background:#fff;
        padding:px2rem(20px);
        display:flex;
        flex-direction:column;
        .staPT{
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
        .staPB{
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
                .staTitle{
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
                .staInfo{
                    font-size:px2rem(20px);
                    color:#949494;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                }
                .staFF{
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
}
</style>
