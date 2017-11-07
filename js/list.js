$(function(){
				$(".header-left ul li").has("ul").mouseenter(function(){
					$(this).children("ul").stop().show(1000);
				}).mouseleave(function(){
					$(this).children("ul").stop().hide(1000);
				})
				
				$(".toTop").toTop();
				
				$(".lazy").lazyload({
					effect:"fadeIn"
				});

				
				$(".search .search-left ul li").click(function(){
					$(this).addClass("active").siblings("li").removeClass("active");
					
				$(".search .search-left p").html("筛选条件:"+ $(this).html());
					
				})
				
				var offset = $(".cart").offset();  //结束的地方的元素
				$(".addcar").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
					var addcar = $(this);
					var img = addcar.parent().parent().parent().find('img').attr('src');
					var flyer = $('<img class="u-flyer" src="'+img+'">');
					flyer.fly({
						start: {
							left: event.pageX,
							top: event.pageY
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


//$(window).on("load",function(){
//				waterfall();
//				var dataInit = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},
//				{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"},
//				{"src":"17.jpg"},{"src":"18.jpg"},{"src":"19.jpg"},{"src":"20.jpg"}]};
//				$(window).scroll(function(){
//					if(checkScroll()){  //满足加载条件
//						$.each(dataInit.data,function(index,value){
////							console.log(value["src"])
//							var $b = $("<div class='box'></div>");
//							var $pic = $("<div class='pic'></div>");
//							var $img = $("<img />");
//							$img.attr("src","img/" + value["src"]);
//							$img.appendTo($pic);
//							$pic.appendTo($b);
//							$b.appendTo($(".water"));
//						});
//					}
//					waterfall();
//				});
//				$(window).resize(function(){
//					waterfall();
//				});
//			});
//			
//			function waterfall(){
//				var $box = $(".water>.box");
//				var $bW = $box.first().outerWidth();//获取一个box的宽度
//				var $vW = $(window).outerWidth();//获取浏览器宽度
//				var $cols = parseInt($vW / $bW);//整个浏览器最多能排的列数
//				var hArr = [];
//				$(".water").css({"width":$bW * $cols,"margin":"0 auto"});
//				$box.each(function(i,val){
//	//				var $bH = $(this).outerHeight();//获取每一个box的高度
//					if(i < $cols){  //遍历的下标  小于  列数   第一行
//	//					hArr[i] = $(val).outerHeight();
//						hArr.push($(val).outerHeight());//把第一行所有的box的高度放到数组 hArr里
//						$(val).css({"position":"absolute","left":$bW * i,"top":0});
//					}else{
//						var $minH = Math.min.apply(null,hArr);//hArr数组里最小的高度
//	//					var $minIndex = $.inArray($minH,hArr);
//	//					$.inArray(元素,数组) 用来查找元素在整个数组中所处的位置  返回值是一个下标
//						var $minIndex = getIndex($minH);//最小高度所对应的下标
//						$(val).css({"position":"absolute","top":$minH,"left":$minIndex * $bW});
//						hArr[$minIndex] = hArr[$minIndex] + $(val).outerHeight();//更新数组中最小的那个高度
//					}
//				});
//				//获取高度最小的下标
//				function getIndex(h){
//					for(var j = 0;j < hArr.length;j++){
//						if(hArr[j] == h){
//							return j;
//						}
//					}
//				}
//			}
//			//检测加载条件
//			function checkScroll(){
//				var $sT = $(window).scrollTop();//滚动条向上卷去的距离
//				var $vH = $(window).outerHeight();//浏览器的高度
//				var $box = $(".water>.box");
//				var $offT = $box.last().offset().top;//获取最后一个box距离文档的偏移量
//				var $bH = $box.last().outerHeight();//获取最后一个box的高度
//				if(($vH + $sT) > ($offT + $bH / 2)){
//					return true;
//				}else{
//					return false;
//				}
//			}
