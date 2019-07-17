<template>
  <div class="Center">
      <!--三项-->
      <main class="mainBox" ref="mainBox">
          <!--头像区域-->
          <section class="userTop">
              <div class="headBox">
                  <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
                  <a href="#">星级规则?</a>
              </div>
              <div class="nameBox">
                  <div class="img">
                      <img :src="users_info.head_pic">
                  </div>
                  <div class="name">{{users_info.nickname}}</div>
                  <div class="five">
                    <template v-if="parseInt(level%2)==0">
                        <li class="On" v-for="l in parseInt(level/2)" :key="l.id"></li>
                        <li v-for="f in parseInt((five-level)/2)" :key="f.id"></li>
                    </template>
                    <template v-else>
                        <li class="On" v-for="l in parseInt(level-1)/2" :key="l.id"></li>
                        <li class="Os"></li>
                        <li v-for="f in parseInt(five-level-1)/2" :key="f.id"></li>
                    </template>
                  </div>
                  <span>{{users_info.city}}</span>
              </div>
          </section>
          <!--拥有宠物-->
          <section class="userMain" ref="userMain" :class="scrolled?'isFixed':''">
              <div class="nestingRoute">
                <router-link :to="{name:'Cnimal'}">宠物</router-link>
                <router-link :to="{name: 'Cnmments',params:{comment:comment}}">评价</router-link>
                <router-link :to="{name: 'Crief',params:{user_info:users_info}}">简介</router-link>
              </div>
              <router-view/>
          </section>
      </main>
      <!--发布-->
      <footer class="footer">
          <router-link :to="{path:'/Relepet'}">
              <img src="../assets/icon/fb.png" alt="">
              <span>发布宠物</span>
          </router-link>
          <router-link :to="{name:'Means'}">
              <img src="../assets/icon/bj.png" alt="">
              <span>编辑资料</span>
          </router-link>
      </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Center',
    data(){
        return{
            scrolled: false,
            list:'',
            users_info:'',
            comment:'',
            five:10,
            level:'',
            brief:''
        }
    },
    methods:{ 
        history:function(){
            this.$router.go(-1);
        },
        handleScroll () {
            var scrollTops = this.$refs.mainBox.scrollTop
            var offsets = this.$refs.userMain.offsetTop
            if(offsets<=scrollTops){
                this.scrolled = true
            }else{
                this.scrolled = false
            }
        },
        come(){
            var _this = this
            axios.post('http://192.168.0.200:1015/mobile/user/user_info')
            .then(function(res){
                console.log(res.data)
                _this.list = res.data
                _this.users_info = _this.list.users_info
                _this.level = (_this.users_info.level)*2
                _this.comment = _this.list.comment
                _this.$dialog.toast({
                    mes: res.msg,
                    timeout: 1500,
                    icon: 'success'
                })
            })
            .catch(function(error){
                _this.$dialog.toast({
                    mes: res.msg,
                    timeout: 1500,
                    icon: 'error'
                })
                
            })
        }
    },
    mounted(){
        this.$nextTick(this.come)
        //this.$refs.mainBox.addEventListener('scroll',this.handleScroll)
    },
    created(){   
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Center{
    width:100%;
    height:100%;
    position:relative;
    .isFixed{
        width:100%;
        position:fixed;
        top:0;
        z-index:999;
    }
    .mainBox{
        width:100%;
        position:absolute;
        top:0;
        bottom:px2rem(80px);
        overflow-y:scroll;
        .userTop{
            height:px2rem(430px);
            display:flex;
            flex-direction:column;
            background:#fff;
            .headBox{
                height:px2rem(75px);
                display:flex;
                justify-content:space-between;
                span{
                    width:px2rem(75px);
                    height:px2rem(75px);
                    display:flex;
                    i{
                        font-size:px2rem(32px);
                        margin:auto;
                        color:#999;
                    }
                }
                a{
                    padding:0 px2rem(12px);
                    font-size:px2rem(28px);
                    color:#999;
                    line-height:px2rem(75px);
                }
            }  
            .nameBox{
               flex:1;
               display:flex;
               flex-direction:column; 
               .img{
                   width:px2rem(140px);
                   height:px2rem(140px);
                   margin:px2rem(16px) auto;
                   border-radius:50%;
                   overflow:hidden;
                   img{
                       width:100%;
                       height:100%;
                   }
               }
               .name{
                   font-size:px2rem(26px);
                   color:#000;
                   margin:0;
                   text-align:center;
               }
               .five{
                   height:px2rem(25px);
                   display:flex;
                   justify-content:center;
                   margin:px2rem(6px) auto;
                   li{
                       width:px2rem(25px);
                       height:px2rem(25px);
                       margin:auto px2rem(4px);
                       background:url(../assets/icon/five.png) no-repeat center;
                       background-size:cover;
                   }
                   li.Os{
                      background:url(../assets/icon/fiveO.png) no-repeat center;
                      background-size:cover; 
                   }
                   li.On{
                       background:url(../assets/icon/fiveOn.png) no-repeat center;
                       background-size:cover;
                   }
               }
               span{
                   font-size:px2rem(24px);
                   color:#999;
                   margin:0 0 px2rem(16px);
                   text-align:center;
               }
            }  
        }
        .userMain{
            height:auto;
            overflow-y:scroll;
            background:#fff;
            .nestingRoute{
                display:flex;
                justify-content:space-between;
                height:px2rem(80px);
                line-height:px2rem(80px);
                background:#fff;
                border-bottom:px2rem(1px) solid #eee;
                a{
                    flex:1;
                    text-align:center;
                    font-size:px2rem(28px);
                }
                a.router-link-exact-active{
                    color:#ec1614;
                    position:relative;
                }
                a.router-link-exact-active:after{
                    content:'';
                    position:absolute;
                    left:50%;
                    bottom:0;
                    margin-left:-25%;
                    width:50%;
                    background:#ec1614;
                    height:px2rem(2px);
                }
            }
        }
        
    }
    .footer{
        position:absolute;
        width:100%;
        bottom:0;
        height:px2rem(80px);
        background:#fafafa;
        display:flex;
        a{
            flex:1;
            display:flex;
            justify-content:center;
            img{
                width:px2rem(40px);
                height:px2rem(40px);
                margin:auto px2rem(12px);
            }
            span{
                font-size:px2rem(26px);
                margin:auto 0;
            }
        }
    }
}
</style>
