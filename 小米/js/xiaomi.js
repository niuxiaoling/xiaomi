"use strict";
window.onload=function () {
    //轮播图
    function lunbo(parent) {
        let radius=parent.querySelectorAll('.banner-radius1');
        let banner_img=parent.querySelectorAll('.banner-img');
        let img_box=document.querySelector('.bannerbox');
        let float_left=parent.querySelector('.float-left');
        let float_right=parent.querySelector('.float-right');
        let num=0;
        let flag=true;
        let t=setInterval(move,5000);
        function move(type='l') {
            if(flag=true){
                flag=false;
                if(type=='l'){
                    num++;
                    if(num==banner_img.length){
                        num=0;
                    }
                }
                else if(type=='r'){
                    num--;
                    if(num<0){
                        num=banner_img.length-1;
                    }
                }
                for(let i=0;i<banner_img.length;i++){
                    banner_img[i].classList.remove('color');
                    radius[i].classList.remove('color');
                }
                banner_img[num].classList.add('color');
                radius[num].classList.add('color');
            }
            banner_img[num].addEventListener('transitionend',function () {
                flag=true;
            })
        }
        img_box.onmouseover=function () {
            clearInterval(t)
        }
        img_box.onmouseout=function () {
            t=setInterval(move,5000);
        }
        radius.forEach(function (value,index) {
            value.onclick=function () {
                for(let i=0;i<radius.length;i++){
                    banner_img[i].classList.remove('color');
                    radius[i].classList.remove('color');
                }
                banner_img[index].classList.add('color');
                this.classList.add('color');
            }
        })
        float_left.onclick=function () {
            move('l');
        }
        float_right.onclick=function () {
            move('r');
        }
    }
    lunbo(document.querySelector('.banner'));
    // 右侧购物车
    let gou=document.querySelector('.shoptab');
    let shop=document.querySelector('.shop');
    shop.onmouseover=function () {
        animate(gou,{height:90},200)
    }
    shop.onmouseout=function () {
        animate(gou,{height:0},200)
    }
    //搜索侧
    let input=document.querySelector('.sousuo-text');
    let button=document.querySelector('.sousuo-button');
    let xiaomi1=document.querySelector('.sousuo-xiaomi1');
    let xiaomi2=document.querySelector('.sousuo-xiaomi2');
    let sousuotab=document.querySelector('.sousuo-list');
    input.onfocus=function () {
        input.style.border=`1px solid #FF6702`;
        button.style.border=`1px solid #FF6702`;
        xiaomi1.style.display='none';
        xiaomi2.style.display='none';
        sousuotab.style.display='block';

    }
    input.onblur=function () {
        input.style.border=`1px solid #A9A9A9`;
        button.style.border=`1px solid #A9A9A9`;
        sousuotab.style.display='none';
        if(input.value==''){
            xiaomi1.style.display='block';
            xiaomi2.style.display='block';
        }

    }
    //上导航
    function navigator(parent) {
        let navigator_box=parent.querySelector('.navigator-tab-box');
        let navigator=parent.querySelectorAll('.navigator-main-box');//获得显示的大盒子
        let navigator_title=parent.querySelectorAll('.yes'); //获得选项卡集合
        // 选项卡盒子显示
        navigator_title.forEach(function (value,index) {
            value.onmouseover=function () {
               for(let i=0;i<navigator.length;i++){
                   navigator[i].classList.remove('active2');
                   navigator_title[i].classList.remove('active2');
               }
                navigator_box.style.borderTop='1px solid #e0e0e0';
                navigator[index].classList.add('active2');
                value.classList.add('active2');
                animate(navigator_box,{height:240},300);
                navigator_box.classList.add('acitve');
            }
            value.onmouseout=function () {
                navigator_box.style.borderTop='1px solid #e0e0e0';
                animate(navigator_box,{height:0},300);
                for(let j=0;j<navigator.length;j++){
                    navigator[j].classList.remove('active2');
                }
            }
        })
        // 显示的里移入移出盒子
        navigator.forEach(function (value,index) {
            value.onmouseover=function () {
                navigator_box.style.borderTop='1px solid #e0e0e0';
                animate(navigator_box,{height:240},300);
                value.classList.add('active2');
            }
            value.onmouseout=function () {
                animate(navigator_box,{height:0},300,function () {
                    navigator_box.style.borderTop=0;
                });

            }
        });
        //大盒子移入移出
        navigator_box.onmouseover=function () {
            navigator_box.style.borderTop='1px solid #e0e0e0';
            animate(navigator_box,{height:240},300);
        }
        navigator_box.onmouseout=function () {
            animate(navigator_box,{height:0},300,function () {
                navigator_box.style.borderTop=0;
            });

        }

    }
    navigator(document.querySelector('.navigator'));

    //左banner
    function  banner(parent){
        let topic=parent.querySelectorAll('.banner-left > ul >li'); //获得左banner的li
        let banner_left=parent.querySelectorAll('.banner-left-main'); //获得显示的盒子
        for(let i=0;i<topic.length;i++){
            topic[i].onmouseover=function () { //当鼠标移入时
                for(let j=0;j<topic.length;j++){
                    // banner_left[j].style.display='none';清除图片的显示
                    banner_left[j].classList.remove('active');
                }
                // banner_left[i].style.display='block'; //当前图片的显示
                banner_left[i].classList.add('active');
            }
            topic[i].onmouseout=function () { //当鼠标移出时
                for(let m=0;m<topic.length;m++){
                    // banner_left[m].style.display='none'; // 清除图片的显示
                    banner_left[m].classList.remove('active');
                }
            }
        }
    }
    banner(document.querySelector('.banner'));
    //明星单品左右移动
    function move(parent) {
        let button1=parent.querySelector('.msdp-button1');//获得左选项卡
        let button2=parent.querySelector('.msdp-button2');//获得右选项卡
        let imgbox=parent.querySelector('.show-msdp'); //获得移动大盒子
        let box=parent.querySelector('.show-list1');
        let boxwidth=parseInt(getComputedStyle(box,null).width);
        let n=5;
        let flag=true;
        let t=setInterval(move,2000);
        function move() {
            if(flag){
                flag=false;
                animate(imgbox,{left:(-boxwidth-14)*n},function () {
                    for(let i=0;i<n;i++){
                        let first=imgbox.firstElementChild;//获得第一张图片
                        let last=imgbox.lastElementChild;
                        imgbox.appendChild(first);
                    }
                    imgbox.style.left=0;
                    flag=true;
                })
            }

        }
        imgbox.onmouseover=function () {
            clearInterval(t);
        }
        imgbox.onmouseout=function () {
            t=setInterval(move,5000);
        }
        button2.onclick=function () {
            animate(imgbox,{left:(-boxwidth-14)*n},function () {
                imgbox.style.left=(-boxwidth-14)*n+'px';
            })
        };
        button1.onclick=function () {
            animate(imgbox,{left:0},function () {
                imgbox.style.left=0+'px';
            });
        }




    }
    move(document.querySelector('.msdp-box'));
    function move1(parent) {
        let button1=parent.querySelector('.msdp-button1');//获得左选项卡
        let button2=parent.querySelector('.msdp-button2');//获得右选项卡
        let imgbox=parent.querySelector('.show-msdp'); //获得移动大盒子
        let box=parent.querySelector('.list-right5');
        let boxwidth=parseInt(getComputedStyle(box,null).width);
        let n=5;
        let flag=true;
        let t=setInterval(move,2000);
        function move() {
            if(flag){
                flag=false;
                animate(imgbox,{left:(-boxwidth-14)*n},function () {
                    for(let i=0;i<n;i++){
                        let first=imgbox.firstElementChild;//获得第一张图片
                        let last=imgbox.lastElementChild;
                        imgbox.appendChild(first);
                    }
                    imgbox.style.left=0;
                    flag=true;
                })
            }

        }
        imgbox.onmouseover=function () {
            clearInterval(t);
        }
        imgbox.onmouseout=function () {
            t=setInterval(move,5000);
        }
        button2.onclick=function () {
            animate(imgbox,{left:(-boxwidth-14)*n},function () {
                imgbox.style.left=(-boxwidth-14)*n+'px';
            })
        };
        button1.onclick=function () {
            animate(imgbox,{left:0},function () {
                imgbox.style.left=0+'px';
            });
        }




    }
    move1(document.querySelector('.tuijian-main'));
    //热评产品左右移动
    function  rp(parent) {
        let button1=parent.querySelector('.msdp-button1');//获得左选项卡
        let button2=parent.querySelector('.msdp-button2');//获得右选项卡
        let imgbox=parent.querySelector('.rpcpmain');//获得移动大盒子
        // let box=parent.querySelector('.rpcpmain-box');
        let first=imgbox.firstElementChild;
        let flag=true;
        let width=parseInt(getComputedStyle(first,null).width)+14;
        button1.onclick=function () {
            flag=false;
            function left() {
                animate(imgbox,{left:-width},function () {
                    let first=imgbox.firstElementChild;//获得第一张图片
                    let last=imgbox.lastElementChild;
                    imgbox.appendChild(first);
                    imgbox.style.left=0;
                    flag=true;
                })
            }
            left();
        }
        button2.onclick=function () {
            flag=false;
            function right() {
                let first=imgbox.firstElementChild;//获得第一张图片
                let last=imgbox.lastElementChild;
                imgbox.insertBefore(last,first);
                imgbox.style.left=-width+'px';
                animate(imgbox,{left:0},function () {
                    flag=true;
                })
            }
            right();
        }
    }

    rp(document.querySelector('.rpcp-main'));


    //选项卡
    function tab(parent) {
        let dapei_title=parent.querySelectorAll('.right1 a');//获得选项卡集合
        let list_right=parent.querySelectorAll('.list-right');//获得图片集合
        dapei_title.forEach(function (value,index){
            value.onmousemove=function () {
                for(let i=0;i<dapei_title.length;i++){
                    dapei_title[i].classList.remove('active');
                    list_right[i].classList.remove('active');
                }
                this.classList.add('active');
                list_right[index].classList.add('active');
            }
        })
    }
    tab(document.querySelector('.daipei-main'));
    tab(document.querySelector('.peijian-main'));
    tab(document.querySelector('.zhoubian-main'));


    //内容
    //通过节点的方式移动合作,通过下标方式改变圆的显示
    function content(parent) {
        let imgli=parent.querySelectorAll('.content-list>.content-box-img>ul');//获得图片的集合
        let radius=parent.querySelectorAll('.content-list>.content-radius>li>.dot');//获得小圆的集合
        let left=parent.querySelector('.content-list>.content-left'); //获得左侧按钮
        let right=parent.querySelector('.content-list>.content-right');//获得右侧按钮
        let now=0;
        let next=0;
        right.onclick=function () {
            next=now+1;
            if(next>=imgli.length){
                next=imgli.length-1;
            }
            imgli[now].style.left="-100%";
            imgli[next].style.left="0";
            radius[now].classList.remove('active');
            radius[next].classList.add('active');
            now=next;
        }
        left.onclick=function () {
            next=now-1;
            if(next<0){
                next=0;
            }
            imgli[now].style.left="-100%";
            imgli[next].style.left="0";
            radius[now].classList.remove('active');
            radius[next].classList.add('active');
            now=next;
        }
        radius.forEach(function (value,index) {
            value.onclick=function () {
                imgli[now].style.left="-100%";
                imgli[index].style.left="0";
                radius[now].classList.remove('active');
                radius[index].classList.add('active');
                now=index;
            }

        })
    }

    content(document.querySelector('.content-list'));
    content(document.querySelector('.content-list2'));
    content(document.querySelector('.content-list3'));
    content(document.querySelector('.content-list1'));




}







