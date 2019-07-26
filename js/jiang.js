
$(".j-vi ").on("click",function(){
	$(".j-play").hide();
	$(".j-vi span").toggle();
});
$(".j-state2-right").on('click',function(){
	$(".j-state2-right .j-play2").hide();
	$(".j-state2-right span").toggle();
});
$(".j-b-rig").click(function(){
	var b =$(window).scrollTop(1000);
		
});
$(".j-btn .j-open").click(function(){
	$(".j-hid").slideDown(1000,"swing",function(){
		$(".j-btn .j-open").hide();
		$(".j-btn .j-close").show();
	});
	
});
$(" .j-btn .j-close").click(function(){
	$(".j-btn .j-open").show();
	$(".j-hid").hide();	
	$(".j-btn .j-close").hide();
	$(window).scrollTop(800);
	
});
$(".j-state-right .j-open").click(function(){
	$(".j-hidpic").slideDown(1000,"swing");
	$(".j-state-right .j-open").hide();
});
$(".j-close2").click(function(){
	$(".j-state-right .j-open").show();
	$(".j-hidpic").slideUp();
});
$(".j-add").click(function(){
	var w= $(".swiper-wrapper img").width();
	$(".swiper-wrapper img").css({width:w+10})
});


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
});

	//------------------------------蒙版层---------------------------------	
	$.ajax({		
			type:"get",
			url:"../data/w-goods.json",
			dataType:"json",
			cache:false,
			success:function(json){									
				var result="";
	
				$.each(json,function(index,item){
						if(index>16){
							result +=`<li code="${item.code}"><img src="${item.imgurl}" alt=""><p>${item.title}</p><p>${item.price}</p><i class='iconfont iconxin'></i></li>`;
						}													
				});					
				$(".jj-main-pic ul").html(result);
					
				if(localStorage.getItem("commodity")){
					
				  	var val="";				
					var codeArr=JSON.parse(localStorage.getItem("commodity")).code;
					if(codeArr.length==0){			
						$(".jj-collect").html("<p class='jj-kong'>我的最爱没有任何商品</p>");		
					}
					$.each(json,function(index1,item1){
						$.each(codeArr,function(index2,item2){
							if(item1.code==item2){
								val +=`<div class="jj-col-one" code="${item1.code}">
									<img src="${item1.imgurl}" alt="">
									<p>
										<span>${item1.title} </span>
										<span>删除</span>
										<span style="color:red;margin-left:80px">￥${item1.price}</span>									
									</p>
								</div>`;							
							}					
						})								
					});
					$(".jj-collect").html(val);									
				}		
				 if(localStorage.getItem("goods")){	
					 var val2="";			
					var codeArr2=JSON.parse(localStorage.getItem("goods")).code;														
					$.each(json,function(index1,item1){
						$.each(codeArr2,function(index2,item2){
							if(item1.code==item2){
								val2 +=`<div class="jj-col-one" code="${item1.code}">
									<img src="${item1.imgurl}" alt="">
									<p>
										<span>${item1.title} </span>
										<span>删除</span>
										<span style="color:red;margin-left:80px">￥${item1.price}</span>									
									</p>
								</div>`;							
							}					
						})										
					});
					$(".jj-car").html(val2);
					var val3=`<div class="jj-count">总计：<span>￥43445</span><div>
								<div class="jj-dan"><a href="" style="color:#ffffff;">结账</a></div>`;
					$(".jj-hebing").html(val3);
					if(codeArr2.length==0){			
						$(".jj-car").html("<p class='jj-kong'>没有商品，继续逛</p>");
						$(".jj-hebing").hide();		
					}				
				}											
			}
		});	
	//---------------------------------------------------
	//---------------------加入收藏--------------------
		$('.jj-main-pic').on("click","li i",function(){		
			$('#jj-hid').show();	
			// localStorage.clear("commodity")		
			document.documentElement.style.overflow='hidden';
			$('.iconxin').css({"color":"black"});
			var code = $(this).parent().attr("code");
			if(localStorage.getItem("commodity")){
				var codeArr=JSON.parse(localStorage.getItem("commodity")).code;		
			}else{var codeArr=[]};
	
			codeArr.push(code);
			var jsonStr =JSON.stringify({"code":codeArr});
			localStorage.setItem("commodity",jsonStr);
			alert("已成功加入收藏");
	
			if(localStorage.getItem("commodity")){			
				var arr=JSON.parse(localStorage.getItem("commodity")).code;	
				if(arr.length==0){return false};
				$.ajax({
					type:"get",
					url:"../data/w-goods.json",
					dataType:"json",
					cache:false,
					success:function(json){
						var val4="";			
						$.each(json,function(ind,it){
							$.each(arr,function(i,va){
								if(it.code==va){
									val4 +=`<div class="jj-col-one" code="${it.code}">
										<img src="${it.imgurl}" alt="">
										<p>
											<span>${it.title} </span>
											<span>删除</span>
											<i class="iconfont icongouwudai"></i>
										</p>
									</div>`;
								}
							})														
						});											
						$(".jj-collect").html(val4);
					}
	
				})
			}
			
		});
		//-------------------------删除----------------------
		$(".jj-collect").on("click",".jj-col-one p span:nth-child(2)",function(){
			if(localStorage.getItem("commodity")){			
				var arr=JSON.parse(localStorage.getItem("commodity")).code;	
				if(arr.length==0){return false};
			}	
			var code=$(this).closest(".jj-col-one").attr("code");	
			$(this).closest(".jj-col-one").remove();	
			$.each(arr,function(index,item){			
				if(code==item){	
					arr.splice(index,1)
				}
			});
			var string=JSON.stringify({'code':arr});
			localStorage.setItem("commodity",string);	
			if(arr.length==0){			
				$(".jj-collect").html("<p class='jj-kong'>我的最爱没有任何商品</p>");		
			}
		});
		// // ----------------------加入购物车------------------
		(function(){	
			$('.jj-collect').on("click","p i",function(){
				$(".jj-hebing").show();		
				var code = $(this).closest(".jj-col-one").attr("code");			
				if(localStorage.getItem("goods")){
					var codeArr=JSON.parse(localStorage.getItem("goods")).code;		
				}else{var codeArr=[]};
				codeArr.push(code);
				var jsonStr =JSON.stringify({"code":codeArr});
				localStorage.setItem("goods",jsonStr);
				alert("已成功加入购物车");			
				if(localStorage.getItem("goods")){			
					var arr=JSON.parse(localStorage.getItem("goods")).code;	
					if(arr.length==0){return false};
					$.ajax({
						type:"get",
						url:"../data/w-goods.json",
						dataType:"json",
						cache:false,
						success:function(json){
							var val5="";
							var pric="";
							var num;									
							$.each(json,function(index1,item1){
								$.each(arr,function(index2,item2){
									if(item1.code==item2){
										val5 +=`<div class="jj-col-one" code="${item1.code}">
											<img src="${item1.imgurl}" alt="">
											<p>
												<span>${item1.title} </span>
												<span>删除</span>
												<span style="color:red;margin-left:80px">￥${item1.price}</span>									
											</p>
										</div>`;									
										num=Number(item1.price)
										num += num
									}							
								})								
							});												
							var val3=`<div class="jj-count">总计：<span>￥${num}</span><div>
							<div class="jj-dan"><a href="" style="color:#ffffff;">结账</a></div>`;		
							$(".jj-car").html(val5);
							$(".jj-hebing").html(val3);
						}
		
					})
				}
				
			});
			//-------------------------删除----------------------	
			$(".jj-car").on("click",".jj-col-one p span:nth-child(2)",function(){
				if(localStorage.getItem("goods")){			
					var arr=JSON.parse(localStorage.getItem("goods")).code;	
					if(arr.length==0){return false};
				}			
				var code=$(this).closest(".jj-col-one").attr("code");	
				$(this).closest(".jj-col-one").remove();	
				$.each(arr,function(index,item){			
					if(code==item){	
						arr.splice(index,1)
					}
				});
				var string=JSON.stringify({'code':arr});
				localStorage.setItem("goods",string);	
				if(arr.length==0){			
					$(".jj-car").html("<p class='jj-kong'>没有商品，继续逛</p>");
					$(".jj-hebing").hide();		
				}
			});
		})()
		
	// ---------------------------------------------------------
	
	
	
		
		$(".jj-back").on("click",function(){
				$(".jj-back").hide();
				$(".jj-lef-vedio span").hide();
				if($(".jj-lef-vedio video")[0].paused){			
					$(".jj-lef-vedio video")[0].play();		
				}else{$(".jj-lef-vedio video")[0].pause();}
			
		})
			//------------------购物车---------------------------
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
	


	$(".jj-hid-right").on("click","h5 span",function(){
		$('#jj-hid').hide();
		document.documentElement.style.overflow='auto'; 
	});	
	
	$(".header-right").on("click","span:eq(2)",function(){		
		$('#jj-hid').show();
		document.documentElement.style.overflow='hidden';})

	






