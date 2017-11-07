		$(function(){
			$(".regist form input.tel").focus(function(){
				$(".regist .tip").hide(500)
				
			}).blur(function(){
				checkTel();
				$(".regist .tip").show(500);
			})
			$(".regist form input.pwd").focus(function(){
				$(".regist .tip").hide(500);
				
			}).blur(function(){
				checkPwd();
				$(".regist .tip").show(500);
			})
//			$(".regist form").submit(function(){
//				return checkAll();
//				
//			})
			function checkTel(){
				var reg1 = /^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}$/;
				var telV = $(".regist form input.tel").val();
				if(reg1.test(telV) == true) {
					
					$(".regist .tip").html("<span class='rht'>手机号输入正确</span>");
					return true;
				} else {
					
					$(".regist .tip").html("<span class='err'>手机号输入错误,请重新输入</span>");
					return false;
				}
			}
			
			function checkPwd(){
				var reg3 =  /^[A-Za-z0-9]{4,16}$/i;
				var pwdV = $(".regist form input.pwd").val();
				if(reg3.test(pwdV) == true) {
					$(".regist .tip").html("<span class='rht'>密码输入正确</span>");
					return true;
				} else {
					$(".regist .tip").html("<span class='err'>密码输入错误,请重新输入</span>");
					return false;
				}
			}
			function checkAll(){
				return checkTel()&&checkPwd()
			}
			
//			$(window).keyup(function(e){
//				if(e.keyCode == 13){
//					if(checkAll()) {
//						$(".regist form").submit();
//					}
//				}
//			})
				
			

			
//			var reg4 =  /^[A-Za-z][A-Za-z0-9]{5,15}$/i;
//			$(".regist form input.adname").focus(function(){
//				$("span.four").html("<span class='rht'>输入中</span>");
//			}).blur(function(){
//				var userV = $(".regist form input.adname").val();
//				if(reg4.test(userV) == true) {
//					$(".regist form span.four").html("<span class='rht'>正确</span>");
//					return true;
//			} else {
//					$(".regist form span.four").html("<span class='err'>错误</span>");
//					return false;
//			}
//			})
			
			$(".regist form .title").click(function(){
				$(this).addClass("active").siblings("div.title").removeClass("active");
			})
			$(".regist form .title").eq(1).click(function(){
				$(".regist form .box input.adname").css("display","block");
			})
			$(".regist form .title").eq(0).click(function(){
				$(".regist form .box input.adname").css("display","none");
			})
			
			$(".toTop").toTop();
			

			$("#yzm").click(function(){
				 sendemail();
			})
			var countdown=60; 
			function sendemail(){
			    var yz = $("#yzm");
			    settime(yz);
			    
			    }
			function settime(obj) { //发送验证码倒计时
			    if (countdown == 0) { 
			        obj.attr('disabled',false); 
			        //obj.removeattr("disabled"); 
			        obj.html("获取验证码");
			        countdown = 60; 
			        return;
			    } else { 
			        obj.attr('disabled',true);
			        obj.html("重新发送(" + countdown + ")");
			        countdown--; 
			    } 
				setTimeout(function() { 
			    settime(obj)
			   },1000)
			}
			
		
			$("#btn").click(function(){
				if(checkAll()){
					var $t=$("#tel").val();
					var $p=$("#pwd").val();
				$.post("http://datainfo.duapp.com/shopdata/userinfo.php?status=register",{
					"userID":$t,
					"password":$p
				},function(res,s,xhr){
					if(res==0){
						$(".regist .tip").html("<span class='err'>手机号已存在,请重新输入</span>");
					}else if(res==2){
						$(".regist .tip").html("<span class='err'>数据库报错</span>");
					}else if(res==1){
						localStorage.setItem("telnumber",$t);
						sessionStorage.setItem("password",$p);
						$(".regist .tip").html("<span class='rht'>注册成功</span>");
						window.location.href="login.html";
					}
				})
				}
				
			})
		
			
			
			
		})
