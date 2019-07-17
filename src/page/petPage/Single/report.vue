<template>
<div class="Report">
    <header class="headerBox">
        <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
        <h2 class="Title">我要举报</h2>
    </header>
    <main class="mainBox">
        <div class="checkBox">
            <div class="checkBtn" v-for="(typ,typIndex) in type" :key="typIndex" :class="num==typIndex?'checkEd':''" @click="tab(typIndex)">
                <div class="checkR"></div>
                <span>{{typ.name}}</span>
            </div>
        </div>
        <div class="domain">
            <div class="tyTitle">举报详情</div>
            <textarea name="" id="" placeholder="请输入您的举报内容(500字以内)"></textarea>
        </div>
        <div class="phoneB">
            <input type="text" placeholder="请输入您的手机号码">
        </div>
        <div class="proof">
            <div class="tyTitle">举报证据（必填，微信付款截图、医院化验单照片等）</div>
            <div class="fileBox">
                <div class="imgfile" v-for="imgs in imagefiles" :key="imgs.id">
                    <img :src="imgs.src">
                </div>
                <form class="upfile">
                    <input type="file" name="image" accept="image/*" class="fileBox" @change="updates($event)">
                </form>
            </div>
        </div>
        <div class="referBtn">
            <span>提交</span>
        </div>
    </main>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Report',
    data(){
        return{
            id:this.$route.params.id,
            typeS:'',
            num:'',
            type:[{name:'商家信息有误'},{name:'拨打不通电话'},{name:'低报价格'},{name:'存在诈骗行为'}],
            imagefiles:'',
            arr:[] 
        }
    },
    methods:{
        history:function(){
            this.$router.go(-1);
        },
        tab(index){
            this.num = index
            this.typeS = this.type[this.num].name
        },
        //多图上传
        updates(e){
            var _this = this
            let file = e.target.files[0];           
            let param = new FormData(this.$refs.formDatas); //创建form对象
            param.append('tweetPic',file,file.name);//通过append向form对象添加数据     
            //param.append('chunk','0');//添加form表单中其他数据
            //console.log(param.get('tweetPic')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };  //添加请求头 
            if(_this.arr.length >=6){
                _this.$dialog.toast({
                    mes: '超出上传张数',
                    timeout: 1500,
                    icon: 'error'
                })
                return 
            }else{
                _this.$dialog.loading.open('上传中');
                axios.post('http://192.168.0.200:1015/mobile/user/uploadAjax',param,config)
                .then(function(res){
                    if(res.status == 200){
                        var datas = res.data
                        _this.$dialog.loading.close()
                        _this.$dialog.toast({
                            mes: res.msg,
                            timeout: 1500,
                            icon: 'success'
                        })
                        _this.arr.push(datas)
                        _this.imagefiles = _this.arr
                    }  
                })
                .catch(function(error){
                    _this.$dialog.toast({
                        mes: '请求失败',
                        timeout: 1500,
                        icon: 'error'
                    })
                }) 
            }
        }
    },
    mounted(){
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
.Report{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .headerBox{
        height:px2rem(75px);
        background:#fe4f53;
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
        .checkBox{
            height:px2rem(135px);
            background:#fff;
            display:flex;
            flex-wrap:wrap;
            padding:0 px2rem(26px);
            .checkBtn{
                margin:auto 0;
                width:50%;
                display:flex;
                justify-content:flex-start;
                .checkR{
                    margin:auto 0;
                    width:px2rem(40px);
                    height:px2rem(40px);
                    background:url(../../../assets/icon/nocheck.png) no-repeat center;
                    background-size:cover;
                }
                span{
                    margin:auto px2rem(12px);
                    font-size:px2rem(26px);
                    color:#000;
                }
            }
            .checkBtn:nth-child(2n){
                justify-content:flex-end;
            }
            .checkEd{
                .checkR{
                   background:url(../../../assets/icon/checked.png) no-repeat center;
                    background-size:cover; 
                }
            }
        }
        .domain{
            height:px2rem(240px);
            display:flex;
            flex-direction:column;
            .tyTitle{
                height:px2rem(60px);
                line-height:px2rem(60px);
                padding:0 px2rem(26px);
                font-size:px2rem(24px);
                color:#46474d;
            }
            textarea{
                border:0;
                background:#fff;
                height:px2rem(180px);
                padding:px2rem(16px);
                font-size:px2rem(22px);
                color:#999;
            }
        }
        .phoneB{
            margin:px2rem(26px) auto;
            height:px2rem(70px);
            background:#fff;
            padding:0 px2rem(16px);
            display:flex;
            input{
                flex:1;
                font-size:px2rem(22px);
                color:#999;
            }
        }
        .proof{
            display:flex;
            flex-direction:column;
            overflow:hidden;
            .tyTitle{
                height:px2rem(60px);
                line-height:px2rem(60px);
                padding:0 px2rem(26px);
                font-size:px2rem(24px);
                color:#46474d;
            }
            .fileBox{
                display:flex;
                flex-wrap:wrap;
                padding:px2rem(16px);
                .imgfile{
                    width:px2rem(202px);
                    height:px2rem(202px);
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .upfile{
                    width:px2rem(202px);
                    height:px2rem(202px);
                    background-color:#fff;
                    margin:auto 0;
                    background-image:url(../../../assets/icon/addBox.png);
                    background-size:px2rem(120px);
                    background-repeat:no-repeat;
                    background-position:center;
                    input{
                        width:100%;
                        height:100%;
                    }
                    .fileBox{
                        opacity: 0;
                        filter: alpha(opacity=0);
                        cursor: pointer;
                    }
                }
            }
        }
        .referBtn{
            margin:px2rem(36px);
            display:flex;
            background:#fe4f53;
            border-radius:px2rem(16px);
            height:px2rem(70px);
            box-shadow:-(px2rem(2px)) px2rem(2px) px2rem(2px) #bac0c6;
            span{
                margin:auto;
                font-size:px2rem(26px);
                color:#fff;
            }
        }
    }
}
</style>