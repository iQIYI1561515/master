var backToTop=document.querySelector(".backToTop");
var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
var isTop=true;
var timer=null;
backToTop.style.display="none";
window.onscroll=function(e){
//	e.stopPropagation();
	var topH=document.documentElement.scrollTop||document.body.scrollTop; 
	if(topH>0){
		backToTop.style.display="block";
	}else{
	    backToTop.style.display="none";
	}
}
backToTop.onclick=function(e){
	timer=setInterval(function(){
  		var topH=document.documentElement.scrollTop||document.body.scrollTop;
  		var stepLength=Math.ceil(topH/5);
  		document.documentElement.scrollTop=document.body.scrollTop=topH-stepLength;

  		if(topH==0){
  			clearInterval(timer);
  		}

 	},50);
}




$(function(){
	//-------------------显示隐藏区------------------------
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
});
	
//$(".jj-hid-right").on("click","h5 span",function(){
//		$('#jj-hid').hide();
//		document.documentElement.style.overflow='auto'; 
//	})	
	
$(".header-right").on("click","span:eq(2)",function(){		
$('#jj-hid').show();
document.documentElement.style.overflow='hidden';})
