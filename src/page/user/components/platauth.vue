<template>
    <div class="Platauth">
        <header class="Platauthhead">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">平台认证</h2>
        </header>
        <main class="mainBox">
            <div class="inputBox">
                <div class="inputTy">请填写商家资料</div>
                <div class="inputPay">
                    <div class="name"><em>真实姓名</em></div>
                    <span></span>
                    <input type="text" v-model="username" placeholder="请输入您的真实姓名！">
                </div>
                <div class="inputPay">
                    <div class="name"><em>身份证号</em></div>
                    <span></span>
                    <input type="number" v-model="idnumber" placeholder="请输入您的身份证号！">
                </div>
                <!-- <div class="inputPay">
                    <div class="name" slot="left"><em>所在地区</em></div>
                    <span></span>
                    <input slot="right" type="text" @click.stop="show1 = true" v-model="address" readonly placeholder="请选择所在地区">
                </div>
                <div class="inputPay">
                    <input type="text" placeholder="详细地址" v-model="address2">
                </div> -->
            </div>
            <div class="inputBox">
                <div class="inputTy">法定代表人手持身份证照片(必填)</div>
                <div class="inputfile">
                    <div class="upfile">
                        <img :src="f_img" v-show="!files1">
                        <form ref="formData" v-show="files1">
                        <input type="file" name="image" accept="image/*" class="file" @change="update($event)">
                        </form>
                    </div>
                    <div class="example">
                        <img src="../../../assets/icon/example.png" alt="">
                    </div>
                </div>
            </div>
            <div class="inputBox">
                <div class="inputTy">营业执照(必填)</div>
                <div class="inputfile">
                    <div class="upfile">
                        <img :src="s_img" v-show="!files2">
                        <form ref="formDatas" v-show="files2">
                        <input type="file" name="image" accept="image/*" class="file" @change="updates($event)">
                        </form>
                    </div>
                </div>
            </div>
            <div class="inputBox">
                <div class="inputTy">犬舍照片</div>
                <div class="inputfile">
                    <!-- <div class="imgfile" v-for="imgs in t_img" :key="imgs.id">
                        <img :src="imgs.src">
                    </div> -->
                    <div class="upfile">
                        <img :src="t_img" v-show="!files3">
                        <form ref="formDataBox" v-show="files3">
                            <input type="file" name="image" class="fileBox" accept="image/*" @change="updatess($event)">
                        </form>
                    </div>
                </div>
                <!-- <div class="tips">(附带医生证明等相关有效证件可以提高审核效率)</div> -->
            </div>
        </main>
        <footer class="footerBox">
            <span @click="become">立即认证</span>
        </footer>
        <div class="model" v-show="showClose">
            <span>{{models}}</span>
        </div>
        <!--城市选择-->
        <!-- <yd-cityselect v-model="show1" :callback="result1" :items="district"></yd-cityselect> -->
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
// import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect';
// Vue.component(CitySelect.name, CitySelect);
// /* 前提是已经安装了 ydui-district */
// import District from 'ydui-district/dist/jd_province_city_area_id';
export default {
    name:'Platauthauth',
    data(){
        return{
            username:'',
            idnumber:'',
            models:'',
            showClose:false,
            f_img:'',
            s_img:'',
            t_img:'',
            files1:true,
            files2:true,
            files3:true,
            arr:[]
            //show1: false,
            // address: '',
            // address2:'',
            // district: District
        }
    },
    mounted(){
    },
    methods:{
         history(){
            this.$router.go(-1);
        },
        become(){
            var that = this
            if(that.username==''||that.idnumber==''||that.f_img==''||that.s_img==''||that.t_img==''){
                that.models = '主人，您好像忘了点什么'
                that.showClose = true,
                setTimeout(() => {
                    that.models = ''
                    that.showClose = false
                }, 2000);
            }else{
                var datas = {'username':that.username,'idnumber':that.idnumber,'f_img':that.f_img,'s_img':that.s_img,'t_img':that.t_img}
                axios.post('http://192.168.0.200:1015/mobile/user/ajax_certify',datas)
                .then(function(res){
                    console.log(res)
                    that.models = '请耐心等待审核，即将退出本页'
                    that.showClose = true
                    setTimeout(function(){
                        that.models = ''
                        that.showClose = false
                        that.$router.go(-1)
                    },500)  
                })
            }
        },
        //身份证号
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
            axios.post('http://192.168.0.200:1015/mobile/user/rz_img',param,config)
            .then(function(res){
                if(res.status == 200){
                   _this.$dialog.loading.close();
                   _this.$dialog.toast({
                        mes: '上传成功',
                        timeout: 1500,
                        icon: 'success'
                    })
                    _this.files1 = !_this.files1
                   _this.f_img = res.data.src
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
        //营业执照
        updates(e){
            var _this = this
            let file = e.target.files[0];           
            let param = new FormData(this.$refs.formDatas); //创建form对象
            param.append('tweetPic',file,file.name);//通过append向form对象添加数据     
            //param.append('chunk','0');//添加form表单中其他数据
            console.log(param.get('tweetPic')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };  //添加请求头
            _this.$dialog.loading.open('上传ing');
            axios.post('http://192.168.0.200:1015/mobile/user/rz_img',param,config)
            .then(function(res){
                if(res.status == 200){
                   _this.$dialog.loading.close();
                   _this.$dialog.toast({
                        mes: '上传成功',
                        timeout: 1500,
                        icon: 'success'
                    })
                    _this.files2 = !_this.files2
                   _this.s_img = res.data.src
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
        //宠舍(单张)
        updatess(e){
            var _this = this
            let file = e.target.files[0];           
            let param = new FormData(this.$refs.formDataBox); //创建form对象
            param.append('tweetPic',file,file.name);//通过append向form对象添加数据     
            //param.append('chunk','0');//添加form表单中其他数据
            console.log(param.get('tweetPic')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };  //添加请求头
            _this.$dialog.loading.open('上传ing');
            axios.post('http://192.168.0.200:1015/mobile/user/rz_img',param,config)
            .then(function(res){
                if(res.status == 200){
                   _this.$dialog.loading.close();
                   _this.$dialog.toast({
                        mes: '上传成功',
                        timeout: 1500,
                        icon: 'success'
                    })
                    _this.files3 = !_this.files3
                    _this.t_img = res.data.src
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
        //宠舍(多张备用)
        // updateBox(e){
        //     var _this = this
        //     let file = e.target.files[0];           
        //     let param = new FormData(this.$refs.formDataBox); //创建form对象
        //     param.append('tweetPic',file,file.name);//通过append向form对象添加数据     
        //     //param.append('chunk','0');//添加form表单中其他数据
        //     //console.log(param.get('tweetPic')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        //     let config = {
        //         headers:{'Content-Type':'multipart/form-data'}
        //     };  //添加请求头 
        //     if(_this.arr.length >=6){
        //         _this.$dialog.toast({
        //             mes: '超出上传张数',
        //             timeout: 1500,
        //             icon: 'error'
        //         })
        //         return 
        //     }else{
        //         _this.$dialog.loading.open('上传中');
        //         axios.post('http://192.168.0.200:1015/mobile/user/rz_img',param,config)
        //         .then(function(res){
        //             if(res.status == 200){
        //                 var datas = res.data
        //                 _this.$dialog.loading.close()
        //                 _this.$dialog.toast({
        //                     mes: res.msg,
        //                     timeout: 1500,
        //                     icon: 'success'
        //                 })
        //                 _this.arr.push(datas)
        //                 _this.t_img = _this.arr
        //             }  
        //         })
        //         .catch(function(error){
        //             _this.$dialog.toast({
        //                 mes: '请求失败',
        //                 timeout: 1500,
        //                 icon: 'error'
        //             })
        //         }) 
        //     }
        // }
    }
}
</script>
<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Platauth{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;  
    .Platauthhead{
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
        background:#f7f7f7;
        .inputBox{
           display:flex;
           flex-direction:column; 
           .tips{
               height:px2rem(50px);
               line-height:px2rem(50px);
               font-size:px2rem(24px);
               color:#999;
               margin:px2rem(16px);
           }
           .inputTy{
               height:px2rem(90px);
               line-height:px2rem(90px);
               background:#f2f1f7;
               font-size:px2rem(26px);
               padding:0 px2rem(16px);
               color:#999;
               display:flex;
            }
            .inputPay{
                display:flex;
                justify-content:space-between;
                padding:0 px2rem(16px);
                height:px2rem(80px);
                background:#fff;
                border-bottom:px2rem(1px) solid #ddd;
                .name{
                    height:px2rem(50px);
                    line-height:px2rem(50px);
                    margin:auto 0;
                    font-size:px2rem(24px);
                }
                span{
                    width:px2rem(2px);
                    height:px2rem(50px);
                    background:#ddd;
                    margin:auto px2rem(16px);
                }
                input{
                    flex:1;
                    padding:0 px2rem(16px);
                    height:px2rem(80px);
                    line-height:px2rem(80px);
                    color:#000;
                    font-size:px2rem(22px);
                }
            }
            .inputPay:last-child{
                border-bottom:0;
            }
            .inputfile{
                //height:px2rem(215px);
                display:flex;
                flex-wrap:wrap;
                padding:px2rem(16px);
                .imgfile{
                    width:px2rem(215px);
                    height:px2rem(215px);
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .upfile{
                    width:px2rem(215px);
                    height:px2rem(215px);
                    background-color:#fff;
                    margin:auto 0;  
                    form{
                        width:100%;
                        height:100%;
                        background-image:url(../../../assets/icon/addBox.png);
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
                    .fileBox{
                        opacity: 0;
                        filter: alpha(opacity=0);
                        cursor: pointer;
                    }
                    img{
                        width:100%;
                        height:100%;
                    }  
                }
                .example{
                    flex:1;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
            }
        }
    }
    .footerBox{
        height:px2rem(80px);
        background:#fe4f53;
        line-height:px2rem(80px);
        text-align:center;
        display:flex;
        span{
            width:100%;
            margin:0;
            font-size:px2rem(24px);
            color:#fff;
        }
    }
}
</style>