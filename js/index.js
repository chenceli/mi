//下拉菜单
let nav=document.querySelector('.nev');
let navmenu=document.querySelector('.navHidden');
let navHMain=document.querySelectorAll('.navHMain');
let navHiddenList=document.querySelectorAll('.navHiddenList');
let navHiddenBox=document.querySelectorAll('.navHiddenBox');
nav.onmouseover=function(){
    animate(navmenu,{height:229},200)
};
nav.onmouseout=function(){
    animate(navmenu,{height:0},200,function () {
        navHiddenBox.forEach(function(value){
            value.style.color = "#333";
        });
    });
};
navHiddenList.forEach(function (val) {
    val.onmousemove=function(){
        animate(navmenu,{height:0},200,function () {
            navHiddenBox.forEach(function (value) {
                value.style.color = "#333";
            })
        })
    };
});
navHiddenBox.forEach(function(value,index){
    value.onmouseenter=function() {
        navHMain.forEach(function (v, i) {
            v.classList.remove('active');
            navHiddenBox[i].style.color = "#333";
        });
        value.style.color = "#ff6700";
        navHMain[index].classList.add('active');
    };
});

//购物车
let shopCar=document.querySelector('.main_gouwuche');
let shopCarHidden=document.querySelector('.shoppingCarBottom');
shopCar.onmouseenter=function () {
    animate(shopCarHidden,{height:98},200);
};
shopCar.onmouseleave=function () {
    animate(shopCarHidden,{height:0},200);
};


//搜索框
let search=document.querySelector('.search_box form input');
let inputText=document.querySelector('.search_box form .inputText');
let input=document.querySelector('input');
let inputBtn=document.querySelector('.search_box form button');
let searchHidden=document.querySelector('.searchHidden');
search.onclick=function () {
    search.style.border='1px solid #ff6700';
    inputText.style.display='none';
    inputBtn.style.border='1px solid #ff6700';
    searchHidden.style.cssText='z-index:10;opacity:1';
    input.focus();
};
input.onblur=function () {
    let text=input.value;
    inputText.innerHTML=text;
    search.style.border='1px solid #e0e0e0';
    searchHidden.style.cssText='z-index:0;opacity:0';
    inputBtn.style.border='1px solid #e0e0e0';
};

//为你推荐
function tuijian(a) {
    let box=document.querySelector(a);
    let lis=box.querySelectorAll('.tuijian_bottom');
    let now=0,next=0;
    let flags=true;
    let width=parseInt(getComputedStyle(box,null).width);
    box.querySelector('.tuijian .box1').onclick=function () {
        if(!flags){
            return;
        }
        flags=false;
        next=now+1;
        if(next>=lis.length){
            next=0;
        }
        lis[next].style.left='100%';
        animate(lis[now],{left:-width});
        animate(lis[next],{left:0},function () {
            flags=true;
        });
        now=next;
    };
    box.querySelector('.box2').onclick=function () {
        if(!flags){
            return;
        }
        flags=false;
        next=now-1;
        if(next<0){
            next=lis.length-1;
        }
        lis[next].style.left='-100%';
        animate(lis[now],{left:width});
        animate(lis[next],{left:0},function () {
            flags=true;
        });
        now=next;
    };
}
tuijian('.tuijian');

//轮播图
function lunbo(a) {
    let box=document.querySelector(a);
    let lis=box.querySelectorAll('.neirongBox');
    let circles=box.querySelectorAll('.neirong_dian');
    let width=parseInt(getComputedStyle(box).width);
    let now=0,next=0;
    let flag=true;

    box.querySelector('.neirongRight').onclick=function () {
        next=now+1;
        if(next>=lis.length){
            return;
        }
        if(!flag){
            return;
        }
        flag=false;
        animate(lis[now],{left:-width});
        animate(lis[next],{left:0},function () {
            flag=true;
        });
        circles[now].classList.remove('active');
        circles[next].classList.add('active');
        now=next;
    };
    box.querySelector('.neirongLeft').onclick=function () {
        next=now-1;
        if(next<0){
            return;
        }
        if(!flag){
            return;
        }
        flag=false;
        animate(lis[now],{left:width});
        animate(lis[next],{left:0},function () {
            flag=true;
        });
        circles[now].classList.remove('active');
        circles[next].classList.add('active');
        now=next;
    };
    circles.forEach(function (val,index) {
        val.onclick=function () {
            if(!flag){
                return;
            }
            flag=false;
            if(index>now){
                next=index;
                lis[next].style.left='100%';
                animate(lis[now],{left:-width});
                animate(lis[next],{left:0},function () {
                    flag=true;

                });
                circles[now].classList.remove('active');
                circles[next].classList.add('active');
                now=next;
            }
            else if(index<now){
                next=index;
                lis[next].style.left='-100%';
                animate(lis[now],{left:width});
                animate(lis[next],{left:0},function () {
                    flag=true;
                });
                circles[now].classList.remove('active');
                circles[next].classList.add('active');
                now=next;
            }
            else{
                flag=true;
            }
        }
    })
}
lunbo('#List1');
lunbo('#List2');
lunbo('#List3');
lunbo('#List4');

//选项卡
function tabs(arr,brr) {
    arr.forEach(function (a,b) {
        a.onmouseover=function () {
            arr.forEach(function (val,index) {
                val.classList.remove('jiadianActive');
                brr[index].classList.remove('jiadianBottomActive');
            });
            this.classList.add('jiadianActive');
            brr[b].classList.add('jiadianBottomActive');
        };
    });
}
let tags=document.querySelectorAll('.jiadian_top_right a');
let modules=document.querySelectorAll('.jiadian_bottom_right');
let tags2=document.querySelectorAll('.zhineng_daohang');
let modules2=document.querySelectorAll('#zhineng .jiadian_bottom_right');
let tags3=document.querySelectorAll('.dapei_top_right a');
let modules3=document.querySelectorAll('#dapei .jiadian_bottom_right');
let tags4=document.querySelectorAll('.peijian_top_right a');
let modules4=document.querySelectorAll('#peijian .jiadian_bottom_right');
let tags5=document.querySelectorAll('.zhoubian_top_right a');
let modules5=document.querySelectorAll('#zhoubian .jiadian_bottom_right');
tabs(tags,modules);
tabs(tags2,modules2);
tabs(tags3,modules3);
tabs(tags4,modules4);
tabs(tags5,modules5);

//banner
let div=document.querySelector('.banner');
let banner=div.querySelectorAll('.img_box li');
let arrowLeft=div.querySelector('.banner_jiantou_left');
let arrowRight=div.querySelector('.banner_jiantou_right');
let circles=div.querySelectorAll('.bnt_box li');
let flag=true;
let n=0;
function move() {
    if(!flag){
        return;
    }
    flag=false;
    n++;
    if (n>=banner.length) {
        n=0;
    }
    banner.forEach(function (val,index) {
        val.classList.remove('bannerActive');
        circles[index].classList.remove('bannerActive')
    });
    banner[n].classList.add('bannerActive');
    circles[n].classList.add('bannerActive')
}
let t=setInterval(move,2000);
div.onmouseenter=function () {
    clearInterval(t);
};
div.onmouseleave=function () {
    t=setInterval(move,2000);
};
arrowLeft.onclick=function () {
    if(!flag){
        return;
    }
    flag=false;
    n--;
    if (n<0) {
        n=banner.length-1;
    }
    banner.forEach(function (val,ind) {
        val.classList.remove('bannerActive');
        circles[ind].classList.remove('bannerActive');
    });
    banner[n].classList.add('bannerActive');
    circles[n].classList.add('bannerActive');
};
arrowRight.onclick=function () {
    move();
};
circles.forEach(function (val1,ind1) {
    val1.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        circles.forEach(function (val2,ind2) {
            val2.classList.remove('bannerActive');
            banner[ind2].classList.remove('bannerActive');
        });
        banner[ind1].classList.add('bannerActive');
        circles[ind1].classList.add('bannerActive');
        n=ind1;
    }
});
banner.forEach(function (a) {
    a.addEventListener('transitionend',function () {
        flag=true;
    })
});

//小米明星单品
function danpin(a) {
    let box=document.querySelector(a);
    let lis=box.querySelectorAll('.danpin_bottom');
    let width=parseInt(getComputedStyle(box,null).width);
    let right=box.querySelector('.danpin_top_right .box2 div');
    let left=box.querySelector('.danpin_top_right .box1 div');
    let now=0,next=1;
    flag=true;
    function move2() {
        if(now===0){
            animate(lis[now],{left:-width},1000);
            animate(lis[next],{left:0},1000);
            left.classList.add('active');
            right.classList.remove('active');
        }
        else if(now===1){
            animate(lis[now],{left:width},1000);
            animate(lis[next],{left:0},1000);
            left.classList.remove('active');
            right.classList.add('active');
        }
        let tmp=now;
        now=next;
        next=tmp;
    }
    let time=setInterval(move2,5000);
    box.onmouseenter=function () {
        clearInterval(time);
    };
    box.onmouseleave=function () {
        time=setInterval(move2,5000);
    };
    box.querySelector('.danpin_top_right .box2').onclick=function () {
        if(now===0){
            return;
        }
        flag=false;
        animate(lis[now],{left:width},1000);
        animate(lis[next],{left:0},1000,function () {
            flag=true;
        });
        left.classList.remove('active');
        right.classList.add('active');
        let tmp=now;
        now=next;
        next=tmp;
    };
    box.querySelector('.danpin_top_right .box1').onclick=function () {
        if(now===1){
            return;
        }
        flag=false;
        animate(lis[now],{left:-width},1000);
        animate(lis[next],{left:0},1000,function () {
            flag=true;
        });
        left.classList.add('active');
        right.classList.remove('active');
        let tmp=now;
        now=next;
        next=tmp;
    };
}
danpin('.danpin');