/**
 * Created by chen on 2018/3/2.
 */
window.onload=function () {

    //banner
    let div=$('.banner');
    let banner=$('.img_box li',div);
    let arrowLeft=$('.banner_jiantou_left',div);
    let arrowRight=$('.banner_jiantou_right',div);
    let circles=$('.bnt_box li',div);
    let n=0;
    $(banner).eq(0).addClass('bannerActive').siblings(banner).removeClass('bannerActive');
    function move() {
        if (n>=banner.length) {
            n=0;
        }
        $(banner).eq(n).addClass('bannerActive').siblings(banner).removeClass('bannerActive');
        $(circles).eq(n).addClass('bannerActive').siblings(circles).removeClass('bannerActive');
        n++;
    }
    let t=setInterval(move,2000);
    $(div).mouseenter(function () {
        clearInterval(t);
    });
    $(div).mouseleave(function () {
        t=setInterval(move,2000);
    });
    $(circles).click(function(){
        n=$(this).index();
        move();
    });
    $(arrowLeft).click(function(){
        clearInterval(t);
        if (n<0) {
            n=banner.length-1;
        }
        $(banner).eq(n).addClass('bannerActive').siblings(banner).removeClass('bannerActive');
        $(circles).eq(n).addClass('bannerActive').siblings(circles).removeClass('bannerActive');
        n--;
    });
    $(arrowRight).click(function(){
        move();
    });

    // 小米明星单品
    function danpin(a) {
        let box=$(a);
        let lis=$('.danpin_bottom',box);
        let width=box.width();
        let right=$('.danpin_top_right .box2 div',box);
        let left=$('.danpin_top_right .box1 div',box);
        let now=0,next=1;
        function move2() {
            if(now===0){
                lis.eq(now).animate({'left':-width},1000);
                lis.eq(next).animate({'left':0},1000);
                left.addClass('active');
                right.removeClass('active');
            }
            else if(now===1){
                lis.eq(next).animate({'left':0},1000);
                lis.eq(now).animate({'left':width},1000);
                left.removeClass('active');
                right.addClass('active');
            }
            let tmp=now;
            now=next;
            next=tmp;
        }
        let time=setInterval(move2,5000);
        box.mouseenter(function () {
            clearInterval(time);
        });
        box.mouseleave(function () {
            time=setInterval(move2,5000);
        });
        $('.danpin_top_right .box2',box).click(function () {
            if(now===0){
                return;
            }
            lis.eq(next).animate({'left':0},1000);
            lis.eq(now).animate({'left':width},1000);
            left.removeClass('active');
            right.addClass('active');
            let tmp=now;
            now=next;
            next=tmp;
        });
        $('.danpin_top_right .box1',box).click(function () {
            if(now===1){
                return;
            }
            lis.eq(now).animate({'left':-width},1000);
            lis.eq(next).animate({'left':0},1000);
            left.addClass('active');
            right.removeClass('active');
            let tmp=now;
            now=next;
            next=tmp;
        });
    }
    danpin('.danpin');

    //选项卡
    function tabs(m,n) {
        let arr=$(m);
        let brr=$(n);
        arr.each(function (index) {
            $(this).mouseover(function () {
                $(this).addClass('jiadianActive').siblings().removeClass('jiadianActive');
                brr.eq(index).show().siblings().hide();
                brr.siblings().eq(0).show()
            });
        });
    }
    tabs('.jiadian_top_right a','.jiadian_bottom_right');
    tabs('.zhineng_daohang','#zhineng .jiadian_bottom_right');
    tabs('.dapei_top_right a','#dapei .jiadian_bottom_right');
    tabs('.peijian_top_right a','#peijian .jiadian_bottom_right');
    tabs('.zhoubian_top_right a','#zhoubian .jiadian_bottom_right');

    //轮播图
    function lunbo(a) {
        let box=$(a);
        let lis=$('.neirongBox',box);
        let circles=$('.neirong_dian',box);
        let width=box.width();
        let now=0,next=0;

        $('.neirongRight',box).click(function () {
            next=now+1;
            if(next>=lis.length){
                return;
            }
            lis.eq(now).animate({left:-width},'fast');
            lis.eq(next).animate({left:0},'fast');
            circles.eq(now).removeClass('active').end().eq(next).addClass('active');
            now=next;
        });
        $('.neirongLeft',box).click(function () {
            next=now-1;
            if(next<0){
                return;
            }
            lis.eq(now).animate({left:width},'fast');
            lis.eq(next).animate({left:0},'fast');
            circles.eq(now).removeClass('active').end().eq(next).addClass('active');
            now=next;
        });
        circles.each(function (index) {
            $(this).click(function () {
                if(index>now){
                    next=index;
                    lis.eq(next).css({'left':'100%'});
                    lis.eq(now).animate({left:-width},'fast');
                    lis.eq(next).animate({left:0},'fast');
                    circles.eq(now).removeClass('active').end().eq(next).addClass('active');
                    now=next;
                }
                else if(index<now){
                    next=index;
                    lis.eq(next).css({'left':'-100%'});
                    lis.eq(now).animate({left:width},'fast');
                    lis.eq(next).animate({left:0},'fast');
                    circles.eq(now).removeClass('active').end().eq(next).addClass('active');
                    now=next;
                }
            })
        })
    }
    lunbo('#List1');
    lunbo('#List2');
    lunbo('#List3');
    lunbo('#List4');

    //为你推荐
    function tuijian(a) {
        let box=$(a);
        let lis=$('.tuijian_bottom',box);
        let now=0,next=0;
        let width=box.width();
        $('.box1',box).click(function () {
            next=now+1;
            if(next>=lis.length){
                next=0;
            }
            lis.eq(next).css({'left':'100%'});
            lis.eq(now).animate({left:-width},'fast');
            lis.eq(next).animate({left:0},'fast');
            now=next;
        });
        $('.box2',box).click(function () {
            next=now-1;
            if(next<0){
                next=lis.length-1;
            }
            lis.eq(next).css({'left':'-100%'});
            lis.eq(now).animate({left:width},'fast');
            lis.eq(next).animate({left:0},'fast');
            now=next;
        });
    }
    tuijian('.tuijian');

    //搜索框
    let search=$('.search_box form input');
    let inputText=$('.search_box form .inputText');
    let input=$('input');
    let inputBtn=$('.search_box form button');
    let searchHidden=$('.searchHidden');
    search.click(function () {
        search.css({'border':'1px solid #ff6700'});
        inputText.css({'display':'none'});
        inputBtn.css({'border':'1px solid #ff6700'});
        searchHidden.css({'z-index':10,'opacity':1});
        input.focus();
    });
    input.blur(function () {
        let text=input.val();
        inputText.html(text);
        search.css({'border':'1px solid #e0e0e0'});
        searchHidden.css({'z-index':0,'opacity':0});
        inputBtn.css({'border':'1px solid #e0e0e0'});
    });

    //购物车
    let shopCar=$('.main_gouwuche');
    let shopCarHidden=$('.shoppingCarBottom');
    let timer;
    shopCar.mouseenter(function () {
        timer=setTimeout(function () {
            shopCarHidden.stop(true,true).slideDown();
        },300)
    }).mouseleave(function () {
        clearTimeout(timer);
        shopCarHidden.stop(true,true).slideUp();
    });

    // //下拉菜单
    let nav=$('.nev');
    let navmenu=$('.navHidden');
    let navHMain=$('.navHMain');
    let navHiddenList=$('.navHiddenList');
    let navHiddenBox=$('.navHiddenBox');
    let t1,t2;
    nav.mouseleave(function(){
        navHiddenBox.each(function(){
            $(this).css({'color':'#333'});
        });
        navmenu.stop(true,true).slideUp();
    });
    navHiddenList.each(function () {
        $(this).mouseenter(function(){
            t1=setTimeout(function () {
                navmenu.stop(true,true).slideUp(function () {
                    navHiddenBox.each(function () {
                        $(this).css({'color':'#333'});
                    })
                });
            },300);
        }).mouseleave(function () {
            clearTimeout(t1);
        });
    });
    navHiddenBox.each(function(index){
        $(this).mouseenter(function() {
            navHMain.each(function (i) {
                $(this).removeClass('active');
                $(navHiddenBox).eq(i).css({'color':'#333'});
            });
            $(this).css({'color':'#ff6700'});
            navHMain.eq(index).addClass('active');
            t2=setTimeout(function () {
                navmenu.stop(true,true).slideDown();
            },300);
        }).mouseleave(function () {
            clearTimeout(t2);
            $(this).css({'color':'#333'});
        });
    });

};