			var telephoneNo = $("#telephoneNo");
			var createPassword = $("#create-password");
			var firstname = $("#firstname");
			var lastname = $("#lastname");
			var gender = $("#gender");
			var firstnameReg = /^[\u4E00-\u9FA5A-Za-z]+$/;
			var lastnameReg = /^[\u4E00-\u9FA5A-Za-z]+$/;
			var telephoneNoReg = /^[1-9][2-9]\d{9}$/;
			var createPasswordReg = /^\w{6,16}$/;
			var advice = $(".advice")
			var checkbox2 = $(".checkbox2")
			$("#add").click(function (){
    			if(telephoneNo.val() == "" || createPassword.val() == "" || gender.val() == "" || firstname.val() == "" || lastname.val() == ""){
    				alert("请完善信息");
    			}else if(!checkbox2.prop('checked')){
    				alert("必须勾选");
    				return false;
    			}else if(firstnameReg.test(firstname.val()) && lastnameReg.test(lastname.val()) && telephoneNoReg.test(telephoneNo.val()) && createPasswordReg.test(createPassword.val()) && checkbox2.prop('checked')){
    				$.ajax({
	    				url:'../data/login2.php',
	    				type: 'get',
	    				data: 'act=add&user='+telephoneNo.val()+'&pass='+createPassword.val(),
	    				cache: false,
	    				dataType: 'json',
	    				success : function (data) {
	    					alert(data.msg);
							if(data.msg == "注册成功"){
								window.location.href= "login.html";
							}
	    				}
	    			});
    			}	
    		})
			gender.mouseup(function () {
				if(gender.val() == ""){
    				advice.html("请选择");
    			}else{
    				advice.html("");
    			}
			})
			firstname.keyup(function () {
				if(firstnameReg.test(firstname.val())){
					$(".err1").html("正确").css({"color":"green","fontSize":"12px"});
				}
				else{
					$(".err1").html("名字可以是英文或中文两位以上").css({"color":"red","fontSize":"12px"});
				}
			})
			lastname.keyup(function () {
				if(lastnameReg.test(lastname.val())){
					$(".err2").html("正确").css({"color":"green","fontSize":"12px"});
				}
				else{
					$(".err2").html("名字可以是英文或中文两位以上").css({"color":"red","fontSize":"12px"});
				}
			})
			telephoneNo.keyup(function () {
				if(telephoneNoReg.test(telephoneNo.val())){
					$(".err3").html("正确").css({"color":"green","fontSize":"12px"});
				}
				else{
					$(".err3").html("十一位电话号码").css({"color":"red","fontSize":"12px"});
				}
			})
			createPassword.keyup(function () {
				if(createPasswordReg.test(createPassword.val())){
					$(".err4").html("正确").css({"color":"green","fontSize":"12px"});
				}
				else{
					$(".err4").html("六位以上数字或字母").css({"color":"red","fontSize":"12px"});
				}
			})