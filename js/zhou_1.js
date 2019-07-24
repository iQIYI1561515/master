$(function (){
    // 加载数据
    $.ajax({
        url: '../data/z_shop.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success: function (data){
            var results = '';
            $.each(data,function (index,item){
                results += '<li class="goods" code="'+item.code+'"><a href="#"><img src="'+item.imgurl+'" alt=""><span class="shou1 iconfont iconxin"></span><span class="shou2 iconfont iconxin1"></span><div class="sMessage"><p>'+item.title+'</p><p>'+item.state1+'</p><p>'+item.state2+'</p><p>'+item.colors+'</p><h3>'+item.price+'</h3></div></a></li>';
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

