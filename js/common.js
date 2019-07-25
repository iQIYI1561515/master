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
	  		 return false;
	timer=setInterval(function(){
  		var topH=document.documentElement.scrollTop||document.body.scrollTop;
  		var stepLength=Math.ceil(topH/5);
  		document.documentElement.scrollTop=document.body.scrollTop=topH-stepLength;

  		if(topH==0){
  			clearInterval(timer);
  		}

 	},50);
}
////---------------蒙版--------------------

	// localStorage.clear("commodity");
//	$.ajax({		
//		type:"get",
//		url:"../data/w-goods.json",
//		dataType:"json",
//		cache:false,
//		success:function(json){
//			var result="";			
//			$.each(json,function(index,item){
//				result +=`<li code="${item.code}"><img src="${item.url}" alt=""><p>${item.title}</p><p>${item.price}</p><i class='iconfont iconxin'></i></li>`;								
//			});		
//			$(".jj-main-pic ul").html(result);;
//		}
//	});	
//---------------------------------------------------




//---------------------加入收藏--------------------
//	$('.allProduct').on("click",".wgoods a .shou1",function(){		
//		$('#jj-hid').show();		
//		document.documentElement.style.overflow='hidden';
//		$('.iconxin').css({"color":"black"});
//		var code = $(this).parent().attr("code");
//		if(localStorage.getItem("commodity")){
//			var codeArr=JSON.parse(localStorage.getItem("commodity")).code;		
//		}else{var codeArr=[]};
//
//		codeArr.push(code);
//		var jsonStr =JSON.stringify({"code":codeArr});
//		localStorage.setItem("commodity",jsonStr);
//		alert("已成功加入收藏");
//
$(function(){
	if(localStorage.getItem("wgoods")){
			var arr=JSON.parse(localStorage.getItem("wgoods")).code;	
				if(arr.length==0){return false};
			$.ajax({
				type:"get",
				url:"../data/w-goods.json",
				dataType:"json",
				cache:false,
				success:function(data){
					var val="";			
					$.each(arr,function(i,item){
							$.each(data,function(index,obj){
							if(item == obj.code){
								val +=`<div class="jj-col-one" code="${obj.code}">
									<img src="${obj.imgurl}" alt="">
									<p>
										<span>${obj.title} </span>
										<span>删除</span>
										<i class="iconfont icongouwudai"></i>
									</p>
								</div>`;
							}
						})														
					});							
					$(".jj-collect").html(val);
				}

			})
		}
		//-------------------------删除----------------------
		$(".jj-collect").on("click",".jj-col-one p span:nth-child(2)",function(){
			var code=$(this).closest(".jj-col-one").attr("code");	
			$(this).closest(".jj-col-one").remove();	
			$.each(arr,function(index,item){			
				if(code==item){	
					arr.splice(index,1)
				}
			});
			var string=JSON.stringify({'code':arr});
			localStorage.setItem("wgoods",string);	
			if(arr.length==0){			
				$(".jj-collect").html("<p class='jj-kong'>我的最爱没有任何商品</p>");		
			}
		});
	});

	// // ----------------------加入购物车------------------
	(function(){
		if(localStorage.getItem("wgoods")){			
			var arr=JSON.parse(localStorage.getItem("wgoods")).code;	
			if(arr.length==0){return false};
			$.ajax({
				type:"get",
				url:"../data/w-goods.json",
				dataType:"json",
				cache:false,
				success:function(data){
					var val="";	
					// var pric="";	
					var num;	
					$.each(arr,function(i,item){
						$.each(data,function(index,obj){
							if(item == obj.code){
								val +=`<div class="jj-col-one" code="${obj.code}">
									<img src="${obj.imgurl}" alt="">
									<p>
										<span>${obj.title} </span>
										<span>删除</span>
										<span style="color:red;margin-left:80px";>￥${obj.price}</span>								
									</p>
								</div>`;
								num=Number(obj.price)
								num += num
							}
						})								
					});
					var val2=`<div class="jj-count">总计：<span>￥${num}</span><div>
						<div class="jj-dan">结账</div>`;
					$(".jj-car").html(val);
					$(".jj-hebing").html(val2);
				}

			})
		}
		
		$('.jj-collect').on("click","p i",function(){		
			// localStorage.removeItem('goods');
			var code = $(this).closest(".jj-col-one").attr("code");
			var clone=$(this).closest(".jj-col-one").clone(true);
			if(localStorage.getItem("wgoods")){
				var codeArr=JSON.parse(localStorage.getItem("wgoods")).code;		
			}else{var codeArr=[]};
			codeArr.push(code);
			// console.log(codeArr)
			var jsonStr =JSON.stringify({"code":codeArr});
			localStorage.setItem("wgoods",jsonStr);
			alert("已成功加入购物车");			
			if(localStorage.getItem("wgoods")){			
				var arr=JSON.parse(localStorage.getItem("wgoods")).code;	
				if(arr.length==0){return false};
				$.ajax({
					type:"get",
					url:"../data/w-goods.json",
					dataType:"json",
					cache:false,
					success:function(data){
						var val="";
						var pric="";
						var num;									
						$.each(arr,function(i,item){
							$.each(data,function(index,obj){
								if(obj.code==item){
									val +=`<div class="jj-col-one" code="${obj.code}">
										<img src="${obj.imgurl}" alt="">
										<p>
											<span>${obj.title} </span>
											<span>删除</span>
											<span style="color:red;margin-left:80px">￥${obj.price}</span>									
										</p>
									</div>`;
									console.log(obj.price)
									num=Number(obj.price)
									num += num
								}
							
							})								
						});
						
						var val2=`<div class="jj-count">总计：<span>￥${num}</span><div>
						<div class="jj-dan">结账</div>`;		
						$(".jj-car").html(val);
						$(".jj-hebing").html(val2);
					}
	
				})
			}
			//-------------------------删除----------------------	
		});
		$(".jj-car").on("click",".jj-col-one p span:nth-child(2)",function(){			
			var code=$(this).closest(".jj-col-one").attr("code");	
			$(this).closest(".jj-col-one").remove();	
			$.each(arr,function(index,item){			
				if(code==item){	
					arr.splice(index,1)
				}
			});
			var string=JSON.stringify({'code':arr});
			localStorage.setItem("wgoods",string);	
			if(arr.length==0){			
				$(".jj-car").html("<p class='jj-kong'>没有商品，继续逛</p>");		
			}
		});
	})()
	
	
		$(".jj-hid-right").on("click","ul li",function(){	
				var index =$(this).index();
				$(this).css({
					"border-bottom":"1px solid black"
				}).siblings().css({"border-bottom":"none"})
				$('.jj-same').each(function(i,item){
					$('.jj-same').eq(i).hide();
				})
				$('.jj-same').eq(index).show();
			})
		$(".jj-hid-right").on("click","h5 span",function(){
			$('#jj-hid').hide();
			document.documentElement.style.overflow='auto'; 
		})
