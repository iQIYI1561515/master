// ..............视屏点击开始
var maVideo = document.querySelector(".madam_video");
var maPlay = document.querySelector(".madam_videoplay");
var maBtn = document.querySelector(".madam_btn");

$(".madam_btn").click(function() {
    $(".madam_videoplay").css('display', 'none');
    $(".madam_btn").css('display', 'none');
    if (maVideo.paused) {
        maVideo.play();
    } else {
        maVideo.pause();
        maBtn.css('display', 'block')
    }
})




// ...........选项卡切换动画
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'slide',
    // initialSlide: 1,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
var mySwiper = new Swiper('.swiper-container');
$('.swiper-pagination-bullet').click(function() {
    mySwiper.slideTo(0, 1000, false); //切换到第一个slide，速度为1秒
})



// ..................底部导航栏................
var scroTOP = document.querySelector(".mdam_scroTOP");
var clientH = document.documentElement.clientHeight || document.body.clientHeight;
var maTop = true;
var maTimer = null;
scroTOP.style.display = "none";
window.onscroll = function() {
    var topMadam = document.documentElement.scrollTop || document.body.scrollTop;
    if (topMadam > 0) {
        scroTOP.style.display = "block";
    } else {
        scroTOP.style.display = "none";
    }
}


// ................回到顶部.............
$(".mdam_scroTOP").click(function() {
    var speed = document.documentElement.scrollTop || document.body.scrollTop;
    var timer = setInterval(function() {
        speed -= 200;
        document.documentElement.scrollTop = document.body.scrollTop = speed;
        if (speed <= 0) {
            clearInterval(timer);
        }
    }, 20)
    console.log("11");
})
$(function() {
    $.ajax({
        url: '../data/male.json',
        type: 'get',
        dataType: 'json',
        success: function(json) {
            // console.log(json.decorate);
            var jsonNew = json.new;
            var Jsdeate = json.decorate;
            console.log(Jsdeate);
            // console.log(jsonNew);
            var derte = '';
            var newon1 = '';
            var newon2 = '';
            $.each(Jsdeate, function(index, value) {
                derte += '<li class ="swiper-slide"><a href =""><img src = "' + value.imges + '"alt =""><div class ="madam_ltMaiosu"><span class = "liwenzi">' + value.title + '</span><span class="lishuzi">' + value.fie + '</span ></div></a><button class="madam_xin iconfont  iconxin"></button></li>'
            })
            $('.madam_right_tupian').html(derte)
            $.each(jsonNew, function(index, val) {
                // console.log(index);
                // console.log(val);
                if (index < 4) {
                    newon1 += '<div class="madam_list_tu"><a href="" class="madan_list"><div class="madam_ltImg"><img src="' + val.url + '" alt=""></div><div class="madam_ltMaiosu"><span class="liwenzi">' + val.explain + '</span><span class="lishuzi">' + val.figure + '</span></div></a><button class="madam_liXin iconfont  iconxin"></button></div>'
                } else {
                    newon2 += '<div class="madam_list_tu"><a href="" class="madan_list"><div class="madam_ltImg"><img src="' + val.url + '" alt=""></div><div class="madam_ltMaiosu"><span class="liwenzi">' + val.explain + '</span><span class="lishuzi">' + val.figure + '</span></div></a><button class="madam_liXin iconfont  iconxin"></button></div>'
                }
            })
            $('.madam_top').html(newon1);
            $('.madam_bottom').html(newon2);
        }
    })
})
$(function() {
    $(".header_nav").on('mouseenter', 'a', function() {
        $('.subnav').css('display', 'block');
        $(document).bind('mousemove', function(e) {
            var y = e.pageY;
            if (y < 90 || y > 645) {
                $('.subnav').css('display', 'none');
            }
        })
    })
})