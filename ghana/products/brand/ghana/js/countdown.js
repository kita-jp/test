$(document).ready(function(){

	//メッセージの最大数(※2以上にすること)
	var message_max = 82;

	//メッセージの切り替わる時間(秒)
	var message_time = 4;

	//画像があるURL(フォルダ)
	var image_path = 'http://mobile-ghana.jp/pc/parts/12valentine/countdown/';


	//日付
	var now		= new Date();


	//テスト用
	var mmdd = location.search;
	if (mmdd.length == 10) {
		var now	= new Date("2012/" + mmdd.substr(6,2) + "/" + mmdd.substr(8,2) + " 23:59:59");
	}

	var month	= now.getMonth() + 1;
	if (month < 10) {
		month = "0" + month
	}

	var day		= now.getDate();
	if (day < 10) {
		day = "0" + day;
	}


	//残り日数(背景)
	var day0214	= new Date("2012/02/14 23:59:59");
	var nokori = day0214 - now;
	var nokori_day =  Math.floor(nokori / (24 * 60 * 60 * 1000))

	//背景画像・残り日数
	if (nokori_day <= 0) {
		//当日
		$("#countdown").css('background-image', 'url(' + image_path + 'countdown0214.gif)');
	}
	else {
		//当日以外
		$("#countdown").css('background-image', 'url(' + image_path + 'countdown.gif)');

		if (nokori_day < 10) {
			nokori_day = "0" + nokori_day
		}
		$("#countdown_day").append('<img src="' + image_path + '' + nokori_day + '.gif" />');
	}

	//だんどり
	$("#countdown_dandori").append('<img src="' + image_path + 'dandori' + month + day + '.gif" />');

	//最初のメッセージ表示
	var message_num = Math.floor(Math.random() * message_max) + 1;
	if (message_num < 10) {
		message_num = "0" + message_num;
	}
	$("#countdown_message").append('<img src="' + image_path + 'message' + message_num + '.gif" />');
	setTimeout(show_message, message_time * 1000);

	//メッセージの表示
	function show_message() {
		var wk_message_num;
		do {
			wk_message_num = Math.floor(Math.random() * message_max) + 1;
			if (wk_message_num < 10) {
				wk_message_num = "0" + wk_message_num;
			}
		} while (wk_message_num == message_num);

		message_num = wk_message_num;

		$("#countdown_message img").fadeOut('normal', function(){
			$("#countdown_message img").attr('src', image_path + 'message' + message_num + '.gif');
			$("#countdown_message img").fadeIn('normal', function(){
				setTimeout(show_message, message_time * 1000);
			});
		});
	};

});
