// ..............视屏点击开始
var maVideo = document.querySelector(".male_video ");

$(".male_bt").click(function() {
    $(".male_plaey").css('display', 'none');
    $(".male_bt").css('display', 'none');
    if (maVideo.paused) {
        maVideo.play();
    } else {
        console.log(11);
        maVideo.pause();
        $(".male_bt").css('display', 'block');
    }
})

var maVid = document.querySelector(".male_vd");

$(".male_b").click(function() {
        $(".male_vid").css('display', 'none');
        $(".male_b").css('display', 'none');
        if (maVid.paused) {
            maVid.play();
        } else {
            maVid.pause();
            $(".male_b").css('display', 'block');
        }
    })
    // ..................底部导航栏................
//var scroTOP = document.querySelector(".male_scroTOP");
//var clientH = document.documentElement.clientHeight || document.body.clientHeight;
//var maTop = true;
//var maTimer = null;
//scroTOP.style.display = "none";
//window.onscroll = function() {
//  var topMadam = document.documentElement.scrollTop || document.body.scrollTop;
//  if (topMadam > 0) {
//      scroTOP.style.display = "block";
//  } else {
//      scroTOP.style.display = "none";
//  }
//}


// ................回到顶部.............
//$(".male_scroTOP").click(function() {
//  var speed = document.documentElement.scrollTop || document.body.scrollTop;
//  var timer = setInterval(function() {
//      speed -= 200;
//      document.documentElement.scrollTop = document.body.scrollTop = speed;
//      if (speed <= 0) {
//          clearInterval(timer);
//      }
//  }, 20)
//  console.log("11");
//})



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
$(function() {
    $.ajax({
        url: '../data/male.json',
        type: 'get',
        dataType: 'json',
        success: function(json) {
            // console.log(json.decorate);
            console.log(json);
            var dert1 = '';
            var dert2 = '';
            $.each(json, function(index, value) {
                if (index < 3) {
                    dert1 += '<li class="swiper-slide"><a href=""><img src="' + value.url + '" alt=""><div class=male_ltMaiosu "><span class="liwenzi ">' + value.dcr + '</span><span class="lishuzi ">' + value.sumo + '</span></div></a><button class="male_xin iconfont iconxin "></button></li>'
                } else {
                    dert2 += '<div class="male_list_tu "><a href=" " class="madan_list "><div class="male_ltImg "><img src="' + value.url + ' " alt=" "></div><div class="male_ltMaiosu "><span class="liwenzi ">' + value.dcr + '</span><span class="lishuzi ">' + value.sumo + '</span></div></a><button class="male_liXin iconfont iconxin "></button></div>'
                }
            })
            $('.madam_right_tupian').html(dert1);
            $('.male_top').html(dert2);

        }
    })
})