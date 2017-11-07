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
//			})
			function checkTel(){
//				var reg1 = /^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}$/;
				var telV = $(".regist form input.tel").val();
				if(telV.length == 0) {
					
					$(".regist .tip").html("<span class='err'>请输入手机号码</span>");
					return false;
				} else {
					
//					$(".regist .tip").html("");
					return true;
				}
			}
			
			function checkPwd(){
//				var reg3 =  /^[A-Za-z0-9]{4,16}$/i;
				var pwdV = $(".regist form input.pwd").val();
				if(pwdV.length == 0) {
					$(".regist .tip").html("<span class='err'>请输入密码</span>");
					return false;
				} else {
//					$(".regist .tip").html("");
					return true;
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
			
			$(".toTop").toTop();
			
			
			$("#button").click(function(){
				var reg1 = /^(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}$/;
				if(checkAll()){
					var $t=$("#tel").val();
					var $p=$("#pwd").val();
					if(!reg1.test($t)){
						$(".regist .tip").html("<span class='err'>请输入正确的手机号</span>");
					} else {
						$.post("http://datainfo.duapp.com/shopdata/userinfo.php?status=login",{
							"userID":$t,
							"password":$p
						},function(res,s,xhr){
						if(res==0){
							$(".regist .tip").html("<span class='err'>用户名不存在</span>");
						}else if(res==2){
							$(".regist .tip").html("<span class='err'>用户名或密码错误</span>");
						}else{
							localStorage.setItem("telnumber",$t);
							sessionStorage.setItem("password",$p);
//							$(".regist .tip").html("<span class='rht'>登录成功</span>");
							window.location.href="index.html";
						}
				})
					}
				
				}
				
			})
		
})