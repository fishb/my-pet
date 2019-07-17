/*
整个项目的 共用方法
*/
export function rem(){
    //获取屏幕的可用宽度
    let myWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //获取dom节点
    let myDom = document.getElementsByTagName('html')[0];
    //
    if(myWidth>=768){
        myDom.style.fontSize = 768 / 10 +'px';
    }else{
        myDom.style.fontSize = myWidth / 10 +'px';
    }
}