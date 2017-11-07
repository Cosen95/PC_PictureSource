//轮播开始
		var b = document.getElementsByClassName("banner")[0]; 
		var pics = b.getElementsByTagName("img");
		var btn = b.getElementsByTagName("button");
		var oP = document.getElementById("dot").getElementsByTagName("span");
		var index = 0;
		var timer;
		setOpacity(pics[1],0);
		setOpacity(pics[2],0);
		setOpacity(pics[3],0);
		setOpacity(pics[4],0);
		btn[0].onclick = function(){
			fadeOut(pics[index]);
			index--;
			if(index < 0){
				index = 4;
			}
			fadeIn(pics[index]);
			changeColor();
		}
		
		btn[1].onclick = function(){
			fadeOut(pics[index]);
			index++;
			if(index > 4) {
				index = 0;
			}
			fadeIn(pics[index]);
			changeColor();
		}
		
		for(var j = 0;j<oP.length;j++) {
				oP[j].setAttribute("sIndex",j);
				oP[j].onclick = function() {
					if(this.className == "now") {
						return;
					}
					var newIndex = parseInt(this.getAttribute("sIndex"));
					fadeOut(pics[index]);
					index = newIndex;
					fadeIn(pics[index]);
					changeColor();
				}
		}
		
		function changeColor() {
			for(var k=0;k<oP.length;k++) {
				if(oP[k].className == "now") {
					oP[k].className =  "";
				}
			}
			oP[index].className = "now";
		}
		
		function autoPlay(){
			timer = setInterval(function() {
				btn[1].onclick();
			},3000)
		}
		autoPlay();
		b.onmouseover = function() {
			clearInterval(timer);
			btn[0].parentNode.style.display = "block";
		}
		b.onmouseout = function() {
			autoPlay();
			btn[0].parentNode.style.display = "none";
		}
		
		function setOpacity(elem,level){
			if(elem.filters){
				elem.style.filter = "alpha(opacity =" + level+")";
			} else {
				elem.style.opacity = level/100;
			}
		}
		
		function fadeIn(elem){
			setOpacity(elem,0);
			for(var i=0;i<=100;i+=5){
				(function() {
					var pos = i;
					setTimeout(function() {
						setOpacity(elem,pos);
					},10*pos)
				})()
			}
		}
		
		function fadeOut(elem){
			for(var i=100;i>=0;i-=5){
				(function() {
					var pos = i;
					setTimeout(function() {
						setOpacity(elem,pos)
					},10*(100-pos))
				})()
			}
		}

		
//轮播结束


//楼层开始
				// 单击 a 元素  找到 a 的href 对应的 section  
			// 2 找到对应的section 距离顶部的位置 让后动画过去
			var lc1 = document.getElementsByClassName("lc1")[0];
			var links  = lc1.getElementsByTagName("a");//找到a
			var activeLink=links[0];
			for(var i=0;i<links.length;i++){
				links[i].onclick=function(){
					var id = this.getAttribute("href");//获取href值
					id=id.substring(1);//去掉#号
					var section =document.getElementById(id);// 获取对应的 section
					var seTop= section.offsetTop; //section 距顶部的距离
//					var scrollTop = document.body.scrollTop;/// 获取当前滚动条距离顶部的位置
					var that = this;
//					animation(seTop,function(){
//						activeLink.className="";
//						that.className="active";
//						activeLink=that;
//						// 把之前的 active 去掉 ，把当前的 加active
//					});
					animation(seTop,null);
					activeLink.className="";
					this.className="active";
					activeLink=this;
			
					
			
					
					
				}
			}
			
			function animation(dis,fn){
//			  // dis 是需要我们滚动到的的位置
			  var st=document.body.scrollTop 
//			  // st 现在的位置
			  var d =(dis-st-100)/100;  
//			  // d 把距离分成100份
//			  // d 是我们需要滚动的距离
//			  // 需要做100次  每次间隔10毫秒  1秒钟的时间走完这段距离
			  for(var i=0;i<100;i++){
			  	!function(i){			  		
			  		var j=i;			  		
			  		setTimeout(function(){			  			
			  			var t= st+d*(j+1);//如果j是100 港澳 st+需要滚动的距离；
			  			window.scrollTo(0,t);
			  			// if(j==99){
			  			// 	fn();
			  			// }
			  		},j*10)
			  	}(i)
			  	
			  }
			
			   
			}

				

			//***** 设置高亮 就是看哪个section 距浏览器边缘顶部的距离最小***/
			//对应的距浏览器顶部最小的section 的a 设置active

            window.onscroll=function(){            	       	 
            	 var minIndex=0;// 默认是第0个距 距浏览器边缘顶部的距离最小
            	 var dis=1000;//随便设置一个大的距离       	 
            	  
//			  // st 现在的位置
				 var lcs =document.getElementsByClassName("lc");
				 // 获取所有的section
				 
				 for(var i=0;i<lcs.length;i++){
				 	//getBoundingClientRect().top  获取元素距浏览器顶部的位置
				 	var t=Math.abs(lcs[i].getBoundingClientRect().top);
				 	// 获取到 单个section 距 距浏览器边缘顶部的距离的    绝对值
				 	if(t<dis){// 求那个最小
				 		dis=t;// 如果小于我们规定的值 它的值就是最小的值
				 		minIndex=i; //当前的第i个就是 距浏览器边缘顶部最小的section
				 	}	 
				 	
				 }
				 activeLink.className="";//之前的active 去掉
				 links[minIndex].className="active";// 对应距离浏览器最小section的a 添加active·
				 activeLink=links[minIndex];// 更新activeLink  方便下一次更改
				 
				
            	
            }


//楼层结束

			$(function(){
				$(".header-left ul li").has("ul").mouseenter(function(){
					$(this).children("ul").stop().show(1000);
				}).mouseleave(function(){
					$(this).children("ul").stop().hide(1000);
				})
				
				$(".lc1").lcFade();
				$(".toTop").toTop();
				
				
			$(".header-right input.one").keyup(function(){
						var $v = $(this).val();
						$.ajax({
							type:"get",
							url:"https://suggest.taobao.com/sug?code=utf-8&q=" + $v +"&callback=?",
							async:true,
							dataType:"jsonp",
							success:function(res){
//								var d = res;
								$("ul.tip").empty();					
								$.each(res.result,function(i,v){
									var $li = $("<li>");
									$li.html(v[0]);
									$li.css({"height":50,"color":"#000",});
									$li.mouseenter(function(){
										$(this).css({"background-color":"#ccc"});
									}).mouseleave(function(){
										$(this).css({"background-color":""});
									})
									$("ul.tip").append($li);
									$("ul.tip").css({"border":"1px solid #ccc","border-top":"none","background-color":"#fff","width":420,})
								});
							}
						});
					});
				

			})
