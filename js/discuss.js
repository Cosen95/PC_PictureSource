$(function(){
	$.ajax({
		type:"get",
		url:"https://club.jd.com/discussion/getProductPageImageCommentList.action?productId=3842661",
		async:true,
		dataType:"jsonp",
		success:function(res){
				console.log(res);
				var d = res.imgComments.imgList;
//				console.log(d);
				$(".pinglun").empty();				
				$.each(d,function(i,v){		
				var c = v.commentVo.content;//获取评论
				var i = v.imageUrl;//获取图片
				var $li = $("<li>");					
				var $img = $("<img>");
				$img.css({"float":"left","margin-right":"20px","width":"90px","height":"90px"});
				$img.attr("src",i);
//				$(".pinglun").append($img);	
				$li.css({"width":"1000px","height":"130px","padding-bottom":"20px","padding-top":"20px","box-sizing":"border-box"});				
				$li.html(c);
				$li.append($img);
				$(".pinglun").append($li);	
				})				
	}
});
})

