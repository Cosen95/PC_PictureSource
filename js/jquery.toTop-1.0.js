;(function($){
	$.fn.toTop = function(opt){
		var $this = this;  //this指向的是调用此插件的对象
		var DEFAULT = {   //默认属性设置
			"scrollH" : 200,
			"speed1" : 500,
			"speed2" : 1000
		};
		var settings = $.extend(DEFAULT,opt || {});  //属性修改
		$(window).scroll(function(){
			var $sT = $(window).scrollTop();
			if($sT >= settings.scrollH){
				$this.fadeIn(settings.speed1);
			}else{
				$this.fadeOut(settings.speed1);
			}
		});
		$this.click(function(){
			$("html,body").animate({"scrollTop":0},settings.speed2);
		});
	}
})(jQuery);
	
