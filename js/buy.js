			$('.circle').each(function (index,item){
			    $(this).click(function (){
			        $(this).addClass('circleactive').siblings().removeClass('circleactive');
			        $('.detail1').eq(index).addClass('detail1show').siblings().removeClass('detail1show');
			    })
			});
			
			$('.tabs-header li').each(function (index,item){
			    $(this).click(function (){
			        $(this).addClass('tabs-header-item-selected').siblings().removeClass('tabs-header-item-selected');
			        $('.buy-content').eq(index).addClass('buy-show').siblings().removeClass('buy-show');
			    })
			});	