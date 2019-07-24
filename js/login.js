var user = $(".user");
    		var pass = $(".pass");
    		var check = $(".checkbox1");
    		var loginBtn = $(".login-btn");
    		var reg = /^[1-9][2-9]\d{9}$/;
    		var reg1 = /^\w{6,16}$/;
    		var error1 = $(".error1");
    		var error2 = $(".error2");
    		var userflag = false;
    		var passflag = false;
    		user.keyup(function (){
    			if(reg.test(user.val())){
    				error1.html("再检查一遍是你的手机号吗").css('color', 'green');
    				userflag = true;
    			}else{
    				error1.html("请输入正确的手机号码").css('color', 'red');
    			}
    		})	
    		pass.keyup(function (){
    			if(reg1.test(pass.val())){
    				error2.html("密码记住了吗？要不删了再输一遍？").css('color', 'green');
    				passflag = true;
    			}else{
    				error2.html("请输入正确的密码").css('color', 'red');
    			}
    		})
    		loginBtn.click(function (){
    			if(user.val() == ""){
    				alert('请输入用户名');
    			}else if(pass.val() == ""){
    				alert('请输入密码');
    			}else if(!check.prop('checked')){
    				alert("必须勾选");
    				return false;
    			}else if(userflag == true && passflag == true && check.prop('checked')){
    				$.ajax({
	    				url:'../data/login2.php',
	    				type: 'get',
	    				data: 'act=login&user='+user.val()+'&pass='+pass.val(),
	    				cache: false,
	    				dataType: 'json',
	    				success : function (data) {
	    					alert(data.msg);
	    				}
	    			});
    			}
    		})