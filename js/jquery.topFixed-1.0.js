;(function($){
	$.fn.extend({
		"topFixed":function(h){
			var $this = this;
			//this 不是dom对象   谁调用此方法  this指向谁
//			this.css("border","10px solid #000");
//			this.each(function(i,v){
				$(window).scroll(function(){
					var $sT = $(window).scrollTop();//获取滚动条卷去的距离
					if($sT > h){
//						$(v).css({"position":"fixed","top":0});
						$this.css({"position":"fixed","top":0,"background-color":"#2A2A2A"});
					}else{
//						$(v).css({"position":"static"});
						$this.css({"position":"static","background-color":"rgba(0,0,0,.2)"});
					}
				})
//			});
		}
	});
})(jQuery);
