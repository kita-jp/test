// JavaScript Document

/* =========================================================
 通知バッジ
========================================================= */
$(function() {
	tmt = "2";	//新着情報（Number） "" == 非表示
	help = "NEW";	//お手伝い（NEW）
	gacha = "無料";		//ガチャ（無料）
	
	(tmt == "")|| $('.tmt, .tmt02').badger(tmt);
	(help == "")|| $('.help').badger(help);
	(gacha == "")|| $('.gacha').badger(gacha);
});

/* =========================================================
 ポップアップ
========================================================= */
$(function(){
    $('.btns').click(function(){
        $('.modal').show();
    });
    $('.close, .modalBK, .back_btn').click(function(){
        $('.modal').hide();
    });
});

/* =========================================================
 タブ
========================================================= */
$(function(){
	$("ul.panel > li:not("+$("ul.tab_tn li a.selected").attr("href")+")").hide()
	$("ul.tab_tn li a").click(function(){
		$("ul.tab_tn li a").removeClass("selected");
		$(this).addClass("selected");
		$("ul.panel > li").hide();
		$($(this).attr("href")).show();
		return false;
	});
});

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
