// JavaScript Document
	
	
$(window).load(function(){
	next_url = "http://www.google.com";
	
	var s01 = document.getElementById("section01");
	var s02 = document.getElementById("section02");
	var s03 = document.getElementById("section03");
	var s04 = document.getElementById("section04");
	var s05 = document.getElementById("section05");
	var s06 = document.getElementById("section06");
	var s07 = document.getElementById("section07");
	var s08 = document.getElementById("section08");
	var s09 = document.getElementById("section09");
	var s10 = document.getElementById("section10");
	var s11 = document.getElementById("section11");
	
	var ids = 0;
	var idc = 0;
	var fId = 0;
	
	fNum = "f1";
	cNum = "c1";
	fcNum = "f1c1";
	dNum = "d1";
	iNum = "i1";
	diNum = "d1i1";
	
	s01.style.opacity = 1;
	s02.style.opacity = 0;
	s03.style.opacity = 0;
	s04.style.opacity = 0;
	s05.style.opacity = 0;
	s06.style.opacity = 0;
	s07.style.opacity = 0;
	s08.style.opacity = 0;
	s09.style.opacity = 0;
	s10.style.opacity = 0;
	s11.style.opacity = 0;
	
	kira1 = $(".kira1")[0];
	kira2 = $(".kira2")[0];
	kira3 = $(".kira3")[0];
	kira4 = $(".kira4")[0];
	kira5 = $(".kira5")[0];
	kira6 = $(".kira6")[0];
	
	createjs.CSSPlugin.install(createjs.Tween);
	createjs.Ticker.setFPS(60);
	
	$("#section01").on("click", function(){section02();});	
	$("#section02").on("click", function(){section03();});
	$("#section03").on("click", function(){section04();});
	$("#section04").on("click", function(){section05();});
	$("#section05").on("click", function(){section06();});
	$("#section06").on("click", function(){section07();});
	
	//$("#btn_kti01").on("click", function(){	
//		//var count = $("#faceSelect img").size();
////		var reg = /^.*_s.png$/;
////		for(var i = 0; i < count;i++){
////			if(reg.test($("#faceSelect img").eq(i).attr("src"))){
////			ids = i;
////			break;
////			}
////		}
////		fId = $("#faceSelect img").eq(ids).attr("id");
//		section08();
//	});
//	
//	$("#btn_kti02").on("click", function(){
//		section09();
//	});
//	
//	$("#btn_kti03").on("click", function(){
//		section10();
//	});
//	
//	$("#btn_kti04").on("click", function(){
//		section11();
//	});
//	
	function section02(){
		$("#section01").off("click");
		createjs.Tween.get(s01)
		 .to({opacity:0},400, createjs.Ease.easeIn);
		s01.style.zIndex = 0;
		createjs.Tween.get(s02)
		 .to({opacity:1},400, createjs.Ease.easeIn);
	}
	
	function section03(){
		$("#section02").off("click");
		createjs.Tween.get(s02)
		 .to({opacity:0},400, createjs.Ease.easeIn);
		s02.style.zIndex = 0;
		createjs.Tween.get(s03)
		 .to({opacity:1},400, createjs.Ease.easeIn);
	}
	
	function section04(){
		$("#section03").off("click");
		createjs.Tween.get(s03)
		 .to({opacity:0},400, createjs.Ease.easeIn);
		s03.style.zIndex = 0;
		createjs.Tween.get(s04)
		 .to({opacity:1},400, createjs.Ease.easeIn);
	}
	
	function section05(){
		$("#section04").off("click");
		createjs.Tween.get(s04)
		 .to({opacity:0},400, createjs.Ease.easeIn);
		s04.style.zIndex = 0;
		createjs.Tween.get(s05)
		 .to({opacity:1},400, createjs.Ease.easeIn);
	}
	
	function section06(){
		$("#section05").off("click");
		createjs.Tween.get(s05)
		 .to({opacity:0},400, createjs.Ease.easeIn);
		s05.style.zIndex = 0;
		createjs.Tween.get(s06)
		 .to({opacity:1},400, createjs.Ease.easeIn);
	}
	
	function section07(){
		$("#section06").off("click");
		$("#btn_kti01").on("click", function(){
			section08();
		});
		
		createjs.Tween.get(s06)
		 .to({opacity:0},400, createjs.Ease.easeIn);
		s06.style.zIndex = 0;
		
		dRes();
		
		$("."+ fNum).animate({opacity:"1"},400);
		createjs.Tween.get(s07)
		 .to({opacity:1},400, createjs.Ease.easeIn);
		s07.style.zIndex = 100;
	}
	
	function section08(){
		$("#btn_kti01").off("click");
		$("#btn_kti02").on("click", function(){
			section09();
		});
		
		$("."+ fNum).animate({opacity:"0"},400);
		createjs.Tween.get(s07)
		 .to({opacity:0},400, createjs.Ease.easeIn);
		s07.style.zIndex = 0;
				
		fcNum =	fNum + cNum;
	
		$("#costumePa img").css("opacity","0");
		$("."+ fcNum).animate({opacity:"1"},400);
		
		createjs.Tween.get(s08)
		 .to({opacity:1},400, createjs.Ease.easeIn);
		s08.style.zIndex = 100;
		
	}
	
	function section09(){
		$("#btn_kti02").off("click");
		$("#btn_kti03").on("click", function(){
			section10();
		});
		
		$("."+ fcNum).animate({opacity:"0"},400);
		createjs.Tween.get(s08)
		 .to({opacity:0},400, createjs.Ease.easeIn);
		s08.style.zIndex = 0;
		
		fc();
		$("#decorPa img").css("opacity","0");
		$("."+ dNum).animate({opacity:"1"},400);
		createjs.Tween.get(s09)
		 .to({opacity:1},400, createjs.Ease.easeIn);
		s09.style.zIndex = 100;
	}
	
	function section10(){
		$("#btn_kti03").off("click");
		$("#btn_kti04").on("click", function(){
			section11();
		});
		
		$("."+ dNum).animate({opacity:"0"},400);
		createjs.Tween.get(s09)
		 .to({opacity:0},400, createjs.Ease.easeIn);
		s09.style.zIndex = 0;
		
		diNum =	dNum + iNum;
		$("#interiorPa img").css("opacity","0");
		$("."+ diNum).animate({opacity:"1"},400);
		createjs.Tween.get(s10)
		 .to({opacity:1},400, createjs.Ease.easeIn);
		s10.style.zIndex = 100;
		
	}
	
	function section11(){
		$("#btn_kti04").off("click");
		$("#btn_kti05").on("click", function(){
			window.location = next_url;
		});
		
		$("#btn_restart").on("click", function(){
			$("#btn_kti05").off("click");
			$("#btn_restart").off("click");
			/*$("#btn_kti01").on("click", function(){
				section08();
			});*/
					
			createjs.Tween.get(s11)
			 .to({opacity:0},400, createjs.Ease.easeIn);
			s11.style.zIndex = 0;
			
			/*$("."+ fNum).animate({opacity:"1"},400);
			createjs.Tween.get(s07)
		 	 .to({opacity:1},400, createjs.Ease.easeIn);
			s07.style.zIndex = 100;*/
			
			$(".appAvatar").remove();			
			section07();
		});
		
		setTimeout("jump()",400);
		
		$("."+ diNum).animate({opacity:"0"},400);
		createjs.Tween.get(s10)
		 .to({opacity:0},400, createjs.Ease.easeIn);
		s10.style.zIndex = 0;
		
		$("#restaurant").append("<img src='images/se10/main/"+diNum+".png' width='240' height='150' class='"+diNum+" appAvatar' />");
		$("."+diNum).animate({opacity:"1"},400);
		
		createjs.Tween.get(s11)
		 .to({opacity:1},400, createjs.Ease.easeIn);
		s11.style.zIndex = 100;
		
	}
});	

var kirakira = function(){
	setTimeout("k1()",0);
	setTimeout("k2()",100);
	setTimeout("k3()",200);
	setTimeout("k4()",300);
	setTimeout("k5()",400);
	setTimeout("k6()",500);
	
	
}
var k1 =function(){
	createjs.Tween.get(kira1)
	 .to({opacity:1},200, createjs.Ease.easeIn)
	 .to({opacity:0},200, createjs.Ease.easeIn);
}

var k2 =function(){
	createjs.Tween.get(kira2)
	 .to({opacity:1},200, createjs.Ease.easeIn)
	 .to({opacity:0},200, createjs.Ease.easeIn);
}

var k3 =function(){
	createjs.Tween.get(kira3)
	 .to({opacity:1},200, createjs.Ease.easeIn)
	 .to({opacity:0},200, createjs.Ease.easeIn);
}
var k4 =function(){
	createjs.Tween.get(kira4)
	 .to({opacity:1},200, createjs.Ease.easeIn)
	 .to({opacity:0},200, createjs.Ease.easeIn);
}
var k5 =function(){
	createjs.Tween.get(kira5)
	 .to({opacity:1},200, createjs.Ease.easeIn)
	 .to({opacity:0},200, createjs.Ease.easeIn);
}
var k6 =function(){
	createjs.Tween.get(kira6)
	 .to({opacity:1},200, createjs.Ease.easeIn)
	 .to({opacity:0},200, createjs.Ease.easeIn);
}

var jump = function(){
	$("."+fcNum).animate({"margin-top":"-20px"},80)
				.animate({"margin-top":"0px"},80)
				.animate({"margin-top":"-20px"},80)
				.animate({"margin-top":"0px"},80);
}
/* アバター選択
--------------------------------------------------------- */
$(function(){
	$("#faceSelect img").on("click" ,function(){
		var thisSrc = $(this).attr("src");
		if(!thisSrc.match("_s")){
			var count = $("#faceSelect img").size();
			var reg = /^.*_s.png$/;
			for(var i = 0; i < count;i++){
				if(reg.test($("#faceSelect img").eq(i).attr("src"))){
				break;
				}
			}
			
			var offSrc = $("#faceSelect img:eq("+i+")").attr("src").replace('_s.png', '.png');
			$("#faceSelect img:eq("+i+")").attr("src", offSrc);
			var onSrc = thisSrc.replace('.png', '_s.png');
			$(this).attr('src', onSrc);
			
			$("#facePa img").css("opacity", "0");
			fNum = $(this).attr("id");
			$("." + fNum).css("opacity", "1");
			kirakira();
		}
	});
});

/* コスチューム選択
--------------------------------------------------------- */
$(function(){
	$("#costumeSelect img").on("click" ,function(){
		var thisSrc = $(this).attr("src");
		if(!thisSrc.match("_s")){
			var count = $("#costumeSelect img").size();
			var reg = /^.*_s.png$/;
			for(var i = 0; i < count;i++){
				if(reg.test($("#costumeSelect img").eq(i).attr("src"))){
				break;
				}
			}
			
			var offSrc = $("#costumeSelect img:eq("+i+")").attr("src").replace('_s.png', '.png');
			$("#costumeSelect img:eq("+i+")").attr("src", offSrc);
			var onSrc = thisSrc.replace('.png', '_s.png');
			$(this).attr('src', onSrc);
			
			$("#costumePa img").css("opacity", "0");
			cNum = $(this).attr('id');
			fcNum = fNum + cNum;
			$("." + fcNum).css("opacity", "1");
			kirakira();
		}
	});
});

/* レストラン選択
--------------------------------------------------------- */
$(function(){
	$("#decorSelect img").on("click" ,function(){
		var thisSrc = $(this).attr("src");
		if(!thisSrc.match("_s")){
			var count = $("#decorSelect img").size();
			var reg = /^.*_s.png$/;
			for(var i = 0; i < count;i++){
				if(reg.test($("#decorSelect img").eq(i).attr("src"))){
				break;
				}
			}
			
			var offSrc = $("#decorSelect img:eq("+i+")").attr("src").replace('_s.png', '.png');
			$("#decorSelect img:eq("+i+")").attr("src", offSrc);
			var onSrc = thisSrc.replace('.png', '_s.png');
			$(this).attr('src', onSrc);
			
			$("#decorPa img").css("opacity", "0");
			dNum = $(this).attr("id");
			$("." + dNum).css("opacity", "1");
			kirakira();
		}
	});
});

/* 内装選択
--------------------------------------------------------- */
$(function(){
	$("#interiorSelect img").on("click" ,function(){
		var thisSrc = $(this).attr("src");
		if(!thisSrc.match("_s")){
			var count = $("#interiorSelect img").size();
			var reg = /^.*_s.png$/;
			for(var i = 0; i < count;i++){
				if(reg.test($("#interiorSelect img").eq(i).attr("src"))){
				break;
				}
			}
			
			var offSrc = $("#interiorSelect img:eq("+i+")").attr("src").replace('_s.png', '.png');
			$("#interiorSelect img:eq("+i+")").attr("src", offSrc);
			var onSrc = thisSrc.replace('.png', '_s.png');
			$(this).attr('src', onSrc);
			
			$("#interiorPa img").css("opacity", "0");
			iNum = $(this).attr('id');
			diNum = dNum + iNum;
			$("." + diNum).css("opacity", "1");
			kirakira();
		}
	});
});

var dRes = function(){
	$("#section07, #section08").prepend("<img src='images/se09/main/"+dNum+".png' width='240' height='150' class='"+dNum+" appAvatar' />");
	$("."+ dNum).animate({opacity:"1"},200);
}

var fc = function(){
	$("#section09").append("<img src='images/se08/main/"+fcNum+".png' width='79' height='136' class='"+fcNum+" appAvatar' />");
	$("#section10").append("<img src='images/se08/main/"+fcNum+".png' width='79' height='136' class='"+fcNum+" appAvatar' />");
	$("#section11").append("<img src='images/se08/main/"+fcNum+".png' width='79' height='136' class='"+fcNum+" appAvatar' />");
	$("."+fcNum).animate({opacity:"1"},200);
}

/* =========================================================
 Andoid UA
========================================================= */
$(function(){
	var ua = navigator.userAgent;
	
	if( ua.search(/Android 2.1/) != -1 ) {
		$("body").addClass("android2_3");
	}
	
	else if( ua.search(/Android 2.2/) != -1 ){
		$("body").addClass("android2_3");
	}
	
	else if( ua.search(/Android 2.3/) != -1 ){
		$("body").addClass("android2_3");
	}
	
	if( ua.search(/Android/) != -1 ){
		$("body").addClass("android");
	}
});

