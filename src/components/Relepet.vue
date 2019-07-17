<template>
    <section class="Relepet">
        <header class="headerBox">
            <span><i class="iconfont icon-fanhui2" @click="history"></i></span>
            <h2 class="Title">编辑宠物信息</h2>
        </header>
        <main class="mainBox">
            <!---名称-->
            <section class="tyBox">
                <em>宠物名称</em>
                <input type="text" placeholder="" v-model="petName" maxlength="6">
            </section>
            <!--年龄-->
            <section class="tyBox">
                <em>年龄(月-天)</em>
                <input type="text" placeholder="" v-model="petAge">
            </section>
            <!---价格-->
            <section class="tyBox">
                <em>宠物价格(元)</em>
                <input type="number" placeholder="" v-model="petPrice">
            </section>
            <!--类别-->
            <section class="classicBox" @click="classicBox">
                <em>宠物类别</em>
                <span>{{classiced.f_name}}、{{classiced2.name}}<i class="iconfont icon-youjiantou"></i></span>
            </section>
            <!--性别-->
            <section class="sexBtn" @click="sexBox">
                <em>性别</em>
                <span>{{sexIn}}<i class="iconfont icon-youjiantou"></i></span>
            </section>
            <!--品级-->
            <section class="sexBtn" @click="pjBox">
                <em>品级</em>
                <span>{{petIn}}<i class="iconfont icon-youjiantou"></i></span>
            </section>
            <!--宠物图片-->
            <section class="imgBox">
                <div class="imgTy">萌宠图片、视频</div>
                <div class="inputfile">
                    <div class="imgfile" v-for="imgs in imagefiles" :key="imgs.id">
                        <img :src="imgs.src">
                    </div>
                    <div class="imgfile" v-for="videos in videofiles" :key="videos.id">
                        <video :src="videos.src" autoplay controls></video>
                    </div>
                    <form ref="formData" class="upfile">
                    <input class="fileBox" type="file" name="image" @change="imgVideo($event)">
                    </form>
                </div>
            </section>
            <!--疫苗信息-->
            <section class="Vaccine">
                <h5>疫苗信息(选填)</h5>
                <div class="VaccineBox">
                    <Vaccine v-on:vaccineValue="vaccineValue" v-for="(Vacc,Vindex) in Vaccine" :key="Vindex" :mess="Vacc"></Vaccine>
                </div>
                <span class="addBox" @click="addVaccBtn">
                    <i class="iconfont icon-iconjia-copy"></i><em>疫苗信息</em>
                </span>
            </section>
            <!--驱虫信息-->
            <section class="Vaccine">
                <h5>驱虫信息(选填)</h5>
                <div class="VaccineBox">
                    <Anthel v-on:anthelValue="anthelValue" v-for="(anthel,Aindex) in Anthel" :key="Aindex" :mess="anthel"></Anthel>
                </div>
                <span class="addBox" @click="addAnthBtn">
                    <i class="iconfont icon-iconjia-copy"></i><em>驱虫信息</em>
                </span>
            </section>
            <!--配送信息-->
            <section class="psBox">
                <h5>配送信息</h5>
                <div class="psCon" @click="Ferry">
                    <em>外地</em>
                    <span>{{Ferrymoney}}元<i class="iconfont icon-youjiantou"></i></span>
                </div>
                <div class="psCon" @click="Citywide">
                    <em>同城</em>
                    <span>{{Citymoney}}元<i class="iconfont icon-youjiantou"></i></span>
                </div>
            </section>
            <!--血缘关系-->
            <section class="xyBox">
                <h5>血缘关系</h5>
                <div class="dadBox">
                    <span>爸爸(上传此宠物爸爸照片，仅一张)</span>
                    <div class="infile">
                        <img :src="Dads" v-show="!formDad">
                        <form ref="formsDad" v-show="formDad">
                            <input class="file" type="file" name="image" accept="image/*" @change="imgDad($event)">
                        </form>
                    </div>
                </div>
                <div class="dadBox">
                    <span class="blue">妈妈(上传此宠物妈妈照片，仅一张)</span>
                    <div class="infile">
                        <img :src="MMs" v-show="!formMM">
                        <form ref="formsMM" v-show="formMM">
                            <input class="file" type="file" name="image" accept="image/*" @change="imgMM($event)">
                        </form>
                    </div>
                </div>
            </section>
            <!--描述-->
            <div class="tyBtn">
                <textarea name="" id="" placeholder="宠物描述(选填)" v-model="petContent"></textarea>
            </div>
            <!--确认发布-->
        <footer class="footers" @click="publish">
            <span><em>确认发布</em></span>
        </footer>
        </main>
        <!--性别弹窗-->
        <section class="sexBox" v-if="dilog"> 
            <div class="container">
                <div class="containerT">
                    <span @click="sexBox"><em>取消</em></span>
                    <h5>性别</h5>
                    <span @click="sexBox"><em>确定</em></span>
                </div>
                <ul class="containerM">
                    <li v-for="(se,seIndex) in sex" @click="sexTab(seIndex)" :class="{active:seIndex == num}" :key="seIndex">
                        <span>{{se}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <!--品级弹窗-->
        <section class="sexBox" v-if="dilogP"> 
            <div class="container">
                <div class="containerT">
                    <span @click="pjBox"><em>取消</em></span>
                    <h5>品级</h5>
                    <span @click="pjBox"><em>确定</em></span>
                </div>
                <ul class="containerM">
                    <li v-for="(pj,pjIndex) in petLevel" @click="petLevels(pjIndex)" :class="{active:pjIndex == num}" :key="pjIndex">
                        <span>{{pj}}</span>
                    </li>
                </ul>
            </div>
        </section>
        <!--宠物分类弹窗-->
        <section class="sexBox cwfl" v-if="dilogs">
            <div class="container">
                <div class="containerT">
                    <span @click="classicBox"><i class="iconfont icon-guanbi2"></i></span>
                    <h5>所属分类</h5>
                    <span @click="classicBox"><i class="iconfont icon-zhengque-icon-"></i></span>
                </div>
                <div class="containerC">
                    <ul>
                        <li v-for="(pet,index) in classic" @click="tab(index)" :class="{active:index == num}" :key="index">{{pet.f_name}}
                        </li>
                    </ul>
                    <ul class="select" v-for="(pet,index) in classic" v-if="index==num" :key="index">
                        <li v-for="(name,nameindex) in pet.s_name" @click="nameBox(nameindex)" :class="namenum == nameindex ?'active':''" :key="nameindex">{{name.name}}</li>
                    </ul>
                </div>
            </div>
        </section>
        <!--外地配送组件传来两个值-->
        <Ferry v-if="showName" v-on:childValue="childValue"></Ferry>
        <!--同城配送组件传参(不会写怎么办)-->
        <Citywide v-if="showName2" v-on:cityWide="cityWide"></Citywide>
    </section>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios
import Ferry from '@/components/relepet/ferry'
import Citywide from '@/components/relepet/citywide'
import Vaccine from '@/components/relepet/vaccine'
import Anthel from '@/components/relepet/anthel'
export default {
    name:'Relepet',
    components:{
        Ferry,Citywide,Vaccine,Anthel
    },
    data(){
        return{
            petName:'',
            petAge:'',
            petPrice:'',
            petContent:'',
            imagefiles:'', //上传的图片数组
            videofiles:'',//上传的视频
            Vaccine:[],
            Anthel:[],
            show1: false,
            model1: '',
            district:'',
            Ferrymoney:'',
            Citymoney:'',
            showName:false,
            showName2:false,
            sex:['公','母'],//性别
            sexIn:'',
            petLevel:['宠物级','双血统','英中混血'],//品级
            petIn:'',
            dilog:false,
            dilogs:false,
            dilogP:false,
            toggle:false,
            num:'',//索引
            names:'',
            classiced:'',
            classiced2:'',
            classic:'',
            imgArr:[],//图片上传数组
            videoArr:[],//视频上传数组
            formDad:true,//宠物爸爸
            formMM:true, //宠妈
            Dads:'',
            MMs:'',
            snum:'',
            anum:'',
            namenum:''
        }
    },
    computed(){
    },
    methods:{
        history:function(){
            this.$router.go(-1);
        },
        Ferry(){
            this.showName = true
        },
        Citywide(){
            this.showName2 = true
        },
        sexTab(index){
            this.num = index
            this.sexIn = this.sex[this.num]
        },
        tab(index){
            this.classiced = ''
            this.classiced2 = ''
            this.namenum = ''
            this.num = index
            this.classiced = this.classic[this.num]
        },
        nameBox(index){
            if(this.classiced==''){
                this.num = 0
                this.classiced = this.classic[0]
                this.namenum = index
                this.classiced2 = this.classiced.s_name[this.namenum]
            }else{
                this.namenum = index
                this.classiced2 = this.classiced.s_name[this.namenum]
            }    
        },
        //增加疫苗信息
        addVaccBtn(){
            this.Vaccine.push({'num':this.Vaccine.length+1,'name':'填写疫苗品牌名称','time':'2018/01/11'})
        },
        //增加驱虫信息
        addAnthBtn(){
            this.Anthel.push({'num':this.Anthel.length+1,'name':'填写驱虫品牌名称','time':'2018/01/11'})
        },
        petLevels(index){
            this.num = index
            this.petIn = this.petLevel[this.num]
            console.log(this.petIn)
        },
        sexBox(){
            if(this.dilog == false){
                this.dilog = true
            }else{
                this.dilog = false
            }    
        },
        pjBox(){
            if(this.dilogP == false){
                this.dilogP = true
            }else{
                this.dilogP = false
            }    
        },
        classicBox(){
            if(this.dilogs == false){
                this.dilogs = true
            }else{
                this.dilogs = false
            }
        },
        childValue(showName,ferrymoney){
            // childValue就是子组件传过来的值
            this.showName = showName
            this.Ferrymoney = ferrymoney
        },
        //疫苗信息
        vaccineValue(snum,showName,version,timeIn){
            this.snum = snum
            this.showName = showName
            this.version = version
            this.timeIn = timeIn
            this.Vaccine[this.snum-1]=({'num':this.snum,'name':this.version,'time':this.timeIn})
        },
        //驱虫信息
        anthelValue(anum,showName,version,timeIn){
            this.anum = anum
            this.showName = showName
            this.version = version
            this.timeIn = timeIn
            this.Anthel[this.anum-1]=({'num':this.snum,'name':this.version,'time':this.timeIn})
        },
        cityWide(showName,citymoney){
            this.showName2 = showName
            this.Citymoney = citymoney
        },
        //宠物图片、视频上传
        imgVideo(e){
            var _this = this
            let file = e.target.files[0];           
            let param = new FormData(this.$refs.formData); //创建form对象
            param.append('tweetPic',file,file.name);//通过append向form对象添加数据         
            //param.append('chunk','0');//添加form表单中其他数据
            //console.log(param.get('tweetPic')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };  //添加请求头 
            var indexs=file.name.lastIndexOf(".");
            var indexs2=file.name.length;      
            var imgRxp = /\.png$|\.jpg$|\.jpeg$|\.gif$/i;
            var videoRxp = /\.mp3$|\.mp4$|\.svg$|\.mov$/i;
            if(imgRxp.test(file.name.substring(indexs,indexs2))){
                if(_this.imgArr.length>6){
                   _this.$dialog.toast({
                            mes: '超出图片上传张数',
                            timeout: 1500,
                            icon: 'error'
                    })
                    return false 
                }else{
                    _this.$dialog.loading.open('上传中');
                    axios.post('http://192.168.0.200:1015/mobile/index/pet_img',param,config)
                    .then(function(res){
                        if(res.status == 200){
                            var datas = res.data
                            _this.$dialog.loading.close()
                            _this.$dialog.toast({
                                mes: '上传成功',
                                timeout: 1500,
                                icon: 'success'
                            });
                            _this.imgArr.push(datas)
                            _this.imagefiles = _this.imgArr
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
            }else if(videoRxp.test(file.name.substring(indexs,indexs2))){
                if(_this.videoArr.length==1){
                   _this.$dialog.toast({
                            mes: '超出视频上传张数',
                            timeout: 1500,
                            icon: 'error'
                    })
                    return false
                }else{
                    _this.$dialog.loading.open('上传中');
                    axios.post('http://192.168.0.200:1015/mobile/index/pet_img',param,config)
                    .then(function(res){
                        if(res.status == 200){
                            var datas = res.data
                            _this.$dialog.loading.close()
                            _this.$dialog.toast({
                                mes: '上传成功',
                                timeout: 1500,
                                icon: 'success'
                            });
                            _this.videoArr.push(datas)
                            _this.videofiles = _this.videoArr
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
            }else{
                _this.$dialog.toast({
                mes: '无法上传的文件类型',
                    timeout: 1500,
                    icon: 'error'
                }) 
                return false
            }
        },
        //宠爸图片上传
        imgDad(e){
            var _this = this
            let file = e.target.files[0];           
            let param = new FormData(this.$refs.formsDad); //创建form对象
            param.append('tweetPic',file,file.name);//通过append向form对象添加数据     
            //param.append('chunk','0');//添加form表单中其他数据
            //console.log(param.get('tweetPic')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };  //添加请求头
            _this.$dialog.loading.open('上传ing')
            axios.post('http://192.168.0.200:1015/mobile/index/pet_img',param,config)
            .then(function(res){
                if(res.status == 200){
                   _this.$dialog.loading.close();
                   _this.$dialog.toast({
                        mes: '上传成功',
                        timeout: 1500,
                        icon: 'success'
                    })
                   _this.Dads = res.data.src
                   _this.formDad = !_this.formDad 
                } 
            })  
            .catch(function(error){
                _this.$dialog.toast({
                    mes: '请求失败',
                    timeout: 1500,
                    icon: 'error'
                })
            })    
        },
        //宠妈图片上传
        imgMM(e){
            var _this = this
            let file = e.target.files[0];           
            let param = new FormData(this.$refs.formsMM); //创建form对象
            param.append('tweetPic',file,file.name);//通过append向form对象添加数据     
            //param.append('chunk','0');//添加form表单中其他数据
            console.log(param.get('tweetPic')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };  //添加请求头
            _this.$dialog.loading.open('上传ing');
            axios.post('http://192.168.0.200:1015/mobile/index/pet_img',param,config)
            .then(function(res){
                if(res.status == 200){
                   _this.$dialog.loading.close();
                   _this.$dialog.toast({
                        mes: '上传成功',
                        timeout: 1500,
                        icon: 'success'
                    })
                   _this.MMs = res.data.src
                   _this.formMM = !_this.formMM
                }    
            }) 
            .catch(function(error){
                _this.$dialog.toast({
                    mes: '请求失败',
                    timeout: 1500,
                    icon: 'error'
                })
            })      
        },
        //请求宠物分类
        request(){
            var that = this
            axios.post('http://192.168.0.200:1015/mobile/index/pet_cate')
            .then(function(res){
                that.classic = res.data
            }) 
        },
        //确认发布
        publish(){
            var that = this
            var goods_name = that.petName,s_cate = that.classiced.f_name,f_cate = that.classiced2.name,sex = that.sexIn,age = that.petAge,price = that.petPrice,level = that.petIn,m_img = that.MMs,f_img = that.Dads, pet_content = that.petContent,wuliu1 = that.Citymoney,wuliu2 = that.Ferrymoney,pet_img = that.imagefiles,yimiao = that.Vaccine,quchong = that.Anthel,pet_video = that.videofiles
            var datas = {goods_name,s_cate,f_cate,sex,age,price,level,m_img,f_img,pet_content,wuliu1,wuliu2,pet_img,yimiao,quchong,pet_video}
            axios.post('http://192.168.0.200:1015/mobile/index/fabu',datas)
            .then(function(res){
                console.log(res)
            })
            .catch(function(error){
                console.log('发布失败')
            })
        }
    },
    computed:{
    },
    mounted(){
    },
    created(){
        this.request()
    }
}
</script>
<style lang="scss" scroped>
@function px2rem($px){
   $rem : 64.0px;
   @return ($px/$rem) + rem;
}
.Relepet{
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
        span:last-child{
            right:0;
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
        .tyBox{
            padding:0 px2rem(26px);
            background:#fff;
            height:px2rem(80px);
            display:flex;
            border-bottom:px2rem(1px) solid #eee;
            justify-content:space-between;
            em{
                font-size:px2rem(26px);
                margin:auto 0;
                color:#000;
            }
            input{
               flex:1;
               display:flex;
               padding:0 px2rem(16px);
               justify-content:flex-end;
               margin:auto 0;
               font-size:px2rem(28px); 
            }
        }
        .sexBtn{
            padding:0 px2rem(26px);
            background:#fff;
            height:px2rem(80px);
            border-bottom:px2rem(1px) solid #eee;
            display:flex;
            justify-content:space-between;
            em{
                font-size:px2rem(26px);
                margin:auto 0;
                color:#000;
            }
            span{
                flex:1;
                display:flex;
                justify-content:flex-end;
                margin:auto 0;
                font-size:px2rem(28px);
                i{
                    font-size:px2rem(24px);
                    color:#fe4f53;
                    margin:auto 0 auto px2rem(26px);
                }
            }
        }
        .tyBtn{
            margin:px2rem(26px) auto;
            background:#fff;
            height:px2rem(240px);
            padding:px2rem(26px);
            display:flex;
            textarea{
                flex:1;
                color:#46474d;
                font-size:px2rem(30px);
                border:0;
            }
        }
        .imgBox{
           display:flex;
           flex-direction:column;
           .imgTy{
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
                    video{
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
        .Vaccine{
            display:flex;
            flex-direction:column;
            h5{
                padding:0 px2rem(26px);
                height:px2rem(80px);
                font-size:px2rem(28px);
                color:#000;
                font-weight:normal;
                line-height:px2rem(80px);
            }
            .VaccineBox{
                padding:0;
                display:flex;
                flex-direction:column;
                background:#fff;
            }
            .addBox{
                height:px2rem(80px);
                background:#fff;
                display:flex;
                justify-content:center;
                color:#fe4f53;
                i{
                    margin:auto px2rem(12px);
                    font-size:px2rem(28px);
                }
                em{
                    margin:auto 0;
                    font-size:px2rem(28px);
                }
            }
        }
        .psBox{
            display:flex;
            flex-direction:column;
            h5{
                padding:0 px2rem(26px);
                height:px2rem(80px);
                font-size:px2rem(28px);
                color:#000;
                font-weight:normal;
                line-height:px2rem(80px); 
            }
            .psCon{
               padding:0 px2rem(26px);
                background:#fff;
                height:px2rem(80px);
                border-bottom:px2rem(1px) solid #eee;
                display:flex;
                justify-content:space-between;
                em{
                    font-size:px2rem(26px);
                    margin:auto 0;
                    color:#000;
                }
                span{
                    flex:1;
                    display:flex;
                    justify-content:flex-end;
                    margin:auto 0;
                    font-size:px2rem(28px);
                    i{
                        font-size:px2rem(24px);
                        color:#fe4f53;
                        margin:auto 0 auto px2rem(26px);
                    }
                } 
            }
        }
        .xyBox{
            display:flex;
            flex-direction:column;
            h5{
                padding:0 px2rem(26px);
                height:px2rem(80px);
                font-size:px2rem(28px);
                color:#000;
                font-weight:normal;
                line-height:px2rem(80px); 
            }
            .dadBox{
                height:px2rem(295px);
                display:flex;
                flex-direction:column;
                padding:0 px2rem(16px);
                background:#fff;
                span{
                    height:px2rem(80px);
                    line-height:px2rem(80px);
                    color:#31b2ff;
                    font-size:px2rem(26px);
                }
                span.blue{
                    color:#fe4f53;
                }
                .infile{
                    width:px2rem(215px);
                    height:px2rem(215px);
                    background-color:#fff;
                    margin:auto px2rem(16px) auto 0;
                    img{
                        width:px2rem(215px);
                        height:px2rem(215px);
                    }
                    form{
                        background-image:url(../assets/icon/files.png);
                        background-size:px2rem(120px);
                        background-repeat:no-repeat;
                        background-position:center;
                        width:100%;
                        height:100%;
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
        }
        .classicBox{
            padding:0 px2rem(26px);
            background:#fff;
            height:px2rem(80px);
            border-bottom:px2rem(1px) solid #eee;
            display:flex;
            justify-content:space-between;
            em{
                font-size:px2rem(26px);
                margin:auto 0;
                color:#000;
            }
            span{
                font-size:px2rem(28px);
                flex:1;
                display:flex;
                justify-content:flex-end;
                margin:auto 0;
                i{
                    font-size:px2rem(24px);
                    color:#fe4f53;
                    margin:auto 0 auto px2rem(26px);
                }
            }
        }
    }
    //发布按钮
    .footers{
        padding:px2rem(16px);
        height:px2rem(110px);
        background:#fff;
        display:flex;
        span{
            background:#fe4f53;
            flex:1;
            display:flex;
            border-radius:px2rem(12px);
            em{
                margin:auto;
                font-size:px2rem(28px);
                color:#fff;
            }
        }
    }
    //性别弹窗
    .sexBox{    
        position:fixed;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.6);
        z-index:999;
        .container{
            position:fixed;
            bottom:0;
            width:100%;
            height:px2rem(440px);
            background:#fff;
            display:flex;
            flex-direction:column;
            .containerT{
                padding:0 px2rem(26px);
                height:px2rem(75px);
                background:#fbfbfb;
                border-bottom:px2rem(1px) solid #eee;
                display:flex;
                justify-content:space-between;
                h5{
                    font-size:px2rem(30px);
                    color:#000;
                    font-weight:normal;
                    margin:auto 0;
                }
                span{
                    display:flex;
                    em{
                        font-size:px2rem(25px);
                        color:#999;
                        margin:auto 0;
                    }
                    i{
                        fon-size:px2rem(25px);
                        color:#999;
                        margin:auto 0;
                    }
                }
                span:last-child{
                    em{
                        color:#fe4f53;
                    }
                    i{
                        color:#fe4f53;
                    }
                }
            }
            .containerM{
                padding:0 px2rem(20px);
                flex:1;
                overflow-y:scroll;
                li{
                    height:px2rem(75px);
                    border-bottom:px2rem(1px) solid #eee;
                    display:flex;
                    justify-content:space-between;
                    position:relative;
                    span{
                        font-size:px2rem(25px);
                        color:#000;
                        margin:auto 0;
                    }
                    .checked{
                        background:url(../assets/icon/checked.png);
                        background-size:cover;
                    }
                }
                li.active:after{
                    position:absolute;
                    top:px2rem(25px);
                    right:0;
                    content:'';
                    width:px2rem(30px);
                    height:px2rem(30px);
                    background:url(../assets/icon/active.png) no-repeat center;
                    background-size:px2rem(30px);
                }
            }
            .containerC{
                flex:1;
                display:flex;
                justify-content:space-between;
                ul{
                    padding:0 px2rem(20px);
                    flex:1;
                    overflow-y:scroll;
                    li{
                        height:px2rem(80px);
                        line-height:px2rem(80px);
                        color:#000;
                        font-size:px2rem(24px);
                        border-bottom:px2rem(1px) solid #eee;
                    }
                    li.active{
                        color:#fe4f53;
                        position:relative;
                    }
                    li.active:after{
                        position:absolute;
                        top:px2rem(25px);
                        right:0;
                        content:'';
                        width:px2rem(30px);
                        height:px2rem(30px);
                        background:url(../assets/icon/active.png) no-repeat center;
                        background-size:px2rem(30px);
                    }
                }
                ul.select{
                    background:#f5f5f5;
                    li{
                        color:#000;
                    }
                    li.active{
                        color:#fe4f53;
                    }
                }
            }
        }
    }
    .cwfl{
        .container{
            height:75%;
        }
    }
}
</style>
