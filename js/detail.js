$(function(){
				$(".header-left ul li").has("ul").mouseenter(function(){
					$(this).children("ul").stop().show(1000);
				}).mouseleave(function(){
					$(this).children("ul").stop().hide(1000);
				})
				$(".toTop").toTop();
				
				$(".buy ul.one li").click(function(){
					$(this).addClass("active").siblings("li").removeClass("active");
					result();
				})
				
				$(".buy ul.two li").click(function(){
					$(this).addClass("active2").siblings("li").removeClass("active2");
					result();
				})
				$(".buy ul.two li").eq(1).click(function(){
					$(".buy ul.one li").eq(3).addClass("active").siblings(".buy ul.one li").removeClass("active");
					result();
				})
				function result(){
					if($(".buy ul.one li").eq(0).hasClass("active") && $(".buy ul.two li").eq(0).hasClass("active2")){
					$(".buy p.three").html("150");
				} else if($(".buy ul.one li").eq(1).hasClass("active") && $(".buy ul.two li").eq(0).hasClass("active2")){
					$(".buy p.three").html("300");
				} else if($(".buy ul.one li").eq(2).hasClass("active") && $(".buy ul.two li").eq(0).hasClass("active2")){
					$(".buy p.three").html("500");
				} else if($(".buy ul.one li").eq(3).hasClass("active") && $(".buy ul.two li").eq(0).hasClass("active2")){
					$(".buy p.three").html("600");
				} else if($(".buy ul.one li").eq(0).hasClass("active") && $(".buy ul.two li").eq(1).hasClass("active2")){
					$(".buy p.three").html("900");
				} else if($(".buy ul.one li").eq(1).hasClass("active") && $(".buy ul.two li").eq(1).hasClass("active2")){
					$(".buy p.three").html("1800");
				} else if($(".buy ul.one li").eq(2).hasClass("active") && $(".buy ul.two li").eq(1).hasClass("active2")){
					$(".buy p.three").html("3000");
				} else if($(".buy ul.one li").eq(3).hasClass("active") && $(".buy ul.two li").eq(1).hasClass("active2")){
					$(".buy p.three").html("3600");
				}
			}
				result();
				
				$(".more .find .three .look").click(function(){
					$(".more .find .four").css("white-space","normal");
				})
				
				var offset = $(".cart").offset();  //结束的地方的元素
				$(".addcar").click(function(event){//是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
					sessionStorage.setItem('id',$(".buy-right p.one").html());
					sessionStorage.setItem('price',$(".buy-right p.three").html());
					var addcar = $(this);
					var video = addcar.parent().siblings("div.buy-left").find('source').attr('src');
					var flyer = $('<video class="u-flyer" src="'+video+'">');
					flyer.fly({
						start: {
							left: event.pageX -450,
							top: event.pageY -300
						},
						end: {
							left: offset.left+10,
							top: offset.top+10,
							width: 0,
							height: 0
						},
//						onEnd: function(){
//							$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
//							addcar.css("cursor","default").removeClass('orange').unbind('click');
//							this.destory();
//						}
					});
				});
				
				
			})
