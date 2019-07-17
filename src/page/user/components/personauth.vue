<template>
    <div class="person">
        <header class="Personhead">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">个人认证</h2>
        </header>
        <main class="mainBox">
            <div class="inputBox">
                <div class="inputTy">请填写个人身份信息</div>
                <div class="inputPay">
                    <div class="name"><em>真实姓名</em></div>
                    <span></span>
                    <input type="text" v-model="username" placeholder="请输入您的真实姓名！">
                </div>
                <div class="inputPay">
                    <div class="name"><em>身份证号</em></div>
                    <span></span>
                    <input type="text" v-model="idnumber" placeholder="请输入您的身份证号！">
                </div>
            </div>
            <div class="inputBox">
                <div class="inputTy">法定代表人手持身份证照片(必填)</div>
                <div class="inputfile">
                    <div class="upfile">
                        <img :src="f_img" v-show="!files">
                        <form ref="formData" v-show="files">
                            <input type="file" name="image" accept="image/*" class="file" @change="update($event)">
                        </form>
                    </div>
                    <div class="example">
                        <img src="../../../assets/icon/example.png" alt="">
                    </div>
                </div>
            </div>
        </main>
        <footer class="footerBox" @click="become">
            <span>立即认证</span>
        </footer>
        <div class="model" v-show="showClose">
            <span>{{models}}</span>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
export default {
    name:'Personauth',
    data(){
        return{
            username:'',
            idnumber:'',
            models:'',
            showClose:false,
            files:true,
            f_img:''
        }
    },
    mounted(){
    },
    methods:{
        history(){
            this.$router.go(-1);
        },
        //认证提交
        become(){
            var that = this
            if(that.username==''||that.idnumber==''||that.f_img==''){
                that.models = '主人，您好像忘了点什么'
                that.showClose = true,
                setTimeout(() => {
                    that.models = ''
                    that.showClose = false
                }, 2000);
            }else{
                var datas = {'username':that.username,'idnumber':that.idnumber,'f_img':that.f_img}
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
            axios.post('http://192.168.0.200:1015/mobile/user/rz_img',param,config)
            .then(function(res){
                if(res.status == 200){
                   _this.$dialog.loading.close();
                   _this.$dialog.toast({
                        mes: res.msg,
                        timeout: 1500,
                        icon: 'success'
                    })
                    _this.files = !_this.files
                   _this.f_img = 'http://192.168.0.200:1015'+ res.data.src
                }    
            }) 
            .catch(function(error){
                _this.$dialog.toast({
                    mes: res.msg,
                    timeout: 1500,
                    icon: 'error'
                })
            })      
        }
    }
}
</script>

<style lang="scss" scoped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.person{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;  
    .Personhead{
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
                padding:0 px2rem(16px);
                .upfile{
                    width:px2rem(215px);
                    height:px2rem(215px);
                    background-color:#fff;
                    margin:auto px2rem(16px) auto 0;
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
