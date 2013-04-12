(function($){
	$(document).ready(function(){
		if (typeof document.body.style.maxHeight != "undefined"){}else{
			setTimeout(function(){
				$(".mixi-check-button").text("");
				var b = $(".mixi-check-button").attr("data-button");
				var w,h,n;
				switch(b){
					case "button-1":
						w=58;
						h=18;
						n=1;
					break;
					case "button-2":
						w=77;
						h=18;
						n=2;
					break;
					case "button-3":
						w=55;
						h=18;
						n=3;
					break;
					case "button-4":
						w=76;
						h=18;
						n=4;
					break;
					case "button-5":
						w=84;
						h=25;
						n=5;
					break;
				}
				$(".mixi-check-button").css({"background":"none","width":w+"px","height":h+"px","display":"inline-block","cursor":"pointer","filter":"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='http://static.mixi.jp/img/basic/mixicheck_entry/bt_check_"+n+".png', sizingMethod='crop')"});
			},0);
		}
	});
})(jQuery);