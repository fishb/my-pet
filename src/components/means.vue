<template>
    <div class="means">
        <header class="meansHead">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">个人资料</h2>
            <span @click="keep"><em>保存</em></span>
        </header>
        <main class="mainBox">
            <div class="inputBox">
                <div class="inputTy">个人资料</div>
                <div class="userTy first">
                    <div class="label">昵称</div>
                    <input type="text" v-model="nickname"> 
                </div>
                <div class="userImg" @click="aboutCamera">
                    <img :src="head_pic">
                    <h6>修改头像</h6>
                    <span><i class="iconfont icon-arrow-right"></i></span>
                </div>
                <div class="userTy">
                    <div class="label">联系人</div>
                    <input type="text" v-model="username">
                </div>
                <div class="userTy">
                    <div class="label">手机号</div>
                    <h6>{{mobile}}</h6>
                </div>
                <div class="userTy">
                    <div class="label" slot="left">所在地</div>
                    <input slot="right" type="text" @click.stop="show1=true" v-model="city" readonly placeholder="请选择所在地区">
                    <span><i class="iconfont icon-arrow-right"></i></span>
                </div>
                <div class="userTy">
                    <input type="text" v-model="address" placeholder="请输入详细地址">
                </div> 
            </div>
            <div class="inputBox">
                <div class="inputTy">商家简介</div>
                <div class="userTextare">
                    <textarea v-model="user_show" placeholder="请输入商家简介"></textarea>
                </div>
            </div>
            <div class="inputBox">
                <div class="inputTy">宠舍和荣誉证书(最多6张)</div>
                <div class="inputfile">
                    <div class="imgfile" v-for="imgs in imagefiles" :key="imgs.id">
                        <img :src="imgs.src">
                    </div>
                    <form ref="formDatas" class="upfile">
                        <input class="fileBox" type="file" name="image" accept="image/*" @change="updates($event)">
                    </form>
                </div>
            </div>
        </main>
        <!--头像上传弹窗-->
        <section class="dilogBox" v-show="camera">
            <div class="imgBox">
                <div class="imgBoxs">
                    <h5>设置头像</h5>
                    <div class="camera" @click="btn_camera">相机</div>
                    <div class="album" @click="btn_album">从相册选取</div>
                </div>
                <div class="result" @click="aboutCamera">
                    <span>取消</span>
                </div>
                <!--隐形的上传按钮-->
                <form ref="formData">
                    <input class="btnF" ref="btn_camera" type="file" name="image" accept="image/*" capture="camera" @change="update($event)">
                    <input class="btnF" ref="btn_album" type="file" name="image" accept="image/*" @change="update($event)">
                </form> 
            </div>
        </section>
        <!--城市选择-->
        <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect';
Vue.component(CitySelect.name, CitySelect);
/* 前提是已经安装了 ydui-district */
import District from 'ydui-district/dist/jd_province_city_area_id';
export default {
    name:'Means',
    data(){
        return{ 
            show1: false,
            camera:false,
            person:'', //资料
            nickname:'', //昵称
            username:'', //联系人
            mobile:'', //电话
            head_pic:'', //头像
            user_show:'', //简介
            city:'', // 省市区
            address: '', //详细地址
            district: District,
            imagefiles:'',
            arr:[] 
        }
    },
    computed:{
    },
    methods:{
        history(){
            this.$router.go(-1);
        },
        result1(ret) {
            this.city = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
        },
        aboutCamera(){
            if(this.camera == false){
                this.camera = true
            }else{
                this.camera = false
            }
        },
        //点击拍照直接调用摄像头
        btn_camera(){
            this.camera = false
            this.$refs.btn_camera.click()
        },
        btn_album(){
            this.camera = false
            this.$refs.btn_album.click()
        },
        //单图上传
        update(e){
            var _this = this
            let file = e.target.files[0];           
            let param = new FormData(this.$refs.formData); //创建form对象
            param.append('tweetPic',file,file.name);//通过append向form对象添加数据     
            //param.append('chunk','0');//添加form表单中其他数据
            console.log(param.get('tweetPic')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };  //添加请求头
            _this.$dialog.loading.open('上传ing');
            axios.post('http://192.168.0.200:1015/mobile/user/uploadAjax',param,config)
            .then(function(res){
                if(res.status == 200){
                   _this.$dialog.loading.close();
                   _this.$dialog.toast({
                        mes: res.msg,
                        timeout: 1500,
                        icon: 'success'
                    })
                   _this.head_pic = res.data.src
                }    
            }) 
            .catch(function(error){
                _this.$dialog.toast({
                    mes: res.msg,
                    timeout: 1500,
                    icon: 'error'
                })
            })      
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
        },
        //个人资料入场调用
        come(res){
            var _this = this
            _this.$dialog.loading.open('上传ing');
            axios.post('http://192.168.0.200:1015/mobile/user/userinfo')
            .then(function(res){
                _this.$dialog.loading.close();
                console.log(res.data)
                _this.person = res.data
                _this.nickname = _this.person.nickname
                _this.head_pic = _this.person.head_pic
                _this.username = _this.person.username
                _this.mobile = _this.person.mobile
                _this.user_show = _this.person.user_show
                _this.city = _this.person.city
                _this.address = _this.person.address
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
        },
        //保存用户资料
        keep(){
           var _this = this
           var datas = {'city':_this.city,'address':_this.address,'head_pic':_this.head_pic,'nickname':_this.nickname,'username':_this.username,'user_show':_this.user_show,'imagefiles':_this.imagefiles}
           axios.post('http://192.168.0.200:1015/mobile/user/edit_userinfo',datas)
           .then(function(res){
               _this.$dialog.toast({
                    mes: res.msg,
                    timeout: 1500,
                    icon: 'success'
               })
               _this.$router.go(-1)
           }) 
           .catch(function(){
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
        console.log(this.$refs.btn_camera)
    }
}
</script>

<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.means{
    width:100%;
    height:100%;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;  
    .meansHead{
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
        span:last-child{
            cursor:pointer;
            right:0;
            em{
                font-size:px2rem(26px);
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
        //background:#f2f1f7;
        .inputBox{
           display:flex;
           flex-direction:column;
           .inputTy{
               height:px2rem(60px);
               line-height:px2rem(60px);
               //background:#f2f1f7;
               font-size:px2rem(26px);
               padding:0 px2rem(16px);
               color:#999;
               display:flex;
            }
            .userImg{
                height:px2rem(160px);
                background:#fff;
                border-top:px2rem(1px) solid #ddd;
                padding:0 px2rem(26px);
                display:flex;
                img{
                    width:px2rem(110px);
                    height:px2rem(110px);
                    margin:auto 0;
                    border-radius:50%;
                }
                h6{
                    font-size:px2rem(28px);
                    font-weight:normal;
                    color:#999;
                    margin:auto px2rem(26px);
                } 
                span{
                    flex:1;
                    display:flex;
                    justify-content:flex-end;
                    i{
                        font-size:px2rem(28px);
                        color:#999;
                        margin:auto 0;
                    }
                }
            }
            .userTy{
                height:px2rem(75px);
                background:#fff;
                border-top:px2rem(1px) solid #ddd;
                padding:0 px2rem(26px);
                display:flex;
                .label{
                    width:px2rem(200px);
                    font-size:px2rem(28px);
                    color:#000;
                    margin:auto 0;
                }
                input{
                    flex:1;
                    font-size:px2rem(28px);
                    color:#000;
                }
                h6{
                    font-size:px2rem(28px);
                    font-weight:normal;
                    color:#999;
                    margin:auto px2rem(26px);
                }
                span{
                   flex:1;
                    display:flex;
                    justify-content:flex-end;
                    i{
                        font-size:px2rem(28px);
                        color:#999;
                        margin:auto 0;
                    } 
                }
            }
            .first{
                border-top:0;
            }
            //简介
            .userTextare{
                width:100%;
                height:px2rem(250px);
                textarea{
                    width:100%;
                    height:px2rem(250px);
                    font-size:px2rem(26px);
                    border:0;
                    padding:px2rem(26px);
                    color:#000;
                    background:#fff;
                }
            }
            .inputfile{
                display:flex;
                flex-wrap:wrap;
                padding:px2rem(16px);
                background:#fff;
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
                    background-color:#f5f5f5;
                    margin:auto 0;
                    background-image:url(../assets/icon/addBox.png);
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
    }
    //弹窗
    .dilogBox{
        position:fixed;
        top:0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.6);
        .imgBox{
            position:fixed;
            bottom:0;
            width:100%;
            height:auto;
            //height:px2rem(380px);
            padding:0 px2rem(32px);
            .imgBoxs{
                height:px2rem(220px);
                display:flex;
                flex-direction:column;
                border-radius:px2rem(12px);
                background:#fff;
                h5{
                    font-size:px2rem(24px);
                    color:#999;
                    height:px2rem(75px);
                    line-height:px2rem(75px);
                    text-align:center;
                    font-weight:normal;
                    border-bottom:px2rem(1px) solid #eee;
                }
                .camera{
                    height:px2rem(70px);
                    line-height:px2rem(70px);
                    text-align:center;
                    font-size:px2rem(36px);
                    color:#31b2ff;
                    border-bottom:px2rem(1px) solid #eee;
                }
                .album{
                    height:px2rem(70px);
                    line-height:px2rem(70px);
                    text-align:center;
                    font-size:px2rem(36px);
                    color:#31b2ff; 
                }
            }
            .result{
                height:px2rem(70px);
                background:#fff;
                display:flex;
                margin:px2rem(26px) 0;
                border-radius:px2rem(12px);
                span{
                    margin:auto;
                    font-size:px2rem(36px);
                    color:#31b2ff;
                }
            }
        }
    }
    .btnF{
        width:px2rem(10px);
        height:px2rem(10px);
        opacity:0;
        margin:0 px2rem(10px);
        position:fixed;
        left:-(px2rem(999px));
    }
    .btnF:last-child{
        left:px2rem(999px);
    }
}
</style>
