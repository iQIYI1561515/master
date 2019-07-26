			var btn = document.querySelector(".btn");
			var playImg = document.querySelector(".play-img");
			var video1 = document.querySelector(".video1");
			var play = document.querySelector(".play");
			var toLeft = document.querySelector(".toLeft");
			var toRight = document.querySelector(".toRight");
			var imglist = document.querySelector(".imglist");
			var tablist = document.querySelector(".tablist");
			var tablistLi = tablist.children;
			btn.onclick = function () {
				playImg.style.display = "none";
				play.style.display = "none";
				if(video1.paused){
			        video1.play();
			    }else{
			        video1.pause();
			        play.style.display = "block";
			    }
			}
			
			var index = 0;
			toRight.onclick = function () {
				if(index == 2){
					imglist.style.left = 0;
					index = 1;
				}else{
					index++;
				}
				animate(imglist,param = {left : -432*index},10);
				for (var i = 0; i < tablistLi.length; i++) {
					tablistLi[i].className = "";
				}
				tablistLi[index == 2 ? 0 : index].className = "active";
			}
			toLeft.onclick = function () {
				if(index == 0){
					imglist.style.left = -864+"px";
					index = 1;
				}else{
				index--;	
				}
				animate(imglist,param = {left : -432*index},10);
				for (var i = 0; i < tablistLi.length; i++) {
					tablistLi[i].className = "";
				}
				tablistLi[index == 2 ? 0 : index].className = "active";
			}			
			
//			var backToTop=document.querySelector(".backToTop");
//				var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
//				var isTop=true;
//				var timer=null;
//				backToTop.style.display="none";
//				window.onscroll=function(){
//					var topH=document.documentElement.scrollTop||document.body.scrollTop; 
//					if(topH>0){
//						backToTop.style.display="block";
//					}else{
//					    backToTop.style.display="none";
//					}
//				}
//				backToTop.onclick=function(){
//					timer=setInterval(function(){
//				  		var topH=document.documentElement.scrollTop||document.body.scrollTop;
//				  		var stepLength=Math.ceil(topH/5);
//				  		document.documentElement.scrollTop=document.body.scrollTop=topH-stepLength;
//				  		if(topH==0){
//				  			clearInterval(timer);
//				  		}
//				 	},50);
//				}
			

		$(function (){
					$.ajax({
				        url: '../data/w-goods.json',
				        type: 'get',
				        cache: false,
				        dataType: 'json',
				        success: function (data){
				            var w1results = '';
				            var w2results = '';
				            var w3results = '';
				            var i=0
				            $.each(data,function (index,item){
				            	if(index < 4){
			            			w1results += '<li class="wgoods" code="'+item.code+'"><a href="buy.html"><img class="clothesimg" src="'+item.imgurl+'"/><p class="clothesList-tit">'+item.title+'</p><span class="clothesList-price">'+item.price+'</span></a><button class="joinlove"><span class="love1 iconfont iconxin"></span><span class="love2 iconfont iconxin1"></span></button></li>'
				            	}
				            	if(index >=4 && index <=7){
				            		w2results += '<li class="wgoods" code="'+item.code+'"><a href="buy.html"><img class="clothesimg" src="'+item.imgurl+'"/><p class="clothesList-tit">'+item.title+'</p><span class="clothesList-price">'+item.price+'</span></a><button class="joinlove"><span class="love1 iconfont iconxin"></span><span class="love2 iconfont iconxin1"></span></button></li>'
				            	}
			            		if(index>7 && index <=11){
			            			w3results += '<li class="wgoods" code="'+item.code+'"><a href="buy.html"><img class="clothesimg" src="'+item.imgurl+'"/><p class="clothesList-tit">'+item.title+'</p><span class="clothesList-price">'+item.price+'</span></a><button class="joinlove"><span class="love1 iconfont iconxin"></span><span class="love2 iconfont iconxin1"></span></button></li>'
			            		}
				            	
				            });
				            $('.clothesList1').html(w1results);
				            $('.clothesList2').html(w2results);
				            $('.clothesList3').html(w3results);
				        }
				    });
				    
					$('.clothesList').on('click','.wgoods a img',function (){				     	
				        var code = $(this).parent().parent().attr('code');
				        if (localStorage.getItem('ngoods')) {
				            var codeArr1 = JSON.parse(localStorage.getItem('ngoods')).code;
				        } else {
				            var codeArr1 = [];
				        }
				        codeArr1.push(code);
				        var jsonStr1 = JSON.stringify({"code":codeArr1});
				        localStorage.setItem('ngoods',jsonStr1);
				
				    });
				    
				    $('.clothesList').on('click','.wgoods .joinlove span',function (){						
						if($(this).hasClass('love1')){
//							$('#jj-hid').show();
							var code = $(this).parent().parent().attr('code');
						        if (localStorage.getItem('commodity')) {
						            var codeArr = JSON.parse(localStorage.getItem('commodity')).code;
						        } else {
						            var codeArr = [];
						        }
						        codeArr.push(code);
						        var jsonStr = JSON.stringify({"code":codeArr});
						        localStorage.setItem('commodity',jsonStr);
						
						        alert('加入收藏！');
			
							$(this).hide().siblings().show();
						}
						if($(this).hasClass('love2')){	
							$(this).hide().siblings().show();
						}
						    });
						    
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
					});
					
					//-------------------------------------------------
				
					$(".jj-hid-right").on("click","h5 span",function(){
						$('#jj-hid').hide();
						document.documentElement.style.overflow='auto'; 
					});	
					
					$(".header-right").on("click","span:eq(2)",function(){		
						$('#jj-hid').show();
						document.documentElement.style.overflow='hidden';})

					