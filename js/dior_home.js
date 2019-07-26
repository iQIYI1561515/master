//返回顶部
var backToTop = document.querySelector(".backToTop");
var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
var isTop = true;
var timer = null;
backToTop.style.display = "none";
window.onscroll = function () {
  var topH = document.documentElement.scrollTop || document.body.scrollTop;
  if (topH > 0) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}
backToTop.onclick = function () {
  timer = setInterval(function () {
    var topH = document.documentElement.scrollTop || document.body.scrollTop;
    var stepLength = Math.ceil(topH / 5);
    document.documentElement.scrollTop = document.body.scrollTop = topH - stepLength;
    if (topH == 0) {
      clearInterval(timer);
    }
  }, 50);
}

//轮播图
$(function () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
      delay: 3500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletElement: 'span',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  })

  // mySwiper.el.onmouseover = function () {
  //   mySwiper.autoplay.stop();
  // }
  /* $('.swiper-wrapper').mouseover(function () {
    mySwiper.autoplay.stop();
  })
  $('.swiper-wrapper').mouseout(function () {
    mySwiper.autoplay.start();
  }) */
})

//爱心购物车
$(function () {
  $('span').on('click', function () {
    if ($(this).hasClass('shou1')) {
      $(this).hide().siblings().show();
      return false;
    }
    if ($(this).hasClass('shou2')) {
      $(this).hide().siblings().show();
      return false;
    }
  })
})

$(function () {
  $('.allProduct').on('click', '.goods span', function () {//新添加的元素无法实现点击事件，将事件绑定在原有的父元素上
    if ($('.goods span').hasClass('shou1')) {
      $(this).hide().siblings().show();//代表的就是当前点击的这个span元素
      return false;//阻止默认事件，即防止点击后触发父级的a便签事件
    }
    if ($('.goods span').hasClass('shou2')) {
      $(this).hide().siblings().show();
      return false;
    }
  })
})

//二级导航栏
$(function () {
  $(".header-nav").on('mouseenter', 'a', function () {
    $('.subnav').css('display', 'block');

    $(document).bind('mousemove', function (e) {
      var y = e.pageY;

      if (y < 90 || y > 645) {

        $('.subnav').css('display', 'none');

      }

    })
  })


})


//邮件正则
$(function () {
  $('.iptReg').bind({
    keyup: function () {
      var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{3,5}){1,2}$/;
      if (emailReg.test($('.iptReg').val())) {
        $('.btnpop').css('background', 'black');
        $('.btnpop').addClass('popOn');
        $('.emailPop').val($('.iptReg').val());
      } else {
        $('.btnpop').css('background', '#c1c1bc');
        $('.btnpop').removeClass('popOn');
        $('.emailPop').val('');
      }
    }, input: function () {
      var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
      if (emailReg.test($('.iptReg').val())) {
        $('.btnpop').css('background', 'black');
        $('.btnpop').addClass('popOn');
        $('.emailPop').val($('.iptReg').val());
      } else {
        $('.btnpop').css('background', '#c1c1bc');
        $('.btnpop').removeClass('popOn');
        $('.emailPop').val('');
      }
    }
  })


})


//邮件通知
$(function () {

  $('.service-guild').on('click', '.popOn', function (e) {
    var hpop = document.body.clientHeight;
    $('.pop').css({ 'height': hpop + 'px', 'display': 'block' });
    // $('.pop').css('display','block');
  })
  $('.popOff').on('click', function () {

    $('.pop').css('display', 'none');
  })

})


/* //设置cookie

function setCookie(key, val, day) {
  if (day) {
    var d = new Date();
    d.setDate(d.getDate() + day);
    document.cookie = key + "=" + val + ";expires=" + d;
  } else {
    document.cookie = key + "=" + val;
  }
}

function getCookie(key) {

  var cookies = document.cookie;

  var arr = cookies.split("; ")

  for (i = 0, len = arr.length; i < len, i++;) {

    var arr2 = arr[i].split("=");
    if(key==arr2[0]){
      return arr2[1];
    }
  }
  return null;
}

document.cookie = setCookie('email', $('.iptReg').val(), 30);
$('.iptReg').val(getCookie('1')); */
