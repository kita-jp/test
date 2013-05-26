// JavaScript Document

/* =========================================================
　便利jsまとめ
========================================================= */

/* ページTOP
--------------------------------------------------------- */
$(function() {
	var topBtn = $('#page-top');	
	topBtn.hide();
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	//スクロールしてトップ
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});

/* 擬似セレクトボックス
--------------------------------------------------------- */
$(function(){
	$('div.selectbox').each(function(){
		var self = $(this);
		var select = $('a.select',self);
		var pulldown = $('div.pulldown',self);
		
		var select_value = $('span',select);
		
		pulldown.hide().children(':last-child').addClass('last-child');
		
		select.click(function(e){
			$('div.pulldown').hide();
			pulldown.show();
			
			$(this).addClass('select_focus');
			
			return false;
		});
		
		$('a',pulldown).click(function(){
			var value = $(this).attr('href').replace('#','');
			var text = $(this).text();
			
			select_value.text(text);
			
			$('a.selected',pulldown).removeClass('selected');
			$('a.select_focus').removeClass('select_focus');
			$(this).addClass('selected');
			pulldown.hide();
			
			return false;
		});
		
		$('body').click(function(){
			$('a.select_focus').removeClass('select_focus');
			$('div.pulldown').hide();
		});
	});
});