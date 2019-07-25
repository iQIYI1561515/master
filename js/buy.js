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
			$(function (){
			    if (localStorage.getItem('wgoods')) {
			        var codeArr = JSON.parse( localStorage.getItem('wgoods') ).code;
			
			        if (codeArr.length == 0) {
			            return false;
			        }
			        $.ajax({
			            url: '../data/w-goods.json',
			            type: 'get',
			            cache: false,
			            dataType: 'json',
			            success: function (data){
			                var buyresults = '';
			                $.each(codeArr,function (i,item){
			                    $.each(data,function (index,obj){
			                        if (item == obj.code) {
			                            buyresults += `<li><a href="#"><img src="${obj.imgurl}" alt="" /></a></li>`;
			                        }
			                    });
			                });
			                $('.recentlylist').html(buyresults);
			            }
			        });
			    }
			})

