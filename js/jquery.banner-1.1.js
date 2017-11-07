;(function($){
//	$.fn.myBanner = function(){
//		
//	}
	$.fn.extend({
		"myBanner" : function(type){
			var $banner = this;
			var $item = $banner.children(".item");
			var $len = $item.length;//获取所有的item个数
			var $item_w = $item.eq(0).outerWidth();//获取item的宽度
			var $item_h = $item.eq(0).outerHeight();//获取item的高度
			var $btn = $banner.children(".btn");
			var $btn_l = $banner.children(".btn-left");
			var $btn_r = $banner.children(".btn-right");
			var $btn_h = $btn_l.outerHeight();
			var $dot = $banner.children("#dot");
			var $index = 0;
			var timer;
			var $itemlist = $("<div class='itemlist'></div>");
			$btn_l.css({"position":"absolute","top":($item_h - $btn_h)/2 + "px","left":"10px"});
			$btn_r.css({"position":"absolute","top":($item_h - $btn_h)/2 + "px","right":"10px"});
			
			//小圆点初始化
			function dotInit(){
				for(var i = 0;i < $len;i++){
					var $span = $("<span>");
					$dot.append($span);
				}
				var $span_w = $dot.children("span").outerWidth(true);
				$dot.css({"position":"absolute","left":($item_w - $len * $span_w)/2,"bottom":"10px"});
				$dot.children("span").eq($index).addClass("active");
			}
			dotInit();
			//小圆点点击事件
			$dot.children("span").click(function(){
				var $idx = $(this).index();//获取小圆点的索引号
				$(this).addClass("active").siblings("span.active").removeClass("active");
				if($(this).hasClass("active")){
					return;
				}
				$index = $idx;
				if(type == "fade"){
					$item.eq($index).stop(true,true).fadeIn(500).siblings(".item").stop(true,true).fadeOut(500);
				}else if(type == "moveH"){
					$banner.children(".itemlist").stop().animate({"left":-$index * $item_w},500);
				}
			});
			
			if(type == "fade"){
				fadeInit();
				$btn_r.bind("click",fadeR);
				$btn_l.bind("click",fadeL);
			}else if(type == "moveH"){
				moveInit();
				$btn_r.bind("click",moveL);
				$btn_l.bind("click",moveR);
			}
			
			//水平移动初始化
			function moveInit(){
				$item.wrapAll($itemlist);
				var $c_item = $item.eq(0).clone();
				$banner.children(".itemlist").append($c_item);
				$item = $banner.find(".item");
				$len = $item.length;
				$banner.children(".itemlist").css({"width":$len * $item_w + "px","position":"absolute"});
				$item.css("float","left");
				$banner.css("overflow","hidden");
			}
			//点击右侧按钮  往左移动图片
			function moveL(){
				$index++;
				if($index > $len - 1){
					$index = 0;
					$banner.children(".itemlist").css("left",-$index * $item_w + "px");
					$index++;
				}
//				console.log($index);//1,2,3
				$banner.children(".itemlist").stop().animate({"left":-$index * $item_w},500);
				var $a = $index;
				if($a == 3){
					$a = 0;
				}
				$dot.children("span").eq($a).addClass("active").siblings("span.active").removeClass("active");
			}
			//点击左侧按钮  往左移动图片
			function moveR(){
				$index--;
				if($index < 0){
					$index = $len - 1;
					$banner.children(".itemlist").css("left",-$index * $item_w + "px");
					$index--;
				}
				$banner.children(".itemlist").stop().animate({"left":-$index * $item_w},500);
				$dot.children("span").eq($index).addClass("active").siblings("span.active").removeClass("active");
			}
			//淡入淡出 初始化
			function fadeInit(){
				$item.css({"position":"absolute","display":'none'});
				$item.eq(0).css("display","block");
			}
			//点击右侧按钮 淡入淡出
			function fadeR(){
				$index++;
				if($index > $len - 1){
					$index = 0;
				}
				$item.eq($index).stop(true,true).fadeIn(500).siblings(".item").stop(true,true).fadeOut(500);
				$dot.children("span").eq($index).addClass("active").siblings("span.active").removeClass("active");
			}
			//点击左侧按钮 淡入淡出
			function fadeL(){
				$index--;
				if($index < 0){
					$index = $len - 1;
				}
				$item.eq($index).stop(true,true).fadeIn(500).siblings(".item").stop(true,true).fadeOut(500);
				$dot.children("span").eq($index).addClass("active").siblings("span.active").removeClass("active");
			}
			
			//鼠标放上去与离开
			$banner.hover(function(){
				stopPlay();
				$btn.fadeIn(500);
			},function(){
				autoPlay();
				$btn.fadeOut(500);
			});
			function autoPlay(){
				timer = setInterval(function(){
					$btn_r.trigger("click");
				},1000);
			}
			autoPlay();
			function stopPlay(){
				clearInterval(timer);
			}
			
		}
	});
})(jQuery);
