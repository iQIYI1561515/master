  var backToTop=document.querySelector(".backToTop");
  var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
  var isTop=true;
  var timer=null;
  backToTop.style.display="none";
  window.onscroll=function(){
    var topH=document.documentElement.scrollTop||document.body.scrollTop; 
    if(topH>0){
      backToTop.style.display="block";
    }else{
        backToTop.style.display="none";
    }
  }
  backToTop.onclick=function(){
    timer=setInterval(function(){
        var topH=document.documentElement.scrollTop||document.body.scrollTop;
        var stepLength=Math.ceil(topH/5);
        document.documentElement.scrollTop=document.body.scrollTop=topH-stepLength;
        if(topH==0){
          clearInterval(timer);
        }
     },50);
  }

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

  $(function(){
    $('span').on('click',function(){
      if($(this).hasClass('shou1')){
        $(this).hide().siblings().show();
        return false;
      }
      if($(this).hasClass('shou2')){	
        $(this).hide().siblings().show();
        return false;
      }
    })
  })
  
  $(function(){
    $('.allProduct').on('click','.goods span',function(){//新添加的元素无法实现点击事件，将事件绑定在原有的父元素上
      if($('.goods span').hasClass('shou1')){
        $(this).hide().siblings().show();//代表的就是当前点击的这个span元素
        return false;//阻止默认事件，即防止点击后触发父级的a便签事件
      }
      if($('.goods span').hasClass('shou2')){
        $(this).hide().siblings().show();
        return false;
      }
    })
  })

  $(function(){
    $(".header-nav").on('mouseenter','a',function(){
      $('.subnav').css('display','block');
     
      $(document).bind('mousemove',function(e){
        var y=e.pageY;
      
        if(y<90||y>645){
          
            $('.subnav').css('display','none');
          
        }

      })
    })
    
   
  })

  $(function(){

    $('.popOn').on('click',function(e){
      var hpop=document.body.clientHeight;
      $('.pop').css({'height':hpop+'px','display':'block'} );
        // $('.pop').css('display','block');
    })
    $('.popOff').on('click',function(){
  
        $('.pop').css('display','none');
    })

   



  })
  