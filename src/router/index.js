import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  // 当前路由选中的样式
  linkActiveClass: 'selected',
  // 路由模式，模式尽量不要 hash
  /*
    微信会对 hash  # 进行处理 www.baidu.com/?#/
  */
  mode: 'history',
  routes: [
    //首页
    {
      path: '/',
      name: 'Index',
      meta:{index:0,keepAlive:true},// 需要缓存//meta对象的index用来定义当前路由的层级,由小到大,由低到高
      component: resolve => require(['@/page/homePage/index'], resolve)
    },
    //附近
    {
      path:'/Nearby',
      name:'Nearby',
      component: resolve => require(['@/components/nearby'], resolve) 
    },
    //切换城市
    // {
    //   path:'/citySwitch',
    //   name:'citySwitch',
    //   component: resolve => require(['@/components/citySwitch'], resolve) 
    // },
    //商家页
    {
      path: '/Seller',
      name: 'Seller',
      meta:{index:1,keepAlive:true},
      component: resolve => require(['@/page/sellerPage/seller'], resolve),
      //component: Seller,
      //重定向
      // redirect: '/Seller/Pethouse',
      // children:[
      //   {path: 'Spoil',name: 'Spoil',component: resolve => require(['@/page/sellerPage/components/spoil'], resolve)},
      //   {path: 'Pethouse',name: 'Pethouse',component: resolve => require(['@/page/sellerPage/components/pethouse'], resolve)}
      // ]
    },
    //商城页
    {
      path: '/Mall',
      name: 'Mall',
      meta:{index:2,keepAlive:true},
      component: resolve => require(['@/page/mallPage/mall'], resolve)
    },
    //主粮列表页
    {
      path: '/Staple',
      name: 'Staple',
      component: resolve =>require(['@/page/mallPage/html/Staple'],resolve)
    },
    //零食列表页
    {
      path: '/Sock',
      name: 'Sock',
      component: resolve =>require(['@/page/mallPage/html/Sock'],resolve)
    },
     //保健品列表页
     {
      path: '/Health',
      name: 'Health',
      component: resolve =>require(['@/page/mallPage/html/Health'],resolve)
    },
    //日用品列表页
    {
      path: '/Daily',
      name: 'Daily',
      component: resolve =>require(['@/page/mallPage/html/Daily'],resolve)
    },
    //商城商品列表页
    {
      path: '/Html/:id',
      name: 'Html',
      component: resolve =>require(['@/page/mallPage/html/Html'],resolve)
    },
    //商城商品内容页
    {
        path: '/Mallmain/:id',
        name: 'Mallmain',
        component: resolve => require(['@/page/mallPage/html/Mallmain'], resolve)
    },
    //特惠拼购
    {
      path: '/Collage',
      name: 'Collage',
      component: resolve => require(['@/page/finePage/collage'], resolve)
    },
    {
      path: '/collageRule',
      name: 'collageRule',
      component: resolve => require(['@/page/finePage/collageRule'], resolve)
    },
    //最新上架
    {
      path: '/newArral',
      name: 'newArral',
      component: resolve => require(['@/page/finePage/newArral'], resolve)
    },
    //精品馆
    {
      path:'/fineBox',
      name:'fineBox',
      component: resolve => require(['@/page/finePage/fine'], resolve)
    },
    //发布宠物
    {
      path: '/Relepet',
      name: 'Relepet',
      meta:{keepAlive:true},
      component: resolve => require(['@/components/Relepet'], resolve)
    },
    //消息
    {
      path: '/Msg',
      name:'Mag',
      meta:{
        index:3,
        keepAlive:true
      },
      component: resolve => require(['@/page/msgPage/msg'], resolve)
    },
    //萌宠头条
    {
      path: '/Topline',
      name: 'Topline',
      component: resolve => require(['@/page/msgPage/Topline'], resolve)
    },
    //萌宠头条内容页
    {
      path: '/Linepage/:id',
      name: 'Linepage',
      component: resolve => require(['@/page/msgPage/linePage'], resolve)
    },
    {
      path: '/MsgSearch',
      name:'MsgSearch',
      component: resolve => require(['@/page/msgPage/search'], resolve)
    },
    //会员中心
    {
      path: '/User',
      name: 'User',
      meta: {
        index:4,
        keepAlive:false
      },
      component: resolve => require(['@/page/user/user'], resolve)  
    },
    //可用积分
    {
      path: '/Integral',
      name: 'Integral',
      component: resolve => require(['@/components/integral/integral'], resolve)
    },
    //积分明细
    {
      path: '/Intedatil',
      name: 'Intedatil',
      component: resolve => require(['@/components/integral/inteDatil'], resolve)
    },
    //优惠券
    {
      path: '/Discount',
      name: 'Discount',
      component: resolve => require(['@/components/discount'], resolve)
    },
    //举报虚假
    {
      path: '/Report',
      name: 'Report',
      component: resolve => require(['@/page/petPage/Single/report'], resolve)
    },
    //订单页面
    { 
      path: '/Single/:id',
      name: 'Single',
      component: resolve => require(['@/page/petPage/Single/single'], resolve)
    },
    //订单页面的编辑资料
    {
      path: '/Edit',
      name: 'Edit',
      component: resolve => require(['@/page/petPage/Single/edit'], resolve)
    },
    //订单信息
    {
      path: '/Order/:id',
      name: 'Order',
      component: resolve => require(['@/page/petPage/Single/order'], resolve)
    },
    //收藏
    {
      path:'/Love',
      name:'Love',
      component: resolve => require(['@/components/love'],resolve)
    },
    //买家求购
    {
      path:'/Wantbuy',
      name:'Wantbuy',
      component: resolve => require(['@/components/wantBuy'], resolve)
    },
    //求购信息列表
    {
      path:'/Wantbuylist',
      name:'Wantbuylist',
      component: resolve => require(['@/components/wantBuylist'], resolve)
    },
    //宠物分类 狗狗
    {
      path:'/Dog',
      name:'Dog',
      component: resolve => require(['@/page/animallPage/dog'], resolve) 
    },
    //宠物分类筛选页面
    {
      path:'/Screen/:id',
      name:'Screen',
      component: resolve => require(['@/page/animallPage/components/screen'], resolve) 
    },
    //宠物介绍
    {
      path:'/PetEntry/:id',
      name:'PetEntry',
      component: resolve => require(['@/page/animallPage/components/petEntry'], resolve)
    },
    //猫咪
    {
      path:'/Cat',
      name:'Cat',
      component: resolve => require(['@/page/animallPage/cat'], resolve) 
    },
    //小宠
    {
      path:'/Other',
      name:'Other',
      component: resolve => require(['@/page/animallPage/other'], resolve)
    },
    {
      path: '/Login',
      name: 'Login',
      component: resolve => require(['@/components/login'], resolve) 
    },{
      path: '/Reg',
      name: 'Reg',
      component: resolve => require(['@/components/reg'], resolve)
    },{
      path: '/Phonereg',
      name: 'Phonereg',
      component: resolve => require(['@/components/phonereg'], resolve) 
    },{
      path: '/Detail/:id',
      name: 'Detail',
      //商家详情页
      component: resolve => require(['@/page/sellerPage/components/page/detail'], resolve),
      //重定向
      redirect: '/Detail/:id/Animal',
      children:[
        {path: 'Animal',name: 'Animal',component: resolve => require(['@/page/sellerPage/components/page/common/animal'], resolve)},
        {path: 'Comments',name: 'Comments',component: resolve => require(['@/page/sellerPage/components/page/common/comments'], resolve)},
        {path: 'Brief',name: 'Brief',component: resolve => require(['@/page/sellerPage/components/page/common/brief'], resolve)}
      ]
    },
    ,{
      path: '/Substance/:id',
      name: 'Substance',
      //宠物详情页
      component: resolve => require(['@/page/petPage/substance'], resolve)
    },{
      path: '/Search',
      name: 'Search',
      component: resolve =>require(['@/components/search'],resolve)
    },{
      path: '/Chat/:id',
      name: 'Chat',
      component: resolve => require(['@/components/chat'],resolve)
    },{
      path: '/Install',
      name: 'Install',
      component: resolve => require(['@/page/user/components/install'],resolve)
    },{
      //忘记密码
      path: '/Forget',
      name: 'Forget',
      component: resolve => require(['@/page/user/components/forget'],resolve)
    },{
      //收款账号
      path: '/Payment',
      name: 'Payment',
      component: resolve => require(['@/page/user/components/payment'],resolve)
    },{
      //我买到的
      path: '/Buy',
      name: 'Buy',
      component: resolve => require(['@/page/user/components/buy'],resolve)
    },{
      //我售出的
      path: '/Sellout',
      name: 'Sellout',
      component: resolve => require(['@/page/user/components/sellout'],resolve)
    },{
      //卖家认证
      path:'/Vendor',
      name:'Vendor',
      component: resolve => require(['@/page/user/components/vendor'],resolve)
    },{
      //个人认证
      path: '/Personauth',
      name: 'Personauth',
      component: resolve => require(['@/page/user/components/personauth'],resolve)
    },{
      //商家认证
      path: '/Sellerauth',
      name: 'Sellerauth',
      component: resolve => require(['@/page/user/components/sellerauth'],resolve)
    },{
      //平台认证
      path: '/Platauth',
      name: 'Platauth',
      component: resolve => require(['@/page/user/components/platauth'],resolve)
    },{
      //我的中心
      path: '/Center',
      name: 'Center',
      component: resolve => require(['@/components/center'],resolve),
      //重定向
      redirect: '/Center/Cnimal',
      children:[
        {path: 'Cnimal',name: 'Cnimal',component: resolve => require(['@/components/center/cnimal'], resolve)},
        {path: 'Cnmments',name: 'Cnmments',component: resolve => require(['@/components/center/cnmments'], resolve)},
        {path: 'Crief',name: 'Crief',component: resolve => require(['@/components/center/crief'], resolve)}
      ]
    },{
      //个人资料
      path: '/Means',
      name: 'Means',
      component: resolve => require(['@/components/means'],resolve)
    },
    //商品订单页
    { 
      path: '/MallSingle/:id',
      name: 'MallSingle',
      component: resolve => require(['@/page/mallPage/html/Mallsingle'],resolve)
    },
    //付款成功后页面
    {
      path: '/paymentSuccess/:id',
      name: 'paymentSuccess',
      component: resolve => require(['@/components/paymentSuccess'],resolve)
    },
    //发布管理
    {
      path: '/Manage',
      name: 'Manage',
      component: resolve => require(['@/components/Manage'],resolve)
    },
    //用户手册
    {
      path: '/Users',
      name: 'Users',
      component: resolve => require(['@/components/Manual/users'],resolve)
    },
    //入驻说明
    {
      path: '/Merchant',
      name: 'Merchant',
      component: resolve => require(['@/components/Manual/merchant'],resolve)
    },
    //责任声明
    {
      path: '/Statement',
      name: 'Statement',
      component: resolve => require(['@/components/Manual/statement'],resolve)
    },
    //交易必读
    {
      path: '/Dealread',
      name: 'Dealread',
      component: resolve => require(['@/components/Manual/dealread'],resolve)
    },
    //商家规范
    {
      path: '/Standard',
      name: 'Standard',
      component: resolve => require(['@/components/Manual/standard'],resolve)
    }
  ]
})