;(function($){
	$.fn.lcFade = function(opt){
		var $this = this;
		var DEFAULT = {
			"scrollH1" : 550,
			"scrollH2" : 3600,
			"speed1" : 500
		};
		var settings = $.extend(DEFAULT,opt || {});
		$(window).scroll(function(){
			var $sT = $(this).scrollTop();
			if($sT >= settings.scrollH1 && $sT <= settings.scrollH2){
				$this.fadeIn(settings.speed1);
			} else {
				$this.fadeOut(settings.speed1);
			}
		})
	}
})(jQuery)
