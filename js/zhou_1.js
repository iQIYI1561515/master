$(function (){
	
	
    // 加载数据
    $.ajax({
        url: '../data/w-goods.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (data){
            var results = '';
            $.each(data,function (index,item){
            	if(index > 11 && index < 17)
                results += '<li class="wgoods" code="'+item.code+'"><a href="buy.html"><img src="'+item.imgurl+'" alt=""><span class="shou1 iconfont iconxin"></span><span class="shou2 iconfont iconxin1"></span><div class="sMessage"><p>'+item.title+'</p><p>'+item.state1+'</p><p>'+item.state2+'</p><p>'+item.colors+'</p><h3>'+item.price+'</h3></div></a></li>';
            });
            $('.allProduct').html(results);
        }
    });
    
})


$('.btn1').click(function(){
	$('.video1').show();
	$('.zz_img').hide();
	$('.z_play').hide();
	if($('video')[0].paused){
		$('video')[0].play();
	}else{
		$('video')[0].pause();
		$('.z_play').show();	
	}
})
$('.btn2').click(function(){
	$('.video2').show();
	$('.zl_img1').hide();
	$('.z_play2').hide();
	if($('.video2')[0].paused){
		$('.video2')[0].play();
	}else{
		$('.video2')[0].pause();
		$('.z_play2').show();	
	}
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
     $('.allProduct').on('click','.wgoods a img',function (){		 	
		    var code = $(this).parent().parent().attr('code');
		    if (localStorage.getItem('wgoods')) {
		        var codeArr = JSON.parse(localStorage.getItem('wgoods')).code;
		    } else {
		        var codeArr = [];
		    }
		    codeArr.push(code);
		    var jsonStr = JSON.stringify({"code":codeArr});
		    localStorage.setItem('wgoods',jsonStr);

});
	
	
	$('.allProduct').on('click','.wgoods a span',function(){//新添加的元素无法实现点击事件，将事件绑定在原有的父元素上
		if($('.wgoods span').hasClass('shou1')){
			$('#jj-hid').show();
			$(this).hide().siblings().show();//代表的就是当前点击的这个span元素
			var code = $(this).parent().parent().attr('code');//找到添加了code属性的节点元素
			if(localStorage.getItem('wgoods')){
					var codeArr = JSON.parse(localStorage.getItem('wgoods')).code;
				}else{
					var codeArr = [];
				}
				codeArr.push(code);
				var jsonStr = JSON.stringify({"code":codeArr});
				localStorage.setItem('wgoods',jsonStr);
		alert('添加购物车成功');
			return false;//阻止默认事件，即防止点击后触发父级的a便签事件
		}
		if($('.wgoods span').hasClass('shou2')){
			$(this).hide().siblings().show();
			return false;
		}

	});
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
	$(function (){
    // 加载数据
    $.ajax({
        url: '../data/w-goods.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (data){
            var results = '';
            $.each(data,function (index,item){
            	if(index > 11 && index < 17)
                results += '<li class="wgoods" code="'+item.code+'"><a href="buy.html"><img src="'+item.imgurl+'" alt=""><span class="shou1 iconfont iconxin"></span><span class="shou2 iconfont iconxin1"></span><div class="sMessage"><p>'+item.title+'</p><p>'+item.state1+'</p><p>'+item.state2+'</p><p>'+item.colors+'</p><h3>'+item.price+'</h3></div></a></li>';
            });
            $('.allProduct').html(results);
        }
    });
    
})


$('.btn1').click(function(){
	$('.video1').show();
	$('.zz_img').hide();
	$('.z_play').hide();
	if($('video')[0].paused){
		$('video')[0].play();
	}else{
		$('video')[0].pause();
		$('.z_play').show();	
	}
})
$('.btn2').click(function(){
	$('.video2').show();
	$('.zl_img1').hide();
	$('.z_play2').hide();
	if($('.video2')[0].paused){
		$('.video2')[0].play();
	}else{
		$('.video2')[0].pause();
		$('.z_play2').show();	
	}
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
     $('.allProduct').on('click','.wgoods a img',function (){		 	
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
	
	
	$('.allProduct').on('click','.wgoods a span',function(e){//新添加的元素无法实现点击事件，将事件绑定在原有的父元素上
		if($('.wgoods span').hasClass('shou1')){
			$('#jj-hid').show();
			$(this).hide().siblings().show();//代表的就是当前点击的这个span元素
			var code = $(this).parent().parent().attr('code');//找到添加了code属性的节点元素
			if(localStorage.getItem('wgoods')){
					var codeArr = JSON.parse(localStorage.getItem('wgoods')).code;
				}else{
					var codeArr = [];
				}
				codeArr.push(code);
				var jsonStr = JSON.stringify({"code":codeArr});
				localStorage.setItem('wgoods',jsonStr);
//		alert('添加购物车成功');
			return false;//阻止默认事件，即防止点击后触发父级的a便签事件
		}
		if($('.wgoods span').hasClass('shou2')){
			$(this).hide().siblings().show();
			return false;
		}

	});
})

	

