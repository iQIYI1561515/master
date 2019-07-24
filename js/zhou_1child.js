$('.btn1').click(function(){
	$('.video1').show();
	$('.skill_img1').hide();
	$('.z_play1').hide();
	if($('.video1')[0].paused){
		$('.video1')[0].play();
	}else{
		$('.video1')[0].pause();
		$('.z_play1').show();	
	}
})
$('.btn2').click(function(){
	$('.video2').show();
	$('.skill_img3').hide();
	$('.z_play2').hide();
	if($('.video2')[0].paused){
		$('.video2')[0].play();
	}else{
		$('.video2')[0].pause();
		$('.z_play2').show();	
	}
})
$(function(){
	$('div').on('click',function(){
		if($(this).hasClass('prev1')){
			$(".imgMove1").animate({marginLeft:0},1000);
			$('.dot1_1').css({'font-size':"20px",'color':"#000"}).siblings().css({'font-size':"12px",'color':"#888"});
		};
		if($(this).hasClass('next1')){
			$(".imgMove1").animate({marginLeft:-1140},1000);			
			$('.dot1_2').css({'font-size':"20px",'color':"#000"}).siblings().css({'font-size':"12px",'color':"#888"});			
		};		
		if($(this).hasClass('dot1_1')){
			$(this).css({'font-size':"20px",'color':"#000"}).siblings().css({'font-size':"12px",'color':"#888"});
			$(".imgMove1").animate({marginLeft:0},1000)
		}else if($(this).hasClass('dot1_2')){
			$(this).css({'font-size':"20px",'color':"#000"}).siblings().css({'font-size':"12px",'color':"#888"});
			$(".imgMove1").animate({marginLeft:-1140},1000);
		}
//		if($(this).hasClass('imgMove1')){
//			if()
//			
//		}
//----------------以一个轮播------------------
		if($(this).hasClass('prev2')){
			$(".imgMove2").animate({marginLeft:0},1000);
			$('.dot2_1').css({'font-size':"20px",'color':"#000"}).siblings().css({'font-size':"12px",'color':"#888"});
		};
		if($(this).hasClass('next2')){
			$(".imgMove2").animate({marginLeft:-1140},1000);			
			$('.dot2_2').css({'font-size':"20px",'color':"#000"}).siblings().css({'font-size':"12px",'color':"#888"});			
		};		
		if($(this).hasClass('dot2_1')){
			$(this).css({'font-size':"20px",'color':"#000"}).siblings().css({'font-size':"12px",'color':"#888"});
			$(".imgMove2").animate({marginLeft:0},1000)
		}else if($(this).hasClass('dot2_2')){
			$(this).css({'font-size':"20px",'color':"#000"}).siblings().css({'font-size':"12px",'color':"#888"});
			$(".imgMove2").animate({marginLeft:-1140},1000);
		}
//		if($(this).hasClass('imgMove1')){
//			if()
//			
//		}
		if($(this).hasClass('btn3')){
			$(this).css({'color':"#000",'border':"2px solid #000"}).siblings().css({'color':"#757575",'border':"2px solid #757575"})
			$('.zz_cImg1').show();
			$('.zz_cImg2').hide();
		}else if($(this).hasClass('btn4')){
			$(this).css({'color':"#000",'border':"2px solid #000"}).siblings().css({'color':"#757575",'border':"2px solid #757575"})
			$('.zz_cImg1').hide();
			$('.zz_cImg2').show();
		}
	});
})


$.fn.extend({            
    eleMove:function(e){
        var ele=$(this);
        ele.on('mousedown',                   
               function(e){
                        //e.preventDefault();//阻止默认行为
//                              var x = e.clientX-ele.offset().left+$(".zz_compare1").offset().left+$(".zz_cImg").offset().left;
                        var x = e.clientX-ele.offset().left+$(".zz_cImg").offset().left; 
                    $(document).on("mousemove",
                            function(e){
                        var l =e.clientX-x;
						var maxl=$('.zz_cImg').width()-ele.width();
                        l=l < 0 ? 0: (l > maxl ? maxl :l);
                        ele.css({
                            "left":l,
                            "top":0
                        })                        
                        $('.zz_cImg1L').css({
                        	"width":l
                    
                        })
                        $('.zz_cImg2L').css({
                        	"width":l
                    
                        })                        
                        return false;//阻止默认行为和冒泡；不能放mousemove前面，否则不会执行mousemove事件
                })
                    $(document).on("mouseup",
                    function(){
                            $(document).off("mousemove");
                    })
               })    
    }
});
$('.moveline1').eleMove()
