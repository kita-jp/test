$(document).ready(function(){

		$("#ranking_1 .recipe_img").append('<a href="http://www.lotte.co.jp/products/brand/ghana/recipe/' + rank1_id + '.html"><img src="http://www.lotte.co.jp/products/brand/ghana/recipe/_img/thum/index' + rank1_id + '.jpg" width="121" height="99" /></a>');
		$("#ranking_1 .recipe_name").append('<a href="http://www.lotte.co.jp/products/brand/ghana/recipe/' + rank1_id + '.html">' + rank1_name + '</a>');

		$("#ranking_2 .recipe_img").append('<a href="http://www.lotte.co.jp/products/brand/ghana/recipe/' + rank2_id + '.html"><img src="http://www.lotte.co.jp/products/brand/ghana/recipe/_img/thum2/index' + rank2_id + '.jpg" width="60" height="49" /></a>');
		$("#ranking_2 .recipe_name").append('<a href="http://www.lotte.co.jp/products/brand/ghana/recipe/' + rank2_id + '.html">' + rank2_name + '</a>');

		$("#ranking_3 .recipe_img").append('<a href="http://www.lotte.co.jp/products/brand/ghana/recipe/' + rank3_id + '.html"><img src="http://www.lotte.co.jp/products/brand/ghana/recipe/_img/thum2/index' + rank3_id + '.jpg" width="60" height="49" /></a>');
		$("#ranking_3 .recipe_name").append('<a href="http://www.lotte.co.jp/products/brand/ghana/recipe/' + rank3_id + '.html">' + rank3_name + '</a>');

});
